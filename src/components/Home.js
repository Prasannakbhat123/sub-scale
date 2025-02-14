import React from 'react';
import "../css/Home.css"; // Your existing CSS for home page
import ShinyText from './ShinyText';
import About from './About';
import Subsystem from './Subsystem';
import LogoWall from "./LogoWall";
const logoImgs = [
    // { imgUrl: 'assets/images/logo1.webp', altText: "React Bits Logo" },
    // { imgUrl: 'assets/images/logo2.webp', altText: "React Bits Logo" },
    // { imgUrl: 'assets/images/logo3.png', altText: "React Bits Logo" },
    // { imgUrl: 'assets/images/logo4.png', altText: "React Bits Logo" },
    // { imgUrl: 'assets/images/logo5.webp', altText: "React Bits Logo" },
    { imgUrl: 'assets/images/vega.png', altText: "Sponsor Logo" },
    { imgUrl: 'assets/images/vega.png', altText: "Sponsor Logo" },
    { imgUrl: 'assets/images/vega.png', altText: "Sponsor Logo" },
    { imgUrl: 'assets/images/vega.png', altText: "Sponsor Logo" },
    { imgUrl: 'assets/images/vega.png', altText: "Sponsor Logo" },
  ];

const Home = () => {
  return (
    <>
      <div className="home-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          onError={(e) => console.error("Video loading error:", e)}
        >
          <source src="/assets/videos/test2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <h1
          className="main_heading"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          PROJECT ARES
        </h1>

        <p
          className="zindex main_text"
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="2000"
        >
         Introducing Ares, Project Olympus' first rocket, powered by a Student Researched N3340-P motor, designed to reach 10,000 feet, with a GFRP and Aluminum structure and CanSat payload, featuring airbrakes and a pitot tube for ascent control.
        </p>

        {/* Button container with ShinyText inside */}
        <div
          className="shiny-button zindex"
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="3000"
        >
          <ShinyText
            text="Know More >"
            disabled={false}
            speed={3}
            className="custom-class"
          />
        </div>
      </div>

      {/* Rendering About and Subsystem Components */}
      <About />
      <Subsystem />
      <div style={{height: '200px', width: '100%', position: 'relative', paddingBottom: '50px'}}>
      <h2 className="sponsors_head">Our Sponsors</h2>
  <LogoWall
    items={logoImgs}
    direction='horizontal'
    pauseOnHover={true}
    size='clamp(8rem, 1rem + 20vmin, 25rem)'
    duration='60s'
    bgColor='#060606'
    bgAccentColor='#111111'
  />  
</div>
    </>
  );
};

export default Home;
