import React from 'react';
import {
  asset,
  AmbientLight,
  DirectionalLight,  
  Pano,
  Text,
  View,
} from 'react-vr';

import Portal from '../components/Portal';
import RotatingBox from '../components/RotatingBox';

export default class DefaultScene extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('terrace-pano.jpg')}/>
        <DirectionalLight
          style={{
            transform: [
              { translate: [350, 0, 1000] }
            ]
          }}
        />
        <AmbientLight intensity={0.5} />
        <Portal onSwitchScene={this.props.onSwitchScene} />
        <RotatingBox />
      </View>
    );
  }
}