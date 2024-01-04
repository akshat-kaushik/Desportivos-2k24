import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';


const Home = () => {

  useEffect(() => {
    var bg = document.getElementById("bg")
    window.addEventListener("scroll", function () {
      bg.style.opacity = 1 - +window.scrollY / 550 + ''
      bg.style.top = +window.scrollY + 'px'
      bg.style.backgroundPositionY = - +window.scrollY / 2 + 'px'
    })
  }, [])


  return (
    <div className='bg-black relative w-full min-h-screen '>

      <div id='bg' className="p-0 m-0 bg-homemob sm:bg-homepc min-h-screen bg-no-repeat bg-cover absolute top-0 left-0 w-full  bg-fixed " >
        <Navbar />

        <div className="fixed bottom-28 md:bottom-2 flex justify-center align-middle mb-2 w-full z-10">
          <img className="object-center h-26 sm:h-32 w-[75%]" src="src/components/images/desportivous.png" alt="despo" />
        </div>

        <img className='hidden md:block fixed -translate-x-1/2  left-1/2 bottom-10 md:-bottom-48 ' src='src/components/images/heros.png' />
        <img className='hidden md:block fixed -translate-x-1/2 w-[52rem] left-[52.8rem]  md:bottom-[2rem] ' src='src/components/images/power.gif' />
        <img className=' md:hidden fixed -translate-x-1/2  left-1/2 bottom-48 scale-[2] ' src='src/components/images/heros.png' />


        <img className='fixed -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-44 md:bottom-24' src='src/components/images/boards.png' />

        <a href=''>
          <img className='md:hidden fixed -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-6' src='src/components/images/Register01.png' />
        </a>


        <img className="hidden md:block absolute -bottom-20 z-20" src="src/components/images/Rocks.png" alt="rock" />




      </div>
      <img className="hidden md:block absolute -bottom-80  left-0 z-30" src="src/components/images/rocks-front__left-1.png" alt="rock" />
      <img className="hidden md:block absolute -bottom-80  right-0 z-30" src="src/components/images/rocks-front__right-1.png" alt="rock" />
    </div>


  );
};



export default Home;
