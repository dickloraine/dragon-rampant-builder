import { IconButton, Tooltip, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from 'store';
import { showFeedback } from 'store/appStateSlice';
import ListDialog from './ListDialog';

const DeleteList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useDispatch();
  const [savedRosters, setSavedRosters] = useState<string[]>([]);

  const handleOpen = () =>
    setSavedRosters([...Object.keys(store.get('savedRosters', {}))]);

  const removeList = (name: string) => {
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
      onOpen={handleOpen}
      anchor={(openFunc) => (
        <>
          <Tooltip title="Delete List">
            <IconButton color="inherit" onClick={openFunc}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          {showText && <Typography onClick={openFunc}>Delete List</Typography>}
        </>
      )}
      options={savedRosters}
      title="Choose List to delete"
      onClose={onClose}
    />
  );
};

export default DeleteList;
