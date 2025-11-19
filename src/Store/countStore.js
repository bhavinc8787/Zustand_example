import {create} from "zustand"
export const useCountStore = create((set) => ({
    count: 0,
    
    incCount: () =>{ set((state) => ({count: state.count + 1}))},
    decrease: () => set((state) => ({count: state.count - 1})),
    reset: () => set({count: 0}),
}))

// set function is used for the changing the state Over Componats