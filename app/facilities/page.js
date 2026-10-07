import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { site } from "@/data/site";

export const metadata = {
  title: "Facilities",
  description: "Explore STKZ SC facilities in Jacksonville, Texas: The Grounds and The Soccer Lab.",
};

export default function FacilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Jacksonville, Texas" title="Places built for the game." copy="STKZ SC is investing in soccer environments that expand development, competition, and access in East Texas." image="/images/stkz-action-strike.webp" imageAlt="Youth soccer player playing the ball in a competitive outdoor match" />
      <section className="section">
        <div className="container facility-grid">
          {site.facilities.map((facility) => <article className="facility-card" key={facility.name}><p className="eyebrow gold">{facility.eyebrow}</p><h3>{facility.name}</h3><p>{facility.copy}</p><p className="address">{facility.address}</p></article>)}
        </div>
      </section>
      <section className="section section-navy">
        <div className="container content-grid">
          <div><p className="eyebrow gold">The Soccer Lab</p><h2>Year-round repetitions.</h2></div>
          <div><p>The indoor facility creates a consistent place for technical work, small groups, targeted sessions, and development when outdoor conditions are not ideal.</p></div>
        </div>
      </section>
      <CTA title="Questions about facilities or training?" />
    </>
  );
}
