import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimg2 from '../components/Heroimg2';
import ServiceCom from '../components/ServiceCom';

const Services = () => {
  return (
    <div>
      <Navbar/>
      <Heroimg2 heading="SERVICES." text="Our services"/>
      <ServiceCom/>
      <Footer/>
    </div>
  )
}

export default Services
