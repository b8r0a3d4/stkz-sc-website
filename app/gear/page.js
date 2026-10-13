import ShopClient from "./ShopClient";
import styles from "./gear.module.css";

export const metadata = {
  title: "STKZ Gear | Performance Soccer Equipment",
  description: "STKZ performance gear built for players: grip socks, insoles, shin guards, sleeves, and match-day accessories.",
};

export default function GearPage() {
  return (
    <>
      <a className={styles.skipLink} href="#gear-products">Skip to products</a>

      <section className={styles.hero} aria-labelledby="gear-title">
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>STKZ PERFORMANCE</p>
          <h1 id="gear-title">GEAR THAT<br />STAYS READY.</h1>
          <p className={styles.heroCopy}>
            Purpose-built soccer essentials. Clean design, locked-in feel, and zero wasted detail.
          </p>
          <a className={styles.primaryCta} href="#gear-products">Shop the collection</a>
        </div>

        <div className={styles.heroVisual} aria-hidden="true">
          <div className={styles.sockHero}>
            <span className={styles.cuffWord}>STKZ</span>
            <span className={styles.heroMark} />
            <span className={styles.microBand}>STKZ • STKZ • STKZ • STKZ</span>
          </div>
        </div>
      </section>

      <section className={styles.promise} aria-label="STKZ shopping benefits">
        <span>SECURE CHECKOUT</span>
        <span>PLAYER-FIRST DESIGN</span>
        <span>EASY RETURNS</span>
        <span>ACCESS MISSION</span>
      </section>

      <ShopClient />

      <section className={styles.mission} aria-labelledby="mission-title">
        <p className={styles.eyebrow}>MORE THAN GEAR</p>
        <h2 id="mission-title">Every purchase helps expand access to the game.</h2>
        <p>STKZ supports opportunities for young players in underserved communities.</p>
      </section>
    </>
  );
}
