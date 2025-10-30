import { LineChart as RechartsLineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const LineChart = ({ data, dataKey, xKey = 'month', color = '#0ea5e9', height = 300 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsLineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <defs>
          <linearGradient id="colorLine" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
            <stop offset="95%" stopColor={color} stopOpacity={0.1}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" className="dark:stroke-dark-700" />
        <XAxis 
          dataKey={xKey} 
          stroke="#64748b"
          className="text-sm"
        />
        <YAxis 
          stroke="#64748b"
          className="text-sm"
        />
        <Tooltip
          contentStyle={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '12px',
            boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
          }}
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey={dataKey} 
          stroke={color} 
          strokeWidth={3}
          dot={{ fill: color, r: 5 }}
          activeDot={{ r: 7 }}
          fill="url(#colorLine)"
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;

