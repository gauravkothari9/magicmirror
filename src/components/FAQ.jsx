const left = [
  { q: 'Does AURA need internet to work?', a: 'The basics — face recognition, voice commands, time, your saved notes — all run offline. Internet is only needed for things that require it, like streaming music, fetching weather, or web search.' },
  { q: 'Can I install it myself?', a: 'The Mini ships with everything you need for a 30-minute self-install. The Standard and Atelier include free professional setup in major Indian cities.' },
  { q: 'What if I don\'t want it watching me?', a: 'Slide the physical shutter closed. The camera is mechanically blocked — even we couldn\'t turn it back on remotely. Mic-off has its own switch too.' },
  { q: 'Can my kids use it?', a: 'Yes. Kid profiles get a curated experience — no news, kid-friendly music, optional bedtime routines, and parental review of journal entries if you want.' },
];

const right = [
  { q: 'What happens if the company shuts down?', a: 'Your mirror keeps working. We\'ve open-sourced a "freedom firmware" that releases automatically if the company ever ceases operations — your AURA stays useful indefinitely.' },
  { q: 'How is this different from Alexa or Google Home?', a: 'Those are voice assistants in a speaker. AURA is a presence — it sees you, recognizes you, has visual context, and remembers. The mirror form factor changes everything about the interaction.' },
  { q: 'Will it work in Hindi or other Indian languages?', a: 'Yes. AURA ships fluent in English, Hindi, Tamil, Telugu, Bengali, Marathi, and Kannada. More languages roll out via free updates.' },
  { q: 'Does the standard mirror really show ads?', a: 'Yes, occasionally — and we want to be straightforward about it. The standard mirror is partly subsidized by relevant, contextual ads (think: a coffee brand in the morning, never anything intrusive). To keep them relevant, the mirror sends home a small amount of fully anonymous signal — mood bucket, time of day, weather, rough age band. Nothing identifying. Never your face, voice, name, or anything you\'ve said.' },
  { q: 'What does AURA+ actually unlock?', a: 'AURA+ does two things. First, it removes all ads and stops every signal from leaving the device — your mirror goes completely silent. Second, it adds the conveniences power users want: cloud sync across multiple AURAs, unlimited profiles, extended history, priority support. It\'s optional. The hardware works fully without it.' },
  { q: 'What\'s the warranty and return policy?', a: '30-day returns, no questions. Warranty ranges from 2 years (Mini) to lifetime (Atelier). Repairs are free for the warranty period and at-cost forever after.' },
];

function Item({ q, a }) {
  return (
    <details>
      <summary>{q}</summary>
      <p>{a}</p>
    </details>
  );
}

export default function FAQ() {
  return (
    <section style={{ background: 'var(--ink-2)' }}>
      <div className="section-label">Questions, answered</div>
      <h2 className="section-title">Things people <em>ask</em> us.</h2>

      <div className="faq-grid" style={{ marginTop: 60 }}>
        <div>{left.map((it) => <Item key={it.q} {...it} />)}</div>
        <div>{right.map((it) => <Item key={it.q} {...it} />)}</div>
      </div>
    </section>
  );
}
