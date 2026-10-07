"use client";

import { useState } from "react";
import { site } from "@/data/site";

function buildBody(data) {
  return Object.entries(data)
    .filter(([, value]) => String(value || "").trim())
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n");
}

export default function EmailForm({ type = "contact" }) {
  const [status, setStatus] = useState("");
  const join = type === "join";

  function submit(event) {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data = Object.fromEntries(fd.entries());
    const subject = join
      ? `STKZ SC Player Interest — ${data["Player name"] || "New inquiry"}`
      : `STKZ SC Website Inquiry — ${data.Name || "New message"}`;
    const body = buildBody(data);
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app should open with the form details ready to send.");
  }

  if (!join) {
    return (
      <form className="form-card" onSubmit={submit}>
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
        <button className="button button-gold" type="submit">Send Message</button>
        <p className="form-note">Submitting opens your email app so you can send the message directly to STKZ SC.</p>
        {status && <p className="form-status">{status}</p>}
      </form>
    );
  }

  return (
    <form className="form-card join-interest-form" onSubmit={submit}>
      <div className="form-title-row">
        <div>
          <p className="eyebrow">Player Interest</p>
          <h3>Start with the essentials.</h3>
        </div>
        <span className="form-time">No exact team name needed</span>
      </div>

      <fieldset className="form-section">
        <legend><span>01</span> Parent contact</legend>
        <div className="form-grid">
          <label>Parent / guardian name<input name="Parent / guardian name" autoComplete="name" required /></label>
          <label>Email<input name="Email" type="email" autoComplete="email" required /></label>
          <label className="full">Mobile phone<input name="Mobile phone" type="tel" autoComplete="tel" required /></label>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend><span>02</span> Player</legend>
        <div className="form-grid">
          <label>Player name<input name="Player name" required /></label>
          <label>Birth year<input name="Player birth year" inputMode="numeric" maxLength="4" placeholder="e.g. 2014" required /></label>
          <label>Team preference<select name="Player gender / team preference" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Boys team</option>
            <option>Girls team</option>
            <option>Open to the best fit</option>
            <option>Not sure yet</option>
          </select></label>
          <label>Current playing level<select name="Current playing level" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>New to organized soccer</option>
            <option>Recreational</option>
            <option>Academy / developmental</option>
            <option>Competitive / club</option>
            <option>Not sure</option>
          </select></label>
        </div>
      </fieldset>

      <fieldset className="form-section">
        <legend><span>03</span> Next step</legend>
        <div className="form-grid">
          <label className="full">What is your family looking for?<select name="What family is looking for" required defaultValue="">
            <option value="" disabled>Select one</option>
            <option>Competitive team / tryout</option>
            <option>Player development / training</option>
            <option>Both team and development</option>
            <option>Not sure — help us choose</option>
          </select></label>
        </div>
      </fieldset>

      <details className="form-optional">
        <summary>Add playing background or comments <span>Optional</span></summary>
        <div className="form-grid optional-grid">
          <label>Current team / club<input name="Current team / club" /></label>
          <label>Primary position<input name="Primary position" /></label>
          <label className="full">Anything else we should know?<textarea name="Comments" rows="4" /></label>
        </div>
      </details>

      <button className="button button-gold join-submit" type="submit">Send Player Interest</button>
      <p className="form-note">Submitting opens your email app with the player information ready to send to STKZ SC. If it does not open, email <a href={`mailto:${site.email}`}>{site.email}</a>.</p>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
