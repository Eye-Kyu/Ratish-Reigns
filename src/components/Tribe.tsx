import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Tribe() {
  const sectionRef = useRef<HTMLElement>(null)
  const [email, setEmail] = useState('')
  const [joined, setJoined] = useState(false)

  useEffect(() => {
    const section = sectionRef.current!
    const ctx = gsap.context(() => {
      // Heading lines slide in from left, staggered
      gsap.from('.tribe-line', {
        x: -140, opacity: 0,
        stagger: 0.14,
        duration: 0.85,
        ease: 'power3.out',
        scrollTrigger: { trigger: section, start: 'top 60%', toggleActions: 'play none none reset' },
      })

      // Form + sub-text slide up
      gsap.from('.tribe-form-row', {
        y: 40, opacity: 0,
        duration: 0.75,
        ease: 'power2.out',
        delay: 0.45,
        scrollTrigger: { trigger: section, start: 'top 60%', toggleActions: 'play none none reset' },
      })

      gsap.from('.tribe-sub', {
        y: 20, opacity: 0,
        duration: 0.6,
        ease: 'power2.out',
        delay: 0.65,
        scrollTrigger: { trigger: section, start: 'top 60%', toggleActions: 'play none none reset' },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setJoined(true)
  }

  return (
    <section
      ref={sectionRef}
      id="tribe"
      className="h-screen w-full flex flex-col justify-center overflow-hidden"
      style={{ background: '#0d1510' }}
    >
      <div className="px-[8%] flex flex-col gap-10">

        {/* Heading — 3 staggered lines */}
        <div className="flex flex-col gap-0 leading-none overflow-hidden">
          {['JOIN', 'THE', 'TRIBE.'].map((word, i) => (
            <div key={word} className="overflow-hidden">
              <span
                className="tribe-line font-bagel text-white not-italic inline-block"
                style={{
                  fontSize: 'clamp(60px, 10vw, 140px)',
                  lineHeight: '1.0',
                  paddingLeft: `${i * 1.8}em`,
                  color: i === 2 ? '#d4548a' : 'white',
                }}
              >
                {word}
              </span>
            </div>
          ))}
        </div>

        {/* Email form */}
        {!joined ? (
          <form
            className="tribe-form-row flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-[560px]"
            onSubmit={handleJoin}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 font-inter text-white rounded-full px-6 py-3 outline-none focus:border-[#d4548a] transition-colors"
              style={{
                fontSize: '15px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            />
            <button
              type="submit"
              className="font-bagel not-italic text-white rounded-full px-8 py-3 transition-opacity hover:opacity-80 cursor-pointer border-0"
              style={{ fontSize: '17px', background: '#d4548a' }}
            >
              JOIN →
            </button>
          </form>
        ) : (
          <div
            className="tribe-form-row font-bagel not-italic text-[#d4548a]"
            style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
          >
            Welcome to the tribe. ✓
          </div>
        )}

        {/* Sub-text */}
        <p
          className="tribe-sub font-inter text-white/30 m-0"
          style={{ fontSize: '13px', letterSpacing: '0.04em' }}
        >
          Already 2,400+ members brewing with us. No spam, ever.
        </p>

      </div>

      {/* Decorative bottom bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(to right, #d4548a, #7a3d7a, transparent)' }}
      />
    </section>
  )
}
