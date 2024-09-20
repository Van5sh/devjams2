'use client';
import React, { useState } from 'react';

interface SlotData {
  [key: string]: string[];
}

const Grid: React.FC = () => {
  const [cellColors, setCellColors] = useState<{ [key: string]: string }>({});
  const [slotInput, setSlotInput] = useState('');
  const [selectedSlots, setSelectedSlots] = useState<SlotData>({});

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    if (rowIndex < 2 || colIndex === 0 || colIndex === 7) return; // Ignore non-slot cells
  
    const day = timetableData[rowIndex][0];
    const slot = timetableData[rowIndex][colIndex].split(' / ')[0];

    const cellKey = `${rowIndex}-${colIndex}`;
    setCellColors(prevColors => {
        const newColors = { ...prevColors };
        if (prevColors[cellKey]) {
          delete newColors[cellKey];
        } else {
          newColors[cellKey] = color;
        }
        return newColors;
      });
  
    // Update selectedSlots
    setSelectedSlots(prevSlots => {
      const newSlots = { ...prevSlots };
      if (!newSlots[day]) {
        newSlots[day] = [];
      }
      if (!newSlots[day].includes(slot)) {
        newSlots[day].push(slot);
      } return newSlots;
    });
  
    // Log only the newly selected slot and day (if applicable)
  };
  const color = "#88D66C";

  const getCellStyle = (rowIndex: number, colIndex: number) => {
    if (rowIndex < 2 || colIndex === 0 || colIndex === 7) return {}; // No style for non-slot cells
    const cellKey = `${rowIndex}-${colIndex}`;
    return {
      backgroundColor: cellColors[cellKey] || '',
      transition: 'background-color 0.3s',
    };
  };

  const timetableData = [
    ['Theory', '08:00 to 08:50', '09:00 to 09:50', '10:00 to 10:50', '11:00 to 11:50', '12:00 to 12:50', '-', 'LUNCH', '14:00 to 14:50', '15:00 to 15:50', '16:00 to 16:50', '17:00 to 17:50', '18:00 to 18:50', '18:51 to 19:00', '19:01 to 19:50'],
    ['Lab', '08:00 to 08:50', '08:51 to 09:40', '09:51 to 10:40', '10:41 to 11:30', '11:40 to 12:30', '12:31 to 13:20', 'LUNCH', '14:00 to 14:50', '14:51 to 15:40', '15:51 to 16:40', '16:41 to 17:30', '17:40 to 18:30', '18:31 to 19:20', '-'],
    ['MON', 'A1 / L1', 'F1 / L2', 'D1 / L3', 'TB1 / L4', 'TG1 / L5', 'L6', 'LUNCH', 'A2 / L31', 'F2 / L32', 'D2 / L33', 'TB2 / L34', 'TG2 / L35', 'L36', 'V3'],
    ['TUE', 'B1 / L7', 'G1 / L8', 'E1 / L9', 'TC1 / L10', 'TAA1 / L11', 'L12', 'LUNCH', 'B2 / L37', 'G2 / L38', 'E2 / L39', 'TC2 / L40', 'TAA2 / L41', 'L42', 'V4'],
    ['WED', 'C1 / L13', 'A1 / L14', 'F1 / L15', 'V1 / L16', 'V2 / L17', 'L18', 'LUNCH', 'C2 / L43', 'A2 / L44', 'F2 / L45', 'TD2 / L46', 'TBB2 / L47', 'L48', 'V5'],
    ['THU', 'D1 / L19', 'B1 / L20', 'G1 / L21', 'TE1 / L22', 'TCC1 / L23', 'L24', 'LUNCH', 'D2 / L49', 'B2 / L50', 'G2 / L51', 'TE2 / L52', 'TCC2 / L53', 'L54', 'V6'],
    ['FRI', 'E1 / L25', 'C1 / L26', 'TA1 / L27', 'TF1 / L28', 'TD1 / L29', 'L30', 'LUNCH', 'E2 / L55', 'C2 / L56', 'TA2 / L57', 'TF2 / L58', 'TDD2 / L59', 'L60', 'V7']
  ];

  const handleSubmit = () => {
    try {
      const slots: SlotData = JSON.parse(slotInput);
      setCellColors({});
      setSelectedSlots({});

      Object.entries(slots).forEach(([day, daySlots]) => {
        const rowIndex = timetableData.findIndex(row => row[0] === day.toUpperCase());
        if (rowIndex > 1) {
          daySlots.forEach(slot => {
            const colIndex = timetableData[rowIndex].findIndex(cell => cell.split(' / ')[0] === slot);
            if (colIndex > 0 && colIndex !== 7) {
              const cellKey = `${rowIndex}-${colIndex}`;
              setCellColors(prev => ({ ...prev, [cellKey]: color }));
              setSelectedSlots(prev => {
                const newSlots = { ...prev };
                if (!newSlots[day]) {
                  newSlots[day] = [];
                }
                if (!newSlots[day].includes(slot)) {
                  newSlots[day].push(slot);
                }
                return newSlots;
              });
            }
          });
        }
      });
    } catch (error) {
      console.error('Invalid JSON input:', error);
      alert('Please enter valid JSON input.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 text-black">
      <div className="mb-4 flex">
        <textarea
          value={slotInput}
          onChange={(e) => setSlotInput(e.target.value)}
          placeholder='Enter slots JSON (e.g., {"MON": ["A1", "F1"], "TUE": ["B1", "G1"]})'
          className="flex-grow p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={3}
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-700"
        >
          Submit
        </button>
      </div>
      <div className="overflow-x-auto shadow-lg rounded-lg">
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
                      rowIndex >= 2 && colIndex > 0 && colIndex !== 7 ? 'cursor-pointer hover:bg-gray-100' : 
                      (rowIndex < 2 || colIndex === 0) ? 'font-semibold text-gray-700' : ''
                    }`}
                    style={getCellStyle(rowIndex, colIndex)}
                    onClick={() => handleCellClick(rowIndex, colIndex)}
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
        <h3 className="font-semibold">Selected Slots (JSON):</h3>
        <pre className="bg-gray-100 p-2 rounded mt-2 overflow-x-auto">
          {JSON.stringify(selectedSlots, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Grid;