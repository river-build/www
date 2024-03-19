import { create } from 'zustand'

type AppState = {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: (value: boolean) => void
}

const useAppStore = create<AppState>((set) => ({
  isMobileMenuOpen: false,
  setIsMobileMenuOpen: (value) => set({ isMobileMenuOpen: value }),
}))

export default useAppStore
