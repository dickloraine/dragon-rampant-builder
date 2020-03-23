import React from 'react';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import store from 'store';

export default function SaveList({
  roster,
  showError,
  showSuccess,
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
    if (saveList()) showSuccess('Saved!');
    else showError('You have to give the list a name!');
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
