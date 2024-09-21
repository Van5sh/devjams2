// components/UserForm.tsx
'use client';
import { useState } from 'react';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [googleId, setGoogleId] = useState('');
  const [teamId, setTeamId] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password, googleId, teamId }),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage(`User created successfully! ID: ${result.data.id}`);
      } else {
        setResponseMessage(`Failed to create user: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <input
        type="text"
        value={googleId}
        onChange={(e) => setGoogleId(e.target.value)}
        placeholder="Google ID (optional)"
      />
      <input
        type="text"
        value={teamId}
        onChange={(e) => setTeamId(e.target.value)}
        placeholder="Team ID (optional)"
      />
      <button type="submit">Create User</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
};

export default UserForm;
