'use client';

import { DotLottiePlayer } from '@dotlottie/react-player';

export interface LottieAnimationProps {
  src: string;
}

export const LottieAnimation = ({ src }: LottieAnimationProps) => {
  return <DotLottiePlayer src={src} autoplay loop />;
};
