import { RouteId } from '@/utils';
import Link from 'next/link';
import { PiListLight, PiXLight } from 'react-icons/pi';

type NavItemData = {
  id: string;
  label: string;
  url?: string;
  items?: NavItemData[];
};

export const Header = () => {
  const navItems: NavItemData[] = [
    {
      id: 'solutions',
      label: 'Solutions',
      items: [
        {
          id: 'solution-1',
          label: 'Consultation',
          url: RouteId.consultation,
        },
        {
          id: 'solution-2',
          label: 'Paperless Office',
          url: RouteId.paperless,
        },
      ],
    },
    {
      id: 'resources',
      label: 'Resources',
      items: [
        {
          id: 'resource-1',
          label: 'Blog',
          url: RouteId.blog,
        },
        {
          id: 'resource-2',
          label: 'Newsletter',
          url: '/#newsletter',
        },
      ],
    },
    { id: 'about', label: 'About', url: RouteId.about },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <details className="dropdown [&_.swap-on]:opacity-100 [&_.swap-off]:opacity-0 [&[open]_.swap-off]:opacity-100 [&[open]_.swap-on]:opacity-0">
          <summary className="btn btn-ghost swap lg:hidden">
            <PiListLight className="swap-on fill-current text-3xl" />
            <PiXLight className="swap-off fill-current text-3xl" />
          </summary>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-lg w-52"
          >
            {navItems.map((tab) => {
              return (
                <li key={tab.id}>
                  <p>{tab.label}</p>
                  {tab.items && (
                    <ul className="p-2">
                      {tab.items.map((item) => {
                        return (
                          <li key={item.id}>
                            <Link href={item.url ?? RouteId.root}>
                              {item.label}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </details>
        <Link href={RouteId.root}>
          <button className="btn text-xl">AIAA</button>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex gap-8">
        {navItems.map((navItem) => {
          return navItem.items ? (
            <div key={navItem.id} className="dropdown drowdown-hover">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                {navItem.label}
              </div>
              <ul
                tabIndex={0}
                className="p-2 z-[1] dropdown-content menu shadow bg-neutral rounded-lg w-52"
              >
                {navItem.items.map((item) => {
                  return (
                    <li key={item.id}>
                      <Link href={item.url ?? RouteId.root}>{item.label}</Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <Link key={navItem.id} href={navItem.url ?? RouteId.root}>
              <button className="btn btn-ghost">{navItem.label}</button>
            </Link>
          );
        })}
      </div>
      <div className="navbar-end">
        <Link href={RouteId.contact}>
          <button className="btn btn-neutral">Contact</button>
        </Link>
      </div>
    </div>
  );
};
