import Link from '../components/Link'

export default () => {
  return (
    <div className="container">
      <h1 className="title">About Page</h1>
      <p>
        Nice, routing is working! Back to <Link url="/">Homepage</Link>
      </p>
    </div>
  )
}