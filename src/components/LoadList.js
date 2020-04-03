import React, { useState } from 'react';
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
  const [savedRosters, setSavedRosters] = useState([]);

  const handleOpen = () =>
    setSavedRosters([...Object.keys(store.get('savedRosters'))] || []);

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

  return (
    <ListDialog
      action={loadList}
      onOpen={handleOpen}
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
      options={savedRosters}
      title="Choose List to load"
      onClose={onClose}
    />
  );
}
