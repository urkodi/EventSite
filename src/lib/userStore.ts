import { create } from 'zustand'
import type { User } from '../global';

interface UserStore {
    user: User | null,
    removeUser: () => void,
    setUser: (newUser: User) => void
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  removeUser: () => set({ user: null }),
  setUser: (newUser: User) => set({ user : newUser }),
}));

export default useUserStore;