import PageHero from "@/components/PageHero";
import EmailForm from "@/components/EmailForm";
import { media } from "@/data/media";

export const metadata = {
  title: "Join STKZ | Tryouts & Player Interest",
  description: "Register your interest in STKZ SC teams, tryouts, evaluations, and player development opportunities.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Tryouts · Teams · Development"
        title="Join STKZ."
        copy="Start with the essentials. We’ll use your player’s age, level, team preference, and goals to help identify the right next step."
        image={media.join}
        imageAlt="Youth soccer players battling for the ball during a match"
      />

      <section className="join-assurance">
        <div className="container join-assurance-row">
          <span>No exact team name needed</span>
          <span>Start with current level + goals</span>
          <span>We help identify the next step</span>
        </div>
      </section>

      <section className="section" id="player-interest">
        <div className="container content-grid join-grid">
          <div className="join-copy">
            <p className="eyebrow">What Happens Next</p>
            <h2>Start the conversation.</h2>
            <p>You do not need to solve the placement question before contacting us. Give us the player basics and what your family is looking for.</p>
            <div className="content-card next-step-card">
              <ol className="join-steps">
                <li><span>1</span><div><strong>We review the player.</strong><p>Age, current environment, level, and goals.</p></div></li>
                <li><span>2</span><div><strong>We identify the most relevant path.</strong><p>Team, tryout, evaluation, or development opportunity.</p></div></li>
                <li><span>3</span><div><strong>We follow up with the next step.</strong></div></li>
              </ol>
            </div>
          </div>
          <div className="join-form">
            <EmailForm type="join" />
          </div>
        </div>
      </section>
    </>
  );
}
