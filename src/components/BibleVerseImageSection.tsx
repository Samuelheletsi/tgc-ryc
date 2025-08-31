'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { SiteData, BibleVerseImage } from '@/types';

export default function BibleVerseImageSection() {
  const [verses, setVerses] = useState<BibleVerseImage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/data/site.json')
      .then(res => res.json())
      .then((data: SiteData) => {
        setVerses(data.bibleVersesWithImages || []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load Bible verses with images', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-white text-center mt-8">Loading verses...</p>;
  if (!verses.length) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="p-6 grid md:grid-cols-2 gap-6"
    >
      {verses.map((v, idx) => (
        <div key={idx} className="relative rounded-lg overflow-hidden shadow-lg">
          <Image
            src={v.image}
            alt={v.verse}
            width={600}
            height={400}
            className="w-full h-64 object-cover"
            priority={idx === 0} // preload first image
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white p-4">
            <h3 className="text-2xl font-bold">{v.verse}</h3>
            <p className="mt-2 text-center">{v.text}</p>
          </div>
        </div>
      ))}
    </motion.section>
  );
}
