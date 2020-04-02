import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useDispatch, useSelector } from 'react-redux';
import { setAutoDarkMode } from 'store/appStateSlice';

const useUserTheme = () => {
  const dispatch = useDispatch();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const hasDarkMode = useSelector(state => state.ui.darkMode);
  const darkMode = hasDarkMode == null ? prefersDarkMode : hasDarkMode;
  dispatch(setAutoDarkMode(darkMode));

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode ? 'dark' : 'light'
        }
      }),
    [darkMode]
  );
  return theme;
};

export default useUserTheme;
