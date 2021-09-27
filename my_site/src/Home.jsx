import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNarbar from './MyNavbar'
import Figure from 'react-bootstrap/Figure'
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
          {/* For getting image to center inside a Bootstrap column: 
          https://stackoverflow.com/questions/44055130/how-to-center-image-within-bootstrap-column */}
            <Figure>
              <Figure.Image
                width={"70%"}
                height={"auto"}
                alt="MyProfessionalPhoto"
                src="prof_shoot.png"
                style={{display: "block", margin: "auto", borderRadius: "70%"}}
              />
              <Figure.Caption style={{textAlign: "center"}}>
                Hello, I'm Chris, a full stack web developer. Welcome to my site!
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
