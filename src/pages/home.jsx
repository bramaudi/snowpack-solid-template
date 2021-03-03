import Link from '../components/Link'

export default () => {
  return (
    <div className="container">
      <h1 className="title">Welcome</h1>
      <p>
        This is and index page, edit <code>./src/pages/home.jsx</code>. <br/>
        See also the <Link url="/about">About page</Link>.
      </p>
    </div>
  )
}