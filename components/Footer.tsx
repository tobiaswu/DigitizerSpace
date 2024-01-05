import { RouteId } from '@/utils';
import Link from 'next/link';
import { PiDotOutlineLight, PiTwitterLogoLight } from 'react-icons/pi';

export const Footer = () => {
  return (
    <footer className="footer items-center p-4 bg-neutral text-neutral-content">
      <aside className="items-center grid-flow-col">
        <p className="text-base">© 2024 TW Software Solutions LLC</p>
        <PiDotOutlineLight className="text-2xl" />
        <Link className="hover:text-primary" href={RouteId.privacy}>
          <p className="text-base">Privacy</p>
        </Link>
        {/* <PiDotOutlineLight />
        <Link className="hover:text-primary" href="/terms">
          <p className="text-base">Terms</p>
        </Link> */}
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href="https://twitter.com/digitizerspace">
          <PiTwitterLogoLight className="hover:text-primary text-3xl" />
        </Link>
      </nav>
    </footer>
  );
};
