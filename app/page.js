import Link from "next/link";
import Logo from "@/components/Logo";
import CTA from "@/components/CTA";
import { developmentPillars, site } from "@/data/site";
import { media } from "@/data/media";

export default function HomePage() {
  return (
    <>
      <section className="home-hero" style={{ "--hero-image": `url("${media.home}")` }}>
        <div className="pitch-lines" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow gold">{site.descriptor}</p>
            <h1>{site.tagline}</h1>
            <p className="hero-lead">A development-first soccer community built to help players grow, compete, and find opportunity in East Texas.</p>
            <div className="button-row">
              <Link href="/join" className="button button-gold">Join STKZ</Link>
              <Link href="/teams" className="button button-outline-light">Find Your Team</Link>
            </div>
          </div>
          <div className="hero-mark">
            <Logo size={320} />
            <p>Jacksonville, Texas</p>
          </div>
        </div>
      </section>

      <section className="pillar-band">
        <div className="container pillar-row">
          {site.pillars.map((pillar) => <span key={pillar}>{pillar}</span>)}
        </div>
      </section>

      <section className="section">
        <div className="container section-heading split-heading">
          <div>
            <p className="eyebrow">Find Your Place</p>
            <h2>One club. Multiple ways to grow.</h2>
          </div>
          <p>Whether your player is looking for a competitive team, focused development, or the right next environment, start here.</p>
        </div>
        <div className="card-grid three">
          <article className="feature-card navy-card"><span>01</span><h3>Teams</h3><p>Explore the club pathway and tell us what your player is looking for.</p><Link href="/teams">Find your team →</Link></article>
          <article className="feature-card"><span>02</span><h3>Development</h3><p>Technical growth, better decisions, stronger habits, and meaningful individual progress.</p><Link href="/development">Explore development →</Link></article>
          <article className="feature-card"><span>03</span><h3>Tryouts & Interest</h3><p>Send us your player's information and we'll help identify the right next step.</p><Link href="/join">Register interest →</Link></article>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container section-heading split-heading light">
          <div>
            <p className="eyebrow gold">Why STKZ</p>
            <h2>Build the player. Then build the opportunity.</h2>
          </div>
          <p>We believe competitive soccer should develop skill, confidence, decision-making, resilience, and connection to community.</p>
        </div>
        <div className="card-grid four">
          {developmentPillars.map((item) => (
            <article className="number-card" key={item.number}>
              <span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container section-heading split-heading">
          <div><p className="eyebrow">Facilities</p><h2>Places built for development.</h2></div>
          <p>STKZ SC is investing in environments that create more repetitions, more access, and more reasons for players to stay connected to the game.</p>
        </div>
        <div className="container facility-grid">
          {site.facilities.map((facility) => (
            <article className="facility-card" key={facility.name}>
              <p className="eyebrow gold">{facility.eyebrow}</p>
              <h3>{facility.name}</h3>
              <p>{facility.copy}</p>
              <p className="address">{facility.address}</p>
            </article>
          ))}
        </div>
        <div className="container section-action"><Link href="/facilities" className="text-link">Explore facilities →</Link></div>
      </section>

      <section className="section access-preview">
        <div className="container access-grid">
          <div><p className="eyebrow gold">Our Community. Our Why.</p><h2>Talent exists everywhere. Opportunity doesn’t.</h2></div>
          <div><p>STKZ SC is working to reduce barriers through quality coaching, equipment, competition, facilities, scholarships, and player-development opportunities.</p><Link href="/access" className="button button-gold">Our Access Mission</Link></div>
        </div>
      </section>

      <CTA />
    </>
  );
}
