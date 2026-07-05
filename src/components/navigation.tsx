"use client";

import { useState, useEffect } from "react";
import { FullPageMenu } from "./full-page-menu";
import { HamburgerButton } from "./hamburger-button";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Stamp open state on <body> so other fixed elements can react via CSS
  useEffect(() => {
    document.body.dataset.menuOpen = menuOpen ? "true" : "false";
  }, [menuOpen]);

  return (
    <>
      <FullPageMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <HamburgerButton open={menuOpen} onClick={() => setMenuOpen((v) => !v)} />
    </>
  );
}
