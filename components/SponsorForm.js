"use client";

import { useState } from "react";
import { site } from "@/data/site";

export default function SponsorForm() {
  const [status, setStatus] = useState("");

  function submit(event) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const subject = `STKZ SC Sponsorship Inquiry — ${data["Business name"] || "New sponsor"}`;
    const body = Object.entries(data)
      .filter(([, value]) => String(value || "").trim())
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the sponsorship details ready to send.");
  }

  return (
    <form className="form-card sponsor-form" onSubmit={submit}>
      <div className="form-title-row">
        <div>
          <p className="eyebrow">Sponsorship Inquiry</p>
          <h3>Start a sponsorship conversation.</h3>
        </div>
      </div>

      <div className="form-grid">
        <label>Contact name<input name="Contact name" autoComplete="name" required /></label>
        <label>Business name<input name="Business name" required /></label>
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

      <button className="button button-gold join-submit" type="submit">Send Sponsorship Inquiry</button>
      <p className="form-note">Submitting opens your email app with the sponsorship information ready to send to STKZ SC.</p>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
