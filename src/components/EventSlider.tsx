'use client';
import { motion } from 'framer-motion';
import { Card } from '../types';

interface EventSliderProps {
  events: Card[];
}

export default function EventSlider({ events }: EventSliderProps) {
  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-gold mb-6">Events</h2>
      <div className="flex overflow-x-scroll gap-4 scrollbar-none">
        {events.map(event => (
          <motion.div
            key={event.title}
            whileHover={{ scale: 1.05, y: -5 }}
            className="min-w-[250px] relative cursor-pointer rounded-lg overflow-hidden shadow-lg border border-gold"
          >
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover" />
            <div className="absolute bottom-0 left-0 w-full bg-black/40 text-white p-2 font-bold">
              {event.title}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
