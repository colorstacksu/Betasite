
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CustomNavbar from './Navbar.jsx';
import HeroSection from './HeroSection.js';
import About from './About.jsx';
import ExecutiveBoard from './Eboard.jsx';
import Footer from './Footer.jsx';
import Events from './Events.jsx'
// function App() {
//   return (
//     <div className="App">
//       <CustomNavbar />
//         <HeroSection />
//       {/* Add more components here */}
//     </div>
//   );
 
// }
function App() {
  return (
    <Router>
      <div className="App" width="100%">
        <CustomNavbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/eboard" element={<ExecutiveBoard />} />
          <Route path="/events" element={<Events />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
