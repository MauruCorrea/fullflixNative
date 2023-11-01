import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  Image,
  FlatList,
  ImageBackground,
} from 'react-native';
import { Text } from 'react-native';
import { StyleSheet } from 'react-native';
import { api, apiKey } from '../assets/api/Req';

const Home = () => {
  const navigation = useNavigation();

  const [movie, setMovie] = useState([]);

  async function start() {
    const result = await api.get(
      `popular?api_key=${apiKey}&language=pt&page=1`
    );
    setMovie(result.data.results);
  }

  useEffect(() => {
    start();
  }, []);

  return (
    <ImageBackground
      style={style.container}
      source={require('../assets/bg_fullflix.png')}
    >
      <SafeAreaView style={style.container}>
        <Text style={style.listTitle}>Movie List</Text>
        {/* List of objects */}
        {/* <FlatList> */}
        <FlatList
          data={movie}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={({ item }) => (
            <View style={style.div}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Details', {
                    movieName: item.id,
                  })
                }
              >
                <Image
                  style={style.img}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                  }}
                  onError={() =>
                    console.log(
                      `erro ao mostrar imagem from: ${item.poster_path}`
                    )
                  }
                />
                <Text style={style.movieTitle}> {item.title} </Text>
              </TouchableOpacity>
            </View>
          )}
        />
        {/* <View style={style.div}>
        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Image style={style.img} source={require('../assets/picture.jpg')} />
        </TouchableOpacity>
        <Text style={style.movieTitle}> Title </Text>
      </View> */}

        {/* </FlatList> */}
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={style.logout}>Logout</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default Home;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listTitle: {
    marginTop: 50,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
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
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5,
  },
  logout: {
    backgroundColor: 'red',
    color: '#fff',
    fontWeight: 'bold',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});
