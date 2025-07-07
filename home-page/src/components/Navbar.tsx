

'use client';

import Link from 'next/link';
import {
  HomeIcon,
  ClipboardIcon,
  CalendarIcon,
  UserGroupIcon,
  StarIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: HomeIcon },
  { name: 'Projects', href: '/dashboard/projects', icon: ClipboardIcon },
  { name: 'Hackathons', href: '/dashboard/hackathons', icon: CalendarIcon },
  { name: 'Tasks', href: '/dashboard/tasks', icon: ClipboardIcon },
  { name: 'Community', href: '/dashboard/community', icon: UserGroupIcon },
  { name: 'Scoring', href: '/dashboard/scoring', icon: StarIcon },
];

export default function Navbar({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (val: boolean) => void;
}) {
  const activeRoute = '/dashboard/dashbord'; // You can make this dynamic using `usePathname()` in Next.js 13+

  return (
    <div className={`fixed top-0 left-0 h-screen bg-[#0c0f1f] text-white flex flex-col transition-all duration-300 ${collapsed ? 'w-20' : 'w-64'}`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-5 border-b border-gray-700">
        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
          {!collapsed && 'Tecolab'}
        </span>
        <button onClick={() => setCollapsed(!collapsed)}>
          <Squares2X2Icon className="h-6 w-6 text-white" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-2 space-y-2">
        {navItems.map(({ name, href, icon: Icon }) => {
          const isActive = activeRoute === href;
          return (
            <Link key={name} href={href}>
              <div
                className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all duration-150 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white border border-purple-400'
                    : 'hover:bg-gray-800 text-gray-300'
                }`}
              >
                <Icon className="h-5 w-5" />
                {!collapsed && <span className="text-sm font-medium">{name}</span>}
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}