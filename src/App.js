import React from 'react';
import './App.css';
import Cards from './components/Cards';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';




function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <div className="cards">
      <Cards />
      </div>
    </div>
  );
}

export default App;
