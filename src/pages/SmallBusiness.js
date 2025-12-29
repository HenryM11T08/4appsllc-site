import CTA from "../components/CTA";

export default function SmallBusiness() {
  return (
    <main className="landing">
      <h1>Make Work Easier. Reduce Stress. Help Your Team Do Their Best Work.</h1>

      <p className="intro">
        Running a small business is hard enough.
        We help streamline daily work, support your people,
        and create systems that make the workday better —
        without hiring more staff or burning out your team.
      </p>

      <h3>Common Challenges</h3>
      <ul>
        <li>Too much administrative work</li>
        <li>Repetitive tasks</li>
        <li>Missed follow-ups</li>
        <li>Overworked staff</li>
        <li>No time to improve systems</li>
      </ul>

      <h3>What We Help With</h3>
      <ul>
        <li>Reducing busywork</li>
        <li>Improving daily workflows</li>
        <li>Supporting staff productivity</li>
        <li>Creating consistency</li>
        <li>Improving communication</li>
      </ul>

      <h3>How It Works</h3>
      <ol>
        <li>We learn how your workday actually runs</li>
        <li>We improve the flow of work</li>
        <li>We train your staff in simple, practical ways</li>
        <li>We only use tools we’ve tested ourselves</li>
      </ol>

      <p className="quiet-note">
        Behind the scenes, we use modern digital tools that quietly assist
        with scheduling, coordination, and information flow —
        like having a digital assistant for your business.
      </p>

      <CTA />
    </main>
  );
}
