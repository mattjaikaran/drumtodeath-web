import {
  Link,
  useMatch,
  useResolvedPath,
} from 'react-router-dom'

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to)
  let match = useMatch({ path: resolved.pathname, end: true })

  return (
    <div>
      <Link
        style={{ 
          padding: '10px 25px',
          textDecoration: match ? 'underline' : 'none' 
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && ''}
    </div>
  )
}

export default CustomLink
