import React from 'react';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import store from 'store';

export default function SaveList({
  roster,
  showFeedback,
  onClose = null,
  showText = false
}) {
  const saveList = () => {
    if (roster.name === 'New List') return false;
    let savedLists = store.get('savedRosters') || [];
    savedLists = {
      ...savedLists,
      [roster.name]: { ...roster }
    };
    store.set('savedRosters', savedLists);
    return true;
  };

  const saveRoster = () => {
    if (saveList()) showFeedback('Saved!', 'success');
    else showFeedback('You have to give the list a name!', 'error');
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
