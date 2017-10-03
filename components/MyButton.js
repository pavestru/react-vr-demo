import React from 'react';
import {
  Text,
  VrButton,
} from 'react-vr';

export default class MyButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }
  render() {
    return (
      <VrButton
        onClick={() => this.props.onClick(this.props.text)}
        onEnter={() => this.setState({ hover: true })}
        onExit={() => this.setState({ hover: false })}
      >
        <Text
          style={{
            color: this.state.hover ? 'orange' : 'white',
            fontSize: 0.5,
            fontWeight: '400',
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
          }}
        >
          {this.props.text}
        </Text>
      </VrButton>
    );
  }
}