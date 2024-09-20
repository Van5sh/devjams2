import { NextApiRequest, NextApiResponse } from 'next';
import { Server as IOServer } from 'socket.io';
import { Server as HttpServer } from 'http';

let clickCount = 0;
let textInputValue = ''; 

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

      socket.emit('update-click-count', clickCount);
      socket.emit('update-text-input', textInputValue);

      socket.on('increment-click', () => {
        clickCount++;
        io.emit('update-click-count', clickCount); 
      });

      socket.on('update-text-input', (value: string) => {
        textInputValue = value;
        io.emit('update-text-input', textInputValue); 
      });

      socket.on('disconnect', () => {
        console.log('Client disconnected', socket.id);
      });
    });

    res.socket.server.io = io;
    console.log('Socket.io server started');
  } else {
    console.log('Socket.io server already running');
  }

  res.end();
}
