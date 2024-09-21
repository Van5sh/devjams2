import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Card from "@/app/components/card";

const Home1 = () => {
  return (
      <div className="min-h-screen flex flex-col bg-gradient-to-r from-gray-700 via-gray-600 to-gray-500 text-white">
        <header>
          <Navbar />
        </header>

        <main className="flex-grow flex flex-col">
          <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 bg-transparent">            
            <div className="text-center flex flex-col items-center justify-center w-full md:w-1/2 p-6">
              <h1 className="text-5xl md:text-7xl text-purple-600 font-extrabold mb-6 tracking-wide leading-tight animate-fadeIn">
                Welcome to <br />
                <span className="text-6xl text-purple-400">FFCS Colab</span>
              </h1>
              <p className="text-lg md:text-xl text-white font-bold max-w-lg mx-auto mb-8">
                Streamline your course selection process at VIT and take control of your academic journey.
              </p>
              <button className="bg-blue-700 hover:bg-blue-800 transition-all duration-300 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>            
            <div className="flex justify-center md:w-1/2 mt-6 md:mt-0">
              <Image
                src="/image.png"
                alt="Logo"
                width={200}
                height={140}  
                className="md:w-[200px] md:h-[140px]"
              />
            </div>
          </section>

          <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-transparent w-full">
            <div className="w-full h-2 bg-gradient-to-r from-purple-500 via-purple-300 to-blue-100 my-6" />
            <div className="text-center mb-12">
              <h2 className="text-purple-400 md:text-6xl font-bold mb-7">FEATURES</h2>
              <p className="text-lg md:text-xl font-light max-w-2xl mx-auto">
                Everything you need to make your academic life easier.
              </p>
            </div>
            <div
                className="flex flex-row overflow-x-auto gap-4 snap-x snap-mandatory no-scrollbar px-4"
                style={{ scrollbarWidth: "none" }}
            >
              <Card
                  header="Easy Registration"
                  message="Simplify your course registration process with our intuitive interface. FFCS Colab guides you through each step, ensuring a smooth and error-free registration experience. Say goodbye to the stress of course selection!"
              />
              <Card
                  header="Schedule Planner"
                  message="Our advanced Schedule Planner helps you create the perfect timetable. Visualize different course combinations, avoid conflicts, and optimize your daily schedule. Balance your workload and free time with ease."
              />
              <Card
                  header="Course Recommendations"
                  message="Get personalized course suggestions based on your academic history, interests, and career goals. Our AI-powered system analyzes your profile to recommend courses that align with your aspirations and enhance your skill set."
              />
              <Card
                  header="Real-time Updates"
                  message="Stay informed with instant notifications about course availability, registration deadlines, and important announcements. FFCS Colab keeps you in the loop throughout your academic journey."
              />
            </div>
            <div className="w-full h-2 bg-gradient-to-r from-purple-500 via-purple-300 to-blue-100 my-6" />
          </section>

          <section className="min-h-screen flex items-center justify-center px-4 bg-transparent">
            <div className="text-center max-w-lg mx-auto p-6">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">Get Started</h2>
              <p className="text-lg md:text-xl font-light mb-8">
                Join FFCS Colab today and make your course registration a breeze!
              </p>
              <button className="bg-purple-700 hover:bg-blue-400 transition-all duration-300 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105">
                Sign Up Now
              </button>
            </div>
          </section>
        </main>
        <footer >
          <Footer />
        </footer>
      </div>
  );
};

export default Home1;
