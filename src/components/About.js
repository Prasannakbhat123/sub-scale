import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about_section">
        <div className="about_img">
          <img src="assets/images/about_img.jpg" alt="about-img" />
        </div>
        <div className="about_content">
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
