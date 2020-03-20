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

export default function RulesSummary({
  units,
  setUIOption,
  rulesData,
  rulesSummaryExpanded
}) {
  const getSpecialRules = () => {
    let specialRules = new Set();
    for (const id in units) {
      for (const rule of units[id].rules) {
        if (rulesData[rulesData[rule]]) specialRules.add(rulesData[rule]);
        else specialRules.add(rule);
      }
    }
    return [...specialRules].sort();
  };

  return (
    <ExpansionPanel
      expanded={rulesSummaryExpanded}
      onChange={() => setUIOption('rulesSummaryExpanded', !rulesSummaryExpanded)}
      style={{ minWidth: 400, maxWidth: 1210 }}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">Rules Summary</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ maxWidth: 800 }}>
        <List>
          {getSpecialRules().map(rule => (
            <ListItem key={rule}>
              <ListItemText primary={rule} secondary={rulesData[rule] || ''} />
            </ListItem>
          ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
