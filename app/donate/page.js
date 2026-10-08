import Link from "next/link";
import PageHero from "@/components/PageHero";
import SponsorForm from "@/components/SponsorForm";
import { media } from "@/data/media";
import { site } from "@/data/site";

export const metadata = {
  title: "Support STKZ | Donate & Sponsor",
  description: "Support player scholarships, coaching, equipment, competition, facilities, and community soccer through STKZ SC.",
};

const impact = [
  { title: "Player Access", copy: "Help with participation costs, scholarships, and opportunities for families facing financial barriers." },
  { title: "Coaching & Training", copy: "Give more young players access to quality coaching and meaningful practice." },
  { title: "Equipment", copy: "Provide the gear and training equipment players and teams need." },
  { title: "Competition", copy: "Help players take part in leagues, tournaments, and other challenging games." },
  { title: "Fields & Facilities", copy: "Improve and expand local places to train, play, and grow." },
  { title: "Community Programs", copy: "Create more ways for East Texas families to participate and give back." },
];

const sponsorships = [
  { title: "Sponsor a Player", copy: "Help a young player access soccer and development." },
  { title: "Sponsor a Team", copy: "Support a team's equipment, competition, and development." },
  { title: "Sponsor the Club", copy: "Invest in facilities, events, and access across STKZ SC." },
];

export default function DonatePage() {
  const paypalUrl = "https://www.paypal.com/donate/?hosted_button_id=WSVACMFFHLULE";
  const sponsorshipDeckUrl = "https://drive.google.com/file/d/1-jwbd_Cik1YQB31LuqC8MlhzCkWeewPA/view?usp=sharing";
  const sponsorshipDeckDownloadUrl = "https://drive.google.com/uc?export=download&id=1-jwbd_Cik1YQB31LuqC8MlhzCkWeewPA";
  const checkEmail = `mailto:${site.email}?subject=${encodeURIComponent("STKZ SC Check Donation")}&body=${encodeURIComponent("I would like to support STKZ SC by check. Please send me the current mailing and contribution instructions.\n\nName:\nPhone:\nGift amount (if known):")}`;
  const documentationEmail = `mailto:${site.email}?subject=${encodeURIComponent("STKZ SC Nonprofit Documentation")}&body=${encodeURIComponent("Please send me STKZ SC nonprofit and contribution documentation.\n\nName:\nOrganization (optional):\nPhone:")}`;

  return (
    <>
      <PageHero
        eyebrow="Support STKZ SC"
        title="Help create the next opportunity."
        copy="Make a difference for young players in Jacksonville and East Texas. Give, sponsor, or partner with us."
        image={media.support}
        imageAlt="Youth soccer players competing during a match"
        variant="cover"
      />

      <section className="support-choice-section">
        <div className="container support-choice-grid">
          <article className="support-choice-card">
            <p className="eyebrow gold">Donate</p>
            <h2>Give directly.</h2>
            <p>Every contribution helps strengthen access to youth soccer.</p>
            <div className="button-row">
              <a className="button button-gold" href={paypalUrl} target="_blank" rel="noreferrer">Donate with PayPal</a>
              <a className="button button-outline-light" href={checkEmail}>Give by Check</a>
            </div>
          </article>
          <article className="support-choice-card support-choice-sponsor">
            <p className="eyebrow gold">Sponsor</p>
            <h2>Back the next generation.</h2>
            <p>Support a player, a team, or the club.</p>
            <div className="button-row">
              <a className="button button-gold" href="#sponsorship">Explore Sponsorship</a>
              <a className="button button-outline-light" href={sponsorshipDeckUrl} target="_blank" rel="noreferrer">View Sponsor Deck</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section donation-use-section">
        <div className="container section-heading">
          <p className="eyebrow">Where Support Goes</p>
          <h2>More chances to play. More room to grow.</h2>
        </div>
        <div className="card-grid three donate-impact-grid">
          {impact.map((item, index) => (
            <article className="donate-impact-card" key={item.title}>
              <div className="impact-card-top">
                <span>0{index + 1}</span>
                <h3>{item.title}</h3>
              </div>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <div className="container donation-use-note">
          <p><strong>Have a specific cause in mind?</strong> Contact us to discuss whether STKZ SC can accept a contribution restricted to that purpose.</p>
        </div>
      </section>

      <section className="section sponsorship-section" id="sponsorship">
        <div className="container section-heading">
          <p className="eyebrow">Sponsorship</p>
          <h2>Make an impact together.</h2>
        </div>
        <div className="card-grid three sponsorship-options">
          {sponsorships.map((item) => (
            <article className="sponsorship-option-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a href="#sponsor-form" className="text-link">Get in Touch →</a>
            </article>
          ))}
        </div>
        <div className="container sponsorship-deck-band">
          <div>
            <p className="eyebrow gold">Partnership Options</p>
            <h3>Explore the sponsorship deck.</h3>
          </div>
          <div className="sponsorship-deck-actions">
            <a className="button button-gold" href={sponsorshipDeckUrl} target="_blank" rel="noreferrer">View Deck</a>
            <a className="button button-outline-light" href={sponsorshipDeckDownloadUrl} target="_blank" rel="noreferrer">Download Deck</a>
          </div>
        </div>
        <div className="container sponsor-form-wrap" id="sponsor-form">
          <SponsorForm />
        </div>
      </section>

      <section className="section nonprofit-section">
        <div className="container donate-legal-grid">
          <div>
            <p className="eyebrow">501(c)(3) Information</p>
            <h2>Giving with confidence.</h2>
          </div>
          <div className="content-card nonprofit-card">
            <h3>STKZ SC</h3>
            <p>STKZ SC operates as a 501(c)(3) nonprofit youth soccer organization. Charitable donations are tax-deductible to the fullest extent allowed by law, and acknowledgments are issued for qualifying gifts.</p>
            <p className="legal-note">Sponsorships that include advertising, promotional benefits, goods, or services may be treated differently from charitable donations. Consult your tax adviser about your contribution.</p>
            <p><strong>Donor intent:</strong> Let us know what matters most to you. Unless STKZ SC formally accepts a gift restricted to a specific purpose, donations are used where they can best advance the club's charitable mission and player-access goals.</p>
            <a href={documentationEmail} className="text-link">Request Nonprofit Documentation →</a>
          </div>
        </div>
      </section>
    </>
  );
}
