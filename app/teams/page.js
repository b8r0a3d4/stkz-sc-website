import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { media } from "@/data/media";

export const metadata = {
  title: "Teams",
  description: "Explore the STKZ SC team-placement pathway and find the right competitive environment for your player.",
};

export default function TeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="STKZ Teams"
        title="Find Your Team."
        copy="You do not need to know the exact team name. Start with your player’s birth year, current level, and goals — we’ll help with the fit."
        image={media.teams}
        imageAlt="Youth soccer players attacking during a competitive match"
      />

      <section className="team-fit-band">
        <div className="container team-fit-row">
          <span>Birth year</span>
          <span>Current level</span>
          <span>Player goals</span>
          <span>Roster fit</span>
        </div>
      </section>

      <section className="section">
        <div className="container split-heading section-heading">
          <div><p className="eyebrow">Choose Your Starting Point</p><h2>Start with the player, not a team name.</h2></div>
          <p>Team placement depends on age, current level, developmental fit, roster needs, and the environment that gives the player the best next step.</p>
        </div>
        <div className="card-grid three team-path-grid">
          <article className="feature-card navy-card">
            <span>01</span><h3>Competitive Team Placement</h3>
            <p>Your player is looking for a competitive roster, tryout, or evaluation opportunity.</p>
            <Link href="/join#player-interest">Start player interest →</Link>
          </article>
          <article className="feature-card">
            <span>02</span><h3>Development First</h3>
            <p>You want to improve the player first and understand the competitive pathway from there.</p>
            <Link href="/development">Explore development →</Link>
          </article>
          <article className="feature-card">
            <span>03</span><h3>Not Sure Yet?</h3>
            <p>That is fine. Give us the basics and we’ll help identify the most relevant next step.</p>
            <Link href="/join#player-interest">Help us find the fit →</Link>
          </article>
        </div>
      </section>

      <section className="section section-navy placement-section">
        <div className="container placement-grid">
          <div>
            <p className="eyebrow gold">How Placement Works</p>
            <h2>A clear next step without guessing.</h2>
            <p className="placement-lead">Current availability can change as rosters develop, so we confirm the fit directly rather than publish stale openings.</p>
          </div>
          <ol className="placement-steps">
            <li><span>01</span><div><strong>Tell us about the player.</strong><p>Birth year, current level, team preference, and what your family is looking for.</p></div></li>
            <li><span>02</span><div><strong>We evaluate the fit.</strong><p>We connect that information to the most relevant current team or development opportunity.</p></div></li>
            <li><span>03</span><div><strong>We point you to the next action.</strong><p>That may be a tryout, evaluation, conversation, or development step based on the current environment.</p></div></li>
          </ol>
        </div>
      </section>

      <CTA title="Ready to find the fit?" copy="Tell us your player’s birth year, level, and goals. You do not need to know the exact team name." />
    </>
  );
}
