import type { UserState } from '@/store'
import { useUserStore } from '@/store/user/useUserStore'
import { User } from '@/types'

function useSession() {
  const { user } = useUserStore(({ user }: { user: UserState }) => ({ user }))
  return {
    user,
  }
}

export default useSession
