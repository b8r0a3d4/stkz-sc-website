import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import PlayerPathway from "@/components/PlayerPathway";
import { developmentPillars } from "@/data/site";
import { media } from "@/data/media";

export const metadata = {
  title: "Training & Development",
  description: "Explore the STKZ player pathway and how we develop technical skill, decision-making, and competitive habits.",
};

export default function DevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Training & Development"
        title="Build the player."
        copy="We train for the moments that matter in a game — on the ball, under pressure, and when decisions come fast."
        image={media.development}
        imageAlt="Youth soccer player striking the ball during competition"
        variant="cover"
      />
      <PlayerPathway compact />
      <section className="section section-navy development-pillars-section">
        <div className="container section-heading">
          <p className="eyebrow gold">What We Develop</p>
          <h2>Skills that hold up in games.</h2>
        </div>
        <div className="card-grid four">
          {developmentPillars.map((item) => (
            <article className="number-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA title="Ready to grow?" copy="Tell us about your player and what they want to work on." />
    </>
  );
}
