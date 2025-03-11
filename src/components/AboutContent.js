import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a passionate and dedicated freelance software developer with a strong focus on web development, automation, and e-commerce solutions. With extensive experience in creating and optimizing Shopify stores, helping businesses establish a robust online presence while streamlining their operations.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
            <div className="top">
                <img src={React1} 
                className="img"
                alt="img"/>
            </div>
            <div className="bottom">
                <img src={React2} 
                className="img"
                alt="img"/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent
