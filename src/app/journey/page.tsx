"use client";

import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ── Reusable Section Heading ── */
function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="text-center mb-xxl">
      {eyebrow && (
        <p className="font-mono text-xs text-primary uppercase tracking-[0.2em] mb-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-headline-lg md:text-display text-on-background mb-md leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ── Timeline Item ── */
function TimelineItem({
  side,
  date,
  icon,
  title,
  body,
  tags,
  accent = false,
}: {
  side: "left" | "right";
  date: string;
  icon: string;
  title: string;
  body: string | React.ReactNode;
  tags?: string[];
  accent?: boolean;
}) {
  const isLeft = side === "left";
  return (
    <div
      className={`relative flex items-start gap-xl ${
        isLeft
          ? "md:flex-row-reverse md:text-right"
          : "md:flex-row md:text-left"
      } flex-row text-left`}
    >
      {/* Connector dot */}
      <div className="absolute left-[20px] md:left-1/2 top-5 w-4 h-4 rounded-full border-2 z-10 transform -translate-x-1/2 md:-translate-x-1/2"
        style={{
          background: accent ? "var(--color-secondary)" : "var(--color-surface-container-highest)",
          borderColor: accent ? "var(--color-secondary)" : "var(--color-primary)",
          boxShadow: accent ? "0 0 14px var(--color-secondary)" : undefined,
        }}
      />
      {/* Spacer on one side for desktop alternating layout */}
      <div className="hidden md:block md:w-1/2 flex-shrink-0" />
      {/* Card */}
      <div className="ml-[48px] md:ml-0 md:w-1/2 flex-shrink-0 flex flex-col">
        <div
          className={`rounded-2xl p-lg group hover:-translate-y-1 transition-all duration-300 ${
            accent
              ? "bg-secondary/5 border border-secondary/30"
              : "glass-card"
          }`}
        >
          <div className="flex items-center gap-sm mb-xs">
            <span className="material-symbols-outlined text-sm text-primary">
              {icon}
            </span>
            <span className="font-mono text-[11px] text-primary uppercase tracking-widest">
              {date}
            </span>
          </div>
          <h3 className="font-headline-sm text-on-background mb-sm">
            {title}
          </h3>
          <div className="font-body-sm text-on-surface-variant leading-relaxed">
            {body}
          </div>
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-xs mt-md">
              {tags.map((t) => (
                <span
                  key={t}
                  className="px-sm py-[3px] rounded bg-surface-container border border-outline-variant/20 text-[10px] font-mono text-on-surface-variant"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Skill Pill ── */
function SkillPill({ label, highlight }: { label: string; highlight?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-xs px-md py-sm rounded-lg font-mono text-xs border cursor-default transition-colors ${
        highlight
          ? "bg-primary/15 border-primary/50 text-primary hover:bg-primary/25"
          : "bg-surface-container-highest border-outline-variant/30 text-on-surface hover:border-primary/50"
      }`}
    >
      {label}
    </span>
  );
}

export default function Journey() {
  const [activeTab, setActiveTab] = useState<"about" | "journey" | "platform">("about");

  const sectionRefs = useRef<HTMLElement[]>([]);

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
      (el as HTMLElement).style.opacity = "0";
      (el as HTMLElement).style.transform = "translateY(24px)";
      (el as HTMLElement).style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <>
      <TopNavBar activeLink="/journey" />

      {/* Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[200px] left-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute top-[600px] right-[5%] w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />
      </div>

      <main className="relative z-10 pt-[100px] pb-xxl">

        {/* ─────────────────────────────────
            HERO
        ───────────────────────────────── */}
        <section className="px-gutter max-w-container-max mx-auto text-center mb-xxl js-reveal">
          <div className="inline-flex items-center gap-sm px-md py-xs rounded-full bg-surface-container border border-outline-variant/30 mb-lg">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-mono text-xs text-secondary uppercase tracking-widest">
              Developer Story
            </span>
          </div>

          <h1 className="font-display text-display text-on-background mb-md leading-tight">
            Hello, I&apos;m{" "}
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: "linear-gradient(135deg, var(--color-primary), var(--color-secondary))",
              }}
            >
              Shailesh Suthar
            </span>
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-3xl mx-auto mb-xl">
            A passionate Full Stack Web Developer and aspiring AI Software Engineer from India, driven by curiosity, continuous learning, and a passion for building meaningful digital products.
          </p>

          {/* Sticky Tab Navigation */}
          <div className="inline-flex items-center gap-xs bg-surface-container rounded-xl p-xs border border-outline-variant/20">
            {[
              { key: "about", label: "About Me", icon: "person" },
              { key: "journey", label: "My Journey", icon: "route" },
              { key: "platform", label: "Shailesh Stack", icon: "layers" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key as typeof activeTab);
                  document.getElementById(tab.key)?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className={`flex items-center gap-xs px-lg py-sm rounded-lg font-label-md text-label-md transition-all ${
                  activeTab === tab.key
                    ? "bg-primary-container text-on-surface"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                <span className="material-symbols-outlined text-sm">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* ─────────────────────────────────
            ABOUT ME
        ───────────────────────────────── */}
        <section id="about" className="px-gutter max-w-container-max mx-auto mb-section-gap js-reveal"
          onMouseEnter={() => setActiveTab("about")}>

          <SectionHeading
            eyebrow="Who I Am"
            title="About Me"
            subtitle="From a student who started with zero knowledge to a developer building real-world applications."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl items-start">
            {/* Left: Portrait */}
            <div className="lg:col-span-4 js-reveal" style={{ transitionDelay: "0.1s" }}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] group flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, rgba(var(--color-primary-container-rgb),0.15), rgba(var(--color-secondary-container-rgb),0.05))",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-surface-container-lowest z-0" />
                <span className="material-symbols-outlined text-[100px] text-primary/30 relative z-10 group-hover:scale-110 transition-transform duration-500">
                  person
                </span>
                <img
                  src="/shailesh-portrait.jpeg"
                  alt="Shailesh Suthar"
                  className="absolute inset-0 w-full h-full object-cover object-top z-20"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Status badge */}
                <div className="absolute bottom-md right-md glass-panel px-md py-sm rounded-full flex items-center gap-sm z-30">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_8px_var(--color-secondary)]" />
                  <span className="font-mono text-[10px] text-on-surface uppercase tracking-widest">
                    Open to Work
                  </span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-sm mt-md">
                {[
                  { icon: "location_on", text: "Banaskantha, Gujarat, India" },
                  { icon: "school", text: "Diploma in Computer Engineering" },
                  { icon: "calendar_today", text: "Started 2023" },
                  { icon: "language", text: "Hindi • English • Gujarati" },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-start gap-xs p-sm rounded-lg glass-card"
                  >
                    <span className="material-symbols-outlined text-primary text-sm mt-[1px]">
                      {item.icon}
                    </span>
                    <span className="font-body-sm text-on-surface-variant text-[11px] leading-snug">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Narrative */}
            <div className="lg:col-span-8 space-y-lg js-reveal" style={{ transitionDelay: "0.2s" }}>
              {[
                `I am a passionate Full Stack Web Developer and aspiring AI Software Engineer from India, driven by curiosity, continuous learning, and a passion for building meaningful digital products.`,
                `My journey into technology began in 2023 when I started my Diploma in Computer Engineering. Since then, I have focused on learning through real-world projects rather than only theory. Every project has helped me improve my problem-solving skills, understand software architecture, and gain hands-on development experience.`,
                `I started with the fundamentals of web development, learning HTML, CSS, and JavaScript, before moving into backend development with PHP and MySQL. As my knowledge grew, I began creating complete web applications with database integration, authentication systems, and responsive user interfaces.`,
                `Throughout my diploma, I built projects across different domains, including education, healthcare, food delivery, product management, and portfolio platforms. These projects gave me practical experience in frontend development, backend development, database design, CRUD operations, and responsive UI development.`,
                `In addition to web development, I explored Python, Artificial Intelligence, Machine Learning, and Cloud Computing. I actively use modern AI-assisted development tools such as ChatGPT, Cursor, Windsurf, Google AI Studio, Google Stitch, Antigravity IDE, Codex, and Blackbox AI to accelerate development while continuing to strengthen my own technical understanding.`,
                `I believe technology is most valuable when it solves real-world problems. My long-term goal is to build innovative AI-powered software products, scalable SaaS platforms, and developer tools that help individuals, businesses, and organizations become more productive.`,
              ].map((para, i) => (
                <p
                  key={i}
                  className="font-body-md text-body-md text-on-surface-variant leading-[1.8]"
                  style={{
                    borderLeft: i === 0 ? "2px solid var(--color-primary)" : undefined,
                    paddingLeft: i === 0 ? "var(--spacing-md)" : undefined,
                    color: i === 0 ? "var(--color-on-surface)" : undefined,
                  }}
                >
                  {para}
                </p>
              ))}

              {/* AI Tools Row */}
              <div className="glass-card p-lg rounded-xl">
                <p className="font-mono text-xs text-primary uppercase tracking-widest mb-md">
                  AI Tools I Use Daily
                </p>
                <div className="flex flex-wrap gap-sm">
                  {["ChatGPT", "Cursor", "Windsurf", "Google AI Studio", "Google Stitch", "Antigravity IDE", "Codex", "Blackbox AI"].map(
                    (tool) => (
                      <span
                        key={tool}
                        className="px-md py-sm rounded-lg text-xs font-mono text-primary bg-primary/10 border border-primary/20 hover:bg-primary/20 transition-colors cursor-default"
                      >
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Future Vision summary */}
              <div
                className="rounded-xl p-lg relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(var(--color-secondary-rgb,0,200,83),0.08), rgba(var(--color-primary-rgb,98,0,234),0.05))",
                  border: "1px solid rgba(var(--color-secondary-rgb,0,200,83),0.2)",
                }}
              >
                <h4 className="font-headline-sm text-on-background mb-sm">Future Vision</h4>
                <p className="font-body-sm text-on-surface-variant mb-md">
                  My goal is to become an AI Full Stack Software Engineer capable of building modern digital products:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-sm">
                  {["AI Applications", "SaaS Platforms", "Web Applications", "Mobile Applications", "Developer Tools", "Automation Systems", "APIs", "Cloud-Based Software"].map(
                    (item) => (
                      <div
                        key={item}
                        className="flex items-center gap-xs"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                        <span className="font-body-sm text-[11px] text-on-surface-variant leading-snug">
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────
            MY JOURNEY TIMELINE
        ───────────────────────────────── */}
        <section id="journey" className="px-gutter max-w-container-max mx-auto mb-section-gap js-reveal"
          onMouseEnter={() => setActiveTab("journey")}>

          <SectionHeading
            eyebrow="Timeline"
            title="My Journey"
            subtitle="From Student to AI Full Stack Developer — every milestone that shaped me."
          />

          {/* Timeline Container */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center vertical line */}
            <div className="absolute left-[28px] md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary/60 via-outline-variant/20 to-secondary/60 transform md:-translate-x-1/2" />

            <div className="space-y-xxl">
              <TimelineItem
                side="left"
                date="2023 – The Beginning"
                icon="flag"
                title="Enrolled in Diploma in Computer Engineering"
                body={
                  <>
                    <p className="mb-sm">My software development journey started in 2023 when I enrolled in the Diploma in Computer Engineering program. Like many beginners, I started by learning the basics of programming and web development. Every new concept opened a new opportunity to build something practical.</p>
                  </>
                }
              />

              <TimelineItem
                side="right"
                date="2023 – Phase 2"
                icon="code"
                title="Learning Frontend Development"
                body={
                  <>
                    <p className="mb-sm">My first technologies were HTML, CSS, and JavaScript. These helped me understand website structure, responsive layouts, user interfaces, interactive web pages, and modern design principles.</p>
                    <p>I built multiple small projects to improve my frontend skills before moving to backend development.</p>
                  </>
                }
                tags={["HTML", "CSS", "JavaScript", "Responsive Design", "UI Principles"]}
              />

              <TimelineItem
                side="left"
                date="2024"
                icon="storage"
                title="Learning Backend Development"
                body={
                  <>
                    <p className="mb-sm">After gaining confidence in frontend development, I started learning PHP and MySQL. This allowed me to build complete dynamic web applications.</p>
                  </>
                }
                tags={["PHP", "MySQL", "CRUD", "Authentication", "Form Validation", "Session Management", "Admin Panels", "SQL Queries", "User Management"]}
              />

              <TimelineItem
                side="right"
                date="After 2nd Semester"
                icon="work"
                title="Python Development Internship (15 Days)"
                body={
                  <>
                    <p className="mb-sm">After my second semester, I completed a 15-day Python Development Internship. I developed multiple beginner and intermediate Python projects that strengthened my programming logic.</p>
                  </>
                }
                tags={["Python Fundamentals", "Functions", "Loops", "OOP", "File Handling", "Problem Solving"]}
              />

              <TimelineItem
                side="left"
                date="After 4th Semester"
                icon="rocket_launch"
                title="Full Stack Web Development Internship (45 Days)"
                body={
                  <>
                    <p className="mb-sm">After completing my fourth semester, I joined a 45-day Full Stack Web Development Internship. This internship significantly improved my practical development skills. I built complete CRUD applications and gained experience in building real-world web systems.</p>
                  </>
                }
                tags={["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Real-world Systems"]}
              />

              <TimelineItem
                side="right"
                date="Ongoing"
                icon="folder_special"
                title="Building Real Projects"
                body={
                  <>
                    <p className="mb-sm">Instead of stopping after tutorials, I focused on creating practical applications across different domains:</p>
                    <ul className="list-disc pl-md space-y-1 marker:text-primary">
                      {["Student Management System", "Blood Bank Management System", "SkillCrafters", "Feastozo", "Product Management System", "Student ID Card System", "Portfolio Website", "Educational Platforms", "Multiple PHP & MySQL Applications", "Python Practice Projects"].map(p => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </>
                }
              />

              <TimelineItem
                side="left"
                date="2025 – Present"
                icon="auto_awesome"
                title="Exploring Artificial Intelligence"
                body={
                  <>
                    <p className="mb-sm">As AI technology became more accessible, I started exploring AI-powered software development. These tools help me prototype ideas, improve productivity, and accelerate software development while I continue learning core engineering concepts.</p>
                  </>
                }
                tags={["ChatGPT", "Codex", "Cursor", "Windsurf", "Antigravity IDE", "Blackbox AI", "Google AI Studio", "Google Stitch"]}
                accent
              />

              <TimelineItem
                side="right"
                date="Philosophy"
                icon="psychology"
                title="Continuous Learning"
                body={
                  <>
                    <p className="mb-sm">I believe software development is a continuous journey.</p>
                    <ul className="list-none space-y-sm mt-sm">
                      {["Every project teaches me something new.", "Every challenge improves my skills.", "Every mistake becomes a learning opportunity."].map(p => (
                        <li key={p} className="flex items-start gap-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-sm italic">Rather than chasing shortcuts, I focus on building useful software and improving through consistent practice.</p>
                  </>
                }
              />
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────
            ABOUT SHAILESH STACK PLATFORM
        ───────────────────────────────── */}
        <section id="platform" className="px-gutter max-w-container-max mx-auto mb-xxl js-reveal"
          onMouseEnter={() => setActiveTab("platform")}>

          <SectionHeading
            eyebrow="The Platform"
            title="About Shailesh Stack"
            subtitle="One Platform. Every Innovation."
          />

          {/* Hero Statement */}
          <div className="glass-panel p-xl md:p-xxl rounded-3xl relative overflow-hidden border border-outline-variant/20 mb-xl js-reveal">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10 max-w-3xl">
              <p className="font-headline-md text-on-background mb-md leading-relaxed">
                Shailesh Stack is my personal technology platform, digital portfolio, and product ecosystem.
              </p>
              <p className="font-body-lg text-on-surface-variant mb-md leading-relaxed">
                It is more than a portfolio website. It is a central hub where I showcase everything I build throughout my software engineering journey. Whether it&apos;s an AI application, a web platform, a mobile app, a SaaS product, an API, or a developer tool, every project becomes part of Shailesh Stack.
              </p>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">
                Shailesh Stack is designed to grow continuously. As I build new products, launch new ideas, and learn new technologies, the platform will evolve into a complete digital ecosystem representing my professional identity.
              </p>
            </div>
          </div>

          {/* Purpose */}
          <div className="glass-card p-xl rounded-2xl mb-xl js-reveal">
            <h3 className="font-headline-md text-on-background mb-lg flex items-center gap-sm">
              <span className="material-symbols-outlined text-primary">track_changes</span>
              Purpose
            </h3>
            <p className="font-body-md text-on-surface-variant mb-md">
              The primary goal of Shailesh Stack is to provide one professional platform where visitors can:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-sm">
              {[
                "Learn about me",
                "Explore my projects",
                "Try my AI products",
                "View my portfolio",
                "Read documentation",
                "Discover new applications",
                "Follow my development journey",
                "Read technical blogs",
                "Hire me for software development",
              ].map((item) => (
                <div key={item} className="flex items-center gap-sm p-sm rounded-lg bg-surface-container border border-outline-variant/10 hover:border-primary/30 transition-colors">
                  <span className="material-symbols-outlined text-secondary text-sm flex-shrink-0">check_circle</span>
                  <span className="font-body-sm text-on-surface-variant text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What You Can Find */}
          <div className="mb-xl js-reveal">
            <h3 className="font-headline-md text-on-background mb-lg text-center">
              What You Can Find
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md">
              {[
                { icon: "folder_special", title: "Portfolio", desc: "A collection of my best software projects showcasing my engineering depth." },
                { icon: "auto_awesome", title: "AI Products", desc: "AI-powered applications built using modern LLMs, agents, and automation workflows." },
                { icon: "web", title: "Web Applications", desc: "Business systems, management platforms, educational websites, dashboards, and productivity tools." },
                { icon: "smartphone", title: "Mobile Applications", desc: "Android and future cross-platform mobile applications." },
                { icon: "cloud", title: "SaaS Products", desc: "Cloud-based software solutions built for individuals and businesses." },
                { icon: "build", title: "Developer Tools", desc: "Utilities, templates, APIs, and tools that improve developer productivity." },
                { icon: "article", title: "Documentation", desc: "Technical documentation explaining projects, architecture, technologies, and implementation." },
                { icon: "edit_note", title: "Blog", desc: "Articles about software development, AI, programming, tutorials, and tech trends." },
              ].map((item) => (
                <div key={item.title} className="glass-card p-lg rounded-xl hover:-translate-y-1 transition-all duration-300 group">
                  <span className="material-symbols-outlined text-[28px] text-primary mb-sm block group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </span>
                  <h4 className="font-headline-sm text-on-background mb-xs">{item.title}</h4>
                  <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="glass-card p-xl rounded-2xl mb-xl js-reveal">
            <h3 className="font-headline-md text-on-background mb-md flex items-center gap-sm">
              <span className="material-symbols-outlined text-secondary">design_services</span>
              Services
            </h3>
            <p className="font-body-md text-on-surface-variant mb-md">
              Professional software development services including:
            </p>
            <div className="flex flex-wrap gap-sm">
              {["AI Development", "Full Stack Web Development", "SaaS Development", "API Development", "UI/UX Development", "Custom Software Solutions"].map((s) => (
                <span key={s} className="px-lg py-sm rounded-full font-label-md text-sm bg-secondary/10 border border-secondary/30 text-secondary hover:bg-secondary/20 transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Mission, Vision, Motto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-md js-reveal">
            {[
              {
                icon: "flag",
                label: "My Mission",
                color: "primary",
                text: "To continuously learn, build, and innovate by creating software that solves real-world problems while sharing knowledge and inspiring others through technology.",
              },
              {
                icon: "visibility",
                label: "My Vision",
                color: "secondary",
                text: "To build world-class AI products, scalable software platforms, and developer tools that make technology more accessible, efficient, and impactful for people around the world.",
              },
              {
                icon: "format_quote",
                label: "Personal Motto",
                color: "primary",
                text: `"Every line of code is an opportunity to learn, every project is a step toward innovation, and every challenge is a chance to become a better engineer."`,
                italic: true,
              },
            ].map((card) => (
              <div
                key={card.label}
                className="glass-panel p-xl rounded-2xl border text-center hover:-translate-y-1 transition-all duration-300"
                style={{ borderColor: `var(--color-${card.color}-container)` }}
              >
                <span
                  className={`material-symbols-outlined text-[36px] mb-md block text-${card.color}`}
                >
                  {card.icon}
                </span>
                <h4 className="font-headline-sm text-on-background mb-md">{card.label}</h4>
                <p className={`font-body-md text-on-surface-variant leading-relaxed ${card.italic ? "italic" : ""}`}>
                  {card.text}
                </p>
              </div>
            ))}
          </div>

        </section>

        {/* ── CTA ── */}
        <section className="px-gutter max-w-container-max mx-auto js-reveal">
          <div className="glass-panel rounded-3xl p-xl md:p-xxl text-center relative overflow-hidden border border-outline-variant/20">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            <span className="material-symbols-outlined text-[40px] text-primary mb-md block">rocket_launch</span>
            <h2 className="font-headline-md text-on-background mb-sm">
              Ready to Build Something Together?
            </h2>
            <p className="font-body-lg text-on-surface-variant max-w-lg mx-auto mb-xl">
              I&apos;m open to collaborations, freelance projects, internships, and exciting opportunities in AI and software development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-md">
              <Link
                href="/contact"
                className="btn-primary px-xl py-md rounded-lg font-label-md text-label-md uppercase tracking-wider inline-flex items-center gap-sm"
              >
                Contact Me
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </Link>
              <Link
                href="/portfolio"
                className="px-xl py-md rounded-lg font-label-md text-label-md uppercase tracking-wider text-on-surface-variant hover:text-on-surface border border-outline-variant/30 hover:border-outline-variant transition-colors inline-flex items-center gap-sm"
              >
                View Portfolio
                <span className="material-symbols-outlined text-sm">folder_open</span>
              </Link>
            </div>
          </div>
        </section>

      </main>

      <style jsx>{`
        .mb-section-gap {
          margin-bottom: 7rem;
        }
      `}</style>

      <Footer variant="default" />
    </>
  );
}

