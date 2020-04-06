import { IconButton, Tooltip, Typography } from '@material-ui/core';
import GetAppIcon from '@material-ui/icons/GetApp';
import React from 'react';
import { useDispatch } from 'react-redux';
import { showFeedback, toggleForceInputUpdate } from 'store/appStateSlice';
import { setRoster } from 'store/rosterSlice';
import { unpackRoster } from './Roster';
import TextInputDialog from './TextInputDialog';

const ImportList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useDispatch();

  const handleImport = (value?: string) => {
    if (!value) return;
    try {
      const list = unpackRoster(JSON.parse(value));
      dispatch(setRoster({ ...list }));
      dispatch(toggleForceInputUpdate());
      dispatch(showFeedback('List imported!', 'success'));
    } catch (err) {
      dispatch(showFeedback('Could not import the list!', 'error'));
    }
  };

  return (
    <TextInputDialog
      anchor={(openFunc) => (
        <>
          <Tooltip title="Import list">
            <IconButton color="inherit" onClick={openFunc}>
              <GetAppIcon />
            </IconButton>
          </Tooltip>
          {showText && <Typography onClick={openFunc}>Import list</Typography>}
        </>
      )}
      action={handleImport}
      title="Enter the import string"
      label="Exported String"
      okayText="Import"
      onClose={onClose}
    />
  );
};

export default ImportList;
