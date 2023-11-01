import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { StyleSheet } from 'react-native';
import { api, apiKey } from '../assets/api/Req';

const Details = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [movieDetails, setMovieDetails] = useState('');

  async function getMovieDetails(id) {
    try {
      const result = await api.get(
        `${id}?api_key=${apiKey}&language=pt&page=1`
      );

      setMovieDetails(result.data);
    } catch (error) {
      console.error(`Details error`);
    }
  }

  useEffect(() => {
    if (route.params && route.params.movieName) {
      getMovieDetails(route.params.movieName);
    }
  }, [route.params]);

  return (
    <ImageBackground
      style={style.container}
      source={require('../assets/bg_fullflix.png')}
    >
      <SafeAreaView style={style.container}>
        <Text style={style.about}></Text>
        {movieDetails && (
          <View style={style.div}>
            <Image
              style={style.img}
              source={{
                uri: `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`,
              }}
            />
            <Text style={style.movieTitle}>{movieDetails.title}</Text>
            <Text style={style.movieOverview}>{movieDetails.overview}</Text>
            <Text style={style.movieReleaseDate}>
              {movieDetails.release_date}
            </Text>
            <Text style={style.movieVoteAverage}>
              {movieDetails.vote_average}
            </Text>
          </View>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={style.btnBack}>Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
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
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    margin: 5,
  },
  movieOverview: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    margin: 5,
  },
  movieReleaseDate: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    margin: 5,
  },
  movieVoteAverage: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    margin: 5,
  },
  btnBack: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 3,
    color: '#fff',
    fontWeight: 'bold',
    margin: 10,
  },
  img: {
    width: 300,
    height: 350,
    borderRadius: 15,
  },
});
