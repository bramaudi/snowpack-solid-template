import { render } from 'solid-js/web'
import Router from './router.jsx'
import Header from 'components/Header'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Router fallback={<div>Please wait ...</div>} />
      </main>
    </>
  )
}

render(App, document.getElementById('app'))

if (process.env.NODE_ENV === 'production') {
  // Check that service workers are supported
  if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
    })
  }
}
