import React from 'react';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import store from 'store';
import { unpackRoster } from './Roster';
import ListDialog from './ListDialog';

export default function LoadList({
  setRoster,
  setForceInputUpdate,
  showFeedback,
  onClose = null,
  showText = false,
  data
}) {
  const loadList = name => {
    try {
      const roster = unpackRoster(store.get('savedRosters')[name], data);
      setRoster({ ...roster });
      setForceInputUpdate();
      showFeedback(`${name} loaded!`, 'success');
    } catch (err) {
      showFeedback(`Could not load ${name}!`, 'error');
    }
  };

  const getSavedLists = () => {
    const savedLists = [];
    for (const list in store.get('savedRosters')) savedLists.push(list);
    return savedLists;
  };

  return (
    <ListDialog
      action={loadList}
      anchor={openFunc => (
        <>
          <Tooltip title="Load List">
            <IconButton color="inherit" onClick={openFunc}>
              <SaveOutlinedIcon />
            </IconButton>
          </Tooltip>
          {showText && <Typography onClick={openFunc}>Load List</Typography>}
        </>
      )}
      options={getSavedLists()}
      title="Choose List to load"
      onClose={onClose}
    />
  );
}
