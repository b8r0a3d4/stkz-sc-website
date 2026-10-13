# STKZ Gear compliance baseline

This implementation is designed to support a strong compliance posture. Code alone does not make an organization SOC 2, HIPAA, or ADA compliant.

## Accessibility / ADA
Target WCAG 2.2 Level AA:
- semantic structure and keyboard operation
- visible focus states
- screen-reader labels and live status messaging
- contrast-conscious visual design
- responsive reflow and reduced-motion support
- practical touch targets
- manual accessibility testing before launch and after material UI changes

## SOC 2 readiness
- HTTPS only and hardened response headers
- secrets kept server-side
- payment amounts validated server-side
- no card-number storage in STKZ application code
- MFA and least-privilege access required for administrators
- operational controls still needed for access reviews, incident response, vendor review, backups, change management, security training, and evidence retention

SOC 2 is an organizational audit. Using SOC 2 audited vendors does not make STKZ itself SOC 2 compliant.

## HIPAA
The retail storefront is intentionally designed not to collect protected health information (PHI).

If STKZ later adds a workflow that creates, receives, maintains, or transmits PHI:
- determine whether STKZ is acting as a covered entity or business associate for that workflow
- execute required BAAs with every service provider that touches PHI
- use only vendor plans and features covered by those BAAs
- keep PHI out of analytics, logs, support chat, email, public storage, and monitoring unless those systems are explicitly in scope
- enable audit logging, MFA, retention controls, access reviews, risk analysis, and breach-response procedures
- obtain legal/compliance review before representing the workflow as HIPAA compliant

## Payments
Stripe-hosted Checkout is used so full card numbers do not transit or persist in STKZ application code.
Enable Stripe Tax only after tax settings and registrations are configured.

## Before production launch
1. Add STRIPE_SECRET_KEY to Vercel and enable Stripe Tax only after configuration.
2. Add Stripe webhook handling for completed, failed, refunded, and disputed orders.
3. Add persistent inventory and fulfillment records.
4. Finalize shipping, return, privacy, and tax policies.
5. Run automated accessibility scans plus manual keyboard and screen-reader testing.
6. Perform dependency, secret, and administrator access review.
7. If PHI ever becomes in scope, pause launch of that workflow until vendor BAAs and HIPAA controls are complete.
