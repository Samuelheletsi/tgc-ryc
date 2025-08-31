'use client';
import { motion } from 'framer-motion';
import { Notification } from '@/types';
import Link from 'next/link';

interface ToastProps {
  notification: Notification;
  onClick: () => void;
}

export default function Toast({ notification, onClick }: ToastProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5 }}
      className="fixed top-4 right-4 bg-navy border border-gold text-white p-4 rounded shadow-lg cursor-pointer w-80 z-50"
      onClick={onClick}
    >
      <Link href={notification.link}>
        <h4 className="font-bold text-gold">{notification.title}</h4>
        <p className="text-white/80">{notification.description}</p>
        <span className="text-xs text-white/50">
          {new Date(notification.date).toLocaleDateString()}
        </span>
      </Link>
    </motion.div>
  );
}
