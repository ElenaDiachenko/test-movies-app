import $api from './instanceTMDB';
import { MoviesDataType, MovieItemType, VideoDataType } from 'types';
import { TMDB_API_KEY } from '@env';

type TransformedMoviesType = {
  nextPage: number | undefined;
  prevPage: number | undefined;
  movies: MovieItemType[];
};

export const fetchTrending = async (page: number): Promise<TransformedMoviesType> => {
  return $api
    .get<MoviesDataType>(`/trending/movie/day?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      const hasNext = page < res.data.total_pages;
      return {
        nextPage: hasNext ? page + 1 : undefined,
        prevPage: page > 1 ? page - 1 : undefined,
        movies: res.data.results,
      };
    });
};

export const fetchTopRated = async (page: number): Promise<TransformedMoviesType> => {
  return $api
    .get<MoviesDataType>(`movie/top_rated?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      const hasNext = page < res.data.total_pages;
      return {
        nextPage: hasNext ? page + 1 : undefined,
        prevPage: page > 1 ? page - 1 : undefined,
        movies: res.data.results,
      };
    });
};

export const fetchPopular = async (page: number): Promise<TransformedMoviesType> => {
  return $api
    .get<MoviesDataType>(`movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=${page}`)
    .then((res) => {
      const hasNext = page < res.data.total_pages;
      return {
        nextPage: hasNext ? page + 1 : undefined,
        prevPage: page > 1 ? page - 1 : undefined,
        movies: res.data.results,
      };
    });
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

export const fetchMovieByKeyword = async (
  page: number,
  query: string
): Promise<TransformedMoviesType> => {
  return $api
    .get<MoviesDataType>(
      `search/movie?api_key=${TMDB_API_KEY}&query=${query}&language=en-US&page=${page}`
    )
    .then((res) => {
      const hasNext = page < res.data.total_pages;
      return {
        nextPage: hasNext ? page + 1 : undefined,
        prevPage: page > 1 ? page - 1 : undefined,
        movies: res.data.results,
      };
    });
};
