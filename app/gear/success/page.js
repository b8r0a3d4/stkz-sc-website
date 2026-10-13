import Link from "next/link";
import styles from "../gear.module.css";

export const metadata = { title: "Order received | STKZ Gear" };

export default function GearSuccessPage() {
  return (
    <section className={styles.mission} style={{ minHeight: "62vh", display: "grid", alignContent: "center" }}>
      <p className={styles.eyebrow}>ORDER RECEIVED</p>
      <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem,8vw,7rem)", lineHeight: ".9", margin: 0 }}>
        YOU'RE LOCKED IN.
      </h1>
      <p style={{ maxWidth: 620, fontSize: "1.1rem", lineHeight: 1.55 }}>
        Your payment was submitted successfully. Stripe will send your receipt to the email used at checkout.
      </p>
      <Link href="/gear" className={styles.primaryCta} style={{ background: "#111", color: "#fff", width: "fit-content" }}>
        Back to STKZ Gear
      </Link>
    </section>
  );
}
