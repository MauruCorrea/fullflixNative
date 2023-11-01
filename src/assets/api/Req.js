import axios from 'axios';

//Env
const apiKey ='87e1e2afc9747ccde6f65bfc167be302';

export const movieListApi = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  // baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt&page=1`
})
export const movieDetailsApi = axios.create({
  baseURL: `https://api.themoviedb.org/3/movie/`
  // baseURL: `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt&page=1`
})

