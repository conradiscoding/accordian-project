import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Accordian from './components/accordian/Accordian';
import HexColorGenerator from './components/HexColorGenerator/HexColorGenerator';
import StarRater from './components/starRating/StarRater';
import ImageSlider from './components/imageSlider/ImageSlider';

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <HexColorGenerator /> */}
      {/* <StarRater /> */}
      <ImageSlider />
    </>
  );
}

export default App;
