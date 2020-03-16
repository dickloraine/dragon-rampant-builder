import React from 'react';
import { Container } from '@material-ui/core';
import BuilderAppBar from './BuilderAppBar';
import Roster from '../Roster';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      armyCost: 0,
      showStats: true,
      showRules: true,
      showOptions: true
    };
  }

  setUIOption(option, value) {
    this.setState({
      [option]: value
    });
  }

  updateArmyCost(cost) {
    this.setState({
      armyCost: this.state.armyCost + cost
    });
  }

  render() {
    return (
      <Container>
        <BuilderAppBar
          setUIOption={(option, value) => this.setUIOption(option, value)}
          ui={this.state}
        />
        <Roster
          ui={this.state}
          armyCost={this.state.armyCost}
          updateArmyCost={cost => this.updateArmyCost(cost)}
        />
      </Container>
    );
  }
}

export default App;
