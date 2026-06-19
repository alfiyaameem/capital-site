import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-grass flex items-center justify-center">
              <span className="text-white font-display font-bold">C</span>
            </div>
            <span className="font-display font-semibold text-lg">Capital Group</span>
          </div>
          <p className="font-body text-steel-light text-sm leading-relaxed mb-6">
            A global financial services firm specializing in loan syndication, strategic investments, and wealth management for institutional and individual clients.
          </p>
          <div className="divider-grass" />
        </div>

        {/* Offices */}
        <div>
          <p className="section-label text-grass mb-6">Offices</p>
          <div className="space-y-6">
            <div>
              <p className="font-body text-sm font-medium text-white mb-1">Nairobi</p>
              <p className="font-body text-xs text-steel-light leading-relaxed">
                Postbank House, 16 Banda Street<br />
                Nairobi, Kenya
              </p>
              <p className="font-body text-xs text-steel mt-1">+254 783 832 237</p>
              <p className="font-body text-xs text-steel">info@company.com</p>
            </div>
            <div>
              <p className="font-body text-sm font-medium text-white mb-1">Dubai</p>
              <p className="font-body text-xs text-steel-light leading-relaxed">
                Emirates NBD Bank Deira Building<br />
                Mezzanine Floor 18
              </p>
              <p className="font-body text-xs text-steel mt-1">+971 54 547 0756</p>
              <p className="font-body text-xs text-steel">uae@company.com</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <p className="section-label text-grass mb-6">Quick Links</p>
          <ul className="space-y-3">
            {[
              { label: 'Home', to: '/' },
              { label: 'Services', to: '/services' },
              { label: 'Contact', to: '/contact' },
            ].map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="font-body text-sm text-steel-light hover:text-grass transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="section-label text-grass mb-6">Services</p>
          <ul className="space-y-3">
            {[
              'Loan Syndication',
              'Strategic Investments',
              'Wealth Management',
              'Financial Planning',
              'Tax Optimization',
              'Estate Planning',
              'Corporate Advisory',
            ].map((s) => (
              <li key={s}>
                <Link
                  to="/services"
                  className="font-body text-sm text-steel-light hover:text-grass transition-colors"
                >
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-ink-soft">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-steel">
            © {new Date().getFullYear()} Capital Group. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {['Terms of Service', 'Privacy Policy', 'Disclaimer'].map((item) => (
              <span
                key={item}
                className="font-body text-xs text-steel hover:text-grass cursor-pointer transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
