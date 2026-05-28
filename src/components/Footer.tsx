import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const NAV_LINKS = [
  { label: 'Home',       href: '#hero'         },
  { label: 'Benefits',   href: '#advantages'   },
  { label: 'Features',   href: '#features'     },
  { label: 'Shop',       href: '#product'      },
  { label: 'Our Story',  href: '#story'        },
  { label: 'Community',  href: '#tribe'        },
]

const SOCIALS = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: '#',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.73a8.18 8.18 0 0 0 4.78 1.52V6.8a4.85 4.85 0 0 1-1.01-.11z" />
      </svg>
    ),
  },
]

export default function Footer() {
  const footerRef   = useRef<HTMLElement>(null)
  const wordmarkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const footer = footerRef.current!
    const ctx = gsap.context(() => {
      // Wordmark slides up
      gsap.from(wordmarkRef.current, {
        y: 60, opacity: 0, duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: footer, start: 'top 80%' },
      })

      // Meta row — stagger links
      gsap.from('.footer-link', {
        y: 20, opacity: 0, stagger: 0.07, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: footer, start: 'top 75%' },
      })

      // Socials
      gsap.from('.footer-social', {
        scale: 0.6, opacity: 0, stagger: 0.1, duration: 0.5, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: footer, start: 'top 70%' },
      })
    }, footer)

    return () => ctx.revert()
  }, [])

  return (
    <footer
      ref={footerRef}
      id="footer"
      className="w-full flex flex-col"
      style={{ background: '#080e0a', minHeight: '100vh' }}
    >
      {/* Big wordmark — fills upper portion */}
      <div
        ref={wordmarkRef}
        className="flex-1 flex items-end px-6 md:px-[5%] pb-4 select-none"
        style={{ minHeight: '50vh' }}
      >
        <h1
          className="font-modak m-0 leading-none"
          style={{
            fontSize: 'clamp(48px, 13vw, 200px)',
            color: '#fffdc7',
            letterSpacing: '-0.02em',
          }}
        >
          RATISH<br />REIGNS
        </h1>
      </div>

      {/* Meta row — tagline | links | socials */}
      <div className="px-6 md:px-[5%] py-6 flex flex-col md:flex-row items-start gap-8 md:gap-16 flex-wrap">
        {/* Tagline */}
        <div className="flex flex-col gap-1 shrink-0 max-w-full md:max-w-[220px]">
          <p
            className="font-inter text-white/40 m-0"
            style={{ fontSize: '12px', lineHeight: '1.6', letterSpacing: '0.04em' }}
          >
            From Sacred Groves to Modern Cheers. Brewed in Kenya since 2013.
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-x-8 gap-y-3 flex-1">
          {NAV_LINKS.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="footer-link font-inter text-white/45 hover:text-white transition-colors"
              style={{ fontSize: '13px', letterSpacing: '0.04em', textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="flex gap-4 shrink-0">
          {SOCIALS.map(s => (
            <a
              key={s.name}
              href={s.href}
              className="footer-social flex items-center justify-center text-white/40 hover:text-[#fffdc7] transition-colors"
              aria-label={s.name}
              style={{ width: '40px', height: '40px' }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-6 md:mx-[5%] border-t border-white/8" />

      {/* Copyright */}
      <div className="px-6 md:px-[5%] py-6 flex items-center justify-between flex-wrap gap-4">
        <p className="font-inter text-white/25 m-0" style={{ fontSize: '11px', letterSpacing: '0.06em' }}>
          © 2025 Ratish Reigns. All rights reserved.
        </p>
        <p className="font-inter text-white/20 m-0" style={{ fontSize: '11px', letterSpacing: '0.06em' }}>
          CRAFTED IN KENYA
        </p>
      </div>
    </footer>
  )
}
