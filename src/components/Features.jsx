export default function Features() {
  return (
    <section className="features-section" id="features">
      <div className="section-label">Capabilities</div>
      <h2 className="section-title">Designed for the way you<br/>actually <em>live</em>.</h2>
      <p className="section-intro">Every feature in AURA started as a real question: what would a thoughtful friend do, standing right there with you?</p>

      <div className="bento">
        <div className="bento-card b-1">
          <span className="featured-badge">Signature</span>
          <div>
            <h3>Morning Briefing</h3>
            <p>The moment you walk into the bathroom, AURA reads the room. Weather, calendar, traffic, top headlines, what to wear today, and a gentle nudge if you've got a workout scheduled. All before you've even reached for the toothbrush.</p>
          </div>
          <svg className="bento-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        </div>

        <div className="bento-card b-2">
          <svg className="bento-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
          </svg>
          <div>
            <h3>Mood Detection</h3>
            <p>Looks tired? AURA dims the lights and skips the news. Looks energized? It cues your hype playlist.</p>
          </div>
        </div>

        <div className="bento-card b-3">
          <svg className="bento-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
          </svg>
          <div>
            <h3>Family Profiles</h3>
            <p>Up to 12 faces. Each person gets their own playlists, calendar, notes, and tone of voice.</p>
          </div>
        </div>

        <div className="bento-card b-4">
          <svg className="bento-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M9 12l2 2 4-4"/>
            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
            <path d="M3 5c0-1.66 4-3 9-3s9 1.34 9 3-4 3-9 3-9-1.34-9-3z"/>
          </svg>
          <div>
            <h3>Outfit Whisperer</h3>
            <p>Cross-references your closet, the forecast, and the day ahead. Suggests what works.</p>
          </div>
        </div>

        <div className="bento-card b-5">
          <svg className="bento-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M9 18V5l12-2v13"/>
            <circle cx="6" cy="18" r="3"/>
            <circle cx="18" cy="16" r="3"/>
          </svg>
          <div>
            <h3>Music Anywhere</h3>
            <p>Spotify, YouTube, Apple Music. "Play something for cooking" — and it just does.</p>
          </div>
        </div>

        <div className="bento-card b-6">
          <svg className="bento-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
            <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/>
          </svg>
          <div>
            <h3>Notes & Memory</h3>
            <p>"Remember I parked on level 3." It will. Forever, until you ask it to forget.</p>
          </div>
        </div>

        <div className="bento-card b-7">
          <svg className="bento-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
            <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <div>
            <h3>Gesture Control</h3>
            <p>Wave to dismiss, swipe to scroll, point to pick. No voice needed when guests are over.</p>
          </div>
        </div>

        <div className="bento-card b-8">
          <svg className="bento-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
            <path d="M16 3.13a4 4 0 010 7.75" strokeDasharray="2 2"/>
          </svg>
          <div>
            <h3>Guest Mode</h3>
            <p>Visitor in town? A temporary profile that politely deletes itself after 48 hours.</p>
          </div>
        </div>

        <div className="bento-card b-9">
          <svg className="bento-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"/>
            <path d="M19 10v2a7 7 0 01-14 0v-2"/>
            <path d="M12 19v3"/>
          </svg>
          <div>
            <h3>Voice Journal</h3>
            <p>End of day, talk to it like a friend. AURA transcribes, organizes, and locks it down — only you can ever read it back.</p>
          </div>
        </div>

        <div className="bento-card b-10">
          <svg className="bento-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <div>
            <h3>Do Not Disturb</h3>
            <p>Set sleep windows. AURA goes silent — no notifications, no greetings, no light. Just a mirror.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
