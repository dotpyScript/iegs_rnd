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
  X,
  ChevronRight,
  Zap,
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

  const menuSections = [
    {
      label: 'Main',
      items: [
        { path: '/', icon: LayoutDashboard, label: 'Overview', badge: null },
        { path: '/projects', icon: FolderKanban, label: 'Projects', badge: '12' },
        { path: '/drone-ops', icon: Plane, label: 'Drone Operations', badge: null },
      ]
    },
    {
      label: 'Management',
      items: [
        { path: '/inventory', icon: Package, label: 'Inventory', badge: null },
        { path: '/accounting', icon: DollarSign, label: 'Accounting', badge: null },
        { path: '/team', icon: Users, label: 'Team', badge: null },
        { path: '/reports', icon: FileText, label: 'Reports', badge: 'New' },
      ]
    },
    {
      label: 'System',
      items: [
        { path: '/settings', icon: Settings, label: 'Settings', badge: null },
      ]
    }
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isDesktop || isOpen ? 0 : -280 }}
        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
        className={`fixed left-0 top-0 h-screen w-[280px] bg-white border-r border-gray-200 z-50 ${
          isDesktop ? 'lg:static' : ''
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="h-16 flex items-center justify-between px-5 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 bg-primary-500 rounded-xl flex items-center justify-center shadow-sm">
                  <Plane className="w-5 h-5 text-white" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-3 h-3 bg-success-500 rounded-full border-2 border-white"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h1 className="text-base font-display font-bold text-gray-900 tracking-tight">
                  IEGS R&D
                </h1>
                <p className="text-[10px] text-gray-500 font-medium">
                  Admin Portal
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 text-gray-600" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto scrollbar-thin py-4 px-3">
            {menuSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-6">
                <h3 className="px-3 mb-2 text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                  {section.label}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                      className={({ isActive }) =>
                        `group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                          isActive
                            ? 'bg-primary-500 text-white shadow-sm'
                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {/* Active Indicator */}
                          {isActive && (
                            <motion.div
                              layoutId="activeTab"
                              className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white rounded-r-full"
                              transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          
                          {/* Icon */}
                          <div className={`relative ${isActive ? 'text-white' : ''}`}>
                            <item.icon className="w-5 h-5" />
                          </div>
                          
                          {/* Label */}
                          <span className="flex-1 text-sm font-medium">
                            {item.label}
                          </span>
                          
                          {/* Badge */}
                          {item.badge && (
                            <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                              isActive 
                                ? 'bg-white/20 text-white' 
                                : 'bg-primary-100 text-primary-700'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                          
                          {/* Hover Arrow */}
                          {!isActive && (
                            <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                          )}
                        </>
                      )}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Quick Actions Card */}
          <div className="p-3 border-t border-gray-200">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="relative overflow-hidden bg-primary-500 rounded-xl p-4 cursor-pointer"
            >
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-4 h-4 text-white" />
                  <h4 className="text-sm font-bold text-white">Quick Start</h4>
                </div>
                <p className="text-xs text-white/90 mb-3">
                  Launch a new project or mission
                </p>
                <button className="w-full py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs font-semibold rounded-lg transition-colors">
                  Get Started
                </button>
              </div>
            </motion.div>
          </div>

          {/* User Profile */}
          <div className="p-3 border-t border-gray-200">
            <motion.div 
              whileHover={{ scale: 1.01 }}
              className="flex items-center gap-3 px-3 py-2.5 bg-gray-100 rounded-xl cursor-pointer group"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                  alt="Admin"
                  className="w-9 h-9 rounded-lg object-cover ring-2 ring-gray-200"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-success-500 border-2 border-gray-100 rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">
                  Admin User
                </p>
                <p className="text-xs text-gray-500 truncate">
                  admin@iegs.com
                </p>
              </div>
              <Settings className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          </div>
        </div>
      </motion.aside>
    </>
  );
};

export default Sidebar;
