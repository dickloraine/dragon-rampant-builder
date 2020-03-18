import React from 'react';
import store from 'store';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import SimpleDialog from '../SimpleDialog';

export default function Load({ onClick, showText = false }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = value => {
    setOpen(false);
    if (value) onClick(value);
  };

  const getSaved = () => {
    const saved = [];
    store.each((val, key) => saved.push(key));
    return saved;
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
        options={getSaved()}
        title="Choose List to load"
      />
    </>
  );
}
