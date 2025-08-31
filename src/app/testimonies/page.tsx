'use client';
import { useEffect, useState } from 'react';
import { SiteData } from '@/types';
import { motion } from 'framer-motion';

export default function TestimoniesPage() {
  const [cards, setCards] = useState<{ title: string; image: string; link: string }[]>([]);

  useEffect(() => {
    fetch('/data/site.json')
      .then(res => res.json())
      .then((data: SiteData) =>
        setCards(data.home.cards.filter(c => c.title === 'Testimonies'))
      )
      .catch(err => console.error(err));
  }, []);

  return (
    <section className="p-6 min-h-screen bg-navy text-white" id='testimonies'>
      <h1 className="text-4xl font-bold text-gold mb-8">Testimonies</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.a
            key={idx}
            href={card.link}
            className="bg-black/70 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition"
            whileHover={{ scale: 1.05 }}
          >
            <img src={card.image} alt={card.title} className="w-full h-64 object-cover" />
            <h2 className="p-4 text-xl font-semibold">{card.title}</h2>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
