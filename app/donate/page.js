import Link from "next/link";
import PageHero from "@/components/PageHero";
import { media } from "@/data/media";
import { site } from "@/data/site";

export const metadata = {
  title: "Donate | Support STKZ SC",
  description: "Support STKZ SC and help expand access to quality coaching, equipment, competition, facilities, and player-development opportunities in East Texas.",
};

const impact = [
  {
    number: "01",
    title: "Player Access",
    copy: "Help reduce financial barriers that can keep players from participating in quality soccer environments.",
  },
  {
    number: "02",
    title: "Equipment",
    copy: "Support access to the gear and equipment players and teams need to train and compete.",
  },
  {
    number: "03",
    title: "Coaching & Development",
    copy: "Invest in quality coaching, training environments, and player-development opportunities.",
  },
  {
    number: "04",
    title: "Competition",
    copy: "Help create access to meaningful games, events, tournaments, and competitive experiences.",
  },
  {
    number: "05",
    title: "Facilities",
    copy: "Support soccer spaces that create more repetitions, more training time, and more access to the game.",
  },
  {
    number: "06",
    title: "Community Opportunity",
    copy: "Help STKZ SC create more ways for players and families across East Texas to connect with the game.",
  },
];

export default function DonatePage() {
  const donationEmail = `mailto:${site.email}?subject=${encodeURIComponent("STKZ SC Donation")}&body=${encodeURIComponent("I would like to support STKZ SC. Please send me the current donation instructions and nonprofit documentation.\n\nName:\nPhone:\nGift amount (if known):\nArea I hope to support (optional):")}`;

  return (
    <>
      <PageHero
        eyebrow="Support STKZ SC"
        title="Help create the next opportunity."
        copy="Your support helps STKZ SC expand access to quality soccer, player development, equipment, competition, facilities, and opportunity in East Texas."
        image={media.access}
        imageAlt="Youth soccer players competing during a match"
        variant="cover"
      />

      <section className="donate-intro">
        <div className="container donate-intro-grid">
          <div>
            <p className="eyebrow gold">Every Player. Every Chance.</p>
            <h2>Give where the game can make a difference.</h2>
          </div>
          <div>
            <p>STKZ SC is a 501(c)(3) nonprofit youth soccer organization focused on reducing barriers and creating meaningful soccer opportunities for players and families.</p>
            <a className="button button-gold" href={donationEmail}>Start a Donation</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container section-heading split-heading">
          <div>
            <p className="eyebrow">What Donations Support</p>
            <h2>More access. Better environments. More opportunity.</h2>
          </div>
          <p>Charitable support helps STKZ SC invest in the parts of the player experience that can otherwise become barriers for families.</p>
        </div>

        <div className="card-grid three donate-impact-grid">
          {impact.map((item) => (
            <article className="feature-card donate-impact-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-navy">
        <div className="container donate-how-grid">
          <div>
            <p className="eyebrow gold">How to Donate</p>
            <h2>Start with a message.</h2>
            <p>We are currently coordinating donations directly so we can provide the correct giving instructions and documentation for each contribution.</p>
          </div>
          <div className="donate-step-card">
            <span className="donate-step-number">01</span>
            <h3>Contact STKZ SC</h3>
            <p>Email us and let us know you would like to make a contribution. Include your name, best contact information, and gift amount if you already know it.</p>
            <a className="button button-gold" href={donationEmail}>Email {site.email}</a>
          </div>
          <div className="donate-step-card">
            <span className="donate-step-number">02</span>
            <h3>Tell us what matters to you</h3>
            <p>If there is a particular area of the mission you hope to support, include it in your message. We will explain the current options and whether a gift can be accepted for that specific purpose.</p>
          </div>
          <div className="donate-step-card">
            <span className="donate-step-number">03</span>
            <h3>Receive the giving details</h3>
            <p>STKZ SC will reply with the current donation instructions and any nonprofit documentation you need for your records.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container donate-legal-grid">
          <div>
            <p className="eyebrow">501(c)(3) Information</p>
            <h2>Nonprofit documentation.</h2>
          </div>
          <div className="content-card nonprofit-card">
            <h3>STKZ SC</h3>
            <p>STKZ SC operates as a 501(c)(3) nonprofit youth soccer organization.</p>
            <p>For our current EIN, IRS determination documentation, contribution acknowledgment information, or other nonprofit records, contact us directly.</p>
            <a href={donationEmail} className="text-link">Request nonprofit documentation →</a>
          </div>
        </div>
      </section>

      <section className="donor-note">
        <div className="container donor-note-inner">
          <p className="eyebrow gold">Donor Intent</p>
          <p>You are welcome to tell us which part of the mission matters most to you. Unless STKZ SC formally accepts a contribution as restricted to a specific purpose, gifts are used where they can best advance the club’s charitable mission and player-access goals.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Support STKZ SC</p>
            <h2>Help us create more chances to play, grow, and compete.</h2>
            <p>Questions about a contribution, sponsorship, equipment support, or another way to help? Start the conversation with STKZ SC.</p>
          </div>
          <div className="cta-actions">
            <a href={donationEmail} className="button button-navy">Start a Donation</a>
            <Link href="/access" className="button button-outline-dark">Our Mission</Link>
          </div>
        </div>
      </section>
    </>
  );
}
