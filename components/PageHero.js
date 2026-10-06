export default function PageHero({ eyebrow, title, copy }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <p className="eyebrow gold">{eyebrow}</p>
        <h1>{title}</h1>
        {copy && <p className="page-hero-copy">{copy}</p>}
      </div>
    </section>
  );
}
