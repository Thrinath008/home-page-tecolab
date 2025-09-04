"use client";

import React, { useEffect, useState } from "react";

const sidebarLinks = [
  { href: "#security", label: "Security & Privacy" },
  { href: "#notifications", label: "Notification Preferences" },
  { href: "#appearance", label: "Appearance" },
  { href: "#integrations", label: "Integrations & API" },
  { href: "#billing", label: "Subscription & Billing" },
];

const SettingsPage = () => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setActiveHash(window.location.hash);

      const onHashChange = () => {
        setActiveHash(window.location.hash);
      };

      window.addEventListener("hashchange", onHashChange);

      return () => {
        window.removeEventListener("hashchange", onHashChange);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#131117] flex flex-col">
      <div className="max-w-6xl mx-auto w-full py-10 px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Settings</h1>
          <p className="text-gray-400 mt-2">
            Manage your account, preferences, and connected services.
          </p>
        </div>
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <nav className="w-56 shrink-0 hidden md:block">
            <ul className="space-y-2 sticky top-24">
              {sidebarLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block px-3 py-2 rounded-lg transition ${
                      activeHash === link.href
                        ? "bg-[#2d2938] text-white"
                        : "text-gray-400 hover:bg-[#1a1622] hover:text-indigo-400"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Main Content */}
          <div className="flex-1 space-y-12">
            {/* Security & Privacy Section */}
            <section id="security" className="rounded-2xl bg-[#1a1622] p-8 custom-shadow">
              <h2 className="text-xl font-semibold text-white mb-6">Security & Privacy</h2>
              <form className="space-y-6 max-w-lg">
                <div>
                  <label className="block text-gray-400 mb-1">Current Password</label>
                  <input
                    type="password"
                    className="w-full rounded-xl border-none bg-[#2d2938] text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#4f33e8] px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">New Password</label>
                  <input
                    type="password"
                    className="w-full rounded-xl border-none bg-[#2d2938] text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#4f33e8] px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-1">Confirm New Password</label>
                  <input
                    type="password"
                    className="w-full rounded-xl border-none bg-[#2d2938] text-white placeholder:text-gray-400 focus:ring-2 focus:ring-[#4f33e8] px-3 py-2"
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="rounded-lg bg-[#4f33e8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6a52f0] transition-colors"
                  >
                    Change Password
                  </button>
                </div>
              </form>
            </section>
            {/* Notification Preferences Section */}
            <section id="notifications" className="rounded-2xl bg-[#1a1622] p-8 custom-shadow">
              <h2 className="text-xl font-semibold text-white mb-6">Notification Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-white">Email Notifications</span>
                  <label className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full">
                    <input type="checkbox" defaultChecked className="peer sr-only" />
                    <div className="peer h-6 w-11 rounded-full bg-[#2d2938] after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-[#4f33e8] peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Push Notifications</span>
                  <label className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full">
                    <input type="checkbox" className="peer sr-only" />
                    <div className="peer h-6 w-11 rounded-full bg-[#2d2938] after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-[#4f33e8] peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white">Weekly Summary</span>
                  <label className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full">
                    <input type="checkbox" defaultChecked className="peer sr-only" />
                    <div className="peer h-6 w-11 rounded-full bg-[#2d2938] after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-[#4f33e8] peer-checked:after:translate-x-full"></div>
                  </label>
                </div>
              </div>
            </section>
            {/* Appearance Section */}
            <section id="appearance" className="rounded-2xl bg-[#1a1622] p-8 custom-shadow">
              <h2 className="text-xl font-semibold text-white mb-6">Appearance</h2>
              <div className="flex items-center justify-between">
                <span className="text-white">Dark Mode</span>
                <label className="relative inline-flex h-6 w-11 cursor-pointer items-center rounded-full">
                  <input type="checkbox" defaultChecked className="peer sr-only" />
                  <div className="peer h-6 w-11 rounded-full bg-[#2d2938] after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-[#4f33e8] peer-checked:after:translate-x-full"></div>
                </label>
              </div>
            </section>
            {/* Integrations & API Section */}
            <section id="integrations" className="rounded-2xl bg-[#1a1622] p-8 custom-shadow">
              <h2 className="text-xl font-semibold text-white mb-6">Integrations & API</h2>
              <div className="flex flex-col md:flex-row gap-4">
                <button className="rounded-lg bg-[#2d2938] hover:bg-[#4f33e8] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors flex items-center gap-2">
                  <svg width="20" height="20" fill="currentColor" className="text-indigo-400" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.527.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.984-.399 3.003-.404 1.019.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.649.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  Connect GitHub
                </button>
                <button className="rounded-lg bg-[#2d2938] hover:bg-[#4f33e8] px-4 py-2 text-sm font-semibold text-white shadow-sm transition-colors">
                  API Access
                </button>
              </div>
            </section>
            {/* Subscription & Billing Section */}
            <section id="billing" className="rounded-2xl bg-[#1a1622] p-8 custom-shadow">
              <h2 className="text-xl font-semibold text-white mb-6">Subscription & Billing</h2>
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-white font-medium">Pro Plan</div>
                  <div className="text-gray-400 text-sm">Renews: July 15, 2024</div>
                </div>
                <button className="rounded-lg bg-[#4f33e8] px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#6a52f0] transition-colors">
                  Manage Subscription
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;