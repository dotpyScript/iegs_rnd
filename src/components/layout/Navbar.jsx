import { useState, useRef, useEffect } from 'react';
import { Menu, Search, Bell, User, Settings, LogOut, HelpCircle, ChevronDown, MessageSquare, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { notifications } from '../../utils/dummyData';

const Navbar = ({ onMenuClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showMessages, setShowMessages] = useState(false);
  const [showMail, setShowMail] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchFocused, setSearchFocused] = useState(false);
  const notifRef = useRef(null);
  const userRef = useRef(null);
  const messagesRef = useRef(null);
  const mailRef = useRef(null);

  const unreadCount = notifications.filter(n => !n.read).length;

  // Dummy data for messages and mail
  const messages = [
    { id: 1, name: 'John Smith', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', message: 'Hey, can we schedule a meeting?', time: '5m ago', unread: true },
    { id: 2, name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', message: 'The project proposal looks great!', time: '1h ago', unread: true },
    { id: 3, name: 'Mike Wilson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', message: 'Thanks for the update', time: '3h ago', unread: false },
  ];

  const emails = [
    { id: 1, from: 'team@iegs.com', subject: 'Weekly Report Ready', preview: 'Your weekly analytics report is now available...', time: '10m ago', unread: true },
    { id: 2, from: 'hr@iegs.com', subject: 'New Team Member', preview: 'Please welcome our new engineer joining next week...', time: '2h ago', unread: true },
    { id: 3, from: 'project@iegs.com', subject: 'Milestone Completed', preview: 'Congratulations! Project milestone achieved...', time: '5h ago', unread: true },
  ];

  const unreadMessages = messages.filter(m => m.unread).length;
  const unreadEmails = emails.filter(e => e.unread).length;

  // Close dropdowns on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
      if (userRef.current && !userRef.current.contains(event.target)) {
        setShowUserMenu(false);
      }
      if (messagesRef.current && !messagesRef.current.contains(event.target)) {
        setShowMessages(false);
      }
      if (mailRef.current && !mailRef.current.contains(event.target)) {
        setShowMail(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const userMenuItems = [
    { icon: User, label: 'Profile', onClick: () => console.log('Profile') },
    { icon: Settings, label: 'Settings', onClick: () => console.log('Settings') },
    { icon: HelpCircle, label: 'Help Center', onClick: () => console.log('Help') },
    { icon: LogOut, label: 'Sign Out', onClick: () => console.log('Logout'), danger: true },
  ];

  return (
    <nav className="h-12 bg-white border-b border-gray-200 px-4 lg:px-6 flex items-center justify-between sticky top-0 z-40 shadow-sm">
      {/* Left Section - Mobile Menu & Search */}
      <div className="flex items-center gap-3 flex-1">
        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onMenuClick}
          className="lg:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5 text-gray-700" />
        </motion.button>

        {/* Search Bar - Left Aligned */}
        <div className="w-full max-w-md">
          <motion.div 
            className={`flex items-center gap-2 rounded-lg px-3 py-1.5 border transition-all duration-200 ${
              searchFocused 
                ? 'border-primary-400' 
                : 'bg-gray-50 border-transparent'
            }`}
          >
            <Search className={`w-4 h-4 transition-colors flex-shrink-0`} />
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="bg-transparent border-none outline-none flex-1 text-sm text-gray-900 placeholder-gray-500 min-w-0 focus:outline-none focus:ring-0 focus:border-none"
            />
            {searchQuery && (
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-gray-500 bg-gray-200 rounded border border-gray-300">
                ESC
              </kbd>
            )}
          </motion.div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center justify-end gap-1.5">
        {/* Messages Icon */}
        <div className="hidden md:block relative" ref={messagesRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMessages(!showMessages)}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors relative"
            aria-label="Messages"
          >
            <MessageSquare className="w-5 h-5 text-gray-600" />
            {unreadMessages > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-primary-500 rounded-full"
              />
            )}
          </motion.button>

          {/* Messages Dropdown */}
          <AnimatePresence>
            {showMessages && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="p-3 border-b border-gray-200 bg-primary-50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-gray-900 text-sm">
                      Messages
                    </h3>
                    {unreadMessages > 0 && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-primary-500 text-white rounded-full">
                        {unreadMessages} unread
                      </span>
                    )}
                  </div>
                </div>
                <div className="max-h-[400px] overflow-y-auto scrollbar-thin">
                  {messages.map((msg) => (
                    <motion.div
                      key={msg.id}
                      whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                      className={`p-3 border-b border-gray-100 cursor-pointer transition-colors ${
                        msg.unread ? 'bg-primary-50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className="relative flex-shrink-0">
                          <img
                            src={msg.avatar}
                            alt={msg.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          {msg.unread && (
                            <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-primary-500 rounded-full border-2 border-white" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-0.5">
                            <h4 className="text-xs font-semibold text-gray-900 truncate">
                              {msg.name}
                            </h4>
                            <p className="text-[10px] text-gray-500 flex-shrink-0 ml-2">{msg.time}</p>
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {msg.message}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-2 border-t border-gray-200 bg-gray-50">
                  <button className="w-full text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors py-1">
                    View all messages
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Mail Icon */}
        <div className="hidden md:block relative" ref={mailRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowMail(!showMail)}
            className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors relative"
            aria-label="Mail"
          >
            <Mail className="w-5 h-5 text-gray-600" />
            {unreadEmails > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 flex items-center justify-center bg-primary-500 text-white text-[9px] font-bold rounded-full px-1"
              >
                {unreadEmails}
              </motion.span>
            )}
          </motion.button>

          {/* Mail Dropdown */}
          <AnimatePresence>
            {showMail && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="p-3 border-b border-gray-200 bg-primary-50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-gray-900 text-sm">
                      Inbox
                    </h3>
                    {unreadEmails > 0 && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-primary-500 text-white rounded-full">
                        {unreadEmails} unread
                      </span>
                    )}
                  </div>
                </div>
                <div className="max-h-[400px] overflow-y-auto scrollbar-thin">
                  {emails.map((email) => (
                    <motion.div
                      key={email.id}
                      whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                      className={`p-3 border-b border-gray-100 cursor-pointer transition-colors ${
                        email.unread ? 'bg-primary-50' : ''
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                            email.unread ? 'bg-primary-500' : 'bg-gray-300'
                          }`}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-0.5">
                            <h4 className="text-xs font-semibold text-gray-900 truncate">
                              {email.from}
                            </h4>
                            <p className="text-[10px] text-gray-500 flex-shrink-0 ml-2">{email.time}</p>
                          </div>
                          <h5 className="text-xs font-medium text-gray-800 mb-0.5 truncate">
                            {email.subject}
                          </h5>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {email.preview}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="p-2 border-t border-gray-200 bg-gray-50">
                  <button className="w-full text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors py-1">
                    View all emails
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Notifications"
          >
            <Bell className="w-5 h-5 text-gray-600" />
            {unreadCount > 0 && (
              <motion.span 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 min-w-[16px] h-4 flex items-center justify-center bg-primary-500 text-white text-[9px] font-bold rounded-full px-1 shadow-sm"
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
                className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="p-3 border-b border-gray-200 bg-primary-50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display font-semibold text-gray-900 text-sm">
                      Notifications
                    </h3>
                    {unreadCount > 0 && (
                      <span className="px-2 py-0.5 text-[10px] font-semibold bg-primary-500 text-white rounded-full">
                        {unreadCount} new
                      </span>
                    )}
                  </div>
                </div>
                <div className="max-h-[400px] overflow-y-auto scrollbar-thin">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
                        className={`p-3 border-b border-gray-100 cursor-pointer transition-colors ${
                          !notification.read ? 'bg-primary-50' : ''
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <div
                            className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                              notification.type === 'success'
                                ? 'bg-success-500'
                                : notification.type === 'warning'
                                ? 'bg-yellow-500'
                                : 'bg-primary-500'
                            }`}
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="text-xs font-semibold text-gray-900 mb-0.5 truncate">
                              {notification.title}
                            </h4>
                            <p className="text-xs text-gray-600 mb-0.5 line-clamp-2">
                              {notification.message}
                            </p>
                            <p className="text-[10px] text-gray-500">{notification.time}</p>
                          </div>
                          {!notification.read && (
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0 mt-1.5" />
                          )}
                        </div>
                      </motion.div>
                    ))
                  ) : (
                    <div className="p-8 text-center">
                      <Bell className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                      <p className="text-xs text-gray-500">No notifications</p>
                    </div>
                  )}
                </div>
                {notifications.length > 0 && (
                  <div className="p-2 border-t border-gray-200 bg-gray-50">
                    <button className="w-full text-xs font-medium text-primary-600 hover:text-primary-700 transition-colors py-1">
                      View all notifications
                    </button>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Menu */}
        <div className="relative" ref={userRef}>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-1.5 pl-1.5 pr-2 py-1 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
                alt="User"
                className="w-7 h-7 rounded-lg object-cover ring-2 ring-gray-200"
              />
              <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-success-500 border-2 border-white rounded-full" />
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-gray-500 transition-transform hidden sm:block ${showUserMenu ? 'rotate-180' : ''}`} />
          </motion.button>

          {/* User Dropdown */}
          <AnimatePresence>
            {showUserMenu && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
              >
                <div className="p-2.5 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-900">Admin User</p>
                  <p className="text-[10px] text-gray-500 truncate">admin@iegs.com</p>
                </div>
                <div className="py-1.5">
                  {userMenuItems.map((item, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ x: 4 }}
                      onClick={item.onClick}
                      className={`w-full flex items-center gap-2.5 px-3 py-2 text-xs transition-colors ${
                        item.danger
                          ? 'text-red-600 hover:bg-red-50'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <item.icon className="w-3.5 h-3.5" />
                      <span className="font-medium">{item.label}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
