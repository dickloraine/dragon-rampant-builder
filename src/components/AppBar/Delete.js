import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import SimpleDialog from '../SimpleDialog';

export default function Delete({
  onClick,
  getSavedLists,
  showSuccess,
  showText = false
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = value => {
    setOpen(false);
    onClick(value);
    if (value) showSuccess('Deleted!');
  };

  const getSaved = () => {
    const saved = getSavedLists();
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
      {showText && <Typography onClick={handleClickOpen}>Delete</Typography>}
      <SimpleDialog
        open={open}
        onClose={handleClose}
        options={getSaved()}
        title="Choose List to delete"
      />
    </>
  );
}
