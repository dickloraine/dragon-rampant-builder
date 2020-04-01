import React from 'react';
import { Typography, FormControl } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { updateRoster } from 'store/rosterSlice';

const ListName = () => {
  const dispatch = useDispatch();
  const rosterName = useSelector(state => state.roster.name);
  const inputUpdate = useSelector(state => state.appState.inputUpdate);

  return (
    <FormControl>
      <Typography
        style={{ border: 0, marginTop: 20, marginBottom: 25, width: '100%' }}
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
