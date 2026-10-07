import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { media } from "@/data/media";

export const metadata = {
  title: "About STKZ",
  description: "Learn about STKZ SC's player-first development philosophy, competitive culture, and commitment to opportunity.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About STKZ" title="Our Community. Our Why." copy="STKZ SC exists to develop players, create opportunities, and build a stronger soccer community in East Texas." image={media.about} imageAlt="Youth soccer players competing for possession during a match" />
      <section className="section">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">What We Believe</p>
            <p className="statement">Development should open doors — not close them.</p>
          </div>
          <div className="content-card">
            <h3>Player First</h3>
            <p>We want players to become more capable, more confident, and more competitive while keeping the game meaningful and enjoyable.</p>
            <p>That means putting development ahead of shortcuts, teaching players to solve the game, and creating an environment where effort and growth matter.</p>
          </div>
        </div>
      </section>
      <section className="section section-navy">
        <div className="container content-grid">
          <div><p className="eyebrow gold">The STKZ Standard</p><h2>Develop. Compete. Contribute.</h2></div>
          <div>
            <ul className="list-clean">
              <li>Teach the player, not just the pattern.</li>
              <li>Compete with courage and responsibility.</li>
              <li>Create opportunities for more players to access quality soccer.</li>
              <li>Invest in coaching, facilities, and community.</li>
              <li>Keep the long-term player at the center of decisions.</li>
            </ul>
          </div>
        </div>
      </section>
      <CTA title="Find the right next step for your player." />
    </>
  );
}
