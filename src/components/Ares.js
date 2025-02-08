import React from "react";
import "../css/Ares.css";
import ShinyText from './ShinyText';
import { Link } from 'react-router-dom';
import SpotlightCard from './SpotlightCard';  // Import the SpotlightCard component
import LogoWall from "./LogoWall";
import Gallery from "./Gallery";
const logoImgs = [
    { imgUrl: 'assets/images/logo1.webp', altText: "React Bits Logo" },
    { imgUrl: 'assets/images/logo2.webp', altText: "React Bits Logo" },
    { imgUrl: 'assets/images/logo3.png', altText: "React Bits Logo" },
    { imgUrl: 'assets/images/logo4.png', altText: "React Bits Logo" },
    { imgUrl: 'assets/images/logo5.webp', altText: "React Bits Logo" },
  ];

const Ares = () => {
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
      <div className="details-container">
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
          <SpotlightCard spotlightColor="rgba(3, 71, 166, 0.22)" key={card.heading}>
            <div className={`spotlight-content ${index % 2 === 0 ? "left-image" : "right-image"}`}>
              <div className="spotlight-text">
                <h3 className="card_head">Project Ares</h3>
                <p className="card_para">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ipsam minima nemo nulla dolorum rem, voluptatum voluptate tenetur, esse nisi explicabo aliquid magnam. Similique labore natus facere repellendus veniam voluptas expedita fugit, ullam ratione eos explicabo quasi maiores animi neque eveniet molestias incidunt eaque ipsum omnis, ipsam, magnam necessitatibus exercitationem. Quas quibusdam, dolores accusantium dolor neque enim vero mollitia asperiores ea esse iste quos nostrum tempore atque, accusamus explicabo dignissimos error blanditiis reiciendis fugit nesciunt molestiae eius pariatur iusto! Quod minus aliquam necessitatibus dolorem. Atque laboriosam, nobis dignissimos quaerat iste quia dolor nemo quibusdam officia porro ratione tenetur fugit voluptates.
                </p>
                <p className="card_para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis ipsam minima nemo nulla dolorum rem, voluptatum voluptate tenetur, esse nisi explicabo aliquid magnam. Similique labore natus facere repellendus veniam voluptas expedita fugit, ullam ratione eos explicabo quasi maiores animi neque eveniet molestias incidunt eaque ipsum omnis, ipsam, magnam necessitatibus exercitationem
                </p>
              </div>
            </div>
          </SpotlightCard>
        ))}
      </div>
      <Gallery/>
      <div style={{height: '200px', width: '100%', position: 'relative', marginTop: '50px', paddingBottom: '50px'}}>
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

export default Ares;
