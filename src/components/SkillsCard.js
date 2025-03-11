import "./SkillsCardStyles.css";
import React from 'react';
import React2 from "../assets/react2.webp";

const SkillsCard = () => {
  return (
    <div className="skills-container">
      <div className="bars">
                    
                    <div className="bars-box">
                        <h3>HTML</h3>
                        <span>94%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar html-bar"></div>
                    </div>
                    
                    <div className="bars-box">
                        <h3>CSS</h3>
                        <span>84%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar css-bar"></div>
                    </div>
                    
                    <div className="bars-box">
                        <h3>JavaScript</h3>
                        <span>75%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar js-bar"></div>
                    </div>
                
                     <div className="bars-box">
                     <h3>Pythone</h3>
                     <span>78%</span>
                     <div className="light-bar"></div>
                     <div className="percentage-bar py-bar"></div>
                     </div>

                    <div className="bars-box">
                        <h3>AI/ML</h3>
                        <span>75%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar ai-bar"></div>
                    </div>
                
                     <div className="bars-box">
                        <h3>Shopify</h3>
                        <span>80%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar shopify-bar"></div>
                    </div>
        
                    <div className="bars-box">
                        <h3>React</h3>
                        <span>80%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar react-bar"></div>
                    </div>
                
                    <div className="bars-box">
                        <h3>Jquery</h3>
                        <span>74%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar jquery-bar"></div>
                    </div>
    
                    <div className="bars-box">
                        <h3>Blochain</h3>
                        <span>70%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar bloch-bar"></div>
                    </div>
                
                    <div className="bars-box">
                        <h3>VueJs</h3>
                        <span>94%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar vue-bar"></div>
                    </div>
                
                    <div className="bars-box">
                        <h3>Sql Database</h3>
                        <span>94%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar sql-bar"></div>
                    </div>
                
                    <div className="bars-box">
                        <h3>MongoDb</h3>
                        <span>90%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar mongo-bar"></div>
                    </div>
                
                    <div className="bars-box">
                        <h3>PostgressDb</h3>
                        <span>94%</span>
                        <div className="light-bar"></div>
                        <div className="percentage-bar pdb-bar"></div>
                    </div>

                </div>
                <div className="skills-img">
                    <img src={React2} alt=""/>
                </div>
    </div>
  )
}

export default SkillsCard
