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
  getSpecialRules,
  setUIOption,
  rulesData,
  rulesSummaryExpanded
}) {
  const specialRules = getSpecialRules();

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
