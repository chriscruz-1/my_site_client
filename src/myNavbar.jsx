import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Work from './work';
import About from './about';
import Home from './home';
import Orm from './orm';
import WeatherDashboard from './weather_dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const MyNavbar = () => {
  return (
    <Router>
      <Navbar bg="light" expand="md" variant="light" style={{textAlign: "center"}}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
            <Col>
              <Container>
                <Nav className="justify-content-center">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/work">Work</Nav.Link>
                  <NavDropdown title="Projects" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/orm">1 Rep Max Calculator</NavDropdown.Item>
                    <NavDropdown.Item href="/weather_dashboard">Weather Dashboard (In progress)</NavDropdown.Item>
                    <NavDropdown.Item href="/fitnesstracker">Fitness Dashboard (In progress)</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Container>
            </Col>
            <Col md={2}>
              <Navbar.Brand href="/">Chris Cruz</Navbar.Brand>
            </Col>
            <Col>
              <Nav className="justify-content-center">
                <Nav.Item>
                  <Nav.Link href="mailto:me@lifeofchriscruz.com">
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
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/work" component={Work}/>
          <Route path="/orm" component={Orm}/>
          <Route path="/weather_dashboard" component={WeatherDashboard}/>
          <Redirect to="/"/>
        </Switch>
    </Router>
  );
}

export default MyNavbar;