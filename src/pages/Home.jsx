import { Link } from 'react-router-dom'

const stats = [
  { value: '$500M+', label: 'Capital Deployed' },
  { value: '15+', label: 'Industry Sectors' },
  { value: '24/7', label: 'Global Coverage' },
  { value: '100%', label: 'Success Rate' },
]

const pillars = [
  {
    icon: '⬡',
    title: 'Loan Syndication',
    sub: 'Project Financing',
    desc: 'Connecting high-impact projects with the capital they need. We structure and syndicate loans for construction, infrastructure, and energy projects globally.',
  },
  {
    icon: '◈',
    title: 'Strategic Investments',
    sub: 'Portfolio Growth',
    desc: 'Cross-sector equity, debt, and alternative asset deployment guided by rigorous due diligence and long-horizon strategic thinking.',
  },
  {
    icon: '◉',
    title: 'Wealth Management',
    sub: 'Asset Preservation',
    desc: 'Tailored asset management, estate planning, and portfolio strategy for individual and institutional clients seeking measured, enduring growth.',
  },
]

const expertise = [
  { title: 'Market Analysis', tags: ['Real-time Data', 'Predictive Models'], desc: 'Comprehensive market research with real-time data insights and predictive modeling to identify emerging opportunities.' },
  { title: 'Portfolio Management', tags: ['Dynamic Allocation', 'Performance Focus'], desc: 'Strategic portfolio construction and ongoing management with dynamic asset allocation optimized for returns.' },
  { title: 'Risk Management', tags: ['Advanced Frameworks', 'Proactive Monitoring'], desc: 'Advanced risk assessment frameworks with comprehensive monitoring and proactive adjustment capabilities.' },
  { title: 'Strategic Planning', tags: ['Long-term Focus', 'Custom Strategies'], desc: 'Long-term financial roadmaps with scenario analysis and implementation strategies tailored to each client.' },
  { title: 'Wealth Transfer', tags: ['Multi-generational', 'Tax Optimized'], desc: 'Multi-generational wealth preservation strategies with tax optimization and legacy planning for continuity.' },
  { title: 'Alternative Investments', tags: ['Exclusive Access', 'Diversification'], desc: 'Access to private equity, real estate, and hedge fund opportunities for portfolio diversification.' },
]

const industries = [
  { title: 'Real Estate & Property', tags: ['Development Finance', 'Portfolio Management'], desc: 'Comprehensive investment strategies including development financing, REITs, and commercial property portfolios.' },
  { title: 'Technology & Innovation', tags: ['Venture Capital', 'Growth Funding'], desc: 'Strategic funding and growth capital for tech startups, scale-ups, and established technology companies.' },
  { title: 'Healthcare & Life Sciences', tags: ['Medical Innovation', 'Provider Finance'], desc: 'Specialized financing for healthcare providers, pharmaceutical companies, and medtech innovators.' },
  { title: 'Manufacturing & Logistics', tags: ['Expansion Capital', 'Efficiency Funding'], desc: 'Capital solutions for manufacturing expansion, supply chain optimization, and operational efficiency.' },
  { title: 'Energy & Infrastructure', tags: ['Renewable Projects', 'Infrastructure Funds'], desc: 'Investment strategies for renewable energy, infrastructure development, and sustainable resource management.' },
]

const markets = [
  { region: 'North American Markets', label: 'Primary Market', desc: 'Comprehensive coverage of US and Canadian markets with deep local expertise and regulatory knowledge.', tags: ['Major Exchanges', 'Growth Focus'] },
  { region: 'European Markets', label: 'Established Presence', desc: 'Strategic access to European Union markets with cross-border investment expertise and local partnerships.', tags: ['EU Access', 'Cross-border'] },
  { region: 'Asian Markets', label: 'Emerging Focus', desc: 'Growing presence in key Asian financial centers with focus on technology and emerging market opportunities.', tags: ['Tech Focus', 'High Growth'] },
  { region: 'Emerging Markets', label: 'Strategic Entry', desc: 'Selective exposure to high-growth emerging markets with careful risk assessment and local expertise.', tags: ['Selective Access', 'Risk Managed'] },
]

