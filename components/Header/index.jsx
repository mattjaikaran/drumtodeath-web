import { Navbar, Nav, NavDropdown, Image } from 'react-bootstrap/'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu.svg'


const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Navbar.Brand href="/">
          <Image src={logo} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle className="border-0" aria-controls="responsive-navbar-nav">
        <Image src={menu} />
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        {/* <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav> */}
        <Nav className="ml-auto">
          <Nav.Link href="/warm-ups">
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
    </Navbar>
  )
}

export default Header