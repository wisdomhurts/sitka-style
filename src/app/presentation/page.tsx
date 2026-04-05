export default function PresentationPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="px-6 py-20 md:py-28 bg-sitka-black">
        <div className="mx-auto max-w-6xl">
          <p className="text-sitka-gold text-xs font-semibold tracking-[0.3em] uppercase mb-4">
            Presentation
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-white">
            Slide Templates
          </h1>
          <p className="text-ui-grey text-lg mt-6 max-w-2xl leading-relaxed">
            Five core slide types designed for investor presentations, board
            meetings, and conference decks. Each template maintains the Sitka
            Gold visual language at 16:9 aspect ratio.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl space-y-16">

          {/* Hero Slide */}
          <div id="hero-slide" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">01</span>
              <h2 className="font-display text-2xl text-sitka-black">Hero Slide</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-sitka-black/10 shadow-lg">
              <div className="w-full h-full bg-[#0E0E0E] relative flex flex-col justify-between p-[5%]">
                {/* Top bar */}
                <div className="flex items-center justify-between">
                  <div className="font-display text-[#D4AF37] text-[1.2vw] tracking-[0.2em] font-bold">SITKA GOLD</div>
                  <div className="text-[#A8A8A8] text-[0.7vw] tracking-[0.15em]">TSX-V: SIG</div>
                </div>
                {/* Center content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center px-[8%]">
                  <div className="w-16 h-px bg-[#D4AF37] mb-6" />
                  <h3 className="font-display text-white text-[2.8vw] leading-[1.15] mb-4">
                    Defining the Next Major<br />Gold District in British Columbia
                  </h3>
                  <p className="text-[#A8A8A8] text-[0.9vw] tracking-wider">
                    INVESTOR PRESENTATION &middot; Q1 2026
                  </p>
                </div>
                {/* Gold stats strip */}
                <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/20 rounded-md px-6 py-3 flex items-center justify-around">
                  <div className="text-center">
                    <div className="font-display text-[#D4AF37] text-[1.6vw] font-bold">2.4 Moz</div>
                    <div className="text-[#A8A8A8] text-[0.6vw] uppercase tracking-wider mt-0.5">Gold Resource</div>
                  </div>
                  <div className="w-px h-8 bg-[#D4AF37]/30" />
                  <div className="text-center">
                    <div className="font-display text-[#D4AF37] text-[1.6vw] font-bold">450k ha</div>
                    <div className="text-[#A8A8A8] text-[0.6vw] uppercase tracking-wider mt-0.5">Land Package</div>
                  </div>
                  <div className="w-px h-8 bg-[#D4AF37]/30" />
                  <div className="text-center">
                    <div className="font-display text-[#D4AF37] text-[1.6vw] font-bold">119m</div>
                    <div className="text-[#A8A8A8] text-[0.6vw] uppercase tracking-wider mt-0.5">Best Intercept</div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-quartz-slate mt-4 leading-relaxed max-w-2xl">
              Full-bleed opening slide with brand photography, gold overline, and Playfair Display headline.
              Gold stats strip anchors the key numbers at bottom.
            </p>
          </div>

          {/* Statement Slide */}
          <div id="statement" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">02</span>
              <h2 className="font-display text-2xl text-sitka-black">Statement Slide</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-sitka-black/10 shadow-lg">
              <div className="w-full h-full bg-[#F4F1EA] relative flex flex-col items-center justify-center p-[8%]">
                <div className="w-12 h-px bg-[#D4AF37] mb-8" />
                <p className="font-display text-[#0E0E0E] text-[2.2vw] leading-[1.3] text-center max-w-[80%]">
                  &ldquo;We control one of the largest<br />
                  and most prospective land packages<br />
                  in British Columbia&rsquo;s Golden Triangle&rdquo;
                </p>
                <div className="mt-10 text-center">
                  <div className="font-display text-[#D4AF37] text-[4vw] font-bold leading-none">450,000 ha</div>
                  <div className="text-[#6B7B8D] text-[0.8vw] uppercase tracking-[0.2em] mt-2">Total Land Position</div>
                </div>
                <div className="absolute bottom-[4%] left-[5%] text-[#D4AF37] font-display text-[0.7vw] tracking-[0.15em] font-bold">SITKA GOLD</div>
              </div>
            </div>
            <p className="text-sm text-quartz-slate mt-4 leading-relaxed max-w-2xl">
              Large-format text slide for key messages and executive quotes. Centered Playfair Display type on warm white with gold accent line and big number.
            </p>
          </div>

          {/* Section Divider */}
          <div id="section-divider" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">03</span>
              <h2 className="font-display text-2xl text-sitka-black">Section Divider</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-sitka-black/10 shadow-lg">
              <div className="w-full h-full bg-[#F4F1EA] relative flex flex-col items-center justify-center">
                <div className="text-[#D4AF37] text-[1vw] font-semibold tracking-[0.3em] uppercase mb-4">02</div>
                <div className="w-16 h-px bg-[#D4AF37] mb-6" />
                <h3 className="font-display text-[#0E0E0E] text-[3vw] text-center">
                  Project Portfolio
                </h3>
                <p className="text-[#6B7B8D] text-[0.9vw] mt-4 tracking-wider">
                  Strategic land positions across British Columbia
                </p>
                <div className="absolute bottom-[4%] right-[5%] flex items-center gap-2">
                  <div className="w-8 h-px bg-[#D4AF37]/40" />
                  <span className="text-[#A8A8A8] text-[0.6vw] tracking-wider">SITKA GOLD</span>
                </div>
              </div>
            </div>
            <p className="text-sm text-quartz-slate mt-4 leading-relaxed max-w-2xl">
              Transition slide between presentation sections. Light background with gold section number and centered Playfair headline.
            </p>
          </div>

          {/* Signature Components */}
          <div id="signature-components" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">04</span>
              <h2 className="font-display text-2xl text-sitka-black">Signature Components</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-sitka-black/10 shadow-lg">
              <div className="w-full h-full bg-[#F4F1EA] p-[5%] grid grid-cols-3 gap-[3%]">
                {/* Big Number */}
                <div className="bg-white rounded-lg border border-[#0E0E0E]/5 p-[8%] flex flex-col justify-center items-center text-center shadow-sm">
                  <div className="text-[#A8A8A8] text-[0.6vw] uppercase tracking-[0.2em] mb-2">BIG NUMBER</div>
                  <div className="font-display text-[#D4AF37] text-[2.5vw] font-bold leading-none">2.4 Moz</div>
                  <div className="w-8 h-px bg-[#D4AF37]/30 my-2" />
                  <div className="text-[#6B7B8D] text-[0.6vw] leading-relaxed">
                    Gold equivalent resource<br />across all properties
                  </div>
                </div>
                {/* Drill Highlight */}
                <div className="bg-white rounded-lg border border-[#0E0E0E]/5 p-[8%] flex flex-col justify-center shadow-sm">
                  <div className="text-[#A8A8A8] text-[0.6vw] uppercase tracking-[0.2em] mb-2">DRILL HIGHLIGHT</div>
                  <div className="bg-[#0E0E0E] rounded-md p-[8%] text-center">
                    <div className="text-[#D4AF37] text-[0.7vw] uppercase tracking-wider mb-1">RC Gold Zone</div>
                    <div className="font-display text-white text-[1.8vw] font-bold">119.0m @ 1.02 g/t</div>
                    <div className="text-[#A8A8A8] text-[0.6vw] mt-1">incl. 18.0m @ 4.19 g/t Au</div>
                  </div>
                </div>
                {/* Data Card */}
                <div className="bg-white rounded-lg border border-[#0E0E0E]/5 p-[8%] flex flex-col justify-center shadow-sm">
                  <div className="text-[#A8A8A8] text-[0.6vw] uppercase tracking-[0.2em] mb-3">DATA CARD</div>
                  <div className="space-y-[6%]">
                    <div className="flex items-center justify-between">
                      <span className="text-[#0E0E0E] text-[0.7vw] font-medium">Market Cap</span>
                      <span className="font-display text-[#0E0E0E] text-[0.8vw] font-bold">$42M</span>
                    </div>
                    <div className="h-px bg-[#0E0E0E]/5" />
                    <div className="flex items-center justify-between">
                      <span className="text-[#0E0E0E] text-[0.7vw] font-medium">Shares O/S</span>
                      <span className="font-display text-[#0E0E0E] text-[0.8vw] font-bold">186M</span>
                    </div>
                    <div className="h-px bg-[#0E0E0E]/5" />
                    <div className="flex items-center justify-between">
                      <span className="text-[#0E0E0E] text-[0.7vw] font-medium">Cash Position</span>
                      <span className="font-display text-[#0E0E0E] text-[0.8vw] font-bold">$8.5M</span>
                    </div>
                    <div className="h-px bg-[#0E0E0E]/5" />
                    <div className="flex items-center justify-between">
                      <span className="text-[#0E0E0E] text-[0.7vw] font-medium">EV/oz</span>
                      <span className="font-display text-[#D4AF37] text-[0.8vw] font-bold">$17.50</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-quartz-slate mt-4 leading-relaxed max-w-2xl">
              Reusable branded components — Big Number callouts, Drill Highlight cards, and Data Cards — that compose into custom slide layouts.
            </p>
          </div>

          {/* Split Image / Text */}
          <div id="split-image" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-sitka-gold text-xs font-semibold tracking-[0.2em]">05</span>
              <h2 className="font-display text-2xl text-sitka-black">Split Image / Text</h2>
            </div>
            <div className="aspect-[16/9] rounded-lg overflow-hidden border border-sitka-black/10 shadow-lg">
              <div className="w-full h-full grid grid-cols-2">
                {/* Text side */}
                <div className="bg-[#F4F1EA] p-[8%] flex flex-col justify-center">
                  <div className="text-[#D4AF37] text-[0.7vw] font-semibold tracking-[0.3em] uppercase mb-4">BLACKJACK PROPERTY</div>
                  <h3 className="font-display text-[#0E0E0E] text-[2vw] leading-[1.2] mb-4">
                    450,000 Hectares of<br />Prime Exploration Land
                  </h3>
                  <div className="w-12 h-px bg-[#D4AF37] mb-4" />
                  <p className="text-[#6B7B8D] text-[0.8vw] leading-relaxed mb-6">
                    Situated within the Tintina Gold Belt, the property hosts
                    multiple high-priority targets with significant drill-ready
                    gold anomalies supported by comprehensive geochemical data.
                  </p>
                  <div className="flex gap-6">
                    <div>
                      <div className="font-display text-[#D4AF37] text-[1.4vw] font-bold">12</div>
                      <div className="text-[#A8A8A8] text-[0.55vw] uppercase tracking-wider">Targets</div>
                    </div>
                    <div>
                      <div className="font-display text-[#D4AF37] text-[1.4vw] font-bold">3.2km</div>
                      <div className="text-[#A8A8A8] text-[0.55vw] uppercase tracking-wider">Strike Length</div>
                    </div>
                    <div>
                      <div className="font-display text-[#D4AF37] text-[1.4vw] font-bold">8.4 g/t</div>
                      <div className="text-[#A8A8A8] text-[0.55vw] uppercase tracking-wider">Peak Grade</div>
                    </div>
                  </div>
                </div>
                {/* Image side */}
                <div className="bg-[#5F8F8B] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Simulated terrain/map visual */}
                    <svg className="w-full h-full opacity-20" viewBox="0 0 400 225" fill="none">
                      <path d="M0 180L50 140L100 155L150 120L200 130L250 100L300 115L350 85L400 95V225H0Z" fill="#3D6B4F" />
                      <path d="M0 200L60 170L120 185L180 150L240 165L300 135L360 150L400 130V225H0Z" fill="#0E0E0E" opacity="0.3" />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center mx-auto mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2L16 10L22 12L16 14L12 22L8 14L2 12L8 10L12 2Z" fill="white" opacity="0.6" />
                        </svg>
                      </div>
                      <div className="text-white/60 text-[0.7vw] uppercase tracking-[0.2em]">Property Image Area</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-quartz-slate mt-4 leading-relaxed max-w-2xl">
              Dual-panel layout pairing text content with photography or maps. Supports both left-image and right-image variants with key metrics row.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
