function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function tintHex(hex: string, factor: number): string {
  const [r, g, b] = hexToRgb(hex);
  const tr = Math.round(r + (255 - r) * factor);
  const tg = Math.round(g + (255 - g) * factor);
  const tb = Math.round(b + (255 - b) * factor);
  return `#${tr.toString(16).padStart(2, "0")}${tg.toString(16).padStart(2, "0")}${tb.toString(16).padStart(2, "0")}`;
}

function shadeHex(hex: string, factor: number): string {
  const [r, g, b] = hexToRgb(hex);
  const sr = Math.round(r * (1 - factor));
  const sg = Math.round(g * (1 - factor));
  const sb = Math.round(b * (1 - factor));
  return `#${sr.toString(16).padStart(2, "0")}${sg.toString(16).padStart(2, "0")}${sb.toString(16).padStart(2, "0")}`;
}

function luminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255;
}

const coreColors = [
  { name: "Sitka Black", hex: "#0E0E0E", token: "sitka-black", usage: "Primary backgrounds, body text, header elements" },
  { name: "Sitka Gold", hex: "#D4AF37", token: "sitka-gold", usage: "Brand accent, overlines, dividers, highlights" },
  { name: "Warm White", hex: "#F4F1EA", token: "warm-white", usage: "Page backgrounds, card surfaces, light sections" },
  { name: "Data Teal", hex: "#5F8F8B", token: "data-teal", usage: "Charts, data visualization, secondary accents" },
  { name: "UI Grey", hex: "#A8A8A8", token: "ui-grey", usage: "Captions, metadata, borders, disabled states" },
];

const extendedColors = [
  { name: "Stream Blue", hex: "#4A90B8", usage: "Rivers, lakes, water bodies on maps" },
  { name: "Forest Green", hex: "#3D6B4F", usage: "Vegetation, environmental, reclamation" },
  { name: "Ridge Rust", hex: "#B86B4A", usage: "Oxidation, soil anomalies, exposed bedrock" },
  { name: "Quartz Slate", hex: "#6B7B8D", usage: "Secondary data, borders, geology overlays" },
  { name: "Anomaly Mauve", hex: "#9B5E7B", usage: "Geophysical anomalies, IP chargeability" },
  { name: "Ore Amber", hex: "#C4943A", usage: "Mineralized zones, warm data" },
  { name: "Permafrost", hex: "#8BAEC4", usage: "Winter operations, ice, cool backgrounds" },
];

