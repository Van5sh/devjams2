import React from "react";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";
import Card from "@/app/components/card";

const Home1 = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-white">
      <header className="bg-transparent">
        <Navbar />
      </header>

      <main className="flex-grow flex flex-col">
        <section className="min-h-screen flex flex-row items-center justify-center px-4 bg-gray-700">
          <div className="text-center flex flex-col items-center justify-center w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <br />
              FFCS Colab
            </h1>
            <p className="text-lg">
              Streamline your course selection process at VIT
            </p>
          </div>
          <div className="text-center w-1/2">
            <h1>This is working</h1>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 bg-gray-600">
          <div className="text-center w-full">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sn">
              <Card header="Easy Registration" message="Simplify your course registration process with our intuitive interface. FFCS Colab guides you through each step, ensuring a smooth and error-free registration experience. Say goodbye to the stress of course selection!" />
              <Card header="Schedule Planner" message="Our advanced Schedule Planner helps you create the perfect timetable. Visualize different course combinations, avoid conflicts, and optimize your daily schedule. Balance your workload and free time with ease." />
              <Card header="Course Recommendations" message="Get personalized course suggestions based on your academic history, interests, and career goals. Our AI-powered system analyzes your profile to recommend courses that align with your aspirations and enhance your skill set." />
              <Card header="Real-time Updates" message="Stay informed with instant notifications about course availability, registration deadlines, and important announcements. Never miss a crucial update or opportunity. FFCS Colab keeps you in the loop throughout your academic journey." />
            </div>
          </div>
        </section>

        <section className="min-h-screen flex items-center justify-center px-4 bg-gray-700">
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
        </section>
      </main>

      <footer className="bg-gray-900 py-4">
        <Footer/>
      </footer>
    </div>
  );
};

export default Home1;