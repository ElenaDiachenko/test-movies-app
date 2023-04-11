import type { NavigatorScreenParams, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  BottomTabs: NavigatorScreenParams<HomeTabParamList>;
  Details: {
    movieId: number;
  };
  PlayVideo: {
    movieId: number;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Details'
>;
export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'PlayVideo'
>;
export type HomeTabParamList = {
  Home: undefined;
  Popular: undefined;
  Account: undefined;
};

export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
};

export type AuthScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  keyof AuthStackParamList
>;

export type DetailsScreenRouteProp = RouteProp<HomeStackNavigatorParamList, 'Details'>;
export type PlayerScreenRouteProp = RouteProp<HomeStackNavigatorParamList, 'PlayVideo'>;
