import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from '@material-ui/core';
import getData from 'store/getData';
import { useSelector, useDispatch } from 'react-redux';
import { setUIOption } from 'store/ui/actions';

const rulesData = getData('rulesData');

export default function RulesSummary() {
  const dispatch = useDispatch();
  const rulesSummaryExpanded = useSelector(state => state.ui.rulesSummaryExpanded);
  const units = useSelector(state => state.roster.units);
  let specialRules = [
    ...Object.values(units).reduce(
      (acc, unit) =>
        unit.rules.reduce(
          (acc, rule) =>
            rulesData[rulesData[rule]] ? acc.add(rulesData[rule]) : acc.add(rule),
          acc
        ),
      new Set()
    )
  ].sort();

  return (
    <ExpansionPanel
      expanded={rulesSummaryExpanded}
      onChange={() =>
        dispatch(setUIOption('rulesSummaryExpanded', !rulesSummaryExpanded))
      }
      style={{ maxWidth: 1210 }}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">Rules Summary</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ maxWidth: 800 }}>
        <List>
          {specialRules.map(rule => (
            <ListItem key={rule}>
              <ListItemText primary={rule} secondary={rulesData[rule] || ''} />
            </ListItem>
          ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
