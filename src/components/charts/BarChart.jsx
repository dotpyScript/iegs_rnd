import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const BarChart = ({ data, dataKeys = [], xKey = 'month', colors = ['#0ea5e9', '#8b5cf6'], height = 300 }) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
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
        {dataKeys.map((key, index) => (
          <Bar 
            key={key}
            dataKey={key} 
            fill={colors[index % colors.length]} 
            radius={[8, 8, 0, 0]}
          />
        ))}
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;

