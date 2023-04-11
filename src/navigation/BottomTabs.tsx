import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native';
import { shallow } from 'zustand/shallow';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import { useStore } from 'stores/store';
import * as Screens from 'screens/index';
import { HomeTabParamList } from './types';

const MainTab = createBottomTabNavigator<HomeTabParamList>();

const BottomTabs = () => {
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
          backgroundColor: '#ffffff',
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: -0.5 },
          shadowOpacity: 0.3,
        },
        tabBarInactiveTintColor: 'rgba(33, 33, 33, 0.8)',
        tabBarActiveTintColor: '#3740FE',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 25;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Popular') {
            iconName = focused ? 'search-circle' : 'search-circle-outline';
            size = 40;
          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: -0.5 },
          shadowOpacity: 0.3,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#212121',
          fontSize: 24,
        },
        headerRight: () => (
          <TouchableOpacity style={{ width: 24, marginRight: 16 }} onPress={onLogout}>
            <Feather name="log-out" size={24} color="#73737d" />
          </TouchableOpacity>
        ),
        // headerLeft: () => (
        //   <TouchableOpacity style={{ width: 24, marginRight: 16 }} onPress={() => {}}>
        //     <Feather name="log-out" size={24} color="#a31d1d" />
        //   </TouchableOpacity>
        // ),
        headerPressColor: '#3740FE',
      })}>
      <MainTab.Screen
        name="Home"
        component={Screens.Home}
        options={
          {
            //   headerShown: false,
          }
        }
      />
      <MainTab.Screen
        name="Popular"
        component={Screens.Popular}
        options={{ headerTitle: 'Popular movies' }}
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
