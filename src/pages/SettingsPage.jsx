import { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Bell, Lock, Globe, Palette } from 'lucide-react';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Dropdown from '../components/ui/Dropdown';
import { useTheme } from '../hooks/useTheme';

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    updates: false,
  });

  const languageOptions = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
    { value: 'fr', label: 'French' },
    { value: 'de', label: 'German' },
  ];

  const [language, setLanguage] = useState('en');

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-2">
          Settings
        </h1>
        <p className="text-dark-600 dark:text-dark-400">
          Manage your account and preferences
        </p>
      </motion.div>

      {/* Profile Settings */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <div className="flex items-center gap-3 mb-6">
          <User className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-bold text-dark-900 dark:text-white">
            Profile Settings
          </h2>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input label="First Name" placeholder="John" />
            <Input label="Last Name" placeholder="Doe" />
          </div>
          <Input label="Email" type="email" placeholder="admin@iegs.com" />
          <Input label="Phone" type="tel" placeholder="+1 (555) 123-4567" />
          <div className="flex justify-end">
            <Button>Save Changes</Button>
          </div>
        </div>
      </motion.div>

      {/* Appearance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <div className="flex items-center gap-3 mb-6">
          <Palette className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-bold text-dark-900 dark:text-white">
            Appearance
          </h2>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-3">
              Theme
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => theme === 'dark' && toggleTheme()}
                className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                  theme === 'light'
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-dark-300 dark:border-dark-600'
                }`}
              >
                <div className="w-12 h-12 bg-white rounded-lg mx-auto mb-2 border border-dark-200" />
                <p className="text-sm font-medium text-dark-900 dark:text-white">Light</p>
              </button>
              <button
                onClick={() => theme === 'light' && toggleTheme()}
                className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                    : 'border-dark-300 dark:border-dark-600'
                }`}
              >
                <div className="w-12 h-12 bg-dark-900 rounded-lg mx-auto mb-2" />
                <p className="text-sm font-medium text-dark-900 dark:text-white">Dark</p>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Notifications */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <div className="flex items-center gap-3 mb-6">
          <Bell className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-bold text-dark-900 dark:text-white">
            Notifications
          </h2>
        </div>
        <div className="space-y-4">
          {Object.entries(notifications).map(([key, value]) => (
            <div key={key} className="flex items-center justify-between">
              <div>
                <p className="font-medium text-dark-900 dark:text-white capitalize">
                  {key} Notifications
                </p>
                <p className="text-sm text-dark-600 dark:text-dark-400">
                  Receive {key} notifications about updates
                </p>
              </div>
              <button
                onClick={() => setNotifications({ ...notifications, [key]: !value })}
                className={`relative w-14 h-7 rounded-full transition-colors ${
                  value ? 'bg-primary-500' : 'bg-dark-300 dark:bg-dark-600'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    value ? 'translate-x-7' : ''
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Security */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <div className="flex items-center gap-3 mb-6">
          <Lock className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-bold text-dark-900 dark:text-white">
            Security
          </h2>
        </div>
        <div className="space-y-4">
          <Input label="Current Password" type="password" placeholder="••••••••" />
          <Input label="New Password" type="password" placeholder="••••••••" />
          <Input label="Confirm Password" type="password" placeholder="••••••••" />
          <div className="flex justify-end">
            <Button>Update Password</Button>
          </div>
        </div>
      </motion.div>

      {/* Language & Region */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft"
      >
        <div className="flex items-center gap-3 mb-6">
          <Globe className="w-6 h-6 text-primary-500" />
          <h2 className="text-xl font-bold text-dark-900 dark:text-white">
            Language & Region
          </h2>
        </div>
        <div className="space-y-4">
          <Dropdown
            options={languageOptions}
            value={language}
            onChange={setLanguage}
            placeholder="Select language"
          />
          <div className="flex justify-end">
            <Button>Save Preferences</Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsPage;

