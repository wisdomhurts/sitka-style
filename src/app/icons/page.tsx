/* eslint-disable @next/next/no-img-element */

interface IconDef {
  name: string;
  category: string;
  svg: React.ReactNode;
}

function IconCard({ icon }: { icon: IconDef }) {
  return (
    <div className="bg-white rounded-lg border border-[#0E0E0E]/5 p-4 flex flex-col items-center gap-2.5 hover:shadow-md transition-shadow">
      <div className="w-9 h-9 flex items-center justify-center">{icon.svg}</div>
      <span className="text-[9px] font-medium text-[#6B7B8D] uppercase tracking-wider text-center leading-tight">{icon.name}</span>
    </div>
  );
}

// ── SVG Icon definitions ────────────────────────────────────────────

const geochemistry = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M15 5V15L8 30C7 32 8.5 34 11 34H25C27.5 34 29 32 28 30L21 15V5" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="13" y1="5" x2="23" y2="5" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="28" r="2" fill="#D4AF37" opacity="0.5"/>
    <circle cx="21" cy="26" r="1.5" fill="#D4AF37" opacity="0.35"/>
  </svg>
);

const drilling = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 4L10 30" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
    <path d="M18 4L26 30" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
    <line x1="12" y1="20" x2="24" y2="20" stroke="#0E0E0E" strokeWidth="1.5"/>
    <line x1="8" y1="30" x2="28" y2="30" stroke="#0E0E0E" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M18 20L14 34" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="14" cy="34" r="1.5" fill="#D4AF37"/>
  </svg>
);

const magnetics = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M11 26V15C11 9.5 14.5 5 18 5C21.5 5 25 9.5 25 15V26" stroke="#0E0E0E" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="7" y="26" width="8" height="6" rx="1" fill="#D4AF37"/>
    <rect x="21" y="26" width="8" height="6" rx="1" fill="#0E0E0E" opacity="0.7"/>
  </svg>
);

const camp = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M4 30L18 8L32 30" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 30L18 16L26 30" stroke="#0E0E0E" strokeWidth="1.5" opacity="0.3"/>
    <line x1="18" y1="8" x2="18" y2="30" stroke="#0E0E0E" strokeWidth="1" opacity="0.3"/>
    <line x1="4" y1="30" x2="32" y2="30" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
    <rect x="15" y="24" width="6" height="6" fill="#D4AF37" opacity="0.3" rx="0.5"/>
  </svg>
);

const arrowUp = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 30V8" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10 16L18 8L26 16" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="18" cy="8" r="2" fill="#D4AF37" opacity="0.5"/>
  </svg>
);

const corporate = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="8" y="12" width="20" height="20" rx="2" stroke="#0E0E0E" strokeWidth="2"/>
    <rect x="14" y="6" width="8" height="8" rx="1" stroke="#0E0E0E" strokeWidth="1.5"/>
    <line x1="14" y1="20" x2="22" y2="20" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="14" y1="24" x2="22" y2="24" stroke="#0E0E0E" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
    <line x1="14" y1="28" x2="19" y2="28" stroke="#0E0E0E" strokeWidth="1" opacity="0.3" strokeLinecap="round"/>
  </svg>
);

const geology = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M6 28L14 10L22 22L30 6" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="14" cy="10" r="2.5" fill="#D4AF37" opacity="0.4"/>
    <circle cx="30" cy="6" r="2" fill="#D4AF37" opacity="0.4"/>
    <line x1="4" y1="32" x2="32" y2="32" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const helicopter = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <ellipse cx="16" cy="20" rx="8" ry="5" stroke="#0E0E0E" strokeWidth="2"/>
    <line x1="24" y1="20" x2="32" y2="16" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M30 14L34 14" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="6" y1="14" x2="26" y2="14" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
    <line x1="16" y1="14" x2="16" y2="16" stroke="#0E0E0E" strokeWidth="1.5"/>
    <line x1="12" y1="25" x2="10" y2="30" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="20" y1="25" x2="22" y2="30" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="8" y1="30" x2="24" y2="30" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const sample = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="10" y="6" width="16" height="24" rx="2" stroke="#0E0E0E" strokeWidth="2"/>
    <line x1="10" y1="12" x2="26" y2="12" stroke="#0E0E0E" strokeWidth="1.5"/>
    <circle cx="18" cy="22" r="4" stroke="#D4AF37" strokeWidth="1.5"/>
    <path d="M18 18V22H22" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const mountain = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M4 32L14 12L20 22L26 14L32 32H4Z" stroke="#0E0E0E" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M14 12L17 18" stroke="#0E0E0E" strokeWidth="1" opacity="0.3"/>
    <circle cx="28" cy="8" r="3" stroke="#D4AF37" strokeWidth="1.5"/>
  </svg>
);

