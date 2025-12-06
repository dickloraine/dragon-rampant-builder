import SyncIcon from '@mui/icons-material/SwapHoriz';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { showFeedback } from '../../store/appStateSlice';
import { newRoster } from '../../store/rosterSlice';
import { updateUI } from '../../store/uiSlice';
import MenuAction from './MenuAction';

const SwitchEdition: React.FC<{ onClose?: () => void; showText?: boolean }> = ({
  showText,
}) => {
  const dispatch = useAppDispatch();
  const edition = useAppSelector((state) => state.ui.edition);

  const switchEdition = () => {
    const newEdition = edition === 'second' ? 'first' : 'second';
    dispatch(updateUI({ edition: newEdition }));
    dispatch(newRoster());
    dispatch(showFeedback(`Switched to ${newEdition} edition!`, 'success'));
  };

  return (
    <MenuAction
      text="Switch Edition"
      action={switchEdition}
      icon={<SyncIcon />}
      showText={showText}
    />
  );
};

export default SwitchEdition;
