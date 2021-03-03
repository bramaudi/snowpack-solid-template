import router from 'page';
import { createSignal } from 'solid-js'
import Home from './pages/home.jsx'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/fav',
    component: () => import('./pages/fav.jsx')
  }
]

export default () => {
  const [page, setPage] = createSignal(null)
  
  const addRouter = (path, component) => {
    router(path, async () => {
      if (typeof component().then === 'function') {
        setPage(() => (<div>Loading ...</div>))
        await component().then(resp => {
          setPage(resp.default())
        })
      }
      else {
        setPage(component())
      }
    })
  }
  
  // Add each routes to Router
  routes.forEach(({ path, component }) => {
    addRouter(path, component)
  })
  
  // Router start listening
  router({ hashbang: true })

  return page
}