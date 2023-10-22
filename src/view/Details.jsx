import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const Details = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Image source={require('../assets/picture.jpg')} />
        <Text>Nome do pokemon</Text>
        <Text>Altura</Text>
        <Text>Peso</Text>
        <Text>Tipo</Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Details;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
