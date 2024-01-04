import React from "react";
import Marquee from "react-fast-marquee";

function Gallery() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="h-screen w-screen relative">
        <img
          className="absolute top-1/3 -left-32"
          src="galleryRock1.png"
          alt=""
        />
        <img
          className="absolute bottom-16 right-0"
          src="galleryRock2.png"
          alt=""
        />
        <div className="mt-2">
          <Marquee direction="right" speed="100">
            <img className="w-full mx-1" src="1.png" alt="" />
            <img className="w-full mx-1" src="2.png" alt="" />
            <img className="w-full mx-1" src="3.png" alt="" />
            <img className="w-full mx-1" src="4.png" alt="" />
            <img className="w-full mx-1" src="5.png" alt="" />
            <img className="w-full mx-1" src="6.png" alt="" />
            <img className="w-full mx-1" src="7.png" alt="" />
            <img className="w-full mx-1" src="8.png" alt="" />
            <img className="w-full mx-1" src="9.png" alt="" />
            <img className="w-full mx-1" src="10.png" alt="" />
          </Marquee>
        </div>
      </div>
    </div>
  );
}

export default Gallery;

