import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { Error, Success } from '../Toast';

export default function Save({ onClick }) {
  const [openSuccess, setOpenSuccess] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);

  function saveRoster() {
    if (onClick()) setOpenSuccess(true);
    else setOpenError(true);
  }

  return (
    <div>
      <Tooltip title="Save">
        <IconButton color="inherit" onClick={saveRoster}>
          <SaveIcon />
        </IconButton>
      </Tooltip>
      <Success
        message="Saved!"
        open={openSuccess}
        setOpen={val => setOpenSuccess(val)}
      />
      <Error
        message="You have to give the list a name!"
        open={openError}
        setOpen={val => setOpenError(val)}
      />
    </div>
  );
}
