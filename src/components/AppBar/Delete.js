import React from 'react';
import store from 'store';
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip, IconButton } from '@material-ui/core';
import SimpleDialog from '../SimpleDialog';
import { Success } from '../Toast';

export default function Delete() {
  const [open, setOpen] = React.useState(false);
  const [openSuccess, setOpenSuccess] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = value => {
    setOpen(false);
    if (value === 'Delete all') store.clearAll();
    else store.remove(value);
    if (value) setOpenSuccess(true);
  };

  const getSaved = () => {
    const saved = [];
    store.each((val, key) => saved.push(key));
    saved.push('Delete all');
    return saved;
  };

  return (
    <>
      <Tooltip title="Delete List">
        <IconButton color="inherit" onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <SimpleDialog
        open={open}
        onClose={handleClose}
        options={getSaved()}
        title="Choose List to delete"
      />
      <Success
        message="Deleted!"
        open={openSuccess}
        setOpen={val => setOpenSuccess(val)}
      />
    </>
  );
}
