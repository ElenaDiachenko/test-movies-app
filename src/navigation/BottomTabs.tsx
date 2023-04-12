import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'zustand/shallow';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useStore } from 'stores/store';
import * as Screens from 'screens/index';
import { HomeTabParamList } from './types';
import { useTheme } from 'styled-components';

const MainTab = createBottomTabNavigator<HomeTabParamList>();

const BottomTabs = () => {
  const theme = useTheme();

  const { currentTheme, toggleTheme } = useStore(
    (state) => ({
      currentTheme: state.theme,
      toggleTheme: state.toggleTheme,
    }),
    shallow
  );

  const { onLogout } = useStore(
    (state) => ({
      onLogout: state.logoutUser,
    }),
    shallow
  );

  return (
    <MainTab.Navigator
      initialRouteName={'Home'}
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: theme.colors.BACKGROUND_COLOR,
          shadowColor: theme.colors.TITLE_COLOR,
          shadowOffset: { width: 0, height: -0.5 },
          shadowOpacity: 0.3,
        },
        tabBarInactiveTintColor: theme.colors.TEXT_COLOR,
        tabBarActiveTintColor: theme.colors.ACCENT_COLOR,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap | undefined;
          size = 25;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-circle' : 'search-circle-outline';
            size = 40;
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: theme.colors.BACKGROUND_COLOR,
          shadowColor: theme.colors.TITLE_COLOR,
          shadowOffset: { width: 0, height: -0.5 },
          shadowOpacity: 0.3,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: theme.colors.TITLE_COLOR,
          fontSize: 24,
        },
        headerRight: () => (
          <TouchableOpacity style={{ width: 40, marginRight: 16 }} onPress={onLogout}>
            <Feather name="log-out" size={26} color={theme.colors.SECONDARY_COLOR} />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity style={{ width: 40, marginLeft: 16 }} onPress={toggleTheme}>
            <Ionicons
              name={currentTheme === 'light' ? 'ios-sunny-outline' : 'ios-moon'}
              size={30}
              color={theme.colors.SECONDARY_COLOR}
            />
          </TouchableOpacity>
        ),
        headerPressColor: theme.colors.ACCENT_COLOR,
      })}>
      <MainTab.Screen name="Home" component={Screens.Home} />
      <MainTab.Screen
        name="Search"
        component={Screens.Search}
        options={{ headerTitle: 'Search' }}
      />

      <MainTab.Screen
        name="Account"
        component={Screens.Account}
        options={{
          headerTitle: 'User page',
        }}
      />
    </MainTab.Navigator>
  );
};

export default BottomTabs;
