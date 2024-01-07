import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Home.css'

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

      <div id='bg'  className="p-0 m-0 bg-homemob sm:bg-homepc min-h-screen bg-no-repeat bg-cover absolute top-0 left-0 w-full  md:bg-fixed " >
        <div className='z-50'>
        <Navbar />

        </div>
        
        <div className="md:fixed absolute bottom-28 md:bottom-2 flex justify-center align-middle mb-2 w-full z-10">
          <img className="object-center h-26 sm:h-32 w-[75%]" src="./images/desportivous.png" alt="despo" />
        </div>



        <img className='hidden md:block h-1/2 w-1/2 relative -translate-x-1/2  left-1/2 -bottom-28' src='./images/realheros.png' />
        {/* <img className='hidden md:block fixed -translate-x-1/2 w-[52rem] left-[52.8rem]  md:bottom-[2rem] ' src='./images/power.gif' /> */}
        <img className=' md:hidden absolute -translate-x-1/2  left-1/2 bottom-36 scale-[2] ' src='./images/heros.png' />



        <img className='md:fixed absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-44 md:bottom-24' src='./images/boards.png' />
        <div className='flex justify-center items-center gap-2 absolute -translate-x-1/2 -translate-y-1/2 left-1/2 bottom-6'>
          <Link to={'/registration'} className='md:hidden  cursor-pointer rounded-2xl bg-[#F94560] text-white py-2 px-4 font-bold text-xl '> sports</Link>
          <Link to={'/esportsReg'} className='md:hidden cursor-pointer rounded-2xl bg-[#5018AB] text-white py-2 px-4 font-bold text-xl w-44'>esports</Link>

        </div>




        <img className="hidden md:block absolute -bottom-20 z-20" src="./images/Rocks.png" alt="rock" />
      </div>
      <img className="hidden md:block absolute -bottom-80  left-0 z-30" src="./images/rocks-front__left-1.png" alt="rock" />
      <img className="hidden md:block absolute -bottom-80  right-0 z-30" src="./images/rocks-front__right-1.png" alt="rock" />
    </div>


     


  );
};



export default Home;
