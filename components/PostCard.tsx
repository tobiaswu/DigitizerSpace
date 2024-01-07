import { RouteId } from '@/utils/route';
import Image from 'next/image';
import Link from 'next/link';

export interface PostCardProps {
  className: string;
  preview?: boolean;
}

export const PostCard = ({ className, preview }: PostCardProps) => {
  return (
    <div className={className}>
      <figure className="min-w-fit">
        <Link className="w-full" href={`${RouteId.blog}/my-post`}>
          <Image
            className="object-cover w-full h-full"
            src="/images/ai-hagrid-robots.webp"
            alt="Album"
            width={300}
            height={300}
            loading="lazy"
          />
        </Link>
      </figure>
      <div className="card-body">
        <div className="badge badge-secondary badge-lg rounded-lg mb-2">
          Trends
        </div>
        <Link className="w-fit" href={`${RouteId.blog}/my-post`}>
          <h2 className="card-title text-2xl mb-2">The paperless office</h2>
        </Link>
        {preview && (
          <p>
            Do you still deal with paper, documents and so on in your day to day
            business activities? Forget about that. Learn how Chris F. fully
            digitalized his real estate business and now has everything safely
            stored on his server and can utilize intelligent search.
          </p>
        )}
        <div className="card-actions">
          <p className="text-base self-end">Oct 19, 2023</p>
          <Link href={`${RouteId.blog}/my-post`}>
            <button className="btn btn-primary btn-outline btn-sm mt-2">
              5 mins read
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
