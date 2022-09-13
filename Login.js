import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        codigo: "",
        nip: ""
    };
  }

  render() {
    const changeView = () => {this.props.navigation.replace("Pantalla2")}
    const btnClick = () => {
        
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                if(xhttp.responseText == "0"){
                    console.log("F")
                    Alert.alert("ERROR", "Credenciales incorrectas")
                }else{
                    console.log(xhttp.responseText)
                    changeView()
                }
            }
        };
        xhttp.open("GET", "http://148.202.152.33/ws_claseaut.php?codigo="+this.state.codigo+"&nip="+this.state.nip, true);
        xhttp.send();
    }
    return (
      <View style={styles.container}>
        <ImageBackground source={require("./img/bg.jpg")} imageStyle={{opacity: 0.5}} style={styles.bg_img} resizeMode="cover">
            <View style={styles.title_container}>
                <Text style={styles.title}>UdG App 2003</Text>
                <Image source={require("./img/logo.png")} style={styles.img}/>
                <View>
                    <TextInput placeholder='Ingresa tu correo' onChangeText={codigo => this.setState({codigo})} style={styles.input}/>
                    <TextInput placeholder='Ingresa tu contraseña' secureTextEntry={true} onChangeText={nip => this.setState({nip})} style={styles.input_contra}/>
                    <Button title='Iniciar Sesion' onPress={btnClick}/>
                </View>
            </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 50,
        fontWeight: "bold",
        paddingTop: 30,
        color: "#000"       
    },
    container: {
        flex: 1
    },
    title_container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start"
    },
    bg_img: {
        flex: 1,
        justifyContent: 'center'
    },
    img:{
        width: 210,
        height: 250,
        marginTop: 20,
    },
    input: {
        backgroundColor: "white",
        width: 340,
        borderRadius: 8,
        borderWidth: 3,
        padding: 10,
        fontSize: 15,
        marginTop: 15
    },
    input_contra: {
        backgroundColor: "white",
        width: 340,
        borderRadius: 8,
        borderWidth: 3,
        padding: 10,
        fontSize: 15,
        marginTop: 15,
        marginBottom: 15
    }
})
