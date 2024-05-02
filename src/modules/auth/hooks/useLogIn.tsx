import { useBoundStore, type UserActions } from '@/store'
import { useUserStore } from '@/store/user/useUserStore'
import { Moralis } from 'moralis-v1'
import { useMoralis } from 'react-moralis'
import type { LogIn } from '../types'
import type { User } from '@/types'

function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message
  return String(error)
}

function useLogIn() {
  const { setUser } = useUserStore((state: UserActions) => state.setUser)
  const { setAuthenticated, Authenticated } = useBoundStore()
  const { logout } = useMoralis()
  const logIn = async ({ email, password }: LogIn) => {
    try {
      const response = await Moralis.User.logIn(email, password)
      setUser(response.attributes as User)
      setAuthenticated(true)
      console.log(Authenticated)
      return {
        status: 'success',
        message: 'Registro exitoso',
        response: response,
      }
    } catch (error) {
      reportError({ message: getErrorMessage(error) })
    }
  }

  const logoutFunc = async () => {
    await logout()
    setUser(null)
    setAuthenticated(false)
  }

  return {
    logIn,
    logoutFunc,
  }
}

export default useLogIn
