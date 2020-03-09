import React, { Component } from 'react';
import { Button} from 'react-native';

class ButtonAction extends Component {
  constructor(){
    super();
    this.state = {
      color: '#0084ff',
    };
  }

  changeColor =() => {
    this.setState({
      color: '#509191',
    })
  }

  whenPressed = () => {
    this.changeColor()
    this.props.onButtonPress()
  }

  render(){ 
    return(
        <Button
          color={this.state.color}
          title="Click Me"
          onPress={this.whenPressed}/>
    );
  }
}

export default ButtonAction
