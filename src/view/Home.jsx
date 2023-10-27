import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <Text syle={style.title}>Pokemon List</Text>
      {/* List of objects */}
      {/* <FlatList> */}
      <View style={style.div}>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Image style={style.img} source={require('../assets/picture.jpg')} />
        </TouchableOpacity>
        <Text style={style.movieTitle}> Title </Text>
      </View>
      <View style={style.div}>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Image style={style.img} source={require('../assets/picture.jpg')} />
        </TouchableOpacity>
        <Text style={style.movieTitle}> Title </Text>
      </View>
      {/* </FlatList> */}
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={style.logout}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 30,
  },
  div: {
    alignItems: 'center',
    margin: 15,
  },
  img: {
    width: 150,
    height: 200,
    borderRadius: 15,
  },
  movieTitle: {
    color: 'red',
    fontSize: 15,
    margin: 5,
  },
  logout: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
  },
});
