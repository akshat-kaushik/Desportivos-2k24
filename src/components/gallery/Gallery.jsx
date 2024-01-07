import React from "react";
import "./gallery.css";

function Gallery() {
  return (
    <div id="gallery" className="bg-black h-screen flex items-center justify-center">
      <div className="h-screen w-screen relative">
        <img
          className="absolute md:top-1/3 rotate-180 -left-32"
          src="galleryRock1.png"
          alt=""
        />
        <img
          className="absolute bottom-16 right-0 rotate-180"
          src="galleryRock2.png"
          alt=""
        />

        <div className="slider1 top-28 sm:top-24">
          <div className="slide-track">
            <div className="slide1">
              <img src="1.png" alt="" />
            </div>
            <div className="slide1">
              <img src="2.png" alt="" />
            </div>
            <div className="slide1">
              <img src="3.png" alt="" />
            </div>
            <div className="slide1">
              <img src="4.png" alt="" />
            </div>
            <div className="slide1">
              <img src="5.png" alt="" />
            </div>
            <div className="slide1">
              <img src="6.png" alt="" />
            </div>
            <div className="slide1">
              <img src="7.png" alt="" />
            </div>
            <div className="slide1">
              <img src="8.png" alt="" />
            </div>
            <div className="slide1">
              <img src="9.png" alt="" />
            </div>
            <div className="slide1">
              <img src="10.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;