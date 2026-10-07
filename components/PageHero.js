export default function PageHero({ eyebrow, title, copy, image, imageAlt = "" }) {
  return (
    <section className={`page-hero${image ? " page-hero-photo" : ""}`}>
      <div className="container page-hero-inner">
        <div className="page-hero-text">
          <p className="eyebrow gold">{eyebrow}</p>
          <h1>{title}</h1>
          {copy && <p className="page-hero-copy">{copy}</p>}
        </div>
        {image && (
          <div className="page-hero-media">
            <img src={image} alt={imageAlt} loading="eager" decoding="async" />
          </div>
        )}
      </div>
    </section>
  );
}
