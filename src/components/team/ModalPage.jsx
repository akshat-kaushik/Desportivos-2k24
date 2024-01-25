import React from 'react'
import './ModalPage.css';


function ModalPage({Head,logo,Name}) {
  return (

    <>
    <div className="modalpage">
      {/* <img src='./teams1.png' className='bgimg' alt='bgimg' /> */}
      <div className='header'>
      <div className='header-section'>
            <div className='header-logo'>
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
                
                  <img src={`${item.imageLink}`} alt={`${item.name}`} />
                
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
{/*       
        <div className='footer-design'>
          <div className='design1 size'>
            <img src='pseudo (3).png' alt='design2' />
          </div>
          <div className='design2 size'>
            <img src='photo__rock.svg fill (1).png' alt='design3' />
          </div> 
          <div className='design3 size'>
            <img src='pseudo (4).png' alt='design4' />
          </div>
        </div> */}
      
    </div>
    </>
  )
}

export default ModalPage