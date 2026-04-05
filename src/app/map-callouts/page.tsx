const calloutSystems = [
  {
    title: "Minimal Line",
    description:
      "Clean leader lines with understated labels. The most restrained callout style, ideal for dense maps where visual clutter must be minimized. Thin 1px lines connect point features to compact text labels.",
    useCases: [
      "High-density claim maps",
      "Regional overview maps",
      "Printed materials at small scale",
    ],
    visual: {
      lineStyle: "1px solid, #A8A8A8",
      labelStyle: "Inter 10px, uppercase tracking",
      background: "None (transparent)",
    },
    color: "border-ui-grey",
  },
  {
    title: "Card & Badge",
    description:
      "Floating data cards anchored to map features with a connecting stem. Each card displays a structured data summary — title, key metric, and status badge. Ideal for investor-facing maps with 5-15 callout points.",
    useCases: [
      "Property overview maps",
      "Investor presentations",
      "Website interactive maps",
    ],
    visual: {
      lineStyle: "2px solid, gold stem",
      labelStyle: "Card with title + metric + badge",
      background: "White card, subtle shadow",
    },
    color: "border-sitka-gold",
  },
  {
    title: "Color Data",
    description:
      "Color-coded indicators tied to assay values or geological classifications. Uses the extended palette to communicate quantitative ranges at a glance. Circles, bars, or gradient fills scale to data magnitude.",
    useCases: [
      "Geochemical survey results",
      "Soil sample grids",
      "Drill collar maps with grade data",
    ],
    visual: {
      lineStyle: "Color-coded connector",
      labelStyle: "Value + unit, color-matched",
      background: "Translucent color fill",
    },
    color: "border-data-teal",
  },
  {
    title: "Decision Intelligence",
    description:
      "Priority-ranked callouts guiding exploration decisions. Uses size, color intensity, and visual weight to indicate priority level. Designed for internal technical teams evaluating next-step targets.",
    useCases: [
      "Target prioritization maps",
      "Internal planning documents",
      "Technical committee presentations",
    ],
    visual: {
      lineStyle: "Weighted by priority",
      labelStyle: "Priority badge + rationale summary",
      background: "Priority-tinted panel",
    },
    color: "border-ridge-rust",
  },
  {
    title: "Narrative Storytelling",
    description:
      "Sequential callouts that walk viewers through data in a guided order. Numbered steps create a reading path across the map. Ideal for presentations where the speaker controls the narrative flow.",
    useCases: [
      "Conference presentations",
      "Analyst walk-throughs",
      "Annual report feature maps",
    ],
    visual: {
      lineStyle: "Numbered sequence markers",
      labelStyle: "Step number + narrative text",
      background: "Dark panel with gold number",
    },
    color: "border-anomaly-mauve",
  },
  {
    title: "Comparative Analysis",
    description:
      "Multi-variable comparison overlays on map views. Side-by-side or layered data from different time periods, methods, or properties. Uses split-screen or toggle patterns to show contrasts.",
    useCases: [
      "Before/after exploration results",
      "Multi-method comparison (geochem vs. geophysics)",
      "Property-to-property benchmarking",
    ],
    visual: {
      lineStyle: "Dual-color split indicators",
      labelStyle: "Comparison table callout",
      background: "Split panel, two-tone",
    },
    color: "border-stream-blue",
  },
];

export default function MapCalloutsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 py-20 md:py-28 bg-sitka-black">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Map Callouts
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white">
            Callout Systems
          </h1>
          <p className="text-ui-grey text-lg mt-6 max-w-2xl leading-relaxed">
            Six distinct callout vocabularies — from minimal annotations to
            data-rich comparative overlays — designed to communicate geological
            information at every level of detail.
          </p>
        </div>
      </section>

      {/* Callout Systems */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-8">
          {calloutSystems.map((system, i) => (
            <div
              key={system.title}
              className={`bg-white rounded-lg border-l-4 ${system.color} border border-sitka-black/5 overflow-hidden shadow-sm`}
            >
              <div className="p-8 md:p-10">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-sitka-black">
                    {system.title}
                  </h3>
                </div>
                <p className="text-sm text-quartz-slate leading-relaxed max-w-3xl mb-8">
                  {system.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Use Cases */}
                  <div>
                    <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-sitka-black mb-3">
                      Use Cases
                    </h4>
                    <ul className="space-y-2">
                      {system.useCases.map((uc) => (
                        <li
                          key={uc}
                          className="flex items-start gap-2 text-sm text-quartz-slate"
                        >
                          <span className="text-sitka-gold mt-1 shrink-0">
                            &bull;
                          </span>
                          {uc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Spec */}
                  <div>
                    <h4 className="text-xs font-semibold tracking-[0.2em] uppercase text-sitka-black mb-3">
                      Visual Specification
                    </h4>
                    <div className="space-y-3">
                      {Object.entries(system.visual).map(([key, value]) => (
                        <div key={key}>
                          <span className="text-[10px] font-medium tracking-wider uppercase text-ui-grey">
                            {key === "lineStyle"
                              ? "Line Style"
                              : key === "labelStyle"
                                ? "Label Style"
                                : "Background"}
                          </span>
                          <p className="text-sm text-sitka-black mt-0.5">
                            {value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
