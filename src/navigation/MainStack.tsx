import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Screens from 'screens/index';

import { HomeStackNavigatorParamList } from './types';

import BottomTabs from './BottomTabs';
import { useTheme } from 'styled-components';
import { useNavigationState } from '@react-navigation/native';

function usePreviousRouteName() {
  return useNavigationState((state) =>
    state.routes[state.index - 1]?.name ? state.routes[state.index - 1].name : 'None'
  );
}
const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const MainStack = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator>
      <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen
        name="Details"
        component={Screens.Details}
        options={{
          title: 'Movie details',
          headerStyle: {
            backgroundColor: theme.colors.BACKGROUND_COLOR,
          },
          headerTintColor: theme.colors.TITLE_COLOR,
        }}
      />
      <Stack.Screen
        name="PlayVideo"
        component={Screens.PlayVideo}
        options={{
          title: 'Play video',
          headerStyle: {
            backgroundColor: theme.colors.BACKGROUND_COLOR,
          },
          headerTintColor: theme.colors.TITLE_COLOR,
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
