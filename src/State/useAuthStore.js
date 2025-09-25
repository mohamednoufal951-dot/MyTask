import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,            // stores Google user object
  isSignedIn: false,     // track sign-in status

  setUser: (user) => set({ user, isSignedIn: !!user }),
  signOut: () => set({ user: null, isSignedIn: false }),
}));
