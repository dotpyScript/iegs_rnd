import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const KpiCard = ({ title, value, change, trend, icon: Icon, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-dark-600 dark:text-dark-400 mb-2">
            {title}
          </p>
          <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-3">
            {value}
          </h3>
          <div className="flex items-center gap-2">
            {trend === 'up' ? (
              <div className="flex items-center gap-1 text-green-500">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-semibold">+{change}%</span>
              </div>
            ) : (
              <div className="flex items-center gap-1 text-red-500">
                <TrendingDown className="w-4 h-4" />
                <span className="text-sm font-semibold">{change}%</span>
              </div>
            )}
            <span className="text-sm text-dark-500 dark:text-dark-400">vs last month</span>
          </div>
        </div>
        <div className="flex-shrink-0">
          <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-accent-500 rounded-xl flex items-center justify-center">
            <Icon className="w-7 h-7 text-white" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default KpiCard;

