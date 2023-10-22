import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, TouchableOpacity, View, Image } from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';

const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={style.container}>
      <View>
        <Image source={require('../assets/picture.jpg')} />
        <Text> Title </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text>Details</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
