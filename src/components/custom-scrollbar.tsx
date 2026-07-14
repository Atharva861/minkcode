"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const THUMB_W = 4; // px
const MIN_H = 40; // px

export function CustomScrollbar() {
  const [thumbTop, setThumbTop] = useState(0);
  const [thumbHeight, setThumbHeight] = useState(MIN_H);
  const rafRef = useRef<number | null>(null);

  const update = useCallback(() => {
    const doc = document.documentElement;
    const winH = window.innerHeight;
    const scrollH = doc.scrollHeight;
    const scrollTop = window.scrollY;

    const tHeight = Math.max(MIN_H, (winH / scrollH) * winH);
    const progress = scrollH > winH ? scrollTop / (scrollH - winH) : 0;
    const tTop = progress * (winH - tHeight);

    setThumbHeight(tHeight);
    setThumbTop(tTop);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [update]);

  return (
    <div
      aria-hidden
      data-custom-scrollbar
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: THUMB_W,
        height: "100vh",
        zIndex: 400,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: 0,
          top: thumbTop,
          width: THUMB_W,
          height: thumbHeight,
          borderRadius: 9999,
          backgroundColor: "#285ccc",
        }}
      />
    </div>
  );
}
