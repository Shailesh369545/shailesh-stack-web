import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-auto"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(0,0,0,0.6)" }}>
      
      {/* ── Main grid ── */}
      <div className="px-gutter max-w-container-max mx-auto pt-xxl pb-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-xl">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-md">
            <Link href="/" className="flex items-center gap-sm group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--color-primary-container), var(--color-secondary))" }}>
                <span className="material-symbols-outlined text-white text-[16px]">code</span>
              </div>
              <span className="font-headline-sm text-on-surface font-bold tracking-tight text-[16px]">
                Shailesh Stack
              </span>
            </Link>
            <p className="font-body-sm text-on-surface-variant text-[13px] leading-relaxed max-w-[220px]">
              Personal technology platform, digital portfolio, and product ecosystem by Shailesh Suthar.
            </p>
            {/* Social links */}
            <div className="flex gap-sm pt-xs">
              {[
                { icon: "link", label: "LinkedIn", href: "https://linkedin.com/in/kdpcompshailesh190" },
                { icon: "code", label: "GitHub", href: "#" },
                { icon: "chat_bubble", label: "Twitter", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.08)" }}>
                  <span className="material-symbols-outlined text-[16px]">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-mono text-[11px] text-on-surface-variant uppercase tracking-[0.2em] mb-md">
              Pages
            </h4>
            <nav className="flex flex-col gap-sm">
              {[
                { label: "Home",      href: "/" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "AI Hub",    href: "/ai-products" },
                { label: "Journey",   href: "/journey" },
                { label: "Blog",      href: "/blog" },
                { label: "Contact",   href: "/contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href}
                  className="font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Projects */}
          <div>
            <h4 className="font-mono text-[11px] text-on-surface-variant uppercase tracking-[0.2em] mb-md">
              Projects
            </h4>
            <nav className="flex flex-col gap-sm">
              {[
                "DDCET Study Tracker",
                "SkillCrafters",
                "Blood Bank System",
                "Student Management",
                "Feastozo",
                "Product Management",
              ].map((name) => (
                <Link key={name} href="/portfolio"
                  className="font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors">
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[11px] text-on-surface-variant uppercase tracking-[0.2em] mb-md">
              Contact
            </h4>
            <div className="flex flex-col gap-sm">
              <a href="mailto:shailesh@suthar.com"
                className="flex items-center gap-xs font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[14px]">mail</span>
                shailesh@suthar.com
              </a>
              <a href="tel:+917567268056"
                className="flex items-center gap-xs font-body-sm text-[13px] text-on-surface-variant hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-[14px]">call</span>
                +91 75672 68056
              </a>
              <div className="flex items-center gap-xs font-body-sm text-[13px] text-on-surface-variant">
                <span className="material-symbols-outlined text-[14px]">location_on</span>
                Banaskantha, Gujarat, India
              </div>
              <Link href="/contact"
                className="mt-sm inline-flex items-center gap-xs px-md py-sm rounded-lg font-label-md text-[12px] uppercase tracking-wider transition-all"
                style={{ background: "var(--color-primary-container)", color: "var(--color-on-primary-container)" }}>
                <span className="material-symbols-outlined text-[14px]">send</span>
                Get In Touch
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="px-gutter max-w-container-max mx-auto py-md flex flex-col sm:flex-row items-center justify-between gap-sm"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <p className="font-mono text-[11px] text-on-surface-variant opacity-60">
          © 2026 Shailesh Suthar — All rights reserved.
        </p>
        <div className="flex items-center gap-md">
          {["Privacy Policy", "Terms of Service"].map((item) => (
            <Link key={item} href="#"
              className="font-mono text-[11px] text-on-surface-variant hover:text-primary transition-colors opacity-60 hover:opacity-100">
              {item}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          <span className="font-mono text-[11px] text-secondary opacity-80">Online</span>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="px-gutter max-w-container-max mx-auto pb-md">
        <p className="font-mono text-[10px] text-on-surface-variant opacity-30 leading-relaxed">
          Disclaimer: This site is a professional portfolio showcasing engineering projects. All product names and logos are property of their respective owners.
        </p>
      </div>
    </footer>
  );
}
