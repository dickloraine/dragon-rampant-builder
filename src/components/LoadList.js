import React from 'react';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import SimpleDialog from './SimpleDialog';
import store from 'store';
import { unpackRoster } from './Roster';

export default function LoadList({
  setRoster,
  setForceInputUpdate,
  showFeedback,
  onClose = null,
  showText = false,
  data
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = value => {
    setOpen(false);
    if (value) loadList(value);
    if (onClose) onClose();
  };

  const loadList = name => {
    const roster = unpackRoster(store.get('savedRosters')[name], data);
    setRoster({ ...roster });
    setForceInputUpdate();
    showFeedback(`${name} loaded!`, 'success');
  };

  const getSavedLists = () => {
    const savedLists = [];
    for (const list in store.get('savedRosters')) savedLists.push(list);
    return savedLists;
  };

  return (
    <>
      <Tooltip title="Load List">
        <IconButton color="inherit" onClick={handleClickOpen}>
          <SaveOutlinedIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={handleClickOpen}>Load List</Typography>}
      <SimpleDialog
        open={open}
        onClose={handleClose}
        options={getSavedLists()}
        title="Choose List to load"
      />
    </>
  );
}
