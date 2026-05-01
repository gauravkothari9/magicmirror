export default function Nav() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <nav>
      <div className="logo">
        <span className="logo-dot"></span>
        AURA
      </div>
      <ul className="nav-links">
        <li><a href="#how">How it works</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#privacy">Privacy</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className="nav-cta" onClick={() => scrollTo('reserve')}>Reserve</button>
    </nav>
  );
}
