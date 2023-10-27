import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

const Details = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <Text style={style.about}></Text>
      <View style={style.div}>
        <Image source={require('../assets/picture.jpg')} />
        <Text style={style.movieTitle}>Movie Title</Text>
        <Text>Sinopse</Text>
        <Text>Nota</Text>
        <Text>Date</Text>
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
  about: {
    fontSize: 30,
    marginBottom: 50,
  },
  div: {
    alignItems: 'center',
  },
  movieTitle: {
    margin: 10,
    fontSize: 20,
  },
});
