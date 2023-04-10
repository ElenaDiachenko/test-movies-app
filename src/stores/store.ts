import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

import { createAuthSlice, AuthSlice } from './createAuthSlice';
import { createMovieSlice, MovieSlice } from './createMovieSlice';

export const useStore = create<AuthSlice & MovieSlice>()(
  immer((...a) => ({
    ...createAuthSlice(...a),
    ...createMovieSlice(...a),
  }))
);
