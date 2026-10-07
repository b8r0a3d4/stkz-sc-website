import Link from "next/link";
import { preload } from "react-dom";
import Logo from "@/components/Logo";
import CTA from "@/components/CTA";
import { developmentPillars, site } from "@/data/site";
import { media } from "@/data/media";

export default function HomePage() {
  preload(media.home, { as: "image", fetchPriority: "high" });

  return (
    <>
      <section className="home-hero">
        <img
          className="home-hero-media"
          src={media.home}
          alt=""
          aria-hidden="true"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="pitch-lines" aria-hidden="true" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow gold">{site.descriptor}</p>
            <h1>{site.tagline}</h1>
            <p className="hero-lead">Competitive teams, player development, and a soccer environment built to help players grow in Jacksonville and across East Texas.</p>
            <div className="hero-facts" aria-label="STKZ SC pathways">
              <span>Competitive Teams</span>
              <span>Player Development</span>
              <span>Tryouts & Interest</span>
            </div>
            <div className="button-row">
              <Link href="/join#player-interest" className="button button-gold">Join STKZ</Link>
              <Link href="/teams" className="button button-outline-light">Find Your Team</Link>
            </div>
            <p className="hero-route">Not sure where your player fits? <Link href="/join#player-interest">Start with player interest →</Link></p>
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

      <section className="section pathway-section">
        <div className="container section-heading split-heading">
          <div>
            <p className="eyebrow">Start Here</p>
            <h2>What does your player need next?</h2>
          </div>
          <p>You do not need to know the exact team or program. Pick the closest starting point and we’ll help with the fit.</p>
        </div>
        <div className="card-grid three pathway-grid">
          <article className="feature-card navy-card">
            <span>01</span><h3>Competitive Team</h3>
            <p>Looking for a roster and competitive environment? Start with the team-placement pathway.</p>
            <Link href="/teams">See the team pathway →</Link>
          </article>
          <article className="feature-card">
            <span>02</span><h3>Player Development</h3>
            <p>Looking for targeted improvement? See how STKZ approaches technical growth, decisions, and competitive habits.</p>
            <Link href="/development">Explore development →</Link>
          </article>
          <article className="feature-card">
            <span>03</span><h3>Not Sure Yet?</h3>
            <p>Tell us the player’s birth year, current level, and goals. We’ll help identify the most relevant next step.</p>
            <Link href="/join#player-interest">Tell us about your player →</Link>
          </article>
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
          <div><p>STKZ SC is working to reduce barriers through quality coaching, equipment, competition, facilities, scholarships, and player-development opportunities.</p><div className="button-row access-actions"><Link href="/access" className="button button-gold">Our Access Mission</Link><Link href="/donate" className="button button-outline-light">Support STKZ</Link></div></div>
        </div>
      </section>

      <CTA title="Tell us about your player." copy="Start with a few basics. We’ll help point your family toward the right team, tryout, or development opportunity." />
    </>
  );
}
