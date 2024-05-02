import { Loader } from '@/modules/core/icons'
import IsNotLogged from '@/routes/guard/isNotLogged'
import { Suspense, lazy } from 'react'
import { Route, Routes as RouterRoutes } from 'react-router-dom'
import { Routes } from '.'
import Footer from '@/modules/core/components/footer'
import Navbar from '@/modules/core/components/navbar'

const Home = lazy(() => import('@/screens/home'))
const NotFoundPage = lazy(() => import('@/screens/notFoundPage'))

// user Routes de la siguiente manera: <Link to={Roues.home}>Home</Link>

export default function Navigator() {
  return (
    <Suspense
      fallback={
        <div className="h-screen w-full grid place-content-center">
          <Loader className="h-[1.5rem] w-[1.5rem]" />
        </div>
      }
    >
      <Navbar />
      <RouterRoutes>
        <Route path={Routes.home} element={<Home />} />
        <Route element={<IsNotLogged />}>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </RouterRoutes>
      <Footer />
    </Suspense>
  )
}
