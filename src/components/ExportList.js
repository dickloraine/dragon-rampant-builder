import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import * as jsonpack from 'jsonpack/main';

const copyToClipboard = text => navigator.clipboard.writeText(text);

const ExportList = ({
  roster,
  showError,
  showSuccess,
  onClose = null,
  showText = false
}) => {
  const handleClick = () => {
    const list = jsonpack.pack(roster);
    try {
      copyToClipboard(list);
      showSuccess('List copied to clipboard!');
    } catch (err) {
      showError('Could not export the list!');
    }
    if (onClose) onClose();
  };

  return (
    <>
      <Tooltip title="Share">
        <IconButton color="inherit" onClick={handleClick}>
          <ShareIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={handleClick}>Export List</Typography>}
    </>
  );
};

export default ExportList;
