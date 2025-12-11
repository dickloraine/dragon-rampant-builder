import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { showFeedback, toggleForceInputUpdate } from '../../store/appStateSlice';
import { getRosterStore } from '../../store/persistantStorage';
import { setRoster } from '../../store/rosterSlice';
import { CompactRosterState } from '../../store/types';
import { getEdition } from '../../store/uiSlice';
import ListDialog from '../ListDialog';
import { unpackRoster } from '../Roster';
import MenuAction from './MenuAction';

const LoadList: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useAppDispatch();
  const [savedRosters, setSavedRosters] = useState<string[]>([]);
  const edition = useAppSelector(getEdition);
  const rosterStore = getRosterStore(edition);

  const handleOpen = () => rosterStore.keys().then((keys) => setSavedRosters(keys));

  const loadList = async (name: string) => {
    try {
      const compactRoster = await rosterStore.getItem<CompactRosterState>(name);

      const roster = unpackRoster(compactRoster!);
      dispatch(setRoster({ ...roster }));
      dispatch(toggleForceInputUpdate());
      dispatch(showFeedback(`${name} loaded!`, 'success'));
    } catch {
      dispatch(showFeedback(`Could not load ${name}!`, 'error'));
    }
  };

  return (
    <ListDialog
      action={loadList}
      anchor={
        <MenuAction
          text={'Load List'}
          icon={<SaveOutlinedIcon />}
          showText={showText}
        />
      }
      onOpen={handleOpen}
      options={savedRosters}
      title="Choose List to load"
      onClose={onClose}
    />
  );
};

export default LoadList;
