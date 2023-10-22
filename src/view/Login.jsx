import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

const Login = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Login</Text>
      <TextInput placeholder='ID'></TextInput>
      <TextInput placeholder='PASSWORD'></TextInput>

      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>ACESSAR</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Registre')}>
        <Text>Não tem conta? Registre-se.</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
