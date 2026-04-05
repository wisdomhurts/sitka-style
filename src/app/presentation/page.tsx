const slides = [
  {
    title: "Hero Slide",
    description:
      "Full-bleed opening slide with brand photography, gold overline, and Playfair Display headline. Sets the tone for investor presentations with dramatic Yukon imagery.",
    tags: ["16:9", "Photography", "Opening"],
  },
  {
    title: "Statement",
    description:
      "Large-format text slide for key messages and executive quotes. Centered Playfair Display type on warm white with gold accent line.",
    tags: ["16:9", "Typography", "Messaging"],
  },
  {
    title: "Section Divider",
    description:
      "Transition slide between presentation sections. Black background with gold section number, Playfair headline, and subtle geological texture overlay.",
    tags: ["16:9", "Transition", "Structure"],
  },
  {
    title: "Signature Components",
    description:
      "Reusable branded elements that can be composed into custom slide layouts — logo lockups, footer bars, data callout boxes, and accent dividers.",
    tags: ["Components", "Modular", "Reusable"],
  },
  {
    title: "Split Image",
    description:
      "Dual-panel layout pairing text content on one half with photography or maps on the other. Supports both left-image and right-image variants.",
    tags: ["16:9", "Photography", "Two-Column"],
  },
];

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

      {/* Slides Grid */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {slides.map((slide, i) => (
              <div
                key={slide.title}
                className="bg-white rounded-lg border border-sitka-black/5 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Preview Area */}
                <div className="aspect-[16/9] bg-sitka-black relative flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-12 h-px bg-sitka-gold mx-auto mb-4" />
                    <p className="font-display text-white text-xl md:text-2xl">
                      {slide.title}
                    </p>
                    <p className="text-ui-grey text-xs mt-3 tracking-wider uppercase">
                      Template {String(i + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="absolute top-4 left-4 text-sitka-gold text-xs font-semibold tracking-[0.2em]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                {/* Details */}
                <div className="p-6">
                  <h3 className="font-display text-lg text-sitka-black mb-2">
                    {slide.title}
                  </h3>
                  <p className="text-sm text-quartz-slate leading-relaxed mb-4">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {slide.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block text-[10px] font-medium tracking-wider uppercase px-2.5 py-1 rounded-full border border-sitka-gold/30 text-sitka-gold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
