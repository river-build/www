import create from 'zustand'

type AppState = {
  count: number
  increment: () => void
  decrement: () => void
}

const useAppStore = create<AppState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

export default useAppStore
