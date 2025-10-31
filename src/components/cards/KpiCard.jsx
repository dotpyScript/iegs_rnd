import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';

const KpiCard = ({ title, value, change, trend, icon: Icon, index = 0, description = null }) => {
  const getTrendIcon = () => {
    if (trend === 'up') return TrendingUp;
    if (trend === 'down') return TrendingDown;
    return Minus;
  };

  const getTrendColor = () => {
    if (trend === 'up') return 'text-success-600 bg-success-50';
    if (trend === 'down') return 'text-red-600 bg-red-50';
    return 'text-gray-600 bg-gray-50';
  };

  const TrendIcon = getTrendIcon();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
        <Icon className="w-full h-full" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              {title}
            </p>
            {description && (
              <p className="text-xs text-gray-400">
                {description}
              </p>
            )}
          </div>
          <motion.div 
            whileHover={{ rotate: 5, scale: 1.05 }}
            className="flex-shrink-0 w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shadow-sm"
          >
            <Icon className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        {/* Value */}
        <div className="mb-4">
          <h3 className="text-4xl font-display font-bold text-gray-900 tracking-tight">
            {value}
          </h3>
        </div>

        {/* Trend */}
        <div className="flex items-center gap-2">
          <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg ${getTrendColor()}`}>
            <TrendIcon className="w-3.5 h-3.5" />
            <span className="text-xs font-bold">
              {trend === 'up' ? '+' : trend === 'down' ? '' : ''}{change}%
            </span>
          </div>
          <span className="text-xs text-gray-500 font-medium">
            vs last month
          </span>
        </div>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        initial={false}
      />
    </motion.div>
  );
};

export default KpiCard;
