import React from 'react';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import SimpleDialog from './SimpleDialog';
import store from 'store';

export default function LoadList({
  setRoster,
  setForceInputUpdate,
  onClose = null,
  showText = false
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = value => {
    setOpen(false);
    if (value) loadList(value);
    if (onClose) onClose();
  };

  const loadList = name => {
    setRoster({ ...store.get('savedRosters')[name] });
    setForceInputUpdate();
  };

  const getSavedLists = () => {
    const savedLists = [];
    for (const list in store.get('savedRosters')) savedLists.push(list);
    return savedLists;
  };

  return (
    <>
      <Tooltip title="Load">
        <IconButton color="inherit" onClick={handleClickOpen}>
          <SaveOutlinedIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={handleClickOpen}>Load</Typography>}
      <SimpleDialog
        open={open}
        onClose={handleClose}
        options={getSavedLists()}
        title="Choose List to load"
      />
    </>
  );
}
