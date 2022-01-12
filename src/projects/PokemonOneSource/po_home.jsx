import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ButtonGroup } from 'react-bootstrap';

import Lookup from './po_lookup';
import PartySaver from './po_party_saver';

const PoHome = ({
  appTitleStyle = {textAlign: "center", marginTop: "10px"},
}) => {
  let [showAppDesc, setShowAppDesc] = useState(true);
  let [showWarning, setShowWarning] = useState(true);
  let [appMode, setAppMode] = useState('lookup');

  let appModeOptions = [
    {name: 'Lookup', value: 'lookup'},
    {name: 'Party Saver', value: 'party'}
  ];

  return(
    <>
      <h1 style={appTitleStyle}>Welcome to the Pokemon OneSource!</h1>
      {showAppDesc &&
        <Alert variant="secondary" style={appTitleStyle} onClose={() => setShowAppDesc(false)} dismissible>
          <ul style={{listStyleType: "none"}}>
            <li>This application is your one stop source for all your competitive Pokemon needs!</li>
            <li>Powered by <a href="https://pokeapi.co">PokeApi</a></li>
          </ul>
        </Alert>
      }
      {showWarning && 
        <Alert variant="danger" style={appTitleStyle} onClose={() => setShowWarning(false)} dismissible>
          <ul style={{listStyleType: "none"}}>
            <li>Per the PokeApi website: "Sword and Shield data might be inaccurate and lacking in various aspects due to 
              the fact that it is not taken directly from Nintendo's Pokemon ROMs. If you spot any mistakes with the results returned, 
              please report it <a href="https://github.com/PokeAPI/pokedex/issues">here</a>"
            </li>
          </ul>
        </Alert>
      }
      {/* To toggle between modes */}
      <Row>
        <Col style={{textAlign: "center"}}>
          <ButtonGroup>
            {appModeOptions.map((am, i) => (
              <ToggleButton
                key={i}
                id={`appMode-${i}`}
                type='radio'
                variant={appMode === am.value ? 'outline-success': 'outline-secondary'}
                name='appModes'
                value={am.value}
                checked={appMode === am.value}
                onChange={(e) => setAppMode(e.currentTarget.value)}
              >
                {am.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      {appMode === 'lookup' ? 
        <Lookup />
        :
        <PartySaver />
      }
    </>
  );
};

export default PoHome;