'use client';
import { useState } from 'react';
import { Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import useNotifications from '../hooks/useNotification';
import Toast from './Toast';

export default function NotificationBell() {
  const { notifications, markAsRead, unreadCount } = useNotifications();
  const [showToast, setShowToast] = useState(false);

  const latest = notifications
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 1);

  const handleClick = (id: number) => {
    markAsRead(id);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowToast(!showToast)}
        className="relative p-2 text-white hover:text-gold"
      >
        <Bell size={24} />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {showToast && latest.map(n => (
          <Toast
            key={n.id}
            notification={n}
            onClick={() => handleClick(n.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
