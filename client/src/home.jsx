import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import useWindowDimensions from './use_window_dimensions';

const Home = ({bigPProp, smallPProp}) => {

  let bigPStyle = bigPProp === undefined ? { fontSize: "2em",display: "inline", position: "relative", top: "10em", left: "10em", zIndex: "2"} : bigPProp;
  let smallPStype = smallPProp === undefined ? { fontSize: "0.5em", display: "inline", position: "relative", top: "10em", left: "10em", zIndex: "2"} : smallPProp;
  return (
    <>
      {(useWindowDimensions().width > 1100) ? 
        <p style={bigPStyle}>Web developer. Explorer. Learner.</p>
        :
        <p style={smallPStype}>Web developer. Explorer. Learner.</p>
      }
      <Image
        src="explorer.png"
        width="100%"
      />
    </>
  );
}

export default Home;
