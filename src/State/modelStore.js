import { create } from "zustand";

export const modelStore = create((set) => ({
 
 
    isOpen: false,

  openModel: () => set({ isOpen: true }),
  closeModel: () => set({ isOpen: false }),

}));
