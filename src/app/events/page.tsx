'use client';
import { useEffect, useState } from 'react';
import { SiteData } from '@/types';
import { motion } from 'framer-motion';

export default function EventsPage() {
  const [events, setEvents] = useState<{ title: string; image: string; link: string }[]>([]);

  useEffect(() => {
    fetch('/data/site.json')
      .then(res => res.json())
      .then((data: SiteData) => setEvents(data.events))
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="p-6 min-h-screen bg-navy text-white">
      <h1 className="text-4xl font-bold text-gold mb-8">Events</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {events.map((event, idx) => (
          <motion.a
            key={idx}
            href={event.link}
            className="bg-black/70 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
            <h2 className="p-4 text-xl font-semibold">{event.title}</h2>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
