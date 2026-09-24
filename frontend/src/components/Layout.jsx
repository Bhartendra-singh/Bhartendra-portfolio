import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Sidebar from './Sidebar';

const tabs = [
  { name: 'About', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-bg px-4 py-6 lg:px-10 lg:py-10">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-6 lg:items-start">
        <Sidebar />

        <main className="flex-1 min-w-0">
          <div
            style={{ backgroundColor: '#0d0d0d' }}
            className="lg:sticky lg:top-0 lg:z-50 pt-6 -mt-6 pb-6 -mx-1 px-1"
          >
            <nav className="inline-flex gap-1 bg-panel border border-glass-border rounded-2xl p-1.5">
              {tabs.map((tab) => (
                <NavLink
                  key={tab.path}
                  to={tab.path}
                  end={tab.path === '/'}
                  className={({ isActive }) =>
                    `text-sm px-4 py-2 rounded-xl transition-colors ${
                      isActive
                        ? 'bg-accent text-white font-medium'
                        : 'text-text-secondary hover:text-text-primary'
                    }`
                  }
                >
                  {tab.name}
                </NavLink>
              ))}
            </nav>
          </div>

          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;



