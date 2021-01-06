import { Navbar, Nav, Container, NavDropdown, Image } from 'react-bootstrap/'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'
import style from './Header.module.css'

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
            <Nav.Link href="/warmups">
              Warm-ups
            </Nav.Link>
            <Nav.Link href="/endurance">
              Endurance
            </Nav.Link>
            <Nav.Link href="/intensity">
              Intensity
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header