"use client";

import { useState } from "react";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "Project Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <TopNavBar activeLink="/contact" />

      <main className="px-gutter max-w-container-max mx-auto pt-[100px] pb-xxl">

        {/* ── Page Header ── */}
        <section className="mt-xl mb-xl">
          <h1 className="font-display text-display text-on-background mb-sm leading-none">
            Get in Touch
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Open for collaboration, consulting, and exciting new projects.
            Let&apos;s engineer something remarkable.
          </p>
        </section>

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl">

          {/* Left Column */}
          <div className="lg:col-span-5 space-y-lg">

            {/* Contact Information card */}
            <div className="bg-surface-container rounded-xl p-lg">
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-lg">
                Contact Information
              </h3>
              <div className="space-y-lg">
                <div className="flex items-start gap-md">
                  <span
                    className="material-symbols-outlined text-on-surface-variant mt-0.5 text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    mail
                  </span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">
                      Email
                    </p>
                    <a
                      className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
                      href="mailto:shailesh@suthar.com"
                    >
                      shailesh@suthar.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-md">
                  <span
                    className="material-symbols-outlined text-on-surface-variant mt-0.5 text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    call
                  </span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">
                      Phone
                    </p>
                    <a
                      className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors"
                      href="tel:+917567268056"
                    >
                      +91 7567268056
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-md">
                  <span
                    className="material-symbols-outlined text-on-surface-variant mt-0.5 text-[20px]"
                    style={{ fontVariationSettings: "'FILL' 0" }}
                  >
                    location_on
                  </span>
                  <div>
                    <p className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs">
                      Location
                    </p>
                    <p className="font-body-md text-body-md text-on-surface">
                      Remote / India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Connect card */}
            <div className="bg-surface-container rounded-xl p-lg">
              <h3 className="font-headline-sm text-headline-sm text-on-background mb-lg">
                Connect
              </h3>
              <div className="flex flex-col gap-xs">
                {[
                  { icon: "link", label: "LinkedIn", href: "https://linkedin.com/in/kdpcompshailesh190" },
                  { icon: "code", label: "GitHub", href: "#" },
                  { icon: "chat_bubble", label: "Twitter / X", href: "#" },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href !== "#" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-md p-sm rounded-lg hover:bg-surface-container-high transition-colors group"
                  >
                    <span
                      className="material-symbols-outlined text-outline group-hover:text-primary transition-colors text-[20px]"
                      style={{ fontVariationSettings: "'FILL' 0" }}
                    >
                      {item.icon}
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant group-hover:text-on-surface transition-colors">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column — Form */}
          <div className="lg:col-span-7">
            <div className="bg-surface-container rounded-xl p-xl relative overflow-hidden">
              {/* Subtle top-right glow */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl pointer-events-none" />

              {submitted ? (
                <div className="relative z-10 flex flex-col items-center justify-center py-xxl text-center gap-lg">
                  <span className="material-symbols-outlined text-[64px] text-secondary">
                    check_circle
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-background">
                    Message Sent!
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
                    Thanks for reaching out. I&apos;ll get back to you within
                    24–48 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "Project Inquiry", message: "" });
                    }}
                    className="btn-secondary px-lg py-sm rounded font-label-md text-label-md uppercase tracking-wider"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form
                  className="space-y-md relative z-10"
                  onSubmit={handleSubmit}
                >
                  {/* Name + Email row */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                    <div>
                      <label
                        className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs"
                        htmlFor="name"
                      >
                        Full Name
                      </label>
                      <input
                        className="input-field w-full rounded px-md py-sm font-body-md text-body-md"
                        id="name"
                        placeholder="John Doe"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label
                        className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs"
                        htmlFor="email"
                      >
                        Email Address
                      </label>
                      <input
                        className="input-field w-full rounded px-md py-sm font-body-md text-body-md"
                        id="email"
                        placeholder="john@example.com"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs"
                      htmlFor="subject"
                    >
                      Subject
                    </label>
                    <select
                      className="input-field w-full rounded px-md py-sm font-body-md text-body-md appearance-none cursor-pointer"
                      id="subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    >
                      <option>Project Inquiry</option>
                      <option>Hire Me</option>
                      <option>Support</option>
                      <option>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-xs"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="input-field w-full rounded px-md py-sm font-body-md text-body-md resize-none"
                      id="message"
                      placeholder="How can I help you?"
                      rows={5}
                      required
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full bg-primary-container text-on-primary-container py-[14px] rounded font-label-md text-label-md uppercase tracking-wider font-bold hover:bg-inverse-primary transition-all active:scale-[0.98] flex justify-center items-center gap-sm"
                  >
                    Send Message
                    <span
                      className="material-symbols-outlined text-[18px]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      send
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── FAQ ── */}
        <section className="mt-xxl border-t border-outline-variant/20 pt-xxl">
          <h2 className="font-headline-md text-headline-md text-on-background mb-xl text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-4xl mx-auto">
            {[
              {
                q: "What is your typical response time?",
                a: "I aim to respond to all inquiries within 24–48 business hours.",
              },
              {
                q: "Do you take on freelance projects?",
                a: "Yes, I am currently accepting select freelance opportunities. Please use the 'Project Inquiry' subject.",
              },
            ].map((faq) => (
              <div key={faq.q} className="p-md rounded-lg hover:bg-surface-container transition-colors">
                <h4 className="font-headline-sm text-headline-sm text-on-background mb-sm">
                  {faq.q}
                </h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
