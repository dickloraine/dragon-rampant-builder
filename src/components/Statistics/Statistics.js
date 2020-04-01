import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Typography,
  Chip,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  useMediaQuery
} from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import UnitDistributionChart from './UnitDistributionChart';
import PointDistributionChart from './PointDistributionChart';
import getData from 'store/getData';
import { useSelector, useDispatch } from 'react-redux';
import { setUIOption } from 'store/uiSlice';

const unitData = getData('unitData');
const fantasticalRulesData = getData('fantasticalRulesData');

export default function Statistics() {
  const dispatch = useDispatch();
  const statisticsExpanded = useSelector(state => state.ui.statisticsExpanded);
  const units = useSelector(state => state.roster.units);
  const theme = useTheme();
  const chipSize = useMediaQuery(theme.breakpoints.down('sm')) ? 'small' : 'medium';

  const optionPoints = Object.values(units).reduce(
    (accumulator, unit) =>
      unit.options.reduce(
        (acc, option) => acc + unitData[unit.name].options[option].points,
        accumulator
      ),
    0
  );

  const fantasticalPoints = Object.values(units).reduce(
    (accumulator, unit) =>
      unit.fantasticalRules.reduce(
        (acc, option) => acc + fantasticalRulesData[option].points,
        accumulator
      ),
    0
  );

  const COLORS = ['#8884d8', '#82ca9d', '#FF8042'];
  const totalPoints = useSelector(state => state.roster.totalPoints);
  const unitCount = Object.keys(units).length;
  const mounted = Object.values(units).filter(u => u.type === 'mounted');
  const foot = Object.values(units).filter(u => u.type === 'foot');
  const ranged = Object.values(units).filter(u => u.stats.shoot > 0);
  const unitsCost = Object.values(units).reduce(
    (acc, u) => acc + unitData[u.name].points,
    0
  );

  const dataUnitTypes = [
    {
      name: 'Mounted',
      Units: Object.keys(mounted).length,
      Points: Object.values(mounted).reduce((acc, u) => acc + u.points, 0)
    },
    {
      name: 'Foot',
      Units: Object.keys(foot).length,
      Points: Object.values(foot).reduce((acc, u) => acc + u.points, 0)
    },
    {
      name: 'Ranged',
      Units: Object.keys(ranged).length,
      Points: Object.values(ranged).reduce((acc, u) => acc + u.points, 0)
    }
  ];

  const dataPoints = [
    { name: 'Units', value: unitsCost },
    { name: 'Options', value: optionPoints < 0 ? 0 : optionPoints },
    { name: 'Fantastical Rules', value: fantasticalPoints }
  ];

  return (
    <ExpansionPanel
      expanded={statisticsExpanded}
      onChange={() => dispatch(setUIOption('statisticsExpanded', !statisticsExpanded))}
      style={{ maxWidth: 1210 }}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">Statistics</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div>
          <Chip
            label={totalPoints + ' Points'}
            color="primary"
            size={chipSize}
            style={{ marginRight: 10, marginBottom: 25 }}
          />
          <Chip
            label={unitCount + ' Units'}
            color="primary"
            size={chipSize}
            style={{ marginRight: 10, marginBottom: 25 }}
          />
          <Chip
            label={
              (totalPoints / (unitCount ? unitCount : 1)).toPrecision(2) +
              ' Points per unit'
            }
            color="primary"
            size={chipSize}
            style={{ marginRight: 10, marginBottom: 25 }}
          />
          {unitsCost > 0 && (
            <>
              <Typography variant="h6" style={{ marginTop: 25 }}>
                Unit Distribution
              </Typography>
              <UnitDistributionChart
                data={dataUnitTypes}
                height={300}
                colors={COLORS}
              />
              <Typography variant="h6" style={{ marginTop: 25 }}>
                Point Distribution
              </Typography>
              <PointDistributionChart data={dataPoints} height={300} colors={COLORS} />
            </>
          )}
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
