import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

import Portal from '../components/Portal';

export default class ChessWorldScene extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Portal onSwitchScene={this.props.onSwitchScene} />
      </View>
    );
  }
}