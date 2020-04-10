import { IconButton, Tooltip, Typography } from '@material-ui/core';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import store from 'store';
import { showFeedback, toggleForceInputUpdate } from 'store/appStateSlice';
import { setRoster } from 'store/rosterSlice';
import ListDialog from './ListDialog';
import { unpackRoster } from './Roster';

const LoadList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useDispatch();
  const [savedRosters, setSavedRosters] = useState<string[]>([]);

  const handleOpen = () =>
    setSavedRosters([...Object.keys(store.get('savedRosters', {}))]);

  const loadList = (name: string) => {
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
      anchor={(openFunc) => (
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
};

export default React.memo(LoadList);
