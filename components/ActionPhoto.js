export default function ActionPhoto({ src, alt, eyebrow = "STKZ SC in Action", title }) {
  return (
    <section className="action-photo-section">
      <div className="container action-photo-grid">
        <div className="action-photo-frame">
          <img src={src} alt={alt} loading="lazy" />
        </div>
        <div className="action-photo-copy">
          <p className="eyebrow gold">{eyebrow}</p>
          <h3>{title || "The work shows up in the game."}</h3>
        </div>
      </div>
    </section>
  );
}
