import React, { useState, useEffect } from 'react';
import '../css/Subsystem.css';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles

const Subsystem = () => {
  const data = [
    {
      image: 'assets/images/payload.png',
      title: 'Payload',
      subtitle: 'Exploring Stereo Vision for Object Detection',
      bottomRightTitle: 'Stereo Vision',
      bottomRightDescription: 'This project aims to explore the feasibility of using stereo vision as an alternative to LiDAR for object detection in a dynamic environment, such as those experienced during the flight of a sounding rocket. The experiment will involve mounting a stereo vision system on a spinning platform inside the CanSat. The computation system will create a depth map from which the raspberry Pi AI kit will perform object detection of certain objects dangled from the top plate of the CanSat.',
      rightText: 'Payload'
    },
    {
      image: 'assets/images/Propulsion.png',
      title: 'Propulsion',
      subtitle: 'Rocket Motor Development and Testing',
      bottomRightTitle: 'Propellant Characterization',
      bottomRightDescription: 'The propulsion subsystem is responsible for making the rocket motor that will propel our rockets. Our work includes characterization of different propellant formations, simulating our prototypes and conducting static fires of our motors.',
      rightText: 'Propulsion'
    },
    {
      image: 'assets/images/Aero.png',
      title: 'Aerodynamics',
      subtitle: 'Rocket Motor Development and Testing',
      bottomRightTitle: 'Rocket Motor',
      bottomRightDescription: 'The Aerodynamics Subsystem ensures the rocket stays on course and operates efficiently. It includes CFD simulations to analyze aerodynamic forces and designs critical components like the nosecone and fins. The nosecone has a tangent ogive shape with a 3:1 fineness ratio, while four trapezoidal fins with a square cross-section and 3.2 mm thickness provide stability. This subsystem also manages the recovery system, using a single-bay dual event system with tender descenders.',
      rightText: 'Aerodynamics',
      subheading: 'Aerodynamic Design & Stability'
    },
    
    {
      image: 'assets/images/Avionics.png',
      title: 'Avionics',
      subtitle: 'Building the Flight Computer',
      bottomRightTitle: 'Sensor Data Processing',
      bottomRightDescription: 'The avionics subsystem works on building the flight computer on the sounding rocket. It works on getting data from various sensors and processing and analysing it to detect apogee of the rocket and trigger parachute deployment. Apart from this we are working on implementing control systems through airbrakes, and live data telemetry.',
      rightText: 'Avionics'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');
  const [intervalId, setIntervalId] = useState(null); // To keep track of interval

  // Function to go to the next slide
  const nextSlide = () => {
    setFadeClass('fade-out'); // Fade out the current slide

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length); // Update index
      setFadeClass('fade-in'); // Fade in the new slide
    }, 500); // Wait for the fade-out to finish
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setFadeClass('fade-out'); // Fade out the current slide

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length); // Update index
      setFadeClass('fade-in'); // Fade in the new slide
    }, 500); // Wait for the fade-out to finish
  };

  // Reset the auto slide interval whenever the user interacts
  const resetAutoSlideInterval = () => {
    if (intervalId) clearInterval(intervalId); // Clear the previous interval

    const newIntervalId = setInterval(nextSlide, 5000); // Set a new interval to change slide every 5 seconds
    setIntervalId(newIntervalId); // Store the new interval ID
  };

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Allows animation to trigger every time the section comes into view
    });

    // Start the auto slide interval when the component mounts
    const initialIntervalId = setInterval(nextSlide, 10000);
    setIntervalId(initialIntervalId); // Store the interval ID

    return () => clearInterval(initialIntervalId); // Clean up the interval when the component unmounts
  }, []);

  // Auto slide change after 10 seconds if the user doesn't interact
  useEffect(() => {
    // Whenever the currentIndex changes, we reset the interval to restart the 10 seconds countdown
    resetAutoSlideInterval();
  }, [currentIndex]);

  return (
    <div className="container" id='subsystem'>
      <h2 className="subsys_main_heading" data-aos="fade-up">SUBSYSTEMS</h2>

      <div className="glass-box">
        {/* Logo on top-right corner */}
        <div className="logo-top-right" data-aos="fade-left" data-aos-delay="300">
          <img src="assets/images/main_logo.png" alt="Logo" className="logo-top-right-img" />
        </div>

        <div className={`subs_image_container ${fadeClass}`}>
          <img src={data[currentIndex].image} alt="Subsystem" className="subs_image" data-aos="zoom-in" />
        </div>

        <div className="bottom-left-content">
          <h3 className="bottom-left-title" data-aos="fade-right">{data[currentIndex].title}</h3>
          <p className="bottom-left-subtitle" data-aos="fade-right" data-aos-delay="500">{data[currentIndex].subtitle}</p>

          <div className="slider-arrows">
            {/* Left Arrow */}
            <svg
              className="arrow left"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="white"
              viewBox="0 0 24 24"
              onClick={() => { prevSlide(); resetAutoSlideInterval(); }}
              data-aos="fade-up"
              data-aos-delay="1000"
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
              onClick={() => { nextSlide(); resetAutoSlideInterval(); }}
              data-aos="fade-up"
              data-aos-delay="1000"
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
          Project Ares&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;Team Olympus
        </div>

        <div className="logo-bottom" data-aos="fade-up" data-aos-delay="2000">
          <img src="assets/images/logo_main_cap.png" alt="Logo" className="logo-bottom-img" />
        </div>

        <div className="line-left" >|</div>
        <div className="line-left-bottom">|</div>

        <div className="right-slanted-text" >
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
