import { StateCreator } from 'zustand';
import { ThemeType } from 'styles/colors';
import { MovieSlice } from './createMovieSlice';
import { AuthSlice } from './createAuthSlice';

export type ThemeSlice = {
  theme: ThemeType;
  setTheme: () => void;
  toggleTheme: () => void;
};

export const createThemeSlice: StateCreator<
  AuthSlice & MovieSlice & ThemeSlice,
  [['zustand/immer', never], ['zustand/persist', unknown]],
  [],
  ThemeSlice
> = (set, get) => ({
  theme: ThemeType.dark,

  setTheme: () => {
    const { theme } = get();
    if (theme) {
      set({ theme: theme });
    }
  },

  toggleTheme: () => {
    const { theme } = get();
    set({ theme: ThemeType.light === theme ? ThemeType.dark : ThemeType.light });
  },
});
