import React, { Component } from 'react';
import { View, Text, Button, BackHandler, StyleSheet } from 'react-native';

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
    const nameUser = this.props.route.params.name;

    return (
      <View>
        <Text style={styles.userName}> Bienvenido {nameUser}</Text>
        <Text> Codigo {this.props.route.params.code}</Text>
        <Button title='Volver' onPress={btnClick}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    userName: {
      textTransform: "capitalize"
    }
})