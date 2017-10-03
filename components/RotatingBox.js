import React from 'react';
import {
  Animated,
  Box,
  VrButton,
} from 'react-vr';

const AnimatedBox = Animated.createAnimatedComponent(Box);

export default class RotatingBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotation: new Animated.Value(0)
    }
  }

  startRotating = () => {
    Animated.timing(this.state.rotation, {
      duration: 10000,
      toValue: 930,
    }).start();
  }

  render() {
    return (
      <VrButton onClick={this.startRotating}>
        <AnimatedBox
          lit
          dimWidth={2}
          dimHeight={2}
          dimDepth={1}
          style={{
            color: 'red',
            transform: [
              { translate: [6, 1, -1]},
              { rotateY: this.state.rotation },
              { rotateX: -40 },
            ]
          }}
        />
      </VrButton>
    );
  }
}