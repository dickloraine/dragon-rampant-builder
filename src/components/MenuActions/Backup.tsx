import BackupIcon from '@mui/icons-material/Backup';
import { saveAs } from 'file-saver';
import React from 'react';
import { getEmptyCustomData } from '../../store/dataSlice';
import { getDataStore, getRosterStore } from '../../store/persistantStorage';
import { CustomData } from '../../store/types';
import MenuAction from './MenuAction';

export type BackupState = {
  first: {
    rosters: { [name: string]: unknown };
    customData: CustomData;
  };
  second: {
    rosters: { [name: string]: unknown };
    customData: CustomData;
  };
};

export const emptyBackupState: BackupState = {
  first: {
    rosters: {},
    customData: getEmptyCustomData(),
  },
  second: {
    rosters: {},
    customData: getEmptyCustomData(),
  },
};

const editions = ['first', 'second'] as const;

const Backup: React.FC<{ showText: boolean; onClose?: () => void }> = ({
  showText = false,
  onClose = undefined,
}) => {
  const backup = async () => {
    const backupState = { ...emptyBackupState };

    for (const edition of editions) {
      await getRosterStore(edition).iterate((val, key) => {
        backupState[edition].rosters[key] = val;
      });
      const customData = await getDataStore(edition)
        .getItem('data')
        .catch((err) => console.log(err));
      if (customData) {
        backupState[edition].customData = customData as CustomData;
      }
    }

    const file = new Blob([JSON.stringify(backupState)], {
      type: 'text/plain;charset=utf-8',
    });

    let date = new Date();
    const offsetMs = date.getTimezoneOffset() * 60 * 1000;
    date = new Date(date.getTime() - offsetMs);
    const dateText = date.toISOString().slice(0, 10).replace(/-/g, '/');

    saveAs(file, `${dateText}_DRAB.sav`);
    if (onClose) onClose();
  };

  return (
    <MenuAction
      text="Backup"
      action={backup}
      icon={<BackupIcon />}
      showText={showText}
    />
  );
};

export default Backup;
