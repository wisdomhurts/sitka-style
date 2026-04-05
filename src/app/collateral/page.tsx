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

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-16">

          {/* Investor One-Pager */}
          <div id="investor-one-pager" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">01</span>
              <h2 className="font-display text-2xl text-sitka-black">Investor One-Pager</h2>
            </div>
            <div className="bg-white rounded-lg border border-[#0E0E0E]/10 shadow-lg overflow-hidden">
              <div className="aspect-[8.5/11] max-w-lg mx-auto p-[5%] flex flex-col">
                {/* Header strip */}
                <div className="bg-[#0E0E0E] rounded-md p-4 flex items-center justify-between mb-4">
                  <div className="font-display text-[#D4AF37] text-sm tracking-[0.15em] font-bold">SITKA GOLD</div>
                  <div className="text-[#A8A8A8] text-[10px] tracking-wider">TSX-V: SIG</div>
                </div>
                {/* Stats strip */}
                <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-md px-4 py-3 flex items-center justify-around mb-4">
                  {[
                    { val: "2.4 Moz", label: "Resource" },
                    { val: "$42M", label: "Mkt Cap" },
                    { val: "450k ha", label: "Land" },
                  ].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="font-display text-[#D4AF37] text-sm font-bold">{s.val}</div>
                      <div className="text-[8px] text-[#6B7B8D] uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>
                {/* 3-column layout */}
                <div className="grid grid-cols-3 gap-3 flex-1">
                  <div>
                    <div className="text-[8px] text-[#D4AF37] font-bold uppercase tracking-wider mb-2">Properties</div>
                    <div className="space-y-2">
                      {["Blackjack", "RC Gold", "Clear Creek", "Burwash"].map((p) => (
                        <div key={p} className="bg-[#F4F1EA] rounded p-2">
                          <div className="text-[9px] font-medium text-[#0E0E0E]">{p}</div>
                          <div className="text-[7px] text-[#6B7B8D]">Au exploration</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <div className="text-[8px] text-[#D4AF37] font-bold uppercase tracking-wider mb-2">Highlights</div>
                    <div className="space-y-1.5 text-[8px] text-[#6B7B8D] leading-relaxed">
                      <p>119m @ 1.02 g/t Au at RC Gold Zone including 18m @ 4.19 g/t</p>
                      <p>3.2km strike length of continuous gold mineralization</p>
                      <p>$8.5M cash position, fully funded for 2026 program</p>
                      <p>Management team with 100+ years combined experience</p>
                    </div>
                  </div>
                  <div>
                    <div className="text-[8px] text-[#D4AF37] font-bold uppercase tracking-wider mb-2">Share Data</div>
                    <div className="space-y-1.5">
                      {[
                        { k: "Price", v: "$0.23" },
                        { k: "Shares O/S", v: "186M" },
                        { k: "Mkt Cap", v: "$42M" },
                        { k: "Cash", v: "$8.5M" },
                        { k: "EV/oz", v: "$17.50" },
                      ].map((row) => (
                        <div key={row.k} className="flex justify-between text-[8px]">
                          <span className="text-[#6B7B8D]">{row.k}</span>
                          <span className="text-[#0E0E0E] font-medium">{row.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Footer */}
                <div className="border-t border-[#0E0E0E]/5 pt-3 mt-4 flex items-center justify-between">
                  <div className="text-[7px] text-[#A8A8A8]">info@sitkagoldcorp.com</div>
                  <div className="text-[7px] text-[#A8A8A8]">sitkagoldcorp.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quarterly Update */}
          <div id="quarterly-update" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">02</span>
              <h2 className="font-display text-2xl text-sitka-black">Quarterly Update</h2>
            </div>
            <div className="bg-white rounded-lg border border-[#0E0E0E]/10 shadow-lg overflow-hidden p-8">
              <div className="max-w-2xl mx-auto">
                {/* KPI strip */}
                <div className="bg-[#0E0E0E] rounded-lg p-5 mb-6">
                  <div className="text-[#D4AF37] text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">Q1 2026 Key Performance Indicators</div>
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { val: "4,200m", label: "Meters Drilled" },
                      { val: "32", label: "Holes Completed" },
                      { val: "$4.5M", label: "Quarterly Spend" },
                      { val: "12", label: "Assays Pending" },
                    ].map((kpi) => (
                      <div key={kpi.label} className="text-center">
                        <div className="font-display text-white text-lg font-bold">{kpi.val}</div>
                        <div className="text-[9px] text-[#A8A8A8] uppercase tracking-wider mt-0.5">{kpi.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-[#0E0E0E]/5 rounded-lg p-4">
                    <div className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider mb-2">Exploration Highlights</div>
                    <div className="space-y-2 text-[11px] text-[#6B7B8D] leading-relaxed">
                      <div className="flex gap-2"><span className="text-[#D4AF37]">&bull;</span>New discovery at Zone C with 42m @ 2.1 g/t Au</div>
                      <div className="flex gap-2"><span className="text-[#D4AF37]">&bull;</span>Extended RC Gold strike length to 4.8 km</div>
                      <div className="flex gap-2"><span className="text-[#D4AF37]">&bull;</span>IP survey identified 3 new drill targets</div>
                    </div>
                  </div>
                  <div className="border border-[#0E0E0E]/5 rounded-lg p-4">
                    <div className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider mb-2">Upcoming Catalysts</div>
                    <div className="space-y-2 text-[11px] text-[#6B7B8D] leading-relaxed">
                      <div className="flex gap-2"><span className="text-[#D4AF37]">&bull;</span>Phase 2 drill program commencing Q2</div>
                      <div className="flex gap-2"><span className="text-[#D4AF37]">&bull;</span>Updated resource estimate targeted Q3</div>
                      <div className="flex gap-2"><span className="text-[#D4AF37]">&bull;</span>PEA scoping study initiation</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Cards */}
          <div id="social-media" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">03</span>
              <h2 className="font-display text-2xl text-sitka-black">Social Media Cards</h2>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {/* News card */}
              <div className="aspect-square rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-[#0E0E0E] p-[8%] flex flex-col justify-between">
                <div>
                  <div className="font-display text-[#D4AF37] text-[11px] tracking-[0.15em] font-bold">SITKA GOLD</div>
                  <div className="text-[#A8A8A8] text-[9px] mt-1">TSX-V: SIG</div>
                </div>
                <div>
                  <div className="text-[#D4AF37] text-[9px] font-semibold uppercase tracking-wider mb-2">News Release</div>
                  <div className="font-display text-white text-[16px] leading-tight">
                    Sitka Intersects 119m of 1.02 g/t Gold at RC Gold Zone
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#D4AF37]/30" />
                  <div className="text-[#A8A8A8] text-[8px]">March 2026</div>
                </div>
              </div>
              {/* Quote card */}
              <div className="aspect-square rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-[#F4F1EA] p-[8%] flex flex-col justify-between">
                <div className="font-display text-[#D4AF37] text-[11px] tracking-[0.15em] font-bold">SITKA GOLD</div>
                <div>
                  <div className="font-display text-[#0E0E0E] text-[15px] leading-snug italic">
                    &ldquo;These results confirm the potential for a major gold system at RC Gold.&rdquo;
                  </div>
                  <div className="mt-3 text-[9px] text-[#6B7B8D]">
                    &mdash; Cor Coe, CEO
                  </div>
                </div>
                <div className="w-12 h-px bg-[#D4AF37]" />
              </div>
              {/* Stats card */}
              <div className="aspect-square rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-[#0E0E0E] p-[8%] flex flex-col justify-between">
                <div className="font-display text-[#D4AF37] text-[11px] tracking-[0.15em] font-bold">SITKA GOLD</div>
                <div className="text-center">
                  <div className="font-display text-[#D4AF37] text-[36px] font-bold leading-none">2.4</div>
                  <div className="text-white text-[14px] font-display mt-1">Million Ounces Gold</div>
                  <div className="text-[#A8A8A8] text-[9px] mt-2">Equivalent Resource</div>
                </div>
                <div className="flex items-center justify-center gap-6">
                  <div className="text-center">
                    <div className="text-[#D4AF37] text-[12px] font-bold">450k ha</div>
                    <div className="text-[#A8A8A8] text-[7px] uppercase">Land</div>
                  </div>
                  <div className="w-px h-6 bg-[#D4AF37]/30" />
                  <div className="text-center">
                    <div className="text-[#D4AF37] text-[12px] font-bold">$17.50</div>
                    <div className="text-[#A8A8A8] text-[7px] uppercase">EV/oz</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Email & Letterhead */}
          <div id="email-letterhead" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">04</span>
              <h2 className="font-display text-2xl text-sitka-black">Email &amp; Letterhead</h2>
            </div>
            <div className="bg-white rounded-lg border border-[#0E0E0E]/10 shadow-lg p-8">
              <div className="max-w-md mx-auto">
                {/* Email signature specimen */}
                <div className="text-[10px] text-[#A8A8A8] uppercase tracking-wider mb-3">Email Signature</div>
                <div className="border-t-2 border-[#D4AF37] pt-4">
                  <div className="flex gap-4">
                    <div className="w-14 h-14 bg-[#0E0E0E] rounded flex items-center justify-center flex-shrink-0">
                      <span className="font-display text-[#D4AF37] text-[10px] tracking-[0.1em] font-bold">SIG</span>
                    </div>
                    <div>
                      <div className="font-display text-[#0E0E0E] text-sm font-bold">Cor Coe</div>
                      <div className="text-[11px] text-[#6B7B8D]">Chief Executive Officer</div>
                      <div className="h-px bg-[#D4AF37]/30 my-2 w-20" />
                      <div className="text-[10px] text-[#6B7B8D] space-y-0.5">
                        <div>T: +1 (604) 555-0100</div>
                        <div>E: ccoe@sitkagoldcorp.com</div>
                        <div className="text-[#D4AF37]">sitkagoldcorp.com</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-[#0E0E0E]/5 flex items-center gap-3">
                    <span className="font-display text-[#D4AF37] text-[9px] tracking-[0.15em] font-bold">SITKA GOLD CORP</span>
                    <span className="text-[8px] text-[#A8A8A8]">TSX-V: SIG</span>
                    <span className="text-[8px] text-[#A8A8A8]">|</span>
                    <span className="text-[8px] text-[#6B7B8D]">Defining the Next Major Gold District</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Conference Banners */}
          <div id="conference-banners" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">05</span>
              <h2 className="font-display text-2xl text-sitka-black">Conference Banners</h2>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {/* Pull-up banner */}
              <div>
                <div className="text-[10px] text-[#A8A8A8] uppercase tracking-wider mb-3">Pull-Up Banner (850 x 2000mm)</div>
                <div className="aspect-[0.425/1] max-w-[200px] rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-[#0E0E0E] p-[6%] flex flex-col justify-between">
                  <div className="text-center">
                    <div className="font-display text-[#D4AF37] text-[10px] tracking-[0.2em] font-bold">SITKA GOLD</div>
                    <div className="text-[#A8A8A8] text-[6px] mt-1 tracking-wider">TSX-V: SIG</div>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-px bg-[#D4AF37] mx-auto mb-3" />
                    <div className="font-display text-white text-[9px] leading-tight mb-2">
                      Defining the Next<br />Major Gold District
                    </div>
                    <div className="text-[#A8A8A8] text-[6px] leading-relaxed">
                      British Columbia&apos;s<br />Golden Triangle
                    </div>
                  </div>
                  <div className="space-y-2">
                    {[
                      { val: "2.4 Moz", label: "Gold Resource" },
                      { val: "450k ha", label: "Land Package" },
                    ].map((s) => (
                      <div key={s.label} className="text-center">
                        <div className="font-display text-[#D4AF37] text-[10px] font-bold">{s.val}</div>
                        <div className="text-[5px] text-[#A8A8A8] uppercase tracking-wider">{s.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center text-[5px] text-[#A8A8A8]">sitkagoldcorp.com</div>
                </div>
              </div>
              {/* Tabletop */}
              <div>
                <div className="text-[10px] text-[#A8A8A8] uppercase tracking-wider mb-3">Tabletop Display (600 x 400mm)</div>
                <div className="aspect-[3/2] max-w-[360px] rounded-lg overflow-hidden border border-[#0E0E0E]/10 shadow-lg bg-[#0E0E0E] p-[5%] flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="font-display text-[#D4AF37] text-[10px] tracking-[0.15em] font-bold">SITKA GOLD</div>
                    <div className="text-[#A8A8A8] text-[7px]">TSX-V: SIG</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-white text-[14px] leading-tight mb-2">
                      Defining the Next Major<br />Gold District in British Columbia
                    </div>
                    <div className="w-10 h-px bg-[#D4AF37] mx-auto my-3" />
                    <div className="flex items-center justify-center gap-6">
                      {[
                        { val: "2.4 Moz", label: "Resource" },
                        { val: "450k ha", label: "Land" },
                        { val: "$17.50", label: "EV/oz" },
                      ].map((s) => (
                        <div key={s.label} className="text-center">
                          <div className="font-display text-[#D4AF37] text-[11px] font-bold">{s.val}</div>
                          <div className="text-[6px] text-[#A8A8A8] uppercase tracking-wider">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="text-center text-[6px] text-[#A8A8A8]">sitkagoldcorp.com &middot; info@sitkagoldcorp.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Web Components */}
          <div id="web-components" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">06</span>
              <h2 className="font-display text-2xl text-sitka-black">Web Components</h2>
            </div>
            <div className="space-y-6">
              {/* Nav bar specimen */}
              <div className="bg-[#0E0E0E] rounded-lg px-6 py-3 flex items-center justify-between">
                <div className="font-display text-[#D4AF37] text-sm tracking-[0.15em] font-bold">SITKA GOLD</div>
                <div className="flex items-center gap-6">
                  {["Projects", "Investors", "News", "About"].map((item) => (
                    <span key={item} className="text-white/80 text-[11px] font-medium tracking-wide hover:text-[#D4AF37] cursor-pointer transition-colors">{item}</span>
                  ))}
                  <span className="text-[#D4AF37] text-[10px] font-semibold tracking-wider border border-[#D4AF37]/30 px-3 py-1 rounded">TSX-V: SIG</span>
                </div>
              </div>
              {/* Stat cards */}
              <div className="grid grid-cols-4 gap-4">
                {[
                  { val: "2.4 Moz", label: "Gold Resource", accent: true },
                  { val: "450,000 ha", label: "Land Package", accent: false },
                  { val: "119m", label: "Best Intercept", accent: false },
                  { val: "$17.50", label: "EV/oz Gold", accent: true },
                ].map((card) => (
                  <div key={card.label} className={`rounded-lg p-5 text-center ${card.accent ? "bg-[#0E0E0E]" : "bg-white border border-[#0E0E0E]/5"}`}>
                    <div className={`font-display text-xl font-bold ${card.accent ? "text-[#D4AF37]" : "text-[#0E0E0E]"}`}>{card.val}</div>
                    <div className={`text-[10px] uppercase tracking-wider mt-1 ${card.accent ? "text-[#A8A8A8]" : "text-[#6B7B8D]"}`}>{card.label}</div>
                  </div>
                ))}
              </div>
              {/* Buttons */}
              <div className="flex items-center gap-4 flex-wrap">
                <button className="bg-[#D4AF37] text-[#0E0E0E] text-sm font-semibold px-6 py-2.5 rounded hover:bg-[#D4AF37]/90 transition-colors">
                  View Projects
                </button>
                <button className="border border-[#D4AF37] text-[#D4AF37] text-sm font-semibold px-6 py-2.5 rounded hover:bg-[#D4AF37]/10 transition-colors">
                  Investor Deck
                </button>
                <button className="bg-[#0E0E0E] text-white text-sm font-semibold px-6 py-2.5 rounded hover:bg-[#0E0E0E]/80 transition-colors">
                  Contact Us
                </button>
                <button className="bg-[#0E0E0E]/5 text-[#0E0E0E] text-sm font-medium px-6 py-2.5 rounded hover:bg-[#0E0E0E]/10 transition-colors">
                  Learn More
                </button>
              </div>
              {/* Badges */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="bg-[#D4AF37]/10 text-[#D4AF37] text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Gold</span>
                <span className="bg-[#5F8F8B]/10 text-[#5F8F8B] text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Exploration</span>
                <span className="bg-[#B86B4A]/10 text-[#B86B4A] text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Drill Results</span>
                <span className="bg-[#9B5E7B]/10 text-[#9B5E7B] text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Geophysics</span>
                <span className="bg-[#3D6B4F]/10 text-[#3D6B4F] text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Environmental</span>
                <span className="bg-[#6B7B8D]/10 text-[#6B7B8D] text-[10px] font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full">Technical</span>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
