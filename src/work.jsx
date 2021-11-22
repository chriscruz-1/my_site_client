import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';

const Work = () => {
  return(
    <Container>
      <Row>
        <Alert className="text-center" key={"work_title"} variant='light'>
          Previous Work:
        </Alert>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="text-center">
            <Card.Header>UC Davis</Card.Header>
            <Card.Body>
              <Card.Title>Web developer</Card.Title>
              <Card.Img
                src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Flogotypes101.com%2Flogos%2F299%2F7307D9F856D19ABF41CD520C524F90FB%2FUC_Davis_Aggies26.png&f=1&nofb=1"
                alt="uc davis logo"
              />
              <Card.Text>
                Full stack web developer. Used React and Ruby on Rails to develop tools to help Professors understand their students better and to improve their lecture quality.
              </Card.Text>
              {/* <Button variant="primary">More details</Button> */}
            </Card.Body>
            <Card.Footer className="text-muted">April - January 2020 | August 2021 - Present</Card.Footer>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="text-center">
            <Card.Header>Intel</Card.Header>
            <Card.Body>
              <Card.Title>Software Intern</Card.Title>
              <Card.Img 
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.velocitymicro.com%2Fimg%2Fblog%2Famd-vs-intel%2Fintellogo.png&f=1&nofb=1"
                alt="intel logo"
              />
              <Card.Text>
                Full stack web developer. Used Django, Python, and SQL to create data visualization tools for Intel engineers.
              </Card.Text>
              {/* <Button variant="primary">More details</Button> */}
            </Card.Body>
            <Card.Footer className="text-muted">January - August 2021</Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Work;