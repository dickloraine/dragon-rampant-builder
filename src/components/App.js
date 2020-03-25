import React, { useState, useEffect, useReducer } from 'react';
import store from 'store';
import { Box, Typography, Container, FormControl } from '@material-ui/core';
import unitData from 'assets/dragonRampantData/units.json';
import fantasticalRulesData from 'assets/dragonRampantData/fantasticalRules.json';
import rulesData from 'assets/dragonRampantData/rules.json';
import spellData from 'assets/dragonRampantData/spells.json';
import ShowFeedback from './ShowFeedback';
import AppBar from './AppBar';
import Roster from './Roster';
import RulesSummary from './RulesSummary';
import SpellTable from './SpellTable';
import Statistics from './Statistics/Statistics';
import { objReduce } from 'helpers/utils';

const App = () => {
  const [data] = useState({
    unitData: unitData,
    unitNames: Object.keys(unitData).slice(1),
    fantasticalRulesData: fantasticalRulesData,
    rulesData: rulesData,
    spellData: spellData
  });

  const initialRoster = {
    name: 'New List',
    nextID: 1,
    units: {
      0: { ...data.unitData.Unit, options: [], fantasticalRules: [] }
    },
    unitOrder: [0]
  };

  const [roster, setRoster] = useState({ ...initialRoster });

  const [ui, setUI] = useState({
    viewMode: false,
    editMode: false,
    rulesSummaryExpanded: true,
    spellsExpanded: false,
    statisticsExpanded: true
  });

  const [forceInputUpdate, setForceInputUpdate] = useReducer(
    state => (state ? 0 : 1),
    0
  );

  const [feedback, setFeedback] = useState({
    open: false,
    message: '',
    severity: ''
  });

  useEffect(ui => {
    setUI({ ...ui, ...store.get('uiOptions') });
  }, []);

  const updateUI = newAttributes => {
    setUI({ ...ui, ...newAttributes });
    store.set('uiOptions', { ...ui, ...newAttributes });
  };

  const setUIOption = (option, value) => {
    setUI({ ...ui, [option]: value });
    store.set('uiOptions', { ...ui, [option]: value });
  };

  const updateRoster = newAttributes => setRoster({ ...roster, ...newAttributes });

  const showFeedback = (message, severity) =>
    setFeedback({ open: true, message: message, severity: severity });

  const reload = () => {
    setRoster({ ...initialRoster });
    setForceInputUpdate();
  };

  const getSpecialRules = () => {
    let specialRules = new Set();
    for (const unit of Object.values(roster.units)) {
      for (const rule of unit.rules) {
        data.rulesData[data.rulesData[rule]]
          ? specialRules.add(data.rulesData[rule])
          : specialRules.add(rule);
      }
    }
    return [...specialRules].sort();
  };
  const specialRules = getSpecialRules();

  const totalPoints = objReduce(
    Object.values(roster.units),
    (acc, unit) => acc + unit.points,
    0
  );

  return (
    <Container>
      <AppBar
        setUIOption={setUIOption}
        updateUI={updateUI}
        ui={ui}
        roster={roster}
        setRoster={setRoster}
        armyCost={totalPoints}
        showFeedback={showFeedback}
        reload={reload}
        setForceInputUpdate={setForceInputUpdate}
        data={data}
      />
      <Box>
        <FormControl>
          <Typography
            style={{ border: 0, marginBottom: 25, width: '100%' }}
            variant="h4"
            key={forceInputUpdate}
            component="Input"
            value={roster.name}
            onChange={e => updateRoster({ name: e.target.value })}
          />
        </FormControl>
        <Roster roster={roster} updateRoster={updateRoster} ui={ui} data={data} />
        <RulesSummary
          specialRules={specialRules}
          rulesData={data.rulesData}
          rulesSummaryExpanded={ui.rulesSummaryExpanded}
          setUIOption={setUIOption}
        />
        <SpellTable
          specialRules={specialRules}
          spellsExpanded={ui.spellsExpanded}
          setUIOption={setUIOption}
          spellData={data.spellData}
        />
        <Statistics
          armyCost={totalPoints}
          units={roster.units}
          unitData={data.unitData}
          fantasticalRulesData={data.fantasticalRulesData}
          statisticsExpanded={ui.statisticsExpanded}
          setUIOption={setUIOption}
        />
      </Box>
      <ShowFeedback feedback={feedback} setFeetback={setFeedback} />
    </Container>
  );
};

export default App;
