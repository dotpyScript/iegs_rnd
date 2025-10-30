import { useState } from 'react';
import { Menu, Search, Bell, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../hooks/useTheme';
import { notifications } from '../../utils/dummyData';

const Navbar = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <nav className="h-20 bg-white dark:bg-dark-900 border-b border-dark-200 dark:border-dark-700 px-6 flex items-center justify-between sticky top-0 z-30">
      {/* Left Section */}
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg transition-colors"
        >
          <Menu className="w-6 h-6 text-dark-600 dark:text-dark-400" />
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex items-center gap-3 bg-dark-50 dark:bg-dark-800 rounded-xl px-4 py-2.5 flex-1 max-w-md">
          <Search className="w-5 h-5 text-dark-400" />
          <input
            type="text"
            placeholder="Search projects, drones, reports..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none outline-none flex-1 text-dark-900 dark:text-white placeholder-dark-400"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleTheme}
          className="p-2.5 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg transition-colors"
        >
          {theme === 'dark' ? (
            <Sun className="w-5 h-5 text-yellow-500" />
          ) : (
            <Moon className="w-5 h-5 text-dark-600" />
          )}
        </motion.button>

        {/* Notifications */}
        <div className="relative">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2.5 hover:bg-dark-100 dark:hover:bg-dark-800 rounded-lg transition-colors relative"
          >
            <Bell className="w-5 h-5 text-dark-600 dark:text-dark-400" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            )}
          </motion.button>

          {/* Notifications Dropdown */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-2 w-80 bg-white dark:bg-dark-800 rounded-2xl shadow-soft-lg border border-dark-200 dark:border-dark-700 overflow-hidden"
              >
                <div className="p-4 border-b border-dark-200 dark:border-dark-700">
                  <h3 className="font-semibold text-dark-900 dark:text-white">
                    Notifications
                  </h3>
                  {unreadCount > 0 && (
                    <p className="text-sm text-dark-500">{unreadCount} unread</p>
                  )}
                </div>
                <div className="max-h-96 overflow-y-auto">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-4 border-b border-dark-100 dark:border-dark-700 hover:bg-dark-50 dark:hover:bg-dark-700/50 transition-colors ${
                        !notification.read ? 'bg-primary-50/30 dark:bg-primary-900/10' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            notification.type === 'success'
                              ? 'bg-green-500'
                              : notification.type === 'warning'
                              ? 'bg-yellow-500'
                              : 'bg-blue-500'
                          }`}
                        />
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-dark-900 dark:text-white mb-1">
                            {notification.title}
                          </h4>
                          <p className="text-sm text-dark-600 dark:text-dark-400 mb-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-dark-500">{notification.time}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Avatar */}
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
          alt="User"
          className="w-10 h-10 rounded-full object-cover ring-2 ring-primary-200 dark:ring-primary-800 cursor-pointer"
        />
      </div>
    </nav>
  );
};

export default Navbar;

