import { IconButton, Tooltip, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showFeedback } from 'store/appStateSlice';
import { rosterStore } from 'store/persistantStorage';
import ListDialog from './ListDialog';

const DeleteList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useDispatch();
  const [savedRosters, setSavedRosters] = useState<string[]>([]);

  const handleOpen = () => rosterStore.keys().then((keys) => setSavedRosters(keys));

  const removeList = async (name: string) => {
    await rosterStore.removeItem(name);
    dispatch(showFeedback('Deleted!', 'success'));
  };

  return (
    <ListDialog
      action={removeList}
      onOpen={handleOpen}
      anchor={(openFunc) => (
        <>
          <Tooltip title="Delete List">
            <IconButton color="inherit" aria-label="Delete List" onClick={openFunc}>
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

export default React.memo(DeleteList);
