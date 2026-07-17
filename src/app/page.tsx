"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

/* ── Animated counter hook ── */
function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const started = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { count, ref };
}

/* ── Stat Card ── */
function StatCard({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center space-y-xs group">
      <div className="font-display text-[64px] leading-none font-bold text-on-background group-hover:text-primary transition-colors duration-500">
        {count}<span className="text-primary">{suffix}</span>
      </div>
      <div className="font-mono text-[11px] text-on-surface-variant uppercase tracking-[0.2em]">
        {label}
      </div>
    </div>
  );
}

/* ── Typewriter ── */
function Typewriter({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setWordIndex((wordIndex + 1) % words.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, wordIndex, words]);

  return (
    <span className="text-primary">
      {displayed}
      <span className="animate-pulse text-secondary">|</span>
    </span>
  );
}

/* ── Code Terminal ── */
const CODE_LINES = [
  { indent: 0, text: "// Shailesh Stack — v2.0.0", type: "comment" },
  { indent: 0, text: "const developer = {", type: "code" },
  { indent: 1, text: 'name: "Shailesh Suthar",', type: "string" },
  { indent: 1, text: 'role: "AI Full Stack Developer",', type: "string" },
  { indent: 1, text: "skills: [", type: "code" },
  { indent: 2, text: '"PHP", "MySQL", "JavaScript",', type: "string" },
  { indent: 2, text: '"Python", "React", "Next.js",', type: "string" },
  { indent: 2, text: '"AI/ML", "Cloud Computing"', type: "string" },
  { indent: 1, text: "],", type: "code" },
  { indent: 1, text: "projects: 50,", type: "number" },
  { indent: 1, text: "passion: Infinity,", type: "number" },
  { indent: 0, text: "};", type: "code" },
  { indent: 0, text: "", type: "blank" },
  { indent: 0, text: "developer.build();  // 🚀", type: "comment" },
];

function CodeTerminal() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 90);
    return () => clearTimeout(t);
  }, [visibleLines]);

  const colorMap: Record<string, string> = {
    comment: "text-outline",
    string:  "text-secondary",
    number:  "text-primary",
    code:    "text-on-surface",
    blank:   "",
  };

  return (
    <div className="relative rounded-2xl overflow-hidden h-full min-h-[360px]"
      style={{ background: "rgba(8,8,8,0.9)", border: "1px solid rgba(255,255,255,0.08)" }}>
      {/* Title bar */}
      <div className="flex items-center gap-sm px-md py-sm border-b border-outline-variant/20">
        <div className="flex gap-xs">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <span className="font-mono text-[11px] text-on-surface-variant ml-sm">shailesh.ts</span>
      </div>
      {/* Code body */}
      <div className="p-lg font-mono text-[13px] leading-7 overflow-hidden">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className={colorMap[line.type]} style={{ paddingLeft: `${line.indent * 20}px` }}>
            {line.text || "\u00A0"}
          </div>
        ))}
        {visibleLines < CODE_LINES.length && (
          <div style={{ paddingLeft: `${(CODE_LINES[visibleLines]?.indent ?? 0) * 20}px` }}>
            <span className="animate-pulse text-primary">▌</span>
          </div>
        )}
      </div>
      {/* Glow */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </div>
  );
}

