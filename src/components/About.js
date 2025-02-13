import React from "react";
import "../css/About.css"; // Your existing CSS for About page

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about_section">
        <div className="about_img" data-aos="fade-right">
          <img src="assets/images/rocket.jpg" alt="about-img" />
        </div>
        <div className="about_content" data-aos="fade-left">
          <h2 className="abt_heading">
            <span className="who">WHO</span> <span className="are-we">ARE WE</span>
          </h2>
          <p>
          Project ARES is focused on developing a high-performance sounding rocket. The propulsion team tests propellants and advances rocket motor technology, while avionics processes sensor data for apogee detection and parachute deployment. The structures team designs and builds the airframe, ensuring its integrity. Combining innovation and engineering, Project ARES aims to push the boundaries of aerospace exploration.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
