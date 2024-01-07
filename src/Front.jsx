
import Events from './components/events/Events';
import 'swiper/css';
import Team from './components/team/Team';
import Countdown from './components/countdown/Countdown';
import Gallery from './components/gallery/Gallery';
import Home from './components/Home/Home';
import About from './components/About/About'
import Fests from './components/Fests/Fests'

function Front() {
  return (
    <>
    <Home/>
    <About/>
    <Fests/>
    <Gallery/>
    <Events/>
    <Countdown/>
    </>
      
      
  );
}

export default Front;