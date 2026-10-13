import { gearProducts } from "@/data/gearProducts";

function escapeXml(value = "") {
  return String(value).replace(/[<>&'"]/g, (char) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  }[char]));
}

export async function GET(request) {
  const origin = new URL(request.url).origin;

  const items = gearProducts.map((product) => {
    const link = `${origin}/gear#${product.id}`;

    return `
      <item>
        <g:id>${escapeXml(product.id)}</g:id>
        <title>${escapeXml(product.name)}</title>
        <description>${escapeXml(product.description)}</description>
        <link>${escapeXml(link)}</link>
        <g:availability>in_stock</g:availability>
        <g:condition>new</g:condition>
        <g:price>${(product.price / 100).toFixed(2)} USD</g:price>
        <g:brand>STKZ</g:brand>
      </item>`;
  }).join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
    <channel>
      <title>STKZ Gear</title>
      <link>${escapeXml(origin + "/gear")}</link>
      <description>STKZ performance soccer gear</description>
      ${items}
    </channel>
  </rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=300, s-maxage=3600",
    },
  });
}
