import React, { useState, useRef } from "react";
import "./Esports.css";

function Esports() {
  const rtext = useRef(null);

  const [team, setTeam] = useState("");
  const [cap, setCap] = useState("");
  const [phone, setPhone] = useState("");
  const [mail, setMail] = useState("");
  const [game, setGame] = useState("");

  const handleTeamChange = (event) => setTeam(event.target.value);
  const handleCapChange = (event) => setCap(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleMailChange = (event) => setMail(event.target.value);
  const handleGameChange = (event) => setGame(event.target.value);

  const validatePhone = (phone) => {
    return /^\d{10}$/.test(phone);
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const escriptUrl =
    "https://script.google.com/macros/s/AKfycbyuDGCocnwql81dyQfBgPkqlpjMl88Hh0NFO7OwmqLAhiHuCYdxMlF4CIp4p4U36oR6Jg/exec";

  const handleSubmit = async () => {
    if (!team || !cap || !phone || !mail || !game) {
      alert("Please fill in all the fields.");
      return;
    }

    if (!validatePhone(phone)) {
      alert("Invalid phone number format. Please enter a valid phone number.");
      return;
    }

    if (!validateEmail(mail)) {
      alert("Invalid email format. Please enter a valid email address.");
      return;
    }

    rtext.current.textContent = "Registering...";

    console.log("Team:", team);
    console.log("Captain Name:", cap);
    console.log("Phone:", phone);
    console.log("Email:", mail);
    console.log("Game:", game);

    const formData = {
      team: team,
      name: cap,
      phone: phone,
      email: mail,
      game: game,
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
    <div>
      <div className="w-screen">
        <img src="./img/background.png" className="bgimg" alt="" />
        <h1 className="text-white text-5xl text-center mt-16 mb-32">
          E-SPORTS REGISTRATION
        </h1>
        <div className="container">
          <div className="center">
            <div>
              <h1 className="text-3xl w-full -mb-3">Team Name</h1>
              <input
                type="text"
                className="inputField"
                value={team}
                onChange={handleTeamChange}
              />
            </div>
            <div>
              <h1 className="text-3xl w-full -mb-3 mt-10">Captain Name</h1>
              <input
                type="text"
                className="inputField"
                value={cap}
                onChange={handleCapChange}
              />
            </div>
            <div>
              <h1 className="text-3xl w-full -mb-3 mt-10">Phone no.</h1>
              <input
                type="text"
                className="inputField"
                value={phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div>
              <h1 className="text-3xl w-full -mb-3 mt-10">Email</h1>
              <input
                type="text"
                className="inputField"
                value={mail}
                onChange={handleMailChange}
              />
            </div>
            <div>
              <h1 className="text-3xl w-full -mb-3 mt-10">GAME</h1>
              <select
              className="inputField text-white"
                value={game}
                onChange={(e) => {
                  setGame(e.target.value);
                }}
              >
                <option value="" disabled>
                  Select a sport
                </option>
                <option className="text-black" value="BGMI">BGMI</option>
                <option className="text-black" value="VALORANT">VALORANT</option>
              </select>
            </div>
            <div className="register-button1 text-center mt-10 mb-10 ">
              <div className="text-red-800">
                *Only team captain need to register
                <br />
                <br />
                Captain name should be as per aadhar card
              </div>
              <br />
              <button onClick={handleSubmit}>
                <p className="register-text" ref={rtext}>
                  REGISTER
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Esports;
