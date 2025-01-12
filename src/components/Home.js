
import React, { useEffect } from 'react';
import "../css/Home.css"; // Your existing CSS for home page
import ShinyText from './ShinyText';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css';


const Home = () => {
    useEffect(() => {
      AOS.init({ duration: 3500, easing: 'ease-in-out', once: false }); // Initialize AOS with options
    }, []);
  
  return (
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

      <h1 className="main_heading" data-aos="fade-up" data-aos-duration="3000">
        PROJECT ARES
      </h1>
      <p className="zindex main_text" data-aos="fade-in" data-aos-duration="2000" data-aos-delay="2000">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione consectetur deleniti sapiente ipsa repellendus facilis, eius porro ea soluta.</p>

      {/* Button container with ShinyText inside */}
      <div className="shiny-button zindex" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="3000">
        <ShinyText
          text="Know More >"
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </div>
    </div>
  );
};

export default Home;
