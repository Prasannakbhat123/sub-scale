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
