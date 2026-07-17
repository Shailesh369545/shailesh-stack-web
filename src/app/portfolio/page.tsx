"use client";

import { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

// We map the user's specific categories into broader filter groups for the UI.
const projects = [
  {
    id: 1,
    title: "Student Management System",
    desc: "A centralized platform for administrators to manage student information efficiently using complete CRUD operations.",
    tags: ["PHP", "MySQL", "JavaScript"],
    filterGroup: "Web Apps",
    category: "Web Application",
    imgUrl: "/student-management.png", // Placeholder path for user to upload
  },
  {
    id: 2,
    title: "Blood Bank Management System",
    desc: "Connects blood donors with patients and helps organizations manage donor records and blood requests.",
    tags: ["PHP", "MySQL", "Healthcare"],
    filterGroup: "Web Apps",
    category: "Healthcare Web App",
    imgUrl: "/blood-bank.png", // Placeholder path for user to upload
  },
  {
    id: 3,
    title: "SkillCrafters",
    desc: "Online learning platform concept to help students master programming through organized resources and interactive tutorials.",
    tags: ["PHP", "MySQL", "JavaScript"],
    filterGroup: "Educational",
    category: "Educational Platform",
    imgUrl: "/skillcrafters.png", // The image the user just shared
  },
  {
    id: 4,
    title: "Feastozo",
    desc: "Food delivery platform concept connecting customers with restaurants and delivery partners through a modern web interface.",
    tags: ["PHP", "MySQL", "UI/UX"],
    filterGroup: "Web Apps",
    category: "Food Delivery Platform",
    imgUrl: "/feastozo.png", // Placeholder path for user to upload
  },
  {
    id: 5,
    title: "Portfolio Website",
    desc: "A personal portfolio showcasing my projects, skills, education, and development journey.",
    tags: ["HTML", "CSS", "JavaScript"],
    filterGroup: "Web Apps",
    category: "Personal Portfolio",
    imgUrl: "/portfolio.png", // Placeholder path for user to upload
  },
  {
    id: 6,
    title: "Product Management System",
    desc: "A business application developed to manage product information through streamlined CRUD operations.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    filterGroup: "Web Apps",
    category: "Business Web App",
    imgUrl: "/product-management.png", // Placeholder path for user to upload
  },
  {
    id: 7,
    title: "DiplomaPath Hub",
    desc: "Educational platform focused on helping diploma students access useful academic resources and guidance.",
    tags: ["PHP", "JavaScript", "CSS"],
    filterGroup: "Educational",
    category: "Educational Platform",
    imgUrl: "/diploma-path.png", // Placeholder path for user to upload
  },
  {
    id: 8,
    title: "TechDiploma Hub",
    desc: "A web platform designed for diploma students to organize educational resources and improve access to learning content.",
    tags: ["HTML", "CSS", "JavaScript"],
    filterGroup: "Educational",
    category: "Student Resource Platform",
    imgUrl: "/tech-diploma.png", // Placeholder path for user to upload
  },
  {
    id: 9,
    title: "Student ID Card System",
    desc: "A web utility application for generating and managing student ID cards securely.",
    tags: ["PHP", "MySQL", "CSS"],
    filterGroup: "Utility & Tools",
    category: "Utility Web App",
    imgUrl: "/id-card.png", // Placeholder path for user to upload
  },
  {
    id: 10,
    title: "DDCET Study Tracker",
    desc: "A study planning application built to help students track preparation and progress for entrance examinations.",
    tags: ["HTML", "CSS", "JavaScript"],
    filterGroup: "Educational",
    category: "Educational Productivity",
    imgUrl: "/ddcet.png", // The image the user just shared
  },
  {
    id: 11,
    title: "LifestyleStore",
    desc: "An online shopping website developed to practice e-commerce interface design and product presentation.",
    tags: ["HTML", "CSS", "JavaScript"],
    filterGroup: "Web Apps",
    category: "E-commerce Website",
    imgUrl: "/lifestyle-store.png", // Placeholder path for user to upload
  },
  {
    id: 12,
    title: "Calculator",
    desc: "A fast, responsive calculator application built to strengthen JavaScript logic and programming skills.",
    tags: ["HTML", "CSS", "JavaScript"],
    filterGroup: "Utility & Tools",
    category: "Utility Application",
    imgUrl: "/calculator.png", // Placeholder path for user to upload
  },
  {
    id: 13,
    title: "Python Projects Collection",
    desc: "A comprehensive collection of Python programs covering variables, OOP, functions, and mini-projects.",
    tags: ["Python", "Algorithms", "OOP"],
    filterGroup: "Practice & Learning",
    category: "Programming Practice",
    imgUrl: "/python-practice.png", // Placeholder path for user to upload
  },
  {
    id: 14,
    title: "PHP & MySQL Practice Collection",
    desc: "Backend practice applications focusing on CRUD, sessions, authentication, and complex SQL joins.",
    tags: ["PHP", "MySQL", "Backend"],
    filterGroup: "Practice & Learning",
    category: "Backend Practice",
    imgUrl: "/php-practice.png", // Placeholder path for user to upload
  },
];

const filters = [
  "All",
  "Web Apps",
  "Educational",
  "Utility & Tools",
  "Practice & Learning",
];

export default function Portfolio() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.filterGroup === active);

  return (
    <>
      <TopNavBar activeLink="/portfolio" />

      <main className="flex-grow pt-[80px] pb-xxl">
        {/* ── Hero ── */}
        <section className="text-center py-xxl px-gutter">
          <h1 className="font-display text-display text-on-background mb-lg">
            Portfolio
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            A showcase of my engineering journey—from AI-powered solutions to
            scalable web ecosystems.
          </p>
        </section>

        {/* ── Filter Tabs ── */}
        <section className="flex flex-wrap justify-center gap-sm mb-xl px-gutter">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-lg py-sm rounded-full font-label-md text-label-md transition-all border ${
                active === f
                  ? "bg-surface-container-high text-on-surface border-outline-variant"
                  : "bg-transparent text-on-surface-variant border-outline-variant/30 hover:border-outline-variant hover:text-on-surface"
              }`}
            >
              {f}
            </button>
          ))}
        </section>

        {/* ── Project Grid ── */}
        <section className="px-gutter max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {filtered.map((project) => (
            <article
              key={project.id}
              className="rounded-xl overflow-hidden flex flex-col group hover:-translate-y-1 transition-all duration-300 relative"
              style={{
                background: "rgba(10,10,10,0.5)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* Category Badge overlaying the image */}
              <div className="absolute top-sm right-sm z-10 px-xs py-1 rounded bg-surface-container/80 backdrop-blur-sm border border-outline-variant/30 font-mono text-[10px] text-on-surface-variant">
                {project.category}
              </div>

              {/* Image */}
              <div className="h-[200px] w-full relative overflow-hidden bg-surface-container-lowest flex items-center justify-center">
                {/* Fallback pattern in case image is missing */}
                <span className="material-symbols-outlined text-outline-variant/20 text-[64px] absolute">
                  image
                </span>
                <div
                  className="absolute inset-0 bg-cover bg-top group-hover:scale-105 transition-transform duration-500 z-0"
                  style={{ backgroundImage: `url('${project.imgUrl}')` }}
                />
              </div>

              {/* Content */}
              <div className="p-lg flex flex-col flex-grow">
                <h3 className="font-headline-sm text-headline-sm text-on-background mb-sm">
                  {project.title}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-md flex-grow">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-xs mb-lg">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-sm py-[3px] rounded text-[11px] font-mono text-on-surface-variant"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center gap-xs font-label-md text-label-md text-primary-container hover:text-primary transition-colors mt-auto group/btn">
                  View Case Study
                  <span className="material-symbols-outlined text-[14px] group-hover/btn:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </>
  );
}
