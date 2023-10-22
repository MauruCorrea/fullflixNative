import React from 'react';
import { SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Registre = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Text>Registrar</Text>
      <TextInput placeholder='ID'></TextInput>
      <TextInput placeholder='PASSWORD'></TextInput>
      <TextInput placeholder='Nome de usuario'></TextInput>
      <TextInput placeholder='Endereço'></TextInput>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>ACESSAR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Já é cadastrado? Acesse.</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Registre;
