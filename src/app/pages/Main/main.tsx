    'use client';

    import React, { useEffect, useState } from 'react';
    import Navbar from '@/app/components/navbar';
    import Footer from '@/app/components/footer';
    import AccordionList from '@/app/components/accordinlist';

    const Main = () => {  
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        
        const handleScroll = () => {
        if (typeof window !== 'undefined') {
            setScrollY(window.scrollY);
        }
        };        
        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden bg-white">
        <header className="relative z-20">
            <Navbar />
        </header>

        <main className="flex-grow flex flex-col relative z-10">
            <section className="min-h-screen flex items-center justify-center px-4 bg-transparent relative">
            <div className="absolute inset-0 overflow-hidden">
                <svg
                className="w-full h-full"
                viewBox="0 0 800 600"
                preserveAspectRatio="none"
                >
                <defs>
                    <linearGradient id="bg-gradient-main" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#f8fafc" />
                    <stop offset="100%" stopColor="#e0e7ff" />
                    </linearGradient>
                </defs>
                <rect width="800" height="600" fill="url(#bg-gradient-main)" />
                <path
                    d="M0,300 C200,500 600,100 800,300 L800,600 L0,600 Z"
                    fill="#e0f2fe"
                >
                    <animate
                    attributeName="d"
                    dur="10s"
                    repeatCount="indefinite"
                    values="
                        M0,300 C200,500 600,100 800,300 L800,600 L0,600 Z;
                        M0,350 C200,450 600,150 800,250 L800,600 L0,600 Z;
                        M0,300 C200,500 600,100 800,300 L800,600 L0,600 Z
                        "
                    />
                </path>
                </svg>
            </div>

            <div className="text-center flex flex-col items-center justify-center w-full p-6 space-y-6 relative z-10">
                <h1 className="text-5xl md:text-7xl text-purple-500 font-extrabold tracking-tight leading-tight animate__animated animate__fadeIn">
                Manage Your <br />
                <span className="text-6xl text-purple-400">Teams Effortlessly</span>
                </h1>
                <p className="text-lg md:text-xl text-blue-900 font-medium max-w-2xl mx-auto leading-relaxed">
                Collaborate, organize, and achieve your goals with our intuitive team management tools.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center w-full mx-auto p-4 space-y-4 md:space-y-0 md:space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Create a Team
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Join a Team
                </button>
                </div>
            </div>

            
            </section>

            <section className="min-h-screen flex flex-col items-center justify-center px-4 bg-transparent w-full">
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
                className={`text-purple-400 text-5xl md:text-6xl font-bold mb-7 transition-opacity duration-700 ${
                    scrollY > 200 ? 'opacity-100' : 'opacity-0'
                }`}
                >
                Your Team
                </h2>
                <p
                className={`text-lg md:text-xl font-light max-w-2xl mx-auto text-gray-400 transition-opacity duration-700 delay-200 ${
                    scrollY > 300 ? 'opacity-100' : 'opacity-0'
                }`}
                >
                View and manage your team members with ease.
                </p>
            </div>
            <div
                className={`w-full max-w-4xl transition-transform duration-700 ${
                scrollY > 400
                    ? 'transform translate-y-0 opacity-100'
                    : 'transform translate-y-20 opacity-0'
                }`}
            >
                <AccordionList />
            </div>

            
            </section>
        </main>

        <footer className="relative z-20">
            <Footer />
        </footer>
        </div>
    );
    };

    export default Main;
