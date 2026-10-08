import Link from "next/link";
import { preload } from "react-dom";
import CTA from "@/components/CTA";
import { site } from "@/data/site";
import { media } from "@/data/media";

const highlights = [
  { href: "/teams", number: "01", title: "Teams", copy: "See our current squads and where they compete.", action: "Find Your Team" },
  { href: "/development", number: "02", title: "Development", copy: "Explore our Juniors, Academy, and Premier pathway.", action: "Our Approach" },
  { href: "/coaches", number: "03", title: "Coaches", copy: "Meet the people guiding our players.", action: "Meet the Coaches" },
  { href: "/facilities", number: "04", title: "Facilities", copy: "Discover The Soccer Lab and The Grounds.", action: "Explore Facilities" },
];

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
            <h1>Developing Players. Creating Opportunities.</h1>
            <p className="hero-lead">Competitive youth soccer and player development in Jacksonville, Texas, serving families across East Texas.</p>
            <div className="button-row">
              <Link href="/teams" className="button button-gold">Find Your Team</Link>
              <Link href="/join#player-interest" className="button button-outline-light">Join STKZ</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section home-overview">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Explore STKZ</p>
            <h2>Find your place in the game.</h2>
          </div>
          <div className="home-quick-grid">
            {highlights.map((item) => (
              <Link href={item.href} className="home-quick-card" key={item.href}>
                <span className="home-quick-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="home-quick-link">{item.action} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-navy home-mission">
        <div className="container content-grid">
          <div>
            <p className="eyebrow gold">Every Player. Every Chance.</p>
            <h2>Talent exists everywhere. Opportunity doesn’t.</h2>
          </div>
          <div>
            <p>We’re opening more doors for young players in Jacksonville and rural East Texas.</p>
            <Link href="/access" className="button button-gold">Our Access Mission</Link>
          </div>
        </div>
      </section>

      <section className="shop-preview">
        <div className="container shop-preview-inner">
          <div>
            <p className="eyebrow gold">Official Team Store</p>
            <h2>Shop STKZ Soccer Club.</h2>
            <p>Find club gear and apparel at the official team store.</p>
          </div>
          <a href={site.store} target="_blank" rel="noreferrer" className="button button-gold">Shop STKZ</a>
        </div>
      </section>

      <CTA title="Tell us about your player." copy="We’ll help you find the right team or development opportunity." />
    </>
  );
}
