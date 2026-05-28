import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const REVIEWS = [
  {
    quote: "Honestly the best thing I've tasted at a community event. I took 3 bottles home.",
    name: 'Wanjiru M.',
    role: 'Nairobi',
    stars: 5,
  },
  {
    quote: "You can taste the craft in it. Nothing artificial, nothing rushed. Just pure.",
    name: 'Koech D.',
    role: 'Eldoret',
    stars: 5,
  },
  {
    quote: "I grew up with something similar at home. This is better. And that's saying a lot.",
    name: 'Amina S.',
    role: 'Mombasa',
    stars: 5,
  },
]

const TICKER_TEXT = '100% NATURAL · FARM TO BOTTLE · AGED TO PERFECTION · SMALL BATCH · NATURALLY BREWED · '

export default function Testimonials() {
  const sectionRef  = useRef<HTMLElement>(null)
  const tickerRef   = useRef<HTMLDivElement>(null)
  const tickerTween = useRef<gsap.core.Tween | null>(null)

  useEffect(() => {
    const section = sectionRef.current!
    const ticker  = tickerRef.current!
    const ctx = gsap.context(() => {

      // Cards stagger in on scroll
      gsap.from('.review-card', {
        opacity: 0, y: 80, stagger: 0.18, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
          toggleActions: 'play none none reset',
        },
      })

      // Watermark label
      gsap.from('.testimonials-label', {
        opacity: 0, y: -20, duration: 1, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%' },
      })

    }, section)

    // Infinite marquee — duplicated DOM, GSAP drives the x
    const singleWidth = ticker.scrollWidth / 2
    tickerTween.current = gsap.to(ticker, {
      x: -singleWidth,
      duration: 22,
      ease: 'none',
      repeat: -1,
    })

    return () => {
      ctx.revert()
      tickerTween.current?.kill()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="min-h-screen w-full flex flex-col overflow-hidden"
      style={{ background: '#f5ede0' }}
    >
      {/* Watermark heading */}
      <div className="testimonials-label flex justify-center pt-14 shrink-0 select-none pointer-events-none">
        <h2
          className="font-bagel not-italic"
          style={{
            fontSize: 'clamp(24px, 5.5vw, 80px)',
            color: 'rgba(26,45,26,0.10)',
            lineHeight: '1.0',
          }}
        >
          WHAT PEOPLE SAY
        </h2>
      </div>

      {/* Review cards */}
      <div className="flex-1 flex flex-col md:flex-row items-center justify-center gap-6 px-5 md:px-[5%] py-6 md:py-0 min-h-0 overflow-y-auto md:overflow-visible">
        {REVIEWS.map((r) => (
          <div
            key={r.name}
            className="review-card bg-white rounded-[32px] p-8 shadow-xl flex flex-col gap-4"
            style={{ maxWidth: '340px', width: '100%' }}
          >
            {/* Stars */}
            <div className="flex gap-1">
              {Array.from({ length: r.stars }).map((_, i) => (
                <span key={i} style={{ color: '#d4548a', fontSize: '18px' }}>★</span>
              ))}
            </div>

            {/* Quote */}
            <p
              className="font-inter m-0 flex-1"
              style={{ fontSize: '15px', lineHeight: '1.65', color: '#1a2d1a' }}
            >
              "{r.quote}"
            </p>

            {/* Author */}
            <div className="flex flex-col gap-0.5 pt-2 border-t border-black/6">
              <span
                className="font-bagel not-italic"
                style={{ fontSize: '18px', color: '#254d32', lineHeight: '1.1' }}
              >
                {r.name}
              </span>
              <span
                className="font-inter"
                style={{ fontSize: '12px', color: '#1a2d1a', opacity: 0.45, letterSpacing: '0.06em' }}
              >
                {r.role}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Marquee ticker */}
      <div className="shrink-0 overflow-hidden py-4 border-t border-black/8">
        <div ref={tickerRef} className="flex whitespace-nowrap" style={{ willChange: 'transform' }}>
          {/* Duplicate so the reset is seamless */}
          {[0, 1].map((key) => (
            <span
              key={key}
              className="font-bagel not-italic shrink-0 pr-0"
              style={{ fontSize: '14px', letterSpacing: '0.12em', color: '#254d32', opacity: 0.5 }}
            >
              {TICKER_TEXT}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
