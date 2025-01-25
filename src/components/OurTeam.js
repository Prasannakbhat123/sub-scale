import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
// @ts-ignore
import SpotlightCard from './SpotlightCard.js';
import '../css/OurTeam.css';
import aayushImg from '../assets/images/team/Aayush Sinha.jpg';
import adiImg from '../assets/images/team/Adi.jpg';
import anushkaImg from '../assets/images/team/Anushka Prabhutendolkar.jpg';
import avnishImg from '../assets/images/team/Avnish Kaur.jpeg';
import dhruvImg from '../assets/images/team/dhruv - Dhruv Jadhav.jpg'; 
import prasannaImg from '../assets/images/team/Prasanna.jpg';
import samrudhImg from '../assets/images/team/Samrudh Raja.jpg';
import sanskrutiImg from '../assets/images/team/Sanskruti Ginde.jpg';
import shawnImg from '../assets/images/team/Shawn Chris.jpeg';
import shubhImg from '../assets/images/team/Shubhendu Arya.jpg';
import varunImg from '../assets/images/team/varunpv.jpg';
import vedantImg from '../assets/images/team/Vedant Totla.jpeg';

const teamMembers = [
  { name: "Aayush sinha", subsystem: "Management ", image: aayushImg },
  { name: "Adi Narayan R S ", subsystem: "Payload", image: adiImg },
  { name: "Anushka Prabhutendolkar", subsystem: "Avionics", image: anushkaImg },
  { name: "Avnish Kaur", subsystem: "Structures", image: avnishImg },
  { name: "Dhruv Jadhav", subsystem: "Propulsion", image: dhruvImg },
  { name: "Prasanna", subsystem: "Management", image: prasannaImg },
  { name: "Samrudh Raja", subsystem: "Aerodynamics", image: samrudhImg },
  { name: "Sanskruti Ginde", subsystem: "Avionics", image: sanskrutiImg },
  { name: "Shawn Chris D Silva", subsystem: "Avionics", image: shawnImg },
  { name: "Shubhendu arya", subsystem: "Management ", image: shubhImg },
  { name: "Varun pv", subsystem: "Propulsion ", image: varunImg },
  { name: "Vedant Totla", subsystem: "Management", image: vedantImg },
];

const OurTeam = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Animation only happens once
    });

    // Refresh AOS to ensure it works for already rendered elements
    AOS.refresh();
  }, []);

  return (
    <div className="our-team-container">
      <h2 className="team_heading">
        <span className="our">OUR</span> <span className="team">TEAM</span>
      </h2>
      <div className="card-container">
        {teamMembers.map((member, index) => (
          <SpotlightCard
            key={index}
            className="custom-spotlight-card"
            spotlightColor="rgba(84, 84, 84, 0.2)"
            data-aos="fade-up" // Apply AOS animatio
          >
            <i className="fa fa-lock"></i>
            <div className="image-container">
              <img
                src={member.image}
                alt={member.name}
                className="team_member_image"
                data-aos="fade-up" 
              />
              <div className="social-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
              </div>
            </div>
            <h2 className="team_member_name" data-aos="fade-up" // Apply AOS animation
              >{member.name}</h2>
            <p data-aos="fade-up" // Apply AOS animation
              >{member.subsystem}</p>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
