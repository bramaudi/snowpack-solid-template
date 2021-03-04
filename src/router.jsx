import router from 'page';
import routes from './routes.js'
import { createSignal } from 'solid-js'

export default () => {
  const [page, setPage] = createSignal(null)
  
  const mountPage = (path, component) => {
    router(path, async (context) => {
      // Async component
      if (typeof component().then === 'function') {
        const asyncPage = (await component()).default
        setPage(asyncPage(context))
      } else {
        setPage(component(context))
      }
    })
  }
  
  // Add each routes to Router
  routes.forEach(({ path, component }) => {
    mountPage(path, component)
  })
 
  // Router start listening
  // Enable hashbang #! if your server dont have SPA fallback routing
  router({ hashbang: false })

  // reactive signal contains component
  return page
}