export default function About() {
  const values = [
    {
      num: "01",
      title: "People First",
      desc: "Good systems exist to support the humans using them, not the other way around.",
    },
    {
      num: "02",
      title: "Practical Over Perfect",
      desc: "Simple, sustainable improvements beat complex systems nobody uses.",
    },
    {
      num: "03",
      title: "Reduce the Friction",
      desc: "We target the specific points in your workflow where things break down or slow down.",
    },
    {
      num: "04",
      title: "Built to Last",
      desc: "We don't hand you a report and disappear. We build things your team can actually maintain.",
    },
  ];

  return (
    <main>
      <header className="page-header">
        <div className="section-tag">About</div>
        <h1>A partner, not just a consultant.</h1>
        <p className="page-header-sub">
          We've spent over a decade helping small teams work smarter —
          without burning out the people doing the work.
        </p>
      </header>

      <div className="about-wrap">
        <div className="about-story">
          <div className="section-tag">Our Story</div>
          <p>
            Founded in 2013, 4 APPS LLC began as a workforce support company
            and has evolved into a trusted partner for small businesses and
            community organizations who want to build better systems.
          </p>
          <p>
            Today, our focus is simple: helping organizations build better
            systems that support people, not burn them out.
          </p>
          <p>
            We study how your workday actually runs, then help you improve
            how tasks, communication, and responsibilities flow through your
            organization — so your team can do their best work without
            running on empty.
          </p>
          <div className="founded-badge">
            <div className="founded-year">2013</div>
            <div>
              <div className="founded-title">Founded & Still Independent</div>
              <div className="founded-sub">Over 10 years helping teams work smarter</div>
            </div>
          </div>
        </div>

        <div className="about-values">
          <div className="section-tag">What We Believe</div>
          <ul className="values-list">
            {values.map((v) => (
              <li key={v.num} className="value-item">
                <div className="value-num">{v.num}</div>
                <div>
                  <div className="value-title">{v.title}</div>
                  <div className="value-desc">{v.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="about-who">
        <div className="section-tag">Who We Serve</div>
        <h2>Built for teams doing a lot with a little.</h2>
        <div className="about-who-grid">
          {[
            { icon: "🏢", label: "Small Businesses" },
            { icon: "🌿", label: "Nonprofits" },
            { icon: "🏘️", label: "Community Organizations" },
            { icon: "👥", label: "Overloaded Teams" },
          ].map((item) => (
            <div key={item.label} className="about-who-card">
              <span className="about-who-icon">{item.icon}</span>
              <span className="about-who-label">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}