import * as API from './tmdbApi';

export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
export const ASPECT_RATIO = 500 / 750;

export const movieRows = [
  { id: '1', title: 'Trending', fetchData: API.fetchTrending, queryKey: 'trending-movies' },
  { id: '2', title: 'Popular', fetchData: API.fetchPopular, queryKey: 'popular-movies' },
  { id: '3', title: 'TopRated', fetchData: API.fetchTopRated, queryKey: 'topRated-movies' },
];

type ArrElement<ArrType> = ArrType extends (infer ElementType)[] ? ElementType : never;

export type movieRowType = ArrElement<typeof movieRows>;
