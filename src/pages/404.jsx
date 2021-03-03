import Link from 'components/Link'

export default () => {
  return (
    <div className="container">
      <h1 className="title">404</h1>
      <p>
        Nothing found! Back to <Link url="/">Homepage</Link>
      </p>
    </div>
  )
}