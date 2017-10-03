import React from 'react';
import {
  Text,
  View,
  LiveEnvCamera,
} from 'react-vr';

import Portal from '../components/Portal';

export default class LiveEnvScene extends React.Component {
  render() {
    return (
      <View>
        <LiveEnvCamera />
        <Portal onSwitchScene={this.props.onSwitchScene} />
      </View>
    );
  }
}