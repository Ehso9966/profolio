import React from "react";
import "./Projects.css";
import Food_Delivery from "../../assets/images/Food_Delivery.png";
import coming_soon from "../../assets/images/coming_soon.jpg";

const Projects = () => {
  return (
    <div className="Projects">
      <div className="projectsContainer">
        <p className="pjTag">Projects</p>
        <div className="scrollContainer">
          <div className="project foodDelivery">
            <div className="top"><a>Project Name</a></div>
            <div className="middle"><img className="projectImg" src="https://infinitumdigital.com/wp-content/uploads/2015/07/shutterstock_122664079.jpg"/></div>
            <div className="bottom"><a className="projectDate">9.12.2024</a><button className="projectButton">view</button></div>
          </div>
          <div className="project foodDelivery">
            <div className="top"><a>Project Name</a></div>
            <div className="middle"><img className="projectImg" src="https://infinitumdigital.com/wp-content/uploads/2015/07/shutterstock_122664079.jpg"/></div>
            <div className="bottom"><a className="projectDate">9.12.2024</a><button className="projectButton">view</button></div>
          </div>
          <div className="project foodDelivery">
            <div className="top"><a>Project Name</a></div>
            <div className="middle"><img className="projectImg" src="https://infinitumdigital.com/wp-content/uploads/2015/07/shutterstock_122664079.jpg"/></div>
            <div className="bottom"><a className="projectDate">9.12.2024</a><button className="projectButton">view</button></div>
          </div>
          <div className="project foodDelivery">
            <div className="top"><a>Project Name</a></div>
            <div className="middle"><img className="projectImg" src="https://infinitumdigital.com/wp-content/uploads/2015/07/shutterstock_122664079.jpg"/></div>
            <div className="bottom"><a className="projectDate">9.12.2024</a><button className="projectButton">view</button></div>
          </div>
          <div className="project foodDelivery">
            <div className="top"><a>Project Name</a></div>
            <div className="middle"><img className="projectImg" src="https://infinitumdigital.com/wp-content/uploads/2015/07/shutterstock_122664079.jpg"/></div>
            <div className="bottom"><a className="projectDate">9.12.2024</a><button className="projectButton">view</button></div>
          </div>
          <div className="project foodDelivery">
            <div className="top"><a>Project Name</a></div>
            <div className="middle"><img className="projectImg" src="https://infinitumdigital.com/wp-content/uploads/2015/07/shutterstock_122664079.jpg"/></div>
            <div className="bottom"><a className="projectDate">9.12.2024</a><button className="projectButton">view</button></div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
