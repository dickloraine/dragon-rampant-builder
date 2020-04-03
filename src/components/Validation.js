import React from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  ListItemIcon
} from '@material-ui/core';
import ErrorIcon from '@material-ui/icons/Error';
import { useSelector, useDispatch } from 'react-redux';
import { setUIOption } from 'store/uiSlice';

const useStyles = makeStyles(theme => ({
  title: {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText
  },
  details: {
    backgroundColor: theme.palette.error.light,
    color: theme.palette.error.contrastText
  }
}));

const Validation = () => {
  const dispatch = useDispatch();
  const validationExpanded = useSelector(state => state.ui.validationExpanded);
  const classes = useStyles();
  const units = Object.values(useSelector(state => state.roster.units));

  const warnings = [];
  for (const unit of units) {
    if (unit.points > 10)
      warnings.push([unit.name, 'No Unit may cost more than 10 points!']);
    if (unit.name !== 'Unit' && unit.points <= 0)
      warnings.push([unit.name, 'No Unit may cost 0 or less points!']);
    if (
      unit.options.includes('Short range missiles') &&
      unit.options.includes('Mixed Weapons')
    )
      warnings.push([
        unit.name,
        'Short range missiles and Mixed Weapons may not be used together!'
      ]);
  }

  return (
    <>
      {warnings.length !== 0 && (
        <ExpansionPanel
          expanded={validationExpanded}
          onChange={() =>
            dispatch(setUIOption('validationExpanded', !validationExpanded))
          }
          style={{ maxWidth: 1210 }}
        >
          <ExpansionPanelSummary
            className={classes.title}
            expandIcon={<ExpandMoreIcon className={classes.title} />}
          >
            <Typography variant="h5">Warnings</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <List>
              {warnings.map(([name, text]) => (
                <ListItem>
                  <ListItemIcon className={classes.details}>
                    <ErrorIcon />
                  </ListItemIcon>
                  <ListItemText primary={name} secondary={text} />
                </ListItem>
              ))}
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      )}
    </>
  );
};

export default Validation;
