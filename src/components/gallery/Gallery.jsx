import React from "react";

function Gallery() {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="h-screen w-screen relative">
        <img className="absolute top-1/3 rotate-180 -left-32" src="galleryRock1.png" alt="" />
        <img className="absolute bottom-16 right-0 rotate-180" src="galleryRock2.png" alt="" />
      </div>
    </div>
  );
}

export default Gallery;