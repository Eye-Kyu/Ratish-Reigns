import { useState } from 'react'

const ADVANTAGES = [
  {
    label: 'Energy Boost',
    emoji: '⚡',
    titleLine1: 'ENERGY',
    titleLine2: 'BOOST',
    rightDesc: 'No crash, no jitters. Just clean energy brewed the way your ancestors would approve of.',
    bottomDesc: 'One bottle. All-day fuel. ⚡',
  },
  {
    label: 'Healthy Microbes',
    emoji: '🦠',
    titleLine1: 'HEALTHY',
    titleLine2: 'MICROBES',
    rightDesc: 'Your gut is basically a second brain — feed it something alive.',
    bottomDesc: 'Live cultures, living your best life.',
  },
  {
    label: 'Plant Brewed',
    emoji: '🌿',
    titleLine1: 'PLANT',
    titleLine2: 'BREWED',
    rightDesc: '100% plant. Zero compromise. Your conscience is clear.',
    bottomDesc: 'From farm to fizz, nothing artificial.',
  },
  {
    label: 'Antioxidant',
    emoji: '🫐',
    titleLine1: 'ANTI-',
    titleLine2: 'OXIDANT',
    rightDesc: 'Fighting free radicals so you don\'t have to think about it.',
    bottomDesc: 'Sip back and let the good stuff work.',
  },
  {
    label: 'Probiotic',
    emoji: '🔬',
    titleLine1: 'PRO-',
    titleLine2: 'BIOTIC',
    rightDesc: 'The good bacteria your morning routine was missing.',
    bottomDesc: 'Gut health that actually tastes good.',
  },
]

export default function Advantages() {
  const [active, setActive] = useState(0)
  const adv = ADVANTAGES[active]

  return (
    <section
      id="advantages"
      className="min-h-screen md:h-screen w-full flex flex-col overflow-hidden py-12 md:py-0"
      style={{ background: 'radial-gradient(ellipse 60% 70% at 50% 55%, #3f7e52 0%, #2a5538 60%, #1e3d28 100%)' }}
    >

      {/* Pills row */}
      <div className="flex flex-wrap gap-3 md:gap-4 justify-center pt-8 md:pt-16 shrink-0 px-4">
        {ADVANTAGES.map((item, i) => (
          <button
            key={item.label}
            onClick={() => setActive(i)}
            className={[
              'px-4 md:px-5 h-9 md:h-10 rounded-full font-inter text-xs md:text-sm whitespace-nowrap cursor-pointer border-0 transition-all duration-300',
              i === active
                ? 'bg-[#d4548a] text-white shadow-lg shadow-pink-900/40 scale-105'
                : 'border border-white/40 bg-transparent text-white/70 hover:border-white/70 hover:text-white',
            ].join(' ')}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Middle row: left title | bottle glow space | right desc */}
      <div className="flex flex-col md:flex-row flex-1 items-center min-h-0 gap-6 md:gap-0 py-8 md:py-0">

        {/* Left: emoji + advantage title */}
        <div key={active} className="px-6 md:pl-[10%] w-full md:w-52 md:shrink-0 animate-adv-fade text-center md:text-left">
          <span className="text-3xl md:text-4xl block mb-2">{adv.emoji}</span>
          <div className="font-bagel text-white not-italic" style={{ fontSize: 'clamp(36px, 7vw, 96px)', lineHeight: '1.0' }}>
            <p style={{ margin: 0 }}>{adv.titleLine1}</p>
            <p style={{ margin: 0 }}>{adv.titleLine2}</p>
          </div>
        </div>

        {/* Center: bottle glow — visible on desktop only */}
        <div className="relative hidden md:flex flex-1 h-full items-center justify-center pointer-events-none">
          <div className="w-[280px] h-[480px] rounded-full bg-white/5 blur-[80px]" />
        </div>

        {/* Right: description */}
        <div key={`desc-${active}`} className="w-full md:w-60 px-6 md:pr-[10%] md:shrink-0 flex items-start animate-adv-fade text-center md:text-left" style={{ paddingTop: '0' }}>
          <p className="font-inter font-normal text-white/70 m-0" style={{ fontSize: 'clamp(13px, 1.4vw, 14px)', lineHeight: '1.6' }}>
            {adv.rightDesc}
          </p>
        </div>

      </div>

      {/* Bottom text */}
      <div className="flex justify-center pb-8 md:pb-16 shrink-0">
        <p
          key={`bottom-${active}`}
          className="font-bagel text-white/50 not-italic m-0 text-center animate-adv-fade"
          style={{ fontSize: 'clamp(13px, 1.6vw, 20px)' }}
        >
          {adv.bottomDesc}
        </p>
      </div>

    </section>
  )
}
