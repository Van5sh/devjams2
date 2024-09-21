import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Image from "next/image";
import Card from "@/app/components/card";

const Home1 = () => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
      <header className="relative z-20">
        <Navbar />
      </header>

      <main className="flex-grow flex flex-col relative z-10">
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 bg-transparent">
          <div className="text-center flex flex-col items-center justify-center w-full md:w-1/2 p-6 space-y-6">
            <h1 className="text-5xl md:text-7xl text-purple-500 font-extrabold tracking-tight leading-tight animate-fadeIn">
              Welcome to <br />
              <span className="text-6xl text-purple-400">FFCS Colab</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-medium max-w-lg mx-auto leading-relaxed">
              Streamline your course selection process at VIT and take control of your academic journey.
            </p>
            <button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-2xl hover:scale-105">
              Get Started
            </button>
          </div>
          <div className="flex justify-center md:w-1/2 mt-6 md:mt-0">
            <Image
              src="/image.png"
              alt="Logo"
              width={320}
              height={220}
              className="md:w-[320px] md:h-[220px] shadow-xl rounded-lg"
            />
          </div>
        </section>
        <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-transparent w-full">
          <div className="text-center mb-12">
            <h2 className="text-purple-400 text-5xl md:text-6xl font-bold mb-7">Features</h2>
            <p className="text-lg md:text-xl font-light max-w-2xl mx-auto text-gray-400">
              Everything you need to make your academic life easier.
            </p>
          </div>
          <div
            className="flex flex-row overflow-x-auto gap-6 snap-x snap-mandatory no-scrollbar px-4"
            style={{ scrollbarWidth: "none" }}
          >
            <Card
              header="Easy Registration"
              message="Simplify your course registration process with our intuitive interface. FFCS Colab guides you through each step, ensuring a smooth and error-free registration experience."
            />
            <Card
              header="Schedule Planner"
              message="Our advanced Schedule Planner helps you create the perfect timetable. Visualize different course combinations, avoid conflicts, and optimize your daily schedule."
            />
            <Card
              header="Course Recommendations"
              message="Get personalized course suggestions based on your academic history, interests, and career goals. Our AI-powered system recommends courses aligned with your aspirations."
            />
            <Card
              header="Real-time Updates"
              message="Stay informed with instant notifications about course availability, registration deadlines, and important announcements. FFCS Colab keeps you in the loop throughout your academic journey."
            />
          </div>
          <div className="w-full h-2 bg-gradient-to-r from-purple-500 via-purple-300 to-blue-100 my-6" />
        </section>

        {/* Get Started Section */}
        <section className="min-h-screen flex items-center justify-center px-4 bg-transparent">
          <div className="text-center max-w-lg mx-auto p-6 space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-300">Get Started</h2>
            <p className="text-lg md:text-xl font-light text-gray-400">
              Join FFCS Colab today and make your course registration a breeze!
            </p>
            <button className="bg-purple-700 hover:bg-purple-800 transition-all duration-300 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105">
              Sign Up Now
            </button>
          </div>
        </section>
      </main>

      <footer className="relative z-20">
        <Footer />
      </footer>
    </div>
  );
};

export default Home1;
