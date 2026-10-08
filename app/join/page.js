import PageHero from "@/components/PageHero";
import EmailForm from "@/components/EmailForm";
import { media } from "@/data/media";

export const metadata = {
  title: "Join STKZ | Tryouts & Player Interest",
  description: "Tell STKZ SC about your player and explore current teams, tryouts, and development opportunities.",
};

export default function JoinPage() {
  return (
    <>
      <PageHero
        eyebrow="Tryouts · Teams · Development"
        title="Join STKZ."
        copy="Tell us about your player. We'll help identify the right team or development opportunity."
        image={media.join}
        imageAlt="Youth soccer players battling for the ball during a match"
      />
      <section className="section" id="player-interest">
        <div className="container content-grid join-grid">
          <div className="join-form">
            <EmailForm type="join" />
          </div>
          <div className="join-copy">
            <p className="eyebrow">What Happens Next</p>
            <h2>We’ll find the next step.</h2>
            <div className="content-card next-step-card">
              <ol className="join-steps">
                <li><span>1</span><div><strong>Tell us about the player.</strong><p>Birth year and parent contact are enough to begin.</p></div></li>
                <li><span>2</span><div><strong>We review the fit.</strong><p>Current teams, tryouts, and training opportunities.</p></div></li>
                <li><span>3</span><div><strong>We follow up.</strong><p>We'll share a relevant next step.</p></div></li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
