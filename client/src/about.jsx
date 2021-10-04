import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = ({pStyleProp}) => {
  let pStyle = pStyleProp === undefined ? {className: "justify-content-center", marginTop: "3em"} : pStyleProp;
  return(
    <>
      <Container fluid>
        <Row>
          <Col>
            <Image 
              src="prof_shoot.png"
              width="100%"
              roundedCircle
            />
          </Col>
          <Col>
            <p style={pStyle}>
              Full stack web developer. Recently graduated from University of California, Davis with a Bachelors of Science in Computer Science.
            </p>
            <p style={pStyle}>
              About 1.5 years of experience
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;