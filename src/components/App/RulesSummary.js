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

export default function RulesSummary({ units, setUIOption, rulesData, ui }) {
  const getSpecialRules = () => {
    let specialRules = new Set();
    for (const id in units) {
      for (const rule of units[id].rules) {
        if (!rulesData[rulesData[rule]]) specialRules.add(rule);
      }
    }
    return [...specialRules].sort();
  };

  return (
    <ExpansionPanel
      expanded={ui.rulesSummaryExpanded}
      onChange={() => setUIOption('rulesSummaryExpanded', !ui.rulesSummaryExpanded)}
      style={{ minWidth: 400, maxWidth: 800 }}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">Rules Summary</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
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
