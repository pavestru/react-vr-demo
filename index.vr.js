import React from 'react';
import {
  AppRegistry,
  asset,
  Text,
  View,
  LiveEnvCamera,
} from 'react-vr';

import DefaultScene from './scenes/DefaultScene';
import ChessWorldScene from './scenes/ChessWorldScene';
import LiveEnvScene from './scenes/LiveEnvScene';

export default class ReactVRDemo extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      scene: 'default',
    };
  }
  switchScene = (scene) => {
    this.setState(
      state => ({ scene })
    );
  }
  render() {
    switch (this.state.scene) {
      case 'live':
        return <LiveEnvScene onSwitchScene={this.switchScene} />;
      case 'chess':
        return <ChessWorldScene onSwitchScene={this.switchScene} />;
      default:
        return <DefaultScene onSwitchScene={this.switchScene} />;
    }
  }
};

AppRegistry.registerComponent('react-vr-demo', () => ReactVRDemo);
