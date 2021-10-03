import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';

const Home = () => {

  //Reference for getting window size https://stackoverflow.com/questions/44480053/how-to-detect-if-screen-size-has-changed-to-mobile-in-react
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  };

  const useWindowDimensions = () => {
    let [ windowDimensions, setWindowDimensions ] = useState(getWindowDimensions());

    useEffect(() => {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions());
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
  }

  return (
    <>
      {(useWindowDimensions().width > 1100) ? 
        <p style={{ fontSize: "2em",display: "inline", position: "relative", top: "10em", left: "10em", zIndex: "2"}}>Web developer. Explorer. Learner.</p>
        :
        <p style={{ display: "inline", position: "relative", top: "10em", left: "10em", zIndex: "2"}}>Web developer. Explorer. Learner.</p>
      }
      <Image
        src="explorer.png"
        width="100%"
      />
    </>
  );
}

export default Home;
