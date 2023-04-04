import { ThemeProvider } from 'styled-components';
import theme from './colors';

type Props = {
  children: React.ReactNode;
};

export const Theme = ({ children }: Props) => {
  return <ThemeProvider theme={theme.darkTheme}>{children}</ThemeProvider>;
};
