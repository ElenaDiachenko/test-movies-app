export type MoviesDataType = {
  page: number;
  results: MovieItemType[];
  dates?: any;
  total_pages: number;
  total_results: number;
};

export type MovieItemType = {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title: string;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type?: string;
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export interface VideoDataType {
  id: number;
  results: VideoDataItemType[];
}

export interface VideoDataItemType {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}