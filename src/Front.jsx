import React from 'react';
import Events from './components/events/Events';
import 'swiper/css';
import Team from './components/team/Team';
import Countdown from './components/countdown/Countdown';
import Gallery from './components/gallery/Gallery';

function Front() {
  return (
    <>
    <Gallery/>
    <Events />
    <Team/>
    <Countdown/>
    </>
      
      
  );
}

export default Front;