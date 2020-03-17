import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Fab, Box, Typography, Container } from '@material-ui/core';
import Unit from 'components/Unit';
import unitData from 'assets/dragonRampantData/units.json';
import fantasticalRulesData from 'assets/dragonRampantData/fantasticalRules.json';
import BuilderAppBar from './BuilderAppBar';
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
        showStats: true,
        showRules: true,
        showOptions: true
      }
    };
  }

  addUnit() {
    const id = this.state.nextID;
    this.setState({
      nextID: id + 1,
      units: {
        ...this.state.units,
        [id]: { ...this.state.data.unitData.Unit, options: [], fantasticalRules: [] }
      },
      unitOrder: [...this.state.unitOrder, id]
    });
  }

  setUnit(id, name) {
    this.setState({
      units: {
        ...this.state.units,
        [id]: { ...this.state.data.unitData[name], options: [], fantasticalRules: [] }
      }
    });
  }

  removeUnit(id) {
    const units = { ...this.state.units };
    const cost = units[id].points;
    delete units[id];
    this.updateArmyCost(-cost);
    this.setState({
      units: { ...units },
      unitOrder: this.state.unitOrder.filter(val => val !== id)
    });
  }

  updateUnit(id, newAttributes) {
    this.setState({
      units: {
        ...this.state.units,
        [id]: { ...this.state.units[id], ...newAttributes }
      }
    });
  }

  updateArmyCost(cost) {
    this.setState({
      armyCost: this.state.armyCost + cost
    });
  }

  setUIOption(option, value) {
    this.setState({
      ui: { ...this.state.ui, [option]: value }
    });
  }

  save() {
    if (this.state.name === 'New List') return false;
    store.set(this.state.name, this.state);
    return true;
  }

  load(name) {
    const newState = store.get(name);
    this.setState(newState);
  }

  render() {
    return (
      <Container>
        <BuilderAppBar
          setUIOption={(option, value) => this.setUIOption(option, value)}
          ui={this.state.ui}
          armyCost={this.state.armyCost}
          save={() => this.save()}
          load={name => this.load(name)}
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
                updateUnit={newAttributes => this.updateUnit(id, newAttributes)}
                updateArmyCost={cost => this.updateArmyCost(cost)}
                removeUnit={() => this.removeUnit(id)}
                setUnit={name => this.setUnit(id, name)}
                data={this.state.data}
                ui={this.state.ui}
              />
            ))}
            <Fab
              color="secondary"
              style={{ marginLeft: 25, marginBottom: 25 }}
              onClick={() => this.addUnit()}
            >
              <AddIcon />
            </Fab>
          </Box>
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
