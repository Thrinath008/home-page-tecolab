'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import SidebarNavbar from "@/components/SidebarNavbar";
import MobileDock from "@/components/MobileDock";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-[#0c0f1f] text-white flex`}
    >
      {/* ✅ Sidebar for desktop */}
      <SidebarNavbar collapsed={collapsed} setCollapsed={setCollapsed} />

      <main
        className={`flex-1 p-6 transition-all duration-300 ${
          collapsed ? 'ml-20' : 'ml-64'
        } hidden md:block`}
      >
        {children}
      </main>

      {/* ✅ Mobile content */}
      <div className="w-full md:hidden pb-20 px-4">{children}</div>

      {/* ✅ Mobile dock */}
      <MobileDock />
    </div>
  );
}
