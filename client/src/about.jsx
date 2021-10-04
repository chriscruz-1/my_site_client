import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useWindowDimensions from './use_window_dimensions';
import SkillsExp from './about_skills_exp';

const About = ({pStyleProp}) => {
  let pStyle = pStyleProp === undefined ? {className: "justify-content-center", marginTop: "3em"} : pStyleProp;
  return(
    <>
      <Container fluid>
        <Row>
          {(useWindowDimensions().width > 1000) ? 
            <>
              <Col>
                <Image 
                  src="prof_shoot.png"
                  width="100%"
                  roundedCircle
                />
              </Col>
              <Col fluid>
                <p style={pStyle}>
                  Full stack web developer. Recently graduated from University of California, Davis with a Bachelors of Science in Computer Science.
                </p>
                <p style={pStyle}>
                  About 1.5 years of experience
                </p>
                <hr/>
                <SkillsExp />
              </Col>
            </>
            :
            <Col>
            <Image 
                src="prof_shoot_horiz.png"
                width="100%"
                
              />
            </Col>
          }   
        </Row>
        <Row>
          
          {(useWindowDimensions().width <= 1000) ?
            <>
              <span style={pStyle}>
                Full stack web developer. Recently graduated from University of California, Davis with a Bachelors of Science in Computer Science.
              </span>
              <p/>
              <span>
                About 1.5 years of experience
              </span>
              <hr/>
              <SkillsExp />
            </>
            :
            null
          }
        </Row>
      </Container>
    </>
  );
}

export default About;