'use client'

import React from 'react';
import AccordionItem from './accordin';  // Make sure this import path is correct

interface Team {
  id: string;
  name: string;
}

interface TeamCategory {
  title: string;
  teams: Team[];
}

const AccordionList: React.FC = () => {
  const teamCategories: TeamCategory[] = [
    {
      title: "Professional Teams",
      teams: [
        { id: "1", name: "Red Dragons" },
        { id: "2", name: "Blue Sharks" },
        { id: "3", name: "Green Pythons" },
      ]
    },
    {
      title: "Amateur Teams",
      teams: [
        { id: "4", name: "Golden Eagles" },
        { id: "5", name: "Silver Foxes" },
        { id: "6", name: "Bronze Bears" },
      ]
    },
    {
      title: "Youth Teams",
      teams: [
        { id: "7", name: "Little Lions" },
        { id: "8", name: "Junior Jaguars" },
        { id: "9", name: "Mini Mustangs" },
      ]
    }
  ];

  const handleTeamClick = (teamId: string) => {
    console.log(`Team clicked: ${teamId}`);

  };

  return (
    <div className="w-full mx-auto bg-gray-800 rounded-lg overflow-hidden">
      {teamCategories.map((category, index) => (
        <AccordionItem 
          key={index} 
          title={category.title} 
          teams={category.teams}
          onTeamClick={handleTeamClick}
        />
      ))}
    </div>
  );
};

export default AccordionList;