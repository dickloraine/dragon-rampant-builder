import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import store from 'store';
import SimpleDialog from './SimpleDialog';

export default function DeleteList({ showFeedback, onClose = null, showText = false }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = value => {
    setOpen(false);
    removeList(value);
    if (value) showFeedback('Deleted!', 'success');
    if (onClose) onClose();
  };

  const removeList = name => {
    if (name === 'Delete all') store.set('savedRosters', []);
    else {
      let savedLists = store.get('savedRosters');
      delete savedLists[name];
      store.set('savedRosters', savedLists);
    }
  };

  const getSavedLists = () => {
    const savedLists = [];
    for (const list in store.get('savedRosters')) savedLists.push(list);
    savedLists.push('Delete all');
    return savedLists;
  };

  return (
    <>
      <Tooltip title="Delete List">
        <IconButton color="inherit" onClick={handleClickOpen}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={handleClickOpen}>Delete List</Typography>}
      <SimpleDialog
        open={open}
        onClose={handleClose}
        options={getSavedLists()}
        title="Choose List to delete"
      />
    </>
  );
}
