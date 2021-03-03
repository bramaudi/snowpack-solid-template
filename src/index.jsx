import { render } from 'solid-js/web'
import Router from './router.jsx'

const App = () => {
  return (
    <main>
      <Router />
    </main>
  )
}

render(App, document.getElementById('app'))