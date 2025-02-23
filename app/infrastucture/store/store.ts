// stores/useAppStore.ts
import { create } from 'zustand';



// Combined store
const useAppStore = create<any>((set) => ({
  // Counter state and actions
  count: 0,
  state1: true,
  state1change: () => set((state:any) => ({ state1: !state.state1 })),
}));

export default useAppStore;