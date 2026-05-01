const tiers = [
  {
    name: 'AURA Mini', tag: 'For the bathroom or bedside',
    price: '₹49,000', size: '24" PORTRAIT · WALL MOUNT',
    features: ['Up to 4 family profiles', 'Full voice + gesture controls', 'All integrations', '2-year warranty'],
    cta: 'Reserve',
  },
  {
    name: 'AURA Standard', tag: 'The full experience',
    price: '₹84,000', size: '36" PORTRAIT · WALL MOUNT',
    features: ['Up to 12 family profiles', '4K display with anti-glare film', 'Beam-forming 6-mic array', 'Premium oak / walnut frame', '3-year warranty + concierge setup'],
    cta: 'Reserve', featured: true,
  },
  {
    name: 'AURA Atelier', tag: 'For larger spaces',
    price: '₹1,49,000', size: '55" PORTRAIT · CUSTOM FRAME',
    features: ['Unlimited profiles', 'Hand-finished frame in your choice of wood', 'White-glove installation', 'Lifetime warranty'],
    cta: 'Inquire',
  },
];

export default function Pricing() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="pricing">
      <div className="section-label">Pricing</div>
      <h2 className="section-title">One purchase.<br/>A <em>lifetime</em> of presence.</h2>
      <p className="section-intro">Pay once for the hardware. Core software is yours forever. Add AURA+ if you want the extras.</p>

      <div className="pricing-grid">
        {tiers.map((t) => (
          <div key={t.name} className={`price-card${t.featured ? ' featured' : ''}`}>
            <div className="price-name">{t.name}</div>
            <div className="price-tag">{t.tag}</div>
            <div className="price-amount">{t.price}</div>
            <div className="price-size">{t.size}</div>
            <ul className="price-features">
              {t.features.map((f) => <li key={f}>{f}</li>)}
              <li className="ad-note">Includes occasional contextual ads</li>
            </ul>
            <button className="price-btn" onClick={() => scrollTo('reserve')}>{t.cta}</button>
          </div>
        ))}
      </div>

      <div className="aura-plus">
        <div className="plus-left">
          <div className="plus-badge">AURA+ · Ad-free &amp; private</div>
          <h3 className="plus-title">Want it <em>completely</em> yours?</h3>
          <p className="plus-desc">AURA+ removes every ad, stops every signal from leaving the device, and adds the conveniences power users ask for. The mirror becomes a closed loop — nothing leaves, nothing enters, except the things you explicitly ask for.</p>
          <ul className="plus-features">
            <li>Zero ads, ever</li>
            <li>Zero signals leave the device</li>
            <li>End-to-end encrypted cloud sync</li>
            <li>Unlimited family &amp; guest profiles</li>
            <li>Extended journal &amp; note history</li>
            <li>Priority human support · 24/7</li>
            <li>Open audit log of all data flow</li>
            <li>Early access to new features</li>
          </ul>
        </div>
        <div className="plus-right">
          <div className="plus-price">
            <span className="plus-amount">₹299</span>
            <span className="plus-period">/ month</span>
          </div>
          <div className="plus-or">or ₹2,999 / year</div>
          <button className="price-btn" onClick={() => scrollTo('reserve')}>Add at checkout</button>
          <div className="plus-note">Cancel anytime. Hardware keeps working without it.</div>
        </div>
      </div>
    </section>
  );
}
