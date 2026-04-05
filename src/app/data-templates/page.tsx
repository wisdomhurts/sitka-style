export default function DataTemplatesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 py-20 md:py-28 bg-sitka-black">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Data &amp; Templates
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

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-16">

          {/* Map Frame */}
          <div id="map-frame" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">01</span>
              <h2 className="font-display text-2xl text-sitka-black">Map Frame</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-[#EDEAE2] relative">
              {/* Map area */}
              <div className="absolute inset-0 flex">
                {/* Main map */}
                <div className="flex-1 relative p-4">
                  {/* Topo-style background */}
                  <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 600 340" fill="none">
                    <ellipse cx="200" cy="170" rx="120" ry="80" stroke="#5F8F8B" strokeWidth="0.5" />
                    <ellipse cx="200" cy="170" rx="160" ry="110" stroke="#5F8F8B" strokeWidth="0.5" />
                    <ellipse cx="200" cy="170" rx="200" ry="140" stroke="#5F8F8B" strokeWidth="0.5" />
                    <ellipse cx="400" cy="150" rx="100" ry="70" stroke="#5F8F8B" strokeWidth="0.5" />
                    <ellipse cx="400" cy="150" rx="140" ry="100" stroke="#5F8F8B" strokeWidth="0.5" />
                    <path d="M50 280Q150 260 250 270Q350 280 450 250Q550 220 600 240" stroke="#4A90B8" strokeWidth="1" />
                    <path d="M0 300Q100 290 200 295Q300 300 400 280Q500 260 600 270" stroke="#4A90B8" strokeWidth="0.5" />
                  </svg>
                  {/* Callout pins */}
                  <div className="absolute" style={{ left: "25%", top: "35%" }}>
                    <div className="w-3 h-3 rounded-full bg-[#D4AF37] border-2 border-white shadow-md" />
                    <div className="absolute left-4 -top-2 bg-white rounded px-2 py-1 shadow-sm text-[8px] font-medium whitespace-nowrap border border-[#0E0E0E]/5">
                      <span className="text-[#D4AF37] font-bold">RC Gold</span> &middot; 119m @ 1.02 g/t
                    </div>
                  </div>
                  <div className="absolute" style={{ left: "45%", top: "55%" }}>
                    <div className="w-3 h-3 rounded-full bg-[#B86B4A] border-2 border-white shadow-md" />
                    <div className="absolute left-4 -top-2 bg-white rounded px-2 py-1 shadow-sm text-[8px] font-medium whitespace-nowrap border border-[#0E0E0E]/5">
                      <span className="text-[#B86B4A] font-bold">Oxide Zone</span> &middot; 42m @ 0.8 g/t
                    </div>
                  </div>
                  <div className="absolute" style={{ left: "60%", top: "30%" }}>
                    <div className="w-3 h-3 rounded-full bg-[#5F8F8B] border-2 border-white shadow-md" />
                    <div className="absolute left-4 -top-2 bg-white rounded px-2 py-1 shadow-sm text-[8px] font-medium whitespace-nowrap border border-[#0E0E0E]/5">
                      <span className="text-[#5F8F8B] font-bold">Creek Target</span> &middot; Untested
                    </div>
                  </div>
                  {/* Scale bar */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="flex">
                      <div className="w-6 h-1.5 bg-[#0E0E0E]" />
                      <div className="w-6 h-1.5 bg-white border border-[#0E0E0E]" />
                      <div className="w-6 h-1.5 bg-[#0E0E0E]" />
                    </div>
                    <span className="text-[7px] text-[#6B7B8D]">500m</span>
                  </div>
                  {/* North arrow */}
                  <div className="absolute top-4 right-4 text-center">
                    <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
                      <path d="M8 0L12 10H4L8 0Z" fill="#0E0E0E" />
                      <path d="M8 24L4 14H12L8 24Z" fill="#A8A8A8" />
                    </svg>
                    <div className="text-[6px] text-[#6B7B8D] font-bold mt-0.5">N</div>
                  </div>
                </div>
                {/* Legend sidebar */}
                <div className="w-[18%] bg-white/80 border-l border-[#0E0E0E]/10 p-3 flex flex-col">
                  <div className="text-[7px] font-bold text-[#0E0E0E] uppercase tracking-wider mb-3">Legend</div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#D4AF37]" />
                      <span className="text-[6px] text-[#0E0E0E]">Gold target</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#B86B4A]" />
                      <span className="text-[6px] text-[#0E0E0E]">Oxide zone</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#5F8F8B]" />
                      <span className="text-[6px] text-[#0E0E0E]">Exploration</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-0.5 bg-[#4A90B8]" />
                      <span className="text-[6px] text-[#0E0E0E]">Waterway</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-0.5 bg-[#5F8F8B] opacity-30" />
                      <span className="text-[6px] text-[#0E0E0E]">Contour</span>
                    </div>
                  </div>
                  <div className="text-[5px] text-[#A8A8A8] pt-2 border-t border-[#0E0E0E]/5">
                    NAD83 / UTM Zone 8N<br />
                    Sitka Gold Corp 2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Data Slide */}
          <div id="data-slide" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">02</span>
              <h2 className="font-display text-2xl text-sitka-black">Data Slide</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-white p-[5%]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-[#D4AF37] text-[0.6vw] font-semibold tracking-[0.2em] uppercase">Exploration Budget</div>
                  <div className="font-display text-[#0E0E0E] text-[1.4vw]">Quarterly Spend vs. Discovery Rate</div>
                </div>
                <div className="text-[#A8A8A8] text-[0.6vw]">FY2025-26</div>
              </div>
              {/* Chart area */}
              <div className="flex-1 flex items-end gap-[2%] h-[60%] border-b border-l border-[#0E0E0E]/10 px-[2%] pt-4 relative">
                {/* Y-axis labels */}
                <div className="absolute -left-[4%] top-0 bottom-0 flex flex-col justify-between text-[0.5vw] text-[#A8A8A8]">
                  <span>$5M</span><span>$4M</span><span>$3M</span><span>$2M</span><span>$1M</span><span>$0</span>
                </div>
                {/* Bars */}
                {[
                  { q: "Q1", h: "30%", val: "$1.5M" },
                  { q: "Q2", h: "52%", val: "$2.6M" },
                  { q: "Q3", h: "80%", val: "$4.0M" },
                  { q: "Q4", h: "66%", val: "$3.3M" },
                  { q: "Q1'26", h: "90%", val: "$4.5M" },
                  { q: "Q2'26", h: "74%", val: "$3.7M" },
                ].map((bar) => (
                  <div key={bar.q} className="flex-1 flex flex-col items-center justify-end h-full">
                    <div className="text-[0.5vw] text-[#0E0E0E] font-medium mb-1">{bar.val}</div>
                    <div
                      className="w-full rounded-t-sm"
                      style={{ height: bar.h, backgroundColor: bar.q === "Q3" ? "#D4AF37" : "#0E0E0E", opacity: bar.q === "Q3" ? 1 : 0.15 }}
                    />
                    <div className="text-[0.5vw] text-[#6B7B8D] mt-1.5">{bar.q}</div>
                  </div>
                ))}
                {/* Trend line overlay */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 300" preserveAspectRatio="none">
                  <polyline points="60,210 160,145 260,60 360,100 460,30 560,80" fill="none" stroke="#D4AF37" strokeWidth="2" strokeDasharray="6 4" />
                </svg>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div id="timeline" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">03</span>
              <h2 className="font-display text-2xl text-sitka-black">Timeline</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-white p-[5%] flex flex-col">
              <div className="mb-6">
                <div className="text-[#D4AF37] text-[0.6vw] font-semibold tracking-[0.2em] uppercase">Exploration Timeline</div>
                <div className="font-display text-[#0E0E0E] text-[1.4vw]">2026 Program Milestones</div>
              </div>
              <div className="flex-1 flex items-center">
                <div className="w-full relative">
                  {/* Main line */}
                  <div className="h-0.5 bg-[#0E0E0E]/10 w-full absolute top-1/2 -translate-y-1/2" />
                  <div className="h-0.5 bg-[#D4AF37] absolute top-1/2 -translate-y-1/2" style={{ width: "45%" }} />
                  {/* Quarters */}
                  <div className="flex justify-between relative">
                    {[
                      { q: "Q1 2026", label: "Ice Road Season", status: "complete", detail: "Camp mobilization, equipment staging" },
                      { q: "Q2 2026", label: "Drill Program", status: "active", detail: "8,000m diamond drilling, RC infill" },
                      { q: "Q3 2026", label: "Assay Results", status: "upcoming", detail: "Lab results, resource update" },
                      { q: "Q4 2026", label: "43-101 Update", status: "upcoming", detail: "Technical report, PEA scoping" },
                    ].map((item) => (
                      <div key={item.q} className="flex flex-col items-center text-center w-[22%]">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          item.status === "complete" ? "bg-[#D4AF37] border-[#D4AF37]" :
                          item.status === "active" ? "bg-white border-[#D4AF37]" :
                          "bg-white border-[#A8A8A8]"
                        } shadow-sm z-10`} />
                        <div className="mt-3">
                          <div className="text-[0.6vw] font-semibold text-[#0E0E0E]">{item.q}</div>
                          <div className="font-display text-[0.9vw] text-[#0E0E0E] mt-1">{item.label}</div>
                          <div className="text-[0.55vw] text-[#6B7B8D] mt-1 leading-relaxed">{item.detail}</div>
                          <span className={`inline-block mt-2 text-[0.5vw] font-medium uppercase tracking-wider px-2 py-0.5 rounded-full ${
                            item.status === "complete" ? "bg-[#D4AF37]/10 text-[#D4AF37]" :
                            item.status === "active" ? "bg-[#5F8F8B]/10 text-[#5F8F8B]" :
                            "bg-[#A8A8A8]/10 text-[#A8A8A8]"
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Peer Comparison */}
          <div id="peer-comparison" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">04</span>
              <h2 className="font-display text-2xl text-sitka-black">Peer Comparison</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-white p-[5%]">
              <div className="mb-6">
                <div className="text-[#D4AF37] text-[0.6vw] font-semibold tracking-[0.2em] uppercase">Peer Analysis</div>
                <div className="font-display text-[#0E0E0E] text-[1.4vw]">BC Gold Explorer Comparison</div>
              </div>
              <table className="w-full text-[0.7vw]">
                <thead>
                  <tr className="border-b-2 border-[#0E0E0E]/10">
                    <th className="text-left py-2 text-[#6B7B8D] font-medium uppercase tracking-wider text-[0.55vw]">Company</th>
                    <th className="text-right py-2 text-[#6B7B8D] font-medium uppercase tracking-wider text-[0.55vw]">Mkt Cap</th>
                    <th className="text-right py-2 text-[#6B7B8D] font-medium uppercase tracking-wider text-[0.55vw]">Resource (Moz)</th>
                    <th className="text-right py-2 text-[#6B7B8D] font-medium uppercase tracking-wider text-[0.55vw]">EV/oz</th>
                    <th className="text-right py-2 text-[#6B7B8D] font-medium uppercase tracking-wider text-[0.55vw]">Land (ha)</th>
                    <th className="text-right py-2 text-[#6B7B8D] font-medium uppercase tracking-wider text-[0.55vw]">Stage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { company: "Sitka Gold Corp", cap: "$42M", resource: "2.4", ev: "$17.50", land: "450,000", stage: "Exploration", highlight: true },
                    { company: "Skeena Resources", cap: "$1.2B", resource: "8.0", ev: "$150", land: "120,000", stage: "Development", highlight: false },
                    { company: "Seabridge Gold", cap: "$2.8B", resource: "38.2", ev: "$73", land: "240,000", stage: "PEA", highlight: false },
                    { company: "Pretium Resources", cap: "$680M", resource: "5.5", ev: "$124", land: "80,000", stage: "Production", highlight: false },
                    { company: "Tudor Gold", cap: "$320M", resource: "12.6", ev: "$25", land: "170,000", stage: "Exploration", highlight: false },
                    { company: "Ascot Resources", cap: "$180M", resource: "2.1", ev: "$86", land: "30,000", stage: "Development", highlight: false },
                  ].map((row) => (
                    <tr key={row.company} className={`border-b border-[#0E0E0E]/5 ${row.highlight ? "bg-[#D4AF37]/5" : ""}`}>
                      <td className={`py-2.5 font-medium ${row.highlight ? "text-[#D4AF37]" : "text-[#0E0E0E]"}`}>
                        {row.highlight && <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-1.5" />}
                        {row.company}
                      </td>
                      <td className="text-right py-2.5 text-[#0E0E0E]">{row.cap}</td>
                      <td className="text-right py-2.5 text-[#0E0E0E] font-semibold">{row.resource}</td>
                      <td className={`text-right py-2.5 font-semibold ${row.highlight ? "text-[#D4AF37]" : "text-[#0E0E0E]"}`}>{row.ev}</td>
                      <td className="text-right py-2.5 text-[#0E0E0E]">{row.land}</td>
                      <td className="text-right py-2.5">
                        <span className={`px-2 py-0.5 rounded-full text-[0.55vw] ${
                          row.stage === "Exploration" ? "bg-[#5F8F8B]/10 text-[#5F8F8B]" :
                          row.stage === "Development" ? "bg-[#C4943A]/10 text-[#C4943A]" :
                          row.stage === "PEA" ? "bg-[#9B5E7B]/10 text-[#9B5E7B]" :
                          "bg-[#3D6B4F]/10 text-[#3D6B4F]"
                        }`}>{row.stage}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Drill Results */}
          <div id="drill-results" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">05</span>
              <h2 className="font-display text-2xl text-sitka-black">Drill Results</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-[#0E0E0E] p-[5%] flex gap-[4%]">
              {/* Hero intercept */}
              <div className="w-[40%] flex flex-col justify-center">
                <div className="text-[#D4AF37] text-[0.6vw] font-semibold tracking-[0.2em] uppercase mb-2">Featured Intercept</div>
                <div className="font-display text-white text-[2.5vw] leading-[1.1] mb-2">
                  119.0m @ 1.02 g/t Au
                </div>
                <div className="text-[#A8A8A8] text-[0.7vw] mb-4">Hole RC-26-042 &middot; RC Gold Zone &middot; From 84.0m</div>
                <div className="w-12 h-px bg-[#D4AF37] mb-4" />
                <div className="space-y-2">
                  <div className="text-white text-[0.7vw]">Including <span className="text-[#D4AF37] font-bold">18.0m @ 4.19 g/t Au</span> from 102m</div>
                  <div className="text-white text-[0.7vw]">Including <span className="text-[#D4AF37] font-bold">6.0m @ 8.74 g/t Au</span> from 108m</div>
                </div>
              </div>
              {/* Supporting data */}
              <div className="flex-1 flex flex-col gap-[3%]">
                <div className="text-[#A8A8A8] text-[0.55vw] uppercase tracking-wider mb-1">Supporting Intercepts</div>
                <div className="flex-1 space-y-2">
                  {[
                    { hole: "RC-26-038", from: "62.0m", width: "45.0m", grade: "0.85 g/t" },
                    { hole: "RC-26-039", from: "91.0m", width: "72.0m", grade: "0.64 g/t" },
                    { hole: "RC-26-040", from: "78.0m", width: "33.0m", grade: "1.38 g/t" },
                    { hole: "RC-26-041", from: "105.0m", width: "28.0m", grade: "0.92 g/t" },
                    { hole: "DD-26-015", from: "142.0m", width: "18.5m", grade: "2.14 g/t" },
                  ].map((row) => (
                    <div key={row.hole} className="flex items-center gap-3 bg-white/5 rounded px-3 py-2">
                      <span className="text-[#A8A8A8] text-[0.6vw] font-mono w-[20%]">{row.hole}</span>
                      <span className="text-white/60 text-[0.55vw] w-[15%]">from {row.from}</span>
                      <div className="flex-1 flex items-center gap-2">
                        <div className="h-1.5 rounded-full bg-[#D4AF37]" style={{ width: `${parseFloat(row.width) / 1.2}%` }} />
                        <span className="text-white text-[0.6vw] font-medium">{row.width}</span>
                      </div>
                      <span className="text-[#D4AF37] text-[0.65vw] font-bold">{row.grade}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cross-Section */}
          <div id="cross-section" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">06</span>
              <h2 className="font-display text-2xl text-sitka-black">Cross-Section</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-white p-[4%]">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-[#D4AF37] text-[0.6vw] font-semibold tracking-[0.2em] uppercase">Cross Section A-A&apos;</div>
                  <div className="font-display text-[#0E0E0E] text-[1.2vw]">RC Gold Zone &middot; Looking North</div>
                </div>
                <div className="text-[#A8A8A8] text-[0.55vw]">Vertical Exaggeration 2x</div>
              </div>
              <div className="relative flex-1 h-[70%] border border-[#0E0E0E]/10 rounded bg-[#FAFAF8]">
                <svg className="w-full h-full" viewBox="0 0 800 300" preserveAspectRatio="none">
                  {/* Surface line */}
                  <path d="M0 40Q100 30 200 35Q300 25 400 30Q500 28 600 32Q700 30 800 35" fill="none" stroke="#3D6B4F" strokeWidth="2" />
                  <path d="M0 40Q100 30 200 35Q300 25 400 30Q500 28 600 32Q700 30 800 35L800 0L0 0Z" fill="#3D6B4F" opacity="0.08" />
                  {/* Rock layers */}
                  <path d="M0 100Q200 90 400 95Q600 85 800 90" fill="none" stroke="#6B7B8D" strokeWidth="0.5" strokeDasharray="4 2" />
                  <path d="M0 160Q200 150 400 155Q600 148 800 152" fill="none" stroke="#6B7B8D" strokeWidth="0.5" strokeDasharray="4 2" />
                  <path d="M0 220Q200 210 400 215Q600 208 800 212" fill="none" stroke="#6B7B8D" strokeWidth="0.5" strokeDasharray="4 2" />
                  {/* Gold zone */}
                  <path d="M250 80L350 80L380 200L220 200Z" fill="#D4AF37" opacity="0.15" stroke="#D4AF37" strokeWidth="1" />
                  <path d="M480 100L560 100L580 180L460 180Z" fill="#D4AF37" opacity="0.1" stroke="#D4AF37" strokeWidth="0.5" strokeDasharray="3 2" />
                  {/* Drill traces */}
                  <line x1="200" y1="30" x2="240" y2="260" stroke="#0E0E0E" strokeWidth="1.5" />
                  <line x1="300" y1="28" x2="320" y2="250" stroke="#0E0E0E" strokeWidth="1.5" />
                  <line x1="400" y1="30" x2="380" y2="260" stroke="#0E0E0E" strokeWidth="1.5" />
                  <line x1="500" y1="28" x2="520" y2="240" stroke="#A8A8A8" strokeWidth="1" strokeDasharray="4 3" />
                  {/* Gold intercept highlights */}
                  <line x1="220" y1="80" x2="235" y2="200" stroke="#D4AF37" strokeWidth="4" />
                  <line x1="310" y1="85" x2="318" y2="195" stroke="#D4AF37" strokeWidth="4" />
                  <line x1="390" y1="90" x2="383" y2="190" stroke="#D4AF37" strokeWidth="3" />
                  {/* Labels */}
                  <text x="190" y="20" fill="#0E0E0E" fontSize="8" fontWeight="600">RC-042</text>
                  <text x="290" y="18" fill="#0E0E0E" fontSize="8" fontWeight="600">RC-038</text>
                  <text x="390" y="20" fill="#0E0E0E" fontSize="8" fontWeight="600">RC-040</text>
                  <text x="490" y="18" fill="#A8A8A8" fontSize="7">Proposed</text>
                  {/* Grade labels */}
                  <text x="245" y="145" fill="#D4AF37" fontSize="7" fontWeight="700">119m @ 1.02</text>
                  <text x="325" y="140" fill="#D4AF37" fontSize="7" fontWeight="700">45m @ 0.85</text>
                </svg>
                {/* Elevation scale */}
                <div className="absolute right-2 top-2 bottom-2 flex flex-col justify-between text-[6px] text-[#A8A8A8]">
                  <span>800m</span><span>700m</span><span>600m</span><span>500m</span><span>400m</span>
                </div>
              </div>
            </div>
          </div>

          {/* Core Photo */}
          <div id="core-photo" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">07</span>
              <h2 className="font-display text-2xl text-sitka-black">Core Photo</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-white flex">
              {/* Photo area */}
              <div className="flex-1 relative bg-[#E8E5DE]">
                {/* Simulated core boxes */}
                <div className="absolute inset-0 p-[4%] flex flex-col gap-2">
                  {[
                    { depth: "84.0-90.0m", color: "#8B8577" },
                    { depth: "90.0-96.0m", color: "#7A756A" },
                    { depth: "96.0-102.0m", color: "#6B6557" },
                    { depth: "102.0-108.0m", color: "#5C5345" },
                    { depth: "108.0-114.0m", color: "#4D4537" },
                  ].map((box) => (
                    <div key={box.depth} className="flex-1 flex items-center gap-2">
                      <div className="text-[0.5vw] text-[#6B7B8D] w-[12%] text-right font-mono">{box.depth}</div>
                      <div className="flex-1 h-full rounded-sm relative overflow-hidden" style={{ backgroundColor: box.color }}>
                        {/* Gold mineralization flecks */}
                        <div className="absolute inset-0 flex items-center">
                          {Array.from({ length: 12 }).map((_, i) => (
                            <div
                              key={i}
                              className="absolute w-1 h-1 rounded-full bg-[#D4AF37]"
                              style={{ left: `${8 + i * 8}%`, top: `${20 + (i % 3) * 25}%`, opacity: 0.4 + Math.random() * 0.4 }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Depth markers */}
                <div className="absolute left-[3%] top-[3%] bg-[#0E0E0E]/80 text-white rounded px-2 py-1">
                  <div className="text-[0.5vw] font-mono">DDH-26-042</div>
                  <div className="text-[0.4vw] text-[#D4AF37]">84.0m - 114.0m</div>
                </div>
              </div>
              {/* Assay data sidebar */}
              <div className="w-[30%] bg-[#0E0E0E] p-[3%] flex flex-col">
                <div className="text-[#D4AF37] text-[0.6vw] font-semibold tracking-[0.2em] uppercase mb-2">Assay Data</div>
                <div className="font-display text-white text-[1vw] mb-4">Core Photo: DDH-26-042</div>
                <div className="space-y-2 flex-1">
                  {[
                    { interval: "84-90m", au: "0.42", ag: "2.1" },
                    { interval: "90-96m", au: "0.78", ag: "4.3" },
                    { interval: "96-102m", au: "1.85", ag: "8.7" },
                    { interval: "102-108m", au: "4.19", ag: "12.4" },
                    { interval: "108-114m", au: "8.74", ag: "18.2" },
                  ].map((row) => (
                    <div key={row.interval} className="flex items-center gap-2 bg-white/5 rounded px-2 py-1.5">
                      <span className="text-[#A8A8A8] text-[0.55vw] font-mono w-[35%]">{row.interval}</span>
                      <span className="text-[#D4AF37] text-[0.6vw] font-bold flex-1">{row.au} g/t Au</span>
                      <span className="text-[#A8A8A8] text-[0.5vw]">{row.ag} g/t Ag</span>
                    </div>
                  ))}
                </div>
                <div className="pt-3 border-t border-white/10 mt-3">
                  <div className="text-[#A8A8A8] text-[0.45vw] uppercase tracking-wider mb-1">Weighted Average</div>
                  <div className="font-display text-[#D4AF37] text-[1.2vw] font-bold">3.20 g/t Au</div>
                </div>
              </div>
            </div>
          </div>

          {/* Staking Map */}
          <div id="staking-map" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">08</span>
              <h2 className="font-display text-2xl text-sitka-black">Staking Map</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-[#EDEAE2] relative">
              <svg className="w-full h-full" viewBox="0 0 800 450">
                {/* Grid lines */}
                {Array.from({ length: 10 }).map((_, i) => (
                  <line key={`h${i}`} x1="0" y1={i * 50} x2="800" y2={i * 50} stroke="#0E0E0E" strokeWidth="0.3" opacity="0.1" />
                ))}
                {Array.from({ length: 16 }).map((_, i) => (
                  <line key={`v${i}`} x1={i * 55} y1="0" x2={i * 55} y2="450" stroke="#0E0E0E" strokeWidth="0.3" opacity="0.1" />
                ))}
                {/* Sitka claims (gold) */}
                <rect x="150" y="80" width="200" height="180" fill="#D4AF37" opacity="0.15" stroke="#D4AF37" strokeWidth="1.5" />
                <rect x="350" y="100" width="150" height="160" fill="#D4AF37" opacity="0.15" stroke="#D4AF37" strokeWidth="1.5" />
                <rect x="200" y="260" width="180" height="100" fill="#D4AF37" opacity="0.1" stroke="#D4AF37" strokeWidth="1" strokeDasharray="4 2" />
                {/* Neighbor claims */}
                <rect x="500" y="80" width="120" height="120" fill="#6B7B8D" opacity="0.1" stroke="#6B7B8D" strokeWidth="1" />
                <rect x="100" y="280" width="100" height="80" fill="#6B7B8D" opacity="0.1" stroke="#6B7B8D" strokeWidth="1" />
                {/* Labels */}
                <text x="220" y="175" fill="#D4AF37" fontSize="12" fontWeight="700" fontFamily="Playfair Display">Blackjack</text>
                <text x="385" y="185" fill="#D4AF37" fontSize="10" fontWeight="600" fontFamily="Playfair Display">RC Gold</text>
                <text x="250" y="315" fill="#D4AF37" fontSize="9" opacity="0.7" fontFamily="Playfair Display">Extension</text>
                <text x="520" y="145" fill="#6B7B8D" fontSize="8">Neighbor A</text>
                <text x="115" y="325" fill="#6B7B8D" fontSize="8">Neighbor B</text>
                {/* Stream */}
                <path d="M50 120Q150 200 300 220Q450 240 550 350Q650 400 800 420" fill="none" stroke="#4A90B8" strokeWidth="1.5" opacity="0.5" />
              </svg>
              {/* Legend */}
              <div className="absolute bottom-4 right-4 bg-white/90 border border-[#0E0E0E]/10 rounded p-3">
                <div className="text-[7px] font-bold text-[#0E0E0E] uppercase tracking-wider mb-2">Legend</div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-3 bg-[#D4AF37]/20 border border-[#D4AF37]" />
                    <span className="text-[6px] text-[#0E0E0E]">Sitka Gold claims</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-3 bg-[#D4AF37]/10 border border-[#D4AF37] border-dashed" />
                    <span className="text-[6px] text-[#0E0E0E]">Pending acquisition</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-4 h-3 bg-[#6B7B8D]/10 border border-[#6B7B8D]" />
                    <span className="text-[6px] text-[#0E0E0E]">Third party</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Callout Library */}
          <div id="callout-library" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">09</span>
              <h2 className="font-display text-2xl text-sitka-black">Callout Library</h2>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {/* Simple dot + label */}
              <div className="bg-[#EDEAE2] rounded-lg p-8 flex items-center justify-center min-h-[160px] relative">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#D4AF37] border-2 border-white shadow" />
                  <div className="h-px w-12 bg-[#A8A8A8]" />
                  <div className="text-[11px] font-medium text-[#0E0E0E]">Zone A &middot; 1.02 g/t</div>
                </div>
                <div className="absolute bottom-3 left-3 text-[9px] text-[#A8A8A8]">Dot + Leader</div>
              </div>
              {/* Angled elbow */}
              <div className="bg-[#EDEAE2] rounded-lg p-8 flex items-center justify-center min-h-[160px] relative">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[#B86B4A] border-2 border-white shadow" />
                  <svg className="absolute left-3 top-1" width="60" height="30" viewBox="0 0 60 30">
                    <polyline points="0,6 20,6 40,0" fill="none" stroke="#A8A8A8" strokeWidth="1" />
                  </svg>
                  <div className="absolute left-[68px] -top-1 text-[11px] font-medium text-[#0E0E0E] whitespace-nowrap">Oxide &middot; 42m</div>
                </div>
                <div className="absolute bottom-3 left-3 text-[9px] text-[#A8A8A8]">Angled Elbow</div>
              </div>
              {/* Dark tag */}
              <div className="bg-[#EDEAE2] rounded-lg p-8 flex items-center justify-center min-h-[160px] relative">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#5F8F8B]" />
                  <div className="h-px w-8 bg-[#5F8F8B]" />
                  <div className="bg-[#0E0E0E] text-white text-[10px] px-3 py-1.5 rounded font-medium">Creek Target</div>
                </div>
                <div className="absolute bottom-3 left-3 text-[9px] text-[#A8A8A8]">Dark Tag</div>
              </div>
              {/* Water label */}
              <div className="bg-[#EDEAE2] rounded-lg p-8 flex items-center justify-center min-h-[160px] relative">
                <div className="text-[#4A90B8] text-[13px] italic tracking-wider" style={{ fontFamily: "Playfair Display, serif" }}>
                  Blackjack Creek
                </div>
                <div className="absolute bottom-3 left-3 text-[9px] text-[#A8A8A8]">Water Label</div>
              </div>
              {/* Anomaly ring */}
              <div className="bg-[#EDEAE2] rounded-lg p-8 flex items-center justify-center min-h-[160px] relative">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full border-2 border-[#9B5E7B] border-dashed flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#9B5E7B]" />
                  </div>
                  <div className="absolute -right-20 top-1/2 -translate-y-1/2 text-[10px] text-[#9B5E7B] font-medium whitespace-nowrap">IP Anomaly</div>
                </div>
                <div className="absolute bottom-3 left-3 text-[9px] text-[#A8A8A8]">Anomaly Ring</div>
              </div>
              {/* Number marker */}
              <div className="bg-[#EDEAE2] rounded-lg p-8 flex items-center justify-center min-h-[160px] relative">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-white text-[10px] font-bold">3</div>
                  <div className="h-px w-10 bg-[#D4AF37]" />
                  <div>
                    <div className="text-[10px] font-semibold text-[#0E0E0E]">Discovery Zone</div>
                    <div className="text-[8px] text-[#6B7B8D]">High-priority target</div>
                  </div>
                </div>
                <div className="absolute bottom-3 left-3 text-[9px] text-[#A8A8A8]">Number Marker</div>
              </div>
            </div>
          </div>

          {/* Infographics */}
          <div id="infographics" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">10</span>
              <h2 className="font-display text-2xl text-sitka-black">Infographics</h2>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {/* Progress bars */}
              <div className="bg-white rounded-lg border border-[#0E0E0E]/5 p-6 shadow-sm">
                <div className="text-[10px] text-[#A8A8A8] uppercase tracking-wider mb-4">Progress Bars</div>
                <div className="space-y-4">
                  {[
                    { label: "Drilling Complete", pct: 78, color: "#D4AF37" },
                    { label: "Assays Received", pct: 45, color: "#5F8F8B" },
                    { label: "Mapping Complete", pct: 92, color: "#3D6B4F" },
                    { label: "Geophysics", pct: 30, color: "#9B5E7B" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[11px] text-[#0E0E0E] font-medium">{item.label}</span>
                        <span className="text-[10px] font-bold" style={{ color: item.color }}>{item.pct}%</span>
                      </div>
                      <div className="h-2 bg-[#0E0E0E]/5 rounded-full overflow-hidden">
                        <div className="h-full rounded-full" style={{ width: `${item.pct}%`, backgroundColor: item.color }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Comparison bars */}
              <div className="bg-white rounded-lg border border-[#0E0E0E]/5 p-6 shadow-sm">
                <div className="text-[10px] text-[#A8A8A8] uppercase tracking-wider mb-4">Comparison Bars</div>
                <div className="space-y-3">
                  {[
                    { label: "Sitka Gold", val: 450, max: 450, color: "#D4AF37" },
                    { label: "Peer Average", val: 120, max: 450, color: "#6B7B8D" },
                    { label: "Skeena", val: 120, max: 450, color: "#0E0E0E" },
                    { label: "Tudor", val: 170, max: 450, color: "#0E0E0E" },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-[#0E0E0E]">{item.label}</span>
                        <span className="text-[10px] font-bold" style={{ color: item.color }}>{item.val}k ha</span>
                      </div>
                      <div className="h-3 bg-[#0E0E0E]/5 rounded-sm overflow-hidden">
                        <div className="h-full rounded-sm" style={{ width: `${(item.val / item.max) * 100}%`, backgroundColor: item.color, opacity: item.color === "#0E0E0E" ? 0.15 : 1 }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Donut chart */}
              <div className="bg-white rounded-lg border border-[#0E0E0E]/5 p-6 shadow-sm">
                <div className="text-[10px] text-[#A8A8A8] uppercase tracking-wider mb-4">Donut Chart</div>
                <div className="flex items-center justify-center">
                  <div className="relative">
                    <svg width="120" height="120" viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#0E0E0E" strokeWidth="12" opacity="0.05" />
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#D4AF37" strokeWidth="12"
                        strokeDasharray="157 314" strokeDashoffset="0" transform="rotate(-90 60 60)" />
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#5F8F8B" strokeWidth="12"
                        strokeDasharray="78 314" strokeDashoffset="-157" transform="rotate(-90 60 60)" />
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#B86B4A" strokeWidth="12"
                        strokeDasharray="47 314" strokeDashoffset="-235" transform="rotate(-90 60 60)" />
                      <circle cx="60" cy="60" r="50" fill="none" stroke="#6B7B8D" strokeWidth="12"
                        strokeDasharray="32 314" strokeDashoffset="-282" transform="rotate(-90 60 60)" />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-display text-lg font-bold text-[#0E0E0E]">$14M</span>
                      <span className="text-[8px] text-[#A8A8A8]">Total Budget</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  {[
                    { label: "Drilling", color: "#D4AF37", pct: "50%" },
                    { label: "Geochem", color: "#5F8F8B", pct: "25%" },
                    { label: "Geophysics", color: "#B86B4A", pct: "15%" },
                    { label: "G&A", color: "#6B7B8D", pct: "10%" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-[9px] text-[#6B7B8D]">{item.label} ({item.pct})</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
