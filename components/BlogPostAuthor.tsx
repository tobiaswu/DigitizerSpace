import Image from 'next/image';
import Link from 'next/link';
import { PiLinkedinLogoLight, PiTwitterLogoLight } from 'react-icons/pi';

export interface BlogPostAuthorProps {
  name: string;
  avatarUrl: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

export const BlogPostAuthor = ({
  name,
  avatarUrl,
  twitterUrl,
  linkedinUrl,
}: BlogPostAuthorProps) => {
  return (
    <div className="bg-neutral p-8 rounded-lg shadow-md h-40 w-fit flex flex-col justify-center">
      <p className="text-xl mb-4">Author</p>
      <div className="flex gap-4 items-center">
        <Image
          src={avatarUrl}
          alt={`Avatar of ${name}`}
          width={80}
          height={80}
          className="rounded-full"
        />
        <div className="flex flex-col gap-2">
          <p>{name}</p>
          <div className="flex gap-2">
            {twitterUrl && (
              <Link href={twitterUrl} className="link link-primary">
                <PiTwitterLogoLight className="text-2xl" />
              </Link>
            )}
            {linkedinUrl && (
              <Link href={linkedinUrl} className="link link-primary">
                <PiLinkedinLogoLight className="text-2xl" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
