import React from "react";

function Template({ sportName }) {
  const imageSrc = `${sportName}.png`;

  return (
    <>
      <div className="relative flex flex-col items-center">
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 text-white sm:top-20">
          <h2 className="text-2xl font-bold">{sportName}</h2>
        </div>

        <div>
          <img src="Sport.png" alt="" />
        </div>
        <div className="absolute top-16"><img src={imageSrc} alt="" /></div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center p-4">
          <button className="text-xl">Rule BOOK</button>
        </div>
      </div>
    </>
  );
}

export default Template;
