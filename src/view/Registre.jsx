import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Registre = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require('../assets/bg_fullflix.png')}
      style={style.container}
    >
      <Text style={style.titleRegister}>Registrar</Text>
      <TextInput style={style.input} placeholder='ID'></TextInput>
      <TextInput style={style.input} placeholder='PASSWORD'></TextInput>
      <TextInput style={style.input} placeholder='Nome de usuario'></TextInput>
      <TextInput style={style.input} placeholder='Endereço'></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={style.btnAccess}>ACESSAR</Text>
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
