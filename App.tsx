import { StatusBar } from 'expo-status-bar';

import { Theme } from 'styles/theme';
import Home from 'screens/Home';

export default function App() {
  return (
    <>
      <Theme>
        <Home />
      </Theme>
      <StatusBar style="auto" />
    </>
  );
}
