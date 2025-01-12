import React, { useEffect } from "react";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles
import "../css/About.css";

const About = () => {
  useEffect(() => {
    // Initialize AOS with once: false to repeat animation on each scroll into view
    AOS.init({
      duration: 2000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Allows animation to trigger every time the section comes into view
      delay: 100, 
    });
  }, []);

  return (
    <div className="about-container">
      <div className="about_section">
        <div className="about_img" data-aos="fade-right">
          <img src="assets/images/about_img.jpg" alt="about-img" />
        </div>
        <div className="about_content" data-aos="fade-left">
          <h2 className="abt_heading">
            <span className="who">WHO</span> <span className="are-we">ARE WE</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
            mollitia nam, rem similique cum ipsum itaque voluptate! Laboriosam,
            quidem voluptas? Ab labore quas expedita ratione, ex deleniti!
            Consectetur, nostrum fuga. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, commodi?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
