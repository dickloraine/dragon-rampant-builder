import React from 'react';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import SimpleDialog from '../SimpleDialog';

export default function Load({ onClick, getSavedLists, showText = false }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = value => {
    setOpen(false);
    if (value) onClick(value);
  };

  return (
    <>
      <Tooltip title="Load">
        <IconButton color="inherit" onClick={handleClickOpen}>
          <SaveOutlinedIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={handleClickOpen}>Load</Typography>}
      <SimpleDialog
        open={open}
        onClose={handleClose}
        options={getSavedLists()}
        title="Choose List to load"
      />
    </>
  );
}
