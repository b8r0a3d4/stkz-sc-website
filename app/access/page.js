import PageHero from "@/components/PageHero";
import Link from "next/link";
import { media } from "@/data/media";

export const metadata = {
  title: "Our Access Mission | Every Player. Every Chance.",
  description: "STKZ SC is bringing quality youth soccer coaching, competition, and opportunity closer to home for players in Jacksonville and rural East Texas.",
};

const opportunities = [
  {
    title: "Better Coaching",
    copy: "Make quality training and player development available closer to home.",
  },
  {
    title: "More Ways to Play",
    copy: "Invest in local facilities and connect players with meaningful competition.",
  },
  {
    title: "Fewer Barriers",
    copy: "Help open doors through equipment, scholarships, and community support.",
  },
];

export default function AccessPage() {
  return (
    <>
      <PageHero
        eyebrow="Every Player. Every Chance."
        title="Talent exists everywhere. Opportunity doesn’t."
        copy="Too many young players in small-town East Texas face longer drives, higher costs, and fewer ways to grow. We’re working to open more doors closer to home."
        image={media.access}
        imageAlt="Young soccer players competing on the field"
      />

      <section className="section access-story">
        <div className="container access-story-inner">
          <div>
            <p className="eyebrow">Why We're Here</p>
            <h2>A chance can change everything.</h2>
          </div>
          <p className="access-story-copy">
            A young player who loves the game deserves a field to play on, a coach who believes in them, and a path forward. Their ZIP code shouldn't decide how far they can go.
          </p>
        </div>
      </section>

      <section className="section section-navy access-work">
        <div className="container">
          <div className="access-work-heading">
            <p className="eyebrow gold">What We're Building</p>
            <h2>Build it here. Open doors everywhere.</h2>
          </div>
          <div className="access-work-grid">
            {opportunities.map((item) => (
              <article className="access-work-item" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section access-cta">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Be Part of the Mission</p>
            <h2>Help them go further.</h2>
            <p>Your support helps make more opportunities possible for young players growing up right here in East Texas.</p>
          </div>
          <div className="cta-actions">
            <Link href="/donate" className="button button-navy">Support STKZ</Link>
            <Link href="/join#player-interest" className="button button-outline-dark">Tell Us About Your Player</Link>
          </div>
        </div>
      </section>
    </>
  );
}
