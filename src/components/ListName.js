import React from 'react';
import { Typography, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { updateRoster } from 'store/rosterSlice';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    border: 0,
    marginTop: 25,
    marginBottom: 25,
    width: '100%'
  }
}));

const ListName = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const rosterName = useSelector(state => state.roster.name);
  const inputUpdate = useSelector(state => state.appState.inputUpdate);

  return (
    <FormControl>
      <Typography
        className={classes.root}
        variant="h4"
        key={inputUpdate}
        component="input"
        value={rosterName}
        onChange={e => dispatch(updateRoster({ name: e.target.value }))}
      />
    </FormControl>
  );
};

export default ListName;
