import LoginRoutes from './login'
import AdminRoutes from './admin'

const BaseRoutes = [
  {
    path: '/',
    redirect: '/login'
  }
]

const NotFoundRoutes = [
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/error/not-found.vue'),
    meta: {
      title: '404 Not Found'
    }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

export default BaseRoutes.concat(LoginRoutes, AdminRoutes, NotFoundRoutes)