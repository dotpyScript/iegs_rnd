import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AreaChart as RechartsAreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { ThemeContext } from '../../context/ThemeContext';

const AreaChart = ({ data, dataKeys = [], xKey = 'month', colors = [], height = 350, showLegend = true }) => {
  const { theme } = useContext(ThemeContext);
  const isDarkMode = theme === 'dark';

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-xl p-4 shadow-2xl border-2
            ${isDarkMode 
              ? 'bg-white border-gray-200' 
              : 'bg-white border-gray-200'
            }`}
        >
          <p className={`font-bold text-sm mb-2 ${isDarkMode ? 'text-gray-900' : 'text-black'}`}>
            {label}
          </p>
          {payload.map((entry, index) => (
            <div key={index} className="flex items-center justify-between gap-4 mb-1">
              <div className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
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
        </motion.div>
      );
    }
    return null;
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          {dataKeys.map((key, index) => (
            <linearGradient key={key} id={`gradient-${key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={colors[index]} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={colors[index]} stopOpacity={0.1}/>
            </linearGradient>
          ))}
        </defs>
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
            iconType="circle"
          />
        )}
        {dataKeys.map((key, index) => (
          <Area
            key={key}
            type="monotone"
            dataKey={key}
            stroke={colors[index]}
            strokeWidth={3}
            fill={`url(#gradient-${key})`}
            fillOpacity={1}
            dot={{ fill: colors[index], r: 4, strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
          />
        ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChart;

