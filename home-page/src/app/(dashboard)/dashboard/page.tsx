"use client";
import {
  User,
  LayoutDashboard,
  Map,
  Code,
  Users,
  FolderKanban,
  Settings,
  LogOut,
  Search,
  Bell,
  Trophy,
  Star,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Roadmaps", icon: Map },
  { name: "Sandbox", icon: Code },
  { name: "Community", icon: Users },
  { name: "Projects", icon: FolderKanban },
];

const bottomMenu = [
  { name: "Preferences", icon: Settings },
  { name: "Sign Out", icon: LogOut },
];

const cards = [
  {
    title: "JavaScript Basics",
    desc: "Complete the core JS learning path and earn XP.",
    icon: <Code className="w-7 h-7 text-indigo-400" />,
    color: "bg-[#23234b]",
  },
  {
    title: "AI Mentorship",
    desc: "Connect with AI mentors for guidance.",
    icon: <Users className="w-7 h-7 text-purple-400" />,
    color: "bg-[#23234b]",
  },
  {
    title: "Project Showcase",
    desc: "Submit your project for community review.",
    icon: <FolderKanban className="w-7 h-7 text-indigo-400" />,
    color: "bg-[#23234b]",
  },
  {
    title: "Code Review",
    desc: "Get feedback from experienced devs.",
    icon: <Star className="w-7 h-7 text-purple-400" />,
    color: "bg-[#23234b]",
  },
];

const progress = [
  { label: "XP Earned", value: "4,200", icon: <Trophy className="w-5 h-5 text-indigo-400" /> },
  { label: "Project Showcase", value: "2", icon: <FolderKanban className="w-5 h-5 text-purple-400" /> },
  { label: "Code Reviews", value: "7", icon: <Star className="w-5 h-5 text-indigo-400" /> },
];

const notifications = [
  {
    message: "🎉 You unlocked a new badge: JavaScript Novice!",
    time: "2h ago",
  },
];

const calendarDays = [
  { day: "Mon", badge: "bg-indigo-500", label: "JS" },
  { day: "Tue", badge: "bg-purple-500", label: "AI" },
  { day: "Wed", badge: "bg-gray-600", label: "PR" },
  { day: "Thu", badge: "bg-indigo-500", label: "JS" },
  { day: "Fri", badge: "bg-purple-500", label: "AI" },
  { day: "Sat", badge: "bg-gray-600", label: "PR" },
  { day: "Sun", badge: "bg-indigo-500", label: "JS" },
];

export default function DashboardPage() {
  // Static mock for current month calendar dates (May 2024)
  // May 1, 2024 is Wednesday (index 3 if Sunday=0)
  const month = "May 2024";
  const daysInMonth = 31;
  const firstDayIndex = 3; // Wednesday
  const today = 8; // mock today date as 8th May

  // Events mapped by date for demo (using calendarDays labels as event badges)
  const eventsByDate = {
    1: ["bg-indigo-500"], // JS
    2: ["bg-purple-500"], // AI
    3: ["bg-gray-600"],   // PR
    4: ["bg-indigo-500"],
    5: ["bg-purple-500"],
    6: ["bg-gray-600"],
    7: ["bg-indigo-500"],
    8: ["bg-purple-500"],
    9: ["bg-indigo-500"],
    10: ["bg-purple-500"],
  };

  // Generate calendar cells (7x5 grid = 35 cells)
  const totalCells = 35;

  // Weekday headers Sunday to Saturday
  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <div className="min-h-screen bg-[#0d1117] flex">
      {/* Main Content */}
      <main className="flex-1 flex flex-col px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <div className="flex items-center bg-[#21262d] px-4 py-2 rounded-full">
            <Search className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none text-white placeholder-gray-400 w-44 focus:ring-2 focus:ring-indigo-500 rounded-full"
            />
          </div>
        </div>
        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col p-6 bg-[#1A1A2E] rounded-2xl shadow-lg hover:shadow-xl transition group cursor-pointer"
            >
              <div className="mb-4">{card.icon}</div>
              <div className="text-white font-semibold text-lg mb-2">{card.title}</div>
              <div className="text-gray-400 text-sm">{card.desc}</div>
            </div>
          ))}
        </div>
        {/* Calendar Section */}
        <div className="bg-[#161b22] rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="text-white font-semibold text-lg">Weekly Calendar</div>
            <div className="text-gray-400 text-xs">Your learning & activity</div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-gray-400 select-none mb-2">
            {weekDays.map((wd) => (
              <div key={wd} className="font-semibold">
                {wd}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: totalCells }).map((_, i) => {
              const dayNum = i - firstDayIndex + 1;
              const isValidDay = dayNum > 0 && dayNum <= daysInMonth;
              const isToday = dayNum === today;
              const eventBadges = eventsByDate[dayNum] || [];

              return (
                <div
                  key={i}
                  className={`aspect-square rounded-lg flex flex-col items-center justify-start p-2 cursor-pointer transition-colors ${
                    isToday ? "bg-indigo-500 text-white" : "bg-[#1A1A2E] text-gray-300 hover:bg-[#2a2d43]"
                  }`}
                >
                  <div className="text-sm font-semibold">{isValidDay ? dayNum : ""}</div>
                  <div className="flex space-x-1 mt-1">
                    {eventBadges.map((colorClass, idx) => (
                      <span
                        key={idx}
                        className={`w-2 h-2 rounded-full ${colorClass}`}
                        title="Event"
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-80 flex flex-col gap-6 bg-[#161b22] p-6 border-l border-[#23272e]">
        {/* Current Challenge */}
        <div className="bg-[#1A1A2E] rounded-2xl shadow-lg p-5 flex flex-col mb-2">
          <div className="flex items-center mb-4">
            <Image
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=facearea&w=64&q=80"
              alt="challenge"
              width={48}
              height={48}
              className="rounded-xl object-cover mr-3"
            />
            <div>
              <div className="text-white font-semibold">Current Challenge</div>
              <div className="text-gray-400 text-xs">#42: Build a ToDo App</div>
            </div>
          </div>
          <div className="text-gray-400 text-sm">
            Complete the ToDo app challenge by Friday to earn 500 XP and a special badge!
          </div>
        </div>
        {/* Progress */}
        <div className="bg-[#1A1A2E] rounded-2xl shadow-lg p-5">
          <div className="text-white font-semibold mb-4">Progress</div>
          <div className="flex flex-col gap-3">
            {progress.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div>{item.icon}</div>
                <div>
                  <div className="text-gray-400 text-xs">{item.label}</div>
                  <div className="text-white font-semibold">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Notifications */}
        <div className="bg-[#1A1A2E] rounded-2xl shadow-lg p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="text-white font-semibold">Notifications</div>
            <Bell className="w-5 h-5 text-gray-400" />
          </div>
          <div className="flex flex-col gap-2">
            {notifications.map((n, i) => (
              <div key={i} className="bg-[#23234b] rounded-lg px-4 py-2 text-gray-300 text-sm flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-indigo-400" /> {n.message}
                <span className="ml-auto text-xs text-gray-500">{n.time}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}
