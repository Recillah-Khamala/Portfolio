import React from 'react'
import About from './components/About'
import Home from './components/Home'
import NavBar from './components/NavBar'
import SocialLinks from './components/SocialLinks'

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <SocialLinks />
    </div>
  )
}

export default App
