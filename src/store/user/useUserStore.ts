import type { User } from '@/types'

export type UserState = {
  User: User | null
  Authenticated: boolean
}

export type UserActions = {
  setUser: (user: User) => void
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const useUserStore = (set: any) => ({
  User: null,
  Authenticated: false,
  setUser: (user: User) => set(() => ({ User: user })),
  setAuthenticated: (value: boolean) => set({ Authenticated: value }),
})
