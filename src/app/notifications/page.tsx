'use client';
import { useEffect, useState } from 'react';
import { Notification } from '@/types';
import Link from 'next/link';

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [form, setForm] = useState({ title: '', description: '' });

  // Fetch notifications on load
  useEffect(() => {
    fetch('/api/notifications')
      .then(res => res.json())
      .then(data => setNotifications(data));
  }, []);

  // Add new notification
  const addNotification = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/notifications', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const newNotification = await res.json();
    setNotifications(prev => [newNotification, ...prev]);
    setForm({ title: '', description: '' });
  };

  return (
    <div className="min-h-screen bg-navy text-white px-6 py-12">
      <h1 className="text-4xl font-bold text-gold mb-8">All Notifications</h1>

      {/* Form */}
      <form onSubmit={addNotification} className="mb-8 space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-3 rounded bg-white/10 text-white border border-gold"
          required
        />
        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="w-full p-3 rounded bg-white/10 text-white border border-gold"
          required
        />
        <button
          type="submit"
          className="bg-gold text-navy px-6 py-2 rounded shadow-lg hover:scale-105 transition"
        >
          Add Notification
        </button>
      </form>

      {/* Notifications List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {notifications.map((n) => (
          <div
            key={n.id}
            className="p-6 border border-gold rounded-lg bg-navy shadow-lg hover:scale-105 transition"
          >
            <h2 className="text-xl font-bold text-gold mb-2">{n.title}</h2>
            <p className="text-white/80 mb-4">{n.description}</p>
            <span className="text-sm text-white/50">
              {new Date(n.date).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          href="/"
          className="inline-block bg-gold text-navy px-6 py-3 rounded shadow-lg hover:scale-105 transition"
        >
          ⬅ Back to Home
        </Link>
      </div>
    </div>
  );
}
