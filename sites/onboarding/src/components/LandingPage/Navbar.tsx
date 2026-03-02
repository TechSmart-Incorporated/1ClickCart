import { FiMenu, FiX } from 'react-icons/fi'

type NavbarProps = {
  menuOpen: boolean
  onToggleMenu: () => void
  onNavigate: () => void
}

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Terms of Service', href: '#terms-of-service' },
]

function Navbar({ menuOpen, onToggleMenu, onNavigate }: NavbarProps) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#home" onClick={onNavigate}>
          TechSmart
        </a>

        <nav className="site-nav site-nav--desktop" aria-label="Primary">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={onNavigate}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={onToggleMenu}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <div
        className={`mobile-nav ${menuOpen ? 'mobile-nav--open' : ''}`}
        id="mobile-navigation"
      >
        <nav className="site-nav site-nav--mobile" aria-label="Mobile">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={onNavigate}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
