import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard,
  FolderKanban,
  Plane,
  Package,
  DollarSign,
  Users,
  FileText,
  Settings,
  Menu,
  X,
} from 'lucide-react';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { path: '/', icon: LayoutDashboard, label: 'Overview' },
    { path: '/projects', icon: FolderKanban, label: 'Projects' },
    { path: '/drone-ops', icon: Plane, label: 'Drone Operations' },
    { path: '/inventory', icon: Package, label: 'Inventory' },
    { path: '/accounting', icon: DollarSign, label: 'Accounting' },
    { path: '/team', icon: Users, label: 'Team' },
    { path: '/reports', icon: FileText, label: 'Reports' },
    { path: '/settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && !isDesktop && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-screen w-72 bg-white dark:bg-dark-900 border-r border-dark-200 dark:border-dark-700 z-50 transition-transform duration-300 ease-in-out ${
          isDesktop ? 'translate-x-0 lg:static' : isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="h-20 flex items-center justify-between px-6 border-b border-dark-200 dark:border-dark-700">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-dark-900 dark:text-white">IEGS R&D</h1>
                <p className="text-xs text-dark-500">Admin Dashboard</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-dark-600 dark:text-dark-400" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto py-6 px-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-soft'
                        : 'text-dark-600 dark:text-dark-400 hover:bg-dark-100 dark:hover:bg-dark-800'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                      {isActive && (
                        <motion.div
                          layoutId="activeIndicator"
                          className="ml-auto w-1.5 h-1.5 bg-white rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-dark-200 dark:border-dark-700">
            <div className="flex items-center gap-3 px-4 py-3 bg-dark-50 dark:bg-dark-800 rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                alt="Admin"
                className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-200 dark:ring-primary-800"
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-dark-900 dark:text-white">Admin User</p>
                <p className="text-xs text-dark-500">admin@iegs.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

