import { RouteId } from '@/utils/route';
import Link from 'next/link';
import { PiListLight, PiTriangleLight, PiXLight } from 'react-icons/pi';

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
        // {
        //   id: 'solution-1',
        //   label: 'Consultation *coming soon',
        //   url: RouteId.consultation,
        // },
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
        // {
        //   id: 'resource-1',
        //   label: 'Blog *coming soon',
        //   url: RouteId.blog,
        // },
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
    <header className="navbar">
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
                  <Link key={tab.id} href={tab.url ?? RouteId.root}>
                    <p>{tab.label}</p>
                  </Link>
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
        <Link className="ml-2" href={RouteId.root}>
          <p className="text-xl font-bold bg-gradient-to-r from-slate-100 to-slate-300 text-transparent bg-clip-text">
            DigitizerSpace
          </p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex gap-8">
        {navItems.map((navItem) => {
          return navItem.items ? (
            <div key={navItem.id} className="group">
              <div tabIndex={0} role="button" className="btn btn-ghost m-1">
                {navItem.label}
                <PiTriangleLight className="text-primary rotate-180 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              <ul
                tabIndex={0}
                className="p-2 z-[1] hidden menu absolute shadow bg-neutral rounded-lg w-52 group-hover:block"
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
        <Link className="ml-4" href={RouteId.contact}>
          <button className="btn btn-neutral btn-outline border-primary">
            Contact
          </button>
        </Link>
      </div>
    </header>
  );
};
