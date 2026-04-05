const coreColors = [
  {
    name: "Sitka Black",
    hex: "#0E0E0E",
    token: "sitka-black",
    usage: "Primary backgrounds, body text, and header elements",
    className: "bg-sitka-black",
    textLight: true,
  },
  {
    name: "Sitka Gold",
    hex: "#D4AF37",
    token: "sitka-gold",
    usage: "Brand accent, overlines, dividers, and interactive highlights",
    className: "bg-sitka-gold",
    textLight: false,
  },
  {
    name: "Warm White",
    hex: "#F4F1EA",
    token: "warm-white",
    usage: "Page backgrounds, card surfaces, and light sections",
    className: "bg-warm-white",
    textLight: false,
  },
  {
    name: "Data Teal",
    hex: "#5F8F8B",
    token: "data-teal",
    usage: "Charts, data visualization, and secondary accents",
    className: "bg-data-teal",
    textLight: true,
  },
  {
    name: "UI Grey",
    hex: "#A8A8A8",
    token: "ui-grey",
    usage: "Captions, metadata, borders, and disabled states",
    className: "bg-ui-grey",
    textLight: false,
  },
];

const extendedColors = [
  {
    name: "Stream Blue",
    hex: "#4A90B8",
    token: "stream-blue",
    usage: "Water features and hydrological data",
    className: "bg-stream-blue",
    textLight: true,
  },
  {
    name: "Forest Green",
    hex: "#3D6B4F",
    token: "forest-green",
    usage: "Vegetation and environmental overlays",
    className: "bg-forest-green",
    textLight: true,
  },
  {
    name: "Ridge Rust",
    hex: "#B86B4A",
    token: "ridge-rust",
    usage: "Oxidation zones and geological formations",
    className: "bg-ridge-rust",
    textLight: true,
  },
  {
    name: "Quartz Slate",
    hex: "#6B7B8D",
    token: "quartz-slate",
    usage: "Secondary text, subtle backgrounds, and muted UI",
    className: "bg-quartz-slate",
    textLight: true,
  },
  {
    name: "Anomaly Mauve",
    hex: "#9B5E7B",
    token: "anomaly-mauve",
    usage: "Anomaly highlights and geophysical data",
    className: "bg-anomaly-mauve",
    textLight: true,
  },
  {
    name: "Ore Amber",
    hex: "#C4943A",
    token: "ore-amber",
    usage: "Gold grades, mineralization indicators, and warm accents",
    className: "bg-ore-amber",
    textLight: false,
  },
  {
    name: "Permafrost",
    hex: "#8BAEC4",
    token: "permafrost",
    usage: "Cool backgrounds, ice-related data, and seasonal overlays",
    className: "bg-permafrost",
    textLight: false,
  },
];

const typographySpecimens = [
  {
    label: "Display XL",
    fontClass: "font-display",
    sizeClass: "text-6xl md:text-7xl",
    weightClass: "font-bold",
    sample: "Playfair Display",
    detail: "Playfair Display Bold / 72px / Headlines",
  },
  {
    label: "Display LG",
    fontClass: "font-display",
    sizeClass: "text-4xl md:text-5xl",
    weightClass: "font-bold",
    sample: "Section Headlines",
    detail: "Playfair Display Bold / 48px / Section titles",
  },
  {
    label: "Display MD",
    fontClass: "font-display",
    sizeClass: "text-2xl md:text-3xl",
    weightClass: "font-semibold",
    sample: "Card & Component Titles",
    detail: "Playfair Display Semibold / 30px / Subheadings",
  },
  {
    label: "Display SM",
    fontClass: "font-display",
    sizeClass: "text-xl",
    weightClass: "font-medium",
    sample: "Smaller Display Contexts",
    detail: "Playfair Display Medium / 20px / Labels",
  },
  {
    label: "Body LG",
    fontClass: "font-body",
    sizeClass: "text-lg",
    weightClass: "font-normal",
    sample:
      "Inter is the workhorse typeface for all body copy, data labels, and interface elements across the Sitka Gold brand system.",
    detail: "Inter Regular / 18px / Lead paragraphs",
  },
  {
    label: "Body Base",
    fontClass: "font-body",
    sizeClass: "text-base",
    weightClass: "font-normal",
    sample:
      "Standard body text for descriptions, captions, and general reading. Optimized for comfortable reading at paragraph length.",
    detail: "Inter Regular / 16px / Standard body text",
  },
  {
    label: "Body SM",
    fontClass: "font-body",
    sizeClass: "text-sm",
    weightClass: "font-medium",
    sample: "Metadata, table headers, and navigation items",
    detail: "Inter Medium / 14px / UI elements",
  },
  {
    label: "Caption",
    fontClass: "font-body",
    sizeClass: "text-xs",
    weightClass: "font-normal",
    sample: "OVERLINE LABELS · TRACKING [0.2EM] · FOOTNOTES",
    detail: "Inter Regular / 12px / Overlines and captions",
  },
];

