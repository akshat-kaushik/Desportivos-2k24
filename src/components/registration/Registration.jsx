import React from 'react';
import './Registration.css';
import { useEffect } from 'react';
import { states } from '../../data/states';
import { sports } from '../../data/sports';

const dropBox = (inputType, data) => {
          let options = document.querySelector("#" + inputType + "-options");
        
          data.forEach((item) => {
            let li = document.createElement("li");
            li.textContent = item;
            options.appendChild(li);
          });
        
          let x = true;
          var content = document.querySelector("." + inputType + "-content");
          var inputs = document.querySelectorAll(".select-input")
          var select_input = document.querySelector(".select-" + inputType);
          select_input.addEventListener("click", () => {
            if(x){
              content.style.display = "none";
              x = false;
            }else{
              content.style.display =  "block";
              x = !x;
            }
          });
        
          document.addEventListener("click" , (event) => {
            if(!content.contains(event.target) && event.target !== select_input) {
              content.style.display  = "none";
              x = false;
            }
          });
        
          var selectedValue = "";
          var inputOptions = document.querySelectorAll("#" + inputType + "-options li");
        
          inputOptions.forEach((option) => {
            option.addEventListener("click", (e) => {
              selectedValue = e.target.textContent;
              select_input.value = selectedValue;
              content.style.display = "none";
            });
            // selectedCollege = selectedValue;
          });
        
        
          const input_options = document.querySelector("#" + inputType + "-options");
          // // const inputElement = document.querySelector("." + inputType + "-college");
          let inputSearch = select_input.value;
        
          select_input.addEventListener("keyup", (e) => {
            let filteredData = [];
            inputSearch = e.target.value.toLowerCase();
        
            filteredData = data
              .filter((item) => {
                return item.toLowerCase().startsWith(inputSearch);
              })
              .map((item) => {
                return `<li>${item}</li>`;
              })
              .join("");
            input_options.innerHTML = filteredData;
          });
}


const Registration = () => {


  useEffect(() => {

    fetch("https://bitsbosm.org/2023/registrations/get_colleges", {
      method: "GET",
      })
      .then((res) => {
      if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
      })
      .then((data) => {
      const names = data.data.map((item) => {
      return item.name;
      });

      // Filter names that start with "BITS"
      const uNames = names.filter((item) => {
      return !item.startsWith("BITS");
      });
      uNames.push("BITS PILANI", "BITS GOA", "BITS HYDERABAD");

      dropBox("college", uNames);
      })
      .catch((error) => {
      console.error("Error:", error);
      });

  })


  useEffect(() => {
            dropBox("state",states);
            dropBox("sport", sports);
  })

  return (
    <>

          <div className="registration">
          <div className="header">
          <div className="heading"><h1>REGISTRATION</h1></div>
          </div>
          <div className="form-part">
          <form id="reg-form">
          <div className="form-name">
          <div className="form-name-part parts">
                    <div className="loda common-design"><p>NAME</p></div>
                    <input type="text" id="name" className="common-input" required />
          </div>
          <div className="form-college-name">
                    <div className="subpart">
                    <label className="collegetext common-design">COLLEGES</label>
                    <div className='select-inputs' onClick={(e) => handleMove(e)}>
                      <input type='text' className='select-college' id='collegeinput'/>
                            <span className="uil"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z" /></svg></span>
                    </div>
                    <div className="content">
                    <div className="college-content">
                    <ul className="options" id="college-options" />
                    </div>
                    </div>
                    </div>
                    {/* <i class="fi fi-rr-angle-small-down"></i> */}
          </div>
          </div>
          <div className="form-contact">
          <div className="contact-email parts">
                    <label className="emailtext common-design"><p>EMAIL</p></label>
                    <input type="text" id="emailinput" className="common-input" />
          </div>
          <div className="form-college-name">
                    <div className="subpart">
                    <label className="collegetext common-design">STATE</label>
                    <div className='select-inputs'>
                      <input type='text' className='select-state' id='collegeinput'/>
                            <span className="uil"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z" /></svg></span>
                    </div>
                    <div className="content">
                    <div className="state-content">
                    <ul className="options" id="state-options" />
                    </div>
                    </div>
                    </div>
                    {/* <i class="fi fi-rr-angle-small-down"></i> */}
          </div>
          </div>
          <div className="form-phone">
          <div className="contact-phone parts">
                    <label className="phonetext common-design"><p>PHONE NO.</p></label>
                    <input type="text" id="phoneinput" className="common-input" />
          </div>
          <div className="form-college-name">
                    <div className="subpart">
                    <label className="collegetext common-design">SPORTS</label>
                                        <div className='select-inputs'>
                      <input type='text' className='select-sport' id='collegeinput'/>
                            <span className="uil"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z" /></svg></span>
                    </div>
                    <div className="content">
                    <div className="sport-content">
                    <ul className="options" id="sport-options" />
                    </div>
                    </div>
                    </div>
          </div>
          </div>
          <div className="form-register">
          <div className="upload-part">
                    <div className="gender">
                    <label className="gendertext common-design"><p>GENDER</p></label>
                    <div className="gender-category">
                    <div className="male-part">
                    <input type="radio" id="male" className="checker" name="male" />
                    <label htmlFor="male"><p className="maletext">MALE</p></label>
                    </div>
                    <div className="female-part">
                    <input type="radio" id="female" className="checker" name="male" />
                    <label htmlFor="female"><p className="femaletext">FEMALE</p></label>
                    </div>
                    </div>
                    </div>
          </div>
          </div>
          </form>
          <div className="register-button">
          <button >{/*onClick="submitForm()"*/}
          <p className="register-text">REGISTER</p>
          </button>
          </div>
          </div>
          <img src="./img/background.png" className="bgimg" alt="bgimg" />
          <img src="./img/span.meteorite__left_center.png" alt="symbol" className="symbol" />
          </div>

      
    </>
  )
}

export default Registration
