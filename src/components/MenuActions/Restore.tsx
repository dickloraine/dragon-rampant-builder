import RestorePageIcon from '@mui/icons-material/RestorePage';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { showFeedback, toggleForceInputUpdate } from '../../store/appStateSlice';
import { importCustomData } from '../../store/dataSlice';
import { getDataStore, getRosterStore } from '../../store/persistantStorage';
import { emptyBackupState, type BackupState } from './Backup';
import MenuAction from './MenuAction';

const editions = ['first', 'second'] as const;

const Restore: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  showText,
  onClose,
}) => {
  const dispatch = useAppDispatch();
  const fileDialog = React.useRef<HTMLInputElement>(null);
  const currentEdition = useAppSelector((state) => state.ui.edition);

  const handleFileChosen = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader();

    const restore = async () => {
      try {
        const content = fileReader.result as string;
        const rawData = JSON.parse(content);
        let data: BackupState;

        // migrate legacy single-edition backups
        // eslint-disable-next-line no-prototype-builtins
        if (!rawData.hasOwnProperty('first') && !rawData.hasOwnProperty('second')) {
          data = { ...emptyBackupState };
          data.first = rawData;
        } else {
          data = rawData as BackupState;
        }

        for (const edition of editions) {
          const rosterStore = getRosterStore(edition);
          await Promise.all(
            Object.entries(data[edition].rosters).map(([key, val]) =>
              rosterStore.setItem(key, val)
            )
          );
          if (edition === currentEdition) {
            dispatch(importCustomData(data[edition].customData));
          } else {
            await getDataStore(edition).setItem('data', data[edition].customData);
          }
        }

        dispatch(toggleForceInputUpdate());
        dispatch(showFeedback(`Restored!`, 'success'));
      } catch (err) {
        dispatch(showFeedback(`Could not restore!`, 'error'));
        console.log(err);
      }
      if (onClose) onClose();
    };

    fileReader.onloadend = restore;
    if (event.target.files) fileReader.readAsText(event.target.files[0]);
  };

  const openFileDialog = () => {
    if (fileDialog.current) fileDialog.current.click();
  };

  return (
    <MenuAction
      text="Restore"
      action={openFileDialog}
      icon={<RestorePageIcon />}
      showText={showText}
    >
      <input
        type="file"
        ref={fileDialog}
        style={{ display: 'none' }}
        id="restoreFile"
        accept=".sav"
        onChange={handleFileChosen}
      />
    </MenuAction>
  );
};

export default Restore;
