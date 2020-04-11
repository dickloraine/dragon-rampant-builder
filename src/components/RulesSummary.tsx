import {
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import data from 'store/data';
import { getSpecialRules } from 'store/rosterSlice';
import { AppDispatch, RootState } from 'store/store';
import { toggleUIOption } from 'store/uiSlice';

const rulesData = data.rulesData;

const RulesSummary = () => {
  const dispatch: AppDispatch = useDispatch();
  const rulesSummaryExpanded = useSelector(
    (state: RootState) => state.ui.rulesSummaryExpanded
  );
  const units = useSelector((state: RootState) => state.roster.units);
  const specialRules = getSpecialRules(units);

  return (
    <ExpansionPanel
      expanded={rulesSummaryExpanded}
      onChange={() => dispatch(toggleUIOption('rulesSummaryExpanded'))}
      style={{ maxWidth: 1210 }}
    >
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h5">Rules Summary</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails style={{ maxWidth: 800 }}>
        <List>
          {specialRules.map((rule) => (
            <ListItem key={rule}>
              <ListItemText primary={rule} secondary={rulesData[rule] || ''} />
            </ListItem>
          ))}
        </List>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default RulesSummary;
