import { useState, useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'

const NAV_LINKS = [
  { label: 'Home',     href: '#hero'    },
  { label: 'Products', href: '#product' },
  { label: 'About',    href: '#about'   },
  { label: 'Contact',  href: '#footer'  },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen]   = useState(false)
  const [cartOpen, setCartOpen]   = useState(false)
  const [cartCount]               = useState(0)
  const drawerRef = useRef<HTMLDivElement>(null)
  const cartRef   = useRef<HTMLDivElement>(null)

  // ── open animations ────────────────────────────────────────────────────────
  useEffect(() => {
    if (menuOpen && drawerRef.current)
      gsap.fromTo(drawerRef.current, { x: '-100%' }, { x: '0%', duration: 0.35, ease: 'power2.out' })
  }, [menuOpen])

  useEffect(() => {
    if (cartOpen && cartRef.current)
      gsap.fromTo(cartRef.current, { x: '100%' }, { x: '0%', duration: 0.35, ease: 'power2.out' })
  }, [cartOpen])

  // ── close helpers (animate-out then unmount) ───────────────────────────────
  const closeMenu = useCallback(() => {
    if (drawerRef.current)
      gsap.to(drawerRef.current, { x: '-100%', duration: 0.25, ease: 'power2.in', onComplete: () => setMenuOpen(false) })
    else setMenuOpen(false)
  }, [])

  const closeCart = useCallback(() => {
    if (cartRef.current)
      gsap.to(cartRef.current, { x: '100%', duration: 0.25, ease: 'power2.in', onComplete: () => setCartOpen(false) })
    else setCartOpen(false)
  }, [])

  return (
    <>
      {/* ── Navbar bar ──────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 h-14 bg-[#0c6338] flex items-center justify-between px-6">

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-[5px] p-1 cursor-pointer group"
          aria-label="Open navigation menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} className="block w-6 h-[2px] bg-white rounded-full transition-opacity group-hover:opacity-70" />
          ))}
        </button>

        {/* Brand */}
        <span className="font-modak text-[#fffdc7] whitespace-nowrap" style={{ fontSize: '36px' }}>
          RATISH REIGNS
        </span>

        {/* Cart */}
        <button
          onClick={() => setCartOpen(true)}
          className="relative p-1 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label={`Cart — ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M2 3h3l1.5 9.5M5.5 7.5h15l-2 8H7.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="21" r="1.5" fill="white" />
            <circle cx="18" cy="21" r="1.5" fill="white" />
          </svg>
          {cartCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center font-inter">
              {cartCount}
            </span>
          )}
        </button>
      </nav>

      {/* ── Nav Drawer ──────────────────────────────────────────────────────── */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[55] cursor-pointer" onClick={closeMenu} />
          <div
            ref={drawerRef}
            className="fixed left-0 top-0 h-full w-72 bg-[#0c6338] z-[60] flex flex-col p-8 shadow-2xl"
          >
            <button
              onClick={closeMenu}
              className="self-end text-white/60 hover:text-white transition-colors mb-10"
              aria-label="Close menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M17 5L5 17M5 5l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
            <nav className="flex flex-col gap-7">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMenu}
                  className="font-bagel text-white text-2xl hover:text-[#fffdc7] transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-white/20">
              <p className="font-inter text-white/40 text-xs">© 2025 Ratish Reigns</p>
            </div>
          </div>
        </>
      )}

      {/* ── Cart Sidebar ────────────────────────────────────────────────────── */}
      {cartOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[55] cursor-pointer" onClick={closeCart} />
          <div
            ref={cartRef}
            className="fixed right-0 top-0 h-full w-80 bg-white z-[60] flex flex-col shadow-2xl"
          >
            <div className="p-6 border-b border-gray-100 flex items-center justify-between shrink-0">
              <h2 className="font-bagel text-[#254d32] text-2xl m-0">Your Cart</h2>
              <button onClick={closeCart} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close cart">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M17 5L5 17M5 5l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="opacity-20">
                <path d="M5 7h8l4 24M14 18h35l-5 20H19" stroke="#254d32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="25" cy="50" r="3.5" fill="#254d32" />
                <circle cx="42" cy="50" r="3.5" fill="#254d32" />
              </svg>
              <p className="font-bagel text-gray-300 text-xl m-0">Cart is empty</p>
              <p className="font-inter text-gray-400 text-sm text-center m-0">
                Grab a bottle of Ratish Reigns!
              </p>
            </div>

            <div className="p-6 border-t border-gray-100 shrink-0">
              <button
                onClick={closeCart}
                className="w-full bg-[#254d32] text-white font-bagel text-lg py-3 rounded-full hover:bg-[#336744] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      )}
    </>
  )
}
