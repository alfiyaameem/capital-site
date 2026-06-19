import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Contact', to: '/contact' },
  ]

  const isActive = (to) =>
    to === '/' ? location.pathname === '/' : location.pathname.startsWith(to)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm border-b border-steel-light' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* Logo placeholder — replace with <img src="/logo.svg" ... /> */}
          <div className="w-10 h-10 bg-grass flex items-center justify-center">
            <span className={`text-white font-display font-bold text-lg`}>C</span>
          </div>
          <span
            className={`font-display font-semibold text-xl tracking-tight transition-colors ${
              scrolled ? 'text-ink' : 'text-white'
            }`}
          >
            Capital Group
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm font-medium tracking-wide transition-colors ${
                isActive(link.to)
                  ? 'text-grass'
                  : scrolled
                  ? 'text-ink hover:text-grass'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary">
            Get Started
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              menuOpen ? 'rotate-45 translate-y-2' : ''
            } ${scrolled ? 'bg-ink' : 'bg-white'}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              menuOpen ? 'opacity-0' : ''
            } ${scrolled ? 'bg-ink' : 'bg-white'}`}
          />
          <span
            className={`block w-6 h-0.5 transition-all duration-200 ${
              menuOpen ? '-rotate-45 -translate-y-2' : ''
            } ${scrolled ? 'bg-ink' : 'bg-white'}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-steel-light px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm font-medium py-2 border-b border-steel-50 ${
                isActive(link.to) ? 'text-grass' : 'text-ink'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary text-center mt-2">
            Get Started
          </Link>
        </div>
      )}
    </header>
  )
}
