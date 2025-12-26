import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Accordian from './components/accordian/Accordian';
import HexColorGenerator from './components/HexColorGenerator/HexColorGenerator';
import StarRater from './components/starRating/StarRater';
import ImageSlider from './components/imageSlider/ImageSlider';
import LoadMoreData from './components/loadMoreData/LoadMoreData';
import LightDarkMode from './components/lightDarkMode/LightDarkMode';
import ScrollProgressBar from './components/ScrollProgressBar/ScrollProgressBar';

function App() {
  return (
    <>
      {/* <Accordian /> */}
      {/* <HexColorGenerator /> */}
      {/* <StarRater /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10} /> */}
      {/* <LoadMoreData /> */}
      {/* <LightDarkMode /> */}

      <ScrollProgressBar />
      <div style={{ height: '200vh', padding: '20px' }}>
        <h1>Scroll Down to See Progress</h1>
        <p>Keep scrolling to watch the progress bar fill up.</p>
      </div>
    </>
  );
}

export default App;
