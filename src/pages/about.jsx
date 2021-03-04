import Link from 'components/Link'

export default (context) => {
  document.title = 'About ' + (context?.params?.name || 'Page')
  return (
    <div className="container">
      <h1 className="title">About {context?.params?.name || 'Page'}</h1>
      <p>
        Nice, routing is working! Back to <Link url="/">Homepage</Link>
      </p>
    </div>
  )
}