import { PiListLight, PiXLight } from 'react-icons/pi';

type NavItemData = {
  id: string;
  label: string;
  items?: string[];
};

export const Header = () => {
  const navItems: NavItemData[] = [
    { id: 'item-1', label: 'Solutions', items: ['Paperless Office'] },
    { id: 'item-2', label: 'Resources', items: ['Blog', 'Newsletter'] },
    { id: 'item-3', label: 'About' },
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems.map((navItem) => {
              return (
                <li key={navItem.id}>
                  <a>{navItem.label}</a>
                  {navItem.items && (
                    <ul className="p-2">
                      {navItem.items.map((item, index) => {
                        return (
                          <li key={index}>
                            <a>{item}</a>
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
        <a className="btn btn-ghost text-xl">AIAA</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems.map((navItem) => {
            return (
              <li key={navItem.id}>
                {navItem.items ? (
                  <details>
                    <summary>{navItem.label}</summary>
                    <ul className="p-2">
                      {navItem.items.map((item, index) => {
                        return (
                          <li key={index}>
                            <a>{item}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </details>
                ) : (
                  <a>{navItem.label}</a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Contact</a>
      </div>
    </div>
  );
};
