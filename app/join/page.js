import PageHero from "@/components/PageHero";
import EmailForm from "@/components/EmailForm";

export const metadata = {
  title: "Join STKZ | Tryouts & Player Interest",
  description: "Register your interest in STKZ SC teams, tryouts, evaluations, and player development opportunities.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero eyebrow="Tryouts · Teams · Development" title="Join STKZ." copy="Tell us about your player. We’ll help identify the right next step based on age, current level, goals, and available opportunities." image="/images/stkz-action-duel.webp" imageAlt="Youth soccer players battling for the ball during a match" />
      <section className="section">
        <div className="container content-grid">
          <div>
            <p className="eyebrow">Player Interest</p>
            <h2>Start the conversation.</h2>
            <p>Complete the form with as much context as you can. STKZ SC will use it to point your family toward the most relevant team, tryout, evaluation, or development opportunity.</p>
            <div className="content-card">
              <h3>What happens next?</h3>
              <ul className="list-clean">
                <li>We review the player's age and current soccer environment.</li>
                <li>We look for the most relevant team or training pathway.</li>
                <li>We follow up with the next available step.</li>
              </ul>
            </div>
          </div>
          <EmailForm type="join" />
        </div>
      </section>
    </>
  );
}
