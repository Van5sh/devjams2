'use client'

import React, { useState } from 'react';

interface Team {
  id: string;
  name: string;
}

interface AccordionItemProps {
  title: string;
  teams: Team[];
  onTeamClick: (teamId: string) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, teams, onTeamClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-white last:border-b-0">
      <button
        className="w-full p-4 text-left bg-gray-700 hover:bg-gray-600 transition-all duration-300 flex justify-between items-center text-white font-medium"
        onClick={toggleOpen}
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && (
        <div className="p-4 bg-gray-800">
          <ul className="space-y-3">
            {teams.map((team) => (
              <li key={team.id}>
                <button
                  onClick={() => onTeamClick(team.id)}
                  className="w-full px-4 py-2 text-left rounded-md text-white font-medium bg-gray-700 hover:bg-gray-600 transition-all duration-300"
                >
                  {team.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AccordionItem;
