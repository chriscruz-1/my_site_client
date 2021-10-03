import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

const About = () => {
  return(
    <Container fluid>
      <Image 
        src="prof_shoot.png"
        width="50%"
        roundedCircle
      />
    </Container>
  );
}

export default About;