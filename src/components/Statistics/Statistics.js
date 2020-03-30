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
import { objFilter, objReduce } from '../../helpers/utils';
import UnitDistributionChart from './UnitDistributionChart';
import PointDistributionChart from './PointDistributionChart';
import getData from 'store/getData';
import { useSelector, useDispatch } from 'react-redux';
import { setUIOption } from 'store/ui/actions';

const unitData = getData('unitData');
const fantasticalRulesData = getData('fantasticalRulesData');

export default function Statistics() {
  const dispatch = useDispatch();
  const statisticsExpanded = useSelector(state => state.ui.statisticsExpanded);
  const units = useSelector(state => state.roster.units);
  const armyCost = objReduce(units, (acc, unit) => acc + unit.points, 0);
  const theme = useTheme();
  const chipSize = useMediaQuery(theme.breakpoints.down('sm')) ? 'small' : 'medium';

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
