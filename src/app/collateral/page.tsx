const collateralItems = [
  {
    title: "Investor One-Pager",
    description:
      "Single-page company overview for investor meetings and conferences. Front-and-back layout with key project highlights, share structure, and management team.",
    format: "Letter / A4",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="4" width="20" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="14" x2="22" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <line x1="10" y1="18" x2="18" y2="18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Quarterly Update",
    description:
      "Periodic shareholder communication template with standardized sections for exploration progress, financial summary, and upcoming catalysts.",
    format: "Multi-page PDF",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <rect x="10" y="4" width="18" height="22" rx="2" stroke="currentColor" strokeWidth="1.5" fill="var(--color-warm-white)" />
        <line x1="14" y1="10" x2="24" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="14" x2="24" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <line x1="14" y1="18" x2="20" y2="18" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Social Media",
    description:
      "Platform-specific post and story templates for Twitter/X, LinkedIn, and Instagram. Includes quote cards, news announcements, and drill result highlights.",
    format: "1080x1080 / 1080x1920",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="22.5" cy="9.5" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Email & Letterhead",
    description:
      "Corporate correspondence standards including email signature blocks, letterhead layout, and envelope formatting with consistent brand application.",
    format: "Letter / Digital",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M4 10L16 18L28 10" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Conference Banners",
    description:
      "Trade show and event display materials including pull-up banners, booth backdrops, and table throws. Scaled for readability at distance.",
    format: "Various Large Format",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="4" width="16" height="24" rx="1" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="1.5" />
        <line x1="12" y1="14" x2="20" y2="14" stroke="currentColor" strokeWidth="1.5" />
        <line x1="16" y1="28" x2="16" y2="30" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="30" x2="20" y2="30" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Web Components",
    description:
      "Website UI patterns and interactive elements — hero sections, news cards, project maps, and data tables styled to the Sitka Gold brand system.",
    format: "Responsive Web",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="24" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <line x1="4" y1="11" x2="28" y2="11" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="7" cy="8.5" r="1" fill="currentColor" />
        <circle cx="10" cy="8.5" r="1" fill="currentColor" />
        <circle cx="13" cy="8.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
];

export default function CollateralPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 py-20 md:py-28 bg-sitka-black">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Collateral
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white">
            Brand Materials
          </h1>
          <p className="text-ui-grey text-lg mt-6 max-w-2xl leading-relaxed">
            Print, digital, and environmental collateral that extends the Sitka
            Gold identity across every investor touchpoint — from one-pagers to
            conference booths.
          </p>
        </div>
      </section>

      {/* Collateral Grid */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {collateralItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-lg border border-sitka-black/5 p-8 shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="text-sitka-gold mb-5">{item.icon}</div>
                <h3 className="font-display text-lg text-sitka-black mb-2 group-hover:text-sitka-gold transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-quartz-slate leading-relaxed mb-5">
                  {item.description}
                </p>
                <div className="pt-4 border-t border-sitka-black/5">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-ui-grey">
                    Format
                  </span>
                  <p className="text-sm text-sitka-black font-medium mt-0.5">
                    {item.format}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
