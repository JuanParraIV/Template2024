import { useBoundStore } from '@/store'
import { Navigate, Outlet } from 'react-router-dom'
import { shallow } from 'zustand/shallow'

export default function isNotLogged({ redirectPath = '/' }) {
  const { Authenticated } = useBoundStore()

  console.log(Authenticated)

  if (!Authenticated) {
    return <Navigate to={redirectPath} replace={true} />
  }
  return <Outlet />
}
