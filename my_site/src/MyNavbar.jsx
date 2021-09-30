import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
                <i className="far fa-envelope fa-lg"></i>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="http://www.linkedin.com/in/chriscruz-1">
                <i className="fab fa-linkedin fa-lg"></i>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="http://www.github.com/chriscruz-1">
                <i className="fab fa-github fa-lg"></i>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        </Navbar>
      </Row>
    </Container>
  );
}

export default MyNavbar;