const templates = [
  {
    title: "Map Frame",
    description:
      "Standardized map containers with consistent legend placement, scale bars, and north arrows. Supports both full-bleed and inset map layouts.",
    category: "Spatial",
  },
  {
    title: "Data Slide",
    description:
      "Charts, tables, and quantitative layouts using the Sitka color palette. Includes bar, line, and area chart styling with consistent axis treatments.",
    category: "Quantitative",
  },
  {
    title: "Timeline",
    description:
      "Chronological project milestone displays with gold accent markers. Horizontal and vertical variants for exploration history and development phases.",
    category: "Temporal",
  },
  {
    title: "Peer Comparison",
    description:
      "Side-by-side competitor analysis grids with standardized metrics columns. Highlights Sitka Gold positioning against TSX-V peers.",
    category: "Comparative",
  },
  {
    title: "Drill Results",
    description:
      "Assay data presentation with highlight formatting for significant intercepts. Includes table layouts with gold-grade color coding and weighted average calculations.",
    category: "Technical",
  },
  {
    title: "Cross-Section",
    description:
      "Geological cross-section diagram templates with consistent horizon styling, drill trace overlays, and grade annotation standards.",
    category: "Technical",
  },
  {
    title: "Core Photo",
    description:
      "Drill core photography display standards with depth markers, interval labels, and mineralization callouts. Single and multi-column grid layouts.",
    category: "Photography",
  },
  {
    title: "Staking Map",
    description:
      "Claim boundary and property maps with color-coded tenure status, neighboring claim holders, and topographic base layer standards.",
    category: "Spatial",
  },
  {
    title: "Callouts",
    description:
      "Annotation and label systems for technical figures. Leader lines, numbered markers, and floating data boxes with consistent typographic hierarchy.",
    category: "Annotation",
  },
  {
    title: "Infographics",
    description:
      "Visual data storytelling templates for fact sheets and social media. Icon-driven layouts with key statistics, process flows, and comparison graphics.",
    category: "Visual",
  },
];

const categoryColors: Record<string, string> = {
  Spatial: "bg-data-teal",
  Quantitative: "bg-stream-blue",
  Temporal: "bg-ore-amber",
  Comparative: "bg-anomaly-mauve",
  Technical: "bg-ridge-rust",
  Photography: "bg-forest-green",
  Annotation: "bg-quartz-slate",
  Visual: "bg-permafrost",
};

export default function DataTemplatesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 py-20 md:py-28 bg-sitka-black">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Data & Templates
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white">
            Technical Layouts
          </h1>
          <p className="text-ui-grey text-lg mt-6 max-w-2xl leading-relaxed">
            Ten template families covering maps, drill data, timelines, and
            infographics — the visual tools that communicate exploration results
            to investors and technical audiences.
          </p>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templates.map((template, i) => (
              <div
                key={template.title}
                className="bg-white rounded-lg border border-sitka-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`inline-block w-2 h-2 rounded-full ${
                        categoryColors[template.category] || "bg-ui-grey"
                      }`}
                    />
                  </div>
                  <h3 className="font-display text-lg text-sitka-black mb-2 group-hover:text-sitka-gold transition-colors">
                    {template.title}
                  </h3>
                  <p className="text-sm text-quartz-slate leading-relaxed mb-4">
                    {template.description}
                  </p>
                  <span className="inline-block text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full border border-sitka-black/10 text-quartz-slate">
                    {template.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
