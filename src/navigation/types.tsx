import type { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  BottomTabs: NavigatorScreenParams<HomeTabParamList>;
  Details: {
    movieId: number;
  };
  Player: {
    movieId: number;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Details'
>;
export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Player'
>;
export type HomeTabParamList = {
  Home: undefined;
  Popular: undefined;
  TopRated: undefined;
};

export type DetailsScreenRouteProp = RouteProp<HomeStackNavigatorParamList, 'Details'>;
export type PlayerScreenRouteProp = RouteProp<HomeStackNavigatorParamList, 'Player'>;