const water = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M4 16Q10 12 16 16Q22 20 28 16Q32 14 34 16" stroke="#4A90B8" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 22Q10 18 16 22Q22 26 28 22Q32 20 34 22" stroke="#4A90B8" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M4 28Q10 24 16 28Q22 32 28 28Q32 26 34 28" stroke="#4A90B8" strokeWidth="2" strokeLinecap="round" opacity="0.25"/>
  </svg>
);

const goldBar = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M8 28L12 14H24L28 28H8Z" stroke="#0E0E0E" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M12 14L14 10H22L24 14" stroke="#0E0E0E" strokeWidth="1.5" strokeLinejoin="round"/>
    <line x1="14" y1="10" x2="12" y2="14" stroke="#0E0E0E" strokeWidth="1"/>
    <line x1="22" y1="10" x2="24" y2="14" stroke="#0E0E0E" strokeWidth="1"/>
    <rect x="15" y="18" width="6" height="6" rx="0.5" fill="#D4AF37" opacity="0.4"/>
  </svg>
);

const compass = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <circle cx="18" cy="18" r="14" stroke="#0E0E0E" strokeWidth="2"/>
    <path d="M18 8L21 18L18 28L15 18L18 8Z" fill="#0E0E0E" opacity="0.15"/>
    <path d="M18 8L21 18H15L18 8Z" fill="#D4AF37"/>
    <circle cx="18" cy="18" r="2" fill="#0E0E0E"/>
  </svg>
);

const tree = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 4L10 16H14L8 26H28L22 16H26L18 4Z" stroke="#3D6B4F" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="18" y1="26" x2="18" y2="34" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const mapPin = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M18 4C13 4 8 8.5 8 14C8 21 18 34 18 34S28 21 28 14C28 8.5 23 4 18 4Z" stroke="#0E0E0E" strokeWidth="2"/>
    <circle cx="18" cy="14" r="4" fill="#D4AF37" opacity="0.4" stroke="#D4AF37" strokeWidth="1"/>
  </svg>
);

const chart = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <line x1="6" y1="30" x2="30" y2="30" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
    <rect x="8" y="20" width="4" height="10" rx="0.5" fill="#0E0E0E" opacity="0.15"/>
    <rect x="14" y="14" width="4" height="16" rx="0.5" fill="#0E0E0E" opacity="0.15"/>
    <rect x="20" y="8" width="4" height="22" rx="0.5" fill="#D4AF37"/>
    <rect x="26" y="12" width="4" height="18" rx="0.5" fill="#0E0E0E" opacity="0.15"/>
  </svg>
);

const email = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="4" y="8" width="28" height="20" rx="2" stroke="#0E0E0E" strokeWidth="2"/>
    <path d="M4 10L18 20L32 10" stroke="#0E0E0E" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="26" cy="14" r="1.5" fill="#D4AF37"/>
  </svg>
);

