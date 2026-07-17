import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const posts = [
  {
    id: 1,
    category: "Full-Stack",
    date: "Oct 24, 2024",
    title: "Building a Real-Time K-Bar Command Menu",
    excerpt:
      "Implementing a blazing fast, keyboard-first navigation experience for your SaaS product using React, Tailwind, and fuzzy search algorithms.",
    readTime: "8 min",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2GD8uXN3zgq6L90lFpSjQrEVQK2P9sCyMLH6D3D7KFXRG9_rgkU0eCyWcb19ooyIbZC_4E889I0rOVs-0HQ98oojx4HIuQsxJp-Pd3lrZfGQ4nL2UakoCPzs9JJ9JcxDJOlBn8cF2g9IphrekhKG6xp9UTkJjfymhZS3zNcHdaax-t2L-hMtiKBA4wWibnzLPIuFd-qvabAWZ_WSwnlAGBUh3CtG3pF9ZdeVHuDn7NqjtMSh4aZ_s",
  },
  {
    id: 2,
    category: "AI & ML",
    date: "Oct 18, 2024",
    title: "Optimizing RAG Pipelines for Production",
    excerpt:
      "A deep dive into vector database selection, chunking strategies, and latency reduction techniques for Retrieval-Augmented Generation systems at scale.",
    readTime: "15 min",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCFVLk1MojBL6WS90jJbJJePaZ5sZrzjrA9_TD9kQQA81iOvTnypzJsKmlmgnO6ryNz_Ta3oyuVrTmNb_JIOKUdNEG7csO-vMsAP5JA9A1M7P2TYCd5UB1ItWoXm5vIYoQGDDixxmRkq9M8nokFveeGB7iyv99YFSrpKxxeI65uinJIFf6fokdjZ6BjfIA1S5J30G1lHhLud8fh9zV6wEo3wu2jTiZkjgeh759CE4mBdqmA21yPH4H1",
  },
  {
    id: 3,
    category: "Productivity",
    date: "Oct 10, 2024",
    title: "The Zero-Friction Developer Environment",
    excerpt:
      "My personal dotfiles, terminal setup, and the specific CLI tools that save me hours every week. A guide to automating the mundane.",
    readTime: "6 min",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC1KKHc2lwmlyaMxeVEurHIfy-c9NURedC_RP7LeYSn4bCb1gu5lRn9BKH1QLvwUl8pLWHVSg6ZREoZAu4ynsbzPE60us8VJPUrKpCIaLaIIG1FcuTuTPOrTHJrWM5SrPCjbHrTc1rY22vtkQSTmLnYti_OhsFjkTMsXDq-bBlLLLUHQXBavL36wbMLwidpDgyX3Nqo_io2o9W8JGmvxhaI8buAPAGITs3pm7vxkd2fRYIf99rjOmoa",
  },
  {
    id: 4,
    category: "Career",
    date: "Sep 28, 2024",
    title: "Transitioning from IC to Architecture",
    excerpt:
      "Reflections on stepping away from the daily codebase to focus on system design, technical strategy, and mentoring senior engineering teams.",
    readTime: "10 min",
    imgUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCio_7ZHWxLKk044DUuQ2TJDizT9OiWC9LSbuWG7_JvqGL7Et-IPYmXRHRPa5WkRLnz_xF5wbppyKz17tHCbmLIcred4vqkflsCYqnJaBC3HGE_d2tVhvOnTs0EHU7_8_cBpBbO9mU14hbnHFIS2tf-C-wYPqPBUHLICjj2HjH5Xh1Ffx91vZoPfCrzRWqi8-O1qnsXnK3xc5r0-hHHv7-DJO8nBFzLg7d8RI8frG30HYDBuNmKgdZF",
  },
];

const categories = [
  { label: "All Transmissions", count: 42 },
  { label: "AI & ML", count: 15 },
  { label: "Full-Stack", count: 18 },
  { label: "Career Journey", count: 4 },
  { label: "Productivity", count: 5 },
];

