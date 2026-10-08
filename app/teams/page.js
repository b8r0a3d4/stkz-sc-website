import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTA from "@/components/CTA";
import { media } from "@/data/media";
import { currentTeams, leagues } from "@/data/teams";

export const metadata = {
  title: "Teams",
  description: "Explore current STKZ SC teams competing in the East Texas Premier League and Texas Clubs Soccer League.",
};

export default function TeamsPage() {
  return (
    <>
      <PageHero
        eyebrow="STKZ Teams"
        title="Find Your Team."
        copy="See our current teams and competition leagues, then tell us about your player and we’ll help identify the right next step."
        image={media.teams}
        imageAlt="Youth soccer players attacking during a competitive match"
      />

      <section className="section current-teams-section">
        <div className="container section-heading split-heading">
          <div>
            <p className="eyebrow">Current Teams & Leagues</p>
            <h2>Where STKZ competes.</h2>
          </div>
          <p>STKZ SC currently competes through the East Texas Premier League and Texas Clubs Soccer League, with teams playing in Tyler and Dallas.</p>
        </div>

        <div className="container league-grid">
          {leagues.map((league) => (
            <article className="league-card" key={league.code}>
              <div className="league-code">{league.code}</div>
              <div>
                <p className="eyebrow gold">League</p>
                <h3>{league.name}</h3>
                <p>Current STKZ competition location: <strong>{league.competitionArea}</strong></p>
              </div>
            </article>
          ))}
        </div>

        <div className="container teams-table-wrap">
          <table className="teams-table">
            <thead>
              <tr>
                <th>Team</th>
                <th>League</th>
                <th>Location</th>
              </tr>
            </thead>
            <tbody>
              {currentTeams.map((team) => (
                <tr key={team.team}>
                  <td>{team.team}</td>
                  <td><span className="league-pill">{team.league}</span></td>
                  <td>{team.location}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="teams-mobile-list" aria-label="Current STKZ teams">
            {currentTeams.map((team) => (
              <article className="team-row-card" key={team.team}>
                <div>
                  <p className="team-row-label">Team</p>
                  <h3>{team.team}</h3>
                </div>
                <div className="team-row-meta">
                  <span><strong>League</strong>{team.league}</span>
                  <span><strong>Location</strong>{team.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="container current-teams-cta">
          <p>Don’t see an exact fit? Team availability and placement can change as players develop and rosters evolve.</p>
          <Link href="/join#player-interest" className="button button-navy">Tell Us About Your Player</Link>
        </div>
      </section>

      <section className="team-fit-band">
        <div className="container team-fit-row">
          <span>Birth year</span>
          <span>Current level</span>
          <span>Player goals</span>
          <span>Roster fit</span>
        </div>
      </section>

      <section className="section">
        <div className="container split-heading section-heading">
          <div><p className="eyebrow">Choose Your Starting Point</p><h2>Start with the player, not a team name.</h2></div>
          <p>Team placement depends on age, current level, developmental fit, roster needs, and the environment that gives the player the best next step.</p>
        </div>
        <div className="card-grid three team-path-grid">
          <article className="feature-card navy-card">
            <span>01</span><h3>Competitive Team Placement</h3>
            <p>Your player is looking for a competitive roster, tryout, or evaluation opportunity.</p>
            <Link href="/join#player-interest">Start player interest →</Link>
          </article>
          <article className="feature-card">
            <span>02</span><h3>Development First</h3>
            <p>You want to improve the player first and understand the competitive pathway from there.</p>
            <Link href="/development">Explore development →</Link>
          </article>
          <article className="feature-card">
            <span>03</span><h3>Not Sure Yet?</h3>
            <p>That is fine. Give us the basics and we’ll help identify the most relevant next step.</p>
            <Link href="/join#player-interest">Help us find the fit →</Link>
          </article>
        </div>
      </section>

      <section className="section section-navy placement-section">
        <div className="container placement-grid">
          <div>
            <p className="eyebrow gold">How Placement Works</p>
            <h2>A clear next step without guessing.</h2>
            <p className="placement-lead">Current availability can change as rosters develop, so we confirm the fit directly rather than publish stale openings.</p>
          </div>
          <ol className="placement-steps">
            <li><span>01</span><div><strong>Tell us about the player.</strong><p>Birth year, current level, team preference, and what your family is looking for.</p></div></li>
            <li><span>02</span><div><strong>We evaluate the fit.</strong><p>We connect that information to the most relevant current team or development opportunity.</p></div></li>
            <li><span>03</span><div><strong>We point you to the next action.</strong><p>That may be a tryout, evaluation, conversation, or development step based on the current environment.</p></div></li>
          </ol>
        </div>
      </section>

      <CTA title="Ready to find the fit?" copy="Tell us your player’s birth year and goals. You do not need to know the exact team name." />
    </>
  );
}