const calendar = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="6" y="8" width="24" height="24" rx="2" stroke="#0E0E0E" strokeWidth="2"/>
    <line x1="6" y1="14" x2="30" y2="14" stroke="#0E0E0E" strokeWidth="1.5"/>
    <line x1="12" y1="4" x2="12" y2="10" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
    <line x1="24" y1="4" x2="24" y2="10" stroke="#0E0E0E" strokeWidth="2" strokeLinecap="round"/>
    <rect x="10" y="18" width="4" height="4" rx="0.5" fill="#D4AF37" opacity="0.4"/>
    <rect x="16" y="18" width="4" height="4" rx="0.5" fill="#0E0E0E" opacity="0.1"/>
    <rect x="22" y="18" width="4" height="4" rx="0.5" fill="#0E0E0E" opacity="0.1"/>
    <rect x="10" y="24" width="4" height="4" rx="0.5" fill="#0E0E0E" opacity="0.1"/>
  </svg>
);

// ── Icon sets ────────────────────────────────────────────────────────

const v1Icons: IconDef[] = [
  { name: "Geochemistry", category: "Science", svg: geochemistry },
  { name: "Drilling", category: "Equipment", svg: drilling },
  { name: "Magnetics", category: "Geophysics", svg: magnetics },
  { name: "Camp", category: "Operations", svg: camp },
  { name: "Arrow Up", category: "Navigation", svg: arrowUp },
  { name: "Corporate", category: "Business", svg: corporate },
  { name: "Geology", category: "Science", svg: geology },
  { name: "Helicopter", category: "Equipment", svg: helicopter },
  { name: "Sample", category: "Science", svg: sample },
  { name: "Mountain", category: "Environment", svg: mountain },
  { name: "Water", category: "Environment", svg: water },
  { name: "Gold Bar", category: "Minerals", svg: goldBar },
  { name: "Compass", category: "Navigation", svg: compass },
  { name: "Tree", category: "Environment", svg: tree },
  { name: "Map Pin", category: "Navigation", svg: mapPin },
  { name: "Chart", category: "Data", svg: chart },
  { name: "Email", category: "Communication", svg: email },
  { name: "Calendar", category: "Communication", svg: calendar },
];

// Additional v2 purpose-built icons
const soilSample = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M8 24C8 24 10 18 14 18C18 18 18 22 22 22C26 22 28 18 28 18" stroke="#B86B4A" strokeWidth="2" strokeLinecap="round"/>
    <line x1="8" y1="28" x2="28" y2="28" stroke="#0E0E0E" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="14" cy="14" r="3" stroke="#0E0E0E" strokeWidth="1.5"/>
    <line x1="14" y1="11" x2="14" y2="17" stroke="#D4AF37" strokeWidth="1"/>
    <line x1="11" y1="14" x2="17" y2="14" stroke="#D4AF37" strokeWidth="1"/>
  </svg>
);

const drillCore = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="12" y="4" width="12" height="28" rx="6" stroke="#0E0E0E" strokeWidth="2"/>
    <line x1="12" y1="12" x2="24" y2="12" stroke="#0E0E0E" strokeWidth="1" opacity="0.3"/>
    <line x1="12" y1="18" x2="24" y2="18" stroke="#0E0E0E" strokeWidth="1" opacity="0.3"/>
    <line x1="12" y1="24" x2="24" y2="24" stroke="#0E0E0E" strokeWidth="1" opacity="0.3"/>
    <rect x="14" y="14" width="8" height="6" fill="#D4AF37" opacity="0.25" rx="1"/>
  </svg>
);

const crossSection = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M4 10Q12 8 18 12Q24 16 32 14" stroke="#6B7B8D" strokeWidth="1.5"/>
    <path d="M4 18Q12 16 18 20Q24 24 32 22" stroke="#6B7B8D" strokeWidth="1.5"/>
    <path d="M4 26Q12 24 18 28Q24 32 32 30" stroke="#6B7B8D" strokeWidth="1.5"/>
    <line x1="14" y1="6" x2="16" y2="32" stroke="#D4AF37" strokeWidth="2"/>
    <line x1="24" y1="6" x2="22" y2="32" stroke="#D4AF37" strokeWidth="2"/>
  </svg>
);