export default function Blog() {
  return (
    <>
      <TopNavBar activeLink="blog" />

      <main className="flex-grow pt-[104px] pb-xxl px-gutter max-w-container-max mx-auto w-full flex flex-col gap-xxl relative">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary-container/5 rounded-full blur-[150px] pointer-events-none -z-10" />

        {/* Hero */}
        <header className="flex flex-col items-center text-center gap-md pt-xl pb-lg">
          <div className="inline-flex items-center gap-sm px-sm py-xs bg-surface-container rounded-full border border-outline-variant/30 text-primary font-mono text-mono mb-sm">
            <span className="material-symbols-outlined text-[16px]">
              terminal
            </span>
            System.out.println(&quot;Hello, World!&quot;);
          </div>
          <h1 className="font-display text-headline-lg-mobile md:text-display font-bold text-on-surface tracking-tighter">
            The Engineer&apos;s Log
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Chronicles of high-performance engineering. Deep dives into
            AI-native development, full-stack architectures, and the
            uncompromising pursuit of building premium product ecosystems.
          </p>
        </header>

        {/* Featured Article */}
        <section aria-label="Featured Article" className="w-full">
          <div className="group relative w-full h-[500px] rounded-xl overflow-hidden glass-card flex flex-col justify-end p-xl cursor-pointer hover:border-outline-variant transition-colors duration-500 border border-outline-variant/20">
            <div className="absolute inset-0 z-0">
              <img
                className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5PeHt_ahBPhCedkYNVVk00DQ9erwxnOvDV6phwi8H2WITpUbNW80E3JA-IrJ_Z4BuO1cMGoofUWlVAxnAwxrPQYAW1R02c_REK_Uzzdmqad4NHbcXezvpCcy9Gh1cUmDtvEfL0uqOKsKrgilTkd7w00Daval55uOCs6xeCoUkG-KSI07YVQiVJZvqA8fuznC1FSoKgBm7bdU65F8rtFjDXiogV3RXqYxK0php7cjA2uvNC4FuwssE"
                alt="Featured article hero"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
            </div>
            <div className="relative z-10 flex flex-col gap-sm max-w-3xl">
              <div className="flex items-center gap-md mb-sm">
                <span className="bg-surface-container text-primary font-mono text-mono px-sm py-xs rounded text-[12px] uppercase tracking-wider border border-primary/20">
                  Featured
                </span>
                <span className="text-on-surface-variant font-label-md text-label-md flex items-center gap-xs">
                  <span className="material-symbols-outlined text-[14px]">
                    schedule
                  </span>{" "}
                  12 min read
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                The Future of AI-Native Development: Beyond the Wrapper
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant line-clamp-2">
                How transitioning from simple API wrappers to deeply integrated,
                autonomous AI agents is reshaping the modern tech stack. We
                explore architectural patterns for latency reduction and context
                retention in LLM applications.
              </p>
              <div className="flex items-center gap-sm mt-md font-label-md text-label-md text-primary">
                Read Full Log{" "}
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content Grid & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-lg items-start">
          {/* Sidebar */}
          <aside className="lg:col-span-1 sticky top-[100px] glass-panel rounded-lg p-md hidden lg:flex flex-col gap-sm">
            <h3 className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest mb-sm px-sm">
              Signal Filter
            </h3>
            <nav className="flex flex-col gap-xs">
              {categories.map((cat, i) => (
                <button
                  key={cat.label}
                  className={`text-left px-sm py-sm rounded font-body-sm text-body-sm flex justify-between items-center group transition-colors ${
                    i === 0
                      ? "bg-surface-container-lowest text-primary"
                      : "hover:bg-surface-container-lowest text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {cat.label}
                  <span
                    className={`text-[10px] px-xs rounded transition-colors ${
                      i === 0
                        ? "bg-surface-container text-on-surface-variant"
                        : "bg-surface-container text-on-surface-variant group-hover:bg-outline-variant/30"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </nav>
          </aside>

          {/* Mobile Filter */}
          <div className="lg:hidden flex overflow-x-auto pb-sm gap-sm snap-x hide-scrollbar">
            {categories.map((cat, i) => (
              <button
                key={cat.label}
                className={`shrink-0 px-md py-sm rounded-full font-label-md text-label-md snap-start border ${
                  i === 0
                    ? "bg-surface-container-lowest border-primary/30 text-primary"
                    : "bg-surface-container-highest border-transparent text-on-surface-variant"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Blog Post Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-md">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group flex flex-col rounded-xl border border-outline-variant/20 overflow-hidden hover:border-outline-variant/50 transition-colors cursor-pointer bg-surface-container-lowest"
              >
                <div className="h-48 w-full overflow-hidden relative border-b border-outline-variant/10">
                  <img
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    src={post.imgUrl}
                    alt={post.title}
                  />
                </div>
                <div className="p-lg flex flex-col gap-sm flex-grow">
                  <div className="flex items-center justify-between mb-xs">
                    <span className="bg-surface-container text-on-surface font-mono text-[10px] px-sm py-xs rounded tracking-widest uppercase">
                      {post.category}
                    </span>
                    <span className="text-on-surface-variant font-label-md text-[10px] uppercase">
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mt-xs">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto pt-md flex items-center justify-between border-t border-outline-variant/10">
                    <span className="text-on-surface-variant font-label-md text-label-md flex items-center gap-xs">
                      <span className="material-symbols-outlined text-[14px]">
                        book
                      </span>{" "}
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <section className="w-full glass-panel rounded-2xl p-xl text-center flex flex-col items-center gap-md relative overflow-hidden border border-outline-variant/20">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-container to-transparent" />
          <span className="material-symbols-outlined text-[32px] text-primary mb-sm">
            rss_feed
          </span>
          <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
            Stay in the Loop
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Get notified when new engineering logs are published. No spam, just
            high-signal technical content.
          </p>
          <div
            className="flex w-full max-w-sm mt-sm gap-sm"
          >
            <input
              className="flex-grow input-field rounded px-md py-sm font-mono text-mono focus:outline-none focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/50"
              placeholder="enter_email@domain.com"
              type="email"
            />
            <button
              className="bg-on-surface text-background px-md py-sm rounded font-label-md text-label-md font-bold hover:bg-surface-tint transition-colors"
              type="button"
            >
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}


