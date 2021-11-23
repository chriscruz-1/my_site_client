import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const WeatherDashboard = () => {

  const apiKey = process.env.WEATHER_API_KEY;

  let [data, setData] = useState(null);
  let [city, setCity] = useState("San Francisco");
  let [url, setUrl] = useState(null);

  let cityHandler = () => {
    setCity(document.getElementById("cityInput").value);
  };

  useEffect(() => {
    setUrl(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`);

    fetch(url)
    .then((res) => {
      if(!res.ok){
        throw new Error(`Error status: ${res.status}`)
      } 
      return res.json();
    })
    .then((data) => {
      setData(data);
    })
    .catch(err => console.log(err));
  }, [city, url])

  return(
    data !== null ?
    <Container>
      <Row style={{marginTop: "10px", marginBottom: "20px"}}>
        <Col>
          <Form.Group>
            <Form.FloatingLabel controlId="cityInput" label="City">
              <Form.Control type="city" placeholder="San Francisco"/>
            </Form.FloatingLabel>
            <Button variant="secondary" onClick={cityHandler}>Submit</Button>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col xs={2}>
          <Card>
            <Card.Img src={data.forecast.forecastday[0].day.condition.icon}/>
            <Card.Body>
              <Card.Title>Tomorrow's weather for {city} is:</Card.Title>
              <Card.Text>
                <>
                  <p>{data.forecast.forecastday[0].day.condition.text}</p>
                  <p>High of {data.forecast.forecastday[0].day.maxtemp_f} F</p>
                  <p>Low of {data.forecast.forecastday[0].day.mintemp_f} F</p>
                  <p>Chance of rain is {data.forecast.forecastday[0].day.daily_chance_of_rain}%</p>
                  <p>Chance of snow is {data.forecast.forecastday[0].day.daily_chance_of_snow}%</p>
                </>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
    :
    null
  );
};

export default WeatherDashboard;