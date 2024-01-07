import React, { useState, useEffect, useRef } from "react";
import "./Registration.css";
import { states } from "../../data/states";
import { sports } from "../../data/sports";

const Registration = () => {
  const rtext1 = useRef(null);

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const [colleges, setColleges] = useState([]);
  const [sActive, setSActive] = useState(true);
  const [spActive, setSpActive] = useState(true);
  const [cActive, setCActive] = useState(true);

  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [sport, setSport] = useState("");
  const [gender, setGender] = useState("");

  const dropBox = (inputType, data) => {
    const content = document.querySelector("." + inputType + "-content");
    const select_input = document.querySelector(".select-" + inputType);

    document.addEventListener("click", (event) => {
      if (!content.contains(event.target) && event.target !== select_input) {
        content.style.display = "none";
      }
    });

    let selectedValue = "";
    const inputOptions = document.querySelectorAll(
      "#" + inputType + "-options div"
    );

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
      const response = await fetch(
        "https://bitsbosm.org/2023/registrations/get_colleges",
        {
          method: "GET",
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      const names = data.data.map((item) => item.name);

      setColleges(names);
      const uNames = names.filter((item) => {
        return !item.startsWith("BITS") && !item.startsWith("Alumni");
      });

      uNames.push("BITS PILANI", "BITS GOA", "BITS HYDERABAD");

      dropBox("college", uNames);
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

  const escriptUrl =
    "https://script.google.com/macros/s/AKfycbz1c9Jw3qtzDAkvyFeMdB1Ue9O6-8qaCno13bKd8v-Py4dRt5j7uvdg4xRjqzmzGzpz/exec";

  const handleSubmit = async () => {
    if (!name || !email || !phone || !college || !sport || state || gender) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Invalid phone number format. Please enter a valid phone number.");
      return;
    }

    if (!validateEmail(email)) {
      alert("Invalid email format. Please enter a valid email address.");
      return;
    }

    rtext1.current.textContent = "Registering...";

    const formData = {
      name: name,
      email: email,
      phone: phone,
      college: college,
      state: state,
      sport: sport,
      gender: gender,
    };
    console.log("Form Data:", formData);
    try {
      const response = await fetch(escriptUrl, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseText = await response.text();
        console.log("Server response:", responseText);
        alert("Registration Successful");
      } else {
        console.error("Error submitting form data:", response.statusText);
      }
    } catch (error) {
      console.error("Error submitting form data:", error.message);
    } finally {
      location.reload();
    }
  };

  return (
    <>
      <div className="registration">
        <div className="header">
          <div className="heading">
            <h1 className="">REGISTRATION</h1>
          </div>
        </div>
        <div className="form-part">
          <form id="reg-form">
            <div className="form-name">
              <div className="form-name-part parts">
                <div className="loda common-design">
                  <p>NAME</p>
                </div>
                <input
                  type="text"
                  id="name"
                  className="common-input"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-college-name">
                <div className="subpart">
                  <div className="contact-email parts">
                    <label className="emailtext common-design">
                      <p>COLLEGE</p>
                    </label>
                    <input
                      type="text"
                      id="emailinput"
                      className="common-input test"
                      value={college}
                      onChange={(e) => setCollege(e.target.value)}
                    />
                  </div>
                  <div className="content">
                    <div
                      className="college-content"
                      style={{ display: cActive ? "none" : "block" }}
                    >
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
                <input
                  type="text"
                  id="emailinput"
                  className="common-input"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
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
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                    />
                    <span className="uil">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="content">
                    <div
                      className="state-content"
                      style={{ display: sActive ? "none" : "block" }}
                    >
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
                <input
                  type="text"
                  id="phoneinput"
                  className="common-input"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="form-college-name">
                <div className="subpart">
                  <label className="collegetext common-design">SPORT</label>
                  <div className="select-inputs">
                    <input
                      type="text"
                      className="select-sport"
                      id="collegeinput"
                      value={sport}
                      onClick={handleSports}
                      onChange={(e) => {
                        setSport(e.target.value);
                      }}
                    />
                    <span className="uil">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M17 9.17a1 1 0 0 0-1.41 0L12 12.71L8.46 9.17a1 1 0 0 0-1.41 0a1 1 0 0 0 0 1.42l4.24 4.24a1 1 0 0 0 1.42 0L17 10.59a1 1 0 0 0 0-1.42Z"
                        />
                      </svg>
                    </span>
                  </div>
                  <div className="content">
                    <div
                      className="sport-content"
                      style={{ display: spActive ? "none" : "block" }}
                    >
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
                    <p className="mt-10">GENDER</p>
                  </label>
                  <div className="gender-category">
                    <div className="male-part">
                      <input
                        type="radio"
                        id="male"
                        className="checker -mt-1"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label htmlFor="male">
                        <p className="maletext">MALE</p>
                      </label>
                    </div>
                    <div className="female-part">
                      <input
                        type="radio"
                        id="female"
                        className="checker -mt-1"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                      />
                      <label htmlFor="female">
                        <p className="femaletext">FEMALE</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <p className="mt-10 text-center text-red-800">
            | Each player needs to submit individually |
          </p>
          <p className="mt-5 text-center text-red-800 mb-5">
            *COMPLETE THIS BRIEF TO PARTICIPATE. SPAMMING THE FORM WITH WRONG
            INFORMATION WILL RESULT IN CANCELLATION OF THE REGISTRATION
          </p>
          <div className="register-button">
            <button onClick={handleSubmit}>
              <p className="register-text" ref={rtext1}>
                REGISTER
              </p>
            </button>
          </div>
        </div>
        <img src="./img/background.png" className="bgimg" alt="bgimg" />
        <img
          src="./img/span.meteorite__left_center.png"
          alt="symbol"
          className="symbol"
        />
      </div>
    </>
  );
};

export default Registration;
