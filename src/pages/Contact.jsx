import { useState } from 'react'

const offices = [
  {
    city: 'Nairobi',
    address: 'Postbank House, 16 Banda Street, Nairobi, Kenya',
    phones: ['+254 783 832 237', '+254 101 818 067'],
    email: 'info@company.com',
  },
  {
    city: 'Dubai',
    address: 'New Emirates NBD Bank Deira Building, Mezzanine Floor 18',
    phones: ['+971 54 547 0756'],
    email: 'uae@company.com',
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="relative bg-ink pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-grass" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-grass rounded-full blur-[120px] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="section-label text-grass mb-4">Contact Us</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Let's Start a Conversation
          </h1>
          <p className="font-body text-steel-light text-lg max-w-xl leading-relaxed">
            Whether you need loan syndication for your project, investment advisory, or wealth management services — reach out and we'll craft a strategy for you.
          </p>
        </div>
      </section>

      {/* ── OFFICES ───────────────────────────────────────────── */}
      <section className="py-16 bg-steel-50 border-b border-steel-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-px bg-steel-light">
            {offices.map((o) => (
              <div key={o.city} className="bg-steel-50 p-10">
                <p className="section-label mb-4">{o.city}</p>
                <p className="font-body text-sm text-steel leading-relaxed mb-4">{o.address}</p>
                <div className="space-y-1">
                  {o.phones.map((p) => (
                    <a
                      key={p}
                      href={`tel:${p.replace(/\s/g, '')}`}
                      className="block font-body text-sm text-ink font-medium hover:text-grass transition-colors"
                    >
                      {p}
                    </a>
                  ))}
                  <a
                    href={`mailto:${o.email}`}
                    className="block font-body text-sm text-ink hover:text-grass transition-colors mt-1"
                  >
                    {o.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM + SIDEBAR ────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <p className="section-label mb-4">Get in Touch</p>
            <h2 className="font-display text-3xl font-semibold text-ink mb-6 leading-tight">
              Book a Free Consultation
            </h2>
            <div className="divider-grass mb-6" />
            <p className="font-body text-sm text-steel leading-relaxed mb-10">
              Our specialists are ready to guide you — whether it's structuring a loan syndication deal, reviewing your investment portfolio, or planning your financial future.
            </p>

            <ul className="space-y-5">
              {[
                { icon: '✓', text: 'Free Initial Consultation' },
                { icon: '✓', text: 'Response within 24 hours' },
                { icon: '✓', text: 'Institutional-grade advisory' },
                { icon: '✓', text: 'Available globally' },
              ].map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-grass-50 text-grass text-xs flex items-center justify-center font-bold shrink-0">
                    {item.icon}
                  </span>
                  <span className="font-body text-sm text-ink">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 bg-steel-50 px-12">
                <span className="text-grass text-5xl mb-6">✓</span>
                <h3 className="font-display text-2xl font-semibold text-ink mb-3">Message Received</h3>
                <p className="font-body text-steel text-sm leading-relaxed max-w-xs">
                  Thank you for reaching out. One of our specialists will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <div className="bg-steel-50 p-10">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="font-body text-xs font-semibold text-ink uppercase tracking-widest block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-white border border-steel-light px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-grass transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-ink uppercase tracking-widest block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-white border border-steel-light px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-grass transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="font-body text-xs font-semibold text-ink uppercase tracking-widest block mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-white border border-steel-light px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-grass transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label className="font-body text-xs font-semibold text-ink uppercase tracking-widest block mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full bg-white border border-steel-light px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-grass transition-colors appearance-none"
                    >
                      <option value="">Select a service</option>
                      <option>Loan Syndication</option>
                      <option>Strategic Investments</option>
                      <option>Wealth Management</option>
                      <option>Financial Planning</option>
                      <option>Corporate Advisory</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-8">
                  <label className="font-body text-xs font-semibold text-ink uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-white border border-steel-light px-4 py-3 font-body text-sm text-ink focus:outline-none focus:border-grass transition-colors resize-none"
                    placeholder="Tell us about your project, goals, or questions..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="btn-primary w-full text-center"
                >
                  Send Message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT BAR ─────────────────────────────────── */}
      <section className="bg-ink py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-xs text-grass font-semibold tracking-widest uppercase mb-1">Direct Line</p>
            <p className="font-display text-white text-lg">+254 783 832 237 &nbsp;/&nbsp; +971 54 547 0756</p>
          </div>
          <div>
            <p className="font-body text-xs text-grass font-semibold tracking-widest uppercase mb-1">Email</p>
            <p className="font-body text-steel-light text-sm">info@company.com</p>
          </div>
          <div>
            <p className="font-body text-xs text-grass font-semibold tracking-widest uppercase mb-1">Availability</p>
            <p className="font-body text-steel-light text-sm">24/7 Global Coverage</p>
          </div>
        </div>
      </section>
    </main>
  )
}
