import Link from "next/link";
import Logo from "@/components/Logo";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo size={72} />
          <div>
            <p className="eyebrow gold">STKZ SC</p>
            <p>{site.tagline}</p>
            <p className="muted">Jacksonville, Texas · East Texas</p>
          </div>
        </div>

        <div>
          <p className="footer-title">Explore</p>
          <div className="footer-links">
            <Link href="/teams">Teams</Link>
            <Link href="/development">Development</Link>
            <Link href="/facilities">Facilities</Link>
            <Link href="/events">Events</Link>
          </div>
        </div>

        <div>
          <p className="footer-title">Connect</p>
          <div className="footer-links">
            <Link href="/join">Join STKZ</Link>\n            <Link href="/donate">Donate</Link>
            <Link href="/contact">Contact</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} STKZ SC</span>
        <span>Zero Miedo.</span>
      </div>
    </footer>
  );
}
