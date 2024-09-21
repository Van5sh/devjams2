'use client';
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/navbar"; 
import Footer from "@/app/components/footer";
import Image from "next/image";
import Link from "next/link";

const Home1 = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setScrollY(window.scrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-blue-100 to-blue-200">
      <Navbar />

      {/* Hero Section */}
      <main className="flex-grow flex flex-col relative z-10">
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 bg-white relative">
          <div className="text-center flex flex-col items-center justify-center w-full md:w-1/2 space-y-6 relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-purple-600 animate__animated animate__fadeInDown">
              Welcome to <br />
              <span className="text-6xl text-purple-400 animate__animated animate__fadeInUp">FFCS Colab</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-900 font-medium max-w-lg mx-auto leading-relaxed animate__animated animate__fadeIn">
              Streamline your course selection process at VIT and take control of your academic journey.
            </p>
            <Link href="/Main">
              <button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:scale-110 animate__animated animate__pulse">
                Get Started
              </button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:w-1/2 mt-6 md:mt-0 relative z-10 animate__animated animate__zoomIn">
            <Image
              src="/image.jpg"
              alt="FFCS Logo"
              width={320}
              height={220}
              className="md:w-[320px] md:h-[220px] shadow-xl rounded-lg"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-white to-blue-100 w-full">
          <div className="w-full">
            <svg
              className="w-full h-16"
              viewBox="0 0 800 80"
              preserveAspectRatio="none"
            >
              <path
                d="M0,40 C200,80 600,0 800,40 L800,80 L0,80 Z"
                fill="#e0f2fe"
              />
            </svg>
          </div>

          <div className="text-center mb-12">
            <h2
              className={`text-purple-500 text-5xl md:text-6xl font-bold mb-7 transition-opacity duration-700 ${
                scrollY > 200 ? "opacity-100 animate__animated animate__fadeInUp" : "opacity-0"
              }`}
            >
              Features
            </h2>
            <p
              className={`text-lg md:text-xl font-light max-w-2xl mx-auto text-gray-500 transition-opacity duration-700 delay-200 ${
                scrollY > 300 ? "opacity-100 animate__animated animate__fadeIn" : "opacity-0"
              }`}
            >
              Everything you need to make your academic life easier.
            </p>
          </div>

          {/* Cards Section with Horizontal Scroll */}
          <div className="flex flex-row overflow-x-auto gap-6 snap-x snap-mandatory no-scrollbar px-4">
            <FeatureCard
              header="Easy Registration"
              message="Simplify your course registration process with our intuitive interface. FFCS Colab guides you through each step, ensuring a smooth and error-free registration experience."
            />
            <FeatureCard
              header="Schedule Planner"
              message="Our advanced Schedule Planner helps you create the perfect timetable. Visualize different course combinations, avoid conflicts, and optimize your daily schedule."
            />
            <FeatureCard
              header="Course Recommendations"
              message="Get personalized course suggestions based on your academic history, interests, and career goals. Our AI-powered system recommends courses aligned with your aspirations."
            />
            <FeatureCard
              header="Real-time Updates"
              message="Stay informed with instant notifications about course availability, registration deadlines, and important announcements."
            />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-r from-blue-100 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/background-pattern.png')" }}></div>
          <div className="text-center max-w-lg mx-auto p-6 space-y-6 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-purple-500 animate__animated animate__bounceIn">
              Get Started
            </h2>
            <p className="text-lg md:text-xl font-light text-gray-500 animate__animated animate__fadeInUp">
              Join FFCS Colab today and make your course registration a breeze!
            </p>
            <button className="bg-purple-700 hover:bg-purple-800 transition-all duration-300 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 animate__animated animate__pulse">
              Sign Up Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

// Feature Card Component
interface FeatureCardProps {
  header: string;
  message: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ header, message }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md flex flex-col justify-between snap-center min-w-[350px] max-w-[500px] transform hover:scale-105 transition duration-300 hover:shadow-2xl">
      <h3 className="text-2xl font-bold text-purple-600 mb-4">{header}</h3>
      <p className="text-gray-600">{message}</p>
    </div>
  );
};

export default Home1;
