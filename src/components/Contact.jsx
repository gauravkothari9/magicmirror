import { useState } from 'react';

const API_BASE = import.meta.env.VITE_API_URL || '';

const initial = { name: '', email: '', phone: '', topic: '', message: '', consent: false };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const update = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok) {
        setStatus('error');
        setErrorMsg(data?.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setForm(initial);

      // Reset back to idle after 6s so the form is usable again
      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  const sending = status === 'sending';
  const success = status === 'success';

  return (
    <section id="contact" className="contact-section">
      <div className="contact-grid">
        <div className="contact-left">
          <div className="section-label">Get in touch</div>
          <h2 className="contact-title">Still have <em>questions</em>?<br/>We'd love to talk.</h2>
          <p className="contact-intro">Whether you're curious about installation, want a custom frame finish, or you're a press or wholesale inquiry — write to us. A real human reads every message, usually within a day.</p>

          <div className="contact-channels">
            <div className="channel">
              <div className="channel-label">EMAIL</div>
              <a href="mailto:hello@aura-mirror.com" className="channel-value">hello@aura-mirror.com</a>
            </div>
            <div className="channel">
              <div className="channel-label">RESPONSE TIME</div>
              <span className="channel-value">Within 24 hours</span>
              <span className="channel-sub">Mon–Sat, 10am–7pm IST</span>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="cf-name">Your name</label>
                <input type="text" id="cf-name" name="name" required placeholder="Hari Sharma"
                       value={form.name} onChange={update} disabled={sending || success} />
              </div>
              <div className="form-field">
                <label htmlFor="cf-email">Email address</label>
                <input type="email" id="cf-email" name="email" required placeholder="hari@example.com"
                       value={form.email} onChange={update} disabled={sending || success} />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="cf-phone">Phone number</label>
              <input type="tel" id="cf-phone" name="phone" required placeholder="+91 9XXXX XXXXX"
                     value={form.phone} onChange={update} disabled={sending || success} />
            </div>

            <div className="form-field">
              <label htmlFor="cf-topic">What's this about?</label>
              <select id="cf-topic" name="topic" required value={form.topic} onChange={update} disabled={sending || success}>
                <option value="">Select a topic…</option>
                <option value="general">General question</option>
                <option value="purchase">Pre-order or pricing</option>
                <option value="installation">Installation or setup</option>
                <option value="custom">Custom frame / Atelier inquiry</option>
                <option value="aura-plus">AURA+ membership</option>
                <option value="privacy">Privacy or data question</option>
                <option value="press">Press / media</option>
                <option value="wholesale">Wholesale / business</option>
                <option value="other">Something else</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="cf-message">Your message</label>
              <textarea id="cf-message" name="message" rows="5" required placeholder="Tell us what's on your mind…"
                        value={form.message} onChange={update} disabled={sending || success}></textarea>
            </div>

            <div className="form-field form-checkbox">
              <input type="checkbox" id="cf-consent" name="consent" required
                     checked={form.consent} onChange={update} disabled={sending || success} />
              <label htmlFor="cf-consent">I agree to AURA contacting me about this inquiry. We'll never add you to a marketing list without asking.</label>
            </div>

            {status === 'error' && (
              <div className="form-error">{errorMsg}</div>
            )}

            {!success && (
              <button type="submit" className="form-submit" disabled={sending}>
                <span className="submit-text">{sending ? 'Sending…' : 'Send message'}</span>
                {!sending && (
                  <svg className="submit-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M13 5l7 7-7 7"/>
                  </svg>
                )}
              </button>
            )}

            {success && (
              <div className="form-success visible">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
                <div>
                  <strong>Message received.</strong>
                  <span>We'll be in touch within a day.</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
