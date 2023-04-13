import { StateCreator } from 'zustand';

import { auth, db } from '../firebase/config';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { User } from 'types/index';
import { RegisterCredentials } from 'screens/Register';

import { LoginCredentials } from 'screens/Login';
import { MovieSlice } from './createMovieSlice';
import { ThemeSlice } from './createThemeSlice';
import { Alert } from 'react-native';

export type AuthSlice = {
  authUser: User | null;
  loading: boolean;
  error: string | null;
  registerUser: (data: RegisterCredentials) => void;
  loginUser: (data: LoginCredentials) => void;
  logoutUser: () => void;
  setAuthUser: () => void;
};

export const createAuthSlice: StateCreator<
  AuthSlice & MovieSlice & ThemeSlice,
  [['zustand/immer', never], ['zustand/persist', unknown]],
  [],
  AuthSlice
> = (set) => ({
  authUser: null,
  loading: false,
  error: null,
  setAuthUser: async () => {
    set({ loading: true });
    try {
      await onAuthStateChanged(auth, (currentUser) => {
        if (currentUser?.email && currentUser?.displayName) {
          set({
            authUser: { email: currentUser.email, name: currentUser.displayName },
            error: null,
          });
        }
      });
    } catch (error: any) {
      set({ error: error.message });
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  registerUser: async ({ name, email, password }) => {
    set({ loading: true });

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      if (auth?.currentUser) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
      }
      await setDoc(doc(db, 'users', email), {
        savedMovies: [],
      });

      const createdUser = auth.currentUser;
      if (createdUser?.email && createdUser?.displayName) {
        const payload = {
          email: createdUser.email,
          name: createdUser.displayName,
        };

        set({ authUser: payload, error: null });
      }
      Alert.alert(`Welcome, ${name}`);
    } catch (error: any) {
      set({ error: error.message });
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  loginUser: async ({ email, password }) => {
    set({ loading: true });

    try {
      await signInWithEmailAndPassword(auth, email, password);
      if (auth.currentUser?.email && auth.currentUser?.displayName) {
        set({
          authUser: { email: auth.currentUser.email, name: auth.currentUser.displayName },
          error: null,
        });
      }
      Alert.alert(`Welcome, ${auth.currentUser?.displayName}`);
    } catch (error: any) {
      set({ error: error.message });
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },

  logoutUser: async () => {
    set({ loading: true });
    try {
      await signOut(auth);
      set({ authUser: null, error: null, movies: [] });
    } catch (error: any) {
      set({ error: error.message });
      console.log(error);
    } finally {
      set({ loading: false });
    }
  },
});
