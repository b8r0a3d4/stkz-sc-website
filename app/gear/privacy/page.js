export const metadata = { title: "Privacy & Security | STKZ Gear" };

export default function GearPrivacyPage() {
  return (
    <article style={{ maxWidth: 820, margin: "0 auto", padding: "5rem 1.25rem", lineHeight: 1.7 }}>
      <h1>Privacy & Security</h1>
      <p>
        STKZ Gear collects only information reasonably needed to fulfill purchases, provide customer
        service, prevent fraud, and meet legal or accounting obligations.
      </p>
      <h2>Payments</h2>
      <p>
        Payment card details are entered into Stripe's hosted checkout. STKZ Gear does not store full
        payment-card numbers on this website.
      </p>
      <h2>Health information</h2>
      <p>
        This retail store does not request or need protected health information. Please do not submit
        medical records, diagnoses, treatment information, or other health information through store forms.
      </p>
      <h2>Security</h2>
      <p>
        We use HTTPS, restricted application secrets, security headers, least-privilege access, and
        service-provider controls as part of a broader security program.
      </p>
    </article>
  );
}
