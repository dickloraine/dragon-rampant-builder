import SyncIcon from '@mui/icons-material/SwapHoriz';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { showFeedback } from '../../store/appStateSlice';
import { newRoster } from '../../store/rosterSlice';
import { updateUI } from '../../store/uiSlice';
import ListDialog from '../ListDialog';
import MenuAction from './MenuAction';

const SwitchEdition: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  onClose,
  showText,
}) => {
  const dispatch = useAppDispatch();
  const edition = useAppSelector((state) => state.ui.edition);

  const switchEdition = (name: string) => {
    if (name === edition) return;
    dispatch(updateUI({ edition: name === 'second' ? name : 'first' }));
    dispatch(newRoster());
    dispatch(showFeedback(`Switched to ${name} edition!`, 'success'));
  };

  return (
    <ListDialog
      action={switchEdition}
      anchor={
        <MenuAction text={'Switch Edition'} icon={<SyncIcon />} showText={showText} />
      }
      options={['first', 'second'].filter((ed) => ed !== edition)}
      title={`Choose edition (currently ${edition})`}
      onClose={onClose}
    />
  );
};

export default SwitchEdition;
