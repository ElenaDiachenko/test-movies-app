import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import * as Screens from 'screens/index';
import { RootStackParamList } from './types';
import Auth from './AuthStack';
import MainStack from './MainStack';
const RootStack = createNativeStackNavigator<RootStackParamList>();
