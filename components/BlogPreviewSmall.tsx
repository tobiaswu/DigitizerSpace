import { RouteId } from '@/utils/route';
import Link from 'next/link';
import { PostCard } from './PostCard';
import { PiTriangleLight } from 'react-icons/pi';

export interface BlogPreviewSmallProps {}

export const BlogPreviewSmall = ({}: BlogPreviewSmallProps) => {
  return (
    <div className="flex gap-8">
      <div className="flex flex-col justify-between max-w-sm">
        <div>
          <p className="text-base">Dolore dolore voluptate aliqua ut mi</p>
          <h2 className="py-4 text-2xl font-semibold">Keep reading</h2>
          <p className="mb-4">
            Laborum dolore aute et incididunt commodo consectetur eiusmod magna.
          </p>
          <Link className="link link-primary" href={RouteId.blog}>
            View more
          </Link>
        </div>
        <div className="flex gap-2 justify-end mt-4">
          <button className="btn rounded-full btn-outline hover:btn-primary">
            <PiTriangleLight className="-rotate-90" />
          </button>
          <button className="btn rounded-full btn-outline hover:btn-primary">
            <PiTriangleLight className="rotate-90" />
          </button>
        </div>
      </div>
      {/* show 1 card, sm: 2 cards, lg: 3 cards */}
      {/* TODO: add carousel navigation */}
      <PostCard className="card bg-neutral shadow-md rounded-lg" />
      <PostCard className="hidden sm:block card bg-neutral shadow-md rounded-lg" />
      <PostCard className="hidden lg:block card bg-neutral shadow-md rounded-lg" />
    </div>
  );
};
