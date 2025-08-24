'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Boxes } from "@/components/ui/background-boxes";

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
    <div
      className="min-h-screen flex w-full text-white bg-slate-900 flex-col md:flex-row"
      style={{ fontFamily: 'DM Sans, sans-serif' }}
    >
      {/* Left Side (hidden on mobile) */}
      <div className="hidden md:flex md:w-1/2 p-10 flex-col justify-between relative bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <Boxes />
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        </div>
        <div className="relative z-20" />
      </div>

      {/* Right Side (full-width on mobile) */}
      <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-10 flex flex-col items-center space-y-6 relative bg-slate-900 overflow-hidden">
        <div className="relative z-20 flex flex-col items-center space-y-6 w-full">
          {/* Logo and Button */}
          <div className="space-y-6 md:space-y-2 flex flex-col items-center">
  <img
    src="/tecolab_logo_noBG.png"
    alt="Tecolab Logo"
    className="block w-80 h-80 sm:w-96 sm:h-96 md:w-[24rem] md:h-[24rem] object-contain"
  />
  <a
    href="/register"
    className="relative overflow-hidden px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold group w-full sm:w-[280px] text-center cursor-pointer"
  >
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
                className="w-full px-5 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white text-white"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-5 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-white text-white"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white font-semibold cursor-pointer"
              >
                Login
              </button>
            </form>

            {/* Social Login buttons */}
            <div className="mt-6 flex space-x-4">
              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white hover:bg-gray-100 rounded-full text-gray-800 font-semibold border border-gray-300 shadow-sm cursor-pointer"
              >
                <img src="/icons/google.svg" alt="Google" className="w-5 h-5" />
                Google
              </button>

              <button
                type="button"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 hover:bg-gray-800 rounded-full text-white font-semibold border border-gray-700 shadow-sm cursor-pointer"
              >
                <img src="/icons/github.svg" alt="GitHub" className="w-5 h-5 invert" />
                GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;
