import Link from "next/link";
import { playerPathway, pathwayPrinciples } from "@/data/playerPathway";

export default function PlayerPathway({ compact = false }) {
  return (
    <section className={compact ? "player-pathway compact" : "player-pathway"}>
      <div className="container pathway-heading">
        <div>
          <p className="eyebrow">Player Pathway</p>
          <h2>Juniors / Grassroots → Academy → Premier</h2>
        </div>
        <p>Every stage has a different emphasis, but the goal stays the same: help players build the tools, habits, confidence, and understanding to take the next meaningful step.</p>
      </div>

      <div className="container pathway-roadmap" aria-label="STKZ SC player pathway">
        {playerPathway.map((stage, index) => (
          <article className={`pathway-stage pathway-${stage.key}`} key={stage.key}>
            <div className="pathway-stage-top">
              <div>
                <span className="pathway-step">0{index + 1}</span>
                <h3>{stage.stage}</h3>
              </div>
              <span className="pathway-age">{stage.age}</span>
            </div>
            <p className="pathway-theme">{stage.theme}</p>
            <ul>
              {stage.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </article>
        ))}
      </div>

      <div className="container pathway-footer">
        <div className="pathway-principles">
          {pathwayPrinciples.map((item) => <span key={item}>{item}</span>)}
        </div>
        <Link href="/join#player-interest" className="text-link">Tell us where your player is now →</Link>
      </div>
    </section>
  );
}
