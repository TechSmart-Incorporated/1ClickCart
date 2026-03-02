const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Terms', href: '#terms-of-service' },
  { label: 'Get Started', href: '#about' },
  { label: 'Email Us', href: 'mailto:hello@techsmart.example' },
  { label: 'Support', href: 'mailto:support@techsmart.example' },
]

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        {footerLinks.map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
      <p>Developed &amp; Maintained by TechSmart Inc</p>
    </footer>
  )
}

export default Footer
