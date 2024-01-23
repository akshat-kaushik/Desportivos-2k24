import React from 'react'
import './ModalPage.css';
import Tiltcard from './TiltCard/tiltcard';


function ModalPage({Head,logo,Name}) {
  return (

    <>
    <div className="modalpage">
      {/* <img src='./teams1.png' className='bgimg' alt='bgimg' /> */}
      <div className='header'>
      <div className='header-section'>
            <div className='header-title color'>
                  Who is behind
            </div>
            <div className='header-logo'>
                  <img className='heading-img' src={`${logo}`} alt="header-img" />
                  <div className='teamname'>{`${Name}`}</div>
            </div>
      </div>
      </div>
      <div className='team-section'>
      <div className='team-details'>
        {Head?.map((item) => {
          return(
            <>
            <div className='team-data'>
              <div className='member-image color'>
                {item.imageLink? 
                <>
                
                  <Tiltcard image={item?.imageLink} name={item.name} />
                
                </>:
                <>
                <div>
                  <div className='name'>{item.name}</div>
                </div>
                </>
                }
              </div>
              {/* <div className='member-name'>
                <h1>{item.name}</h1>
              </div> */}
              </div>
              
            
            </>
          )
        })}
      </div>
      {/* <div className='other-members'>
        {Member ? (<div className='oimage'>
          <img src={`${logo}`} alt='heading' />
        </div>) : (
          <></>
        )}
        <div className='otext'>
          {Member?.map((item) => {
            return <p>{item.name}</p>
          })}

        </div>
      </div> */}
      </div>
    </div>
    </>
  )
}

export default ModalPage