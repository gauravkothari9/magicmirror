const integrations = [
  'Spotify','YouTube','Apple Music','Google Calendar','Outlook','Gmail','WhatsApp',
  'Notion','Apple Notes','Todoist','Philips Hue','Nest','SmartThings','Alexa',
  'Apple Health','Strava','Fitbit','Uber','Zomato','Swiggy','Weather.com','News API',
  '+ 18 more',
];

export default function Integrations() {
  return (
    <section className="integrations">
      <div className="section-label">Plays well with others</div>
      <h2 className="section-title">Already <em>fluent</em><br/>in the apps you live in.</h2>
      <p className="section-intro" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        No setup wizards. Connect once, and AURA quietly handles the back-and-forth for you.
      </p>

      <div className="integrations-grid">
        {integrations.map((i) => (
          <div key={i} className="integration-pill">{i}</div>
        ))}
      </div>
    </section>
  );
}
