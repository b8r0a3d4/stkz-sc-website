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
    title: "Player Scholarships & Access",
    copy: "Help reduce the financial barriers that can keep a player from joining, training, or competing.",
    uses: ["Participation assistance", "Player-development opportunities", "Access where family resources are a barrier"],
  },
  {
    number: "02",
    title: "Coaching & Player Development",
    copy: "Help put quality instruction, better training environments, and more developmental opportunities in front of players.",
    uses: ["Quality coaching", "Training opportunities", "Player-development programming"],
  },
  {
    number: "03",
    title: "Equipment",
    copy: "Help make sure players and teams have the equipment needed to train and compete.",
    uses: ["Player equipment", "Training equipment", "Team equipment needs"],
  },
  {
    number: "04",
    title: "Competition",
    copy: "Help create access to meaningful competitive experiences that challenge players and expand opportunity.",
    uses: ["League competition", "Tournaments and events", "Competitive player opportunities"],
  },
  {
    number: "05",
    title: "Facilities",
    copy: "Help build and improve places where players can train more often, play more games, and stay connected to soccer.",
    uses: ["Training spaces", "Field and facility improvements", "Expanded community access"],
  },
  {
    number: "06",
    title: "Community Soccer Access",
    copy: "Help STKZ SC create more ways for players and families across East Texas to experience quality soccer.",
    uses: ["Access-focused programming", "Community opportunities", "Mission-driven soccer initiatives"],
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

      <section className="section donation-use-section">
        <div className="container donation-use-heading">
          <div>
            <p className="eyebrow">Where Your Donation Goes</p>
            <h2>Your gift helps remove barriers and build better soccer opportunities.</h2>
          </div>
          <div className="donation-use-callout">
            <strong>Donations support the player experience.</strong>
            <p>From helping a player gain access to the game to improving coaching, equipment, competition, and facilities, charitable support is directed toward advancing STKZ SC’s nonprofit mission.</p>
          </div>
        </div>

        <div className="card-grid three donate-impact-grid">
          {impact.map((item) => (
            <article className="donate-impact-card" key={item.number}>
              <div className="impact-card-top">
                <span>{item.number}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.copy}</p>
              <ul className="impact-use-list">
                {item.uses.map((use) => <li key={use}>{use}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="container donation-use-note">
          <p><strong>Want your gift to support a specific area?</strong> Tell us what matters most to you when you contact STKZ SC. We will explain the current giving options and whether a contribution can be accepted for that specific purpose.</p>
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
