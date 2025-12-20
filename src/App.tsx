import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Accordian from './components/accordian/Accordian';
import HexColorGenerator from './components/HexColorGenerator/HexColorGenerator';

function App() {
  return (
    <>
      {/* <Accordian /> */}
      <HexColorGenerator />
    </>
  );
}

export default App;
