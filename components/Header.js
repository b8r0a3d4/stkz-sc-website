"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";
import { site } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <Link href="/" className="brand" aria-label="STKZ SC home" onClick={closeMenu}>
          <Logo size={58} />
        </Link>

        <nav
          id="primary-navigation"
          className={`desktop-nav ${open ? "open" : ""}`}
          aria-label="Primary navigation"
        >
          {site.nav.map((item) => (
            <Link className="nav-link" key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-link" href="/access" onClick={closeMenu}>Mission</Link>
          <Link className="nav-link donate-nav-link" href="/donate" onClick={closeMenu}>Donate</Link>
          <Link href="/join#player-interest" className="button button-gold mobile-menu-cta" onClick={closeMenu}>
            Join STKZ
          </Link>
        </nav>

        <Link href="/join#player-interest" className="button button-gold nav-cta">Join STKZ</Link>

        <button
          className="menu-button"
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-controls="primary-navigation"
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
