import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Fab, Box, Typography, Container } from '@material-ui/core';
import Unit from 'components/Unit';
import unitData from 'assets/dragonRampantData/units.json';
import fantasticalRulesData from 'assets/dragonRampantData/fantasticalRules.json';
import rulesData from 'assets/dragonRampantData/rules.json';
import spellData from 'assets/dragonRampantData/spells.json';
import AppBar from '../AppBar';
import RulesSummary from './RulesSummary';
import SpellTable from './SpellTable';
import Statistics from './Statistics';
import FormControl from '@material-ui/core/FormControl';
import store from 'store';
import { objReduce } from '../../helpers/utils';

const DEFAULT_UI_OPTIONS = {
  viewMode: false,
  editMode: false,
  rulesSummaryExpanded: true,
  spellsExpanded: false,
  statisticsExpanded: true
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'New List',
      nextID: 0,
      units: {},
      unitOrder: [],
      data: {
        unitData: unitData,
        unitNames: Object.keys(unitData).slice(1),
        fantasticalRulesData: fantasticalRulesData,
        rulesData: rulesData,
        spellData: spellData
      },
      ui: { ...DEFAULT_UI_OPTIONS },
      forceInputUpdate: 0
    };
  }

  componentDidMount = () => {
    const uiInfos = {
      ...DEFAULT_UI_OPTIONS,
      ...store.get('uiOptions')
    };
    this.setState({ ui: uiInfos });
    this.addUnit();
  };

  reload = () => {
    this.setState({
      name: 'New List',
      forceInputUpdate: this.state.forceUpdateKey ? 0 : 1,
      armyCost: 0,
      nextID: 1,
      units: {
        0: { ...this.state.data.unitData.Unit, options: [], fantasticalRules: [] }
      },
      unitOrder: [0]
    });
  };

  addUnit = () => {
    const id = this.state.nextID;
    this.setState({
      nextID: id + 1,
      units: {
        ...this.state.units,
        [id]: { ...this.state.data.unitData.Unit, options: [], fantasticalRules: [] }
      },
      unitOrder: [...this.state.unitOrder, id]
    });
  };

  setUnit = (id, name) => {
    this.setState({
      units: {
        ...this.state.units,
        [id]: { ...this.state.data.unitData[name], options: [], fantasticalRules: [] }
      }
    });
  };

  removeUnit = id => {
    const units = { ...this.state.units };
    const cost = units[id].points;
    delete units[id];
    this.updateArmyCost(-cost);
    this.setState({
      units: { ...units },
      unitOrder: this.state.unitOrder.filter(val => val !== id)
    });
  };

  updateUnit = (id, newAttributes) => {
    this.setState({
      units: {
        ...this.state.units,
        [id]: { ...this.state.units[id], ...newAttributes }
      }
    });
  };

  setUIOption = (option, value) => {
    this.setState({
      ui: { ...this.state.ui, [option]: value }
    });
    store.set('uiOptions', { ...this.state.ui, [option]: value });
  };

  setUIOptions = newAttributes => {
    this.setState({
      ui: { ...this.state.ui, ...newAttributes }
    });
    store.set('uiOptions', { ...this.state.ui, ...newAttributes });
  };

  saveList = () => {
    if (this.state.name === 'New List') return false;
    let savedLists = store.get('savedRosters') || [];
    savedLists = {
      ...savedLists,
      [this.state.name]: {
        name: this.state.name,
        nextID: this.state.nextID,
        units: this.state.units,
        unitOrder: this.state.unitOrder
      }
    };
    store.set('savedRosters', savedLists);
    return true;
  };

  loadList = name => {
    this.setState({
      ...store.get('savedRosters')[name],
      forceInputUpdate: this.state.forceUpdateKey ? 0 : 1
    });
  };

  getSavedLists = () => {
    const savedLists = [];
    for (const list in store.get('savedRosters')) savedLists.push(list);
    return savedLists;
  };

  removeList = name => {
    if (name === 'Delete all') store.set('savedRosters', []);
    else {
      let savedLists = store.get('savedRosters');
      savedLists = Object.keys(savedLists).filter(val => val !== name);
      store.set('savedRosters', savedLists);
    }
  };

  getSpecialRules = () => {
    let specialRules = new Set();
    for (const unit of Object.values(this.state.units)) {
      for (const rule of unit.rules) {
        this.state.data.rulesData[this.state.data.rulesData[rule]]
          ? specialRules.add(this.state.data.rulesData[rule])
          : specialRules.add(rule);
      }
    }
    return [...specialRules].sort();
  };

  getTotalPoints = () =>
    objReduce(Object.values(this.state.units), (acc, unit) => acc + unit.points, 0);

  render() {
    return (
      <Container>
        <AppBar
          setUIOption={this.setUIOption}
          setUIOptions={this.setUIOptions}
          ui={this.state.ui}
          armyCost={this.getTotalPoints()}
          reload={this.reload}
          saveList={this.saveList}
          loadList={this.loadList}
          removeList={this.removeList}
          getSavedLists={this.getSavedLists}
        />
        <Box>
          <FormControl>
            <Typography
              style={{ border: 0, marginBottom: 25 }}
              variant="h4"
              key={this.state.forceInputUpdate}
              component="Input"
              value={this.state.name}
              onChange={e => this.setState({ name: e.target.value })}
            />
          </FormControl>
          {!Object.keys(this.state.units).length && (
            <Typography variant="h6" style={{ marginBottom: 25 }}>
              Click the button to add your first unit!
            </Typography>
          )}
          <Box display="flex" flexDirection="row" flexWrap="wrap">
            {this.state.unitOrder.map(id => (
              <Unit
                id={id}
                key={id}
                unit={this.state.units[id]}
                updateUnit={this.updateUnit}
                removeUnit={this.removeUnit}
                setUnit={this.setUnit}
                data={this.state.data}
                ui={this.state.ui}
              />
            ))}
          </Box>
          {!this.state.ui.viewMode && (
            <Fab
              color="secondary"
              style={{ marginLeft: 25, marginBottom: 25 }}
              onClick={this.addUnit}
            >
              <AddIcon />
            </Fab>
          )}
          <RulesSummary
            getSpecialRules={this.getSpecialRules}
            rulesData={this.state.data.rulesData}
            rulesSummaryExpanded={this.state.ui.rulesSummaryExpanded}
            setUIOption={this.setUIOption}
          />
          <SpellTable
            getSpecialRules={this.getSpecialRules}
            spellsExpanded={this.state.ui.spellsExpanded}
            setUIOption={this.setUIOption}
            spellData={this.state.data.spellData}
          />
          <Statistics
            armyCost={this.getTotalPoints()}
            units={this.state.units}
            unitData={this.state.data.unitData}
            fantasticalRulesData={this.state.data.fantasticalRulesData}
            statisticsExpanded={this.state.ui.statisticsExpanded}
            setUIOption={this.setUIOption}
          />
        </Box>
      </Container>
    );
  }
}

export default App;
