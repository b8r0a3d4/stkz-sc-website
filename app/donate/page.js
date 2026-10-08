import Link from "next/link";
import PageHero from "@/components/PageHero";
import SponsorForm from "@/components/SponsorForm";
import { media } from "@/data/media";
import { site } from "@/data/site";

export const metadata = {
  title: "Support STKZ | Donate & Sponsor",
  description: "Support STKZ SC through charitable giving, sponsorship, player access, field development, and community soccer opportunities in East Texas.",
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

const sponsorships = [
  {
    title: "Sponsor a Player",
    copy: "Help create a player-access opportunity by supporting participation, development, equipment, or competition costs through STKZ SC.",
  },
  {
    title: "Sponsor a Team",
    copy: "Support a team environment through competition, equipment, travel-related needs, development opportunities, or other approved team expenses.",
  },
  {
    title: "Sponsor the Club",
    copy: "Create broader impact across STKZ SC through club-wide support, facilities, events, development initiatives, or community programming.",
  },
];

const communityImpact = [
  {
    title: "Financial Assistance",
    copy: "We actively raise money to invest in youth soccer players, helping reduce financial barriers so players can stay on the field and continue pursuing their goals.",
  },
  {
    title: "Field Development",
    copy: "Support can help improve existing soccer spaces and advance new field and facility development that creates long-term access for players and families.",
  },
  {
    title: "Community Service",
    copy: "STKZ SC works to create year-round opportunities for youth players to serve others and understand the importance of giving back to their community.",
  },
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
        copy="Donate, sponsor, or partner with STKZ SC to expand access to quality soccer, player development, competition, facilities, and community opportunity in East Texas."
        image={media.access}
        imageAlt="Youth soccer players competing during a match"
        variant="cover"
      />

      <section className="support-choice-section">
        <div className="container support-choice-grid">
          <article className="support-choice-card">
            <p className="eyebrow gold">Donate</p>
            <h2>Give directly to the mission.</h2>
            <p>Make a charitable contribution to help remove barriers and strengthen the environments where players learn, train, compete, and grow.</p>
            <div className="button-row">
              <a className="button button-gold" href={paypalUrl} target="_blank" rel="noreferrer">Donate with PayPal</a>
              <a className="button button-outline-light" href={checkEmail}>Give by Check</a>
            </div>
          </article>

          <article className="support-choice-card support-choice-sponsor">
            <p className="eyebrow gold">Sponsor</p>
            <h2>Put your business behind the opportunity.</h2>
            <p>Sponsor a player, a team, or the club and connect your organization with STKZ SC’s player-development and community mission.</p>
            <div className="button-row">
              <a className="button button-gold" href="#sponsorship">Explore Sponsorship</a>
              <a className="button button-outline-light" href={sponsorshipDeckUrl} target="_blank" rel="noreferrer">View Sponsorship Deck</a>
            </div>
          </article>
        </div>
      </section>

      <section className="section community-impact-section">
        <div className="container section-heading split-heading">
          <div>
            <p className="eyebrow">Supporting the Community</p>
            <h2>What support makes possible.</h2>
          </div>
          <p>Giving to STKZ SC is about more than a single season. We are working to create player access, stronger soccer spaces, and a culture of service that can make a lasting difference in East Texas.</p>
        </div>

        <div className="card-grid three community-impact-grid">
          {communityImpact.map((item, index) => (
            <article className="community-impact-card" key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
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
            <p>From helping a player gain access to the game to improving coaching, equipment, competition, facilities, and community programming, charitable support advances STKZ SC’s nonprofit mission.</p>
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
          <p><strong>Want your gift to support a specific area?</strong> Tell us what matters most to you. STKZ SC will explain the current options and whether a contribution can be accepted for that specific purpose.</p>
        </div>
      </section>

      <section className="section section-navy giving-methods-section">
        <div className="container giving-methods-grid">
          <div>
            <p className="eyebrow gold">Ways to Give</p>
            <h2>Choose the giving method that works for you.</h2>
            <p className="giving-methods-lead">STKZ SC accepts charitable donations of any amount. Use PayPal for online giving or contact us for current check-mailing instructions.</p>
          </div>

          <article className="giving-method-card">
            <span>01</span>
            <h3>PayPal</h3>
            <p>Make an online contribution through the STKZ SC PayPal donation page.</p>
            <a className="button button-gold" href={paypalUrl} target="_blank" rel="noreferrer">Donate with PayPal</a>
          </article>

          <article className="giving-method-card">
            <span>02</span>
            <h3>Check</h3>
            <p>Prefer to give by check? Contact STKZ SC for the current payee and mailing instructions before sending your contribution.</p>
            <a className="button button-outline-light" href={checkEmail}>Get Check Instructions</a>
          </article>
        </div>
      </section>

      <section className="section sponsorship-section" id="sponsorship">
        <div className="container section-heading split-heading">
          <div>
            <p className="eyebrow">Sponsorship</p>
            <h2>Sponsor a player. A team. Or the club.</h2>
          </div>
          <p>Business and community partners can support STKZ SC at different levels. We’ll help identify the sponsorship structure that fits your goals and the part of the mission you want to support.</p>
        </div>

        <div className="card-grid three sponsorship-options">
          {sponsorships.map((item) => (
            <article className="sponsorship-option-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
              <a href="#sponsor-form" className="text-link">Start this conversation →</a>
            </article>
          ))}
        </div>

        <div className="container sponsorship-deck-band">
          <div>
            <p className="eyebrow gold">Sponsorship Deck</p>
            <h3>See partnership opportunities.</h3>
            <p>Review the current STKZ SC sponsorship deck, then contact us about the player, team, club, event, or community opportunity you would like to support.</p>
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
            <h2>Charitable giving with documentation.</h2>
          </div>
          <div className="content-card nonprofit-card">
            <h3>STKZ SC</h3>
            <p>STKZ SC operates as a 501(c)(3) nonprofit youth soccer organization.</p>
            <p><strong>Charitable donations to STKZ SC are tax-deductible to the fullest extent allowed by law.</strong> Contribution acknowledgments are issued for qualifying charitable gifts.</p>
            <p className="legal-note">Sponsorships that include advertising, promotional benefits, goods, or services may be treated differently from charitable donations. Sponsors should consult their tax adviser regarding their specific contribution.</p>
            <a href={documentationEmail} className="text-link">Request nonprofit documentation →</a>
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
            <h2>Help us create more chances to play, grow, compete, and give back.</h2>
            <p>Choose a charitable gift, sponsorship, or community partnership and help STKZ SC create more opportunity for players and families.</p>
          </div>
          <div className="cta-actions">
            <a href={paypalUrl} target="_blank" rel="noreferrer" className="button button-navy">Donate Now</a>
            <a href="#sponsorship" className="button button-outline-dark">Become a Sponsor</a>
            <Link href="/access" className="button button-outline-dark">Our Mission</Link>
          </div>
        </div>
      </section>
    </>
  );
}
