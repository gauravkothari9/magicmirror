const collected = [
  { label: 'Mood bucket', note: 'e.g. "calm" — not your face' },
  { label: 'Time of day', note: 'morning · evening · night' },
  { label: 'Weather context', note: 'local conditions only' },
  { label: 'Rough age band', note: '"25–34" — not your DOB' },
  { label: 'Anonymous device ID', note: 'random, not linked to you' },
];

const notCollected = [
  { label: 'Your face or biometric data', note: 'stays on device, encrypted' },
  { label: 'Your name or identity', note: "we don't know who you are" },
  { label: 'What you say or ask', note: 'conversations are local-only' },
  { label: 'Notes, journal, calendar', note: 'we cannot read them' },
  { label: 'Camera footage or photos', note: 'never leaves the device, period' },
];

export default function Collect() {
  return (
    <section className="collect-section">
      <div className="section-label">What we collect · in plain English</div>
      <h2 className="section-title">No fine print.<br/>Just the <em>truth</em>, laid out.</h2>
      <p className="section-intro">If you skip AURA+ and use the standard mirror, here is the complete list of what gets sent home — and what doesn't. We will never quietly add to this list. If anything ever changes, we'll tell you in the mirror itself, before it does.</p>

      <div className="collect-grid">
        <div className="collect-col collect-yes">
          <div className="collect-head">
            <span className="collect-mark">→</span>
            <h3>What we use for ads</h3>
          </div>
          <ul>
            {collected.map((c) => (
              <li key={c.label}><span>{c.label}</span><em>{c.note}</em></li>
            ))}
          </ul>
        </div>

        <div className="collect-col collect-no">
          <div className="collect-head">
            <span className="collect-mark collect-mark-cross">✕</span>
            <h3>What we will never collect</h3>
          </div>
          <ul>
            {notCollected.map((c) => (
              <li key={c.label}><span>{c.label}</span><em>{c.note}</em></li>
            ))}
          </ul>
        </div>
      </div>

      <p className="collect-footer">
        Used <strong>only</strong> for ad relevance. Never sold to third parties. Never used for any other purpose. We're a hardware company, not a data broker — and we'd like to keep it that way.
      </p>
    </section>
  );
}
