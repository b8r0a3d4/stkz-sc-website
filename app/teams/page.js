import Link from "next/link";
import PageHero from "@/components/PageHero";
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
        copy="See our current teams and tell us about your player. We'll help you find the right fit."
        image={media.teams}
        imageAlt="Youth soccer players attacking during a competitive match"
      />

      <section className="section current-teams-section">
        <div className="container section-heading">
          <p className="eyebrow">Current Teams</p>
          <h2>Where STKZ competes.</h2>
          <p className="teams-league-summary">
            {leagues.map((league, index) => (
              <span key={league.code}>
                {index > 0 && " · "}
                <strong>{league.code}</strong> — {league.name} ({league.competitionArea})
              </span>
            ))}
          </p>
        </div>

        <div className="container teams-table-wrap">
          <table className="teams-table">
            <thead>
              <tr><th>Team</th><th>League</th><th>Location</th></tr>
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
          <p>Don't see an exact match? Rosters and placement change. Share your player's birth year and goals, and we'll help with the next step.</p>
          <Link href="/join#player-interest" className="button button-navy">Tell Us About Your Player</Link>
        </div>
      </section>
    </>
  );
}
