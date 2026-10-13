import { NextResponse } from "next/server";
import { getGearProduct } from "@/data/gearProducts";

export const runtime = "nodejs";

function addParam(params, key, value) {
  if (value !== undefined && value !== null && value !== "") {
    params.append(key, String(value));
  }
}

export async function POST(request) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Checkout is not connected yet. Add STRIPE_SECRET_KEY in Vercel to enable payments." },
      { status: 503 }
    );
  }

  try {
    const { items } = await request.json();

    if (!Array.isArray(items) || items.length === 0 || items.length > 20) {
      return NextResponse.json({ error: "Invalid cart." }, { status: 400 });
    }

    const safeItems = items.map((item) => {
      const product = getGearProduct(item.id);
      if (!product) throw new Error("A product in the bag is not available.");

      const quantity = Math.max(1, Math.min(10, Number(item.quantity) || 1));
      const design = product.options?.design?.includes(item.design) ? item.design : "";
      const size = product.options?.size?.includes(item.size) ? item.size : "";

      return { product, quantity, design, size };
    });

    const subtotal = safeItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const origin = new URL(request.url).origin;
    const params = new URLSearchParams();

    params.append("mode", "payment");
    params.append("success_url", `${origin}/gear/success?session_id={CHECKOUT_SESSION_ID}`);
    params.append("cancel_url", `${origin}/gear`);
    params.append("billing_address_collection", "auto");
    params.append("shipping_address_collection[allowed_countries][0]", "US");
    params.append("allow_promotion_codes", "true");
    params.append("phone_number_collection[enabled]", "true");
    params.append("customer_creation", "always");
    params.append("metadata[channel]", "stkz_gear_web");

    if (process.env.STRIPE_AUTOMATIC_TAX === "true") {
      params.append("automatic_tax[enabled]", "true");
    }

    params.append("shipping_options[0][shipping_rate_data][type]", "fixed_amount");
    params.append("shipping_options[0][shipping_rate_data][fixed_amount][amount]", subtotal >= 5000 ? "0" : "599");
    params.append("shipping_options[0][shipping_rate_data][fixed_amount][currency]", "usd");
    params.append(
      "shipping_options[0][shipping_rate_data][display_name]",
      subtotal >= 5000 ? "Free standard shipping" : "Standard shipping"
    );

    safeItems.forEach((item, index) => {
      const suffix = [item.design, item.size].filter(Boolean).join(" / ");

      addParam(params, `line_items[${index}][price_data][currency]`, "usd");
      addParam(params, `line_items[${index}][price_data][unit_amount]`, item.product.price);
      addParam(params, `line_items[${index}][price_data][product_data][name]`, item.product.name);
      addParam(
        params,
        `line_items[${index}][price_data][product_data][description]`,
        suffix || item.product.tagline
      );
      addParam(params, `line_items[${index}][quantity]`, item.quantity);
    });

    const stripeResponse = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
      cache: "no-store",
    });

    const session = await stripeResponse.json();

    if (!stripeResponse.ok || !session.url) {
      console.error("Stripe checkout error", { type: session.type, code: session.code });
      return NextResponse.json({ error: "Secure checkout could not be started." }, { status: 502 });
    }

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Gear checkout error", error?.message || error);
    return NextResponse.json(
      { error: error?.message || "Checkout failed." },
      { status: 400 }
    );
  }
}
