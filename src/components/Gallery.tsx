'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/./types';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface GalleryProps {
  images: Card[];
}

export default function Gallery({ images }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="p-6">
      <h2 className="text-3xl font-bold text-gold mb-6">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, i) => (
          <motion.img
            key={img.title}
            src={img.image}
            alt={img.title}
            className="w-full h-48 object-cover cursor-pointer rounded-lg shadow-lg"
            whileHover={{ scale: 1.05, rotate: 1 }}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {open && (
          <Lightbox
            open={open}
            index={index}
            close={() => setOpen(false)}
            slides={images.map(img => ({ src: img.image, title: img.title }))}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