/* ── Main Page ── */
export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = "1";
            (entry.target as HTMLElement).style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.08 }
    );
    document.querySelectorAll(".js-reveal").forEach((el) => {
      const e = el as HTMLElement;
      e.style.opacity = "0";
      e.style.transform = "translateY(28px)";
      e.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
      io.observe(e);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <TopNavBar />
      
      {/* ── Fixed ambient background ── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[15%] w-[700px] h-[700px] rounded-full opacity-[0.06]"
          style={{ background: "radial-gradient(circle, var(--color-primary) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute top-[40%] right-[5%] w-[500px] h-[500px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, var(--color-primary-container) 0%, transparent 70%)", filter: "blur(80px)" }} />
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <main className="relative z-10 flex-grow">

        {/* ═══════════════════════════
            HERO SECTION
        ════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-gutter text-center overflow-hidden">
          
          {/* Status badge */}
          <div className="inline-flex items-center gap-sm px-md py-xs rounded-full mb-xl"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary" />
            </span>
            <span className="font-mono text-[12px] text-secondary uppercase tracking-[0.15em]">
              Shailesh Stack OS v2.0 — Active
            </span>
          </div>

          <div className="relative mb-xl">
            <div
              className="absolute inset-0 rounded-[2rem] blur-3xl opacity-30"
              style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))" }}
            />
            <div
              className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-[2rem] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.45)",
              }}
            >
              <img
                src="/shailesh-portrait.jpeg"
                alt="Shailesh Suthar portrait"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Main headline */}
          <h1 className="font-display leading-none text-on-background mb-lg"
            style={{ fontSize: "clamp(52px, 9vw, 110px)", letterSpacing: "-0.03em" }}>
            Build&nbsp;•&nbsp;Launch&nbsp;•{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))" }}>
              Scale.
            </span>
          </h1>

          {/* Typewriter sub */}
          <p className="w-full font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-md">
            Building{" "}
            <Typewriter words={["AI Products.", "SaaS Platforms.", "Web Applications.", "Developer Tools.", "Digital Experiences."]} />
          </p>
          <p className="w-full font-body-md text-on-surface-variant/70 max-w-xl mx-auto mb-xxl leading-7 sm:leading-8 text-balance">
            Shailesh Stack is the home of everything I create — from intelligent agents to scalable web systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-md">
            <Link href="/ai-products"
              className="group relative px-xl py-md rounded-xl font-label-md text-label-md uppercase tracking-wider inline-flex items-center gap-sm overflow-hidden"
              style={{ background: "var(--color-primary-container)", color: "var(--color-on-primary-container)" }}>
              <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
              <span className="material-symbols-outlined text-[16px] relative z-10">rocket_launch</span>
              <span className="relative z-10">Explore Products</span>
              <span className="material-symbols-outlined text-[14px] relative z-10 group-hover:translate-x-1 transition-transform duration-200">arrow_forward</span>
            </Link>
            <Link href="/portfolio"
              className="px-xl py-md rounded-xl font-label-md text-label-md uppercase tracking-wider inline-flex items-center gap-sm text-on-surface hover:text-primary transition-colors"
              style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
              <span className="material-symbols-outlined text-[16px]">folder_open</span>
              View Portfolio
            </Link>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-xs opacity-40">
            <span className="font-mono text-[10px] uppercase tracking-widest text-on-surface-variant">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-outline-variant to-transparent" />
          </div>
        </section>

        {/* ═══════════════════════════
            ANIMATED STATS
        ════════════════════════════ */}
        <section className="py-xl px-gutter js-reveal"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)", background: "rgba(255,255,255,0.01)" }}>
          <div className="max-w-container-max mx-auto grid grid-cols-3 md:grid-cols-3 gap-xl">
            <StatCard value={14} suffix="+" label="Projects Shipped" />
            <StatCard value={8} suffix="+" label="AI Tools Used" />
            <StatCard value={3} suffix="+" label="Years Building" />
          </div>
        </section>

        {/* ═══════════════════════════
            ABOUT / CODE TERMINAL
        ════════════════════════════ */}
        <section className="px-gutter max-w-container-max mx-auto py-xxl grid grid-cols-1 lg:grid-cols-2 gap-xxl items-center js-reveal">
          
          {/* Left — narrative */}
          <div className="space-y-lg">
            <div>
              <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-sm">
                About the Engineer
              </p>
              <h2 className="font-display text-on-background leading-tight mb-md"
                style={{ fontSize: "clamp(36px, 4vw, 56px)" }}>
                Architecting the Future.
              </h2>
              <p className="font-body-lg text-on-surface-variant leading-[1.8]">
                I am <strong className="text-on-surface">Shailesh Suthar</strong>, an AI Full-Stack Developer obsessed with precision and performance. I build scalable applications, intelligent tools, and seamless digital experiences that push the boundaries of what&apos;s possible on the web.
              </p>
            </div>

            {/* Stack chips */}
            <div>
              <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-sm">Core Stack</p>
              <div className="flex flex-wrap gap-sm">
                {["PHP", "MySQL", "JavaScript", "Python", "Next.js", "AI/ML", "REST APIs"].map((tech) => (
                  <span key={tech}
                    className="px-md py-xs rounded-lg font-mono text-xs text-on-surface hover:text-primary transition-colors cursor-default"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Status badge */}
            <div className="inline-flex items-center gap-sm rounded-lg px-md py-sm"
              style={{ background: "rgba(71,250,243,0.08)", border: "1px solid rgba(71,250,243,0.2)" }}>
              <span className="material-symbols-outlined text-secondary text-[16px]">terminal</span>
              <span className="font-mono text-secondary text-[13px]">developer_mode: &quot;active&quot;</span>
            </div>

            {/* CTA Links */}
            <div className="flex flex-col sm:flex-row gap-sm pt-sm">
              <Link href="/journey"
                className="inline-flex items-center gap-xs font-label-md text-label-md text-primary hover:text-secondary transition-colors group">
                Read My Full Story
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <span className="hidden sm:block text-outline-variant">·</span>
              <Link href="/contact"
                className="inline-flex items-center gap-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors">
                Hire Me
              </Link>
            </div>
          </div>

          {/* Right — code terminal */}
          <div className="js-reveal" style={{ transitionDelay: "0.15s" }}>
            <CodeTerminal />
          </div>
        </section>

        {/* ═══════════════════════════
            FEATURED CATEGORIES
        ════════════════════════════ */}
        <section className="px-gutter max-w-container-max mx-auto pb-xxl js-reveal">
          <div className="text-center mb-xl">
            <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-sm">What I Build</p>
            <h2 className="font-display text-on-background" style={{ fontSize: "clamp(32px, 4vw, 52px)" }}>
              The Ecosystem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md">
            {[
              {
                icon: "auto_awesome",
                title: "AI Products",
                desc: "LLM-powered tools, intelligent agents, automation workflows, and AI-driven SaaS applications.",
                href: "/ai-products",
                color: "primary",
                featured: true,
              },
              {
                icon: "web",
                title: "Web Applications",
                desc: "Full-stack PHP & MySQL systems: management platforms, educational portals, e-commerce, dashboards.",
                href: "/portfolio",
                color: "secondary",
                featured: false,
              },
              {
                icon: "psychology",
                title: "My Journey",
                desc: "From zero to AI Full-Stack Developer — a detailed timeline of every milestone, internship, and breakthrough.",
                href: "/journey",
                color: "primary",
                featured: false,
              },
              {
                icon: "edit_note",
                title: "Technical Blog",
                desc: "Deep dives into software architecture, AI integration patterns, tutorials, and engineering decisions.",
                href: "/blog",
                color: "secondary",
                featured: false,
              },
              {
                icon: "design_services",
                title: "Services",
                desc: "Custom AI development, full-stack web development, SaaS builds, UI/UX, and API integration.",
                href: "/contact",
                color: "primary",
                featured: false,
              },
              {
                icon: "build",
                title: "Developer Tools",
                desc: "Utilities, APIs, templates, and productivity tools designed for other developers.",
                href: "/portfolio",
                color: "secondary",
                featured: false,
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className={`group rounded-2xl p-lg flex flex-col gap-md hover:-translate-y-1.5 transition-all duration-300 ${
                  item.featured ? "lg:col-span-1 border" : "glass-card"
                }`}
                style={item.featured ? {
                  background: "linear-gradient(135deg, rgba(0,112,243,0.15), rgba(71,250,243,0.05))",
                  border: "1px solid rgba(0,112,243,0.4)",
                } : undefined}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  item.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-secondary/10 text-secondary"
                } group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="font-headline-sm text-on-background mb-xs">{item.title}</h3>
                  <p className="font-body-sm text-on-surface-variant leading-relaxed text-[13px]">{item.desc}</p>
                </div>
                <div className={`flex items-center gap-xs font-label-md text-[12px] uppercase tracking-wider ${
                  item.color === "primary" ? "text-primary" : "text-secondary"
                } group-hover:gap-sm transition-all`}>
                  Explore
                  <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════
            FEATURED PROJECTS STRIP
        ════════════════════════════ */}
        <section className="px-gutter max-w-container-max mx-auto pb-xxl js-reveal">
          <div className="flex items-center justify-between mb-xl">
            <div>
              <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-xs">Selected Work</p>
              <h2 className="font-display text-on-background" style={{ fontSize: "clamp(28px, 3vw, 44px)" }}>
                Featured Projects
              </h2>
            </div>
            <Link href="/portfolio"
              className="hidden sm:inline-flex items-center gap-xs font-label-md text-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-wider group">
              View All
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
            {[
              {
                title: "DDCET Study Tracker",
                category: "Educational PWA",
                tags: ["HTML", "CSS", "JavaScript"],
                imgUrl: "/project-1.png",
                desc: "A study planning app helping diploma students track exam preparation progress."
              },
              {
                title: "SkillCrafters",
                category: "Learning Platform",
                tags: ["PHP", "MySQL", "JavaScript"],
                imgUrl: "/project-2.png",
                desc: "Online platform for mastering programming through structured resources and tutorials."
              },
              {
                title: "Blood Bank System",
                category: "Healthcare Web App",
                tags: ["PHP", "MySQL"],
                imgUrl: "/project-3.png",
                desc: "Connects blood donors with patients and manages donor records efficiently."
              },
            ].map((project) => (
              <Link
                key={project.title}
                href="/portfolio"
                className="group rounded-2xl overflow-hidden flex flex-col glass-card hover:-translate-y-1.5 transition-all duration-300"
              >
                {/* Image */}
                <div className="h-[180px] relative overflow-hidden bg-surface-container-lowest">
                  <div className="absolute inset-0 bg-cover bg-top group-hover:scale-105 transition-transform duration-500"
                    style={{ backgroundImage: `url('${project.imgUrl}')` }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-sm right-sm px-xs py-[2px] rounded text-[10px] font-mono text-on-surface-variant"
                    style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.1)" }}>
                    {project.category}
                  </span>
                </div>
                {/* Content */}
                <div className="p-md flex flex-col flex-grow">
                  <h3 className="font-headline-sm text-on-background mb-xs">{project.title}</h3>
                  <p className="font-body-sm text-[12px] text-on-surface-variant mb-md flex-grow">{project.desc}</p>
                  <div className="flex gap-xs">
                    {project.tags.map((t) => (
                      <span key={t} className="px-xs py-[2px] rounded text-[10px] font-mono text-on-surface-variant"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.07)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════
            BOTTOM CTA BANNER
        ════════════════════════════ */}
        <section className="px-gutter max-w-container-max mx-auto pb-xxl js-reveal">
          <div className="relative rounded-3xl overflow-hidden p-xl md:p-xxl text-center"
            style={{
              background: "linear-gradient(135deg, rgba(0,112,243,0.12), rgba(71,250,243,0.05), rgba(0,0,0,0))",
              border: "1px solid rgba(0,112,243,0.25)",
            }}>
            <div className="absolute top-0 left-0 w-full h-px"
              style={{ background: "linear-gradient(90deg, transparent, var(--color-primary), var(--color-secondary), transparent)" }} />
            
            <span className="material-symbols-outlined text-[44px] text-primary mb-md block">handshake</span>
            <h2 className="font-display text-on-background mb-sm"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}>
              Let&apos;s Build Something Remarkable.
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-lg mx-auto mb-xl">
              I&apos;m open to collaborations, freelance projects, internships, and exciting AI development opportunities.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-md">
              <Link href="/contact"
                className="group relative px-xl py-md rounded-xl font-label-md uppercase tracking-wider inline-flex items-center gap-sm overflow-hidden"
                style={{ background: "var(--color-primary-container)", color: "var(--color-on-primary-container)" }}>
                <span className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-all duration-300" />
                <span className="relative z-10">Get In Touch</span>
                <span className="material-symbols-outlined text-[14px] relative z-10 group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
              <Link href="/portfolio"
                className="px-xl py-md rounded-xl font-label-md uppercase tracking-wider inline-flex items-center gap-sm text-on-surface-variant hover:text-on-surface transition-colors"
                style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
                View My Work
              </Link>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}

