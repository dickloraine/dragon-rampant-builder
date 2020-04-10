import { IconButton, Tooltip, Typography } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import store from 'store';
import { showFeedback } from 'store/appStateSlice';
import { AppDispatch, RootState } from 'store/store';
import { packRoster } from './Roster';

const SaveList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch: AppDispatch = useDispatch();
  const roster = useSelector((state: RootState) => state.roster);

  const saveList = () => {
    if (roster.name === 'New List') return false;
    let savedLists = store.get('savedRosters') || [];
    savedLists = {
      ...savedLists,
      [roster.name]: { ...packRoster(roster) },
    };
    store.set('savedRosters', savedLists);
    return true;
  };

  const saveRoster = () => {
    if (saveList()) dispatch(showFeedback('Saved!', 'success'));
    else dispatch(showFeedback('You have to give the list a name!', 'error'));
    if (onClose) onClose();
  };

  return (
    <>
      <Tooltip title="Save List">
        <IconButton color="inherit" onClick={saveRoster}>
          <SaveIcon />
        </IconButton>
      </Tooltip>
      {showText && <Typography onClick={saveRoster}>Save List</Typography>}
    </>
  );
};

export default React.memo(SaveList);
