import { media } from "@/data/media";

const pageMedia = {
  "Our Community. Our Why.": media.about,
  "Talent exists everywhere. Opportunity doesn’t.": media.access,
  "People shape the environment.": media.coaches,
  "Let's talk soccer.": media.contact,
  "Build the player.": media.development,
  "Train. Compete. Connect.": media.events,
  "Places built for the game.": media.facilities,
  "Join STKZ.": media.join,
  "Find Your Team.": media.teams,
};

export default function PageHero({ eyebrow, title, copy, image, imageAlt = "" }) {
  const resolvedImage = pageMedia[title] || image;

  return (
    <section className={`page-hero${resolvedImage ? " page-hero-photo" : ""}`}>
      <div className="container page-hero-inner">
        <div className="page-hero-text">
          <p className="eyebrow gold">{eyebrow}</p>
          <h1>{title}</h1>
          {copy && <p className="page-hero-copy">{copy}</p>}
        </div>
        {resolvedImage && (
          <div className="page-hero-media">
            <img src={resolvedImage} alt={imageAlt} loading="eager" decoding="async" />
          </div>
        )}
      </div>
    </section>
  );
}
