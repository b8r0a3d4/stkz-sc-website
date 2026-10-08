"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { sendWebsiteInquiry } from "@/lib/sendWebsiteInquiry";

export default function SponsorForm() {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);

  async function submit(event) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    setSending(true);
    setStatus({ type: "", message: "" });
    try {
      await sendWebsiteInquiry("sponsor", form);
      form.reset();
      setStatus({ type: "success", message: "Thanks! Your sponsorship inquiry was sent to STKZ SC." });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to send. Please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="form-card sponsor-form" onSubmit={submit}>
      <div className="form-honeypot" aria-hidden="true"><label>Leave this blank<input name="_trap" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="form-title-row">
        <div>
          <p className="eyebrow">Sponsorship Inquiry</p>
          <h3>Start a sponsorship conversation.</h3>
        </div>
      </div>

      <div className="form-grid">
        <label>Contact name<input name="Contact name" autoComplete="name" required /></label>
        <label>Business name<input name="Business name" required /></label>
        <label>Email (optional)<input name="Email" type="email" autoComplete="email" /></label>
        <label>Sponsorship for<select name="Sponsorship for" defaultValue="" required>
          <option value="" disabled>Select one</option>
          <option>Sponsor a Player</option>
          <option>Sponsor a Team</option>
          <option>Sponsor the Club</option>
          <option>Other / Custom Partnership</option>
        </select></label>
        <label>Phone<input name="Phone" type="tel" autoComplete="tel" /></label>
        <label className="full">Player, team, or area you hope to support<input name="Who / what sponsorship is for" /></label>
        <label className="full">Anything else we should know?<textarea name="Message" rows="4" /></label>
      </div>

      <button className="button button-gold join-submit" type="submit" disabled={sending}>{sending ? "Sending…" : "Send Sponsorship Inquiry"}</button>
      <p className="form-note">Your inquiry goes directly to STKZ SC. No email app required.</p>
      {status.message && <p className={`form-status ${status.type}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite">{status.message}</p>}
    </form>
  );
}
