import React from 'react';
import './ModalPage.css';

const Modalsecond = ({Member,logo,Name}) => {
  return (
    <div>

          <div className='modalpage'>
                {/* <div className='header-title t'>
                        Who is behind
                  </div>
                <div className='other-members'>
        {Member ? (<div className='oimage'>
          <img src={`${logo}`} alt='heading' />
        </div>) : (
          <></>
        )} */}
  <div className='header'>
        <div className='header-section '>
            <div className='header-title color'>
                  Who is behind
            </div>
           <div className='header-logo'>
                  <img className='heading-img' src={`${logo}`} alt="header-img" />
                  <div className='teamname'>{`${Name}`}</div>
            </div>
           
      </div>
      
      </div>
      <div className='other' >
        <div className='otext'>
          {Member?.map((item) => {
            return <p>{item.name}</p>
          })}

        </div>
        </div>
      </div>
          </div>
      
    
  )
}

export default Modalsecond
