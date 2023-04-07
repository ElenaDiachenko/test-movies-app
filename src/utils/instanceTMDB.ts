import axios from 'axios';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const instanceTMDB = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default instanceTMDB;
