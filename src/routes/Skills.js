import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg2 from '../components/Heroimg2'
import Footer from '../components/Footer'
import SkillsCard from '../components/SkillsCard'

const Skills = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg2 heading="SKILLS." text="Tools i work with"/>
        <SkillsCard/>
        <Footer/>
    </div>
  )
}

export default Skills
