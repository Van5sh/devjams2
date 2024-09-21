"use client";

import { useEffect, useState, useRef } from 'react';
import io, { Socket } from 'socket.io-client';

const Home = () => {
  const [clickCount, setClickCount] = useState(0);
  const [textInputValue, setTextInputValue] = useState('');
  const socket = useRef<Socket | null>(null);

  useEffect(() => {
    console.log("Attempting to connect to WebSocket...");

    socket.current = io({
      path: '/api/socket',
    });

    socket.current.on('update-click-count', (count: number) => {
      console.log('Received update-click-count:', count);
      setClickCount(count);
    });

    socket.current.on('update-text-input', (value: string) => {
      console.log('Received update-text-input:', value);
      setTextInputValue(value);
    });

    return () => {
      if (socket.current) {
        socket.current.disconnect();
        console.log('Socket disconnected');
      }
    };
  }, []);

  const handleClick = () => {
    if (socket.current) {
      console.log('Sending increment-click event to server');
      socket.current.emit('increment-click');
    }
  };

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTextInputValue(value);
    if (socket.current) {
      socket.current.emit('update-text-input', value); 
    }
  };

      return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <button onClick={handleClick} style={{ fontSize: '20px', padding: '10px 20px', color: 'red' }}>
        Click me!
      </button>
      <h1>Clicked {clickCount} times</h1>

      <input
        type="text"
        value={textInputValue}
        onChange={handleTextInputChange}
        placeholder="Type something..."
        style={{ marginTop: '20px', padding: '10px', fontSize: '18px' }}
      />
      <p>Text input value: {textInputValue}</p>
    </div>
  );
};

export default Home;