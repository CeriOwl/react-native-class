import React, { Component } from 'react';
import { View, Text, Button, BackHandler } from 'react-native';

export default class Pantallab extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  render() {
    BackHandler.addEventListener('hardwareBackPress', function() {return true})
    const btnClick = () => {
      this.props.navigation.replace("Login");
    }
    return (
      <View>
        <Text> Bienvenido alumno </Text>
        <Button title='Volver' onPress={btnClick}/>
      </View>
    );
  }
}
