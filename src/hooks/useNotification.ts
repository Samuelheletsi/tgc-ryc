'use client';
import { useState } from 'react';
import siteData from '@/../public/data/site.json'; // Direct import
import { Notification, SiteData } from '@/types';

export default function useNotifications() {
  // Ensure siteData matches the SiteData type
  const data: SiteData = siteData as SiteData;

  const [notifications, setNotifications] = useState<Notification[]>(data.notifications || []);

  const markAsRead = (id: number) => {
    setNotifications(prev =>
      prev.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  return { notifications, markAsRead, unreadCount };
}
