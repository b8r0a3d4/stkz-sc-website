"use client";

import { useState } from "react";
import { site } from "@/data/site";
import { sendWebsiteInquiry } from "@/lib/sendWebsiteInquiry";

export default function EmailForm({ type = "contact" }) {
  const [status, setStatus] = useState({ type: "", message: "" });
  const [sending, setSending] = useState(false);
  const join = type === "join";

  async function submit(event) {
    event.preventDefault();
    if (sending) return;
    const form = event.currentTarget;
    setSending(true);
    setStatus({ type: "", message: "" });
    try {
      await sendWebsiteInquiry(join ? "join" : "contact", form);
      form.reset();
      setStatus({
        type: "success",
        message: join
          ? "Thanks! Your player's information was sent to STKZ SC. We'll be in touch."
          : "Thanks! Your message was sent to STKZ SC.",
      });
    } catch (error) {
      setStatus({ type: "error", message: error.message || "Unable to send. Please try again." });
    } finally {
      setSending(false);
    }
  }

  if (!join) {
    return (
      <form className="form-card" onSubmit={submit}>
        <div className="form-honeypot" aria-hidden="true"><label>Leave this blank<input name="_trap" tabIndex={-1} autoComplete="off" /></label></div>
        <div className="form-grid">
          <label>Name<input name="Name" autoComplete="name" required /></label>
          <label>Email<input name="Email" type="email" autoComplete="email" required /></label>
          <label>Phone<input name="Phone" type="tel" autoComplete="tel" /></label>
          <label>Reason<select name="Reason" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Teams / Tryouts</option>
            <option>Training</option>
            <option>Facilities</option>
            <option>Partnership / Sponsor</option>
            <option>Other</option>
          </select></label>
          <label className="full">Message<textarea name="Message" rows="6" required /></label>
        </div>
        <button className="button button-gold" type="submit" disabled={sending}>{sending ? "Sending…" : "Send Message"}</button>
        <p className="form-note">Your message goes directly to STKZ SC. No email app required.</p>
        {status.message && <p className={`form-status ${status.type}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite">{status.message}</p>}
      </form>
    );
  }

  return (
    <form className="form-card join-interest-form" onSubmit={submit}>
      <div className="form-honeypot" aria-hidden="true"><label>Leave this blank<input name="_trap" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="form-title-row">
        <div>
          <p className="eyebrow">Player Interest</p>
          <h3>Start with the essentials.</h3>
        </div>
        <span className="form-time">Just 4 required fields</span>
      </div>

      <fieldset className="form-section">
        <legend><span>01</span> Player</legend>
        <div className="form-grid">
          <label>Player name<input name="Player name" required /></label>
          <label>Birth year<input name="Player birth year" inputMode="numeric" maxLength="4" placeholder="e.g. 2014" required /></label>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend><span>02</span> Parent contact</legend>
        <div className="form-grid">
          <label>Parent / guardian name<input name="Parent / guardian name" autoComplete="name" required /></label>
          <label>Mobile phone<input name="Mobile phone" type="tel" autoComplete="tel" required /></label>
        </div>
      </fieldset>

      <details className="form-optional">
        <summary>Add more player details <span>Optional</span></summary>
        <div className="form-grid optional-grid">
          <label>Email<input name="Email" type="email" autoComplete="email" /></label>
          <label>Team preference<select name="Player gender / team preference" defaultValue="">
            <option value="">Select one</option>
            <option>Boys team</option>
            <option>Girls team</option>
            <option>Open to the best fit</option>
            <option>Not sure yet</option>
          </select></label>
          <label>Where is your player now?<select name="Current player pathway" defaultValue="">
            <option value="">Select one</option>
            <option>Juniors / Grassroots</option>
            <option>Academy</option>
            <option>Premier</option>
            <option>Not sure</option>
          </select></label>
          <label>Where does your player want to go?<select name="Desired player pathway" defaultValue="">
            <option value="">Select one</option>
            <option>Juniors / Grassroots</option>
            <option>Academy</option>
            <option>Premier</option>
            <option>Not sure — help us choose</option>
          </select></label>
          <label>Current team / club<input name="Current team / club" /></label>
          <label>Primary position<input name="Primary position" /></label>
          <label className="full">Anything else we should know?<textarea name="Comments" rows="4" /></label>
        </div>
      </details>

      <button className="button button-gold join-submit" type="submit" disabled={sending}>{sending ? "Sending…" : "Send Player Interest"}</button>
      <p className="form-note">Your information goes directly to STKZ SC. For help, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      {status.message && <p className={`form-status ${status.type}`} role={status.type === "error" ? "alert" : "status"} aria-live="polite">{status.message}</p>}
    </form>
  );
}
