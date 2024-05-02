import type { User } from '@/types'

export type LogIn = {
  password: string
} & Pick<User, 'email'>

export type SignUp = Pick<LogIn, 'email' | 'password'>
