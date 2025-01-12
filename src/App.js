
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import './css/colors.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
