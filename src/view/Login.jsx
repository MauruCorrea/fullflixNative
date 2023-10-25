import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.titleLogin}>Login</Text>
      <TextInput style={style.input} placeholder='ID:       '></TextInput>
      <TextInput style={style.input} placeholder='PASSWORD: '></TextInput>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={style.btnAccess}>ACESSAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Registre')}>
        <Text>Não tem conta? Registre-se.</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d0d0d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLogin: {
    fontSize: 32,
    fontWeight: '600',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 100,
    paddingVertical: 8,
    margin: 4,
  },
  btnAccess: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 3,
    color: '#fff',
    margin: 10,
  },
});
