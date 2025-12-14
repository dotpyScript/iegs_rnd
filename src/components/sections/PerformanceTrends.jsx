import { motion } from 'framer-motion';
import { useContext } from 'react';
import { TrendingUp, DollarSign, Users, Clock, Activity } from 'lucide-react';
import { ThemeContext } from '../../context/ThemeContext';
import AreaChart from '../charts/AreaChart';
import GroupedBarChart from '../charts/GroupedBarChart';
import MultiLineChart from '../charts/MultiLineChart';
import StackedBarChart from '../charts/StackedBarChart';

const PerformanceTrends = () => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  // Sample Data - Replace with real data
  const projectCompletionData = [
    { month: 'Jan', planned: 20, completed: 18 },
    { month: 'Feb', planned: 25, completed: 22 },
    { month: 'Mar', planned: 22, completed: 20 },
    { month: 'Apr', planned: 28, completed: 26 },
    { month: 'May', planned: 30, completed: 29 },
    { month: 'Jun', planned: 27, completed: 25 },
  ];

  const budgetExpenditureData = [
    { month: 'Jan', budget: 15, expenditure: 13 },
    { month: 'Feb', budget: 18, expenditure: 16 },
    { month: 'Mar', budget: 20, expenditure: 19 },
    { month: 'Apr', budget: 22, expenditure: 20 },
    { month: 'May', budget: 19, expenditure: 18 },
    { month: 'Jun', budget: 25, expenditure: 23 },
  ];

  const headcountData = [
    { month: 'Jan', engineering: 45, design: 15, operations: 20 },
    { month: 'Feb', engineering: 47, design: 16, operations: 21 },
    { month: 'Mar', engineering: 50, design: 17, operations: 22 },
    { month: 'Apr', engineering: 52, design: 18, operations: 23 },
    { month: 'May', engineering: 55, design: 19, operations: 24 },
    { month: 'Jun', engineering: 58, design: 20, operations: 25 },
  ];

  const resourceUtilizationData = [
    { department: 'Engineering', utilized: 85, idle: 15 },
    { department: 'Design', utilized: 78, idle: 22 },
    { department: 'Operations', utilized: 92, idle: 8 },
    { department: 'Marketing', utilized: 70, idle: 30 },
    { department: 'Sales', utilized: 88, idle: 12 },
  ];

  const chartColors = {
    light: {
      primary: ['#000000', '#4b5563'],
      budget: ['#374151', '#6b7280'],
      headcount: ['#111827', '#4b5563', '#9ca3af'],
      resource: ['#1f2937', '#d1d5db'],
    },
    dark: {
      primary: ['#000000', '#4b5563'],
      budget: ['#374151', '#6b7280'],
      headcount: ['#111827', '#4b5563', '#9ca3af'],
      resource: ['#1f2937', '#d1d5db'],
      // primary: ['#3b82f6', '#10b981'],
      // budget: ['#8b5cf6', '#f59e0b'],
      // headcount: ['#3b82f6', '#10b981', '#f59e0b'],
      // resource: ['#3b82f6', '#e5e7eb'],
    },
  };

  const colors = isDarkMode ? chartColors.dark : chartColors.light;

  const chartContainerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const ChartCard = ({
    title,
    subtitle,
    icon: Icon,
    children,
    index,
    className = '',
  }) => (
    <motion.div
      custom={index}
      initial='hidden'
      animate='visible'
      variants={chartContainerVariants}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      className={`relative rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border overflow-hidden ${className}
        ${
          isDarkMode ? 'bg-white border-gray-200' : 'bg-white border-gray-200'
        }`}
    >
      {/* Header */}
      <div className='flex items-center justify-between mb-3 relative z-10'>
        <div className='flex items-center gap-2'>
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center
            ${isDarkMode ? 'bg-gray-900' : 'bg-gray-900'}
          `} ////bg-blue-500
          >
            <Icon className='w-4 h-4 text-white' strokeWidth={2} />
          </div>
          <div>
            <h3
              className={`text-sm font-semibold
              ${isDarkMode ? 'text-black' : 'text-black'}
            `} //text-gray-900
            >
              {title}
            </h3>
            <p
              className={`text-xs
              ${isDarkMode ? 'text-gray-600' : 'text-gray-600'}
            `}
            >
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Chart Content */}
      <div className='relative z-10 mb-3'>{children}</div>

      {/* Bottom Action */}
      <div className='flex justify-center'>
        <button
          className={`text-xs font-medium px-3 py-1.5 rounded-lg transition-colors
          ${
            isDarkMode
              ? 'text-gray-700 bg-gray-100 hover:bg-gray-200'
              : 'text-gray-700 bg-gray-100 hover:bg-gray-200'
          }`} //text-blue-600 bg-blue-50 hover:bg-blue-100
        >
          View Details
        </button>
      </div>
    </motion.div>
  );

  return (
    <div className='space-y-6'>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='flex items-center justify-between'
      >
        <div>
          <h2
            className={`text-2xl font-display font-extrabold tracking-tight mb-2
            ${isDarkMode ? 'text-black' : 'text-black'}
          `} //text-gray-900
          >
            Performance Trends
          </h2>
          <p
            className={`text-sm font-medium
            ${isDarkMode ? 'text-gray-600' : 'text-gray-600'}
          `}
          >
            Real-time analytics and key metrics evolution
          </p>
        </div>
      </motion.div>

      {/* Charts Grid */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Project Completion Trend */}
        <ChartCard
          title='Project Completion Trend'
          subtitle='Completed vs. planned projects over time'
          icon={TrendingUp}
          index={0}
        >
          <AreaChart
            data={projectCompletionData}
            dataKeys={['planned', 'completed']}
            xKey='month'
            colors={colors.primary}
            height={180}
          />
        </ChartCard>

        {/* Budget vs Expenditure */}
        <ChartCard
          title='Budget vs. Expenditure'
          subtitle='Financial performance tracking'
          icon={DollarSign}
          index={1}
        >
          <GroupedBarChart
            data={budgetExpenditureData}
            dataKeys={['budget', 'expenditure']}
            xKey='month'
            colors={colors.budget}
            height={180}
          />
        </ChartCard>

        {/* Headcount Growth */}
        <ChartCard
          title='Headcount Growth'
          subtitle='Team expansion across departments'
          icon={Users}
          index={2}
        >
          <MultiLineChart
            data={headcountData}
            dataKeys={['engineering', 'design', 'operations']}
            xKey='month'
            colors={colors.headcount}
            height={180}
          />
        </ChartCard>

        {/* Resource Utilization */}
        <ChartCard
          title='Resource Utilization'
          subtitle='Department-wise resource allocation'
          icon={Activity}
          index={3}
        >
          <StackedBarChart
            data={resourceUtilizationData}
            dataKeys={['utilized', 'idle']}
            xKey='department'
            colors={colors.resource}
            height={180}
          />
        </ChartCard>
      </div>
    </div>
  );
};

export default PerformanceTrends;
