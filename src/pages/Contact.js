export default function Contact() {
  return (
    <main>
      <header className="page-header">
        <div className="section-tag">Get Started</div>
        <h1>Let's improve your workday.</h1>
        <p className="page-header-sub">
          Tell us a little about your organization and where work feels harder
          than it should. We'll take it from there.
        </p>
      </header>

      <div className="contact">
        <div className="contact-wrap">
          <div className="contact-info">
            <h3>What to expect</h3>
            <p>
              No pressure, no jargon — just a real conversation about your
              organization and whether we can help.
            </p>
            <ul className="contact-promises">
              <li>
                <span className="promise-icon">✓</span>
                We respond within 1 business day
              </li>
              <li>
                <span className="promise-icon">✓</span>
                No commitment required for first conversation
              </li>
              <li>
                <span className="promise-icon">✓</span>
                We work with organizations of all sizes
              </li>
              <li>
                <span className="promise-icon">✓</span>
                Built for small teams with big missions
              </li>
            </ul>
          </div>

          <form className="contact-form">
            <label>
              Your Name
              <input type="text" name="name" placeholder="Jane Smith" required />
            </label>
            <label>
              Organization
              <input type="text" name="organization" placeholder="Your org name" />
            </label>
            <label>
              Email
              <input type="email" name="email" placeholder="jane@yourorg.com" required />
            </label>
            <label>
              Your Role
              <input type="text" name="role" placeholder="e.g. Executive Director, Operations Manager" />
            </label>
            <label>
              What's making the workday harder right now?
              <textarea
                name="message"
                rows="5"
                placeholder="Describe the friction, the bottleneck, the thing that keeps coming up..."
                required
              />
            </label>
            <button type="submit">Start the Conversation →</button>
          </form>
        </div>
      </div>
    </main>
  );
}