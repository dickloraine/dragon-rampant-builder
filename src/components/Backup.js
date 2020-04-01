import React from 'react';
import BackupIcon from '@material-ui/icons/Backup';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import store from 'store';
import { saveAs } from 'file-saver';

const Backup = ({ showText = null, onClose = null }) => {
  const backup = () => {
    const savedLists = JSON.stringify(store.get('savedRosters') || []);
    const file = new Blob([savedLists], { type: 'text/plain;charset=utf-8' });

    let date = new Date();
    const offsetMs = date.getTimezoneOffset() * 60 * 1000;
    date = new Date(date.getTime() - offsetMs);
    date = date
      .toISOString()
      .slice(0, 10)
      .replace(/-/g, '/');

    saveAs(file, `${date}_DRAB.sav`);
    if (onClose) onClose();
  };

  return (
    <>
      <Tooltip title="Backup">
        <IconButton color="inherit" onClick={backup}>
          <BackupIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={backup}>Backup</Typography>}
    </>
  );
};

export default Backup;
