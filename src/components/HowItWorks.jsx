export default function HowItWorks() {
  return (
    <section id="how">
      <div className="section-label">How it works</div>
      <h2 className="section-title">Three quiet senses,<br/>one familiar <em>presence</em>.</h2>
      <p className="section-intro">AURA isn't an app you open. It's a presence that notices you've arrived, picks up where you left off, and gets out of your way the moment you're done.</p>

      <div className="how-grid">
        <div className="how-step">
          <div className="how-num">01 · SEE</div>
          <svg className="how-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
          </svg>
          <h3>It recognizes you.</h3>
          <p>The first time you walk up, AURA introduces itself and asks your name. From the second time onward, it just knows. Each family member gets their own private space, automatically.</p>
        </div>

        <div className="how-step">
          <div className="how-num">02 · LISTEN</div>
          <svg className="how-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/>
            <path d="M19 10v2a7 7 0 01-14 0v-2"/>
            <path d="M12 19v3"/>
          </svg>
          <h3>It speaks your language.</h3>
          <p>Just talk. Ask it to play a song, draft a note, search for something, or just chat. Beam-forming microphones pick you up across the room — even with the shower running.</p>
        </div>

        <div className="how-step">
          <div className="how-num">03 · REMEMBER</div>
          <svg className="how-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
          </svg>
          <h3>It remembers everything.</h3>
          <p>Your routine, your preferences, what you mentioned offhand last Tuesday. AURA carries context forward so every conversation feels like the continuation of one long, quiet friendship.</p>
        </div>
      </div>
    </section>
  );
}
