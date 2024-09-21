'use client';
import React, { useState, useEffect } from 'react';

interface CourseData {
  id: string;
  slots: string;
  faculty: string;
  venue?: string;
  credits?: string;
}

const Grid: React.FC = () => {
  const [cellColors, setCellColors] = useState<{ [key: string]: string }>({});
  const [slotInput, setSlotInput] = useState('');
  const [facultyInput, setFacultyInput] = useState('');
  const [venueInput, setVenueInput] = useState('');
  const [creditsInput, setCreditsInput] = useState('');
  const [courses, setCourses] = useState<CourseData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const color = "#88D66C";

  const timetableData = [
    ['Theory', '08:00 to 08:50', '09:00 to 09:50', '10:00 to 10:50', '11:00 to 11:50', '12:00 to 12:50', '-', 'LUNCH', '14:00 to 14:50', '15:00 to 15:50', '16:00 to 16:50', '17:00 to 17:50', '18:00 to 18:50', '18:51 to 19:00', '19:01 to 19:50'],
    ['Lab', '08:00 to 08:50', '08:51 to 09:40', '09:51 to 10:40', '10:41 to 11:30', '11:40 to 12:30', '12:31 to 13:20', 'LUNCH', '14:00 to 14:50', '14:51 to 15:40', '15:51 to 16:40', '16:41 to 17:30', '17:40 to 18:30', '18:31 to 19:20', '-'],
    ['MON', 'A1 / L1', 'F1 / L2', 'D1 / L3', 'TB1 / L4', 'TG1 / L5', 'L6', 'LUNCH', 'A2 / L31', 'F2 / L32', 'D2 / L33', 'TB2 / L34', 'TG2 / L35', 'L36', 'V3'],
    ['TUE', 'B1 / L7', 'G1 / L8', 'E1 / L9', 'TC1 / L10', 'TAA1 / L11', 'L12', 'LUNCH', 'B2 / L37', 'G2 / L38', 'E2 / L39', 'TC2 / L40', 'TAA2 / L41', 'L42', 'V4'],
    ['WED', 'C1 / L13', 'A1 / L14', 'F1 / L15', 'V1 / L16', 'V2 / L17', 'L18', 'LUNCH', 'C2 / L43', 'A2 / L44', 'F2 / L45', 'TD2 / L46', 'TBB2 / L47', 'L48', 'V5'],
    ['THU', 'D1 / L19', 'B1 / L20', 'G1 / L21', 'TE1 / L22', 'TCC1 / L23', 'L24', 'LUNCH', 'D2 / L49', 'B2 / L50', 'G2 / L51', 'TE2 / L52', 'TCC2 / L53', 'L54', 'V6'],
    ['FRI', 'E1 / L25', 'C1 / L26', 'TA1 / L27', 'TF1 / L28', 'TD1 / L29', 'L30', 'LUNCH', 'E2 / L55', 'C2 / L56', 'TA2 / L57', 'TF2 / L58', 'TDD2 / L59', 'L60', 'V7']
  ];

  const getCellStyle = (rowIndex: number, colIndex: number) => {
    if (rowIndex < 2 || colIndex === 0 || colIndex === 7) return {};
    const cellKey = `${rowIndex}-${colIndex}`;
    return {
      backgroundColor: cellColors[cellKey] || '',
      transition: 'background-color 0.3s',
    };
  };

  const validateSlot = (slot: string): boolean => {
    return timetableData.slice(2).some(row => 
      row.slice(1).some(cell => cell.split(' / ').includes(slot))
    );
  };

  const isTheorySlot = (slot: string): boolean => {
    return /^[A-Z]+\d+$/.test(slot) && !slot.startsWith('L');
  };

  const isLabSlot = (slot: string): boolean => {
    return /^L\d+$/.test(slot);
  };

  const areConsecutiveLabSlots = (slots: string[]): boolean => {
    if (slots.length !== 2 && slots.length !== 4) return false;
    
    const labNumbers = slots.map(slot => parseInt(slot.substring(1)));
    labNumbers.sort((a, b) => a - b);

    if (slots.length === 2) {
      return labNumbers[1] - labNumbers[0] === 1;
    } else {
      return labNumbers[1] - labNumbers[0] === 1 && labNumbers[3] - labNumbers[2] === 1;
    }
  };

  const areLabSlotsOnSameDay = (slots: string[]): boolean => {
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
    const slotDays = slots.map(slot => {
      for (let i = 2; i < timetableData.length; i++) {
        if (timetableData[i].slice(1).some(cell => cell.split(' / ').includes(slot))) {
          return days[i - 2];
        }
      }
      return null;
    });
    return new Set(slotDays).size === 1;
  };

  const validateSlotCombination = (slots: string[]): string | null => {
    const theorySlots = slots.filter(isTheorySlot);
    const labSlots = slots.filter(isLabSlot);

    if (theorySlots.length > 0 && labSlots.length > 0) {
      return "Theory and lab slots cannot be selected together";
    }

    if (theorySlots.length > 0) {
      const lastLetters = new Set(theorySlots.map(slot => slot[slot.length - 2]));
      if (lastLetters.size !== 1) {
        return "Theory slots must have the same last letter";
      }
    }

    if (labSlots.length > 0) {
      if (labSlots.length !== 2 && labSlots.length !== 4) {
        return "Lab slots must be either 2 or 4 slots together";
      }
      if (!areConsecutiveLabSlots(labSlots)) {
        return "Lab slots must be continuous";
      }
      if (!areLabSlotsOnSameDay(labSlots)) {
        return "Lab slots must be on the same day";
      }
    }

    return null;
  };

  const checkSlotClash = (newSlots: string[]) => {
    const allOccupiedSlots = courses.flatMap(course => course.slots.split('+'));
    
    for (const newSlot of newSlots) {
      if (!validateSlot(newSlot)) {
        return `Slot ${newSlot} does not exist in the timetable`;
      }

      if (allOccupiedSlots.includes(newSlot)) {
        return `Slot ${newSlot} clashes with an existing course`;
      }

      const clashingSlot = allOccupiedSlots.find(existingSlot => {
        return timetableData.slice(2).some(row => 
          row.slice(1).some(cell => {
            const cellSlots = cell.split(' / ');
            return cellSlots.includes(newSlot) && cellSlots.includes(existingSlot);
          })
        );
      });

      if (clashingSlot) {
        return `Slot ${newSlot} clashes with existing slot ${clashingSlot} in the same cell`;
      }
    }

    const combinationError = validateSlotCombination(newSlots);
    if (combinationError) {
      return combinationError;
    }

    return null;
  };

  const handleSubmit = () => {
    if (!slotInput || !facultyInput) {
      setError("Slots and Faculty Name are required!");
      return;
    }

    const newSlots = slotInput.toUpperCase().split('+').map(slot => slot.trim());
    const clashError = checkSlotClash(newSlots);
    
    if (clashError) {
      setError(clashError);
      return;
    }

    const slots = newSlots.join('+');
    const newCourse: CourseData = {
      id: Date.now().toString(),
      slots,
      faculty: facultyInput,
      venue: venueInput || undefined,
      credits: creditsInput || undefined,
    };

    setCourses(prevCourses => [...prevCourses, newCourse]);
    updateCellColors(newSlots, color);

    // Clear input fields
    setSlotInput('');
    setFacultyInput('');
    setVenueInput('');
    setCreditsInput('');
  };

  const updateCellColors = (slots: string[], color: string) => {
    timetableData.forEach((row, rowIndex) => {
      if (rowIndex >= 2) {
        row.forEach((cell, colIndex) => {
          if (colIndex > 0 && colIndex !== 7) {
            const cellSlots = cell.split(' / ');
            if (slots.some(slot => cellSlots.includes(slot))) {
              const cellKey = `${rowIndex}-${colIndex}`;
              setCellColors(prev => ({ ...prev, [cellKey]: color }));
            }
          }
        });
      }
    });
  };

  const handleDeleteCourse = (courseId: string) => {
    const courseToDelete = courses.find(course => course.id === courseId);
    if (courseToDelete) {
      const slotsToRemove = courseToDelete.slots.split('+');
      updateCellColors(slotsToRemove, '');
      setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="container mx-auto px-4 py-8 text-black relative">
      <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <input
          type="text"
          value={slotInput}
          onChange={(e) => setSlotInput(e.target.value)}
          placeholder='Enter slots (e.g., A1+TA1 or L33+L44)'
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={facultyInput}
          onChange={(e) => setFacultyInput(e.target.value)}
          placeholder='Faculty Name'
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={venueInput}
          onChange={(e) => setVenueInput(e.target.value)}
          placeholder='Venue (optional)'
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={creditsInput}
          onChange={(e) => setCreditsInput(e.target.value)}
          placeholder='Credits (optional)'
          className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mb-4 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700"
      >
        Add Course
      </button>
      <div className="overflow-x-auto shadow-lg rounded-lg mb-8">
        <table className="w-full table-auto border-collapse bg-white text-sm">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2 font-semibold text-gray-700">Hours</th>
              {[...Array(14)].map((_, i) => (
                <th key={i} className="border p-2 font-semibold text-gray-700">
                  {i === 6 ? 'Lunch' : `${(8 + Math.floor(i / 2) + (i % 2 ? 0.5 : 0)).toFixed(2)} ${i < 4 ? 'AM' : 'PM'}`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetableData.map((row, rowIndex) => (
              <tr key={row[0]} className={rowIndex % 2 === 0 ? 'bg-gray-50' : ''}>
                {row.map((cell, colIndex) => (
                  <td 
                    key={colIndex} 
                    className={`border p-2 text-center ${
                      (rowIndex < 2 || colIndex === 0) ? 'font-semibold text-gray-700' : ''
                    }`}
                    style={getCellStyle(rowIndex, colIndex)}
                  >
                    {cell === 'LUNCH' ? (
                      <div className="bg-gray-200 h-full flex items-center justify-center">
                        <span className="transform">{cell}</span>
                      </div>
                    ) : cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <h3 className="font-semibold mb-2">Courses:</h3>
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse bg-white text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2 font-semibold text-gray-700">Slots</th>
                <th className="border p-2 font-semibold text-gray-700">Faculty</th>
                <th className="border p-2 font-semibold text-gray-700">Venue</th>
                <th className="border p-2 font-semibold text-gray-700">Credits</th>
                <th className="border p-2 font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id} className="hover:bg-gray-50">
                  <td className="border p-2">{course.slots}</td>
                  <td className="border p-2">{course.faculty}</td>
                  <td className="border p-2">{course.venue || '-'}</td>
                  <td className="border p-2">{course.credits || '-'}</td>
                  <td className="border p-2">
                    <button
                      onClick={() => handleDeleteCourse(course.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-md shadow-lg animate-fade-in-out">
          {error}
        </div>
      )}
    </div>
  );
};

export default Grid;