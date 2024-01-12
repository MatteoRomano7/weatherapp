import { Navbar, Nav } from "react-bootstrap"
import "./MyNav.css"

const MyNav = () => (
  <Navbar bg="dark" variant="dark">
    <div className="d-flex">
      <Navbar.Brand href="#home">The Meridian Centre</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className="linkNav" href="#home">
          Service
        </Nav.Link>
        <Nav.Link className="linkNav" href="#about">
          About
        </Nav.Link>
        <Nav.Link className="linkNav" href="#browse">
          Info
        </Nav.Link>
      </Nav>
    </div>
  </Navbar>
)

export default MyNav
