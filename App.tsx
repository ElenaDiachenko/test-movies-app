import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { Theme } from 'styles/theme';
import { Home } from 'screens/index';
import MainStack from 'navigation/MainStack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Theme>
          <MainStack />
        </Theme>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}