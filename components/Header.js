"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="STKZ SC home" onClick={() => setOpen(false)}>
          <Logo size={58} />
        </Link>

        <nav className={`desktop-nav ${open ? "open" : ""}`} aria-label="Primary navigation">
          {site.nav.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link href="/access" onClick={() => setOpen(false)}>Mission</Link>
        </nav>

        <Link href="/join" className="button button-gold nav-cta">Join STKZ</Link>

        <button
          className="menu-button"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
