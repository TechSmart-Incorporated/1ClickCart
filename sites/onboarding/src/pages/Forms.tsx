import { Outlet } from 'react-router-dom'
import backgroundImage from '../assets/background.png'
import '../components/Forms/Form.css'
import '../components/Forms/Section1.css'
import '../components/LandingPage/LandingPage.css'

function Forms() {
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

      <main className="forms-shell">
        <div className="forms-panel">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default Forms
