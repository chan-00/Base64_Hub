import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ThemeState {
  isDark: boolean
  toggleTheme: () => void
  setTheme: (isDark: boolean) => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      isDark: false,
      toggleTheme: () => set((state) => ({ isDark: !state.isDark })),
      setTheme: (isDark: boolean) => set({ isDark }),
    }),
    {
      name: 'theme-storage',
    }
  )
)

interface HistoryItem {
  id: string
  input: string
  output: string
  encoding: string
  isUrlSafe: boolean
  timestamp: number
}

interface HistoryState {
  history: HistoryItem[]
  addToHistory: (item: Omit<HistoryItem, 'id' | 'timestamp'>) => void
  clearHistory: () => void
  removeFromHistory: (id: string) => void
}

export const useHistoryStore = create<HistoryState>()(
  persist(
    (set) => ({
      history: [],
      addToHistory: (item) =>
        set((state) => ({
          history: [
            {
              ...item,
              id: Date.now().toString(),
              timestamp: Date.now(),
            },
            ...state.history.slice(0, 49), // 최대 50개 유지
          ],
        })),
      clearHistory: () => set({ history: [] }),
      removeFromHistory: (id) =>
        set((state) => ({
          history: state.history.filter((item) => item.id !== id),
        })),
    }),
    {
      name: 'history-storage',
    }
  )
) 