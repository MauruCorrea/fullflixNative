import { useNavigation } from '@react-navigation/native';
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { firebaseConfig } from '../assets/auth/auth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert('Erro ao logar usuario não encontrado');
      });
  };

  return (
    <ImageBackground
      source={require('../assets/bg_fullflix.png')}
      style={style.container}
    >
      <Text style={style.titleLogin}>Login</Text>

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

      <TouchableOpacity onPress={() => login()}>
        <Text style={style.btnAccess}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Registre')}>
        <Text style={style.btnRegistre}>Não tem conta? Registre-se.</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d0d0',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleLogin: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
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
    paddingVertical: 3,
    color: '#fff',
    margin: 10,
  },
  btnRegistre: {
    paddingTop: 30,
    paddingBottom: 50,
    paddingHorizontal: 15,
    paddingVertical: 3,
    color: '#fff',
  },
});
