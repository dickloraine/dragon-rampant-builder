import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Fab, Box, Typography, Container } from '@material-ui/core';
import Unit from 'components/Unit';
import unitData from 'assets/dragonRampantData/units.json';
import fantasticalRulesData from 'assets/dragonRampantData/fantasticalRules.json';
import BuilderAppBar from '../AppBar';
import Statistics from './Statistics';
import FormControl from '@material-ui/core/FormControl';
import store from 'store';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'New List',
      armyCost: 0,
      nextID: 0,
      units: {},
      unitOrder: [],
      data: {
        unitData: unitData,
        unitNames: Object.keys(unitData).slice(1),
        fantasticalRulesData: fantasticalRulesData
      },
      ui: {
        viewMode: false,
        editMode: false
      }
    };
  }

  componentDidMount = () => this.addUnit();

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

  updateArmyCost = cost => {
    this.setState({
      armyCost: this.state.armyCost + cost
    });
  };

  setUIOption = (option, value) => {
    this.setState({
      ui: { ...this.state.ui, [option]: value }
    });
  };

  setUIOptions = newAttributes => {
    this.setState({
      ui: { ...this.state.ui, ...newAttributes }
    });
  };

  saveList = () => {
    if (this.state.name === 'New List') return false;
    store.set(this.state.name, this.state);
    return true;
  };

  loadList = name => {
    let newState = store.get(name);
    newState = { ...newState, ui: this.state.ui };
    this.setState(newState);
  };

  removeList = name => {
    if (name === 'Delete all') store.clearAll();
    else store.remove(name);
  };

  render() {
    return (
      <Container>
        <BuilderAppBar
          setUIOption={this.setUIOption}
          setUIOptions={this.setUIOptions}
          ui={this.state.ui}
          armyCost={this.state.armyCost}
          saveList={this.saveList}
          loadList={this.loadList}
          removeList={this.removeList}
        />
        <Box>
          <FormControl>
            <Typography
              style={{ border: 0, marginBottom: 25 }}
              variant="h4"
              component="Input"
              id="component-simple"
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
                updateArmyCost={this.updateArmyCost}
                removeUnit={this.removeUnit}
                setUnit={this.setUnit}
                data={this.state.data}
                ui={this.state.ui}
              />
            ))}
          </Box>
          <Fab
            color="secondary"
            style={{ marginLeft: 25, marginBottom: 25 }}
            onClick={this.addUnit}
          >
            <AddIcon />
          </Fab>
          <Statistics
            armyCost={this.state.armyCost}
            units={this.state.units}
            unitData={this.state.data.unitData}
            fantasticalRulesData={this.state.data.fantasticalRulesData}
          />
        </Box>
      </Container>
    );
  }
}

export default App;
