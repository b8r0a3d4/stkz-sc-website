import Link from "next/link";
import { preload } from "react-dom";
import Logo from "@/components/Logo";
import CTA from "@/components/CTA";
import PlayerPathway from "@/components/PlayerPathway";
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
            <p className="eyebrow gold">{site.tagline}</p>
            <h1>Gardner Is Cool!</h1>
            <p className="hero-lead">Competitive youth soccer and player development in Jacksonville, Texas, serving families across East Texas.</p>
            <div className="button-row">
              <Link href="/teams" className="button button-gold">Find Your Team</Link>
              <Link href="/join#player-interest" className="button button-outline-light">Join STKZ</Link>
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

      <PlayerPathway />

      <section className="section section-navy">
        <div className="container section-heading split-heading light">
          <div>
            <p className="eyebrow gold">Why STKZ</p>
            <h2>Build the player. Then build the opportunity.</h2>
          </div>
          <p>We believe competitive soccer should develop technical skill, decision-making, competitive habits, confidence, resilience, accountability, and leadership.</p>
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

      <section className="shop-preview">
        <div className="container shop-preview-inner">
          <div>
            <p className="eyebrow gold">Official Team Store</p>
            <h2>Shop STKZ Soccer Club.</h2>
            <p>Club gear and STKZ apparel are available through the official DMZ Team Store.</p>
          </div>
          <a href={site.store} target="_blank" rel="noreferrer" className="button button-gold">Shop STKZ</a>
        </div>
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
