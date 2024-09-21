// pages/create/index.tsx
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createTimeTable } from '../pages/api/createTimeTable/createTimeTable';
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import DarkModeToggle from "../components/darkmodetoggle";
import Link from 'next/link';

export default function CreateTimeTable() {
  const [name, setName] = useState('');
  const [slots, setSlots] = useState('{}');
  const [teamId, setTeamId] = useState('');
  const [userId, setUserId] = useState('');
  const [data, setData] = useState('{}');
  const [responseMessage, setResponseMessage] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await createTimeTable(name, JSON.parse(slots), teamId, userId, JSON.parse(data));
  
      if (response.success) {
        setResponseMessage(`Timetable created successfully! ID: ${response.data.id}`);
        // Redirect to the timetable page with the ID as a query parameter
        router.push(`/timetable?id=${response.data.id}`);
      } else {
        setResponseMessage(`Failed to create timetable: ${response.error}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to create TimeTable');
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white dark:bg-gray-900">
      <Navbar />
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
      <main className="flex-grow flex flex-col relative z-10">
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 bg-transparent relative">
          <div className="text-center flex flex-col items-center justify-center w-full md:w-1/2 p-6 space-y-6 relative z-10">
            <h2 className="text-2xl md:text-5xl font-bold text-purple-500 dark:text-purple-300">
              Create New TimeTable
            </h2>
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 dark:text-gray-300 p-8 rounded-lg shadow-lg w-full max-w-lg"
            >
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600 dark:text-gray-300 mb-2">
                  Name:
                </label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="slots" className="block text-gray-600 dark:text-gray-300 mb-2">
                  Slots (JSON):
                </label>
                <input
                  id="slots"
                  type="text"
                  value={slots}
                  onChange={(e) => setSlots(e.target.value)}
                  placeholder='{"slot1": "value"}'
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="teamId" className="block text-gray-600 dark:text-gray-300 mb-2">
                  Team ID:
                </label>
                <input
                  id="teamId"
                  type="text"
                  value={teamId}
                  onChange={(e) => setTeamId(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="userId" className="block text-gray-600 dark:text-gray-300 mb-2">
                  User ID:
                </label>
                <input
                  id="userId"
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-500"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="data" className="block text-gray-600 dark:text-gray-300 mb-2">
                  Data (JSON):
                </label>
                <input
                  id="data"
                  type="text"
                  value={data}
                  onChange={(e) => setData(e.target.value)}
                  placeholder='{"key": "value"}'
                  required
                  className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-purple-500"
                />
              </div>
              <Link href="/timetable">
                <button className="w-full bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 dark:bg-gray-700 dark:hover:bg-gray-600">
                  Create TimeTable
                </button>
              </Link>
              {responseMessage && (
                <p className="mt-4 text-center text-gray-700 dark:text-gray-300">
                  {responseMessage}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
