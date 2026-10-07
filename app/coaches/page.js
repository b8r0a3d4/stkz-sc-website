import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { media } from "@/data/media";

export const metadata = {
  title: "Coaches",
  description: "Meet the coaches who teach, challenge, and develop STKZ SC players.",
};

export default function CoachesPage() {
  return (
    <>
      <PageHero eyebrow="STKZ Coaches" title="People shape the environment." copy="Good coaching is more than running a session. It is teaching, observing, challenging, communicating, and helping players understand the game." image={media.coaches} imageAlt="Youth soccer players reading pressure and attacking in a match" />
      <section className="section">
        <div className="container content-grid">
          <div><p className="eyebrow">Coach Profiles</p><h2>Current staff information is being finalized.</h2><p>We will publish coach profiles, team assignments, and verified credentials here as they are confirmed.</p></div>
          <div className="content-card"><h3>What We Expect</h3><ul className="list-clean"><li>Teach with clarity and purpose.</li><li>Create a competitive but productive environment.</li><li>See the individual player inside the team.</li><li>Communicate standards and feedback directly.</li><li>Keep learning.</li></ul></div>
        </div>
      </section>
      <CTA title="Want to connect with STKZ SC?" />
    </>
  );
}
