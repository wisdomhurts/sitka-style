"use client";

import { NavigationMenu } from "@base-ui/react/navigation-menu";

interface NavDropdownItem {
  title: string;
  description: string;
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
      {
        title: "Design Tokens",
        description: "Core colors, typography scales, and spacing values",
        href: "/foundation",
      },
      {
        title: "Extended Color Palette",
        description: "Geological and environmental hues for data visualization",
        href: "/foundation",
      },
    ],
  },
  {
    label: "Presentation",
    items: [
      {
        title: "Hero Slide",
        description: "Full-bleed opening slide with brand photography",
        href: "/presentation",
      },
      {
        title: "Statement",
        description: "Large-format text slides for key messages",
        href: "/presentation",
      },
      {
        title: "Section Divider",
        description: "Transition slides between presentation sections",
        href: "/presentation",
      },
      {
        title: "Signature Components",
        description: "Reusable branded elements for slide decks",
        href: "/presentation",
      },
      {
        title: "Split Image",
        description: "Dual-panel layout pairing text with photography",
        href: "/presentation",
      },
    ],
  },
  {
    label: "Data & Templates",
    items: [
      {
        title: "Map Frame",
        description: "Standardized map containers with legend placement",
        href: "/data-templates",
      },
      {
        title: "Data Slide",
        description: "Charts, tables, and quantitative layouts",
        href: "/data-templates",
      },
      {
        title: "Timeline",
        description: "Chronological project milestone displays",
        href: "/data-templates",
      },
      {
        title: "Peer Comparison",
        description: "Side-by-side competitor analysis grids",
        href: "/data-templates",
      },
      {
        title: "Drill Results",
        description: "Assay data presentation with highlight formatting",
        href: "/data-templates",
      },
      {
        title: "Cross-Section",
        description: "Geological cross-section diagram templates",
        href: "/data-templates",
      },
      {
        title: "Core Photo",
        description: "Drill core photography display standards",
        href: "/data-templates",
      },
      {
        title: "Staking Map",
        description: "Claim boundary and property maps",
        href: "/data-templates",
      },
      {
        title: "Callouts",
        description: "Annotation and label systems for technical figures",
        href: "/data-templates",
      },
      {
        title: "Infographics",
        description: "Visual data storytelling templates",
        href: "/data-templates",
      },
    ],
  },
  {
    label: "Collateral",
    items: [
      {
        title: "Investor One-Pager",
        description: "Single-page company overview for meetings",
        href: "/collateral",
      },
      {
        title: "Quarterly Update",
        description: "Periodic shareholder communication template",
        href: "/collateral",
      },
      {
        title: "Social Media",
        description: "Platform-specific post and story templates",
        href: "/collateral",
      },
      {
        title: "Email & Letterhead",
        description: "Corporate correspondence standards",
        href: "/collateral",
      },
      {
        title: "Conference Banners",
        description: "Trade show and event display materials",
        href: "/collateral",
      },
      {
        title: "Web Components",
        description: "Website UI patterns and interactive elements",
        href: "/collateral",
      },
    ],
  },
  {
    label: "Icon Libraries",
    items: [
      {
        title: "Icon System v1",
        description: "Core 24px icon set for UI and navigation",
        href: "/icons",
      },
      {
        title: "Icon System v2",
        description: "Expanded set with geological and mining symbols",
        href: "/icons",
      },
      {
        title: "Extended Library (60)",
        description: "Full 60-icon collection across all categories",
        href: "/icons",
      },
    ],
  },
  {
    label: "Map Callouts",
    items: [
      {
        title: "Minimal Line",
        description: "Clean leader lines with understated labels",
        href: "/map-callouts",
      },
      {
        title: "Card & Badge",
        description: "Floating data cards anchored to map features",
        href: "/map-callouts",
      },
      {
        title: "Color Data",
        description: "Color-coded indicators tied to assay values",
        href: "/map-callouts",
      },
      {
        title: "Decision Intelligence",
        description: "Priority-ranked callouts guiding exploration decisions",
        href: "/map-callouts",
      },
      {
        title: "Narrative Storytelling",
        description: "Sequential callouts that walk viewers through data",
        href: "/map-callouts",
      },
      {
        title: "Comparative Analysis",
        description: "Multi-variable comparison overlays on map views",
        href: "/map-callouts",
      },
    ],
  },
];

function ChevronDown() {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M1 1L5 5L9 1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-sitka-black">
      <div className="mx-auto max-w-[1400px] flex items-center h-16 px-6">
        <a
          href="/"
          className="font-display text-sitka-gold text-lg tracking-[0.2em] font-bold mr-8 shrink-0"
        >
          SITKA STYLE
        </a>

        <NavigationMenu.Root className="flex-1">
          <NavigationMenu.List className="flex items-center gap-1">
            {sections.map((section) => (
              <NavigationMenu.Item key={section.label}>
                <NavigationMenu.Trigger className="flex items-center gap-1.5 px-3 py-2 text-sm text-white/90 font-medium tracking-wide hover:text-sitka-gold transition-colors cursor-default">
                  {section.label}
                  <NavigationMenu.Icon className="transition-transform duration-200 data-[open]:rotate-180">
                    <ChevronDown />
                  </NavigationMenu.Icon>
                </NavigationMenu.Trigger>

                <NavigationMenu.Portal>
                  <NavigationMenu.Positioner className="z-50" sideOffset={0}>
                    <NavigationMenu.Popup className="bg-[#161616] border border-white/10 rounded-lg shadow-2xl p-5 w-[500px] origin-[var(--transform-origin)] transition-all duration-200 data-[open]:animate-in data-[open]:fade-in data-[open]:zoom-in-95 data-[closed]:animate-out data-[closed]:fade-out data-[closed]:zoom-out-95">
                      <div className="grid grid-cols-2 gap-3">
                        {section.items.map((item) => (
                          <NavigationMenu.Link
                            key={item.title}
                            href={item.href}
                            closeOnClick
                            className="block rounded-md p-3 hover:bg-white/5 transition-colors group"
                          >
                            <div className="text-sm font-semibold text-white group-hover:text-sitka-gold transition-colors">
                              {item.title}
                            </div>
                            <div className="text-xs text-ui-grey mt-1 leading-relaxed">
                              {item.description}
                            </div>
                          </NavigationMenu.Link>
                        ))}
                      </div>
                    </NavigationMenu.Popup>
                  </NavigationMenu.Positioner>
                </NavigationMenu.Portal>
              </NavigationMenu.Item>
            ))}

            <NavigationMenu.Item>
              <NavigationMenu.Link
                href="https://sitka.gold"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 text-sm text-sitka-gold font-semibold tracking-wide hover:text-sitka-gold/80 transition-colors"
              >
                TSX-V: SIG
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          </NavigationMenu.List>

          <NavigationMenu.Viewport />
        </NavigationMenu.Root>
      </div>
    </header>
  );
}
