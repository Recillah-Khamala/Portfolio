import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import SocialLinks from './components/SocialLinks';
import Stack from './components/Stack';

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Stack />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
