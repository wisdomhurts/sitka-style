import Link from "next/link";

const sectionCards = [
  {
    label: "01",
    title: "Foundation",
    description:
      "Design tokens, color palette, and typography specimens that form the visual bedrock of the Sitka Gold identity.",
    href: "/foundation",
    preview: (
      <div className="flex gap-1.5 items-end">
        {[
          { color: "#0E0E0E", h: "100%" },
          { color: "#D4AF37", h: "85%" },
          { color: "#F4F1EA", h: "70%" },
          { color: "#5F8F8B", h: "90%" },
          { color: "#A8A8A8", h: "60%" },
        ].map((s) => (
          <div
            key={s.color}
            className="flex-1 rounded-t-sm"
            style={{ backgroundColor: s.color, height: s.h }}
          />
        ))}
      </div>
    ),
  },
  {
    label: "02",
    title: "Presentation",
    description:
      "Hero slides, statement layouts, section dividers, and split-image templates for investor decks.",
    href: "/presentation",
    preview: (
      <div className="bg-[#0E0E0E] rounded-sm p-3 h-full flex flex-col justify-between">
        <div className="w-6 h-px bg-[#D4AF37]" />
        <div className="space-y-1">
          <div className="h-1.5 bg-white/80 rounded-full w-3/4" />
          <div className="h-1 bg-white/40 rounded-full w-1/2" />
        </div>
        <div className="flex gap-2">
          {["2.4 Moz", "450k", "119m"].map((v) => (
            <div key={v} className="text-center flex-1">
              <div className="text-[6px] text-[#D4AF37] font-bold">{v}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: "03",
    title: "Data & Templates",
    description:
      "Map frames, drill results, timelines, cross-sections, and infographic templates for technical materials.",
    href: "/data-templates",
    preview: (
      <div className="h-full flex items-end gap-1 px-1 pb-1">
        {[30, 52, 80, 66, 90, 74].map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm"
            style={{ height: `${h}%`, backgroundColor: i === 2 ? "#D4AF37" : "#0E0E0E", opacity: i === 2 ? 1 : 0.12 }}
          />
        ))}
      </div>
    ),
  },
  {
    label: "04",
    title: "Collateral",
    description:
      "Investor one-pagers, quarterly updates, social media, email, conference banners, and web components.",
    href: "/collateral",
    preview: (
      <div className="h-full grid grid-cols-3 gap-1.5 p-1">
        <div className="bg-[#0E0E0E] rounded-sm p-1.5 flex flex-col justify-between col-span-2">
          <div className="h-1 bg-[#D4AF37] rounded-full w-8" />
          <div className="space-y-0.5">
            <div className="h-0.5 bg-white/30 rounded-full w-full" />
            <div className="h-0.5 bg-white/20 rounded-full w-3/4" />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="bg-[#D4AF37]/15 rounded-sm flex-1 h-1/2 flex items-center justify-center">
            <div className="text-[5px] text-[#D4AF37] font-bold">SIG</div>
          </div>
          <div className="bg-[#F4F1EA] border border-[#0E0E0E]/5 rounded-sm flex-1 h-1/2" />
        </div>
      </div>
    ),
  },
  {
    label: "05",
    title: "Icon Libraries",
    description:
      "Three tiers of iconography — core UI, geological symbols, and a full 60-icon extended library.",
    href: "/icons",
    preview: (
      <div className="h-full grid grid-cols-3 gap-2 p-2">
        {/* Mini icon specimens */}
        <div className="bg-white rounded border border-[#0E0E0E]/5 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
            <path d="M15 5V15L8 30C7 32 8.5 34 11 34H25C27.5 34 29 32 28 30L21 15V5" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="16" cy="28" r="2" fill="#D4AF37" opacity="0.5"/>
          </svg>
        </div>
        <div className="bg-white rounded border border-[#0E0E0E]/5 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
            <path d="M18 4L10 30" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
            <path d="M18 4L26 30" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
            <line x1="8" y1="30" x2="28" y2="30" stroke="#0E0E0E" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>
        <div className="bg-white rounded border border-[#0E0E0E]/5 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
            <path d="M11 26V15C11 9.5 14.5 5 18 5C21.5 5 25 9.5 25 15V26" stroke="#0E0E0E" strokeWidth="2.5" strokeLinecap="round"/>
            <rect x="7" y="26" width="8" height="6" rx="1" fill="#D4AF37"/>
          </svg>
        </div>
        <div className="bg-white rounded border border-[#0E0E0E]/5 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
            <path d="M4 32L14 12L20 22L26 14L32 32H4Z" stroke="#0E0E0E" strokeWidth="2" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="bg-white rounded border border-[#0E0E0E]/5 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="14" stroke="#0E0E0E" strokeWidth="2"/>
            <path d="M18 8L21 18H15L18 8Z" fill="#D4AF37"/>
          </svg>
        </div>
        <div className="bg-white rounded border border-[#0E0E0E]/5 flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 36 36" fill="none">
            <path d="M18 4C13 4 8 8.5 8 14C8 21 18 34 18 34S28 21 28 14C28 8.5 23 4 18 4Z" stroke="#0E0E0E" strokeWidth="2"/>
            <circle cx="18" cy="14" r="4" fill="#D4AF37" opacity="0.4"/>
          </svg>
        </div>
      </div>
    ),
  },
  {
    label: "06",
    title: "Map Callouts",
    description:
      "Six callout systems from minimal line annotations to comparative analysis overlays.",
    href: "/map-callouts",
    preview: (
      <div className="h-full bg-[#EDEAE2] rounded-sm p-2 relative overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 80">
          <ellipse cx="50" cy="40" rx="35" ry="25" stroke="#5F8F8B" strokeWidth="0.3" fill="none" />
          <ellipse cx="50" cy="40" rx="45" ry="32" stroke="#5F8F8B" strokeWidth="0.3" fill="none" />
        </svg>
        <div className="relative z-10 flex flex-col gap-1.5 mt-2">
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <div className="h-px w-4 bg-[#A8A8A8]" />
            <div className="text-[5px] text-[#0E0E0E] font-medium">1.02 g/t</div>
          </div>
          <div className="flex items-center gap-1 ml-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#B86B4A]" />
            <div className="h-px w-6 bg-[#A8A8A8]" />
            <div className="bg-[#0E0E0E] text-white text-[4px] px-1 rounded">Oxide</div>
          </div>
          <div className="flex items-center gap-1 ml-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#5F8F8B]" />
            <div className="h-px w-5 bg-[#5F8F8B]" />
            <div className="text-[5px] text-[#5F8F8B] font-medium">Target</div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative px-6 py-32 md:py-44 bg-sitka-black text-center">
        <div className="mx-auto max-w-4xl">
          <p className="text-sitka-gold text-sm font-semibold tracking-[0.3em] uppercase mb-6">
            Sitka Gold Corp &middot; TSX-V: SIG
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
            Brand Style
            <br />
            System
          </h1>
          <p className="text-ui-grey text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            A comprehensive 29-artboard visual identity system covering
            foundation tokens, presentation slides, data templates, collateral,
            iconography, and map callout standards.
          </p>
          <div className="mt-12 w-24 h-px bg-sitka-gold mx-auto" />
        </div>
      </section>

      {/* Section Grid */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            System Overview
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-sitka-black mb-16">
            Six pillars of the Sitka Gold brand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectionCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group block bg-white border border-sitka-black/5 rounded-lg overflow-hidden hover:shadow-lg hover:border-sitka-gold/30 transition-all duration-300"
              >
                {/* Visual preview */}
                <div className="h-32 bg-[#F4F1EA] border-b border-sitka-black/5">
                  {card.preview}
                </div>
                <div className="p-6">
                  <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">
                    {card.label}
                  </span>
                  <h3 className="font-display text-xl text-sitka-black mt-2 mb-2 group-hover:text-sitka-gold transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-sm text-quartz-slate leading-relaxed">
                    {card.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sitka-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 8H13M13 8L9 4M13 8L9 12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="flex items-center justify-center px-6">
        <div className="h-px bg-sitka-gold/30 flex-1 max-w-[200px]" />
        <div className="w-2 h-2 rounded-full bg-sitka-gold mx-4" />
        <div className="h-px bg-sitka-gold/30 flex-1 max-w-[200px]" />
      </div>

      {/* Footer */}
      <footer className="px-6 py-16 text-center">
        <p className="font-display text-lg text-sitka-black">Sitka Gold Corp</p>
        <p className="text-sm text-ui-grey mt-2 tracking-wider">TSX-V: SIG</p>
      </footer>
    </div>
  );
}
