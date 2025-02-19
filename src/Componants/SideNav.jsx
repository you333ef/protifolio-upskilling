import React, { useState } from "react";
import SideImg from "../assets/project-assets/about-BgAkqdr2.jpg";
import { Link } from "react-router-dom";
import "./side.css";
const sideImgUrl = new URL('../assets/project-assets/about-BgAkqdr2.jpg', import.meta.url).href;


const SideNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = function() {
  return  setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
    
      <button onClick={toggleSidebar} className="toggle-btn">☰</button>

      <div className={`Elkpeer text-center d-block jc-center ${isOpen ? "open" : ""}`}>
        <div className="Top-side">
          <div className="SideImg"style={{ backgroundImage: `url(${sideImgUrl})` }}></div>
          <div className="details">
            <h4 id="Name-Person">Jackson Ford</h4>
            <h6>
              UI/UX/DESIGNER <span className="colored">IN</span> <br />
              <span className="colored MMM">PHILIPPINES</span>
            </h6>
          </div>
        </div>

       
        <button onClick={toggleSidebar} className="close-btn">✖</button>

        <div className="buttin-side">
          <ul>
            <li><a href="/" id="Main-memper">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/experience">Experience</a></li>
            <li><a href="/work">Work</a></li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideNav;
