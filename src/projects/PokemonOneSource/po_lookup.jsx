import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// For the toggle buttons
import ToggleButton from 'react-bootstrap/ToggleButton';
import { ButtonGroup } from 'react-bootstrap';

// For output sanitation
import DOMPurify from 'dompurify';

const Lookup = ({
  appTitleStyle = {textAlign: "center", marginTop: "10px"},
  inputStyle = {margin: "10px"},
  cardStyles = {
    img: {
      width: "50%",
      height: "auto",
      margin: "0 auto"
    },
    title: {textAlign: "center"},
    body: {textAlign: "center"}
  }
}) => {
  let [showAppDesc, setShowAppDesc] = useState(true);
  let [lookup, setLookup] = useState(null);
  let [searchBy, setSearchBy] = useState(null);
  let [pokemonNameOrId, setPokemonNameOrId] = useState(null);
  let [data, setData] = useState(null);

  let lookupOptions = [
    {name: 'Pokemon', value: 'pokemon'}
  ];

  let searchByOptions = [
    {name: 'Name', value: 'name'},
    {name: 'Number', value: 'number'}
  ];

  const pokemonNameOrIdHandler = (event) => {
    setPokemonNameOrId(DOMPurify.sanitize(event.target.value));
  }

  const fetchData = async (url = '', lookup = '', nameOrId = '' ) => {
    const response = await fetch(`${url}/${lookup}/${nameOrId.toLowerCase()}`);
    return response.json();
  };

  const returnResults = async () => {
    let results = await fetchData('https://pokeapi.co/api/v2', `${lookup}`, pokemonNameOrId);
    return results;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const results = await returnResults();
      setData(results);
    } catch (error) {
      console.error(error);
    }
  };

  return(
    <>
      {showAppDesc &&
        <Alert variant="secondary" style={appTitleStyle} onClose={() => setShowAppDesc(false)} dismissible>
          <ul style={{listStyleType: "none"}}>
            <li>Look up different Pokemon, abilities, and moves.</li>
          </ul>
        </Alert>
      }
      <Container>
        <Row>
          {/* Rendering the results */}
          {data !== null && 
            <Col>
              <>
                <Card>
                  <Card.Img style={cardStyles.img} src={data.sprites.front_default}></Card.Img>
                  <Card.Body>
                    <Card.Title style={cardStyles.title}>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</Card.Title>
                    <Card.Text style={cardStyles.body}>
                      <Container>
                        <Row>
                          <Col><strong>ID: </strong>{data.id}</Col>
                          <Col>
                            <Row>
                              <strong>Type(s): </strong>
                              {data.types.map(t => 
                                <Col>{t.type.name}</Col>)}
                            </Row>
                          </Col>
                          <Col>
                            <Row>
                              <strong>Abilities: </strong>
                              {data.abilities.map(a => 
                                <Col>{a.ability.name}</Col>)}
                            </Row>
                          </Col>
                        </Row>
                        <br></br>
                        <Row>
                          <strong>Base Stats: </strong>
                        </Row>
                        <Row>
                          {data.stats.map(s => 
                            <Col><strong>{s.stat.name}: </strong>{s.base_stat}</Col>)}
                        </Row>
                      </Container>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </>
            </Col>
          }

          {/* Form for user's query */}
          <Col>
            <Container>
              <Form onSubmit={submitHandler}>
                <Form.Group>
                  <Row>
                    <Col style={lookup === null ? appTitleStyle : null}>
                      <label for="lookupButtonGroup">Lookup:</label>
                      {" "}
                      <Row>
                        <ButtonGroup id="lookupButtonGroup">
                          {lookupOptions.map((l, i) => (
                            <ToggleButton
                              key={i}
                              id={`lookupOption-${i}`}
                              type='radio'
                              variant={lookup === l.value ? 'outline-success': 'outline-secondary'}
                              name='lookupOptions'
                              value={l.value}
                              checked={lookup === l.value}
                              onChange={(e) => setLookup(e.currentTarget.value)}
                            >
                              {l.name}
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </Row>
                    </Col>
                    {lookup === "pokemon" && 
                      <Col>
                        <Row>
                        <>
                          <label for="searchByButtonGroup">Search By:</label>
                          {" "}
                          <ButtonGroup id="searchByButtonGroup">
                            {searchByOptions.map((s, i) => (
                              <ToggleButton
                                key={i}
                                id={`searchByOption-${i}`}
                                type='radio'
                                variant={searchBy === s.value ? 'outline-success': 'outline-secondary'}
                                name='searchByOptions'
                                value={s.value}
                                checked={searchBy === s.value}
                                onChange={(e) => setSearchBy(e.currentTarget.value)}
                              >
                                {s.name}
                              </ToggleButton>
                            ))}
                          </ButtonGroup>
                        </>   
                        </Row>
      
                      </Col>
                    }
                  </Row>
                  {searchBy === "name" && 
                    <>
                      <br></br>
                      <Form.Label>Name: </Form.Label>
                      <Form.Control style={inputStyle} placeholder="Enter Pokemon's Name" onChange={pokemonNameOrIdHandler}/>
                      <Button variant="primary" type="submit" size='md'>
                        Submit
                      </Button>
                    </>
                  }
                  {searchBy === "number" && 
                    <>
                      <br></br>
                      <Form.Label>Number: </Form.Label>
                      <Form.Control style={inputStyle} placeholder="Enter Pokemon's Number" onChange={pokemonNameOrIdHandler}/>
                      <Button variant="primary" type="submit" size='md'>
                        Submit
                      </Button>
                    </>
                  }
                </Form.Group>
              </Form>
            </Container>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Lookup;