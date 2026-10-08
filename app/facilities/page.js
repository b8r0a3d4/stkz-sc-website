import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { site } from "@/data/site";
import { media } from "@/data/media";

export const metadata = {
  title: "Facilities",
  description: "Explore STKZ SC facilities in Jacksonville, Texas: The Grounds and The Soccer Lab.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Jacksonville, Texas"
        title="Places built for the game."
        copy="Meet The Soccer Lab and The Grounds — spaces for training, competition, and community."
        image={media.facilities}
        imageAlt="Youth soccer player playing the ball in a competitive outdoor match"
      />
      <section className="section facilities-short">
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
      </section>
      <CTA title="Questions about facilities or training?" />
    </>
  );
}
