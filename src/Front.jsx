
import Events from './components/events/Events';
import 'swiper/css';
import Team from './components/team/Team';
// import Countdown from './components/countdown/Countdown';
import Gallery from './components/gallery/Gallery';
import Home from './components/Home/Home';
import About from './components/About/About'
import Fests from './components/Fests/Fests'
import Loading from './components/Loading';
import { useState,useEffect } from 'react';
function Front() {

  const [loading, setLoading] = useState(true);

  

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return (
    <>
    {loading?(<Loading/>):(
    <>
    <Home/>
    <About/>
    <Fests/>
    <Gallery/>
    <Events/>
    <Team />
    {/* <Countdown/> */}
    </>
    )}
    
    </>
      
      
  );
}

export default Front;