export default function FoundationPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 py-20 md:py-28 bg-sitka-black">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Foundation
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white">
            Design Tokens
          </h1>
          <p className="text-ui-grey text-lg mt-6 max-w-2xl leading-relaxed">
            The foundational building blocks of the Sitka Gold visual identity
            — colors, typography, and spacing values that ensure consistency
            across all brand touchpoints.
          </p>
        </div>
      </section>

      {/* Core Palette */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Core Palette
          </p>
          <h2 className="font-display text-3xl text-sitka-black mb-12">
            Five primary colors
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {coreColors.map((color) => (
              <div
                key={color.hex}
                className="rounded-lg overflow-hidden bg-white border border-sitka-black/5 shadow-sm"
              >
                <div
                  className={`${color.className} h-28 flex items-end p-4`}
                >
                  <span
                    className={`text-xs font-mono font-medium ${
                      color.textLight ? "text-white/80" : "text-sitka-black/60"
                    }`}
                  >
                    {color.hex}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-sitka-black">
                    {color.name}
                  </h3>
                  <p className="text-xs text-quartz-slate mt-1 font-mono">
                    --color-{color.token}
                  </p>
                  <p className="text-xs text-ui-grey mt-2 leading-relaxed">
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-sitka-gold/20" />
      </div>

      {/* Extended Palette */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Extended Palette
          </p>
          <h2 className="font-display text-3xl text-sitka-black mb-4">
            Seven environmental hues
          </h2>
          <p className="text-quartz-slate text-base mb-12 max-w-2xl leading-relaxed">
            Drawn from the Yukon landscape — streams, forests, ridgelines, and
            ore zones. Used primarily in data visualization, maps, and charts.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {extendedColors.map((color) => (
              <div
                key={color.hex}
                className="rounded-lg overflow-hidden bg-white border border-sitka-black/5 shadow-sm"
              >
                <div
                  className={`${color.className} h-20 flex items-end p-3`}
                >
                  <span
                    className={`text-[10px] font-mono font-medium ${
                      color.textLight ? "text-white/80" : "text-sitka-black/60"
                    }`}
                  >
                    {color.hex}
                  </span>
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-semibold text-sitka-black">
                    {color.name}
                  </h3>
                  <p className="text-[10px] text-ui-grey mt-1 leading-relaxed">
                    {color.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-sitka-gold/20" />
      </div>

      {/* Typography */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Typography
          </p>
          <h2 className="font-display text-3xl text-sitka-black mb-12">
            Type specimens
          </h2>
          <div className="space-y-10">
            {typographySpecimens.map((spec) => (
              <div
                key={spec.label}
                className="bg-white rounded-lg border border-sitka-black/5 p-8"
              >
                <div className="flex items-baseline justify-between mb-4">
                  <span className="text-xs font-semibold text-sitka-gold tracking-[0.2em] uppercase">
                    {spec.label}
                  </span>
                  <span className="text-xs text-ui-grey">{spec.detail}</span>
                </div>
                <p
                  className={`${spec.fontClass} ${spec.sizeClass} ${spec.weightClass} text-sitka-black leading-tight`}
                >
                  {spec.sample}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
