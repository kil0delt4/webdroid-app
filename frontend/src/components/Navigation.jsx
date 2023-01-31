import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">WebDroid</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/aboutus">About Us</Nav.Link>
            <NavDropdown title="Software Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/python">Python</NavDropdown.Item>
              <NavDropdown.Item href="/ds">
                Data Science
              </NavDropdown.Item>
              <NavDropdown.Item href="/ml">Machine Learning</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/softwares">
                And many more
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Hardware Projects" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/iot">IOT</NavDropdown.Item>
              <NavDropdown.Item href="/robotics">
                Robotics
              </NavDropdown.Item>
              <NavDropdown.Item href="/drone">Drone</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/hardwares">
                And many more
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navigation;