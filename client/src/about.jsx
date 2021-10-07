import React from 'react';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import useWindowDimensions from './use_window_dimensions';
import SkillsExp from './about_skills_exp';

const About = ({pStyleProp}) => {
  let pStyle = pStyleProp === undefined ? {marginTop: "2em"} : pStyleProp;
  
  //For setting my experience time.
  let now = new Date();
  let start = new Date(2020, 3, 23, 8, 0, 0, 0);
  let difference = now - start; //result is in milliseconds
  let months = difference / 1000 / 60 / 60 / 24 / 30;
  let years = months / 12;

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
              <Col>
                <p style={pStyle}>
                  Full stack web developer. Graduated in September 2021 from University of California, Davis with a Bachelors of Science in Computer Science.
                </p>
                <p style={pStyle}>
                  About {years.toFixed(2)} years of experience.
                </p>
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
                Full stack web developer. Graduated in September 2021 from University of California, Davis with a Bachelors of Science in Computer Science.
              </span>
              <p/>
              <span>
                About {years.toFixed(2)} years of experience.
              </span>
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