import Home from 'pages/home'
import NotFound from 'pages/404'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about/:name?',
    component: () => import('pages/about')
  },
  {
    path: '*',
    component: NotFound
  }
]

export default routes