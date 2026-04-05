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

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-20">

          {/* 1 — Minimal Line */}
          <div id="minimal-line" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">01</span>
              <h2 className="font-display text-2xl text-sitka-black">Minimal Line</h2>
            </div>
            <p className="text-sm text-quartz-slate leading-relaxed max-w-2xl mb-6">
              Clean leader lines with understated labels. The most restrained callout style, ideal for dense maps where visual clutter must be minimized.
            </p>
            <div className="bg-[#EDEAE2] rounded-lg p-10 relative min-h-[400px]">
              {/* Topo background hint */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 800 400">
                <ellipse cx="300" cy="200" rx="180" ry="120" stroke="#5F8F8B" strokeWidth="0.5" fill="none" />
                <ellipse cx="300" cy="200" rx="240" ry="160" stroke="#5F8F8B" strokeWidth="0.5" fill="none" />
                <ellipse cx="550" cy="180" rx="100" ry="80" stroke="#5F8F8B" strokeWidth="0.5" fill="none" />
              </svg>

              {/* Specimen 1: Dot + horizontal leader */}
              <div className="absolute" style={{ left: "12%", top: "20%" }}>
                <div className="flex items-center gap-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37] border border-white shadow-sm" />
                  <div className="h-px w-16 bg-[#A8A8A8]" />
                  <div className="text-[10px] font-medium text-[#0E0E0E] uppercase tracking-wider ml-1.5">Zone A &middot; 1.02 g/t</div>
                </div>
              </div>

              {/* Specimen 2: Angled elbow */}
              <div className="absolute" style={{ left: "35%", top: "45%" }}>
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#B86B4A] border border-white shadow-sm" />
                  <svg className="absolute left-2.5 -top-3" width="50" height="20" viewBox="0 0 50 20"><polyline points="0,14 20,14 40,2" fill="none" stroke="#A8A8A8" strokeWidth="0.8" /></svg>
                  <div className="absolute left-[54px] -top-4 text-[10px] font-medium text-[#0E0E0E] uppercase tracking-wider whitespace-nowrap">Oxide &middot; 42m @ 0.8</div>
                </div>
              </div>

              {/* Specimen 3: Dark tag callout */}
              <div className="absolute" style={{ left: "55%", top: "25%" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#5F8F8B]" />
                  <div className="h-px w-10 bg-[#5F8F8B]" />
                  <div className="bg-[#0E0E0E] text-white text-[9px] px-2.5 py-1 rounded font-medium tracking-wide">Creek Target</div>
                </div>
              </div>

              {/* Specimen 4: Water label (italic) */}
              <div className="absolute" style={{ left: "20%", top: "72%" }}>
                <div className="text-[#4A90B8] text-[13px] italic tracking-wider font-display">
                  Blackjack Creek
                </div>
                <svg className="mt-0.5" width="120" height="6" viewBox="0 0 120 6"><path d="M0 3Q20 0 40 3Q60 6 80 3Q100 0 120 3" fill="none" stroke="#4A90B8" strokeWidth="0.8" /></svg>
              </div>

              {/* Specimen 5: Anomaly ring */}
              <div className="absolute" style={{ left: "68%", top: "55%" }}>
                <div className="relative">
                  <div className="w-14 h-14 rounded-full border-[1.5px] border-[#9B5E7B] border-dashed flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#9B5E7B]" />
                  </div>
                  <div className="absolute left-16 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                    <div className="h-px w-6 bg-[#9B5E7B]" />
                    <div className="text-[10px] text-[#9B5E7B] font-medium whitespace-nowrap">IP Anomaly</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2 — Card & Badge */}
          <div id="card-badge" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">02</span>
              <h2 className="font-display text-2xl text-sitka-black">Card &amp; Badge</h2>
            </div>
            <p className="text-sm text-quartz-slate leading-relaxed max-w-2xl mb-6">
              Floating data cards anchored to map features. Ideal for investor-facing maps with structured data summaries.
            </p>
            <div className="bg-[#EDEAE2] rounded-lg p-10 relative min-h-[400px]">
              <svg className="absolute inset-0 w-full h-full opacity-8" viewBox="0 0 800 400"><ellipse cx="400" cy="200" rx="250" ry="150" stroke="#5F8F8B" strokeWidth="0.5" fill="none" /></svg>

              {/* Hero intercept card */}
              <div className="absolute" style={{ left: "8%", top: "10%" }}>
                <div className="bg-white rounded-lg shadow-lg border border-[#0E0E0E]/5 p-4 w-[220px]">
                  <div className="text-[9px] text-[#D4AF37] font-semibold uppercase tracking-wider mb-1">RC Gold Zone</div>
                  <div className="font-display text-[#0E0E0E] text-[15px] font-bold">119.0m @ 1.02 g/t</div>
                  <div className="text-[9px] text-[#6B7B8D] mt-1">Hole RC-26-042 &middot; From 84.0m</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-[8px] font-bold px-2 py-0.5 rounded-full">SIGNIFICANT</span>
                    <span className="bg-[#5F8F8B]/10 text-[#5F8F8B] text-[8px] font-medium px-2 py-0.5 rounded-full">New Discovery</span>
                  </div>
                </div>
                <div className="w-px h-8 bg-[#D4AF37] mx-auto" />
                <div className="w-3 h-3 rounded-full bg-[#D4AF37] border-2 border-white shadow mx-auto" />
              </div>

              {/* Compact data badge */}
              <div className="absolute" style={{ left: "50%", top: "30%" }}>
                <div className="w-2.5 h-2.5 rounded-full bg-[#B86B4A] border-2 border-white shadow" />
                <div className="absolute left-4 -top-2">
                  <div className="bg-[#0E0E0E] text-white rounded px-3 py-1.5 flex items-center gap-2 shadow">
                    <span className="text-[9px] font-bold text-[#D4AF37]">42m</span>
                    <span className="text-[8px] text-[#A8A8A8]">@ 0.8 g/t Au</span>
                  </div>
                </div>
              </div>

              {/* Zone banner */}
              <div className="absolute" style={{ left: "25%", top: "68%" }}>
                <div className="bg-[#D4AF37] rounded-md px-4 py-2 shadow-lg flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white" />
                  <div>
                    <div className="text-[#0E0E0E] text-[10px] font-bold">Zone C Extension</div>
                    <div className="text-[#0E0E0E]/60 text-[8px]">3.2 km strike &middot; Open along strike</div>
                  </div>
                </div>
                <svg className="mx-auto" width="12" height="8" viewBox="0 0 12 8"><polygon points="0,0 12,0 6,8" fill="#D4AF37" /></svg>
              </div>

              {/* Status badge */}
              <div className="absolute" style={{ right: "10%", top: "50%" }}>
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5F8F8B] border-2 border-white shadow" />
                  <div className="h-px w-6 bg-[#5F8F8B]" />
                  <div className="bg-white rounded-full shadow px-3 py-1 flex items-center gap-1.5 border border-[#0E0E0E]/5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#5F8F8B]" />
                    <span className="text-[9px] font-medium text-[#0E0E0E]">Untested Target</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 — Color Data */}
          <div id="color-data" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">03</span>
              <h2 className="font-display text-2xl text-sitka-black">Color Data</h2>
            </div>
            <p className="text-sm text-quartz-slate leading-relaxed max-w-2xl mb-6">
              Color-coded indicators tied to assay values. Uses the extended palette to communicate quantitative ranges at a glance.
            </p>
            <div className="bg-[#EDEAE2] rounded-lg p-10 relative min-h-[400px]">
              {/* Geochem dots — scatter plot style */}
              <div className="absolute" style={{ left: "5%", top: "8%" }}>
                <div className="text-[9px] text-[#6B7B8D] font-semibold uppercase tracking-wider mb-3">Geochem Results (Au ppb)</div>
                <div className="relative w-[200px] h-[150px] bg-white/50 rounded border border-[#0E0E0E]/5 p-2">
                  {[
                    { x: 15, y: 20, size: 20, color: "#D4AF37", label: ">500" },
                    { x: 45, y: 40, size: 14, color: "#C4943A", label: "200" },
                    { x: 70, y: 30, size: 16, color: "#D4AF37", label: "350" },
                    { x: 30, y: 70, size: 10, color: "#B86B4A", label: "80" },
                    { x: 60, y: 60, size: 12, color: "#C4943A", label: "150" },
                    { x: 85, y: 75, size: 8, color: "#6B7B8D", label: "25" },
                    { x: 50, y: 85, size: 7, color: "#6B7B8D", label: "10" },
                  ].map((dot, i) => (
                    <div key={i} className="absolute rounded-full opacity-70 flex items-center justify-center"
                      style={{ left: `${dot.x}%`, top: `${dot.y}%`, width: dot.size, height: dot.size, backgroundColor: dot.color }}>
                    </div>
                  ))}
                </div>
              </div>

              {/* Heat map bar */}
              <div className="absolute" style={{ right: "5%", top: "8%" }}>
                <div className="text-[9px] text-[#6B7B8D] font-semibold uppercase tracking-wider mb-3">Heat Scale</div>
                <div className="w-6 h-[120px] rounded overflow-hidden flex flex-col">
                  <div className="flex-1 bg-[#D4AF37]" />
                  <div className="flex-1 bg-[#C4943A]" />
                  <div className="flex-1 bg-[#B86B4A]" />
                  <div className="flex-1 bg-[#6B7B8D]" />
                  <div className="flex-1 bg-[#A8A8A8]" />
                </div>
                <div className="flex flex-col justify-between h-[120px] absolute left-8 top-7 text-[7px] text-[#6B7B8D]">
                  <span>&gt;500 ppb</span>
                  <span>250</span>
                  <span>100</span>
                  <span>50</span>
                  <span>&lt;10</span>
                </div>
              </div>

              {/* Soil grid */}
              <div className="absolute" style={{ left: "5%", top: "55%" }}>
                <div className="text-[9px] text-[#6B7B8D] font-semibold uppercase tracking-wider mb-3">Soil Grid (25m spacing)</div>
                <div className="grid grid-cols-6 gap-1">
                  {[
                    "#A8A8A8","#6B7B8D","#B86B4A","#C4943A","#D4AF37","#D4AF37",
                    "#6B7B8D","#B86B4A","#C4943A","#D4AF37","#C4943A","#B86B4A",
                    "#A8A8A8","#6B7B8D","#B86B4A","#C4943A","#B86B4A","#6B7B8D",
                    "#A8A8A8","#A8A8A8","#6B7B8D","#6B7B8D","#A8A8A8","#A8A8A8",
                  ].map((color, i) => (
                    <div key={i} className="w-5 h-5 rounded-sm" style={{ backgroundColor: color, opacity: 0.7 }} />
                  ))}
                </div>
              </div>

              {/* IP contour */}
              <div className="absolute" style={{ right: "8%", top: "55%" }}>
                <div className="text-[9px] text-[#6B7B8D] font-semibold uppercase tracking-wider mb-3">IP Chargeability Contour</div>
                <svg width="200" height="130" viewBox="0 0 200 130">
                  <ellipse cx="100" cy="65" rx="90" ry="55" fill="#9B5E7B" opacity="0.08" stroke="#9B5E7B" strokeWidth="0.5" />
                  <ellipse cx="100" cy="65" rx="65" ry="40" fill="#9B5E7B" opacity="0.15" stroke="#9B5E7B" strokeWidth="0.5" />
                  <ellipse cx="100" cy="65" rx="40" ry="25" fill="#9B5E7B" opacity="0.25" stroke="#9B5E7B" strokeWidth="0.5" />
                  <ellipse cx="100" cy="65" rx="18" ry="12" fill="#9B5E7B" opacity="0.4" stroke="#9B5E7B" strokeWidth="1" />
                  <text x="85" y="68" fill="#9B5E7B" fontSize="8" fontWeight="600">High</text>
                </svg>
              </div>
            </div>
          </div>

          {/* 4 — Decision Intelligence */}
          <div id="decision-intelligence" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">04</span>
              <h2 className="font-display text-2xl text-sitka-black">Decision Intelligence</h2>
            </div>
            <p className="text-sm text-quartz-slate leading-relaxed max-w-2xl mb-6">
              Priority-ranked callouts guiding exploration decisions. Uses visual weight and color to indicate priority level.
            </p>
            <div className="bg-[#EDEAE2] rounded-lg p-10 relative min-h-[400px]">
              {/* Opportunity score */}
              <div className="absolute" style={{ left: "5%", top: "8%" }}>
                <div className="bg-white rounded-lg shadow-lg border-l-4 border-[#D4AF37] p-4 w-[220px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] text-[#6B7B8D] uppercase tracking-wider">Opportunity Score</span>
                    <span className="bg-[#D4AF37] text-[#0E0E0E] text-[10px] font-bold px-2 py-0.5 rounded">9.2</span>
                  </div>
                  <div className="font-display text-[#0E0E0E] text-[13px] font-bold">RC Gold Zone</div>
                  <div className="text-[9px] text-[#6B7B8D] mt-1">Multi-method anomaly convergence with significant drill intercepts and open extensions.</div>
                  <div className="mt-2 flex gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className="h-1.5 flex-1 rounded-full bg-[#D4AF37]" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Peer context */}
              <div className="absolute" style={{ right: "5%", top: "10%" }}>
                <div className="bg-white rounded-lg shadow-lg border-l-4 border-[#5F8F8B] p-4 w-[200px]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] text-[#6B7B8D] uppercase tracking-wider">Peer Context</span>
                    <span className="bg-[#5F8F8B] text-white text-[10px] font-bold px-2 py-0.5 rounded">7.1</span>
                  </div>
                  <div className="font-display text-[#0E0E0E] text-[13px] font-bold">Zone C Extension</div>
                  <div className="text-[9px] text-[#6B7B8D] mt-1">Comparable to early-stage Tudor Gold Treaty Creek before major discovery.</div>
                  <div className="mt-2 flex gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <div key={i} className={`h-1.5 flex-1 rounded-full ${i <= 3 ? "bg-[#5F8F8B]" : "bg-[#0E0E0E]/5"}`} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Growth vector */}
              <div className="absolute" style={{ left: "10%", top: "58%" }}>
                <div className="bg-[#0E0E0E] rounded-lg shadow-lg p-4 w-[240px]">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 12L7 6L10 9L14 4" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 4H14V8" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider">Growth Vector</span>
                  </div>
                  <div className="text-white text-[11px] leading-relaxed">
                    Resource growing at <span className="text-[#D4AF37] font-bold">+40% YoY</span> with 3 zones still open.
                    Next drill program could double current ounces.
                  </div>
                </div>
              </div>

              {/* Conviction statement */}
              <div className="absolute" style={{ right: "8%", top: "62%" }}>
                <div className="bg-[#D4AF37] rounded-lg shadow-lg p-4 w-[200px]">
                  <div className="text-[#0E0E0E] text-[9px] font-bold uppercase tracking-wider mb-1">Conviction</div>
                  <div className="text-[#0E0E0E] text-[12px] font-display font-bold">
                    Drill Priority: Immediate
                  </div>
                  <div className="text-[#0E0E0E]/70 text-[9px] mt-1">Highest-ranked target for Q2 program allocation.</div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 — Narrative Storytelling */}
          <div id="narrative-storytelling" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">05</span>
              <h2 className="font-display text-2xl text-sitka-black">Narrative Storytelling</h2>
            </div>
            <p className="text-sm text-quartz-slate leading-relaxed max-w-2xl mb-6">
              Sequential callouts that walk viewers through data in a guided order. Numbered steps create a reading path across the map.
            </p>
            <div className="bg-[#EDEAE2] rounded-lg p-10 relative min-h-[400px]">
              {/* Chapter marker 1 */}
              <div className="absolute" style={{ left: "8%", top: "12%" }}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0E0E0E] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-[#D4AF37] text-[12px] font-bold">1</span>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-3 max-w-[200px]">
                    <div className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider mb-1">The Discovery</div>
                    <div className="text-[9px] text-[#6B7B8D] leading-relaxed">
                      Initial soil sampling revealed a 1.2 km gold-in-soil anomaly exceeding 500 ppb Au.
                    </div>
                  </div>
                </div>
              </div>

              {/* Chapter marker 2 */}
              <div className="absolute" style={{ left: "38%", top: "30%" }}>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#0E0E0E] flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="text-[#D4AF37] text-[12px] font-bold">2</span>
                  </div>
                  <div className="bg-white rounded-lg shadow-md p-3 max-w-[200px]">
                    <div className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider mb-1">Confirmation</div>
                    <div className="text-[9px] text-[#6B7B8D] leading-relaxed">
                      First drill hole returned 119m @ 1.02 g/t Au, confirming a major gold system.
                    </div>
                  </div>
                </div>
              </div>

              {/* Before/After */}
              <div className="absolute" style={{ left: "5%", top: "60%" }}>
                <div className="flex gap-2">
                  <div className="bg-white/80 rounded p-2.5 w-[100px] text-center border border-[#0E0E0E]/5">
                    <div className="text-[7px] text-[#A8A8A8] uppercase tracking-wider mb-1">Before</div>
                    <div className="text-[11px] text-[#6B7B8D] font-display">0 Moz</div>
                    <div className="text-[7px] text-[#A8A8A8]">Pre-2024</div>
                  </div>
                  <div className="flex items-center">
                    <svg width="20" height="12" viewBox="0 0 20 12"><path d="M2 6H16M16 6L12 2M16 6L12 10" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <div className="bg-[#0E0E0E] rounded p-2.5 w-[100px] text-center">
                    <div className="text-[7px] text-[#D4AF37] uppercase tracking-wider mb-1">After</div>
                    <div className="text-[11px] text-[#D4AF37] font-display font-bold">2.4 Moz</div>
                    <div className="text-[7px] text-[#A8A8A8]">Current</div>
                  </div>
                </div>
              </div>

              {/* Quote bubble */}
              <div className="absolute" style={{ right: "8%", top: "55%" }}>
                <div className="bg-white rounded-lg shadow-md p-4 max-w-[220px] relative">
                  <div className="text-[#D4AF37] text-[18px] font-display leading-none mb-1">&ldquo;</div>
                  <div className="text-[10px] text-[#0E0E0E] italic leading-relaxed">
                    This is the most significant gold discovery in the district in over a decade.
                  </div>
                  <div className="text-[8px] text-[#6B7B8D] mt-2 not-italic">&mdash; VP Exploration</div>
                  <svg className="absolute -bottom-2 left-6" width="12" height="8" viewBox="0 0 12 8"><polygon points="0,0 12,0 6,8" fill="white" /></svg>
                </div>
              </div>

              {/* Discovery moment badge */}
              <div className="absolute" style={{ left: "45%", top: "72%" }}>
                <div className="bg-[#D4AF37] rounded-full px-5 py-2 shadow-lg flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 1L8.5 5L13 5.5L9.5 8.5L10.5 13L7 10.5L3.5 13L4.5 8.5L1 5.5L5.5 5L7 1Z" fill="#0E0E0E" />
                  </svg>
                  <span className="text-[#0E0E0E] text-[10px] font-bold uppercase tracking-wider">Discovery Moment</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6 — Comparative Analysis */}
          <div id="comparative-analysis" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">06</span>
              <h2 className="font-display text-2xl text-sitka-black">Comparative Analysis</h2>
            </div>
            <p className="text-sm text-quartz-slate leading-relaxed max-w-2xl mb-6">
              Multi-variable comparison overlays. Side-by-side or layered data for contrasting time periods, methods, or properties.
            </p>
            <div className="bg-[#EDEAE2] rounded-lg p-10 relative min-h-[400px]">
              {/* Peer bar chart */}
              <div className="absolute" style={{ left: "5%", top: "8%" }}>
                <div className="bg-white rounded-lg shadow-md p-4 w-[240px]">
                  <div className="text-[9px] text-[#6B7B8D] font-semibold uppercase tracking-wider mb-3">EV/oz Comparison</div>
                  <div className="space-y-2">
                    {[
                      { name: "Sitka Gold", val: 17.5, max: 150, color: "#D4AF37" },
                      { name: "Tudor Gold", val: 25, max: 150, color: "#0E0E0E" },
                      { name: "Seabridge", val: 73, max: 150, color: "#0E0E0E" },
                      { name: "Skeena", val: 150, max: 150, color: "#0E0E0E" },
                    ].map((item) => (
                      <div key={item.name}>
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="text-[8px] text-[#6B7B8D]">{item.name}</span>
                          <span className="text-[8px] font-bold" style={{ color: item.color }}>${item.val}</span>
                        </div>
                        <div className="h-2 bg-[#0E0E0E]/5 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${(item.val / item.max) * 100}%`, backgroundColor: item.color, opacity: item.color === "#0E0E0E" ? 0.2 : 1 }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Zone comparison */}
              <div className="absolute" style={{ right: "5%", top: "8%" }}>
                <div className="bg-white rounded-lg shadow-md p-4 w-[220px]">
                  <div className="text-[9px] text-[#6B7B8D] font-semibold uppercase tracking-wider mb-3">Zone Comparison</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <div className="text-[8px] text-[#A8A8A8] uppercase mb-1">RC Gold</div>
                      <div className="font-display text-[14px] text-[#D4AF37] font-bold">1.02 g/t</div>
                      <div className="text-[7px] text-[#6B7B8D]">over 119m</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[8px] text-[#A8A8A8] uppercase mb-1">Zone C</div>
                      <div className="font-display text-[14px] text-[#5F8F8B] font-bold">2.10 g/t</div>
                      <div className="text-[7px] text-[#6B7B8D]">over 42m</div>
                    </div>
                  </div>
                  <div className="h-px bg-[#0E0E0E]/5 my-2" />
                  <div className="text-[8px] text-[#6B7B8D] text-center">Zone C: Higher grade, narrower width</div>
                </div>
              </div>

              {/* Value gap indicator */}
              <div className="absolute" style={{ left: "10%", top: "60%" }}>
                <div className="bg-[#0E0E0E] rounded-lg shadow-lg p-4 w-[200px]">
                  <div className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider mb-2">Value Gap</div>
                  <div className="flex items-end gap-4 mb-2">
                    <div className="text-center">
                      <div className="font-display text-[#D4AF37] text-[18px] font-bold">$17</div>
                      <div className="text-[7px] text-[#A8A8A8]">SIG EV/oz</div>
                    </div>
                    <div className="flex-1 flex items-center">
                      <div className="h-px flex-1 border-t border-dashed border-[#D4AF37]/40" />
                      <svg width="16" height="8" viewBox="0 0 16 8" className="mx-1"><path d="M0 4H12M12 4L8 0M12 4L8 8" stroke="#D4AF37" strokeWidth="1" /></svg>
                    </div>
                    <div className="text-center">
                      <div className="font-display text-white text-[18px] font-bold">$73</div>
                      <div className="text-[7px] text-[#A8A8A8]">Peer Avg</div>
                    </div>
                  </div>
                  <div className="text-[#D4AF37] text-[10px] font-bold text-center">4.3x Upside Potential</div>
                </div>
              </div>

              {/* Scenario card */}
              <div className="absolute" style={{ right: "8%", top: "55%" }}>
                <div className="bg-white rounded-lg shadow-md p-4 w-[200px] border-t-2 border-[#D4AF37]">
                  <div className="text-[9px] text-[#D4AF37] font-bold uppercase tracking-wider mb-2">Bull Case Scenario</div>
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-[9px]">
                      <span className="text-[#6B7B8D]">Resource</span>
                      <span className="text-[#0E0E0E] font-bold">5.0 Moz</span>
                    </div>
                    <div className="flex justify-between text-[9px]">
                      <span className="text-[#6B7B8D]">EV/oz Target</span>
                      <span className="text-[#0E0E0E] font-bold">$40</span>
                    </div>
                    <div className="flex justify-between text-[9px]">
                      <span className="text-[#6B7B8D]">Implied Value</span>
                      <span className="text-[#D4AF37] font-bold">$200M</span>
                    </div>
                    <div className="h-px bg-[#0E0E0E]/5" />
                    <div className="flex justify-between text-[9px]">
                      <span className="text-[#6B7B8D]">Upside</span>
                      <span className="text-[#3D6B4F] font-bold">+376%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
