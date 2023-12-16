import React from 'react'

function ModalPage({bgImage}) {
  return (

    <>
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="bg-opacity-90 p-8 rounded-lg w-full md:w-3/4 lg:w-1/2 xl:w-1/3">

        {/* Background Image */}
        <div className="bg-cover bg-center mb-6" style={{ backgroundImage: `url(${bgImage})`, height: '200vh', width:"200vh" }}></div>

        {/* Images */}
        <div className="flex flex-wrap mb-6">
          <img src="" alt="Image 1" className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto mb-2 rounded" />
          <img src=""alt="Image 2" className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto mb-2 rounded" />
          <img src="" alt="Image 3" className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto mb-2 rounded" />
          <img src="" alt="Image 4" className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 h-auto mb-2 rounded" />
        </div>

        {/* List of Names */}
        <ul className="text-white">
          <li>John Doe</li>
          <li>Jane Doe</li>
          <li>Bob Smith</li>
          <li>Alice Johnson</li>
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default ModalPage