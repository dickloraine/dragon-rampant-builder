import React, { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import store from 'store';
import ListDialog from './ListDialog';
import { useDispatch } from 'react-redux';
import { showFeedback } from 'store/appStateSlice';

export default function DeleteList({ onClose = null, showText = false }) {
  const dispatch = useDispatch();
  const [savedRosters, setSavedRosters] = useState([]);

  const handleOpen = openFunc => {
    setSavedRosters([...Object.keys(store.get('savedRosters'))] || []);
    openFunc();
  };

  const removeList = name => {
    if (name === 'Delete all') store.set('savedRosters', []);
    else {
      let savedLists = store.get('savedRosters');
      delete savedLists[name];
      store.set('savedRosters', savedLists);
    }
    dispatch(showFeedback('Deleted!', 'success'));
  };

  return (
    <ListDialog
      action={removeList}
      anchor={openFunc => (
        <>
          <Tooltip title="Delete List">
            <IconButton color="inherit" onClick={() => handleOpen(openFunc)}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {showText && (
            <Typography onClick={() => handleOpen(openFunc)}>Delete List</Typography>
          )}
        </>
      )}
      options={savedRosters}
      title="Choose List to delete"
      onClose={onClose}
    />
  );
}
