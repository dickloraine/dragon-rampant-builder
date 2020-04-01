import React from 'react';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import store from 'store';
import { unpackRoster } from './Roster';
import ListDialog from './ListDialog';
import { useDispatch } from 'react-redux';
import { setRoster } from 'store/rosterSlice';
import { showFeedback, toggleForceInputUpdate } from 'store/appStateSlice';

export default function LoadList({ onClose = null, showText = false }) {
  const dispatch = useDispatch();

  const loadList = name => {
    try {
      const roster = unpackRoster(store.get('savedRosters')[name]);
      dispatch(setRoster({ ...roster }));
      dispatch(toggleForceInputUpdate());
      dispatch(showFeedback(`${name} loaded!`, 'success'));
    } catch (err) {
      dispatch(showFeedback(`Could not load ${name}!`, 'error'));
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
