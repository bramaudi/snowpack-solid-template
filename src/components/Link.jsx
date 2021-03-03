import router from 'page'

/**
 * Vanilla anchor HTML tag with router navigate
 * @param {Object} props
 * @param {string} props.url - Link url
 * @param {any} props.children - Link children
 */
const Link = ({ url, children } = props) => {
  const navigate = (e) => {
    e.preventDefault()
    router.redirect(url)
  }
  return <a href={url} onClick={navigate}>{children}</a>
}

export default Link
