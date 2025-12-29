import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <div className="cta">
      <h2>Let’s Improve Your Workday</h2>
      <Link to="/contact" className="cta-btn">
        Let’s Improve Your Workday
      </Link>
    </div>
  );
}
