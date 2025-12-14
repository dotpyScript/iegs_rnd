import { motion } from 'framer-motion';
import { useContext } from 'react';
import { Activity, Clock, CheckCircle, AlertTriangle } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

const QuickStatsWidget = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  const recentUpdates = [
    {
      id: 1,
      title: 'Project Alpha completed',
      time: '5m ago',
      type: 'success',
    },
    { id: 2, title: 'Budget report submitted', time: '12m ago', type: 'info' },
    { id: 3, title: 'Drone test scheduled', time: '25m ago', type: 'warning' },
    { id: 4, title: 'Team meeting at 3 PM', time: '1h ago', type: 'info' },
    { id: 5, title: 'Team meeting at 3 PM', time: '1h ago', type: 'info' },
  ];

  const getUpdateIcon = (type) => {
    if (type === 'success') return CheckCircle;
    if (type === 'warning') return AlertTriangle;
    return Clock;
  };

  const getIconColor = (type) => {
    if (isDarkMode) {
      if (type === 'success') return 'text-green-600 bg-green-50';
      if (type === 'warning') return 'text-orange-600 bg-orange-50';
      return 'text-blue-600 bg-blue-50';
    } else {
      if (type === 'success') return 'text-gray-700 bg-gray-100';
      if (type === 'warning') return 'text-gray-700 bg-gray-100';
      return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`relative rounded-2xl p-5  border overflow-hidden min-h-[145px] flex flex-col
        ${
          isDarkMode ? 'bg-white border-gray-200' : 'bg-white border-gray-200'
        }`}
    >
      {/* Decorative Top Border */}
      {/* <div className={`absolute top-0 left-0 right-0 h-1.5 ${isDarkMode ? 'bg-teal-500' : 'bg-black'}`} /> */}

      {/* Header */}
      <div className='flex items-center gap-2 mb-3'>
        <Activity
          className={`w-4 h-4 ${isDarkMode ? 'text-black' : 'text-black'}`} //text-blue-600
        />
        <h3
          className={`text-sm font-display font-bold tracking-tight
          ${isDarkMode ? 'text-black' : 'text-black'}
        `} //text-gray-900
        >
          Recent Activity
        </h3>
      </div>

      {/* Recent Updates - Scrollable List */}
      <div className='flex-1 overflow-y-auto space-y-1.5 scrollbar-thin pr-1'>
        {recentUpdates.map((update, index) => {
          const Icon = getUpdateIcon(update.type);
          return (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ x: 2 }}
              className={`flex items-start gap-2 p-2 rounded-lg transition-all duration-200 cursor-pointer
                ${isDarkMode ? 'hover:bg-gray-50' : 'hover:bg-gray-50'}`}
            >
              <div
                className={`w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 ${getIconColor(
                  update.type
                )}`}
              >
                <Icon className='w-2 h-2' />
              </div>
              <div className='flex-1 min-w-0'>
                <p
                  className={`text-[11px] font-medium mb-0.5 line-clamp-1
                  ${isDarkMode ? 'text-black' : 'text-black'}
                `} //text-gray-900
                >
                  {update.title}
                </p>
                <p
                  className={`text-[9px]
                  ${isDarkMode ? 'text-gray-600' : 'text-gray-600'}
                `}
                >
                  {update.time}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Footer Action */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className={`w-full mt-3 py-1.5 rounded-lg text-[11px] font-bold transition-all duration-200
          ${
            isDarkMode
              ? 'bg-black hover:bg-gray-800 text-white'
              : 'bg-black hover:bg-gray-800 text-white'
          }`} //bg-teal-500 hover:bg-teal-600 text-white
      >
        View All
      </motion.button>
    </motion.div>
  );
};

export default QuickStatsWidget;
