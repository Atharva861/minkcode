"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FullPageMenu } from "./full-page-menu";
import { HamburgerButton } from "./hamburger-button";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Reset menu open state whenever the route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
