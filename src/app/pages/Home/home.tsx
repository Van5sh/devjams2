import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
const Home1 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <header className="bg-transparent">
        <Navbar />
      </header>

      <main className="flex-grow flex flex-col overflow-y-auto">
        <ul className="flex-grow">
          <li className="min-h-screen flex flex row flex items-center justify-center px-4 bg-gray-700">
            <div className="text-center flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 basis-1/2">
                Welcome to <br />
                FFCS Colab
              </h1>
              <p className="text-lg">
                Streamline your course selection process at VIT
              </p>
            </div>
            <div className="text-center w-[50vw]">
              <h1>
                This is working 
              </h1>
            </div>
          </li>

          <li className="min-h-screen flex items-center justify-center px-4 bg-gray-600">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Features
              </h2>
              <ul className="list-disc list-inside text-left">
                <li className="text-lg mb-2">Interactive timetable planner</li>
                <li className="text-lg mb-2">Course recommendation system</li>
                <li className="text-lg mb-2">Peer collaboration tools</li>
                <li className="text-lg">Real-time slot availability updates</li>
              </ul>
            </div>
          </li>

          <li className="min-h-screen flex items-center justify-center px-4 bg-gray-700">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Get Started
              </h2>
              <p className="text-lg mb-4">
                Join FFCS Colab today and make your course registration a breeze!
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Sign Up Now
              </button>
            </div>
          </li>
        </ul>
      </main>

      <footer className="bg-gray-900 py-4 ">
        <Footer/>
      </footer>
    </div>
  );
};

export default Home1;