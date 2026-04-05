"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

interface NavDropdownItem {
  title: string;
  href: string;
}

interface NavSection {
  label: string;
  items: NavDropdownItem[];
}

const sections: NavSection[] = [
  {
    label: "Foundation",
    items: [
      { title: "Design Tokens", href: "/foundation#design-tokens" },
      { title: "Extended Colors", href: "/foundation#extended-palette" },
      { title: "Typography", href: "/foundation#typography" },
    ],
  },
  {
    label: "Presentation",
    items: [
      { title: "Hero Slide", href: "/presentation#hero-slide" },
      { title: "Statement", href: "/presentation#statement" },
      { title: "Section Divider", href: "/presentation#section-divider" },
      { title: "Signature Components", href: "/presentation#signature-components" },
      { title: "Split Image / Text", href: "/presentation#split-image" },
    ],
  },
  {
    label: "Data & Templates",
    items: [
      { title: "Map Frame", href: "/data-templates#map-frame" },
      { title: "Data Slide", href: "/data-templates#data-slide" },
      { title: "Timeline", href: "/data-templates#timeline" },
      { title: "Peer Comparison", href: "/data-templates#peer-comparison" },
      { title: "Drill Results", href: "/data-templates#drill-results" },
      { title: "Cross-Section", href: "/data-templates#cross-section" },
      { title: "Core Photo", href: "/data-templates#core-photo" },
      { title: "Staking Map", href: "/data-templates#staking-map" },
      { title: "Callout Library", href: "/data-templates#callout-library" },
      { title: "Infographics", href: "/data-templates#infographics" },
    ],
  },
  {
    label: "Collateral",
    items: [
      { title: "Investor One-Pager", href: "/collateral#investor-one-pager" },
      { title: "Quarterly Update", href: "/collateral#quarterly-update" },
      { title: "Social Media", href: "/collateral#social-media" },
      { title: "Email & Letterhead", href: "/collateral#email-letterhead" },
      { title: "Conference Banners", href: "/collateral#conference-banners" },
      { title: "Web Components", href: "/collateral#web-components" },
    ],
  },
  {
    label: "Icons",
    items: [
      { title: "Icon System v1 (30)", href: "/icons#icon-system-v1" },
      { title: "Icon System v2 (30)", href: "/icons#icon-system-v2" },
      { title: "Extended Library (60)", href: "/icons#extended-library" },
    ],
  },
  {
    label: "Map Callouts",
    items: [
      { title: "Minimal Line", href: "/map-callouts#minimal-line" },
      { title: "Card & Badge", href: "/map-callouts#card-badge" },
      { title: "Color Data", href: "/map-callouts#color-data" },
      { title: "Decision Intelligence", href: "/map-callouts#decision-intelligence" },
      { title: "Narrative Storytelling", href: "/map-callouts#narrative-storytelling" },
      { title: "Comparative Analysis", href: "/map-callouts#comparative-analysis" },
    ],
  },
];

function Dropdown({ section, isOpen, onOpen, onClose }: {
  section: NavSection;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    onOpen();
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(onClose, 150);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className="flex items-center gap-1.5 px-3 py-2 text-sm text-white/90 font-medium tracking-wide hover:text-[#D4AF37] transition-colors"
        onClick={handleEnter}
      >
        {section.label}
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-[#161616] border border-white/10 rounded-lg shadow-2xl p-4 min-w-[280px]">
            <div className="flex flex-col gap-0.5">
              {section.items.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={onClose}
                  className="block rounded-md px-3 py-2 text-sm text-white/90 hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteNav() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-nav-dropdown]")) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0E0E0E]">
      <div className="mx-auto max-w-[1400px] flex items-center h-16 px-6">
        <Link
          href="/"
          className="text-[#D4AF37] text-lg tracking-[0.2em] font-bold mr-8 shrink-0"
          style={{ fontFamily: "var(--font-display)" }}
        >
          SITKA STYLE
        </Link>

        <nav className="flex-1 flex items-center gap-0.5" data-nav-dropdown>
          {sections.map((section, i) => (
            <Dropdown
              key={section.label}
              section={section}
              isOpen={openIndex === i}
              onOpen={() => setOpenIndex(i)}
              onClose={() => setOpenIndex(null)}
            />
          ))}

          <a
            href="https://sitka.gold"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto px-3 py-2 text-sm text-[#D4AF37] font-semibold tracking-wide hover:text-[#D4AF37]/80 transition-colors"
          >
            TSX-V: SIG ↗
          </a>
        </nav>
      </div>
    </header>
  );
}
