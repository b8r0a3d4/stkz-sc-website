// Server-only email delivery for the public STKZ website.
// Resend credentials are configured in Vercel; never expose them in client code.
export const runtime = "nodejs";

const destinations = {
  contact: {
    label: "Website Contact",
    required: ["Name", "Email", "Reason", "Message"],
    fields: ["Name", "Email", "Phone", "Reason", "Message"],
    subjectField: "Name",
  },
  join: {
    label: "Player Interest",
    required: ["Player name", "Player birth year", "Parent / guardian name", "Mobile phone"],
    fields: [
      "Player name", "Player birth year", "Parent / guardian name",
      "Mobile phone", "Email", "Player gender / team preference",
      "Current player pathway", "Desired player pathway", "Current team / club",
      "Primary position", "Comments",
    ],
    subjectField: "Player name",
  },
  sponsor: {
    label: "Sponsorship Inquiry",
    required: ["Contact name", "Business name", "Sponsorship for"],
    fields: [
      "Contact name", "Business name", "Email", "Sponsorship for", "Phone",
      "Who / what sponsorship is for", "Message",
    ],
    subjectField: "Business name",
  },
};

function response(body, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

function clean(value, limit) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, limit);
}

export async function POST(request) {
  // Requests from other browser origins are not valid submissions.
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) {
    return response({ error: "Invalid request origin." }, 403);
  }

  if (!request.headers.get("content-type")?.includes("application/json")) {
    return response({ error: "Invalid submission format." }, 415);
  }

  const declaredSize = Number(request.headers.get("content-length") || 0);
  if (declaredSize > 16000) {
    return response({ error: "Submission is too large." }, 413);
  }

  let payload;
  try {
    const body = await request.text();
    if (body.length > 16000) return response({ error: "Submission is too large." }, 413);
    payload = JSON.parse(body);
  } catch {
    return response({ error: "Please check the form and try again." }, 400);
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return response({ error: "Invalid submission." }, 400);
  }

  // Hidden field catches basic form bots without penalizing visitors.
  if (clean(payload.website, 200)) return response({ success: true });

  const config = destinations[payload.formType];
  if (!config || !payload.fields || typeof payload.fields !== "object" || Array.isArray(payload.fields)) {
    return response({ error: "Invalid submission." }, 400);
  }

  const fields = Object.fromEntries(config.fields.map((key) => [
    key,
    clean(payload.fields[key], key === "Message" || key === "Comments" ? 4000 : 250),
  ]));

  if (config.required.some((key) => !fields[key])) {
    return response({ error: "Please complete the required fields." }, 400);
  }

  if (fields.Email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.Email)) {
    return response({ error: "Please enter a valid email address." }, 400);
  }

  if (payload.formType === "join" && !/^(19|20)\d{2}$/.test(fields["Player birth year"])) {
    return response({ error: "Please enter a four-digit birth year." }, 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) {
    return response({ error: "Online submissions are temporarily unavailable. Please try again later." }, 503);
  }

  const submittedName = fields[config.subjectField].replace(/[\r\n]+/g, " ").slice(0, 100);
  const subject = `STKZ SC — ${config.label} — ${submittedName}`;
  const body = [
    `New ${config.label.toLowerCase()} submitted through stkzsc.org.`,
    "",
    ...config.fields.filter((key) => fields[key]).map((key) => `${key}: ${fields[key]}`),
  ].join("\n");

  const email = {
    from,
    to: ["stkzsc@gmail.com"],
    subject,
    text: body,
  };
  if (fields.Email) email.reply_to = fields.Email;

  try {
    const sent = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email),
      cache: "no-store",
      signal: AbortSignal.timeout(12000),
    });

    if (!sent.ok) {
      // Never log personal/child information or API keys.
      console.error("Form email delivery failed", { status: sent.status, type: payload.formType });
      return response({ error: "We couldn't send your message. Please try again." }, 502);
    }

    return response({ success: true });
  } catch {
    console.error("Form email delivery failed", { type: payload.formType });
    return response({ error: "We couldn't send your message. Please try again." }, 502);
  }
}
