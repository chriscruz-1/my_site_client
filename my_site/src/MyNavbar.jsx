import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <Container fluid>
      <Row>
      <Navbar bg="dark" variant="dark" style={{textAlign: "center"}}>
        <Col>
          <Container>
            <Nav className="justify-content-center">
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
        <Col>Contacts</Col>
        </Navbar>
      </Row>
    </Container>
  );
}

export default MyNavbar;