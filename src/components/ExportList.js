import React from 'react';
import ShareIcon from '@material-ui/icons/Share';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import { packRoster } from './Roster';

const copyToClipboard = text => navigator.clipboard.writeText(text);

const ExportList = ({ roster, showFeedback, onClose = null, showText = false }) => {
  const handleClick = () => {
    const list = JSON.stringify(packRoster(roster));
    try {
      copyToClipboard(list);
      showFeedback('List copied to clipboard!', 'success');
    } catch (err) {
      showFeedback('Could not export the list!', 'error');
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
