import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

export default function AIProducts() {
  const products = [
    {
      id: 1,
      title: "AI Resume Builder",
      status: "Stable",
      statusColor: "secondary",
      desc: "Advanced parsing and generation for optimized career profiles.",
      tags: ["LLM", "NLP"],
      imgUrl: "/ai-resume-builder.png",
      live: true,
    },
    {
      id: 2,
      title: "AI PDF Analyzer",
      status: "Stable",
      statusColor: "secondary",
      desc: "Semantic document intelligence and automated data extraction.",
      tags: ["RAG", "Vector Search"],
      imgUrl: "/ai-pdf-analyzer.png",
      live: true,
    },
    {
      id: 3,
      title: "SkillCrafters AI",
      status: "Beta",
      statusColor: "yellow",
      desc: "Intelligent learning mentor with adaptive curriculum generation.",
      tags: ["Agents", "Generative"],
      imgUrl: "/skillcrafters-ai.png",
      live: true,
    },
    {
      id: 4,
      title: "CodeAssistant Pro",
      status: "Beta",
      statusColor: "yellow",
      desc: "Real-time logic optimization and intelligent code completion.",
      tags: ["Code-LLM", "AST Parsing"],
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAYCrXDz3Uw7WByENi1U-2UHFIdvtuRfHR679qulVxKiZOof5MVziszNYm6S6SOPHQRgJNPgMFOODFWKOZlrzLdpUaVNOsNfwLu4jkrIwEc_uZD7i_o6D8Zoycq0jsJiFbdqm4OnnFA40sROc9f_cP-uEZ7SBwJyNLkgvyj0RWM3RkrcwgzF_tS7y9m7al4KJ9lDW2BtzS4tJLCAC31kb5ESfGrIEF77NnRpK_sVeXisf604gzbeUo6",
      live: true,
    },
    {
      id: 5,
      title: "VoiceForge AI",
      status: "Coming Soon",
      statusColor: "blue",
      desc: "High-fidelity, emotionally nuanced speech synthesis and cloning.",
      tags: ["Audio-Gen", "TTS"],
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjVPtv-xHvAlV4LP0RvAEIpfN-b3eLhMRyBQ_HEu8UIEO8Cltl4OHmGpuPnC0k0iMNE3ePr4sL22lQ9U-JKuNvGZGmqJlGFG60Fm2ezwIFUDpF3nWCEHtI0rm1u_JbOUYbeaOK44QR6f4sKfdl87329624G0voXTTUcpWv5pHYioS0gOmoXPRSQH5hVVwirp9WmbW9Ncza8yuCzR_J-FfwP1nfb_hdzxYRHwyj73YaE62SCtMHsfZF",
      live: false,
    },
    {
      id: 6,
      title: "VisionGrid",
      status: "Coming Soon",
      statusColor: "blue",
      desc: "Real-time image recognition, segmentation, and processing APIs.",
      tags: ["Computer Vision", "CNN"],
      imgUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD22Vj_ENgQPKADAlKJf-alnhGYYXqURAXvh6iQFOTiKwMU4WvWNPMCOxLNMcfoqmYhztzEcsxRoEuOiSgZGsRuJQWc1UudXv7RmTrsKLCWWJSbhHRm5EZDv-5hK84vsjnd10nazT5d2JzPO72_4JuEQ5JUuWb4MydPqRprk5mDeEJUfV4fZCecJKH0mj4u7-VcZl6oY-CxafAsLtogV-F02IM7UnFC2YMbmnuBMv2jgraenN3rN5Jv",
      live: false,
    },
  ];

  const statusBadge = (status: string, color: string) => {
    const colorMap: Record<string, string> = {
      secondary: "bg-secondary/20 text-secondary border-secondary/30",
      yellow: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
    };
    return (
      <span
        className={`px-2 py-1 rounded font-mono text-[10px] uppercase tracking-wider border ${colorMap[color] ?? colorMap.blue}`}
      >
        {status}
      </span>
    );
  };

  return (
    <>
      <TopNavBar activeLink="ai-products" />

      {/* Ambient Background */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-container/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <main className="flex-grow pt-[100px] pb-xxl px-gutter max-w-container-max mx-auto w-full relative z-10">
        {/* Hero */}
        <header className="text-center py-xl md:py-xxl relative">
          <h1 className="font-display text-headline-lg-mobile md:text-display text-on-surface mb-md">
            Intelligent Ecosystem.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto">
            A specialized collection of AI-driven tools, agents, and automation
            workflows designed to accelerate digital innovation.
          </p>
        </header>

        {/* Category Filter */}
        <section className="mb-xl flex flex-wrap justify-center gap-sm">
          {["All", "Chatbots", "AI Agents", "Automation", "Analysis", "Generators"].map(
            (cat, i) => (
              <button
                key={cat}
                className={`px-md py-xs rounded-full font-label-md text-label-md transition-colors border ${
                  i === 0
                    ? "bg-surface-container-highest border-outline-variant text-on-surface"
                    : "bg-transparent border-outline-variant/30 text-on-surface-variant hover:border-outline-variant hover:text-on-surface"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </section>

        {/* Product Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
          {products.map((product) => (
            <article
              key={product.id}
              className="glass-card rounded-xl p-md flex flex-col relative group overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-container/10"
            >
              <div className="h-48 rounded-lg bg-surface-container-lowest border border-outline-variant/20 mb-md overflow-hidden relative">
                <div
                  className="bg-cover bg-center w-full h-full opacity-60 group-hover:opacity-90 transition-opacity duration-500"
                  style={{ backgroundImage: `url('${product.imgUrl}')` }}
                />
              </div>

              <div className="flex-grow">
                <div className="flex justify-between items-start mb-sm">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {product.title}
                  </h3>
                  {statusBadge(product.status, product.statusColor)}
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mb-md">
                  {product.desc}
                </p>
                <div className="flex gap-xs mb-md flex-wrap">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-surface-container rounded text-on-surface-variant font-mono text-[10px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-sm mt-auto pt-sm border-t border-outline-variant/20">
                {product.live ? (
                  <button className="flex-1 bg-primary-container text-on-primary-container font-label-md text-label-md py-sm rounded hover:bg-inverse-primary transition-colors">
                    Try Demo
                  </button>
                ) : (
                  <button
                    disabled
                    className="flex-1 bg-surface-container text-outline font-label-md text-label-md py-sm rounded cursor-not-allowed"
                  >
                    Join Waitlist
                  </button>
                )}
                <button className="flex-1 btn-secondary font-label-md text-label-md py-sm rounded">
                  View Docs
                </button>
              </div>
            </article>
          ))}
        </section>

        {/* CTA Banner */}
        <section className="mt-xxl glass-panel rounded-2xl p-xl text-center relative overflow-hidden border border-outline-variant/20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-container to-transparent" />
          <span className="material-symbols-outlined text-[32px] text-primary block mb-sm">
            auto_awesome
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface font-bold mb-sm">
            Have a project idea?
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto mb-lg">
            I build custom AI solutions and integrations. Let&apos;s engineer
            something remarkable together.
          </p>
          <a
            href="/contact"
            className="btn-primary inline-flex items-center gap-sm px-xl py-md rounded-lg font-label-md text-label-md uppercase tracking-wider"
          >
            Start a Conversation
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
