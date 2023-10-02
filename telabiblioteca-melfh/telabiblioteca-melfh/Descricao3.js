import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Image, Text, Linking } from 'react-native';

export default () => {
  return (
        <View style={Estilos.container}>
          <View style={Estilos.logoContainer}> 
            <TextInput
                autoCorrect={false}
                placeholder="pesquisa"
                placeholderTextColor="grey"
                style={Estilos.bartextInput}
                clearButtonMode="always"
                onChangeText={(value) => setUser(value)}
            />
            <Image style={Estilos.logo} source={require('./lupa.png')} /> 
          </View>
          <View style={Estilos.containerbody}>
            <View style={Estilos.desccarro}>
              <Image style={Estilos.tinyLogo} source={require('./Porsche.jpg')} /> 
            </View>
            <Text style={Estilos.textHonda}>Porsche Panamera</Text>
            <Text style={Estilos.textDesc}>
            O Porsche Panamera é um sedã de luxo e esportivo fabricado pela renomada marca
            alemã Porsche. Lançado em 2009, o Panamera é conhecido por oferecer uma
            combinação de elegância, desempenho e conforto.
            </Text>
            <View style={Estilos.wpp}>
             <Text style={Estilos.wpptxt}onPress={() => { Linking.openURL('https://wa.me/5511998305414'); }}>WhatsApp</Text>
            </View>
          </View>
        </View>
    )
};
const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e9e9e9',
    padding: 8,
  },
  containerbody: {
    flex: 1,
    top: 20,
    justifyContent: 'center',
    padding: 8,
  },
  logoContainer:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  logo: {
    width: 50,
    height: 40,
    right: 1,
    alignSelf: 'center',
    display: 'inline-block'
  },
  bartextInput: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    height: 30,
    width: 180,
    marginTop: 1,
    marginHorizontal: 20,
    paddingHorizontal: 0,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 50,
    alignSelf: 'center',
    textAlign: 'center'
  },
  textHonda: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
    height: 40,
    width: 300,
    top: -120,
    alignSelf: 'start',
    textAlign: 'start',
  },
  textDesc: {
    marginBottom: 5,
    color: 'black',
    fontSize: 20,
    height: 250,
    width: 300,
    top: -70,
    alignSelf: 'start',
    textAlign: 'start',
  },
  desccarro: {
    margin: 10,
    top: -125,
    padding: 60,
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    backgroundColor: '#0d0d0d',
  },
  wpp: {
    margin: 10,
    top: -100,
    padding: 10,
    height: 40,
    width: 113,
    fontSize: 20,
    fontWeight: 'bold',
    right: -220,
    backgroundColor: '#00b300',
    borderRadius: 50,
  },
  wpptxt: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  tinyLogo: {
    width: 360,
    height: 250,
    alignSelf: 'center',
  }
});