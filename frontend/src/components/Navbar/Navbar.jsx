import React, { useState } from "react";
import "./Navbar.css";
import logoImg from "../../assets/images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState("");

  return (
    <>
      <div className="Navbar">
        <div className="navLeft">
          <img src={logoImg} />
        </div>
        <div className="navCenter">
          <ul>
            <li
              onClick={() => setActive("Home")}
              className={active == "Home" ? "active" : ""}
            >
              Home
            </li>
            <li
              onClick={() => setActive("Skill")}
              className={active == "Skill" ? "active" : ""}
            >
              Skill
            </li>
            <li
              onClick={() => setActive("Projects")}
              className={active == "Projects" ? "active" : ""}
            >
              Projects
            </li>
            <li
              onClick={() => setActive("Contact")}
              className={active == "Contact" ? "active" : ""}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="navRight">
          <div className="rightButtom">Sign Up</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
