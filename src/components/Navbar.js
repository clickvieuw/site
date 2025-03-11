import { Link } from "react-router-dom";
import "./NavbarStyles.css"; 
import { BsFillMoonStarsFill } from "react-icons/bs";
import React, { useState, useContext } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";



const Navbar = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);

    const [click, setClick] = useState(false);
    const handleClick = ()=> setClick(!click);
    const [color, setColor] = useState(false);
    const changeColor = ()=> {
      if(window.scrollY >= 100){
        setColor(true);
      }else{
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor)
  return (
  
      <div className={color ? "header header-bg":"header"}>
    <Link to="/">
        <h1>ClickVIEW</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>

      <li onClick={toggleTheme}><BsFillMoonStarsFill className="toggle"/>{theme === "light" ? "Light Mode" : "Dark Mode"}</li>

        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/Skills">Skills</Link>
        </li>
        <li>
            <Link to="/Services">Services</Link>
        </li>
        <li>
            <Link to="/Project">Project</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? ( <FaTimes size={20} style={{color:"#fff"}}/>):
           (<FaBars size={20} style={{color:"#fff"}}/>)   
         }   
      </div>
    </div>

  )
}

export default Navbar
