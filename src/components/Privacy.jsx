function Check({ glow }) {
  return (
    <svg className={`privacy-check${glow ? ' privacy-check-glow' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  );
}

export default function Privacy() {
  return (
    <section id="privacy">
      <div className="section-label">Privacy, on your terms</div>
      <h2 className="section-title">Two promises.<br/>One we make to <em>everyone</em>.</h2>
      <p className="section-intro">A mirror in your home that watches and listens needs to be different from everything else you've ever bought. Here's exactly where we draw the lines — and where you can draw them tighter.</p>

      <div className="privacy-tiers">
        <div className="privacy-tier">
          <div className="tier-label">For every AURA · always true</div>
          <h3 className="tier-title">Things we will <em>never</em> do.</h3>
          <ul className="privacy-list">
            <li><Check /><div><h4>Faces stay on the device</h4><p>Face recognition runs entirely on local hardware. Your biometric data is encrypted on-device and never, under any circumstance, leaves it.</p></div></li>
            <li><Check /><div><h4>Conversations stay on the device</h4><p>Voice transcripts, your notes, your journal — stored locally, encrypted. We never read them. We can't.</p></div></li>
            <li><Check /><div><h4>Physical camera shutter</h4><p>A real mechanical cover. When closed, the lens is physically blocked — no software override possible. The mic has its own switch too.</p></div></li>
            <li><Check /><div><h4>One-tap forget</h4><p>Say "AURA, forget everything about me" — and it does. Voiceprint, face data, journal, the lot. Gone in seconds, irreversibly.</p></div></li>
          </ul>
        </div>

        <div className="privacy-tier privacy-tier-plus">
          <div className="tier-label tier-label-plus">With AURA+ · added</div>
          <h3 className="tier-title">Total <em>radio silence</em>.</h3>
          <p className="tier-intro">The standard mirror is supported by occasional, contextual ads. To keep them relevant, a small amount of anonymous, non-identifying signal (mood bucket, time of day, weather) is sent home. AURA+ turns all of it off.</p>
          <ul className="privacy-list">
            <li><Check glow /><div><h4>Zero ads, ever</h4><p>No promotional content of any kind. The mirror only ever shows what you asked it to.</p></div></li>
            <li><Check glow /><div><h4>Zero signals leave the device</h4><p>Even the anonymous ad-context signals stop. Your AURA goes dark to us — except for software updates, which you can audit.</p></div></li>
            <li><Check glow /><div><h4>End-to-end encrypted sync</h4><p>If you sync across multiple AURAs, it's encrypted with keys only you hold. Even we can't decrypt it.</p></div></li>
            <li><Check glow /><div><h4>Open audit log</h4><p>See every byte your mirror has ever sent home, in plain English, anytime.</p></div></li>
          </ul>
        </div>
      </div>
    </section>
  );
}
