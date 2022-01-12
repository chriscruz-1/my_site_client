import React, { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const PartySaver = ({
  appTitleStyle = {textAlign: "center", marginTop: "10px"},
}) => {
  let [showAppDesc, setShowAppDesc] = useState(true);
  return(
    <>
      <h2 style={appTitleStyle}>Party Saver (Still in development!)</h2>
      {showAppDesc &&
        <Alert variant="secondary" style={appTitleStyle} onClose={() => setShowAppDesc(false)} dismissible>
        <ul style={{listStyleType: "none"}}>
          <li>Create and save your favorite Pokemon teams.</li>
        </ul>
      </Alert>
      }
    </>
  );
};

export default PartySaver;