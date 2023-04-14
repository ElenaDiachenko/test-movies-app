import type {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  Home: NavigatorScreenParams<HomeTabParamList>;
  Details: {
    movieId: number;
    prevRoute?: string;
  };
  PlayVideo: {
    movieId: number;
  };
};

export type HomeStackScreenProps<T extends keyof HomeStackNavigatorParamList> = StackScreenProps<
  HomeStackNavigatorParamList,
  T
>;

export type DetailsScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'PlayVideo'
>;
export type HomeTabParamList = {
  Category: undefined;
  Search: undefined;
  Account: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  HomeStackScreenProps<keyof HomeStackNavigatorParamList>
>;

export type AuthStackParamList = {
  Register: undefined;
  Login: undefined;
};

export type AuthScreenNavigationProp = NativeStackNavigationProp<
  AuthStackParamList,
  keyof AuthStackParamList
>;

export type PlayerScreenRouteProp = RouteProp<HomeStackNavigatorParamList, 'PlayVideo'>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends HomeStackNavigatorParamList, AuthStackParamList {}
  }
}
