// Rio Elite Staff Operations Manual — Online Edition
// Design: Professional black & gold handbook with sticky sidebar navigation,
// section-by-section layout, GRIP cards, penalty/bonus tables, step lists.
// Brand: Black (#0D0D0D) sidebar/header, Gold (#C9A227) accents, warm white background.

import { useState, useEffect, useRef, useCallback } from "react";
import { SECTIONS, ManualSection, ContentBlock } from "@/lib/manualData";
import { downloadManualPdf } from "@/lib/downloadPdf";

const LOGO_URL =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663270045816/N4rgkrRwWxtgy5x7UFcaiD/rio-elite-logo_7679350b.png";

// Rio Elite color tokens (OKLCH)
// Black:      oklch(0.12 0.005 60)
// Gold:       oklch(0.78 0.16 85)
// Gold dark:  oklch(0.65 0.14 85)
// Sidebar bg: oklch(0.10 0.005 60)

// ─── Render a single content block ───────────────────────────────────────────

function RenderBlock({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "body":
      return (
        <p className="text-[15px] leading-[1.8] text-[oklch(0.25_0.01_60)] mb-4">
          {block.text}
        </p>
      );

    case "italic_intro":
      return (
        <div className="italic-intro text-[15px] mb-5">
          {block.text}
        </div>
      );

    case "section_label":
      return (
        <h3 className="section-header text-[11px] mt-7 mb-3">
          {block.text}
        </h3>
      );

    case "bullet":
      return (
        <ul className="mb-5 space-y-2">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-[14.5px] leading-[1.75] text-[oklch(0.25_0.01_60)]">
              <span className="mt-[7px] flex-shrink-0 w-2 h-2 bg-[oklch(0.78_0.16_85)] rounded-none" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );

    case "numbered":
      return (
        <ol className="mb-5 space-y-2 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[14.5px] leading-[1.75] text-[oklch(0.25_0.01_60)]">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[oklch(0.12_0.005_60)] text-[oklch(0.78_0.16_85)] text-[11px] font-bold flex items-center justify-center mt-[2px]">
                {i + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );

    case "link":
      return (
        <div className="mb-5 flex items-center gap-3 p-3 bg-[oklch(0.97_0.003_85)] border border-[oklch(0.88_0.006_85)] rounded">
          <span className="text-[oklch(0.78_0.16_85)]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          </span>
          <a
            href={block.url}
            target="_blank"
            rel="noopener noreferrer"
            className="content-link text-[14px] font-semibold"
          >
            {block.label} →
          </a>
        </div>
      );

    case "grip_cards":
      return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 mt-2">
          {block.cards.map((card) => (
            <div key={card.letter} className="grip-card">
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="text-[oklch(0.78_0.16_85)] leading-none"
                  style={{
                    fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
                    fontWeight: 800,
                    fontSize: "2.2rem",
                  }}
                >
                  {card.letter}
                </span>
                <span
                  className="text-[oklch(0.12_0.005_60)] text-[13px] tracking-widest"
                  style={{
                    fontFamily: "'Barlow Condensed', 'Arial Narrow', Arial, sans-serif",
                    fontWeight: 700,
                  }}
                >
                  {card.word}
                </span>
              </div>
              <div className="w-8 h-[2px] bg-[oklch(0.78_0.16_85)] mb-3" />
              <p className="text-[13px] leading-[1.7] text-[oklch(0.35_0.01_60)]">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      );

    case "penalty_table":
      return (
        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-[13.5px] border-collapse">
            <thead>
              <tr className="bg-[oklch(0.12_0.005_60)] text-white">
                <th className="text-left px-4 py-3 font-semibold tracking-wide w-24" style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}>AMOUNT</th>
                <th className="text-left px-4 py-3 font-semibold tracking-wide w-48" style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}>VIOLATION</th>
                <th className="text-left px-4 py-3 font-semibold tracking-wide" style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}>NOTES</th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-[oklch(0.97_0.003_85)]" : "bg-white"}>
                  <td className="px-4 py-3 font-bold text-[oklch(0.78_0.16_85)]">{row.amount}</td>
                  <td className="px-4 py-3 font-semibold text-[oklch(0.12_0.005_60)]">{row.description}</td>
                  <td className="px-4 py-3 text-[oklch(0.35_0.01_60)]">{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "bonus_table":
      return (
        <div className="mb-6 overflow-x-auto">
          <table className="w-full text-[13.5px] border-collapse">
            <thead>
              <tr className="bg-[oklch(0.12_0.005_60)] text-white">
                <th className="text-left px-4 py-3 font-semibold tracking-wide w-24" style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}>AMOUNT</th>
                <th className="text-left px-4 py-3 font-semibold tracking-wide w-48" style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}>BONUS</th>
                <th className="text-left px-4 py-3 font-semibold tracking-wide" style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}>QUALIFICATION RULES</th>
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => {
                const isPending = row.description.includes("PENDING");
                return (
                  <tr key={i} className={isPending ? "bg-amber-100 border-l-4 border-amber-400" : i % 2 === 0 ? "bg-[oklch(0.97_0.003_85)]" : "bg-white"}>
                    <td className={`px-4 py-3 font-bold ${isPending ? "text-amber-700" : "text-[oklch(0.32_0.14_142)]"}`}>{row.amount}</td>
                    <td className={`px-4 py-3 font-semibold ${isPending ? "text-amber-800" : "text-[oklch(0.12_0.005_60)]"}`}>{row.description}</td>
                    <td className={`px-4 py-3 ${isPending ? "text-amber-700 italic" : "text-[oklch(0.35_0.01_60)]"}`}>{row.notes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );

    case "steps":
      return (
        <div className="mb-6 space-y-3">
          {block.items.map((step, i) => (
            <div key={i} className="flex gap-4 p-4 bg-[oklch(0.97_0.003_85)] border-l-4 border-[oklch(0.12_0.005_60)]">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[oklch(0.12_0.005_60)] text-[oklch(0.78_0.16_85)] text-[13px] font-bold flex items-center justify-center">
                {i + 1}
              </div>
              <div>
                <div
                  className="text-[13px] font-bold text-[oklch(0.12_0.005_60)] mb-1 tracking-wide uppercase"
                  style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
                >
                  {step.title}
                </div>
                <p className="text-[13.5px] leading-[1.7] text-[oklch(0.35_0.01_60)]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      );

    case "two_col":
      return (
        <div className="flex items-stretch mb-1 text-[14px] border-b border-[oklch(0.92_0.005_85)] last:border-b-0">
          <div className="w-1/2 py-2.5 pr-4 font-semibold text-[oklch(0.12_0.005_60)]">{block.left}</div>
          <div className="w-1/2 py-2.5 text-[oklch(0.35_0.01_60)]">{block.right}</div>
        </div>
      );

    default:
      return null;
  }
}

// ─── Section renderer ─────────────────────────────────────────────────────────

function SectionContent({ section }: { section: ManualSection }) {
  return (
    <div>
      {section.content.map((block, i) => (
        <RenderBlock key={i} block={block} />
      ))}
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function Home() {
  const [activeSection, setActiveSection] = useState("01");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadPdf = useCallback(async () => {
    if (downloading) return;
    setDownloading(true);
    setDownloadProgress(0);
    try {
      await downloadManualPdf((pct) => setDownloadProgress(pct));
    } finally {
      setDownloading(false);
      setDownloadProgress(0);
    }
  }, [downloading]);

  // Scroll spy
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id.replace("section-", ""));
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    SECTIONS.forEach((s) => {
      const el = sectionRefs.current[s.num];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (num: string) => {
    const el = sectionRefs.current[num];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setSidebarOpen(false);
    }
  };

  const currentSection = SECTIONS.find((s) => s.num === activeSection);

  return (
    <div className="min-h-screen bg-[oklch(0.98_0.003_85)] flex flex-col">
      {/* ── Top Header ── */}
      <header className="sticky top-0 z-50 bg-[oklch(0.10_0.005_60)] text-white shadow-lg">
        <div className="flex items-center justify-between px-4 md:px-8 h-14">
          <div className="flex items-center gap-3">
            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-white p-1"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-label="Toggle navigation"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <img src={LOGO_URL} alt="Rio Elite" className="h-10 w-auto object-contain" />
            <div className="hidden sm:block">
              <div
                className="text-[11px] tracking-[0.15em] text-[oklch(0.60_0.02_85)] uppercase"
                style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
              >
                Staff Operations Manual
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-[oklch(0.60_0.02_85)] text-[12px]">
            {currentSection && (
              <>
                <span className="text-[oklch(0.78_0.16_85)] font-bold">{currentSection.num}</span>
                <span>/</span>
                <span
                  className="tracking-wide"
                  style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
                >
                  {currentSection.title}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPdf}
              disabled={downloading}
              className="flex items-center gap-2 bg-[oklch(0.78_0.16_85)] hover:bg-[oklch(0.65_0.14_85)] disabled:opacity-60 text-[oklch(0.10_0.005_60)] px-3 py-1.5 transition-colors duration-150"
              style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.1em" }}
              title="Download PDF"
            >
              {downloading ? (
                <>
                  <svg className="animate-spin" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  <span className="hidden sm:inline">{downloadProgress > 0 ? `${downloadProgress}%` : "PREPARING..."}</span>
                </>
              ) : (
                <>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span className="hidden sm:inline">DOWNLOAD PDF</span>
                </>
              )}
            </button>
          </div>
        </div>
        {/* Gold accent line */}
        <div className="h-[3px] bg-[oklch(0.78_0.16_85)]" />
      </header>

      <div className="flex flex-1 relative">
        {/* ── Sidebar Overlay (mobile) ── */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* ── Sidebar Navigation ── */}
        <aside
          className={`
            fixed md:sticky top-[51px] left-0 z-40 h-[calc(100vh-51px)]
            w-72 bg-[oklch(0.10_0.005_60)] overflow-y-auto flex-shrink-0
            transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          `}
        >
          <div className="py-4">
            <div
              className="px-5 pb-3 text-[10px] tracking-[0.2em] text-[oklch(0.45_0.02_85)] uppercase font-bold"
              style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
            >
              Table of Contents
            </div>
            {SECTIONS.map((section) => {
              const isActive = activeSection === section.num;
              return (
                <button
                  key={section.num}
                  onClick={() => scrollToSection(section.num)}
                  className={`
                    w-full text-left px-5 py-3 flex items-start gap-3 transition-all duration-150
                    ${isActive ? "nav-item-active" : "nav-item"}
                  `}
                >
                  <span
                    className={`text-[11px] font-bold flex-shrink-0 mt-[1px] ${isActive ? "text-[oklch(0.78_0.16_85)]" : "text-[oklch(0.72_0.04_85)]"}`}
                    style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
                  >
                    {section.num}
                  </span>
                  <span
                    className="text-[12px] leading-[1.4]"
                    style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif", fontWeight: isActive ? 700 : 600, letterSpacing: "0.04em" }}
                  >
                    {section.title}
                  </span>
                </button>
              );
            })}
          </div>
        </aside>

        {/* ── Main Content ── */}
        <main
          ref={contentRef}
          className="flex-1 overflow-y-auto"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Cover / Hero — gold background, side-by-side layout */}
          <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.72 0.17 82) 0%, oklch(0.82 0.18 88) 50%, oklch(0.68 0.16 78) 100%)" }}>
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, oklch(0.50 0.10 80) 10px, oklch(0.50 0.10 80) 11px)" }} />
            <div className="relative flex items-center gap-8 md:gap-12 px-8 md:px-16 py-8">
              {/* Large logo on the left */}
              <div className="flex-shrink-0">
                <img src={LOGO_URL} alt="Rio Elite" className="w-64 md:w-80 h-auto object-contain drop-shadow-sm" />
              </div>
              {/* Title text on the right */}
              <div className="flex-1 min-w-0">
                <div
                  className="text-[oklch(0.18_0.005_60)] text-[10px] tracking-[0.3em] uppercase font-bold mb-2"
                  style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
                >
                  Official Program Document
                </div>
                <h1
                  className="text-[oklch(0.10_0.005_60)] mb-3 leading-none"
                  style={{
                    fontFamily: "'Barlow Condensed', Arial, sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.6rem, 4vw, 3rem)",
                    letterSpacing: "0.03em",
                  }}
                >
                  STAFF OPERATIONS MANUAL
                </h1>
                <div className="w-12 h-1 bg-[oklch(0.18_0.005_60)] mb-3" />
                <p className="text-[oklch(0.22_0.005_60)] text-[13px] leading-[1.7] max-w-lg">
                  This manual is the definitive guide to coaching standards, program systems, policies, and procedures at Rio Elite.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          <div className="max-w-4xl mx-auto px-6 md:px-12 py-10">
            {SECTIONS.map((section, idx) => (
              <div
                key={section.num}
                id={`section-${section.num}`}
                ref={(el) => { sectionRefs.current[section.num] = el; }}
                className={`mb-16 ${idx > 0 ? "pt-8 border-t border-[oklch(0.88_0.006_85)]" : ""}`}
              >
                {/* Section Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-[oklch(0.78_0.16_85)] text-[11px] font-bold tracking-widest"
                      style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
                    >
                      SECTION {section.num}
                    </span>
                    <div className="flex-1 h-px bg-[oklch(0.88_0.006_85)]" />
                  </div>
                  <h2
                    className="text-[oklch(0.12_0.005_60)] leading-tight mb-1"
                    style={{
                      fontFamily: "'Barlow Condensed', Arial, sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.4rem, 3vw, 2rem)",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {section.title}
                  </h2>
                  <p
                    className="text-[oklch(0.55_0.01_60)] text-[13px] tracking-wide"
                    style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
                  >
                    {section.sub}
                  </p>
                  <div className="mt-3 w-12 h-[3px] bg-[oklch(0.78_0.16_85)]" />
                </div>

                {/* Section Content */}
                <SectionContent section={section} />

                {/* Signature section special layout */}
                {section.num === "22" && (
                  <div className="mt-8 border border-[oklch(0.88_0.006_85)] p-6 bg-white">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <div className="text-[11px] tracking-widest text-[oklch(0.55_0.01_60)] uppercase mb-6"
                          style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}>
                          Coach Signature
                        </div>
                        <div className="border-b border-[oklch(0.12_0.005_60)] mb-2 h-10" />
                        <div className="text-[11px] text-[oklch(0.55_0.01_60)]">Signature</div>
                        <div className="border-b border-[oklch(0.12_0.005_60)] mb-2 h-10 mt-6" />
                        <div className="text-[11px] text-[oklch(0.55_0.01_60)]">Printed Name</div>
                        <div className="border-b border-[oklch(0.12_0.005_60)] mb-2 h-10 mt-6" />
                        <div className="text-[11px] text-[oklch(0.55_0.01_60)]">Date</div>
                      </div>
                      <div>
                        <div className="text-[11px] tracking-widest text-[oklch(0.55_0.01_60)] uppercase mb-6"
                          style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}>
                          Program Leadership
                        </div>
                        <div className="border-b border-[oklch(0.12_0.005_60)] mb-2 h-10" />
                        <div className="text-[11px] text-[oklch(0.55_0.01_60)]">All-Star Director Signature</div>
                        <div className="border-b border-[oklch(0.12_0.005_60)] mb-2 h-10 mt-6" />
                        <div className="text-[11px] text-[oklch(0.55_0.01_60)]">Printed Name</div>
                        <div className="border-b border-[oklch(0.12_0.005_60)] mb-2 h-10 mt-6" />
                        <div className="text-[11px] text-[oklch(0.55_0.01_60)]">Date</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer */}
          <footer className="bg-[oklch(0.10_0.005_60)] text-[oklch(0.50_0.02_85)] px-8 py-8 mt-8">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <img src={LOGO_URL} alt="Rio Elite" className="h-10 w-auto object-contain opacity-80" />
              <div className="text-center md:text-right">
                <div
                  className="text-white text-[11px] tracking-[0.2em] uppercase mb-1"
                  style={{ fontFamily: "'Barlow Condensed', Arial, sans-serif" }}
                >
                  Rio Elite Staff Operations Manual
                </div>
                <div className="text-[11px]">
                  Confidential — For Rio Elite Coaching Staff Only
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
