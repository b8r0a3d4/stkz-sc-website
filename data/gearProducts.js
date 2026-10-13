export const gearProducts = [
  {
    id: "0x-grip-socks",
    name: "0X Grip Socks",
    price: 1999,
    category: "Grip Socks",
    tagline: "Locked in. Every cut.",
    description: "Performance grip socks built for secure boot contact and repeatable movement.",
    options: {
      design: ["Origin", "Flow", "Havoc", "Cheetah Havoc", "Claw"],
      size: ["Youth", "Medium", "Adult"],
    },
    featured: true,
  },
  {
    id: "lock-universal",
    name: "LOCK Universal Grip Insole",
    price: 2499,
    category: "Insoles",
    tagline: "Grip above. Grip below.",
    description: "Low-profile, trimmable performance insole with dual-surface grip.",
    options: { size: ["Youth", "Medium", "Adult"] },
  },
  {
    id: "lock-0x",
    name: "LOCK 0X Insole",
    price: 2999,
    category: "Insoles",
    tagline: "Built for the 0X system.",
    description: "System-optimized grip insole designed to pair with STKZ 0X Grip Socks.",
    options: { size: ["Youth", "Medium", "Adult"] },
  },
  {
    id: "shin-guards",
    name: "STKZ Shin Guards",
    price: 2999,
    category: "Protection",
    tagline: "Low profile. Match ready.",
    description: "Flexible protection designed for close fit, mobility, and confident play.",
    options: { size: ["Youth", "Medium", "Adult"] },
  },
  {
    id: "stkz-sleeve",
    name: "STKZ Sleeve",
    price: 1499,
    category: "Protection",
    tagline: "Secure without bulk.",
    description: "Breathable guard sleeve with a clean match-day profile.",
    options: { size: ["Youth", "Medium", "Adult"] },
  },
  {
    id: "finish-bands",
    name: "Finish Bands",
    price: 999,
    category: "Accessories",
    tagline: "Clean finish. No tape.",
    description: "Comfort-stretch bands that finish the cut-sock look and keep your setup clean.",
    options: { size: ["Youth", "Adult"] },
  },
];

export function formatMoney(cents) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(cents / 100);
}

export function getGearProduct(id) {
  return gearProducts.find((product) => product.id === id);
}
