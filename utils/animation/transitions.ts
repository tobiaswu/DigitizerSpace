'use client';

import type { Variants } from 'framer-motion';

export const staggerAnimationVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
    },
  }),
};

export const itemAnimationVariant: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
    },
  },
};

export const fadeInAnimationVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};
