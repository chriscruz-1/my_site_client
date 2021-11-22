import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import useWindowDimensions from './use_window_dimensions';

const Home = ({bigPProp, smallPProp}) => {

  let bigPStyle = bigPProp === undefined ? { 
    fontSize: "2em",display: "inline", position: "absolute", top: "10em", left: "10em", zIndex: "2"
  } 
  : 
  bigPProp;

  let smallPStype = smallPProp === undefined ? { 
    fontSize: "1.5em", textAlign: "center", position: "relative"
  } 
  : 
  smallPProp;

  return (
    <>
      {(useWindowDimensions().width > 1100) && 
        <p style={bigPStyle}>Web developer. Explorer. Learner.</p>
      }
      <Image
        src="explorer.png"
        width="100%"
      />
      {(useWindowDimensions().width <= 1100) && 
        <p style={smallPStype}>Web developer. Explorer. Learner.</p>
      }
    </>
  );
}

export default Home;
