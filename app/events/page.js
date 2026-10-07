import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Events",
  description: "See upcoming STKZ SC tryouts, camps, clinics, tournaments, and special events.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero eyebrow="Events" title="Train. Compete. Connect." copy="STKZ SC events can include tryouts, clinics, camps, tournaments, player-development sessions, and community opportunities." image="/images/stkz-action-attack.webp" imageAlt="Youth soccer players attacking together during match play" />
      <section className="section">
        <div className="container content-grid">
          <div><p className="eyebrow">Upcoming Events</p><h2>Current event details are posted as they are confirmed.</h2><p>We keep this page focused on real, current opportunities rather than placeholder schedules.</p></div>
          <div className="content-card"><h3>Looking for the next event?</h3><p>Send us a message or submit player interest and we’ll point you toward the next relevant tryout, clinic, camp, tournament, or training opportunity.</p><Link href="/join" className="button button-gold">Player Interest</Link></div>
        </div>
      </section>
      <CTA title="Want to know what's next?" />
    </>
  );
}
