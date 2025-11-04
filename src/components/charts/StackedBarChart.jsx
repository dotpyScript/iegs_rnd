import { motion } from 'framer-motion';
import { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ThemeContext } from '../../context/ThemeContext';

const StackedBarChart = ({ data, dataKeys = [], xKey = 'name', colors = [], height = 350, showLegend = true }) => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const total = payload.reduce((sum, entry) => sum + entry.value, 0);
      
      return (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-xl p-4 shadow-2xl border-2
            ${isDarkMode 
              ? 'bg-white border-gray-200' 
              : 'bg-white border-gray-200'
            }`}
        >
          <p className={`font-bold text-sm mb-3 pb-2 border-b ${isDarkMode ? 'text-gray-900 border-gray-200' : 'text-black border-gray-200'}`}>
            {label}
          </p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-6 mb-2">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full shadow-sm" 
                  style={{ backgroundColor: entry.color }}
                />
                <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-700' : 'text-gray-700'}`}>
                  {entry.name}:
                </span>
              </div>
              <span className={`text-xs font-bold ${isDarkMode ? 'text-gray-900' : 'text-black'}`}>
                {entry.value}
              </span>
            </div>
          ))}
          <div className={`flex items-center justify-between gap-6 mt-3 pt-2 border-t ${isDarkMode ? 'border-gray-200' : 'border-gray-200'}`}>
            <span className={`text-xs font-bold ${isDarkMode ? 'text-gray-900' : 'text-black'}`}>
              Total:
            </span>
            <span className={`text-xs font-bold ${isDarkMode ? 'text-gray-900' : 'text-black'}`}>
              {total}
            </span>
          </div>
        </motion.div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid 
          strokeDasharray="3 3" 
          stroke={isDarkMode ? '#e5e7eb' : '#f3f4f6'} 
          strokeOpacity={0.5}
        />
        <XAxis 
          dataKey={xKey} 
          stroke={isDarkMode ? '#6b7280' : '#9ca3af'}
          style={{ fontSize: '12px', fontWeight: '600' }}
          tickLine={false}
          axisLine={{ stroke: isDarkMode ? '#d1d5db' : '#e5e7eb' }}
        />
        <YAxis 
          stroke={isDarkMode ? '#6b7280' : '#9ca3af'}
          style={{ fontSize: '12px', fontWeight: '600' }}
          tickLine={false}
          axisLine={{ stroke: isDarkMode ? '#d1d5db' : '#e5e7eb' }}
        />
        <Tooltip content={<CustomTooltip />} />
        {showLegend && (
          <Legend 
            wrapperStyle={{ paddingTop: '20px' }}
            iconType="rect"
          />
        )}
        {dataKeys.map((key, index) => (
          <Bar
            key={key}
            dataKey={key}
            stackId="a"
            fill={colors[index]}
            radius={index === dataKeys.length - 1 ? [8, 8, 0, 0] : [0, 0, 0, 0]}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;