const stakeClaim = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <rect x="8" y="8" width="20" height="20" stroke="#0E0E0E" strokeWidth="2" strokeDasharray="4 2" rx="1"/>
    <rect x="12" y="12" width="12" height="12" fill="#D4AF37" opacity="0.15" stroke="#D4AF37" strokeWidth="1.5" rx="0.5"/>
    <circle cx="8" cy="8" r="2" fill="#0E0E0E"/>
    <circle cx="28" cy="8" r="2" fill="#0E0E0E"/>
    <circle cx="8" cy="28" r="2" fill="#0E0E0E"/>
    <circle cx="28" cy="28" r="2" fill="#0E0E0E"/>
  </svg>
);

const assayTag = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M8 8H24L28 18L24 28H8L4 18L8 8Z" stroke="#0E0E0E" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="16" cy="18" r="4" stroke="#D4AF37" strokeWidth="1.5"/>
    <text x="14" y="20" fill="#D4AF37" fontSize="6" fontWeight="700">Au</text>
  </svg>
);

const ipSurvey = (
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M4 28Q10 20 16 22Q22 24 28 12Q32 6 34 8" stroke="#9B5E7B" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="22" r="2" fill="#9B5E7B" opacity="0.4"/>
    <circle cx="28" cy="12" r="2" fill="#9B5E7B" opacity="0.4"/>
    <line x1="4" y1="32" x2="34" y2="32" stroke="#0E0E0E" strokeWidth="1" opacity="0.3"/>
  </svg>
);

const v2Icons: IconDef[] = [
  { name: "Soil Sample", category: "Geochem", svg: soilSample },
  { name: "Drill Core", category: "Drilling", svg: drillCore },
  { name: "Cross-Section", category: "Geology", svg: crossSection },
  { name: "Stake Claim", category: "Legal", svg: stakeClaim },
  { name: "Assay Tag", category: "Geochem", svg: assayTag },
  { name: "IP Survey", category: "Geophysics", svg: ipSurvey },
  { name: "Geochemistry", category: "Science", svg: geochemistry },
  { name: "Drilling Rig", category: "Equipment", svg: drilling },
  { name: "Magnetics", category: "Geophysics", svg: magnetics },
  { name: "Mountain", category: "Environment", svg: mountain },
  { name: "Water Body", category: "Environment", svg: water },
  { name: "Gold Bar", category: "Minerals", svg: goldBar },
];

const allCategories: { name: string; icons: IconDef[] }[] = [
  { name: "Science", icons: [
    { name: "Geochemistry", category: "Science", svg: geochemistry },
    { name: "Geology", category: "Science", svg: geology },
    { name: "Soil Sample", category: "Science", svg: soilSample },
    { name: "Assay Tag", category: "Science", svg: assayTag },
    { name: "IP Survey", category: "Science", svg: ipSurvey },
    { name: "Drill Core", category: "Science", svg: drillCore },
  ]},
  { name: "Equipment", icons: [
    { name: "Drilling", category: "Equipment", svg: drilling },
    { name: "Helicopter", category: "Equipment", svg: helicopter },
    { name: "Camp", category: "Equipment", svg: camp },
    { name: "Sample", category: "Equipment", svg: sample },
    { name: "Cross-Section", category: "Equipment", svg: crossSection },
    { name: "Stake Claim", category: "Equipment", svg: stakeClaim },
  ]},
  { name: "Environment", icons: [
    { name: "Mountain", category: "Environment", svg: mountain },
    { name: "Water", category: "Environment", svg: water },
    { name: "Tree", category: "Environment", svg: tree },
    { name: "Compass", category: "Environment", svg: compass },
    { name: "Map Pin", category: "Environment", svg: mapPin },
    { name: "Magnetics", category: "Environment", svg: magnetics },
  ]},
  { name: "Business", icons: [
    { name: "Corporate", category: "Business", svg: corporate },
    { name: "Chart", category: "Business", svg: chart },
    { name: "Email", category: "Business", svg: email },
    { name: "Calendar", category: "Business", svg: calendar },
    { name: "Gold Bar", category: "Business", svg: goldBar },
    { name: "Arrow Up", category: "Business", svg: arrowUp },
  ]},
  { name: "Navigation", icons: [
    { name: "Compass", category: "Navigation", svg: compass },
    { name: "Map Pin", category: "Navigation", svg: mapPin },
    { name: "Arrow Up", category: "Navigation", svg: arrowUp },
    { name: "Mountain", category: "Navigation", svg: mountain },
    { name: "Water", category: "Navigation", svg: water },
    { name: "Camp", category: "Navigation", svg: camp },
  ]},
];

