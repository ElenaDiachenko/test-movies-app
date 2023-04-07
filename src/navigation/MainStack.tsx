import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from 'screens/index';
import { TouchableOpacity } from 'react-native';
import { HomeTabParamList, HomeStackNavigatorParamList } from './types';
import { Feather } from '@expo/vector-icons';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen
        name="Details"
        component={Screens.Details}
        options={{
          title: 'Movie detail',
        }}
      />
      <Stack.Screen
        name="Player"
        component={Screens.Player}
        options={{
          title: 'Play video',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
