import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { Container, CssBaseline } from '@material-ui/core';
import ShowFeedback from './ShowFeedback';
import AppBar from './AppBar';
import ListName from './ListName';
import Roster from './Roster';
import Validation from './Validation';
import RulesSummary from './RulesSummary';
import SpellTable from './SpellTable';
import Statistics from './Statistics/Statistics';
import store from 'store';
import { useDispatch } from 'react-redux';
import { updateUI } from 'store/uiSlice';
import useUserTheme from 'hooks/useUserTheme';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUI({ ...store.get('uiOptions') }));
  }, [dispatch]);

  const theme = useUserTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <AppBar />
        <ListName />
        <Roster />
        <Validation />
        <RulesSummary />
        <SpellTable />
        <Statistics />
        <ShowFeedback />
      </Container>
    </ThemeProvider>
  );
};

export default App;
