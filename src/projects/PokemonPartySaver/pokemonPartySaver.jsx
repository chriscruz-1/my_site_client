import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const PokemonPartySaver = ({
  appTitleStyle = {textAlign: "center"},
  inputStyle = {margin: "10px"},
  cardStyles = {
    img: {
      width: "60%",
      height: "auto",
      margin: "0 auto"
    },
    title: {textAlign: "center"},
    body: {textAlign: "center"}
  }
}) => {
  let [lookup, setLookup] = useState(null);
  let [searchBy, setSearchBy] = useState(null);
  let [pokemonName, setPokemonName] = useState(null);
  let [data, setData] = useState(null);

  useEffect(() => {
    console.log(data)
  }, [data]);

  const lookupHandler = (event) => {
    setLookup(event.target.value);
  };

  const searchByHandler = (event) => {
    setSearchBy(event.target.value);
  };

  const pokemonNameHandler = (event) => {
    setPokemonName(event.target.value)
  }

  const fetchData = async (url = '', lookup = '', name = '' ) => {
    const response = await fetch(`${url}/${lookup}/${name.toLowerCase()}`);
    return response.json();
  };

  const returnResults = async () => {
    let results = await fetchData('https://pokeapi.co/api/v2', `${lookup}`, pokemonName);
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
                      <>
                        <p>ID: {data.id}</p>
                        <p>Type(s): {data.types.map(t => 
                          <span>{t.type.name} </span>)}
                        </p>
                      </>
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
                    <Form.Control id='pokemonName' style={inputStyle} placeholder="Enter Pokemon's Name" onChange={pokemonNameHandler}/>
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