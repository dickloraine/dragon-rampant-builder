import React, { useEffect } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Container, CssBaseline } from '@material-ui/core';
import ShowFeedback from './ShowFeedback';
import AppBar from './AppBar';
import ListName from './ListName';
import Roster from './Roster';
import RulesSummary from './RulesSummary';
import SpellTable from './SpellTable';
import Statistics from './Statistics/Statistics';
import store from 'store';
import { useDispatch } from 'react-redux';
import { updateUI } from 'store/uiSlice';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUI({ ...store.get('uiOptions') }));
  }, [dispatch]);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light'
        }
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <AppBar />
        <ListName />
        <Roster />
        <RulesSummary />
        <SpellTable />
        <Statistics />
        <ShowFeedback />
      </Container>
    </ThemeProvider>
  );
};

export default App;
