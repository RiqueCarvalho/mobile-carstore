import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login';
import Biblioteca from './Biblioteca'
import Descricao from './Descricao'
import Descricao2 from './Descricao2'
import Descricao3 from './Descricao3'
import Descricao4 from './Descricao4'
import {
  Text,
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

const EMAIL = 'eve.holt@reqres.in';
const SENHA = 'cityslicka';

function TelaInicial ({navigation}){
  
  const [user, setUser] = useState(EMAIL);
  const [password, setPassword] = useState(SENHA);
  const [status, setStatus] = useState('');
  const [activity, setActivity] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

function sobre() {
    setModalVisible(true);
  }
  return (
    <View style={Estilos.container}>
      <View style={Estilos.logoContainer}>
        <Image style={Estilos.logo} source={require('./LogodaMelph.png')} />
      </View>
      
      <View style={{ marginTop: 10 }}>
        <ActivityIndicator size="large" animating={activity} />
      </View>
      <Text style={Estilos.loginLabel}>{alert}</Text>

      <Text style={Estilos.paragraph}>Seja Bem-Vindo a MELFH CARS</Text>

      <TouchableOpacity style={Estilos.button} onPress={sobre}>
        <Text style={Estilos.buttonText}>Sobre</Text>
      </TouchableOpacity>
     
      <TouchableOpacity style={Estilos.button} onPress={() => navigation.navigate('Login')}>
        <Text style={Estilos.buttonText}>Entrar</Text>
      </TouchableOpacity>

       <Modal visible={modalVisible}>
        <View style={Estilos.modalContainer}>
          <Text style={Estilos.modalTitle}>Desenvolvido por:</Text>
          <Text style={Estilos.modalText}>Henrique Carvalho</Text>
          <Text style={Estilos.modalText}>Felipe Muller</Text>
          <Text style={Estilos.modalText}>Eric Alves</Text>
          <Text style={Estilos.modalText}>Guilherme Mikami</Text>
          <Text style={Estilos.modalText}>Leonardo Sousa</Text>

          <Text style={Estilos.modalText}>
            {' '}
            A MELFH CARS surgiu em 2023 com um propósito de revolucionar a
            maneira na qual você pode comprar um carro, com a chegada da 4ª
            Revolução Industrial, trazemos a modernidade, a era da Internet. A
            MELFH CARS surgiu após 05 amigos, estudantes e com muita vontade de
            empreenderem.
          </Text>

          <TouchableOpacity
            style={Estilos.button}
            onPress={() => setModalVisible(false)}>
            <Text style={Estilos.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </Modal>

    </View>
  );
};

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaInicial" screenOptions={{
        headerStyle: {
          backgroundColor: '#000',
        },
        headerTintColor: '#fff',
      }}>
    <Stack.Screen name="Login" component={Login} options={{ title: 'Login' }} />
    <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ title: 'TelaInicial' }} />
    <Stack.Screen name="Biblioteca" component={Biblioteca} options={{ title: 'Biblioteca' }} />
    <Stack.Screen name="Descricao" component={Descricao} options={{ title: 'Descricao' }} />
    <Stack.Screen name="Descricao2" component={Descricao2} options={{ title: 'Descricao2' }} />
    <Stack.Screen name="Descricao3" component={Descricao3} options={{ title: 'Descricao3' }} />
    <Stack.Screen name="Descricao4" component={Descricao4} options={{ title: 'Descricao4' }} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App

const Estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#e9e9e9',
    padding: 8,
  },
  logoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
    modalContainer: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalTitle: {
    margin: 34,
    fontSize: 30,
    marginTop: 60,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
  paragraph: {
    margin: 34,
    fontSize: 30,
    marginTop: 5,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loginLabel: {
    color: 'black',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    width: 150,
    height: 100,
    alignSelf: 'center',
  },

  buttonText: {
    backgroundColor: 'green',
    color: 'black',
    fontSize: 15,
    width: 140,
    fontWeight: 'bold',
    padding: 4,
    height: 30,
    borderRadius: 30,
    marginTop: 50,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
});
