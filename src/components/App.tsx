import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import useUserTheme from 'hooks/useUserTheme';
import React from 'react';
import AppBar from './AppBar';
import ListName from './ListName';
import Roster from './Roster';
import RulesSummary from './RulesSummary';
import ShowFeedback from './ShowFeedback';
import SpellTable from './SpellTable';
import Statistics from './Statistics/Statistics';
import Validation from './Validation';

const App = () => {
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
