import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { createAuthSlice, AuthSlice } from './createAuthSlice';
import { createMovieSlice, MovieSlice } from './createMovieSlice';
import { createThemeSlice, ThemeSlice } from './createThemeSlice';

export const useStore = create<AuthSlice & MovieSlice & ThemeSlice>()(
  immer(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createMovieSlice(...a),
        ...createThemeSlice(...a),
      }),
      {
        name: 'state',
        storage: createJSONStorage(() => AsyncStorage),
      }
    )
  )
);
