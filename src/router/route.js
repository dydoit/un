import NetworkRoutes from './network_route'
import MyRoutes from './my_route'
import SetupRoutes from './setup_route'
export default [
  {
    path: '/',
    redirect: '/network',
  },
  ...NetworkRoutes,
  ...MyRoutes,
  ...SetupRoutes
]


