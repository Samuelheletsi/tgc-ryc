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
      className="relative overflow-hidden rounded-lg cursor-pointer shadow-lg"
    >
      <img src={card.image} alt={card.title} className="w-full h-64 object-cover" />
      <Link href={card.link} className="absolute inset-0 flex items-center justify-center text-white bg-black/30 text-xl font-bold">
        {card.title}
      </Link>
    </motion.div>
  );
}
