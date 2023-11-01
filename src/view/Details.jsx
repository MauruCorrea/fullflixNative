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
import { AnimatedCircularProgress } from 'react-native-circular-progress';

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
      console.error(`Error to get details`, error);
    }
  }

  useEffect(() => {
    if (route.params && route.params.movieName) {
      getMovieDetails(route.params.movieName);
    }
  }, [route.params]);

  return (
    <ImageBackground
      style={style.imgBG}
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
            <AnimatedCircularProgress
              size={50}
              width={4}
              fill={movieDetails.vote_average * 10 || 0}
              tintColor='#00e0ff'
              backgroundColor='#3d5875'
              padding={5}
              rotation={0}
              lineCap='round'
              style={style.animatedCircularProgress}
            >
              {(fill) => (
                <Text style={style.movieVoteAverage}>
                  {movieDetails.vote_average.toFixed(1)}
                </Text>
              )}
            </AnimatedCircularProgress>
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
    fontWeight: 'bold',
    margin: 5,
  },
  animatedCircularProgress: {
    position: 'absolute',
    top: -30,
    right: 0,
    marginRight: 75,
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
    width: 200,
    height: 300,
    borderRadius: 25,
    resizeMode: 'contain',
  },
});
