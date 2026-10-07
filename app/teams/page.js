import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Teams",
  description: "Explore STKZ SC youth soccer teams and find the right competitive environment for your player.",
};

export default function TeamsPage() {
  return (
    <>
      <PageHero eyebrow="STKZ Teams" title="Find Your Team." copy="The right team should challenge the player, fit the stage of development, and create a reason to keep getting better." image="/images/stkz-action-attack.webp" imageAlt="Youth soccer players attacking during a competitive match" />
      <section className="section">
        <div className="container split-heading section-heading">
          <div><p className="eyebrow">Team Placement</p><h2>Start with the player.</h2></div>
          <p>STKZ SC team placement is based on age, current level, developmental fit, roster needs, and the environment that gives the player the best next step.</p>
        </div>
        <div className="card-grid three">
          <article className="feature-card navy-card"><span>01</span><h3>Tell Us About Your Player</h3><p>Birth year, current level, team history, position, and what your family is looking for.</p><Link href="/join">Player interest form →</Link></article>
          <article className="feature-card"><span>02</span><h3>Evaluate the Fit</h3><p>We connect the information to the appropriate team or development opportunity rather than forcing every player into the same path.</p></article>
          <article className="feature-card"><span>03</span><h3>Build the Next Step</h3><p>The goal is a competitive environment where the player can train, contribute, and keep progressing.</p></article>
        </div>
      </section>
      <section className="section section-navy">
        <div className="container content-grid">
          <div><p className="eyebrow gold">Current Rosters</p><h2>Team details are updated as rosters are finalized.</h2></div>
          <div><p>We do not publish invented or outdated roster information. If you are looking for a current STKZ team, send us your player's information and we will point you to the right group.</p><Link href="/join" className="button button-gold">Find Your Team</Link></div>
        </div>
      </section>
      <CTA />
    </>
  );
}
