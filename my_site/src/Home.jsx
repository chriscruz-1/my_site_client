import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNarbar from './myNavbar'
import Image from 'react-bootstrap/Image';

const Home = () => {
  return (
    <>
      <MyNarbar />
      <Image fluid
        src="explorer.png"
      />
    </>
  );
}

export default Home;
