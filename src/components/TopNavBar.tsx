"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/* All nav links shown on every page */
const NAV_LINKS = [
  { label: "Home",      href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "AI Hub",    href: "/ai-products" },
  { label: "Journey",   href: "/journey" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/contact" },
];

interface TopNavBarProps {
  activeLink?: string;
}

export default function TopNavBar({ activeLink }: TopNavBarProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    activeLink ? href === activeLink : pathname === href;

  return (
    <>
      <header className="fixed top-0 w-full z-50"
        style={{
          background: "rgba(0,0,0,0.75)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}>
        <div className="flex justify-between items-center h-16 px-gutter max-w-container-max mx-auto">

          {/* ── Logo ── */}
          <Link href="/"
            className="flex items-center gap-sm group"
            onClick={() => setMobileOpen(false)}>
            <div className="w-7 h-7 rounded-md flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, var(--color-primary-container), var(--color-secondary))" }}>
              <span className="material-symbols-outlined text-white text-[14px]">code</span>
            </div>
            <span className="font-headline-sm text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors text-[16px]">
              Shailesh Stack
            </span>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-xs">
            {NAV_LINKS.filter(l => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-md py-sm rounded-lg font-body-md text-[14px] transition-all duration-200 ${
                  isActive(link.href)
                    ? "text-primary bg-primary/10"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── CTA + Hamburger ── */}
          <div className="flex items-center gap-sm">
            <Link href="/contact"
              className="hidden md:inline-flex items-center gap-xs px-md py-sm rounded-lg font-label-md text-[12px] uppercase tracking-wider transition-all"
              style={{ background: "var(--color-primary-container)", color: "var(--color-on-primary-container)" }}>
              <span className="material-symbols-outlined text-[14px]">send</span>
              Hire Me
            </Link>

            {/* Mobile hamburger */}
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu">
              <span className="material-symbols-outlined text-[22px]">
                {mobileOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)} />

          {/* Slide-in panel */}
          <nav className="fixed top-16 left-0 right-0 z-50 flex flex-col"
            style={{ background: "rgba(8,8,8,0.98)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-md px-gutter py-md font-body-md text-[16px] transition-colors border-b ${
                  isActive(link.href)
                    ? "text-primary bg-primary/5 border-primary/20"
                    : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface border-outline-variant/10"
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                )}
              </Link>
            ))}
            <div className="px-gutter py-md">
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-sm w-full py-md rounded-xl font-label-md text-[14px] uppercase tracking-wider"
                style={{ background: "var(--color-primary-container)", color: "var(--color-on-primary-container)" }}>
                <span className="material-symbols-outlined text-[16px]">send</span>
                Hire Me
              </Link>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
