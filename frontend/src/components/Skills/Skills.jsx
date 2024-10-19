import React from "react";
import "./Skills.css";
import Html_Logo from "../../assets/images/Html_Logo.png";
import Css_Logo from "../../assets/images/Css_Logo.png";
import Js_Logo from "../../assets/images/Js_Logo.png";
import React_Logo from "../../assets/images/React_Logo.png";
import Github_Logo from "../../assets/images/Github_Logo.png";
import Nodejs_Logo from "../../assets/images/Nodejs_Logo.png";

const Skills = () => {
  return (
    <div className="Skills">
      <p className="title">Skills</p>
      <div className="skillsContainer">
        <div className="skillDiv">
          <img src={Html_Logo} />
          <div className="split"></div>
          <div className="level Html">
            <div></div>
          </div>
          <p>80%</p>
        </div>
        <div className="skillDiv ">
          <img src={Css_Logo} />
          <div className="split"></div>
          <div className="level Css">
            <div></div>
          </div>
          <p>70%</p>
        </div>
        <div className="skillDiv ">
          <img src={Js_Logo} />
          <div className="split"></div>
          <div className="level Js">
            <div></div>
          </div><p>70%</p>
        </div>
        <div className="skillDiv ">
          <img src={Nodejs_Logo} />
          <div className="split"></div>
          <div className="level Nodejs">
            <div></div>
          </div>
          <p>50%</p>
        </div>
        <div className="skillDiv ">
          <img src={React_Logo} />
          <div className="split"></div>
          <div className="level React">
            <div></div>
          </div>
          <p>60%</p>
        </div>
        <div className="skillDiv ">
        <img src={Github_Logo} />
          <div className="split"></div>
          <div className="level Github">
            <div></div>
          </div>
          <p>30%</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
