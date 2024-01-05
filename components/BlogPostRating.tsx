'use client';

import ReactStars from 'react-stars';

export interface BlogPostRatingProps {}

export const BlogPostRating = ({}: BlogPostRatingProps) => {
  return (
    <div className="bg-neutral p-8 rounded-lg h-40 w-1/2 flex flex-col justify-center">
      <p className="text-xl mb-4">How would you rate this article?</p>
      <ReactStars count={5} size={24} />
    </div>
  );
};
