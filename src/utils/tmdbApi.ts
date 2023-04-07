import $api from './instanceTMDB';
import { MoviesDataType, MovieItemType, VideoDataType } from 'types';
// import { TMDB_API_KEY } from '@env';
const TMDB_API_KEY = 'a5f5962e6f7f3d792e77e5ce1e0a6398';
export const fetchTrending = async (page = 1): Promise<MoviesDataType> => {
  return $api
    .get<MoviesDataType>(`/trending/movie/day?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`)
    .then((res) => res.data);
};

export const fetchTopRated = async (page = 1): Promise<MoviesDataType> => {
  return $api
    .get<MoviesDataType>(`movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`)
    .then((res) => res.data);
};

export const fetchPopular = async (page = 1): Promise<MoviesDataType> => {
  return $api
    .get<MoviesDataType>(`movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`)
    .then((res) => res.data);
};

export const fetchMovieById = async (movieId: number): Promise<MovieItemType> => {
  return $api
    .get<MovieItemType>(`movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`)
    .then((res) => res.data);
};
export const fetchVideo = async (movieId: string): Promise<VideoDataType> => {
  return $api
    .get<VideoDataType>(`movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`)
    .then((res) => res.data);
};
