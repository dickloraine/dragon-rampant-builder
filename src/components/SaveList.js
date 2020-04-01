import React from 'react';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import store from 'store';
import { packRoster } from './Roster';
import { useSelector, useDispatch } from 'react-redux';
import { showFeedback } from 'store/appStateSlice';

export default function SaveList({ onClose = null, showText = false }) {
  const dispatch = useDispatch();
  const roster = useSelector(state => state.roster);

  const saveList = () => {
    if (roster.name === 'New List') return false;
    let savedLists = store.get('savedRosters') || [];
    savedLists = {
      ...savedLists,
      [roster.name]: { ...packRoster(roster) }
    };
    store.set('savedRosters', savedLists);
    return true;
  };

  const saveRoster = () => {
    if (saveList()) dispatch(showFeedback('Saved!', 'success'));
    else dispatch(showFeedback('You have to give the list a name!', 'error'));
    if (onClose) onClose();
  };

  return (
    <>
      <Tooltip title="Save List">
        <IconButton color="inherit" onClick={saveRoster}>
          <SaveIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={saveRoster}>Save List</Typography>}
    </>
  );
}
