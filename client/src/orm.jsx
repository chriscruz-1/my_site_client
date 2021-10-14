import React, { useState } from 'react';
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
  let [ weight, setWeight ] = useState(null);
  let [ numReps, setNumReps ] = useState(null);

  // Need to use a handler for onChange. https://stackoverflow.com/questions/63484886/get-value-of-select-onchange-in-functional-component
  //Handlers:
  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };
  
  const exerciseSelectHandler = (event) => {
    setExercise(event.target.value);
  };

  const weightSelectHandler = (event) => {
    setWeight(event.target.value);
  };

  const repSelectHandler = (event) => {
    setNumReps(event.target.value);
  };

  //For dynamically providing select options
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

  const getPR = () => {
    let estORM = null;
    if(weight !== null && numReps !== null){
      estORM = (weight * (36 / (37 - numReps))).toFixed(2);
    }
    return estORM;
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
          <Row style={{marginTop: "20px"}}>
            <Col>
                <Form.Group>
                  <Form.FloatingLabel controlId="floatingSelect" label="exercise">
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
                <Form.FloatingLabel controlId="floatingSelect" label="weight">
                  <Form.Select id="weightsSelect" onChange={weightSelectHandler}>
                    <option>Select the weight for your set</option>
                    {getWeightRange().map((d,i) => {
                      return(<option>{d}</option>);
                    })}
                  </Form.Select>
                </Form.FloatingLabel>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.FloatingLabel controlId="floatingSelect" label="reps">
                  <Form.Select id="repsSelect" onChange={repSelectHandler}>
                    <option>Select the number of reps for your set</option>
                    {getRepRange().map((d,i) => {
                      return(<option>{d+1}</option>)
                    })}
                  </Form.Select>
                </Form.FloatingLabel>
              </Form.Group>
            </Col>
          </Row>
        </Form>
        <Row>
          {username && exercise && weight && numReps &&
            <>
              <h2>Your estimated one rep max for {exercise} is {getPR()} lbs! Great job {username}!</h2>
              <h4>Your one rep max was calculated with <a href="https://www.athlegan.com/calculate-1rm">Brzycki's formula</a></h4>
            </>
          }
        </Row>
      </Container>
    </>
  );  
};

export default Orm;