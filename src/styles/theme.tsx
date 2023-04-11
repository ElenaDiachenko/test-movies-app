import { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import { shallow } from 'zustand/shallow';

import theme from './colors';
import { ThemeType } from './colors';
import { useStore } from 'stores/store';

type Props = {
  children: React.ReactNode;
};

const themes = {
  [ThemeType.light]: theme.lightTheme,
  [ThemeType.dark]: theme.darkTheme,
};

export const Theme = ({ children }: Props) => {
  const { currentTheme, setTheme } = useStore(
    (state) => ({
      currentTheme: state.theme,
      setTheme: state.setTheme,
    }),
    shallow
  );

  useEffect(() => {
    setTheme();
  }, []);

  return <ThemeProvider theme={themes[currentTheme]}>{children}</ThemeProvider>;
};
