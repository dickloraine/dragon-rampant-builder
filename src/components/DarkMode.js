import React from 'react';
import BrightnessHighIcon from '@material-ui/icons/BrightnessHigh';
import { Tooltip, IconButton, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { updateUI } from 'store/uiSlice';

const Darkmode = showText => {
  let darkMode = useSelector(state => state.ui.darkMode);
  const autoDarkMode = useSelector(state => state.appState.autoDarkMode);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (darkMode == null) darkMode = autoDarkMode;
    dispatch(updateUI({ darkMode: !darkMode }));
  };

  return (
    <>
      <Tooltip title="Dark Mode">
        <IconButton onClick={handleClick}>
          <BrightnessHighIcon color={darkMode ? 'inherit' : 'disabled'} />
        </IconButton>
      </Tooltip>
      {showText && (
        <Typography
          color={darkMode ? 'inherit' : 'textSecondary'}
          onClick={handleClick}
        >
          Dark Mode
        </Typography>
      )}
    </>
  );
};

export default Darkmode;
