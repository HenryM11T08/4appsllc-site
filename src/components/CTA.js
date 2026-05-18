import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <div className="cta">
      <div className="section-tag">Get Started</div>
      <h2>Let's improve your workday.</h2>
      <p className="cta-sub">
        Tell us where work feels harder than it should. No pressure, no jargon —
        just a real conversation about your organization.
      </p>
      <div className="cta-actions">
        <Link to="/contact" className="primary-btn">
          Start the Conversation
        </Link>
        <Link to="/services" className="ghost-btn">
          See our services
        </Link>
      </div>
    </div>
  );
}