'use client';
import { useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, RefCallback } from 'react';

export default function useInViewAnimation(
  threshold: number = 0.2
): [RefCallback<HTMLElement>, ReturnType<typeof useAnimation>] {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return [ref, controls];
}
