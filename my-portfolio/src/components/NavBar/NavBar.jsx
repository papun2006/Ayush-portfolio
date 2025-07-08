//Import Sections
import React from "react";
import {useState} from "react";
import "./NavBar.css";
import AnchorLinks from "react-anchor-link-smooth-scroll";


const NavBar = () => {
  const [menu,setMenu]=useState("home")
  return (
    <div className="container-box">
      <div className="container d-flex align-items-center justify-content-between navBar">
        <div className="logos">
          <span>Ayush Kumar</span>
        </div>
        <div className="navLinks ">
          
          <ul className="navmenu d-flex align-items-center">
         
            <li ><AnchorLinks className={menu==="home"?"active-links":"hover-links"} href="#home" onClick={()=>setMenu("home")}>Home</AnchorLinks></li>
            <li ><AnchorLinks className={menu==="about"?"active-links":"hover-links"} href="#about" onClick={()=>setMenu("about")}>About</AnchorLinks></li>
            <li ><AnchorLinks className={menu==="skills"?"active-links":"hover-links"} href="#skills" onClick={()=>setMenu("skills")}>Skills</AnchorLinks></li>
            <li ><AnchorLinks className={menu==="project"?"active-links":"hover-links"} href="#project" onClick={()=>setMenu("project")}>Project</AnchorLinks></li>
            <li ><AnchorLinks className={menu==="contact"?"active-links":"hover-links"} href="#contact" onClick={()=>setMenu("contact")}>Contact</AnchorLinks></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