export default function Home() {
  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-ink overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>
        {/* Green accent bar */}
        <div className="absolute top-0 left-0 w-1 h-full bg-grass" />
        {/* Right green glow */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-grass rounded-full blur-[120px] opacity-20" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label text-grass mb-6">Global Financial Services</p>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-8">
              Global Loan
              <br />
              <span className="text-grass">Syndication</span>
              <br />
              &amp; Wealth
              <br />
              Management
            </h1>
            <p className="font-body text-steel-light text-lg leading-relaxed mb-10 max-w-md">
              A leading international financial services firm providing $10M+ loan syndication for renewable energy, oil &amp; gas, and infrastructure projects worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="btn-primary">Explore Services</Link>
              <Link to="/contact" className="btn-ghost">Submit a Project</Link>
            </div>
          </div>

          {/* Stats card */}
          <div className="grid grid-cols-2 gap-px bg-ink-soft rounded-none">
            {stats.map((s) => (
              <div key={s.label} className="bg-ink p-8 flex flex-col gap-2">
                <span className="font-display text-4xl font-bold text-grass">{s.value}</span>
                <span className="font-body text-xs text-steel uppercase tracking-widest">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────────── */}
      <section className="bg-grass py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {['Strategic Investments', 'Loan Syndication', 'Personalized Service', 'Global Reach'].map((item) => (
            <span key={item} className="font-body text-sm font-medium text-white/90 tracking-wide uppercase">
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────────── */}
      <section className="bg-steel-50 py-12 border-b border-steel-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="font-display text-2xl md:text-3xl font-light italic text-ink mb-4">
            "Capital Group transformed our financial strategy with impeccable expertise and outstanding results."
          </p>
          <p className="font-body text-sm text-steel tracking-widest uppercase">— Client Testimonial &nbsp;·&nbsp; 4.0 Rating</p>
        </div>
      </section>

      {/* ── WELCOME / 3 PILLARS ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mb-16">
            <p className="section-label mb-4">Welcome</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mb-6 leading-tight">
              Your Trusted Partner in Capital Solutions
            </h2>
            <div className="divider-grass" />
            <p className="font-body text-steel text-base leading-relaxed mt-4">
              We specialize in three core pillars: Loan Syndication connecting high-impact projects with capital, Strategic Investments across diverse sectors, and Wealth Management for individual and institutional clients. Our expertise spans Construction, Real Estate, Oil &amp; Gas, Telecommunications, and emerging growth sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-steel-light">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white p-10 flex flex-col">
                <span className="text-grass text-3xl mb-6">{p.icon}</span>
                <p className="section-label mb-2">{p.sub}</p>
                <h3 className="font-display text-2xl font-semibold text-ink mb-4">{p.title}</h3>
                <p className="font-body text-steel text-sm leading-relaxed flex-1">{p.desc}</p>
                <Link to="/services" className="mt-8 font-body text-xs text-grass font-semibold tracking-widest uppercase flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <span>→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LOAN SYNDICATION CTA ─────────────────────────────────── */}
      <section className="bg-ink py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="section-label text-grass mb-4">Strategic Capital Partnerships</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Loan Syndication &amp; Investment Opportunities
            </h2>
            <p className="font-body text-steel-light leading-relaxed mb-8">
              We connect high-impact projects with accredited investors and institutions worldwide — spanning Construction, Real Estate, Oil &amp; Gas, Solar &amp; Renewable Energy, Startups, Telecommunications, and Infrastructure.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">Submit a Project</Link>
              <Link to="/services" className="btn-ghost">For Investors</Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px bg-ink-soft">
            <div className="bg-ink-soft p-8">
              <p className="font-body text-xs text-grass font-semibold tracking-widest uppercase mb-4">For Project Owners</p>
              <ul className="space-y-3">
                {[
                  'Strategic Capital Alignment with Industry Experts',
                  'Rigorous Due Diligence & Validation Process',
                  'Structured Deal Facilitation from Pitch to Deployment',
                ].map((item) => (
                  <li key={item} className="font-body text-sm text-steel-light flex items-start gap-3">
                    <span className="text-grass mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-ink-soft p-8 mt-px">
              <p className="font-body text-xs text-grass font-semibold tracking-widest uppercase mb-4">For Investors</p>
              <ul className="space-y-3">
                {[
                  'Access Pre-Vetted High-Potential Projects',
                  'Portfolio Diversification Across Growth Sectors',
                  'Co-Investment with Institutional Partners',
                ].map((item) => (
                  <li key={item} className="font-body text-sm text-steel-light flex items-start gap-3">
                    <span className="text-grass mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE GRID ───────────────────────────────────────── */}
      <section className="py-24 bg-steel-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-4">Expertise</p>
            <h2 className="font-display text-4xl font-semibold text-ink leading-tight">
              Our Areas of Expertise
            </h2>
            <div className="divider-grass" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-light">
            {expertise.map((e) => (
              <div key={e.title} className="bg-steel-50 p-8 hover:bg-white transition-colors">
                <h3 className="font-display text-xl font-semibold text-ink mb-3">{e.title}</h3>
                <p className="font-body text-sm text-steel leading-relaxed mb-4">{e.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {e.tags.map((tag) => (
                    <span key={tag} className="font-body text-xs bg-grass-50 text-grass-dark px-3 py-1 font-medium">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label mb-4">Industries</p>
            <h2 className="font-display text-4xl font-semibold text-ink leading-tight">
              Sector Specializations
            </h2>
            <div className="divider-grass" />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-steel-light">
            {industries.map((ind) => (
              <div key={ind.title} className="bg-white p-8 group hover:bg-grass-50 transition-colors">
                <h3 className="font-display text-xl font-semibold text-ink mb-3 group-hover:text-grass-dark transition-colors">{ind.title}</h3>
                <p className="font-body text-sm text-steel leading-relaxed mb-4">{ind.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {ind.tags.map((tag) => (
                    <span key={tag} className="font-body text-xs border border-steel-light text-steel px-3 py-1 group-hover:border-grass group-hover:text-grass-dark transition-colors">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GLOBAL MARKETS ───────────────────────────────────────── */}
      <section className="py-24 bg-ink">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <p className="section-label text-grass mb-4">Global Reach</p>
            <h2 className="font-display text-4xl font-bold text-white leading-tight">
              Global Reach &amp; Markets
            </h2>
            <div className="divider-grass" />
            <p className="font-body text-steel-light mt-4 max-w-xl">
              Access to international markets and cross-border investment opportunities with local expertise in every major financial center.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-soft">
            {markets.map((m) => (
              <div key={m.region} className="bg-ink p-8">
                <p className="font-body text-xs text-grass font-semibold tracking-widest uppercase mb-3">{m.label}</p>
                <h3 className="font-display text-lg font-semibold text-white mb-3">{m.region}</h3>
                <p className="font-body text-sm text-steel leading-relaxed mb-4">{m.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {m.tags.map((tag) => (
                    <span key={tag} className="font-body text-xs border border-ink-soft text-steel px-2 py-1">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Global network benefits */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-soft">
            {[
              { title: 'Local Expertise', desc: 'In-country teams in major financial centers' },
              { title: 'Regulatory Compliance', desc: 'Full compliance with local regulations' },
              { title: 'Currency Management', desc: 'Expert foreign exchange risk management' },
              { title: 'Market Intelligence', desc: 'Real-time insights across global markets' },
            ].map((b) => (
              <div key={b.title} className="bg-ink-soft p-8">
                <span className="text-grass text-xl block mb-3">●</span>
                <p className="font-body text-sm font-semibold text-white mb-1">{b.title}</p>
                <p className="font-body text-xs text-steel leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────────── */}
      <section className="py-24 bg-grass relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '30px 30px' }} />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-body text-white/70 text-xs font-semibold tracking-[0.2em] uppercase mb-4">Free Expert Consultation</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Three Pillars of Financial Excellence
          </h2>
          <p className="font-body text-white/80 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Integrated financial solutions through Loan Syndication, Strategic Investments, and Wealth Management — all with institutional-grade due diligence and execution.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-ghost">Book Consultation</Link>
            <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-grass">Submit Project</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
