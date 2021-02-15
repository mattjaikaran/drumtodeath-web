import { useRouter } from 'next/router'
import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap/'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import style from './Header.module.css'


export function ActiveLink({ children, href }) {
  const router = useRouter()
  const style = {
    textDecoration: router.pathname !== href ? 'none' : 'underline'
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <Nav.Link href={href} onClick={handleClick} style={style}>
      {children}
    </Nav.Link>
  )
}

const Header = () => {
  return (
    <Navbar className="pt-4 mb-3" collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="/">
          <Image className={style.logo} src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav">
          <Image src={menu} />
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <ActiveLink href="/warmups">Warm-ups</ActiveLink>
            <ActiveLink href="/endurance">Endurance</ActiveLink>
            <ActiveLink href="/intensity">Intensity</ActiveLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header