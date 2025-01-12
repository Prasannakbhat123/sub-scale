import React from 'react';
import "../css/Home.css"; // Your existing CSS for home page
import ShinyText from './ShinyText'; // Import ShinyText component

const Home = () => {
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

      <h1 className="main_heading">
        BEYOND GRAVITY
      </h1>
      <p className='zindex main_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione consectetur deleniti sapiente ipsa repellendus facilis, eius porro ea soluta.</p>

      {/* Button container with ShinyText inside */}
      <div className="shiny-button zindex">
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