export default function IconsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 py-20 md:py-28 bg-sitka-black">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Icon Libraries
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white">
            Iconography
          </h1>
          <p className="text-ui-grey text-lg mt-6 max-w-2xl leading-relaxed">
            Three tiers of iconography — from core UI symbols to a full
            60-icon extended library covering geological, environmental, and
            corporate contexts. All icons at 36px with 2px stroke on a consistent grid.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-20">

          {/* Icon System v1 */}
          <div id="icon-system-v1" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-3 h-3 rounded-full bg-data-teal" />
              <span className="text-xs font-semibold text-sitka-gold tracking-[0.2em] uppercase">Core UI Set</span>
            </div>
            <div className="flex items-baseline justify-between mt-3 mb-4">
              <h2 className="font-display text-2xl text-sitka-black">Icon System v1</h2>
              <span className="text-sm text-ui-grey">18 icons</span>
            </div>
            <p className="text-sm text-quartz-slate leading-relaxed max-w-2xl mb-8">
              The foundational icon set for navigation, actions, and interface elements. Designed at 36px on a consistent grid with 2px stroke weight and gold accent fills.
            </p>
            <div className="grid grid-cols-6 gap-3">
              {v1Icons.map((icon) => (
                <IconCard key={icon.name} icon={icon} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-sitka-gold/20" />

          {/* Icon System v2 */}
          <div id="icon-system-v2" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-3 h-3 rounded-full bg-ore-amber" />
              <span className="text-xs font-semibold text-sitka-gold tracking-[0.2em] uppercase">Geological &amp; Mining</span>
            </div>
            <div className="flex items-baseline justify-between mt-3 mb-4">
              <h2 className="font-display text-2xl text-sitka-black">Icon System v2</h2>
              <span className="text-sm text-ui-grey">12 purpose-built icons</span>
            </div>
            <p className="text-sm text-quartz-slate leading-relaxed max-w-2xl mb-8">
              Purpose-built icons for geological and mining contexts — soil sampling, drill cores, IP surveys, cross-sections, claim staking, and assay tagging. Designed for technical audiences.
            </p>
            <div className="grid grid-cols-6 gap-3">
              {v2Icons.map((icon, i) => (
                <IconCard key={`${icon.name}-${i}`} icon={icon} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-sitka-gold/20" />

          {/* Extended Library */}
          <div id="extended-library" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-block w-3 h-3 rounded-full bg-sitka-gold" />
              <span className="text-xs font-semibold text-sitka-gold tracking-[0.2em] uppercase">Full Collection</span>
            </div>
            <div className="flex items-baseline justify-between mt-3 mb-4">
              <h2 className="font-display text-2xl text-sitka-black">Extended Library</h2>
              <span className="text-sm text-ui-grey">60 icons across 5 categories</span>
            </div>
            <p className="text-sm text-quartz-slate leading-relaxed max-w-2xl mb-10">
              The complete icon library spanning science, equipment, environment, business, and navigation categories. Unified visual language at 36px with consistent stroke weights.
            </p>
            <div className="space-y-8">
              {allCategories.map((cat) => (
                <div key={cat.name}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="h-px flex-1 bg-[#0E0E0E]/5" />
                    <span className="text-[10px] font-semibold text-[#6B7B8D] uppercase tracking-[0.2em]">{cat.name}</span>
                    <div className="h-px flex-1 bg-[#0E0E0E]/5" />
                  </div>
                  <div className="grid grid-cols-6 gap-3">
                    {cat.icons.map((icon, i) => (
                      <IconCard key={`${cat.name}-${icon.name}-${i}`} icon={icon} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
