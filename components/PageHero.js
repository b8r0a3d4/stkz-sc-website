import { preload } from "react-dom";

export default function PageHero({ eyebrow, title, copy, image, imageAlt = "", variant = "split" }) {
  const cover = variant === "cover";
  const hasImage = Boolean(image);

  if (hasImage) {
    preload(image, { as: "image", fetchPriority: "high" });
  }

  return (
    <section className={`page-hero${hasImage ? cover ? " page-hero-cover" : " page-hero-photo" : ""}`}>
      {cover && hasImage && (
        <div className="page-hero-cover-media">
          <img src={image} alt={imageAlt} loading="eager" fetchPriority="high" decoding="async" />
        </div>
      )}
      <div className="container page-hero-inner">
        <div className="page-hero-text">
          <p className="eyebrow gold">{eyebrow}</p>
          <h1>{title}</h1>
          {copy && <p className="page-hero-copy">{copy}</p>}
        </div>
        {!cover && hasImage && (
          <div className="page-hero-media">
            <img src={image} alt={imageAlt} loading="eager" fetchPriority="high" decoding="async" />
          </div>
        )}
      </div>
    </section>
  );
}
