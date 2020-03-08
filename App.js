import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ButtonAction from './components/ButtonAction';

export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      name: 'Messenger',
    };
  }

  change=() => {
    console.log("changed")
    this.setState({
      name: 'PiPle',
    })
  }

  render(){
  return (
    <View style={styles.container}>
      <Text>I like {this.state.name}</Text>
      <div onClick={this.change}>
        <ButtonAction/>
      </div>
    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
