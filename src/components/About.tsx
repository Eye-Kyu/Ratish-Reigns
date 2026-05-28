import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: 12,   suffix: '+', label: 'Years\nBrewing'      },
  { value: 5000, suffix: '+', label: 'Bottles\nSold'        },
  { value: 80,   suffix: '+', label: 'Communities\nServed'  },
]

const VALUES = [
  { word: 'HERITAGE',  desc: 'Rooted in centuries of ancestral brewing tradition.' },
  { word: 'CRAFT',     desc: 'Every bottle is slow-fermented, never rushed.' },
  { word: 'COMMUNITY', desc: 'Made for the gathering. Shared, never hoarded.' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current!
    const ctx = gsap.context(() => {
      // Stat counters — count up from 0 when section enters view
      STATS.forEach((stat, i) => {
        const el = section.querySelector<HTMLElement>(`[data-stat="${i}"]`)!
        const obj = { val: 0 }
        gsap.to(obj, {
          val: stat.value,
          duration: 1.8,
          ease: 'power2.out',
          snap: { val: 1 },
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reset',
          },
          onUpdate() { el.textContent = Math.round(obj.val) + stat.suffix },
        })
      })

      // Values cards — stagger in
      gsap.from('.value-card', {
        y: 60, opacity: 0, stagger: 0.18, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 65%' },
      })

      // Quote — fade up
      gsap.from('.about-quote', {
        y: 30, opacity: 0, duration: 0.9, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 50%' },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center bg-[#2a4a35]"
    >
      {/* Main content row */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 px-6 md:px-[8%] flex-1 min-h-0 py-12 md:py-0">

        {/* Left — stat counters */}
        <div className="flex flex-col gap-10 shrink-0">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex flex-col">
              <span
                data-stat={i}
                className="font-bagel text-[#fffdc7] not-italic leading-none"
                style={{ fontSize: 'clamp(36px, 6vw, 88px)' }}
              >
                0{stat.suffix}
              </span>
              <span
                className="font-inter text-white/50 whitespace-pre-line mt-1"
                style={{ fontSize: '13px', lineHeight: '1.4', letterSpacing: '0.08em' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Divider — desktop only */}
        <div className="hidden md:block w-px self-stretch bg-white/10 shrink-0 my-12" />

        {/* Right — values cards */}
        <div className="flex flex-col gap-4 flex-1">
          {VALUES.map(v => (
            <div
              key={v.word}
              className="value-card bg-white/10 backdrop-blur-sm rounded-[24px] p-6 flex flex-col gap-2"
            >
              <span
                className="font-bagel text-white not-italic"
                style={{ fontSize: 'clamp(22px, 2.4vw, 34px)', lineHeight: '1.0' }}
              >
                {v.word}
              </span>
              <span className="font-inter text-white/55" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                {v.desc}
              </span>
            </div>
          ))}
        </div>

      </div>

      {/* Quote — bottom strip */}
      <div className="about-quote px-6 md:px-[8%] pb-10 md:pb-12 shrink-0">
        <p
          className="font-inter text-white/35 italic m-0"
          style={{ fontSize: 'clamp(13px, 1.4vw, 18px)', lineHeight: '1.5', maxWidth: '680px' }}
        >
          "A bridge between generations, nurturing friendship, culture, and celebration
          in every meaningful community gathering and ceremony."
        </p>
      </div>
    </section>
  )
}
