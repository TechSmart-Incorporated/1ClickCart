import { useState } from 'react'
import logoMain from '../../assets/logo-main.svg'
import './navbar.css'

const navLinks = [
  { label: 'How It Works', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'The App', href: '#' },
  { label: 'For Business', href: 'https://business.1clickcart.com', external: true },
  { label: 'Deliver', href: '#' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <img src={logoMain} alt="" className="navbar-logo-img" />
          1ClickCart
        </a>

        {/* Desktop links */}
        <ul className="navbar-links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={`navbar-link ${activeLink === link.label ? 'active' : ''}`}
                onClick={() => setActiveLink(link.label)}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {link.label}
              </a>
            </li>
          ))}
          {/* CTA */}
          <li className="navbar-cta">
            <a href="https://store.1clickcart.com" target="_blank" rel="noopener noreferrer" className="navbar-btn">Shop as Guest</a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
          <span className={`bar ${menuOpen ? 'open' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar-mobile">
          <ul className="navbar-mobile-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`navbar-link ${activeLink === link.label ? 'active' : ''}`}
                  onClick={() => { setActiveLink(link.label); setMenuOpen(false) }}
                  {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-mobile-cta">
            <a href="https://store.1clickcart.com" target="_blank" rel="noopener noreferrer" className="navbar-btn w-full text-center">Shop as Guest</a>
          </div>
        </div>
      )}
    </nav>
  )
}
