import React from 'react';
import model from '../assets/model4.jpg';
import './styles.css'; // Import your CSS file
import Nav from './Navbar/Nav'
import Testimonials from './Home/Testimonials'

const About = () => {
  return (
   
    <>
     <Nav/>
    <h1 style = {{fontFamily : "fantasy" , fontSize : '30px' , textAlign : "center" , margin : "50px"}}>About Us</h1>
    <div className="about-container">
      <img src={model} alt="about-img" className="about-image" />
      <div className="about-content">
  <h1>About Glowly,

Glowly is your partner in achieving natural beauty through advanced skincare and body care products. Our journey began with a vision: making premium products accessible to all. We offer a diverse range of products tailored to different skin types, prioritizing your individuality and satisfaction. With a commitment to innovation, we're dedicated to enhancing your skincare and body care routine. Explore our online platform for convenience, and let us be part of your beauty journey. Thank you for choosing Nargo.

</h1>
      </div>
    </div>
    <Testimonials/>
    </>
  );
};

export default About;
