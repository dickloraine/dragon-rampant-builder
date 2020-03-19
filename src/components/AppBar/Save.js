import React from 'react';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

export default function Save({ onClick, showError, showSuccess, showText = false }) {
  const saveRoster = () => {
    if (onClick()) showSuccess('Saved!');
    else showError('You have to give the list a name!');
  };

  return (
    <>
      <Tooltip title="Save">
        <IconButton color="inherit" onClick={saveRoster}>
          <SaveIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={saveRoster}>Save</Typography>}
    </>
  );
}
