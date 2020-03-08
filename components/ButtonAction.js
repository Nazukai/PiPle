import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

class ButtonAction extends Component {
  constructor(){
    super();
    this.state = {
      color: '#0084ff',
    };
  }

  changeColor=() => {
    this.setState({
      color: '#509191',
    })
  }

  render(){ 
    return(
      <Button
        color={this.state.color}
        title="Click Me"
        onPress={this.changeColor}/>
    );
  }
}

export default ButtonAction
