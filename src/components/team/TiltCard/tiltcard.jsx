import React from 'react'

const Tiltcard = ({image,name}) => {
  return (
    <div
      style={{
        transformStyle:"preserve-3d"
      }}>
      <div className='image' style={{
        transformStyle:"preserve-3d",
        transform:"translateZ(75px)"
      }}>
          <img src={`${image}`} alt={`${name}`} />
      </div>
    </div>
  )
}

export default Tiltcard 
