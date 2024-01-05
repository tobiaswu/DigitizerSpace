'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface BlogContentRefProps {
  hash: string;
  title: string;
}

export const BlogContentRef = ({ hash, title }: BlogContentRefProps) => {
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/#${hash}`} className="link link-info">
      {title}
    </Link>
  );
};
