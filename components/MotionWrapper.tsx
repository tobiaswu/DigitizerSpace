'use client';

import { Variants, motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionWrapperProps {
  className?: string;
  children: ReactNode;
  index?: number;
  variants?: Variants;
}

export const MotionWrapper = ({
  className,
  children,
  index,
  variants,
}: MotionWrapperProps) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      {children}
    </motion.div>
  );
};
