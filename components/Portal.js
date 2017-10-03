import React from 'react';
import {
  Text,
  View,
  VrButton,
} from 'react-vr';

import MyButton from './MyButton';

export default class Portal extends React.Component {
  handleOnClick = (scene) => {
    this.props.onSwitchScene(scene);
  }
  render() {
    return (
      <View
        style= {{
          backgroundColor: '#777879',
          layoutOrigin: [0.5, 0.5],
          transform: [
            { translate: [-4, -1, 3] },
            { rotateX: 0 },
            { rotateY: 115 },
          ],
        }}
      >
        <MyButton text="home" onClick={() => this.handleOnClick('home')}/>
        <MyButton text="chess" onClick={() => this.handleOnClick('chess')}/>
        <MyButton text="live" onClick={() => this.handleOnClick('live')}/>
      </View>
    );
  }
}