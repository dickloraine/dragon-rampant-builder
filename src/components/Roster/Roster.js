import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Fab, Box, Typography } from '@material-ui/core';
import Unit from 'components/Unit';
import unitData from 'assets/dragonRampantData/units.json';
import fantasticalRulesData from 'assets/dragonRampantData/fantasticalRules.json';
import Statistics from './Statistics';

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nextID: 0,
      units: {},
      unitOrder: [],
      data: {
        unitData: unitData,
        unitNames: Object.keys(unitData).slice(1),
        fantasticalRulesData: fantasticalRulesData
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
    this.props.updateArmyCost(-cost);
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

  render() {
    return (
      <Box>
        {!Object.keys(this.state.units).length && (
          <Typography variant="h6" style={{ marginBottom: 25 }}>
            Click the button, to add your first unit!
          </Typography>
        )}
        <Box display="flex" flexDirection="row" flexWrap="wrap">
          {this.state.unitOrder.map(id => (
            <Unit
              id={id}
              key={id}
              unit={this.state.units[id]}
              updateUnit={newAttributes => this.updateUnit(id, newAttributes)}
              updateArmyCost={this.props.updateArmyCost}
              removeUnit={() => this.removeUnit(id)}
              setUnit={name => this.setUnit(id, name)}
              data={this.state.data}
              ui={this.props.ui}
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
          armyCost={this.props.armyCost}
          units={this.state.units}
          unitData={this.state.data.unitData}
          fantasticalRulesData={this.state.data.fantasticalRulesData}
        />
      </Box>
    );
  }
}

export default Roster;
