import { useState } from 'react';

export default function Reserve() {
  const [form, setForm] = useState({ email: '', phone: '' });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/reservation', {
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
      setForm({ email: '', phone: '' });

      setTimeout(() => setStatus('idle'), 6000);
    } catch {
      setStatus('error');
      setErrorMsg('Network error. Please check your connection and try again.');
    }
  };

  const sending = status === 'sending';
  const success = status === 'success';

  return (
    <section className="cta-section" id="reserve">
      <div className="section-label" style={{ justifyContent: 'center' }}>Reserve now · Limited first run</div>
      <h2 className="section-title" style={{ textAlign: 'center' }}>Be among the first to live<br/>with <em>someone</em> in the mirror.</h2>
      <p className="section-intro" style={{ marginLeft: 'auto', marginRight: 'auto', textAlign: 'center' }}>
        First 500 units ship in Q3 2026. Reserve your spot with a fully-refundable ₹2,000 deposit.
      </p>

      <form className="cta-form" onSubmit={submit} noValidate>
        <div className="cta-form-row">
          <input type="email" name="email" placeholder="your@email.com" required
                 value={form.email} onChange={update} disabled={sending || success} />
          <input type="tel" name="phone" placeholder="+91 9XXXX XXXXX" required
                 value={form.phone} onChange={update} disabled={sending || success} />
        </div>
        <button type="submit" disabled={sending || success}>
          {sending ? 'Reserving…' : success ? "You're on the list ✓" : 'Reserve my spot'}
        </button>
      </form>

      {success && (
        <div className="form-success visible" style={{ textAlign: 'center', marginTop: '1rem' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10"/>
            <path d="M9 12l2 2 4-4"/>
          </svg>
          <div>
            <strong>Reservation confirmed!</strong>
            <span>You're on the list. We'll contact you soon.</span>
          </div>
        </div>
      )}

      {status === 'error' && (
        <p className="cta-fineprint" style={{ color: '#e8a574' }}>{errorMsg}</p>
      )}
      {status !== 'error' && !success && (
        <p className="cta-fineprint">We'll only contact you about your reservation. No marketing spam.</p>
      )}
    </section>
  );
}