function ColorSwatch({ name, hex, usage, token }: { name: string; hex: string; usage: string; token?: string }) {
  const isLight = luminance(hex) > 0.5;
  const textColor = isLight ? "text-[#0E0E0E]" : "text-white";
  const subTextColor = isLight ? "text-[#0E0E0E]/60" : "text-white/60";
  const tints = [0.2, 0.4, 0.6, 0.8];
  const shade = shadeHex(hex, 0.3);

  return (
    <div className="flex flex-col">
      <div
        className="h-[120px] rounded-t-lg flex flex-col justify-between p-4"
        style={{ backgroundColor: hex }}
      >
        <span className={`text-sm font-semibold ${textColor}`}>{name}</span>
        <span className={`text-xs font-mono ${subTextColor}`}>{hex}</span>
      </div>
      <div className="h-5 flex">
        <div className="flex-1" style={{ backgroundColor: shade }} />
        {tints.map((t) => (
          <div key={t} className="flex-1" style={{ backgroundColor: tintHex(hex, t) }} />
        ))}
      </div>
      <div className="bg-white border border-t-0 border-[#0E0E0E]/5 rounded-b-lg p-4">
        <p className="text-xs text-[#6B7B8D] leading-relaxed">{usage}</p>
        {token && <p className="text-[10px] font-mono text-[#A8A8A8] mt-1.5">--color-{token}</p>}
      </div>
    </div>
  );
}

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
      <section id="design-tokens" className="scroll-mt-20 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Core Palette
          </p>
          <h2 className="font-display text-3xl text-sitka-black mb-4">
            Five primary colors
          </h2>
          <p className="text-quartz-slate text-base mb-12 max-w-2xl leading-relaxed">
            The five colors that define every Sitka Gold touchpoint. Each swatch shows a shade (30% darker) and four tint steps (20%, 40%, 60%, 80% lighter).
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {coreColors.map((c) => (
              <ColorSwatch key={c.hex} name={c.name} hex={c.hex} usage={c.usage} token={c.token} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-sitka-gold/20" />
      </div>

      {/* Extended Palette */}
      <section id="extended-palette" className="scroll-mt-20 px-6 py-20">
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
            {extendedColors.map((c) => (
              <ColorSwatch key={c.hex} name={c.name} hex={c.hex} usage={c.usage} />
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-6">
        <div className="h-px bg-sitka-gold/20" />
      </div>

      {/* Typography */}
      <section id="typography" className="scroll-mt-20 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-3">
            Typography
          </p>
          <h2 className="font-display text-3xl text-sitka-black mb-12">
            Type specimens
          </h2>

          {/* Playfair Display */}
          <div className="bg-white rounded-lg border border-sitka-black/5 p-8 md:p-12 mb-8">
            <div className="flex items-baseline justify-between mb-8">
              <span className="text-xs font-semibold text-sitka-gold tracking-[0.2em] uppercase">
                Playfair Display
              </span>
              <span className="text-xs text-ui-grey">Display / Headlines</span>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-[10px] text-ui-grey uppercase tracking-widest mb-2">64px</p>
                <p className="font-display text-[64px] leading-[1.1] text-sitka-black">
                  Defining the Next Major Gold District
                </p>
              </div>
              <div className="h-px bg-sitka-black/5" />
              <div>
                <p className="text-[10px] text-ui-grey uppercase tracking-widest mb-2">48px</p>
                <p className="font-display text-[48px] leading-[1.15] text-sitka-black">
                  Defining the Next Major Gold District
                </p>
              </div>
              <div className="h-px bg-sitka-black/5" />
              <div>
                <p className="text-[10px] text-ui-grey uppercase tracking-widest mb-2">36px</p>
                <p className="font-display text-[36px] leading-[1.2] text-sitka-black">
                  Defining the Next Major Gold District
                </p>
              </div>
              <div className="h-px bg-sitka-black/5" />
              <div>
                <p className="text-[10px] text-ui-grey uppercase tracking-widest mb-2">24px</p>
                <p className="font-display text-[24px] leading-[1.3] text-sitka-black">
                  Defining the Next Major Gold District
                </p>
              </div>
            </div>
          </div>

          {/* Inter */}
          <div className="bg-white rounded-lg border border-sitka-black/5 p-8 md:p-12">
            <div className="flex items-baseline justify-between mb-8">
              <span className="text-xs font-semibold text-sitka-gold tracking-[0.2em] uppercase">
                Inter
              </span>
              <span className="text-xs text-ui-grey">Body / UI / Data</span>
            </div>

            {/* Size specimens */}
            {[
              { size: 16, label: "16px" },
              { size: 14, label: "14px" },
              { size: 12, label: "12px" },
              { size: 10, label: "10px" },
            ].map((spec) => (
              <div key={spec.size} className="mb-8 last:mb-0">
                <p className="text-[10px] text-ui-grey uppercase tracking-widest mb-3">{spec.label}</p>
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { weight: 400, label: "Regular" },
                    { weight: 500, label: "Medium" },
                    { weight: 600, label: "Semibold" },
                    { weight: 700, label: "Bold" },
                  ].map((w) => (
                    <div key={w.weight}>
                      <p
                        className="font-body text-sitka-black leading-relaxed"
                        style={{ fontSize: spec.size, fontWeight: w.weight }}
                      >
                        The quick brown fox jumps over the lazy dog
                      </p>
                      <p className="text-[10px] text-ui-grey mt-1">{w.label} ({w.weight})</p>
                    </div>
                  ))}
                </div>
                {spec.size !== 10 && <div className="h-px bg-sitka-black/5 mt-6" />}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
