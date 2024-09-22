'use client';
import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Link from "next/link";

const main = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Navbar */}
      <header className="absolute top-0 w-full z-20">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center text-center space-y-8 relative z-10 px-6">
        {/* Welcome Text */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white">
          Welcome to <span className="text-purple-500">FFCS Colab</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl">
          Streamline your course selection process at VIT and collaborate with your team effortlessly.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
          <Link href="/createTimeTable">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-full shadow-lg">
              Create a Team
            </button>
          </Link>
          <Link href="/timetable">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-lg">
              Join a Team
            </button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative bottom-0 w-full bg-gray-900 text-white py-6">
        <Footer />
      </footer>
    </div>
  );
};

export default main;
