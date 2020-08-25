import { IconButton, Tooltip, Typography } from '@material-ui/core';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { showFeedback, toggleForceInputUpdate } from 'store/appStateSlice';
import { rosterStore } from 'store/persistantStorage';
import { CompactRosterState, setRoster } from 'store/rosterSlice';
import ListDialog from './ListDialog';
import { unpackRoster } from './Roster';

const LoadList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useDispatch();
  const [savedRosters, setSavedRosters] = useState<string[]>([]);

  const handleOpen = () => rosterStore.keys().then((keys) => setSavedRosters(keys));

  const loadList = async (name: string) => {
    try {
      const compactRoster = await rosterStore.getItem<CompactRosterState>(name);
      const roster = unpackRoster(compactRoster!);
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
            <IconButton color="inherit" aria-label="Load List" onClick={openFunc}>
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
