import CTA from "../components/CTA";
import Section from "../components/Section";

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <header className="hero">
        <h1>
          Helping Small Businesses Work Smarter — Without Burning Out Their People
        </h1>

        <p>
          We help local businesses and community organizations improve daily
          operations, support their teams, and build systems that make work
          easier.
        </p>

        <a href="/contact" className="primary-btn">
          Let’s Improve Your Workday
        </a>
      </header>

      {/* WHO WE HELP */}
      <Section title="Who We Help">
        Small businesses, nonprofits, and community organizations with small
        teams carrying big responsibilities.
      </Section>

      {/* WHAT WE SOLVE */}
      <Section title="What We Solve">
        Overload. Inefficiency. Missed follow-ups. Too much manual work.
        We focus on reducing stress and improving flow.
      </Section>

      {/* HOW WE HELP */}
      <Section title="How We Help">
        We study how your workday actually runs, then improve how tasks,
        communication, and responsibilities move through your organization.
      </Section>

      {/* FINAL CTA */}
      <CTA />
    </main>
  );
}
