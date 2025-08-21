'use client';import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {Boxes} from "@/components/ui/background-boxes";
const quotes = [
    "You weren’t just born to learn. You were born to build.",
    "The world is not waiting for your degree. It’s waiting for your impact.",
    "You just opened a portal to a parallel universe—where students don’t wait to be hired. They get discovered.",
    "Somewhere in the universe, a signal was sent. You heard it.",
    "This isn’t another course. This is where builders rise.",
    "Projects. Hackathons. AI mentors. Recognition.",
    "Degrees are static. You are not."
];

const colors = ['bg-black','bg-purple-500','bg-lime-300','bg-blue-500','bg-cyan-400','bg-orange-400','bg-pink-400','bg-yellow-400'];

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
            <div className="w-1/2 p-10 flex flex-col justify-between relative bg-slate-900 overflow-hidden">
              <div className="absolute inset-0">
                <Boxes />
                <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
              </div>
              <div className="relative z-20">
                {/* Overlay message and bars */}
              </div>
            </div>

            {/* Right Side */}
            <div className="w-1/2 p-10 flex flex-col items-center space-y-6 relative bg-slate-900 overflow-hidden">
              <div className="relative z-20 flex flex-col items-center space-y-6 w-full">
                {/* Logo and Button */}
                <div className="space-y-6 flex flex-col items-center">
                  <img src="/tecolab_logo_noBG.png" alt="Tecolab Logo" className="w-80 h-80 object-contain" />
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
                  <form
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = new FormData(e.currentTarget);
                      const email = form.get('email') as string;
                      const password = form.get('password') as string;

                      try {
                        const res = await fetch('http://localhost:8000/login', {
                          method: 'POST',
                          headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                          },
                          body: new URLSearchParams({
                            username: email,
                            password: password,
                          }),
                        });

                        const data = await res.json();

                        if (!res.ok) throw new Error(data.detail || 'Login failed');

                        // ✅ Store the JWT token in localStorage so we can use it on protected pages
                        localStorage.setItem('token', data.access_token);
                        alert('Login successful!');
                        window.location.href = '/dashboard';
                      } catch (err: any) {
                        alert(err.message || 'Login error');
                      }
                    }}
                    className="space-y-6"
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white text-white"
                      required
                    />
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white text-white"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-white font-semibold"
                    >
                      Login
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <style jsx>{`
              @keyframes infinite-scroll {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-infinite-scroll {
                animation: infinite-scroll 20s linear infinite;
              }
            `}</style>
        </div>
    );
};

export default WelcomePage;