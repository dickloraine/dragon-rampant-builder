import { ThemeOptions, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { useAppSelector } from '../hooks/reduxHooks';

const getTheme = (mode: boolean | null): ThemeOptions => ({
  palette: {
    mode: mode ? 'dark' : 'light',
    primary: {
      main: '#3f51b5',
      light: '#7986cb',
      dark: '#303f9f',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff4081',
      main: '#f50057',
      dark: '#c51162',
      contrastText: '#fff',
    },
  },
  typography: {
    h2: {
      fontWeight: 400,
      fontSize: '2.125rem',
      lineHeight: 1.235,
      letterSpacing: '0.00735em',
    },
    h3: {
      fontWeight: 400,
      fontSize: '1.5rem',
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.25rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.1rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.1rem',
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
  },
  components: {
    MuiTextField: {
      defaultProps: {
        margin: 'normal',
      },
    },
    MuiTooltip: {
      defaultProps: {
        enterDelay: 500,
        leaveDelay: 100,
        disableInteractive: true,
      },
    },
  },
});

const useUserTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const hasDarkMode = useAppSelector((state) => state.ui.darkMode);
  const darkMode = hasDarkMode === null ? prefersDarkMode : hasDarkMode;

  const theme = React.useMemo(() => createTheme(getTheme(darkMode)), [darkMode]);

  return theme;
};

export default useUserTheme;
