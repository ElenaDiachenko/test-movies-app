import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components';

import * as Screens from 'screens/index';
import { HomeStackNavigatorParamList } from './types';
import BottomTabs from './BottomTabs';

//////////////

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity, Text } from 'react-native';
import { shallow } from 'zustand/shallow';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useStore } from 'stores/store';

import { HomeTabParamList } from './types';
import { useNavigationState } from '@react-navigation/native';

///////////////

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const MainStack = () => {
  const theme = useTheme();

  const { onLogout } = useStore(
    (state) => ({
      onLogout: state.logoutUser,
    }),
    shallow
  );

  return (
    <Stack.Navigator
      screenOptions={({ navigation }) => ({
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: theme.colors.TITLE_COLOR,
          fontSize: 24,
        },
        headerStyle: {
          backgroundColor: theme.colors.BACKGROUND_COLOR,
        },
        headerRight: () => (
          <TouchableOpacity style={{ width: 40 }} onPress={onLogout}>
            <Feather name="log-out" size={26} color={theme.colors.SECONDARY_COLOR} />
          </TouchableOpacity>
        ),
        headerLeft: () => {
          const prevName = () => {
            const routes = navigation.getState()?.routes;
            const prevRoute = routes[routes.length - 2];
            if (prevRoute?.name) return prevRoute.name;
            return null;
          };
          const prevTitle = prevName();
          if (prevTitle) {
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => navigation.goBack()}>
                <Ionicons name="chevron-back" size={30} color={theme.colors.SECONDARY_COLOR} />
                <Text
                  style={{ color: theme.colors.SECONDARY_COLOR, fontWeight: '500', fontSize: 14 }}>
                  {prevTitle}
                </Text>
              </TouchableOpacity>
            );
          }
        },
      })}>
      <Stack.Screen name={'Home'} component={BottomTabs} options={{ headerShown: false }} />
      <Stack.Screen
        name="Details"
        component={Screens.Details}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PlayVideo"
        component={Screens.PlayVideo}
        options={{
          title: 'Play video',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
