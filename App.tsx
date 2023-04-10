import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { shallow } from 'zustand/shallow';

import { useStore } from 'stores/store';
import { Theme } from 'styles/theme';
import MainStack from 'navigation/MainStack';
import AuthStack from 'navigation/AuthStack';

const App = () => {
  const queryClient = new QueryClient();
  const { setAuthUser, user } = useStore(
    (state) => ({
      setAuthUser: state.setAuthUser,
      user: state.authUser,
    }),
    shallow
  );

  useEffect(() => {
    (async () => {
      await setAuthUser();
    })();
  }, [setAuthUser]);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Theme>{!user ? <AuthStack /> : <MainStack />}</Theme>
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
};

export default App;
