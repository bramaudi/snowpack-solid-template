import router from 'page';
import routes from './routes.js'
import { createSignal, lazy, Suspense } from 'solid-js'

const Router = (props) => {
  const [page, setPage] = createSignal(null)
  
  // Add each routes to Router
  routes.forEach(({ path, component }) => {
    router(path, context => {
      if (typeof component().then === 'function') {
        const View = lazy(component)
        setPage(
          <Suspense {...props}>
            <View {...context} />
          </Suspense>
        )
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

export default Router