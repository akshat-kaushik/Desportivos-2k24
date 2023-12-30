import { Link } from "react-scroll";

const Navbar = () => {

  const handleToggle = () => {
    const hamburgerBtn = document.getElementById('hamburger-button')
    const mobileMenu = document.getElementById('mobile-menu')
    mobileMenu.classList.toggle('hidden')
    mobileMenu.classList.toggle('flex')
    hamburgerBtn.classList.toggle('toggle-btn')
  }

  return (
    <div>
      <div className='md:flex md:flex-col '>
        <div className='bg-black md:bg-inherit h-24 w-full  p-2 md:flex justify-around items-center'>
          <button id='hamburger-button' className='md:hidden relative cursor-pointer bg-buttonbg m-4' onClick={handleToggle}>
            <div
              className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']">
            </div>
          </button>
          <div className='text-xl md:font-sans flex justify-between items-center gap-3'>
            <Link to="sponsors" spy={true}
              smooth={true}
              offset={50}
              duration={500} className="hidden cursor-pointer md:block text-white font-bold">SPONSORS</Link>
            <Link to={"about111"} spy={true}
              smooth={true}
              offset={50}
              duration={500} className="hidden cursor-pointer md:block text-white font-bold">ABOUT</Link>
            <Link to="gallery" spy={true}
              smooth={true}
              offset={50}
              duration={500} className="hidden cursor-pointer md:block text-white font-bold">GALLERY</Link>
          </div>
          {/* <img className='absolute hidden cursor-pointer -translate-x-1/2 -translate-y-1/2 top-16 left-1/2 md:block h-32 w-80' src='src/components/images/despo.png' /> */}
          <img className='absolute -translate-x-1/2 -translate-y-1/2 top-12 left-1/2 md:scale-125 cursor-pointer block h-20 w-24' src='src/components/images/Despoo1.png' />
          <div className='text-xl md:font-sans flex justify-between items-center gap-3'>
            <Link to="events" spy={true}
              smooth={true}
              offset={50}
              duration={500} className="hidden cursor-pointer md:block text-white font-bold">EVENTS</Link>
            <Link to="team" spy={true}
              smooth={true}
              offset={50}
              duration={500} className="hidden cursor-pointer md:block text-white font-bold">TEAM</Link>
            <a href=''>
              <button className='hidden cursor-pointer rounded-2xl  md:block bg-[#F94560] text-white py-2 px-4 font-bold text-xl '>REGISTER</button>
            </a>
          </div>
        </div>
        <img className='absolute -translate-x-1/2 -translate-y-1/2 top-24 left-1/2 hidden w-3/4 md:block' src='src/components/images/pseudo.png' />
      </div>

      <section id="mobile-menu"
        className="font-serif top-24 justify-center absolute hidden w-full origin-top animate-open-menu flex-col bg-black text-5xl z-40">
        <nav className="flex min-h-screen flex-col items-center py-8" aria-label="mobile">
          <a href="#sponsors" className="text-white w-full py-6 text-center hover:opacity-90">SPONSORS</a>
          <a href="#gallery" className="text-white w-full py-6 text-center hover:opacity-90">GALLERY</a>
          <a href="#events" className="text-white w-full py-6 text-center hover:opacity-90">EVENTS</a>
          <a href="#team" className="text-white w-full py-6 text-center hover:opacity-90">TEAM</a>
        </nav>
      </section>
    </div>

  )
}

export default Navbar