import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNarbar from './MyNavbar'
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <>
      <MyNarbar />
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Image src="prof_shoot.png" roundedCircle style={{width: "70%", height: "auto", display: "block", margin: "auto"}}/>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
