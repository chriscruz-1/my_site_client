import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';

const Orm = () => {
  let [ exercise, setExercise ] = useState(null);

  // Need to use a handler for onChange. https://stackoverflow.com/questions/63484886/get-value-of-select-onchange-in-functional-component
  const exerciseSelectHandler = (event) => {
    setExercise(event.target.value);
  };

  return(
    <>
      <Form.FloatingLabel id="testSelect" controlId="floatingSelect" label="Exercise">
        <Form.Select id="exerciseSelect" onChange={exerciseSelectHandler}>
          <option>Select an exercise</option>
          <option value="bench">Bench</option>
          <option value="squat">Squat</option>
          <option value="deadlift">Deadlift</option>
          <option value="overheadPress">Overhead Press</option>
        </Form.Select>
      </Form.FloatingLabel>
    </>
  );  
};

export default Orm;