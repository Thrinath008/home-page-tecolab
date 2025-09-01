'use client';

import {
  HomeIcon,
  UserGroupIcon,
  ClipboardIcon,
  ChatBubbleLeftRightIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/outline';
import { useRouter, usePathname } from 'next/navigation';
import { motion } from 'motion/react';

export default function MobileDock() {
  const router = useRouter();
  const pathname = usePathname();

  const items = [
    {
      key: 'community',
      icon: <UserGroupIcon className="h-6 w-6" />,
      href: '/dashboard/community',
    },
    {
      key: 'projects',
      icon: <ClipboardIcon className="h-6 w-6" />,
      href: '/dashboard/projects',
    },
    {
      key: 'home',
      icon: <HomeIcon className="h-7 w-7" />, // ✅ slightly bigger
      href: '/dashboard',
    },
    {
      key: 'chat',
      icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
      href: '/dashboard/chat',
    },
    {
      key: 'settings',
      icon: <Squares2X2Icon className="h-6 w-6" />,
      href: '/dashboard/settings',
    },
  ];

  return (
    <div className="fixed bottom-3 left-1/2 transform -translate-x-1/2 bg-[#060010] border border-gray-800 rounded-2xl shadow-lg flex items-center justify-around px-6 py-3 w-[90%] max-w-md z-50 md:hidden">
      {items.map((item) => {
        const isActive = pathname === item.href;

        return (
          <motion.button
            key={item.key}
            onClick={() => router.push(item.href)}
            whileTap={{ scale: 0.85 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className={`flex items-center justify-center ${
              isActive ? 'text-cyan-400' : 'text-gray-400'
            }`}
          >
            <div
              className={`flex items-center justify-center transition-transform duration-200 ${
                item.key === 'home' ? 'scale-125' : ''
              }`}
            >
              {item.icon}
            </div>
          </motion.button>
        );
      })}
    </div>
  );
}
