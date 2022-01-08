import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'

const PokemonPartySaver = ({
  appTitleStyle = {textAlign: "center"},
  inputStyle = {margin: "10px"}
}) => {
  let [lookup, setLookup] = useState(null);
  let [searchBy, setSearchBy] = useState(null);
  let [pokemonName, setPokemonName] = useState(null);

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
    const response = await fetch(`${url}/${lookup}/${name}`);
    return response.json();
  };

  const returnResults = async () => {
    let results = await fetchData('https://pokeapi.co/api/v2', `${lookup}`, pokemonName);
    return results;
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    returnResults()
      .then(data => {
        console.log(data);
      })
  };

  return(
    <>
      <h1 style={appTitleStyle}>Welcome to the Pokemon Party Saver!</h1>
      <h2 style={appTitleStyle}>Pokedex Lookup</h2>
      <Container>
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
      </Container>
    </>
  );
};

export default PokemonPartySaver;