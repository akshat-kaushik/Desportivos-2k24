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

  const [name, setName] = useState("");
  const [college, setCollege] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [phone, setPhone] = useState("");
  const [sport, setSport] = useState("");
  const [male, setMale] = useState(false);
  const [female, setFemale] = useState(false);
  const [text, setText] = useState("Register")

  const escriptUrl =
    "https://script.google.com/macros/s/AKfycbz1c9Jw3qtzDAkvyFeMdB1Ue9O6-8qaCno13bKd8v-Py4dRt5j7uvdg4xRjqzmzGzpz/exec";

  const handleSubmit = async () => {
    if (!name || !email || !phone || !college || !sport || !state || !(male || female)) {
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

    setText("Registering...")

    let gen = ""
    if (male) {
      gen = "male";
    }
    else {
      gen = "female"
    }

    const formData = {
      name: name,
      email: email,
      phone: phone,
      college: college,
      state: state,
      sport: sport,
      gender: gen,
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
        setText("Register")
        setCollege("")
        setEmail("")
        setFemale(false)
        setMale(false)
        setSport("")
        setName("")
        setPhone("")
        setState("")
      } else {
        console.error("Error submitting form data:", response.statusText);
        setText("Register")
      }
    } catch (error) {
      console.error("Error submitting form data:", error.message);
      setText("Register")
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
              <div className="contact-email parts">
                <label className="emailtext common-design">
                  <p>State</p>
                </label>
                <input
                  type="text"
                  id="emailinput"
                  className="common-input test"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
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
                    <select
                      className="select-sport"
                      id="collegeinput"
                      value={sport}
                      onChange={(e) => {
                        setSport(e.target.value);
                      }}
                    >
                      <option value="" disabled>
                        Select a sport
                      </option>
                      {sports.map((sport) => (
                        <option className="text-black" key={sport} value={sport}>
                          {sport}
                        </option>
                      ))}
                    </select>
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
                        value={male}
                        onChange={(e) => {
                          setMale(true)
                          setFemale(false)
                        }}
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
                        value={female}
                        onChange={(e) => {
                          setFemale(true)
                          setMale(false)
                        }}


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
              <p className="register-text">
                {text}
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
