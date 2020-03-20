import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  LabelList,
  ResponsiveContainer
} from 'recharts';

export default function UnitDistributionChart({ data, height, colors }) {
  return (
    <ResponsiveContainer height={height}>
      <BarChart
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Bar dataKey="Units" fill={colors[0]} minPointSize={3}>
          <LabelList dataKey="Units" position="top" />
        </Bar>
        <Bar dataKey="Points" fill={colors[1]} minPointSize={3}>
          <LabelList dataKey="Points" position="top" />
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
