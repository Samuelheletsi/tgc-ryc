'use client';
import { motion } from 'framer-motion';
import useInViewAnimation from '@/hooks/useInViewAnimation';

const verseVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 50 }
};

export default function BibleVerseSection() {
  const [ref, controls] = useInViewAnimation(0.2);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={verseVariants}
      className="my-12 text-center"
    >
      <h3 className="text-2xl font-semibold">Bible Verse</h3>
      <p className="text-lg italic mt-4">
        “For God so loved the world that He gave His only Son...” – John 3:16
      </p>
    </motion.section>
  );
}
