import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { firebaseConfig } from '../assets/auth/auth';

const Registre = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        Alert.alert('Usuario criado com sucesso!');
        navigation.navigate('Login');
      })
      .catch((error) => {
        Alert.alert('Erro ao criar usuario ', error);
      });
  };

  return (
    <ImageBackground
      source={require('../assets/bg_fullflix.png')}
      style={style.container}
    >
      <Text style={style.titleRegister}>Registrar</Text>

      {/* IMPUTS */}
      <TextInput
        value={email}
        onChangeText={(e) => setEmail(e)}
        placeholder='Email:'
        style={style.input}
      ></TextInput>
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={(e) => setPassword(e)}
        style={style.input}
        placeholder='password:'
      ></TextInput>
      {/* IMPUTS */}

      <TouchableOpacity onPress={() => register()}>
        <Text style={style.btnAccess}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={style.btnLogin}>Já é cadastrado? Acesse.</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Registre;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleRegister: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#fff',
    width: '80%',
    height: 50,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 20,
  },
  btnAccess: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 15,
    marginVertical: 10,
    color: '#fff',
    margin: 10,
  },
  btnLogin: {
    color: '#fff',
  },
});
