import { useBoundStore } from '@/store'
import { Navigate, Outlet } from 'react-router-dom'

export default function isLogged({ redirectPath = '/' }) {
  const { Authenticated } = useBoundStore()

  console.log(Authenticated)

  if (Authenticated) {
    return <Navigate to={redirectPath} replace={true} />
  }
  return <Outlet />
}
