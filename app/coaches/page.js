import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { media } from "@/data/media";

export const metadata = {
  title: "Coaches",
  description: "Meet the coaches who teach, challenge, and develop STKZ SC players.",
};

const coaches = [
  "Roy Alvarez",
  "Brad Guidry",
  "Vini Dantas",
  "Bradley Melchor",
  "Johnnie Compan",
  "Kell Boddie",
];

export default function CoachesPage() {
  return (
    <>
      <PageHero
        eyebrow="STKZ Coaches"
        title="People shape the environment."
        copy="Good coaching is more than running a session. It is teaching, observing, challenging, communicating, and helping players understand the game."
        image={media.coaches}
        imageAlt="Youth soccer players reading pressure and attacking in a match"
      />
      <section className="section">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">Our Coaching Team</p>
            <h2>Meet Our Coaches.</h2>
            <p>The people helping STKZ players learn, compete, and grow.</p>
            <ul className="list-clean">
              {coaches.map((name) => (
                <li key={name}><strong>{name}</strong></li>
              ))}
            </ul>
          </div>
          <div className="content-card">
            <h3>What We Expect</h3>
            <ul className="list-clean">
              <li>Teach with clarity and purpose.</li>
              <li>Create a competitive but productive environment.</li>
              <li>See the individual player inside the team.</li>
              <li>Communicate standards and feedback directly.</li>
              <li>Keep learning.</li>
            </ul>
          </div>
        </div>
      </section>
      <CTA title="Want to connect with STKZ SC?" />
    </>
  );
}
