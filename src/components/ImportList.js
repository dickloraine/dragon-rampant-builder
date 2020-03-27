import React from 'react';
import GetAppIcon from '@material-ui/icons/GetApp';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import { unpackRoster } from './Roster';
import TextInputDialog from './TextInputDialog';

const ImportList = ({
  setRoster,
  setForceInputUpdate,
  showFeedback,
  data,
  onClose = null,
  showText = false
}) => {
  const handleImport = value => {
    if (!value) return;
    try {
      const list = unpackRoster(JSON.parse(value), data);
      setRoster({ ...list });
      setForceInputUpdate();
      showFeedback('List imported!', 'success');
    } catch (err) {
      showFeedback('Could not import the list!', 'error');
    }
  };

  return (
    <TextInputDialog
      anchor={openFunc => (
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
