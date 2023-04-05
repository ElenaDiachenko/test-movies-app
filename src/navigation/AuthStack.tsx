import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Screens from 'screens/index';

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Register"
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="Login" component={Screens.Login} />
      <AuthStack.Screen name="Register" component={Screens.Register} />
    </AuthStack.Navigator>
  );
};

export default Auth;
