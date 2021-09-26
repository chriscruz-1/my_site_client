import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

const MyNavbar = () => {

  return (
    <Container fluid>
      <Row>
      <Navbar bg="light" variant="light" style={{textAlign: "center"}}>
        <Col>
          <Container>
            <Nav className="justify-content-center">
              <Nav.Link href="home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Projects" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#1rmc">1 Rep Max Calculator</NavDropdown.Item>
                <NavDropdown.Item href="#fitness_tracker">Fitness Tracker</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Container>
        </Col>
        <Col md={2}>
          <Navbar.Brand href="#home">Chris Cruz</Navbar.Brand>
        </Col>
        <Col>
          <Nav className="justify-content-center">
            <Nav.Item>
              <Nav.Link href="mailto:chriscruz.1@icloud.com">
                <Image src="email.png" rounded/>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="http://www.linkedin.com/in/chriscruz-1">
                <Image src="linkedin.png" rounded/>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="http://www.github.com/chriscruz-1">
                <Image src="github.png" rounded/>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        </Navbar>
      </Row>

      {/* <Row>
        Put in footer:
        <div>Icons made by <a href="https://www.flaticon.com/authors/iconixar" title="iconixar">iconixar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      </Row> */}
    </Container>
  );
}

export default MyNavbar;