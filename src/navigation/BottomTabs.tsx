import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Screens from 'screens/index';
import { TouchableOpacity } from 'react-native';
import { HomeTabParamList } from './types';
import { Feather } from '@expo/vector-icons';

const MainTab = createBottomTabNavigator<HomeTabParamList>();

const BottomTabs = () => {
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
        tabBarActiveTintColor: '#FF6C00',
        // tabBarIcon: ({ focused, color, size }) => {
        //   let iconName;
        //   size = 25;

        //   if (route.name === 'Home') {
        //     iconName = focused ? 'grid' : 'grid-outline';
        //   } else if (route.name === 'Popular') {
        //     iconName = focused ? 'add-circle' : 'add-circle-outline';
        //     size = 40;
        //   } else if (route.name === 'TopRated') {
        //     iconName = focused ? 'person' : 'person-outline';
        //   }

        //   return <Ionicons name={iconName} size={size} color={color} />;
        // },
        headerStyle: {
          backgroundColor: '#ffffff',
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: -0.5 },
          shadowOpacity: 0.3,
        },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#212121',
          //   fontFamily: 'Roboto-Regular',
          fontSize: 24,
        },
        headerPressColor: '#4169e1',
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
        name="TopRated"
        component={Screens.TopRated}
        options={{
          headerTitle: 'TopRated movies',
          headerRight: () => (
            <TouchableOpacity style={{ width: 24, marginRight: 16 }} onPress={() => {}}>
              <Feather name="log-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity style={{ width: 24, marginRight: 16 }} onPress={() => {}}>
              <Feather name="log-out" size={24} color="#a31d1d" />
            </TouchableOpacity>
          ),
        }}
      />
    </MainTab.Navigator>
  );
};

export default BottomTabs;
