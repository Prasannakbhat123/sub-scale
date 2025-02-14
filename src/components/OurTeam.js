import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
// @ts-ignore
import SpotlightCard from './SpotlightCard.js';
import '../css/OurTeam.css';
import { Mail, LinkedinIcon, Github } from 'lucide-react'; // Import Lucide icons

import aayushImg from '../assets/images/team/Aayush Sinha.jpg';
import adiImg from '../assets/images/team/Adi.jpg';
import anushkaImg from '../assets/images/team/Anushka Prabhutendolkar.jpg';
import avnishImg from '../assets/images/team/Avnish Kaur.jpg';
import dhruvImg from '../assets/images/team/dhruv - Dhruv Jadhav.jpg';
import prasannaImg from '../assets/images/team/Prasanna.jpg';
import samrudhImg from '../assets/images/team/Samrudh Raja.jpg';
import sanskrutiImg from '../assets/images/team/Sanskruti Ginde.jpg';
import shawnImg from '../assets/images/team/Shawn Chris.jpg';
import shubhImg from '../assets/images/team/Shubhendu Arya.jpg';
import varunImg from '../assets/images/team/varunpv.jpg';
import vedantImg from '../assets/images/team/Vedant Totla.jpg';

const teamMembers = [
  { name: "Aayush Sinha", subsystem: "Management", image: aayushImg, email: "sinha.aayush.aayush@gmail.com", linkedin: "https://www.linkedin.com/in/aayush-sinha-64a631202?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: null },

  { name: "Adi Narayan R S", subsystem: "Payload", image: adiImg, email: "adinarayanrs777@gmail.com", linkedin: "https://www.linkedin.com/in/adi-narayan-059ab8241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: "https://github.com/Adi-Narayan" },

  { name: "Anushka Prabhutendolkar", subsystem: "Avionics", image: anushkaImg, email: "anushkaprabhutendolkar@gmail.com", linkedin: "www.linkedin.com/in/anushka-prabhutendolkar-928884289", github: "https://github.com/asprcode" },

  { name: "Avnish Kaur", subsystem: "Structures", image: avnishImg, email: "kauravnish28@gmail.com", linkedin: "http://linkedin.com/in/avnish-kaur-77984a211", github: null },

  { name: "Dhruv Jadhav", subsystem: "Propulsion", image: dhruvImg, email: "dhruvjadhav225@gmail.com", linkedin: "https://www.linkedin.com/in/dhruv-jadhav/", github: "https://github.com/dhruv-jadhav" },

  { name: "Prasanna", subsystem: "Management", image: prasannaImg, email: "prasanna@example.com", linkedin: "https://www.linkedin.com/in/prasanna-bhat-b259ba285/", github: "https://github.com/Prasannakbhat123" },

  { name: "Samrudh Raja", subsystem: "Aerodynamics", image: samrudhImg, email: "samrudh2204@gmail.com", linkedin: "https://www.linkedin.com/in/samrudh-raja-53657728b/", github: null },

  { name: "Sanskruti Ginde", subsystem: "Avionics", image: sanskrutiImg, email: "sanskrutiginde@gmail.com", linkedin: "https://www.linkedin.com/in/sanskruti-ginde-a512602b2/", github: "https://github.com/Sanskruti455" },

  { name: "Shawn Chris D Silva", subsystem: "Avionics", image: shawnImg, email: "shawnchris100@gmail.com", linkedin: "https://www.linkedin.com/in/shawn-chris-d-silva-12960a20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", github: "https://github.com/sirdeeznuts" },

  { name: "Shubhendu Arya", subsystem: "Management", image: shubhImg, email: "Shubhenduarya96@gmail.com", linkedin: "https://www.linkedin.com/in/shubhendu-arya-003041338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", github: null },

  { name: "Varun PV", subsystem: "Propulsion", image: varunImg, email: "varun@example.com", linkedin: "https://www.linkedin.com/in/varun-pv-91b20628a", github: null },

  { name: "Vedant Totla", subsystem: "Management", image: vedantImg, email: "varunpv44@gmail.com", linkedin: "https://linkedin.com/in/vedant", github: null },
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
            data-aos="fade-up" // Apply AOS animation
          >
            <i className="fa fa-lock"></i>
            <div className="image-container">
              <img
                src={member.image}
                alt={member.name}
                className="team_member_image"
                data-aos="fade-up" 
              />
   
            </div>
            <h2 className="team_member_name" data-aos="fade-up">{member.name}</h2>
            <p data-aos="fade-up">{member.subsystem}</p>

            <div className="social-icons" data-aos="fade-up" >
                {member.email && (
                  <a href={`mailto:${member.email}`} target="_blank" rel="noopener noreferrer">
                    <Mail size={20} />
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon size={20} />
                  </a>
                )}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer">
                    <Github size={20} />
                  </a>
                )}
              </div>
          </SpotlightCard>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
