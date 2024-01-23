import React, { useEffect, useState } from "react";
import { ArtistManagementHead, ContentHead, CreativeHead, EventManagementHead, FestHead, LogisticHeads, PRHead, SponsorshipHead } from "../../data/Teamdata/Head";
import { ContentTeam, CreativeTeam, PRTeam, SponsorshipTeam, WebDevTeam } from "../../data/Teamdata/team";
import { WebDeveloperHead } from "../../data/Teamdata/Head";
import './Team.css';
import ModalPage from './ModalPage';
import Modalsecond from "./Modalsecond";
import { LuArrowLeftCircle } from "react-icons/lu";
import { LuArrowRightCircle } from "react-icons/lu";

let Head;
let Member;
var logo;
function Team() {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const pages = [
    { component: <ModalPage Head={FestHead} logo={"roadmap-become.svg.png"} Name={"Fest Head"}/>, type: 'headpage' },
    { component: <ModalPage Head={CreativeHead} logo={"roadmap-become.svg.png"} Name={"Creative Team"}/>, type: 'headpage' },
    { component: <Modalsecond Member={CreativeTeam} logo={"roadmap-become.svg.png"} Name={"Creative Team"}/>, type: 'teampage' },
    { component: <ModalPage Head={SponsorshipHead} logo={"roadmap-become.svg.png"} Name={"Sponsorship Team"}/>, type: 'headpage' },
    { component: <Modalsecond Member={SponsorshipTeam} logo={"roadmap-become.svg.png"} Name={"Sponsorship Team"}/>, type: 'teampage' },
    { component: <ModalPage Head={ContentHead} logo={"roadmap-become.svg.png"} Name={"Content Team"}/>, type: 'headpage' },
    { component: <Modalsecond Member={ContentTeam} logo={"roadmap-become.svg.png"} Name={"Content Team"}/>, type: 'teampage' },
    { component: <ModalPage Head={WebDeveloperHead} logo={"roadmap-become.svg.png"} Name={"Web Developer Team"}/>, type: 'headpage' },
    { component: <Modalsecond Member={WebDevTeam} logo={"roadmap-become.svg.png"} Name={"Web Developer Team"}/>, type: 'teampage' },
    { component: <ModalPage Head={PRHead} logo={"roadmap-become.svg.png"} Name={"PR Team"}/>, type: 'headpage' },
    { component: <Modalsecond Member={PRTeam} logo={"roadmap-become.svg.png"} Name={"PR Team"}/>, type: 'teampage' },
    { component: <ModalPage Head={LogisticHeads} logo={"roadmap-become.svg.png"} Name={"Logistics Team"}/>, type: 'headpage' },
    // { component: <ModalPage Head={PRHead} logo={"roadmap-become.svg.png"} Name={""}/>, type: 'headpage' },
    { component: <ModalPage Head={EventManagementHead} logo={"roadmap-become.svg.png"} Name={"Event Management Team"}/>, type: 'headpage' },
    { component: <ModalPage Head={ArtistManagementHead} logo={"roadmap-become.svg.png"} Name={"Artist Management Team"}/>, type: 'headpage' },






    // Add more pages as needed
  ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     
  //   }, 1000); // Change the interval time as desired

  //   return () => clearInterval(interval);
  // }, [currentPageIndex, pages.length]);




  const goToPreviousPage = () => {
    const prevPageIndex = (currentPageIndex - 1 + pages.length) % pages.length;
    setCurrentPageIndex(prevPageIndex);
  };

  const goTonextPage = () => {
    const nextPageIndex = (currentPageIndex + 1) % pages.length;
      setCurrentPageIndex(nextPageIndex);
  }

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      
        <div className="h-screen w-screen relative">
          <div className="header-area">
            <div className="header-left">
            <h1 className="text-white text-lg md:text-3xl transform -rotate-2">
              Who is Behind
            </h1>
            <img className="" src="Desportivos.png" alt="" />
            </div>
            {/* <img className="absolute top-full" src="eventStrike2.png" alt="" />
            <img className="absolute top-full" src="eventStrike3.png" alt="" /> */}
            <div className='header-r'>
                <img src='pseudo (2).png' alt='design-1'/>
            </div>
          </div>

          
          <div className="modal">
            
              <button className="left-button cursor-pointer text-white" onClick={() => goToPreviousPage()}>
              <LuArrowLeftCircle />
            
              </button>
              

             
             

          <div className="slides" >

            {/* {Object.keys(volunteers).map((key,index) => { */}
              {/* return( */}
                <div
                className="pages"
                >
            {pages.map((page, index) => (
              <div key={index} style={{ display: index === currentPageIndex ? 'block' : 'none' }} className={page.type}>
                {page.component}
              </div>
            ))}


              </div>
 {/* {/*            // )})}  */}
          
        


          </div>
          <button className="right-button cursor-pointer color" onClick={() => goTonextPage()}>
                
                <LuArrowRightCircle />
            
          </button>
          </div>
        </div>
        <div className='footer'>
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
        </div>
      </div>
    

      
        
      
    </>
  );
}

export default Team;
