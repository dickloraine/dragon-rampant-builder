import React from 'react';
import store from 'store';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { Tooltip, IconButton } from '@material-ui/core';
import SimpleDialog from '../SimpleDialog';

export default function Load({ onClick }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  function handleClose(value) {
    setOpen(false);
    if (value) onClick(value);
  }

  function getSaved() {
    const saved = [];
    store.each((val, key) => saved.push(key));
    return saved;
  }

  return (
    <div>
      <Tooltip title="Load">
        <IconButton color="inherit" onClick={handleClickOpen}>
          <SaveOutlinedIcon />
        </IconButton>
      </Tooltip>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        options={getSaved()}
        title="Choose List to load"
      />
    </div>
  );
}
