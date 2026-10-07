import PageHero from "@/components/PageHero";
import EmailForm from "@/components/EmailForm";
import { site } from "@/data/site";
import { media } from "@/data/media";

export const metadata = {
  title: "Contact",
  description: "Contact STKZ SC in Jacksonville, Texas about teams, tryouts, training, facilities, and partnerships.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact STKZ SC" title="Let's talk soccer." copy="Questions about teams, tryouts, development, facilities, events, or partnerships? Reach out and we'll help you find the right next step." image={media.contact} imageAlt="Youth soccer player striking through the ball during a match" />
      <section className="section">
        <div className="container">
          <div className="contact-strip">
            <a className="contact-chip" href={`mailto:${site.email}`}><strong>Email</strong><p>{site.email}</p></a>
            <div className="contact-chip"><strong>The Soccer Lab</strong><p>402 S. Bolton, Jacksonville, TX</p></div>
            <div className="contact-chip"><strong>The Grounds</strong><p>2020 N. Jackson St., Jacksonville, TX 75766</p></div>
          </div>
          <EmailForm />
        </div>
      </section>
    </>
  );
}
