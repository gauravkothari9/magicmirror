import { useEffect, useState } from 'react';

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function formatTime(d) {
  return `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')}`;
}
function formatDate(d) {
  return `${days[d.getDay()]} · ${months[d.getMonth()]} ${d.getDate()}`;
}

export default function Hero() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-eyebrow">Introducing AURA · v1</div>
        <h1>The mirror that <em>knows you</em>—<br/>and grows with you.</h1>
        <p className="hero-sub">A presence in your home that recognizes your face, remembers your story, and quietly handles the rest of your day. Part butler. Part journal. Part friend.</p>
        <div className="hero-actions">
          <button className="btn-primary" onClick={() => scrollTo('reserve')}>Reserve yours</button>
          <button className="btn-ghost" onClick={() => scrollTo('how')}>See how it works →</button>
        </div>
      </div>

      <div className="mirror-stage">
        <div className="mirror-frame">
          <div className="mirror-screen">
            <div className="mirror-time">{formatTime(now)}</div>
            <div className="mirror-date">{formatDate(now)}</div>
            <div className="mirror-greeting">Good morning, Hari.<br/>You slept 7h 12m.</div>
            <div className="mirror-info">
              <div className="mirror-info-item"><span>Weather</span><span>26° · Clear</span></div>
              <div className="mirror-info-item"><span>First meeting</span><span>9:30 AM</span></div>
              <div className="mirror-info-item"><span>Outfit</span><span>Light layers</span></div>
              <div className="mirror-info-item"><span>Mood</span><span>Calm · 78%</span></div>
            </div>
            <div className="mirror-listening">
              <div className="listen-bar"></div>
              <div className="listen-bar"></div>
              <div className="listen-bar"></div>
              <div className="listen-bar"></div>
              <div className="listen-bar"></div>
              <span className="listen-text">Listening</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
