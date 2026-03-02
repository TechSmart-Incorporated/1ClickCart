import { useState } from 'react'

import Content from '../components/LandingPage/Content'
import Footer from '../components/LandingPage/Footer'
import Navbar from '../components/LandingPage/Navbar'
import backgroundImage from '../assets/background.png'
import '../components/LandingPage/LandingPage.css'

function Landing() {
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavigate = () => {
    setMenuOpen(false)
  }

  return (
    <div className="landing-shell">
      <div
        className="landing-background"
        style={{
          transform: 'scale(1.04)',
          backgroundImage: `url(${backgroundImage})`,
        }}
      />
      <div className="landing-overlay" />

      <Navbar
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onNavigate={handleNavigate}
      />

      <Content />

      <Footer />
    </div>
  )
}

export default Landing
