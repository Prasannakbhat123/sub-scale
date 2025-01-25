import React, { useState } from 'react';
import '../css/Subsystem.css';

const Subsystem = () => {
  const data = [
    {
      image: 'assets/images/payload.png',
      title: 'Payload',
      subtitle: 'This is the subheading for the first image.',
      bottomRightTitle: 'Additional Info 1',
      bottomRightDescription: 'This is additional info related to the first image.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perspiciatis eligendi praesentium quis consequuntur tempora cumque a eius vero voluptatibus.',
      rightText:'Payload'
    },
    {
      image: 'assets/images/Propulsion.png',
      title: 'Aerodynamics',
      subtitle: 'This is the subheading for the second image.',
      bottomRightTitle: 'Additional Info 2',
      bottomRightDescription: 'This is additional info related to the second image.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perspiciatis eligendi praesentium quis consequuntur tempora cumque a eius vero voluptatibus.',
      rightText:'Aero'
    },
    {
      image: 'assets/images/Avionics.png',
      title: 'Avionics',
      subtitle: 'This is the subheading for the third image.',
      bottomRightTitle: 'Additional Info 3',
      bottomRightDescription: 'This is additional info related to the third image.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perspiciatis eligendi praesentium quis consequuntur tempora cumque a eius vero voluptatibus.',
      rightText:'Avionics'
    },
    {
      image: 'assets/images/Structures.png',
      title: 'Structures',
      subtitle: 'This is the subheading for the third image.',
      bottomRightTitle: 'Additional Info 3',
      bottomRightDescription: 'This is additional info related to the third image.Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis perspiciatis eligendi praesentium quis consequuntur tempora cumque a eius vero voluptatibus.',
      rightText:'Structures'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
  };

  return (
    <div className="container">
      <h2 className="subsys_main_heading">SUBSYSTEMS</h2>
      <div className="glass-box">
        {/* Logo on top-right corner */}
        <div className="logo-top-right">
          <img src="assets/images/main_logo.png" alt="Logo" className="logo-top-right-img" />
        </div>
  
        <div className="subs_image_container">
          <img src={data[currentIndex].image} alt="Subsystem" className="subs_image" />
        </div>
        <div className="bottom-left-content">
          <h3 className="bottom-left-title">{data[currentIndex].title}</h3>
          <p className="bottom-left-subtitle">{data[currentIndex].subtitle}</p>
          <div className="slider-arrows">
            {/* Left Arrow */}
            <svg
              className="arrow left"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              viewBox="0 0 24 24"
              onClick={prevSlide}
            >
              <path
                fillRule="evenodd"
                d="M13.729 5.575c1.304-1.074 3.27-.146 3.27 1.544v9.762c0 1.69-1.966 2.618-3.27 1.544l-5.927-4.881a2 2 0 0 1 0-3.088l5.927-4.88Z"
                clipRule="evenodd"
              />
            </svg>
  
            {/* Right Arrow */}
            <svg
              className="arrow right"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              viewBox="0 0 24 24"
              onClick={nextSlide}
            >
              <path
                fillRule="evenodd"
                d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="slanted-text">
  Project Ares&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;ThrustMIT
</div>
<div className="logo-bottom">
          <img src="assets/images/logo_main_cap.png" alt="Logo" className="logo-bottom-img" />
        </div>
        <div className="line-left">
          |
        </div>
        <div className="line-left-bottom">
          |
        </div>

        <div className="right-slanted-text">
        {data[currentIndex].rightText}
        </div>

      </div>
      <div className="bottom-right-box">
        <h3 className="bottom-right-title">{data[currentIndex].bottomRightTitle}</h3>
        <p className="bottom-right-description">{data[currentIndex].bottomRightDescription}</p>
      </div>
    </div>
  );
  
};

export default Subsystem;
