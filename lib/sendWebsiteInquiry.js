// Shared browser-side helper for Contact, Join, and Sponsor forms.
export async function sendWebsiteInquiry(type, form) {
  const data = Object.fromEntries(new FormData(form).entries());
  const website = String(data._trap || "");
  delete data._trap;

  const response = await fetch("/api/inquiries", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType: type, fields: data, website }),
  });

  const result = await response.json().catch(() => ({}));
  if (!response.ok || !result.success) {
    throw new Error(result.error || "Your message could not be sent. Please try again.");
  }
}
