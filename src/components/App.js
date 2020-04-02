import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
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

  return (
    <Container>
      <AppBar />
      <ListName />
      <Roster />
      <RulesSummary />
      <SpellTable />
      <Statistics />
      <ShowFeedback />
    </Container>
  );
};

export default App;
