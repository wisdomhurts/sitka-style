import Link from "next/link";

const sectionCards = [
  {
    label: "01",
    title: "Foundation",
    description:
      "Design tokens, color palette, and typography specimens that form the visual bedrock of the Sitka Gold identity.",
    href: "/foundation",
  },
  {
    label: "02",
    title: "Presentation",
    description:
      "Hero slides, statement layouts, section dividers, and split-image templates for investor decks.",
    href: "/presentation",
  },
  {
    label: "03",
    title: "Data & Templates",
    description:
      "Map frames, drill results, timelines, cross-sections, and infographic templates for technical materials.",
    href: "/data-templates",
  },
  {
    label: "04",
    title: "Collateral",
    description:
      "Investor one-pagers, quarterly updates, social media, email, conference banners, and web components.",
    href: "/collateral",
  },
  {
    label: "05",
    title: "Icon Libraries",
    description:
      "Three tiers of iconography — core UI, geological symbols, and a full 60-icon extended library.",
    href: "/icons",
  },
  {
    label: "06",
    title: "Map Callouts",
    description:
      "Six callout systems from minimal line annotations to comparative analysis overlays.",
    href: "/map-callouts",
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
                className="group block bg-white border border-sitka-black/5 rounded-lg p-8 hover:shadow-lg hover:border-sitka-gold/30 transition-all duration-300"
              >
                <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">
                  {card.label}
                </span>
                <h3 className="font-display text-xl text-sitka-black mt-3 mb-3 group-hover:text-sitka-gold transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-quartz-slate leading-relaxed">
                  {card.description}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sitka-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
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
