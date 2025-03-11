import { FaHome, FaMailBulk, FaPhone } from "react-icons/fa";
import "./FooterStyles.css";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillCloseCircle
} from "react-icons/ai";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
         <div className="left">
            <div className="location">
                <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                <div>
                    <p>Phase 1 Estate.</p>
                    <p>Lagos</p>
                </div>
            </div>

            <div className="phone">
                <h4>
                <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                09063938408
                </h4>
            </div>

            <div className="email">
                <h4>
                   <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                   info@gmail.com
                </h4>
            </div>

         </div>

         <div className="right">
            <h4>About the company</h4>
            <p>This is me David Uveida. CEO & Founder of Clickview. I enjoy discussing
                new projects and design challenges.
            </p>
            <div className="social">

              <a><AiFillGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
              <a><AiFillCloseCircle size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
              <a><AiFillLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/></a>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Footer
