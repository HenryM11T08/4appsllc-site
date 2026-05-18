import CTA from "../components/CTA";
import Section from "../components/Section";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <div className="hero-tag">Workforce Operations Partner</div>

        <h1>
          Work Smarter —{" "}
          <em>without burning out</em>{" "}
          your people.
        </h1>

        <p className="hero-sub">
          We help local businesses and community organizations improve daily
          operations, support their teams, and build systems that make work
          easier.
        </p>

        <div className="hero-actions">
          <a href="/contact" className="primary-btn">
            Let's Improve Your Workday
          </a>
          <a href="#services" className="ghost-btn">
            See how we help
          </a>
        </div>
      </header>

      {/* WHO WE HELP */}
      <Section title="Who We Help" tag="Who We Serve" id="services">
        <p>
          Small businesses, nonprofits, and community organizations with small
          teams carrying big responsibilities.
        </p>
        <ul className="who-list">
          <li>
            <span className="who-icon">🏢</span>
            <div>
              <strong>Small Businesses</strong>
              <p>Growing companies where the owner is still wearing too many hats and the team is running on adrenaline.</p>
            </div>
          </li>
          <li>
            <span className="who-icon">🌿</span>
            <div>
              <strong>Nonprofits & Community Orgs</strong>
              <p>Mission-driven organizations where limited staff carry big responsibilities and burnout is a real risk.</p>
            </div>
          </li>
          <li>
            <span className="who-icon">👥</span>
            <div>
              <strong>Teams Under Pressure</strong>
              <p>Any organization where overload, missed follow-ups, and too much manual work are slowing everyone down.</p>
            </div>
          </li>
        </ul>
      </Section>

      {/* WHAT WE SOLVE */}
      <Section title="What We Solve" tag="The Problem" dark>
        <p>
          Overload. Inefficiency. Missed follow-ups. Too much manual work.
          We focus on reducing stress and improving flow.
        </p>
        <div className="problem-tags">
          {[
            "Too much manual work",
            "Unclear responsibilities",
            "Missed follow-ups",
            "Constant overload",
            "No systems in place",
            "Team burnout risk",
            "Inefficient workflows",
            "Communication breakdowns",
          ].map((tag) => (
            <span key={tag} className="problem-tag">{tag}</span>
          ))}
        </div>
      </Section>

      {/* HOW WE HELP */}
      <Section title="How We Help" tag="Our Approach">
        <p>
          We study how your workday actually runs, then improve how tasks,
          communication, and responsibilities move through your organization.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <span className="service-icon">⚙️</span>
            <h3>Workday & Operations Support</h3>
            <p>We map your daily workflows, find where time is wasted, and rebuild processes so your team can move faster with less friction.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🤝</span>
            <h3>Workforce & Team Support</h3>
            <p>We help your staff understand their responsibilities and work better together — reducing confusion and improving communication.</p>
          </div>
          <div className="service-card">
            <span className="service-icon">🗂️</span>
            <h3>Workday Improvement Systems</h3>
            <p>We build simple, sustainable systems that reduce repetitive work and give leadership the visibility they need to manage well.</p>
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <CTA />
    </main>
  );
}