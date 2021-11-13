import { Link } from 'react-router-dom'
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap'
import CustomLink from '../CustomLink'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import styles from './Header.module.css'


// export function ActiveLink({ children, href }) {
//   // const router = useRouter()
//   const style = {
//     display: 'inline',
//     padding: '10px 25px',
//     flexDirection: 'initial',
//     // textDecoration: router.pathname !== href ? 'none' : 'underline'
//   }

//   const handleClick = (e) => {
//     e.preventDefault()
//     console.log('click');
//     // router.push(href)
//   }

//   return (
//     <Nav.Link 
//       as={Link} 
//       to={href} 
//       onClick={handleClick} 
//       style={style}>
//       <Link to={href}>{children}</Link>
//     </Nav.Link>
//   )
// }

const Header = () => {
  return (
    <Navbar
      className="py-4 mb-3"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Container fluid="md" className={styles.navContainer}>
        <Navbar.Brand as={Link} to="/">
          <Image className={styles.logo} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          className="border-0"
          aria-controls="responsive-navbar-nav"
        >
          <Image src={menu} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <CustomLink to="/warmups">Warm-ups</CustomLink>
            <CustomLink to="/endurance">Endurance</CustomLink>
            <CustomLink to="/intensity">Intensity</CustomLink>
            {/* <CustomLink to="/settings">Settings</CustomLink> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header