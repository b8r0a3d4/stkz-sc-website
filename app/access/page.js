import PageHero from "@/components/PageHero";
import Link from "next/link";
import { media } from "@/data/media";

export const metadata = {
  title: "Every Player. Every Chance.",
  description: "Learn how STKZ SC is expanding access to quality soccer development for players in Jacksonville, rural East Texas, and other underserved soccer markets.",
};

const barriers = [
  {
    number: "01",
    title: "Geography",
    copy: "In smaller communities, the next quality training environment, competitive league, or experienced coach may be much farther away than it is for a player in a major metro area.",
  },
  {
    number: "02",
    title: "Cost of Access",
    copy: "Travel, fees, equipment, and repeated long-distance trips can turn a development opportunity into a family logistics problem before a player ever steps on the field.",
  },
  {
    number: "03",
    title: "Depth of Opportunity",
    copy: "Smaller markets may have talented players but fewer teams, fewer specialized coaches, fewer high-level games, and fewer visible pathways to the next stage.",
  },
  {
    number: "04",
    title: "Visibility",
    copy: "A player should not have to live in Dallas, Houston, Austin, or another major soccer market to be taken seriously. Development and opportunity should be able to reach the player.",
  },
];

const approach = [
  {
    title: "Bring Development Closer",
    copy: "Create quality training environments in Jacksonville and East Texas so families can access meaningful development without making every opportunity dependent on a long drive to a major city.",
  },
  {
    title: "Build Better Local Environments",
    copy: "Invest in coaching, facilities, equipment, and programming that raise the standard of the everyday soccer experience close to home.",
  },
  {
    title: "Connect Players to Competition",
    copy: "Use local development as the foundation, then connect players and teams to the competition, events, and experiences that challenge them beyond their immediate market.",
  },
  {
    title: "Keep the Door Open",
    copy: "Use charitable support, sponsorships, scholarships, and access-focused programming to help financial limitations become less decisive in a player's soccer path.",
  },
];

export default function AccessPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Access Mission"
        title="Talent exists everywhere. Opportunity doesn’t."
        copy="STKZ SC exists in part to close the distance between talented players in smaller, rural, and underserved soccer markets and the quality coaching, competition, facilities, and development opportunities they deserve."
        image={media.access}
        imageAlt="Youth soccer players competing with courage during a match"
      />

      <section className="section">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">Every Player. Every Chance.</p>
            <p className="statement">A player’s ZIP code should not determine the ceiling of their opportunity.</p>
          </div>
          <div className="content-card">
            <p>In large soccer markets, families can often choose from multiple clubs, trainers, facilities, leagues, and levels of competition within a relatively small radius. In rural and smaller-market communities, that ecosystem is often thinner and farther apart.</p>
            <p>That does not mean the players are less talented or less ambitious. It means the infrastructure around them can offer fewer repetitions, fewer coaches, fewer competitive matches, and fewer obvious next steps.</p>
            <p>STKZ SC is working to build more of that infrastructure closer to home in Jacksonville and across East Texas.</p>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container section-heading split-heading light">
          <div>
            <p className="eyebrow gold">The Small-Market Challenge</p>
            <h2>Talent can be local. Opportunity is often concentrated elsewhere.</h2>
          </div>
          <p>For many families outside major metropolitan areas, pursuing better soccer can require more travel, more expense, more time, and more uncertainty. Those barriers compound over years of development.</p>
        </div>

        <div className="container card-grid four">
          {barriers.map((item) => (
            <article className="number-card" key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container section-heading split-heading">
          <div>
            <p className="eyebrow">What STKZ Is Building</p>
            <h2>A stronger soccer ecosystem closer to home.</h2>
          </div>
          <p>Our goal is not to pretend geography no longer matters. It is to make geography matter less by improving what players can access locally and creating clearer bridges to the opportunities that exist beyond our market.</p>
        </div>

        <div className="container card-grid four">
          {approach.map((item, index) => (
            <article className="feature-card" key={item.title}>
              <span>0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-navy">
        <div className="container content-grid">
          <div>
            <p className="eyebrow gold">Why East Texas</p>
            <h2>Underserved does not mean under-talented.</h2>
          </div>
          <div>
            <p>East Texas is made up of communities where talented, competitive players can be spread across many towns rather than concentrated in one dense soccer market. That changes what player development has to look like.</p>
            <p>STKZ SC wants to create a model where a player can begin close to home, receive serious development, compete in stronger environments, and see a pathway forward without assuming that meaningful soccer only exists somewhere else.</p>
            <p>That means building both sides of the equation: better local opportunity and better connections to the wider game.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">Access Is More Than a Scholarship</p>
            <h2>Financial help matters. So does the environment around the player.</h2>
          </div>
          <div className="content-card">
            <p>Player access can include financial assistance, but the problem is broader than fees alone. A player also needs places to train, coaches who can teach, teammates who challenge them, games that demand more from them, and a clear idea of what comes next.</p>
            <p>That is why STKZ SC’s access mission includes coaching, equipment, competition, facilities, scholarships, field development, and player-development opportunities. Each piece helps make a smaller market feel less limiting.</p>
          </div>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container content-grid">
          <div>
            <p className="eyebrow gold">Building Community</p>
            <h2>Better local soccer creates more than better teams.</h2>
          </div>
          <div>
            <p>When players can develop closer to home, families spend more time connected to their community, local coaches gain more opportunities to grow, younger players can see older players progressing, and the standard of the entire local game can rise.</p>
            <p>The long-term goal is not simply to send individual players somewhere else. It is to help build a soccer environment in East Texas that creates more opportunity here while still opening doors beyond it.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <p className="eyebrow">Support the Mission</p>
            <h2>Help make geography less decisive.</h2>
            <p>Support can help expand local access to coaching, equipment, competition, facilities, scholarships, field development, and player-development opportunities for families in smaller and underserved soccer markets.</p>
          </div>
          <div className="cta-actions">
            <Link href="/donate" className="button button-navy">Support STKZ</Link>
            <Link href="/join#player-interest" className="button button-outline-dark">Tell Us About Your Player</Link>
          </div>
        </div>
      </section>
    </>
  );
}
