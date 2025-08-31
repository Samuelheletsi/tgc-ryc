'use client';
import { motion } from 'framer-motion';

export default function Crossword() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="p-6 bg-black/70 text-white rounded-lg m-6"
    >
      <h2 className="text-3xl font-bold text-gold mb-4">Crossword Puzzle</h2>
      <p className="mb-4">Solve this fun Bible-themed crossword!</p>
      <div className="grid grid-cols-5 gap-1">
        {/* Example grid; replace with real crossword */}
        {Array.from({ length: 25 }).map((_, idx) => (
          <input
            key={idx}
            maxLength={1}
            className="w-12 h-12 text-center bg-white text-black font-bold"
          />
        ))}
      </div>
    </motion.section>
  );
}
