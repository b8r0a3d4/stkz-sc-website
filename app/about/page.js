import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { media } from "@/data/media";

export const metadata = {
  title: "About STKZ",
  description: "Meet STKZ SC, a development-first youth soccer club serving Jacksonville and East Texas.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About STKZ"
        title="Our Community. Our Why."
        copy="Developing players, creating opportunities, and building a stronger soccer community in East Texas."
        image={media.about}
        imageAlt="Youth soccer players competing for possession during a match"
        variant="cover"
      />
      <section className="section about-short">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">Our Standard</p>
            <h2>Develop. Compete. Contribute.</h2>
            <p>Players come first. We teach them to think, compete with courage, and enjoy getting better.</p>
          </div>
          <div className="content-card">
            <h3>What We Believe</h3>
            <ul className="list-clean">
              <li>Teach the player, not just the pattern.</li>
              <li>Make effort, growth, and accountability matter.</li>
              <li>Open doors to quality soccer in our community.</li>
            </ul>
          </div>
        </div>
      </section>
      <CTA title="Find the right next step for your player." />
    </>
  );
}
