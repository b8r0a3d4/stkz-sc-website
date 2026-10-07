import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { developmentPillars } from "@/data/site";
import { media } from "@/data/media";

export const metadata = {
  title: "Training & Development",
  description: "Explore the STKZ SC approach to technical development, decision-making, movement, and competitive habits.",
};

export default function DevelopmentPage() {
  return (
    <>
      <PageHero eyebrow="Training & Development" title="Build the player." copy="Training should transfer to the game. Our development model focuses on technical execution, better decisions, stronger competitive habits, and individual growth." image={media.development} imageAlt="Youth soccer player striking the ball during competition" />
      <section className="section section-navy">
        <div className="card-grid four">
          {developmentPillars.map((item) => <article className="number-card" key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}
        </div>
      </section>
      <section className="section">
        <div className="container content-grid">
          <div><p className="eyebrow">Training Philosophy</p><h2>More than isolated technique.</h2></div>
          <div className="content-card"><p>Repetition matters, but players also need perception, pressure, movement, decisions, and consequences. The goal is not to make a drill look clean. The goal is to help the player execute when the game becomes fast and imperfect.</p></div>
        </div>
      </section>
      <CTA title="Looking for a development opportunity?" copy="Tell us about your player and the area you want to improve." />
    </>
  );
}
