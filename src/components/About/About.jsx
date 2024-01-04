import {gsap,} from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef,useLayoutEffect, useEffect, useState } from 'react';

const About = () => {


  const comp=useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: comp.current,
          start: "top", 
          end: "bottom center", 
          once: true, 
        },
      });

      tl.from(".text", {
        opacity: 0,
        duration: 0.5,
      });
    }, comp);

    return () => {
      ctx.revert();
    };
  }, []);
  

  return (
    <div ref={comp}>
      
      <div id="about111" className="bg-[#070707] h-fit px-56 pt-72 relative z-20">
        <div className=" grid grid-cols-1 md:grid-cols-3 justify-center items-center gap-5 relative">
          <div className="flex flex-col justify-start items-start gap-7 ">
            <div className="flex flex-col justify-start items-start">
              <p className="font-[ethnocentric] text-white text-3xl">About</p>
              <img className='w-96 h-24' src="src/components/images/despoAbout.png" alt="about" />
            </div>
            <img src="src/components/images/photo.png" alt="about" />
            <div className="flex gap-5 align-middle justify-center">
              <a href="https://www.instagram.com/desportivos.lnmiit/">
                <img className="cursor-pointer w-20 h-20" src="src/components/images/instagram.png" alt="about" />
              </a>
              <a href="https://www.youtube.com/@desportivoslnmiit2733">
                <img className="cursor-pointer w-20 h-20" src="src/components/images/Youtube.png" alt="about" />
              </a>
            </div>
          </div>
          <img className="hidden md:block h-3/4 justify-self-center" src="src/components/images/Line1.png" />
          <div className="flex justify-center items-center">
            <img  className="scale-125 text" src="src/components/images/textabout.png" />
          </div>

        </div>
        <img className="absolute right-1 top-48" src="src/components/images/about__rocks_right.svg" />
        <img className="absolute left-1 top-28" src="src/components/images/about__rocks_right.svg" />

      </div>
    </div>
  )
}

export default About