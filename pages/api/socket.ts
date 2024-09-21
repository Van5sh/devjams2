import { NextApiRequest, NextApiResponse } from 'next';
import { Server as IOServer } from 'socket.io';
import { Server as HttpServer } from 'http';

const textInputs: { [key: string]: string } = {
  SlotInput: '',
  FacultyInput: '',
  VenueInput: '',
  CreditsInput: ''
};

interface CursorPosition {
  x: number;
  y: number;
}

interface UserCursor extends CursorPosition {
  color: string;
}

const userCursors: { [socketId: string]: UserCursor } = {};
let isSyncEnabled = true;

const getRandomColor = () => {
  return `#${Math.floor(Math.random()*16777215).toString(16)}`;
};

export type NextApiResponseServerIO = NextApiResponse & {
  socket: {
    server: HttpServer & {
      io?: IOServer;
    };
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (!res.socket.server.io) {
    const httpServer: HttpServer = res.socket.server as any;
    const io = new IOServer(httpServer, {
      path: '/api/socket',    
    });

    io.on('connection', (socket) => {
      console.log('New client connected', socket.id);
      
      const userColor = getRandomColor();
      userCursors[socket.id] = { x: 0, y: 0, color: userColor };

      socket.emit('sync-all-text-inputs', textInputs);
      socket.emit('toggle-sync', isSyncEnabled);
      
      socket.emit('sync-cursors', userCursors);
      socket.broadcast.emit('cursor-update', { id: socket.id, ...userCursors[socket.id] });

      socket.on('update-text-input', ({ id, value }: { id: string, value: string }) => {
        if (isSyncEnabled) {
          textInputs[id] = value;
          io.emit('update-text-input', { id, value });
        }
      });

      socket.on('toggle-sync', (syncState: boolean) => {
        isSyncEnabled = syncState;
        io.emit('toggle-sync', isSyncEnabled);
      });

      socket.on('button-press', (courseData: any) => {
        io.emit('add-course', courseData);
        for (const key in textInputs) {
          textInputs[key] = '';
        }
        io.emit('clear-inputs');
      });

      socket.on('delete-course', (courseId: string) => {
        io.emit('delete-course', courseId);
      });

      socket.on('cursor-move', (position: CursorPosition) => {
        userCursors[socket.id] = { ...position, color: userCursors[socket.id].color };
        socket.broadcast.emit('cursor-update', { id: socket.id, ...userCursors[socket.id] });
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
        delete userCursors[socket.id];
        io.emit('cursor-remove', socket.id);
      });
    });

    res.socket.server.io = io;
    console.log('Socket.io server started');
  } else {
    console.log('Socket.io server already running');
  }
  res.end();
} 