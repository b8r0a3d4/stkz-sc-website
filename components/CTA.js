import Link from "next/link";

export default function CTA({ title = "Ready for the next step?", copy = "Tell us about your player and we’ll help point you toward the right STKZ opportunity." }) {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">STKZ SC</p>
          <h2>{title}</h2>
          <p>{copy}</p>
        </div>
        <div className="cta-actions">
          <Link href="/join" className="button button-navy">Join STKZ</Link>
          <Link href="/contact" className="button button-outline-dark">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
