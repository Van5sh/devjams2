'use client';

import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import AccordionList from "@/app/components/accordinlist";

const Main1 = () => {

  
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <header className="bg-transparent">
        <Navbar />
      </header>

      <main className="flex-grow flex flex-col overflow-y-auto">
        <ul className="flex-grow flex flex-col">
          <li className="min-h-screen flex items-center justify-center px-4 bg-gray-700">
            <div className="w-full">
              <div className="flex flex-col md:flex-row justify-center items-center w-full mx-auto p-4 space-y-4 md:space-y-0 md:space-x-4">
                  <div className="flex flex-col justify-center items-center w-full mx-auto p-4 space-y-4 md:space-y-0 md:space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
                  Create a Team
                </button>
                </div>
                <div>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded">
                  Join a Team
                </button>
                </div>
              </div>
            </div>
          </li>

          <li className="min-h-screen flex flex-col items-center justify-center px-4 bg-gray-600">
            <div className="text-center h-[50vh]  flex flex-col items-center justify-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 basis-1/2">Your team</h1>

            </div>

            <div className=" min-w-screen h-[50vh]">
              <AccordionList />
            </div>
          </li>

          
        </ul>
      </main>

      <footer className="bg-gray-900 py-4">
        <Footer/>
      </footer>
    </div>
  );
};

export default Main1;