import React from "react";

function Template({ sportName }) {
  const imageSrc = `${sportName}.png`;
  const pdfSrc = `${sportName}.pdf`;

  function handleClick() {
    const link = document.createElement("a");
    link.href = pdfSrc;
    link.download = `${sportName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <>
      <div className="relative flex flex-col items-center">
        <div className="absolute top-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-4 text-white sm:top-20">
          <h2 className="text-2xl font-bold sm:top-2">{sportName}</h2>
        </div>

        <div>
          <img src="Sport.png" alt="" />
        </div>
        
        <div className="absolute left-16 top-28">
          <img className="" src={imageSrc} alt="" />
        </div>

        <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white text-center p-4">
          <button onClick={handleClick} className="text-xl">
            Rule BOOK
          </button>
        </div>
      </div>
    </>
  );
}

export default Template;