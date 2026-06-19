import { Link } from 'react-router-dom'

const coreServices = [
  {
    title: 'Loan Syndication',
    min: '$10M+ minimum funding',
    desc: 'We structure and syndicate large-scale loans for high-impact projects across construction, oil & gas, real estate, telecom, and renewable energy. From pitch to deployment, we manage the full lifecycle.',
    points: ['Project assessment & validation', 'Investor matching & outreach', 'Deal structuring & legal coordination', 'Disbursement & monitoring'],
  },
  {
    title: 'Strategic Investments',
    min: 'Equity, Debt & Alternatives',
    desc: 'We identify and execute cross-sector investment opportunities with disciplined due diligence. Our team manages equity, debt, and alternative asset strategies across global markets.',
    points: ['Sector research & opportunity sourcing', 'Portfolio construction & management', 'Co-investment with institutional partners', 'Ongoing performance reporting'],
  },
  {
    title: 'Wealth Management',
    min: 'Individual & Institutional',
    desc: 'Tailored asset management for individuals and institutions — covering retirement, estate, tax, and growth strategies designed to preserve and compound wealth across generations.',
    points: ['Personalized financial planning', 'Retirement & estate strategy', 'Tax optimization', 'Multi-generational wealth transfer'],
  },
]

const planTiers = [
  { name: 'Financial Planning', from: '$10K', color: 'border-steel-light' },
  { name: 'Retirement Planning', from: '$25K', color: 'border-steel-light' },
  { name: 'Tax Optimization', from: '$15K', color: 'border-steel-light' },
  { name: 'Estate Planning', from: '$50K', color: 'border-grass' },
]

const consultTypes = [
  {
    title: 'Project Financing Consultation',
    desc: 'Discuss loan syndication options for your Construction, Oil & Gas, or Infrastructure project.',
  },
  {
    title: 'Investment Strategy Session',
    desc: 'Review your portfolio and explore new investment opportunities across global markets.',
  },
  {
    title: 'Wealth Planning Advisory',
    desc: 'Comprehensive financial planning including retirement, estate, and tax strategies.',
  },
  {
    title: 'Corporate Advisory',
    desc: 'M&A guidance, capital restructuring, and strategic business planning services.',
  },
]

const steps = [
  { n: '01', title: 'Initial Assessment', time: '30 mins', desc: 'We discuss your goals, current situation, and specific needs in an introductory call.' },
  { n: '02', title: 'Expert Analysis', time: '1–2 days', desc: 'Our team reviews your case and develops preliminary recommendations and strategies.' },
  { n: '03', title: 'Strategy Presentation', time: '1 hour', desc: 'Detailed presentation of our proposed solution and action plan tailored to your goals.' },
  { n: '04', title: 'Implementation', time: 'Ongoing', desc: 'Continuous guidance and support as we execute your customized financial strategy.' },
]

export default function Services() {
  return (
    <main>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section className="relative bg-ink pt-40 pb-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-1 h-full bg-grass" />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-grass rounded-full blur-[120px] opacity-20" />
        <div className="relative max-w-7xl mx-auto px-6">
          <p className="section-label text-grass mb-4">Our Services</p>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-2xl">
            Comprehensive Financial Solutions
          </h1>
          <p className="font-body text-steel-light text-lg max-w-xl leading-relaxed">
            Tailored to your unique needs and goals — whether you're a project owner seeking capital, an investor building a portfolio, or an individual managing wealth.
          </p>
        </div>
      </section>

      {/* ── CORE SERVICES ─────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Core Services</p>
          <h2 className="font-display text-4xl font-semibold text-ink mb-14 leading-tight">
            Three Integrated Pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-steel-light">
            {coreServices.map((s) => (
              <div key={s.title} className="bg-white p-10 flex flex-col">
                <span className="font-body text-xs text-grass font-semibold tracking-widest uppercase mb-6">{s.min}</span>
                <h3 className="font-display text-2xl font-semibold text-ink mb-4">{s.title}</h3>
                <div className="divider-grass mb-4" />
                <p className="font-body text-sm text-steel leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2 flex-1">
                  {s.points.map((p) => (
                    <li key={p} className="font-body text-sm text-steel-DEFAULT flex items-start gap-3">
                      <span className="text-grass mt-0.5 shrink-0">✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary mt-8 text-center">
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING TIERS ─────────────────────────────────────── */}
      <section className="py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Wealth Plans</p>
          <h2 className="font-display text-4xl font-semibold text-ink mb-14 leading-tight">
            Wealth Management Plans
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-steel-light">
            {planTiers.map((tier) => (
              <div
                key={tier.name}
                className={`bg-steel-50 p-8 border-t-2 ${tier.color} flex flex-col`}
              >
                <p className="font-body text-xs text-steel uppercase tracking-widest mb-4">From</p>
                <span className="font-display text-3xl font-bold text-ink mb-2">{tier.from}</span>
                <h3 className="font-body text-sm font-semibold text-ink mb-6">{tier.name}</h3>
                <Link to="/contact" className="btn-outline mt-auto text-center">
                  Enquire
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTATION TYPES ────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="section-label mb-4">Expert Consultation</p>
              <h2 className="font-display text-4xl font-semibold text-ink mb-6 leading-tight">
                Professional Advisory Services
              </h2>
              <div className="divider-grass mb-6" />
              <p className="font-body text-steel text-base leading-relaxed mb-8">
                Get expert guidance tailored to your specific needs. Our consultation services cover all aspects of financial planning, project financing, and investment strategy.
              </p>
              <p className="font-body text-sm text-steel mb-2">Or call us directly:</p>
              <p className="font-body text-sm font-medium text-ink">+254 783 832 237 &nbsp;/&nbsp; +254 101 818 067</p>
            </div>

            <div className="grid gap-px bg-steel-light">
              {consultTypes.map((c) => (
                <div key={c.title} className="bg-white p-6">
                  <h3 className="font-body text-sm font-semibold text-ink mb-2">{c.title}</h3>
                  <p className="font-body text-sm text-steel leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ────────────────────────────────────── */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label text-grass mb-4">Process</p>
          <h2 className="font-display text-4xl font-bold text-white mb-14 leading-tight">
            What to Expect
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-soft">
            {steps.map((step) => (
              <div key={step.n} className="bg-ink p-8">
                <span className="font-mono text-5xl font-bold text-grass opacity-30 block mb-6">{step.n}</span>
                <p className="font-body text-xs text-grass font-semibold tracking-widest uppercase mb-3">{step.time}</p>
                <h3 className="font-display text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="font-body text-sm text-steel leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ────────────────────────────────────────── */}
      <section className="py-20 bg-grass">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="font-body text-white/80 mb-10 max-w-xl mx-auto">
            Book a complimentary consultation with our specialists and we'll create a customized strategy tailored to your goals.
          </p>
          <Link to="/contact" className="btn-ghost">Book a Free Consultation</Link>
        </div>
      </section>
    </main>
  )
}
