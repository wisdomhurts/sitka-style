const iconSystems = [
  {
    title: "Icon System v1",
    subtitle: "Core UI Set",
    count: 20,
    description:
      "The foundational icon set for navigation, actions, and interface elements. Designed at 24px on a consistent grid with 1.5px stroke weight.",
    categories: [
      "Navigation (arrows, menu, close, back)",
      "Actions (download, share, edit, delete)",
      "Status (check, warning, info, error)",
      "Media (play, pause, expand, compress)",
    ],
    style: "Outlined, 24px grid, 1.5px stroke",
    color: "bg-data-teal",
  },
  {
    title: "Icon System v2",
    subtitle: "Geological & Mining",
    count: 24,
    description:
      "Specialized icons for geological and mining contexts. Includes mineral symbols, equipment, and exploration activity indicators.",
    categories: [
      "Geology (drill, core, cross-section, fault)",
      "Minerals (gold, copper, silver, zinc)",
      "Equipment (rig, dozer, helicopter, camp)",
      "Exploration (sample, assay, survey, stake)",
    ],
    style: "Outlined + filled variants, 24px grid",
    color: "bg-ore-amber",
  },
  {
    title: "Extended Library",
    subtitle: "Full 60-Icon Collection",
    count: 60,
    description:
      "The complete icon library spanning UI, geological, environmental, corporate, and data visualization categories. Unified visual language across all contexts.",
    categories: [
      "Environment (tree, mountain, river, snow, sun)",
      "Corporate (building, team, handshake, chart)",
      "Data (graph, table, filter, sort, export)",
      "Maps (pin, layer, compass, scale, legend)",
      "Communication (email, phone, globe, calendar)",
    ],
    style: "Outlined, 24px & 16px variants, full color support",
    color: "bg-sitka-gold",
  },
];

function IconGrid() {
  const sampleIcons = [
    { name: "Drill", path: "M16 4V20M12 8H20M10 12L22 12M14 16H18" },
    { name: "Core", path: "M12 4V28M8 4H16M8 28H16M8 12H16M8 20H16" },
    { name: "Map Pin", path: "M16 4C12 4 8 7.6 8 12C8 18 16 28 16 28S24 18 24 12C24 7.6 20 4 16 4ZM16 15C14.3 15 13 13.7 13 12S14.3 9 16 9S19 10.3 19 12S17.7 15 16 15Z" },
    { name: "Mountain", path: "M4 26L12 10L16 18L20 12L28 26H4Z" },
    { name: "Chart", path: "M4 24H28M8 20V16M14 20V10M20 20V14M26 20V8" },
    { name: "Sample", path: "M10 4H22V12L18 16V28H14V16L10 12V4ZM10 8H22" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 mt-12">
      {sampleIcons.map((icon) => (
        <div
          key={icon.name}
          className="bg-white rounded-lg border border-sitka-black/5 p-4 flex flex-col items-center gap-3"
        >
          <div className="w-10 h-10 flex items-center justify-center text-sitka-black">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d={icon.path}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="text-[10px] font-medium text-quartz-slate uppercase tracking-wider">
            {icon.name}
          </span>
        </div>
      ))}
    </div>
  );
}

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
            corporate contexts.
          </p>
        </div>
      </section>

      {/* Icon Systems */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-12">
          {iconSystems.map((system) => (
            <div
              key={system.title}
              className="bg-white rounded-lg border border-sitka-black/5 overflow-hidden shadow-sm"
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-3 mb-1">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${system.color}`}
                  />
                  <span className="text-xs font-semibold text-sitka-gold tracking-[0.2em] uppercase">
                    {system.subtitle}
                  </span>
                </div>
                <div className="flex items-baseline justify-between mt-3 mb-4">
                  <h3 className="font-display text-2xl text-sitka-black">
                    {system.title}
                  </h3>
                  <span className="text-sm text-ui-grey">
                    {system.count} icons
                  </span>
                </div>
                <p className="text-sm text-quartz-slate leading-relaxed max-w-2xl mb-6">
                  {system.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                  {system.categories.map((cat) => (
                    <div key={cat} className="flex items-start gap-2 text-sm">
                      <span className="text-sitka-gold mt-1.5 shrink-0">
                        &bull;
                      </span>
                      <span className="text-quartz-slate">{cat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-sitka-black/5">
                  <span className="text-[10px] font-medium tracking-wider uppercase text-ui-grey">
                    Style
                  </span>
                  <p className="text-sm text-sitka-black font-medium mt-0.5">
                    {system.style}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Icons */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Preview
          </p>
          <h2 className="font-display text-2xl text-sitka-black">
            Sample icons
          </h2>
          <IconGrid />
        </div>
      </section>
    </div>
  );
}
