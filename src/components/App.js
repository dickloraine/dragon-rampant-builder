import React, { useEffect } from 'react';
import { Box, Container } from '@material-ui/core';
import ShowFeedback from './ShowFeedback';
import AppBar from './AppBar';
import ListName from './ListName';
import Roster from './Roster';
import RulesSummary from './RulesSummary';
import SpellTable from './SpellTable';
import Statistics from './Statistics/Statistics';
import store from 'store';
import { useDispatch } from 'react-redux';
import { updateUI } from 'store/ui/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateUI({ ...store.get('uiOptions') }));
  }, []);

  return (
    <Container>
      <AppBar />
      <Box>
        <ListName />
        <Roster />
        <RulesSummary />
        <SpellTable />
        <Statistics />
      </Box>
      <ShowFeedback />
    </Container>
  );
};

export default App;
