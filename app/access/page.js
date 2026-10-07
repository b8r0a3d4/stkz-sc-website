import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Every Player. Every Chance.",
  description: "Learn about the STKZ SC mission to expand access to quality soccer opportunities.",
};

export default function AccessPage() {
  return (
    <>
      <PageHero eyebrow="Our Access Mission" title="Talent exists everywhere. Opportunity doesn’t." copy="STKZ SC is working to reduce barriers that keep players from accessing quality coaching, competition, equipment, facilities, and development opportunities." image="/images/stkz-action-duel.webp" imageAlt="Youth soccer players competing with courage during a match" />
      <section className="section">
        <div className="container content-grid">
          <div><p className="eyebrow">Every Player. Every Chance.</p><p className="statement">Access can change a player's path.</p></div>
          <div className="content-card"><p>Our mission is not simply to field teams. It is to create more ways for players and families across East Texas to connect with quality soccer environments.</p><p>That includes investment in coaching, facilities, equipment, competition, scholarships, and player-development opportunities where resources might otherwise be a barrier.</p></div>
        </div>
      </section>
      <section className="section section-navy">
        <div className="container content-grid">
          <div><p className="eyebrow gold">Building Community</p><h2>Soccer can be bigger than the scoreboard.</h2></div>
          <div><p>When more players have meaningful access to the game, the entire soccer community gets stronger — more coaches, more competition, more connection, and more players who believe there is a next step.</p></div>
        </div>
      </section>
      <CTA title="Support the mission. Grow the opportunity." copy="Contact STKZ SC about partnerships, sponsorships, equipment support, or other ways to help expand access." />
    </>
  );
}
