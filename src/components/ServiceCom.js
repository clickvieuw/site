import "./ServiceComStyles.css";
import React from 'react';

const ServiceCom = () => {
  return (
    <div className="services-container">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"></link>

                    <div className="services-box">
                    <i className="bx bx-code-alt"></i>
                    <h3>Web <br/>Development</h3>
                    <a href="#">Learn more</a>
                </div>
            
                <div className="services-box">
                    <i className="bx bx-server"></i>
                    <h3>Backend <br/>Development</h3>
                    <a href="#">Learn more</a>
                </div>
                
                <div className="services-box">
                    <i className="bx bx-brush"></i>
                    <h3>UI/UX <br/>Design</h3>
                    <a href="#">Learn more</a>
                </div>
                
                <div className="services-box">
                    <i className="bx bx-cog"></i>
                    <h3>Automation and <br/>Business tailored solution</h3>
                    <a href="#">Learn more</a>
                </div>
                
                <div className="services-box">
                    <i className="bx bx-bar-chart"></i>
                    <h3>Marketing <br/>Strategy</h3>
                    <a href="#">Learn more</a>
                </div>
                
                <div className="services-box">
                    <i className="bx bx-support"></i>
                    <h3>Consultation <br/>Services</h3>
                    <a href="#">Learn more</a>
                </div>
    </div>
  )
}

export default ServiceCom
