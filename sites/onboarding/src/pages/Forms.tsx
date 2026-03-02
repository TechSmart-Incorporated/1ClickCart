import backgroundImage from '../assets/background.png'
import Section1 from '../components/Forms/Section1'
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
          <Section1 />
        </div>
      </main>
    </div>
  )
}

export default Forms
