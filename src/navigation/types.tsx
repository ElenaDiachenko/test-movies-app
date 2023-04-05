import type {
  CompositeScreenProps,
  NavigatorScreenParams,
  RouteProp,
} from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type HomeStackNavigatorParamList = {
  BottomTabs: undefined;
  Details: {
    movieId: number;
  };
};

export type HomeScreenNavigationProp = NativeStackNavigationProp<
  HomeStackNavigatorParamList,
  'Details'
>;

export type DetailsScreenRouteProp = RouteProp<HomeStackNavigatorParamList, 'Details'>;
// ####################

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Popular: undefined;
  TopRated: undefined;
  Account: { userId: string };
  Details: {
    movieId: number;
  };
  Player: {
    movieId: number;
  };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  T
>;

export type HomeTabParamList = {
  Home: undefined;
  Popular: undefined;
  TopRated: undefined;
};

export type HomeTabScreenProps<T extends keyof HomeTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<HomeTabParamList, T>,
  RootStackScreenProps<keyof RootStackParamList>
>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
