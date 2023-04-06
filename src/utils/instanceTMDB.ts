import axios from 'axios';
import { TMDB_BASE_URL } from './constants';

const instanceTMDB = axios.create({
  baseURL: TMDB_BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export default instanceTMDB;
