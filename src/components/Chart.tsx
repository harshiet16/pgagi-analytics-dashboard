import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface ChartProps {
  data: any[];
  dataKey: string;
  xKey: string;
}

const Chart: React.FC<ChartProps> = ({ data, dataKey, xKey }) => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <CartesianGrid 
        strokeDasharray="5 5" 
        stroke="#505050"  
      />
      <XAxis 
        dataKey={xKey} 
        stroke="#ddd" 
        tick={{ fontSize: 12 }} 
      />
      <YAxis 
        stroke="#ddd" 
        tick={{ fontSize: 12 }}
      />
      <Tooltip 
        contentStyle={{ backgroundColor: '#333', borderRadius: '8px' }} 
        labelStyle={{ color: '#fff' }}
        itemStyle={{ color: '#fff' }} 
      />
      <Legend 
        iconType="circle" 
        wrapperStyle={{ marginTop: 20 }} 
        height={36} 
        payload={[{ value: dataKey, type: 'line', color: '#8884d8' }]} 
      />
      <Line 
        type="monotone" 
        dataKey={dataKey} 
        stroke="#8884d8" 
        strokeWidth={3} // Thicker line
        dot={{ stroke: '#8884d8', strokeWidth: 2, fill: '#fff', r: 5 }} 
        activeDot={{ stroke: '#8884d8', strokeWidth: 2, fill: '#fff', r: 8 }}
      />
    </LineChart>
  </ResponsiveContainer>
);

export default Chart;
