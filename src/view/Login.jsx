import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/bg_fullflix.png')}
      style={style.container}
    >
      <Text style={style.titleLogin}>Login</Text>
      <TextInput style={style.input} placeholder='ID:       '></TextInput>
      <TextInput style={style.input} placeholder='PASSWORD: '></TextInput>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={style.btnAccess}>ACESSAR</Text>
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
