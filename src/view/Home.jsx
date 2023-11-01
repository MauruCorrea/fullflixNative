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
      style={style.imgBG}
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
  imgBG: {
    width: 'auto',
    height: 150,
    paddingTop: 100,
    marginTop: 50,
    flex: 1,
    justifyContent: 'flex-start',
  },
  container: {
    backgroundColor: '#000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'red',
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowRadius: 1,
  },
  div: {
    alignItems: 'center',
    margin: 15,
    maxWidth: '40%',
  },
  img: {
    width: 150,
    height: 200,
    borderRadius: 15,
  },
  movieTitle: {
    textAlign: 'center',
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
    margin: 3,
  },
});
