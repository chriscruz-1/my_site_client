import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'

const Orm = ({
  appTitleStyle = {textAlign: "center"},
  appContainerStyle = {marginTop: "20px"},
  maxWeight = 180,
  maxReps = 20
}) => {
  //Hooks
  let [ username, setUsername ] = useState(null);
  let [ exercise, setExercise ] = useState(null);

  // Need to use a handler for onChange. https://stackoverflow.com/questions/63484886/get-value-of-select-onchange-in-functional-component
  //Handlers:
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  
  const exerciseSelectHandler = (event) => {
    setExercise(event.target.value);
  };

  const getWeightRange = () => {
    let weights = [];
    for(let i = 0; i < maxWeight; i+= 20){
      weights.push(i);
    }
    return weights;
  };

  const getRepRange = () => {
    let reps = [];
    for(let i = 0; i < maxReps; i++){
      reps.push(i);
    }
    return reps;
  };

  return(
    <>
      <h1 style={appTitleStyle}>One Rep Max Calculator</h1>
      <Container fluid style={appContainerStyle}>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter your name" onChange={usernameHandler}/>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
                <Form.Group>
                  <Form.FloatingLabel controlId="floatingSelect" label="Exercise">
                    <Form.Select onChange={exerciseSelectHandler}>
                      <option>Select an exercise</option>
                      <option value="bench">Bench</option>
                      <option value="squat">Squat</option>
                      <option value="deadlift">Deadlift</option>
                      <option value="overheadPress">Overhead Press</option>
                    </Form.Select>
                  </Form.FloatingLabel>
                </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.FloatingLabel controlId="floatingSelect" label="Weight">
                  <Form.Select id="weightsSelect">
                    <option>Select the weight for your set</option>
                    {getWeightRange().map((d,i) => {
                      return(<option>{d}</option>);
                    })}
                  </Form.Select>
                </Form.FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );  
};

export default Orm;