const CARDS = [
  'FARM FRESH',
  'CONSISTENT\nQUALITY',
  'NATURALLY\nAGED',
  '100% NATURAL',
  'HANDCRAFTED\nBREWING',
  'SMOOTH\nFINISH',
]

export default function Features() {
  return (
    <section id="features" className="min-h-screen md:h-screen w-full flex flex-col overflow-hidden bg-[#337247]">

      {/* TOP — responsive card grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 md:p-6 pt-8 md:pt-10 shrink-0 md:h-[55vh]">
        {CARDS.map((label) => (
          <div
            key={label}
            className="bg-white/10 rounded-[20px] md:rounded-[30px] flex items-center justify-center text-center px-3 md:px-4 min-h-[80px] md:h-full"
          >
            <span
              className="font-inter font-normal text-white whitespace-pre-line"
              style={{ fontSize: 'clamp(13px, 1.8vw, 18px)', lineHeight: 'normal' }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* BOTTOM — text left, bottle floats right */}
      <div className="flex flex-1 min-h-0 items-center px-6 md:px-8 pb-10 pt-6 md:pt-0">

        <div className="w-full md:w-1/2 md:shrink-0">
          <h2
            className="font-bagel text-white not-italic m-0 mb-3"
            style={{ fontSize: 'clamp(28px, 3.3vw, 48px)', lineHeight: '1.001' }}
          >
            ANCIENT WISDOM
          </h2>
          <p
            className="font-inter font-normal text-white/70 m-0"
            style={{ maxWidth: '480px', fontSize: 'clamp(12px, 1.3vw, 13px)', lineHeight: '1.6' }}
          >
            Rooted in centuries of tradition, every bottle of Ratish Reigns carries the
            knowledge of natural fermentation — brewed slow, aged right, and crafted with
            nothing but respect for the process.
          </p>
        </div>

        {/* BottleStage floats in this right half on desktop */}
        <div className="hidden md:block flex-1" />

      </div>

    </section>
  )
}
