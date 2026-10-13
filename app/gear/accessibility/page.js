export const metadata = { title: "Accessibility | STKZ Gear" };

export default function AccessibilityPage() {
  return (
    <article style={{ maxWidth: 820, margin: "0 auto", padding: "5rem 1.25rem", lineHeight: 1.7 }}>
      <h1>Accessibility</h1>
      <p>
        STKZ Gear is designed toward WCAG 2.2 Level AA accessibility, including keyboard navigation,
        visible focus states, semantic structure, sufficient contrast, reduced-motion support,
        descriptive controls, and practical touch targets.
      </p>
      <p>
        Accessibility is an ongoing process. If you encounter a barrier while shopping, use the STKZ
        contact page so we can provide an accessible alternative and correct the issue.
      </p>
      <h2>What we test</h2>
      <p>
        We review keyboard-only use, screen-reader labels and announcements, zoom and reflow,
        contrast, form labeling, error handling, and mobile interaction as the store changes.
      </p>
    </article>
  );
}
