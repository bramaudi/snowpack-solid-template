import router from 'page';
import routes from './routes.js'
import { createSignal, lazy } from 'solid-js'

export default () => {
  const [page, setPage] = createSignal(null)
  
  // Add each routes to Router
  routes.forEach(({ path, component }) => {
    router(path, context => {
      if (typeof component().then === 'function') {
        const view = lazy(component)
        setPage(view(context))
      }
      else {
        setPage(component(context))
      }
    })
  })
 
  // Router start listening
  // Enable hashbang #! if your server dont have SPA fallback routing
  router({ hashbang: false })

  // reactive signal contains component
  return page
}