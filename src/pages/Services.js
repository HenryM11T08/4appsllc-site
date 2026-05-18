import CTA from "../components/CTA";

const services = [
  {
    icon: "⚙️",
    title: "Workday & Operations Support",
    description:
      "Improve daily workflows, reduce inefficiencies, and create clarity across your operations.",
    bullets: [
      "Workflow mapping and bottleneck identification",
      "Process documentation and simplification",
      "Clarity across roles and daily responsibilities",
      "Reducing time wasted on avoidable back-and-forth",
    ],
  },
  {
    icon: "🤝",
    title: "Workforce & Team Support",
    description:
      "Support your staff through better role clarity, training, and communication.",
    bullets: [
      "Role definition and responsibility alignment",
      "Staff training and onboarding support",
      "Internal communication improvements",
      "Reducing confusion and missed handoffs",
    ],
  },
  {
    icon: "🗂️",
    title: "Workday Improvement Systems",
    description:
      "Set up simple systems that reduce repetitive work and support better decision-making.",
    bullets: [
      "Systems built for real teams, not ideal ones",
      "Reducing manual and repetitive tasks",
      "Better visibility for leadership",
      "Sustainable processes your team can maintain",
    ],
  },
];

export default function Services() {
  return (
    <main>
      {/* PAGE HEADER */}
      <header className="page-header">
        <div className="section-tag">How We Help</div>
        <h1>Three ways we make your workday easier.</h1>
        <p className="page-header-sub">
          We don't do one-size-fits-all consulting. We study how your day
          actually runs — then fix what's getting in the way.
        </p>
      </header>

      {/* SERVICES */}
      <div className="services-page">
        {services.map((service, i) => (
          <section key={i} className="service-row">
            <div className="service-row-icon">{service.icon}</div>
            <div className="service-row-content">
              <h2>{service.title}</h2>
              <p className="service-row-desc">{service.description}</p>
              <ul className="service-bullets">
                {service.bullets.map((bullet, j) => (
                  <li key={j}>
                    <span className="bullet-dot" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <div className="service-row-num">0{i + 1}</div>
          </section>
        ))}
      </div>

      <CTA />
    </main>
  );
}