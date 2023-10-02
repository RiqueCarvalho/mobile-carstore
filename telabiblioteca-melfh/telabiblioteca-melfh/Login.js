import React, { useState } from 'react';
import {  Text,  View,  StyleSheet,  TextInput,  TouchableOpacity,  ActivityIndicator,
          Modal,  Button,  Image,} from 'react-native';

const MENSAGEM_EMAIL = 'Digite seu e-mail.';
const MENSAGEM_SENHA = 'Digite sua senha.';
const EMAIL = 'eve.holt@reqres.in';
const SENHA = 'cityslicka';

const ValidateLogin = async (
  email,
  senha,
  activity,
) => {
  if (email.trim().length === 0) {
    alert(MENSAGEM_EMAIL);
    return;
  }

  if (senha.trim().length === 0) {
    alert(MENSAGEM_SENHA);
    return;
  }

  activity(true);

  let usuario = {
    email: email,
    password: senha,
  };

  await fetch('https://reqres.in/api/login', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(usuario),
  })
    .then((response) => {
      if (response.status === 200) {
        response.text().then(function (result) {
          alert('Usuário autenticado com sucesso.');
          console.log(result);
        });
      } else {
        alert(`Usuário ou senha inválidos => código: ${response.status}`);
      }
      activity(false);
    })
    .catch(() => alert('Não foi possivel executar o login.'));
};

export default ({navigation}) => {
  const [user, setUser] = useState(EMAIL);
  const [password, setPassword] = useState(SENHA);
  const [alert, setStatus] = useState('');
  const [activity, setActivity] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={Estilos.container}>
      <View style={Estilos.logoContainer}>
        <Image style={Estilos.logo} source={require('./LogodaMelph.png')} />
      </View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={Estilos.centeredView}>
          <View style={Estilos.modalView}>
            <Text style={Estilos.modalText}>
              Usuarios ou senha invalidos!!!
            </Text>
            <View style={Estilos.button}>
              <Button
                onPress={() => setModalVisible(!modalVisible)}
                title="Fechar"
              />
            </View>
          </View>
        </View>
      </Modal>
  
      <Text style={Estilos.paragraph}>Login do Usuário</Text>
      <Text style={Estilos.loginLabel}>Email:</Text>
      <TextInput
        autoCorrect={false}
        placeholder={MENSAGEM_EMAIL}
        placeholderTextColor="grey"
        keyboardType="email address"
        autoCapitalize="none"
        autoComplete="email"
        style={Estilos.textInput}
        clearButtonMode="always"
        defaultValue={EMAIL}
        onChangeText={(value) => setUser(value)}
      />
      <Text style={Estilos.loginLabel}>Senha:</Text>
      <TextInput
        autoCorrect={false}
        placeholder={MENSAGEM_SENHA}
        placeholderTextColor="grey"
        autoCapitalize="none"
        secureTextEntry={true}
        style={Estilos.textInput}
        clearButtonMode="always"
        defaultValue={SENHA}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Biblioteca')}>
        <Text style={Estilos.button}>Entrar</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 10 }}>
        <ActivityIndicator size="large" animating={activity} />
      </View>
      <Text style={Estilos.loginLabel}>{alert}</Text>
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
  paragraph: {
    margin: 24,
    fontSize: 30,
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
  button: {
    backgroundColor: 'green',
    color: 'black',
    fontSize: 15,
    width: 100,
    fontWeight: 'bold',
    padding: 4,
    height: 30,
    borderRadius: 50,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    textAlign: 'center',
    alignSelf: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 15,
    height: 40,
    width: 250,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
});
