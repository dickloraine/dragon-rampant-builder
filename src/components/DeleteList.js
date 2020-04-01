import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import store from 'store';
import ListDialog from './ListDialog';
import { useDispatch } from 'react-redux';
import { showFeedback } from 'store/appStateSlice';

export default function DeleteList({ onClose = null, showText = false }) {
  const dispatch = useDispatch();

  const removeList = name => {
    if (name === 'Delete all') store.set('savedRosters', []);
    else {
      let savedLists = store.get('savedRosters');
      delete savedLists[name];
      store.set('savedRosters', savedLists);
    }
    dispatch(showFeedback('Deleted!', 'success'));
  };

  const getSavedLists = () => {
    const savedLists = [];
    for (const list in store.get('savedRosters')) savedLists.push(list);
    savedLists.push('Delete all');
    return savedLists;
  };

  return (
    <ListDialog
      action={removeList}
      anchor={openFunc => (
        <>
          <Tooltip title="Delete List">
            <IconButton color="inherit" onClick={openFunc}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {showText && <Typography onClick={openFunc}>Delete List</Typography>}
        </>
      )}
      options={getSavedLists()}
      title="Choose List to delete"
      onClose={onClose}
    />
  );
}
