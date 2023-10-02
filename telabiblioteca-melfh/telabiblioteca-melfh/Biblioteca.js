import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';

export default ({ navigation }) => {
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
          <TouchableOpacity onPress={() => navigation.navigate('Descricao')}>
            <View style={Estilos.carInfoContainer}>
              <Image style={Estilos.tinyLogo} source={require('./civic.jpg')} />
              <Text style={Estilos.vlcarro}>R$ 149.900,00</Text>
            </View>
            <Text style={Estilos.desccarro}>Honda Civic</Text>
          </TouchableOpacity>
        </View>
        <View style={Estilos.desccarro}>
          <TouchableOpacity onPress={() => navigation.navigate('Descricao2')}>
            <View style={Estilos.carInfoContainer}>
              <Image style={Estilos.tinyLogo}source={require('./Mustang.jpg')}/>
              <Text style={Estilos.vlcarro}>R$ 410.000,00</Text>
            </View>
            <Text style={Estilos.desccarro}>Ford Mustang</Text>
          </TouchableOpacity>
        </View>
        <View style={Estilos.desccarro}>
          <TouchableOpacity onPress={() => navigation.navigate('Descricao3')}>
            <View style={Estilos.carInfoContainer}>
              <Image style={Estilos.tinyLogo}source={require('./Porsche.jpg')}/>
              <Text style={Estilos.vlcarro}>R$ 790.000,00</Text>
            </View>
            <Text style={Estilos.desccarro}>Porsche Panamera</Text>
          </TouchableOpacity>
        </View>
        <View style={Estilos.desccarro}>
          <TouchableOpacity onPress={() => navigation.navigate('Descricao4')}>
            <View style={Estilos.carInfoContainer}>
              <Image style={Estilos.tinyLogo} source={require('./Dodge.jpg')} />
              <Text style={Estilos.vlcarro}>R$ 1.250.000,00</Text>
            </View>
            <Text style={Estilos.desccarro}>Dodge Charger 1970</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
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
    justifyContent: 'center',
    padding: 8,
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    width: 50,
    height: 40,
    right: 1,
    alignSelf: 'center',
    display: 'inline-block',
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
    textAlign: 'center',
  },
  vlcarro: {
    margin: 5,
    padding: 5,
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#0d0d0d',
  },
  desccarro: {
    margin: 5,
    padding: 5,
    fontSize: 16.5,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'end',
    backgroundColor: '#0d0d0d',
    borderRadius: 5,
  },
  carInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 100,
    alignSelf: 'start',
  },
});
