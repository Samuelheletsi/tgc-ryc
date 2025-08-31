'use client';
import { motion } from 'framer-motion';
import useInViewAnimation from '@/hooks/useInViewAnimation';

const variants = {
  visible: { y: 0, opacity: 1, transition: { duration: 1 } },
  hidden: { y: 50, opacity: 0 }
};

export default function AboutSection() {
  const [ref, controls] = useInViewAnimation(0.3);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative h-screen flex items-center justify-center bg-navy text-white p-6 overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className="max-w-4xl text-center space-y-6"
      >
        <h2 className="text-4xl font-bold text-gold" id='about'>About Us</h2>
        <p className="text-lg md:text-xl">
          Christ Embassy – Royalties Youth Church is a place of worship, service, and growth in Christ.
        </p>
      </motion.div>
    </motion.section>
  );
}
