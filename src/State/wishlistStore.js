// store/wishlistStore.js
import { create } from "zustand";

export const useWishlistStore = create((set) => ({
  wishlist: [],

  addToWishlist: (item) =>
    set((state) => ({
      wishlist: [...state.wishlist, item],
    })),

  removeFromWishlist: (id) =>
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item.id !== id),
    })),

  clearWishlist: () => set({ wishlist: [] }),
}));
