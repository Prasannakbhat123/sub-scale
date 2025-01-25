import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import OurTeam from './components/OurTeam';
import Subsystem from './components/Subsystem';
import './css/colors.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Importing React Router
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import React from 'react';

function App() {
  // Initialize AOS on component mount
  React.useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: false, // Allows animation to trigger every time the section comes into view
      delay: 100, // Delay before the animation starts
    });

    // You can include a cleanup function to refresh AOS on route changes, if needed
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <Router>  
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/team" element={<OurTeam />} />  
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
