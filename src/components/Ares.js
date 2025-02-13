import React, { useEffect } from "react";
import "../css/Ares.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ShinyText from './ShinyText';
import { Link } from 'react-router-dom';
import SpotlightCard from './SpotlightCard';  // Import the SpotlightCard component
import LogoWall from "./LogoWall";
import Gallery from "./Gallery";

const logoImgs = [
  // { imgUrl: 'assets/images/logo1.webp', altText: "Sponsor Logo" },
  // { imgUrl: 'assets/images/logo2.webp', altText: "Sponsor Logo" },
  // { imgUrl: 'assets/images/logo3.png', altText: "Sponsor Logo" },
  // { imgUrl: 'assets/images/logo4.png', altText: "Sponsor Logo" },
  // { imgUrl: 'assets/images/logo5.webp', altText: "Sponsor Logo" },
  { imgUrl: 'assets/images/vega.png', altText: "Sponsor Logo" },
  { imgUrl: 'assets/images/vega.png', altText: "Sponsor Logo" },
  { imgUrl: 'assets/images/vega.png', altText: "Sponsor Logo" },
  { imgUrl: 'assets/images/vega.png', altText: "Sponsor Logo" },
  { imgUrl: 'assets/images/vega.png', altText: "Sponsor Logo" },
  { imgUrl: 'assets/images/vega.png', altText: "Sponsor Logo" },
];

const Ares = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Array of cards with different data
  const cardData = [
    {
      image: "/assets/images/Rayquaza.jpg",
      details: {
        "Weight": "Value 1",
        "Height": "Value 2",
        "Key 3": "Value 3",
      },
      heading: "Ares",
    },
  ];

  return (
    <>
      <div className="details-container" data-aos="fade-up">
        <div className="details-image-container">
          <img src={cardData[0].image} alt="Card" className="details-image" />
        </div>
        <div className="details-table-container">
          <h2 className="table-heading">{cardData[0].heading}</h2>
          <table className="details-table">
            <thead>
              <tr>
                <th className="key_cell">Key</th>
                <th className="key_cell">Value</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(cardData[0].details).map(([key, value]) => (
                <tr key={key}>
                  <td className="key_cell">{key}</td>
                  <td className="key_cell">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="btn_cont">
            <div className="shiny-button zindex">
              <Link to="/team">
                <ShinyText text="Team Details >" disabled={false} speed={3} className="custom-class" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Multiple spotlight cards with alternating image positions */}
      <div className="cards-container">
        {cardData.map((card, index) => (
          <SpotlightCard spotlightColor="rgba(3, 71, 166, 0.22)" key={card.heading} data-aos="fade-up">
            <div className={`spotlight-content ${index % 2 === 0 ? "left-image" : "right-image"}`}>
              <div className="spotlight-text">
                <h3 className="card_head" data-aos="fade-up">Project Ares</h3>
                <p className="card_para" data-aos="fade-in" data-aos-delay="500">
  Project ARES is an ambitious endeavor focused on the development of a high-performance sounding rocket. It integrates various subsystems, including payload deployment, propulsion, avionics, and structural integrity. The team is exploring innovative technologies like stereo vision for object detection, alongside testing advanced rocket motors, building a reliable flight computer, and ensuring the strength and durability of the airframe. By combining engineering precision with cutting-edge solutions, Project ARES strives to push the limits of aerospace exploration and mission success, creating new possibilities for future space endeavors.
</p>

<p className="card_para" data-aos="fade-in" data-aos-delay="500">
  The propulsion subsystem is dedicated to testing and characterizing various propellant types, alongside the development of high-performance rocket motors. The avionics team is focused on processing sensor data, detecting apogee, and ensuring precise parachute deployment during flight. Meanwhile, the structures team is responsible for designing, analyzing, and manufacturing the rocket's airframe, ensuring its integrity through a combination of structural simulations and hands-on fabrication. Together, these efforts aim to create a reliable and efficient launch vehicle capable of achieving mission goals with precision and safety.
</p>

              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
      <Gallery />
      <div style={{ height: '200px', width: '100%', position: 'relative', marginTop: '50px', paddingBottom: '50px' }}>
        <h2 className="sponsors_head" data-aos="fade-up">Our Sponsors</h2>
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

export default Ares;
