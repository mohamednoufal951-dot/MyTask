import { create } from "zustand";

export const FilterStore = create((set) => ({
 
    FilterInput: "",
    setFilterInput: (input) => set({ FilterInput: input }),
    setFilteredData: (filteredData) => set({ filteredData }),
 

}));
