import theme from '../styles/colors';

type Theme = typeof theme.darkTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
