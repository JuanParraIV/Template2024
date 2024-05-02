import { Services } from '@/services'
import { Moralis } from 'moralis-v1'
import type { SignUp } from '../types'

function useSignUp() {
  const signUp = async ({ email, password }: SignUp) => {
    const result = await Moralis.Cloud.run(Services.auth.signUp, {
      objectData: {
        email,
        password,
      },
    })
    return result
  }

  return {
    signUp,
  }
}

export default useSignUp
