import Link from "next/link";
import PageHero from "@/components/PageHero";
import { media } from "@/data/media";

export const metadata = {
  title: "Events",
  description: "Find STKZ SC tryouts, camps, clinics, tournaments, and upcoming soccer events.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="STKZ Events"
        title="Train. Compete. Connect."
        copy="Tryouts, camps, clinics, tournaments, and opportunities to get on the field."
        image={media.events}
        imageAlt="Youth soccer players attacking together during match play"
      />
      <section className="section events-short">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">Upcoming Events</p>
            <h2>More to come.</h2>
            <p>Event dates will appear here when confirmed.</p>
          </div>
          <div className="content-card">
            <h3>Don't miss the next opportunity.</h3>
            <p>Tell us about your player and we'll help you find a relevant event or tryout.</p>
            <Link href="/join#player-interest" className="button button-gold">Player Interest</Link>
          </div>
        </div>
      </section>
    </>
  );
}
