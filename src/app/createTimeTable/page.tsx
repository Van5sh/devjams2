'use client';
import { useState } from "react";

const Home1 = () => {
  const [name, setName] = useState('');
  const [slots, setSlots] = useState('{}');
  const [teamId, setTeamId] = useState('');
  const [userId, setUserId] = useState('');
  const [data, setData] = useState('{}');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Make a POST request to the API route /api/createTimeTable
      const response = await fetch('/api/createTimeTable', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          slots: JSON.parse(slots),
          teamId,
          userId,
          data: JSON.parse(data),
        }),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMessage(`Timetable created successfully! ID: ${result.data.id}`);
      } else {
        setResponseMessage(`Failed to create timetable: ${result.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create TimeTable');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Timetable Name"
          required
        />
        <input
          type="text"
          value={slots}
          onChange={(e) => setSlots(e.target.value)}
          placeholder="Slots (JSON)"
          required
        />
        <input
          type="text"
          value={teamId}
          onChange={(e) => setTeamId(e.target.value)}
          placeholder="Team ID"
          required
        />
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
          required
        />
        <input
          type="text"
          value={data}
          onChange={(e) => setData(e.target.value)}
          placeholder="Additional Data (JSON)"
          required
        />
        <button type="submit">Create TimeTable</button>
      </form>

      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default Home1;
