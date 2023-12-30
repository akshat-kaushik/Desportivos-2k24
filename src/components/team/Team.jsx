import React, { useState } from "react";

function Team() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <div className="bg-black h-screen flex items-center justify-center">
        <div className="h-screen w-screen relative">
          <div className="absolute left-0 top-20">
            <h1 className="text-white text-lg md:text-3xl transform -rotate-2">
              Who is Behind
            </h1>
            <img className="md:w-3/5" src="Desportivos.png" alt="" />
            <img className="absolute top-full" src="eventStrike2.png" alt="" />
            <img className="" src="eventStrike3.png" alt="" />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center transition-opacity duration-300"
          onClick={closeModal}
        >
          <div className="bg-white p-4 transition-all transform scale-100">
            <h2>Modal Content</h2>
          </div>
        </div>
      )}
    </>
  );
}

export default Team;
