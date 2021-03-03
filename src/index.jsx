import { render } from 'solid-js/web'
import Router from './router.jsx'

const App = () => {
  return (
    <main style={{background: "#fff"}}>
      <Router />
    </main>
  )
}

render(App, document.getElementById('app'))