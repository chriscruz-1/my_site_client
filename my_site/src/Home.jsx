import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNarbar from './myNavbar'
import Figure from 'react-bootstrap/Figure'

const Home = () => {
  return (
    <>
      <MyNarbar />
      <Figure>
        <Figure.Image
          src="explorer.png"
          alt="explorer photo"
          width="100%"
          style={{display: "block", marginBottom: 0}}
        />
        <Figure.Caption>

        </Figure.Caption>
      </Figure>
    </>
  );
}

export default Home;
