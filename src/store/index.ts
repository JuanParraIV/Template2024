import { useUserStore } from '@/store/user/useUserStore'
import type { User } from '@/types'
import { create } from 'zustand'
import { createWithEqualityFn } from 'zustand/traditional'

export type UserState = {
  User: User | null
  Authenticated: boolean
}

export type UserActions = {
  setUser: (user: User) => void
  setAuthenticated: (authenticated: boolean) => void
}
export const useBoundStore = create<UserState & UserActions>()((...a) => ({
  ...useUserStore(...a),
}))
