import { motion } from 'framer-motion';
import { useContext } from 'react';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';

const KpiCard = ({
  title,
  value,
  change,
  trend,
  icon: Icon,
  index = 0,
  description = null,
  accentColor = 'blue',
}) => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  const getTrendIcon = () => {
    if (trend === 'up') return TrendingUp;
    if (trend === 'down') return TrendingDown;
    return Minus;
  };

  const getTrendColor = () => {
    if (isDarkMode) {
      if (trend === 'up')
        return 'text-gray-700 bg-gray-100 border border-gray-200';
      if (trend === 'down')
        return 'text-gray-700 bg-gray-100 border border-gray-200';
      return 'text-gray-700 bg-gray-100 border border-gray-200';
      // if (trend === 'up') return 'text-green-700 bg-green-50 border border-green-200';
      // if (trend === 'down') return 'text-red-700 bg-red-50 border border-red-200';
      // return 'text-gray-700 bg-gray-50 border border-gray-200';
    } else {
      if (trend === 'up')
        return 'text-gray-700 bg-gray-100 border border-gray-200';
      if (trend === 'down')
        return 'text-gray-700 bg-gray-100 border border-gray-200';
      return 'text-gray-700 bg-gray-100 border border-gray-200';
    }
  };

  const getAccentColorClasses = () => {
    const colors = {
      blue: {
        bg: isDarkMode ? 'bg-gray-100' : 'bg-gray-100', //bg-blue-500
        lightBg: isDarkMode ? 'bg-gray-50' : 'bg-gray-50', //bg-blue-50
        ring: isDarkMode ? 'ring-gray-200' : 'ring-gray-200', //ring-blue-100
        hoverBorder: isDarkMode
          ? 'hover:border-gray-300'
          : 'hover:border-gray-300',
        iconText: isDarkMode ? 'text-gray-700' : 'text-gray-700',
      },
      green: {
        bg: isDarkMode ? 'bg-gray-100' : 'bg-gray-100',
        lightBg: isDarkMode ? 'bg-gray-50' : 'bg-gray-50',
        ring: isDarkMode ? 'ring-gray-200' : 'ring-gray-200',
        hoverBorder: isDarkMode
          ? 'hover:border-gray-300'
          : 'hover:border-gray-300',
        iconText: isDarkMode ? 'text-gray-700' : 'text-gray-700',
      },
      purple: {
        bg: isDarkMode ? 'bg-gray-100' : 'bg-gray-100',
        lightBg: isDarkMode ? 'bg-gray-50' : 'bg-gray-50',
        ring: isDarkMode ? 'ring-gray-200' : 'ring-gray-200',
        hoverBorder: isDarkMode
          ? 'hover:border-gray-300'
          : 'hover:border-gray-300',
        iconText: isDarkMode ? 'text-gray-700' : 'text-gray-700',
      },
      orange: {
        bg: isDarkMode ? 'bg-gray-100' : 'bg-gray-100',
        lightBg: isDarkMode ? 'bg-gray-50' : 'bg-gray-50',
        ring: isDarkMode ? 'ring-gray-200' : 'ring-gray-200',
        hoverBorder: isDarkMode
          ? 'hover:border-gray-300'
          : 'hover:border-gray-300',
        iconText: isDarkMode ? 'text-gray-700' : 'text-gray-700',
      },
      cyan: {
        bg: isDarkMode ? 'bg-gray-100' : 'bg-gray-100',
        lightBg: isDarkMode ? 'bg-gray-50' : 'bg-gray-50',
        ring: isDarkMode ? 'ring-gray-200' : 'ring-gray-200',
        hoverBorder: isDarkMode
          ? 'hover:border-gray-300'
          : 'hover:border-gray-300',
        iconText: isDarkMode ? 'text-gray-700' : 'text-gray-700',
      },
      pink: {
        bg: isDarkMode ? 'bg-gray-100' : 'bg-gray-100',
        lightBg: isDarkMode ? 'bg-gray-50' : 'bg-gray-50',
        ring: isDarkMode ? 'ring-gray-200' : 'ring-gray-200',
        hoverBorder: isDarkMode
          ? 'hover:border-gray-300'
          : 'hover:border-gray-300',
        iconText: isDarkMode ? 'text-gray-700' : 'text-gray-700',
      },
    };
    return colors[accentColor] || colors.blue;
  };

  const colorClasses = getAccentColorClasses();
  const TrendIcon = getTrendIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.2 } }}
      className={`group relative rounded-2xl p-5 hover:shadow-md transition-all duration-300 border overflow-hidden cursor-pointer min-h-[145px]
        ${
          isDarkMode ? 'bg-white border-gray-200' : 'bg-white border-gray-200'
        } ${colorClasses.hoverBorder}`}
    >
      {/* Decorative Top Border Accent */}
      {/* <div
        className={`absolute top-0 left-0 right-0 h-1.5 ${
          isDarkMode ? 'bg-black' : 'bg-black'
        } transition-all duration-300`}
      /> */}

      {/* Background Decorative Circle */}
      <div
        className={`absolute -right-6 -top-6 w-28 h-28 rounded-full ${colorClasses.lightBg} opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-300`}
      />

      <div className='relative z-10'>
        {/* Header */}
        <div className='flex items-start justify-between mb-4'>
          <div className='flex-1'>
            <p
              className={`text-[11px] font-bold uppercase tracking-[0.1em] mb-0.5
              ${isDarkMode ? 'text-black' : 'text-black'}
            `}
            >
              {title}
            </p>
          </div>
          <motion.div
            whileHover={{ rotate: 360, scale: 1.15 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className={`flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg ${colorClasses.bg} ring-4 ${colorClasses.ring}`}
          >
            <Icon
              className={`w-5 h-5 ${colorClasses.iconText}`}
              strokeWidth={2.5}
            />
          </motion.div>
        </div>

        {/* Value with enhanced typography */}
        <div className='mb-3.5'>
          <h3
            className={`text-2xl font-display font-extrabold tracking-tight leading-none
            ${isDarkMode ? 'text-black' : 'text-black'}
          `}
          >
            {value}
          </h3>
        </div>

        {/* Trend / Subtext */}
        {description ? (
          <p
            className={`text-xs font-medium leading-relaxed
            ${isDarkMode ? 'text-black' : 'text-black'}
          `}
          >
            {description}
          </p>
        ) : (
          change !== undefined && (
            <div className='flex items-center gap-2'>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg ${getTrendColor()}`}
              >
                <TrendIcon className='w-3.5 h-3.5' strokeWidth={2.5} />
                <span className='text-xs font-bold'>
                  {trend === 'up' ? '+' : trend === 'down' ? '-' : ''}
                  {change}%
                </span>
              </motion.div>
              <span
                className={`text-[11px] font-semibold ${
                  isDarkMode ? 'text-black' : 'text-black'
                }`}
              >
                vs last month
              </span>
            </div>
          )
        )}
      </div>

      {/* Shimmer Effect on Hover */}
      <motion.div
        className='absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300'
        initial={false}
      >
        <div className='absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent' />
      </motion.div>

      {/* Bottom Glow Effect */}
      <div
        className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 ${
          isDarkMode ? colorClasses.bg : 'bg-gray-400'
        } opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}
      />
    </motion.div>
  );
};

export default KpiCard;
