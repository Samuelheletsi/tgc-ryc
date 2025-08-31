'use client';
import { motion } from 'framer-motion';
import useInViewAnimation from '@/hooks/useInViewAnimation';

const prayerVariants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0.95 }
};

export default function PrayerSection() {
  const [ref, controls] = useInViewAnimation(0.2);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={prayerVariants}
      className="my-12 text-center"
    >
      <h3 className="text-2xl font-semibold">Prayer of Salvation</h3>
      <p className="text-lg mt-4">
        Lord Jesus, I believe you are the Son of God. I confess with my mouth and believe in my heart that God raised you from the dead...
      </p>
    </motion.section>
  );
}
