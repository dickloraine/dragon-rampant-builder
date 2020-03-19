import React from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  Chip,
  Hidden
} from '@material-ui/core';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  PieChart,
  Pie,
  ResponsiveContainer
} from 'recharts';
import { objFilter, objReduce } from '../../helpers/utils';

export default function Statistics({
  armyCost,
  units,
  unitData,
  fantasticalRulesData
}) {
  const optionPoints = objReduce(
    units,
    (accumulator, unit) =>
      unit.options.reduce(
        (acc, option) => acc + unitData[unit.name].options[option].points,
        accumulator
      ),
    0
  );

  const fantasticalPoints = objReduce(
    units,
    (accumulator, unit) =>
      unit.fantasticalRules.reduce(
        (acc, option) => acc + fantasticalRulesData[option].points,
        accumulator
      ),
    0
  );

  const COLORS = ['#8884d8', '#82ca9d', '#FF8042'];
  const totalPoints = armyCost;
  const unitCount = Object.keys(units).length;
  const mounted = objFilter(units, u => u.type === 'mounted');
  const foot = objFilter(units, u => u.type === 'foot');
  const ranged = objFilter(units, u => u.stats.shoot > 0);
  const unitsCost = objReduce(units, (acc, u) => acc + unitData[u.name].points, 0);

  const dataUnitTypes = [
    {
      name: 'Mounted',
      Units: Object.keys(mounted).length,
      Points: objReduce(mounted, (acc, u) => acc + u.points, 0)
    },
    {
      name: 'Foot',
      Units: Object.keys(foot).length,
      Points: objReduce(foot, (acc, u) => acc + u.points, 0)
    },
    {
      name: 'Ranged',
      Units: Object.keys(ranged).length,
      Points: objReduce(ranged, (acc, u) => acc + u.points, 0)
    }
  ];

  const dataPoints = [
    { name: 'Units', value: unitsCost },
    { name: 'Options', value: optionPoints < 0 ? 0 : optionPoints },
    { name: 'Fantastical Rules', value: fantasticalPoints }
  ];

  return (
    <Card
      variant="outlined"
      style={{ marginTop: 25, marginBottom: 25, minWidth: 400, maxWidth: 800 }}
    >
      <CardHeader title="Statistics" />
      <CardContent>
        <Chip
          label={totalPoints + ' Points'}
          color="primary"
          style={{ marginRight: 25, marginBottom: 25 }}
        />
        <Chip
          label={unitCount + ' Units'}
          color="primary"
          style={{ marginRight: 25, marginBottom: 25 }}
        />
        <Chip
          label={
            (totalPoints / (unitCount ? unitCount : 1)).toPrecision(3) +
            ' Points per unit'
          }
          color="primary"
          style={{ marginRight: 25, marginBottom: 25 }}
        />
        <Typography variant="h6" style={{ marginTop: 25 }}>
          Unit Distribution
        </Typography>
        <ResponsiveContainer height={400}>
          <BarChart
            data={dataUnitTypes}
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
            <Tooltip />
            <Legend />
            <Bar dataKey="Units" fill={COLORS[0]} minPointSize={3}>
              <LabelList dataKey="Units" position="top" />
            </Bar>
            <Bar dataKey="Points" fill={COLORS[1]} minPointSize={3}>
              <LabelList dataKey="Points" position="top" />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        {unitsCost > 0 && (
          <>
            <Typography variant="h6" style={{ marginTop: 25 }}>
              Point Distribution
            </Typography>
            <ResponsiveContainer height={300}>
              <PieChart>
                <Pie
                  data={dataPoints}
                  dataKey="value"
                  label={renderCustomizedLabel}
                  labelLine={false}
                  outerRadius={80}
                >
                  {dataPoints.map((entry, index) => (
                    <Cell key={entry} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </>
        )}
      </CardContent>
    </Card>
  );
}

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
