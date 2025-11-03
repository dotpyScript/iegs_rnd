import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Moon, Sun, Mic, Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const WelcomeSection = ({
  userName = 'Angela',
  onThemeToggle = null,
  isDarkMode = false
}) => {
  const [greeting, setGreeting] = useState('Good Morning');
  const [searchQuery, setSearchQuery] = useState('');
  const [showNotifications, setShowNotifications] = useState(false);
  const notifRef = useRef(null);

  // Dummy notifications
  const notifications = [
    { id: 1, title: 'New project assigned', message: 'You have been assigned to Project X1', time: '5m ago', read: false },
    { id: 2, title: 'Meeting reminder', message: 'Team sync in 30 minutes', time: '10m ago', read: false },
    { id: 3, title: 'Report completed', message: 'Monthly report is ready for review', time: '1h ago', read: true },
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  // Set greeting based on time of day
  useEffect(() => {
    const updateGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) {
        setGreeting('Good Morning');
      } else if (hour < 18) {
        setGreeting('Good Afternoon');
      } else {
        setGreeting('Good Evening');
      }
    };
    
    updateGreeting();
    // Update greeting every minute
    const interval = setInterval(updateGreeting, 60000);
    return () => clearInterval(interval);
  }, []);

  // Close notifications on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleVoiceSearch = () => {
    console.log('Voice search activated');
    // Add voice search logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
      className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white dark:bg-white rounded-lg px-5 py-4 lg:p-6 shadow-sm border border-gray-200 dark:border-gray-300"
    >
      {/* Left: Greeting Message */}
      <div className="flex items-center gap-2">
        <h1 className="text-lg lg:text-2xl font-display font-bold text-black dark:text-black tracking-tight">
          {greeting}, {userName}
        </h1>
        <motion.span
          animate={{ rotate: [0, 14, -8, 14, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 2 }}
          className="text-2xl"
        >
          👋
        </motion.span>
      </div>

      {/* Right: Controls */}
      <div className="flex items-center gap-3">
        {/* Dark/Light Mode Toggle Switch */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onThemeToggle}
          className="relative flex items-center gap-1 p-1 rounded-full bg-gray-200 dark:bg-gray-200 transition-all duration-300 shadow-inner"
          style={{ width: '70px', height: '32px' }}
          aria-label="Toggle theme"
        >
          {/* Sun Icon (Left) */}
          <div className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 z-10 ${
            !isDarkMode ? 'text-white' : 'text-gray-500'
          }`}>
            <Sun className="w-4 h-4" />
          </div>

          {/* Moon Icon (Right) */}
          <div className={`flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300 z-10 ${
            isDarkMode ? 'text-white' : 'text-gray-500'
          }`}>
            <Moon className="w-4 h-4" />
          </div>

          {/* Sliding Toggle Indicator */}
          <motion.div
            className="absolute top-1 left-1 w-6 h-6 rounded-full shadow-md bg-black dark:bg-teal-500"
            animate={{
              x: isDarkMode ? 36 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30
            }}
          />
        </motion.button>

        {/* Notification Icon */}
        <div className="relative" ref={notifRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-black dark:text-teal-500" />
            {unreadCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center bg-black dark:bg-teal-500 text-white text-[10px] font-bold rounded-full px-1 shadow-lg"
              >
                {unreadCount}
              </motion.span>
            )}
          </motion.button>

          {/* Notifications Dropdown */}
          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-80 bg-white dark:bg-white rounded-xl shadow-xl border border-gray-200 dark:border-gray-300 overflow-hidden z-50"
              >
                <div className="p-3 border-b border-gray-200 dark:border-gray-300 bg-gray-100 dark:bg-gray-100">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-black dark:text-black text-sm">
                      Notifications
                    </h3>
                    {unreadCount > 0 && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-black dark:bg-teal-500 text-white rounded-full shadow-md">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                </div>
                <div className="max-h-[300px] overflow-y-auto">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                      className={`p-3 border-b border-gray-100 dark:border-gray-200 cursor-pointer transition-colors ${
                        !notification.read ? 'bg-gray-50 dark:bg-gray-50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                            !notification.read ? 'bg-black dark:bg-teal-500' : 'bg-gray-300 dark:bg-gray-300'
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs font-semibold text-black dark:text-black mb-0.5 truncate">
                            {notification.title}
                          </h4>
                          <p className="text-xs text-gray-600 dark:text-gray-600 mb-0.5 line-clamp-2">
                            {notification.message}
                          </p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-500">{notification.time}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-2 border-t border-gray-200 dark:border-gray-300 bg-gray-50 dark:bg-gray-50">
                  <button className="w-full text-xs font-semibold text-black dark:text-teal-500 hover:text-gray-700 dark:hover:text-teal-600 transition-colors py-1">
                    View all notifications
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Search Bar with Mic Icon */}
        <div className="relative" style={{ width: '200px' }}>
          <div className="flex items-center gap-2 rounded-lg px-3 py-2 border-2 border-gray-300 dark:border-gray-300 bg-white dark:bg-white hover:border-black dark:hover:border-teal-500 focus-within:border-black dark:focus-within:border-teal-500 focus-within:shadow-md transition-all duration-200">
            <Search className="w-4 h-4 text-black dark:text-teal-500 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none flex-1 text-sm text-black dark:text-black placeholder-gray-500 dark:placeholder-gray-500 min-w-0 focus:outline-none"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleVoiceSearch}
              className="p-1 hover:bg-gray-100 dark:hover:bg-gray-100 rounded transition-colors flex-shrink-0"
              aria-label="Voice search"
            >
              <Mic className="w-4 h-4 text-black dark:text-teal-500" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeSection;

