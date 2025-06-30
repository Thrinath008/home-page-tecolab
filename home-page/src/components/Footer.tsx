

'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo and Tagline */}
        <div>
          <img src="/tecolab_logo.jpeg" alt="Tecolab Logo" className="h-16 mb-4" />
          <p className="text-gray-400 text-sm">Building the future, one student at a time.</p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/register" className="hover:underline">Register</Link></li>
            <li><Link href="/login" className="hover:underline">Login</Link></li>
            <li><Link href="/dashboard" className="hover:underline">Dashboard</Link></li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" aria-label="Twitter" className="hover:text-blue-400">🐦</a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-300">💼</a>
            <a href="#" aria-label="GitHub" className="hover:text-gray-400">🐙</a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} Tecolab. All rights reserved.
      </div>
    </footer>
  );
}