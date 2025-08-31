'use client';
import { useEffect, useState } from 'react';
import { SiteData } from '@/types';
import { motion } from 'framer-motion';

export default function RhapsodySection() {
  const [rhapsody, setRhapsody] = useState<SiteData['rhapsody'] | null>(null);

  useEffect(() => {
    fetch('/data/site.json')
      .then(res => res.json())
      .then((data: SiteData) => setRhapsody(data.rhapsody))
      .catch(err => console.error(err));
  }, []);

  if (!rhapsody) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="p-6 text-center bg-navy text-white"
    >
      <h2 className="text-4xl font-bold text-gold mb-4">{rhapsody.title}</h2>
      <p className="mb-6">{rhapsody.description}</p>
      <audio controls className="mx-auto">
        <source src={rhapsody.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </motion.section>
  );
}
