import React, { useState, useEffect, useRef } from 'react';
import './Registration.css';
import { states } from '../../data/states';
import { sports } from '../../data/sports';

const Registration = () => {
  const [colleges, setColleges] = useState([]);
  const [sActive, setSActive] = useState(true);
  const [spActive, setSpActive] = useState(true);
  const [cActive, setCActive] = useState(true);

  const dropBox = (inputType, data) => {
    const content = document.querySelector("." + inputType + "-content");
    const select_input = document.querySelector(".select-" + inputType);

    document.addEventListener("click", (event) => {
      if (!content.contains(event.target) && event.target !== select_input) {
        content.style.display = "none";
      }
    });

    let selectedValue = "";
    const inputOptions = document.querySelectorAll("#" + inputType + "-options div");

    inputOptions.forEach((option) => {
      option.addEventListener("click", (e) => {
        selectedValue = e.target.textContent;
        select_input.value = selectedValue;
        content.style.display = "none";
      });
    });

    const input_options = document.querySelector("#" + inputType + "-options");
    let inputSearch = select_input.value;

    select_input.addEventListener("keyup", (e) => {
      let filteredData = [];
      inputSearch = e.target.value.toLowerCase();

      filteredData = data
        .filter((item) => {
          return item.toLowerCase().startsWith(inputSearch);
        })
        .map((item) => {
          return `<div>${item}</div>`;
        })
        .join("");
      input_options.innerHTML = filteredData;
    });
  };

  const fetchurl = async () => {
    try {
      const response = await fetch("https://bitsbosm.org/2023/registrations/get_colleges", {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const names = data.data.map((item) => item.name);

      setColleges(names);
      dropBox("college", names);
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchurl();
  }, []);

  useEffect(() => {
    dropBox("state", states);
    dropBox("sport", sports);
  }, []);

  const handleState = () => {
    setSActive((sActive) => !sActive);
  };

  const handleSports = () => {
    setSpActive((spActive) => !spActive);
  };

  const handleCollege = () => {
    setCActive((cActive) => !cActive);
  };

  return (
    <>
      <div className="registration">
        <div className="header">
          <div className="heading">
            <h1>REGISTRATION</h1>
          </div>
        </div>
        <div className="form-part">
          <form id="reg-form">
            <div className="form-name">
              <div className="form-name-part parts">
                <div className="loda common-design">
                  <p>NAME</p>
                </div>
                <input type="text" id="name" className="common-input" required />
              </div>
              <div className="form-college-name">
                <div className="subpart">
                  <label className="collegetext common-design">COLLEGES</label>
                  <div className="select-inputs">
                    <input
                      type="text"
                      className="select-college"
                      id="collegeinput"
                      onClick={() => handleCollege()}
                    />
                    <span className="uil">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="content">
                    <div className="college-content" style={{ display: cActive ? 'none' : 'block' }}>
                      <div className="options" id="college-options">
                        {colleges.map((item) => (
                          <div key={item}>{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-contact">
              <div className="contact-email parts">
                <label className="emailtext common-design">
                  <p>EMAIL</p>
                </label>
                <input type="text" id="emailinput" className="common-input" />
              </div>
              <div className="form-college-name">
                <div className="subpart">
                  <label className="collegetext common-design">STATE</label>
                  <div className="select-inputs">
                    <input
                      type="text"
                      className="select-state"
                      id="collegeinput"
                      onClick={() => handleState()}
                    />
                    <span className="uil">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="content">
                    <div className="state-content" style={{ display: sActive ? 'none' : 'block' }}>
                      <div className="options" id="state-options">
                        {states.map((item) => (
                          <div key={item}>{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-phone">
              <div className="contact-phone parts">
                <label className="phonetext common-design">
                  <p>PHONE NO.</p>
                </label>
                <input type="text" id="phoneinput" className="common-input" />
              </div>
              <div className="form-college-name">
                <div className="subpart">
                  <label className="collegetext common-design">SPORTS</label>
                  <div className="select-inputs" onClick={() => handleSports()}>
                    <input type="text" className="select-sport" id="collegeinput" />
                    <span className="uil">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="content">
                    <div className="sport-content" style={{ display: spActive ? 'none' : 'block' }}>
                      <div className="options" id="sport-options">
                        {sports.map((item) => (
                          <div key={item}>{item}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-register">
              <div className="upload-part">
                <div className="gender">
                  <label className="gendertext common-design">
                    <p>GENDER</p>
                  </label>
                  <div className="gender-category">
                    <div className="male-part">
                      <input type="radio" id="male" className="checker" name="gender" />
                      <label htmlFor="male">
                        <p className="maletext">MALE</p>
                      </label>
                    </div>
                    <div className="female-part">
                      <input type="radio" id="female" className="checker" name="gender" />
                      <label htmlFor="female">
                        <p className="femaletext">FEMALE</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="register-button">
            <button>
              <p className="register-text">REGISTER</p>
            </button>
          </div>
        </div>
        <img src="./img/background.png" className="bgimg" alt="bgimg" />
        <img src="./img/span.meteorite__left_center.png" alt="symbol" className="symbol" />
      </div>
    </>
  );
};

export default Registration;
