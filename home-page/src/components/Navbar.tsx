'use client';

import {
  HomeIcon,
  ClipboardIcon,
  CalendarIcon,
  UserGroupIcon,
  StarIcon,
  Squares2X2Icon,
  ArrowRightOnRectangleIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { useRouter, usePathname } from 'next/navigation';
import Dock from './Dock';
import './Dock.css';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    { icon: <HomeIcon className="h-6 w-6" />, label: 'Dashboard', href: '/dashboard' },
    { icon: <ClipboardIcon className="h-6 w-6" />, label: 'Projects', href: '/dashboard/projects' },
    { icon: <CalendarIcon className="h-6 w-6" />, label: 'Hackathons', href: '/dashboard/hackathons' },
    { icon: <ClipboardIcon className="h-6 w-6" />, label: 'Tasks', href: '/dashboard/tasks' },
    { icon: <UserGroupIcon className="h-6 w-6" />, label: 'Community', href: '/dashboard/community' },
    { icon: <StarIcon className="h-6 w-6" />, label: 'Scoring', href: '/dashboard/scoring' },
    { icon: <Squares2X2Icon className="h-6 w-6" />, label: 'Settings', href: '/dashboard/settings' },
    { icon: <UserCircleIcon className="h-6 w-6" />, label: 'Profile', href: '/dashboard/profile' },
    { icon: <ArrowRightOnRectangleIcon className="h-6 w-6" />, label: 'Logout', href: '/logout' },
  ];

  const dockItems = items.map((item) => ({
    icon: (
      <div
        className={`${
          pathname === item.href ? 'text-cyan-400' : 'text-gray-300'
        } transition-colors`}
      >
        {item.icon}
      </div>
    ),
    label: item.label,
    onClick: () => router.push(item.href),
  }));

  return (
    <Dock
      items={dockItems}
      panelHeight={68}
      baseItemSize={50}
      magnification={70}
    />
  );
}
