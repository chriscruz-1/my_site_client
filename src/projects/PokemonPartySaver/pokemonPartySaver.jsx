import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PokemonPartySaver = ({
  appTitleStyle = {textAlign: "center", marginTop: "10px"},
  inputStyle = {margin: "10px"},
  cardStyles = {
    img: {
      width: "40%",
      height: "auto",
      margin: "0 auto"
    },
    title: {textAlign: "center"},
    body: {textAlign: "center"}
  }
}) => {
  let [lookup, setLookup] = useState(null);
  let [searchBy, setSearchBy] = useState(null);
  let [pokemonNameOrId, setPokemonNameOrId] = useState(null);
  let [data, setData] = useState(null);
  let [showAppDesc, setShowAppDesc] = useState(true);
  let [showWarning, setShowWarning] = useState(true);

  const lookupHandler = (event) => {
    setLookup(event.target.value);
  };

  const searchByHandler = (event) => {
    setSearchBy(event.target.value);
  };

  const pokemonNameOrIdHandler = (event) => {
    setPokemonNameOrId(event.target.value)
  }

  const fetchData = async (url = '', lookup = '', name = '' ) => {
    const response = await fetch(`${url}/${lookup}/${name.toLowerCase()}`);
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
      <h1 style={appTitleStyle}>Welcome to the Pokemon Party Saver!</h1>
      {showAppDesc &&
        <Alert variant="secondary" style={appTitleStyle} onClose={() => setShowAppDesc(false)} dismissible>
        <ul style={{listStyleType: "none"}}>
          <li>This application lets you lookup different Pokemon, their abilities, and moves.</li>
          <li>It also lets you save your favorite Pokemon teams.</li>
          <li>This application is powered by <a href="https://pokeapi.co">PokeApi</a></li>
        </ul>
      </Alert>
      }
      {showWarning && 
        <Alert variant="danger" style={appTitleStyle} onClose={() => setShowWarning(false)} dismissible>
          <ul style={{listStyleType: "none"}}>
            <li>Per the PokeApi website: "Sword and Shield data might be inaccurate and lacking in various aspects due to 
              the fact that it is not taken directly from Nintendo's Pokemon ROMs. If you spot any mistake, 
              please report it <a href="https://github.com/PokeAPI/pokedex/issues">here</a>"
            </li>
          </ul>
        </Alert>
      }
      <h2 style={appTitleStyle}>Pokedex Lookup</h2>
      <Container>
        <Row>
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
          <Col>
            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label>Lookup: </Form.Label>
                <Form.Select size="md" style={inputStyle} onChange={lookupHandler}>
                  <option value="null">Select...</option>
                  <option value="pokemon">Pokemon</option>
                </Form.Select>
                {lookup === "pokemon" && 
                  <>
                    <Form.Label>Search by: </Form.Label>
                    <Form.Select size="md" style={inputStyle} onChange={searchByHandler}>
                      <option value="null">Select...</option>
                      <option value="name">Name</option>
                      <option value="number">Number</option>
                    </Form.Select>
                  </>
                }
                {searchBy === "name" && 
                  <>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control style={inputStyle} placeholder="Enter Pokemon's Name" onChange={pokemonNameOrIdHandler}/>
                    <Button variant="primary" type="submit" size='md'>
                      Submit
                    </Button>
                  </>
                }
                {searchBy === "number" && 
                  <>
                    <Form.Label>Name: </Form.Label>
                    <Form.Control style={inputStyle} placeholder="Enter Pokemon's Number" onChange={pokemonNameOrIdHandler}/>
                    <Button variant="primary" type="submit" size='md'>
                      Submit
                    </Button>
                  </>
                }
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PokemonPartySaver;