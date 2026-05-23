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
    <section id="features" className="h-screen w-full flex flex-col overflow-hidden bg-[#337247]">

      {/* TOP — full-width 3×2 card grid */}
      <div
        className="grid grid-cols-3 grid-rows-2 gap-3 p-6 pt-10 shrink-0"
        style={{ height: '55vh' }}
      >
        {CARDS.map((label) => (
          <div
            key={label}
            className="bg-white/10 rounded-[30px] flex items-center justify-center text-center px-4"
          >
            <span
              className="font-inter font-normal text-white whitespace-pre-line"
              style={{ fontSize: '18px', lineHeight: 'normal' }}
            >
              {label}
            </span>
          </div>
        ))}
      </div>

      {/* BOTTOM — text left, bottle floats right */}
      <div className="flex flex-1 min-h-0 items-center px-8 pb-10">

        <div className="w-1/2 shrink-0">
          <h2
            className="font-bagel text-white not-italic m-0 mb-3"
            style={{ fontSize: 'clamp(32px, 3.3vw, 48px)', lineHeight: '1.001' }}
          >
            ANCIENT WISDOM
          </h2>
          <p
            className="font-inter font-normal text-white/70 m-0"
            style={{ maxWidth: '480px', fontSize: '13px', lineHeight: '1.6' }}
          >
            Rooted in centuries of tradition, every bottle of Ratish Reigns carries the
            knowledge of natural fermentation — brewed slow, aged right, and crafted with
            nothing but respect for the process.
          </p>
        </div>

        {/* BottleStage floats in this right half */}
        <div className="flex-1" />

      </div>

    </section>
  )
}
