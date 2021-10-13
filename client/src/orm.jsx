import React from 'react';
import Form from 'react-bootstrap/Form';

const Orm = () => {
  return(
    <>
      <Form.FloatingLabel controlId="floatingSelect" label="Exercise">
        <Form.Select id="exerciseSelect">
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