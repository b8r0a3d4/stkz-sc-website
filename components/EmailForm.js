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
          <label>Name<input name="Name" required /></label>
          <label>Email<input name="Email" type="email" required /></label>
          <label>Phone<input name="Phone" type="tel" /></label>
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
    <form className="form-card" onSubmit={submit}>
      <div className="form-grid">
        <label>Parent / guardian name<input name="Parent / guardian name" required /></label>
        <label>Email<input name="Email" type="email" required /></label>
        <label>Mobile phone<input name="Mobile phone" type="tel" required /></label>
        <label>Player name<input name="Player name" required /></label>
        <label>Player birth year<input name="Player birth year" inputMode="numeric" required /></label>
        <label>Player gender / team preference<input name="Player gender / team preference" required /></label>
        <label>Current team / club<input name="Current team / club" /></label>
        <label>Primary position<input name="Primary position" /></label>
        <label>Current playing level<select name="Current playing level" required defaultValue="">
          <option value="" disabled>Select one</option>
          <option>New to organized soccer</option>
          <option>Recreational</option>
          <option>Academy / developmental</option>
          <option>Competitive / club</option>
          <option>Other</option>
        </select></label>
        <label>What is your family looking for?<input name="What family is looking for" required /></label>
        <label className="full">Comments<textarea name="Comments" rows="6" /></label>
      </div>
      <button className="button button-gold" type="submit">Send Player Interest</button>
      <p className="form-note">Submitting opens your email app with the player information ready to send to STKZ SC.</p>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
}
