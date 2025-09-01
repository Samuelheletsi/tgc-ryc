'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card as CardType } from '../types';

interface Props {
  card: CardType;
}

export default function Card({ card }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 1 }}
      className="relative overflow-hidden rounded-lg cursor-pointer shadow-lg w-full"
    >
      {/* Responsive image height instead of fixed h-64 */}
      <img
        src={card.image}
        alt={card.title}
        className="w-full aspect-[4/3] object-cover sm:aspect-[16/9]"
      />

      {/* Overlay */}
      <Link
        href={card.link}
        className="absolute inset-0 flex items-center justify-center text-white bg-black/40 hover:bg-black/50 transition text-lg sm:text-xl font-bold text-center px-2"
      >
        {card.title}
      </Link>
    </motion.div>
  );
}
