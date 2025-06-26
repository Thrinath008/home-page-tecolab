'use client';import Link from 'next/link';
import React, { useEffect, useState } from 'react';
const quotes = [
    "You weren’t just born to learn. You were born to build.",
    "The world is not waiting for your degree. It’s waiting for your impact.",
    "You just opened a portal to a parallel universe—where students don’t wait to be hired. They get discovered.",
    "Somewhere in the universe, a signal was sent. You heard it.",
    "This isn’t another course. This is where builders rise.",
    "Projects. Hackathons. AI mentors. Recognition.",
    "Degrees are static. You are not."
];

const WelcomePage: React.FC = () => {
    const [currentQuote, setCurrentQuote] = useState(quotes[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentQuote(prev => {
                const currentIndex = quotes.indexOf(prev);
                const nextIndex = (currentIndex + 1) % quotes.length;
                return quotes[nextIndex];
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex w-full text-white" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            {/* Left Side */}
            <div className="w-1/2 bg-gray-800 p-10 flex flex-col justify-center items-center text-center space-y-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,_#ffffff33,_transparent_60%)] z-0" />
                <h1 className="text-5xl font-bold mb-4 z-10">🌌 Welcome to Tecolab</h1>
                <div className="space-y-6 text-2xl leading-relaxed italic max-w-2xl transition-all duration-1000 ease-in-out z-10 fade show">
                    <p>{currentQuote}</p>
                </div>
            </div>

            {/* Right Side */}
            <div className="w-1/2 p-10 flex flex-col items-center space-y-6" style={{ backgroundColor: '#122336' }}>
                {/* Logo and Button */}
                <div className="space-y-6 flex flex-col items-center">
                    <img src="/tecolab_logo.jpeg" alt="Tecolab Logo" className="w-60 h-60 object-contain" />
                    <a href="/register" className="relative overflow-hidden px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold group w-[280px] text-center">
                        <span className="block transition-all duration-300 group-hover:translate-x-full group-hover:opacity-0">
                            🚀 Let’s Begin the Journey
                        </span>
                        <span className="absolute left-0 top-0 w-full h-full flex items-center justify-center transition-all duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                            ✨ Let’s Go!
                        </span>
                    </a>
                </div>

                {/* Divider */}
                <div className="w-full border-t border-gray-700 my-6" />

                {/* Login Form */}
                <div className="w-full max-w-md">
                    <h2 className="text-xl font-semibold mb-4 text-center">Already a member?</h2>
                    <form action="/dashboard" method="POST" className="space-y-4">
                        <input type="email" name="email" placeholder="Email" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" required />
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none" required />
                        <button type="submit" className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default WelcomePage;