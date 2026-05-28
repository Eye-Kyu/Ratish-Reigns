import { useState, useRef, useEffect, useCallback } from 'react'
import gsap from 'gsap'
import emailjs from '@emailjs/browser'
import { useCart } from '../CartContext'
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_OWNER_TPL,
  EMAILJS_CUSTOMER_TPL,
  EMAILJS_PUBLIC_KEY,
  OWNER_EMAIL,
} from '../emailConfig'

const NAV_LINKS = [
  { label: 'Home',      href: '#hero'         },
  { label: 'Products',  href: '#product'      },
  { label: 'About',     href: '#about'        },
  { label: 'Our Story', href: '#story'        },
  { label: 'Community', href: '#tribe'        },
  { label: 'Contact',   href: '#footer'       },
]

type View = 'cart' | 'checkout' | 'confirmed'

const CloseIcon = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M17 5L5 17M5 5l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const [view, setView]         = useState<View>('cart')
  const [sending, setSending]   = useState(false)
  const [orderRef, setOrderRef] = useState('')

  // checkout form
  const [form, setForm] = useState({ name: '', phone: '', email: '', address: '' })
  const [errors, setErrors] = useState<Partial<typeof form>>({})

  const drawerRef = useRef<HTMLDivElement>(null)
  const cartRef   = useRef<HTMLDivElement>(null)
  const badgeRef  = useRef<HTMLSpanElement>(null)

  const { items, total, removeFromCart, increment, decrement, clearCart } = useCart()
  const cartCount = items.reduce((sum, i) => sum + i.qty, 0)

  // ── badge bounce on count change ──────────────────────────────────────────
  useEffect(() => {
    if (cartCount > 0 && badgeRef.current)
      gsap.fromTo(badgeRef.current, { scale: 1.8 }, { scale: 1, duration: 0.35, ease: 'back.out(2)' })
  }, [cartCount])

  // ── open animations ───────────────────────────────────────────────────────
  useEffect(() => {
    if (menuOpen && drawerRef.current)
      gsap.fromTo(drawerRef.current, { x: '-100%' }, { x: '0%', duration: 0.35, ease: 'power2.out' })
  }, [menuOpen])

  useEffect(() => {
    if (cartOpen && cartRef.current)
      gsap.fromTo(cartRef.current, { x: '100%' }, { x: '0%', duration: 0.35, ease: 'power2.out' })
  }, [cartOpen])

  // ── close helpers ─────────────────────────────────────────────────────────
  const closeMenu = useCallback(() => {
    if (drawerRef.current)
      gsap.to(drawerRef.current, { x: '-100%', duration: 0.25, ease: 'power2.in', onComplete: () => setMenuOpen(false) })
    else setMenuOpen(false)
  }, [])

  const closeCart = useCallback(() => {
    if (cartRef.current)
      gsap.to(cartRef.current, { x: '100%', duration: 0.25, ease: 'power2.in', onComplete: () => {
        setCartOpen(false)
        setView('cart')
        setForm({ name: '', phone: '', email: '', address: '' })
        setErrors({})
      }})
    else { setCartOpen(false); setView('cart') }
  }, [])

  // ── form validation + submit ───────────────────────────────────────────────
  const validate = () => {
    const e: Partial<typeof form> = {}
    if (!form.name.trim())    e.name    = 'Required'
    if (!form.phone.trim())   e.phone   = 'Required'
    else if (!/^\+?[\d\s\-]{7,}$/.test(form.phone)) e.phone = 'Enter a valid phone number'
    if (!form.email.trim())   e.email   = 'Required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.address.trim()) e.address = 'Required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleConfirm = async () => {
    if (!validate()) return
    setSending(true)

    const ref = `#RR-${Date.now()}`
    const orderLines = items
      .map(i => `${i.product.name} × ${i.qty} — KES ${(i.product.priceValue * i.qty).toLocaleString()}`)
      .join('\n')
    const totalStr = `KES ${total.toLocaleString()}`

    const templateVars = {
      order_ref:     ref,
      customer_name: form.name,
      phone:         form.phone,
      email:         form.email,
      address:       form.address,
      order_lines:   orderLines,
      total:         totalStr,
    }

    try {
      // Email to owner
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_OWNER_TPL,
        { ...templateVars, to_email: OWNER_EMAIL },
        EMAILJS_PUBLIC_KEY,
      )
      // Confirmation to customer
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CUSTOMER_TPL,
        { ...templateVars, to_email: form.email },
        EMAILJS_PUBLIC_KEY,
      )
      setOrderRef(ref)
      setView('confirmed')
      clearCart()
    } catch {
      alert('Could not send order. Please check your connection and try again.')
    } finally {
      setSending(false)
    }
  }

  const field = (key: keyof typeof form, label: string, type = 'text', placeholder = '') => (
    <div className="flex flex-col gap-1">
      <label className="font-inter text-xs text-gray-500 font-medium" style={{ letterSpacing: '0.04em' }}>
        {label} <span className="text-[#d4548a]">*</span>
      </label>
      <input
        type={type}
        value={form[key]}
        onChange={e => { setForm(f => ({ ...f, [key]: e.target.value })); setErrors(er => ({ ...er, [key]: undefined })) }}
        placeholder={placeholder}
        className="font-inter text-sm text-gray-800 border rounded-lg px-3 py-2 outline-none focus:border-[#254d32] transition-colors"
        style={{ borderColor: errors[key] ? '#d4548a' : '#e5e7eb' }}
      />
      {errors[key] && <span className="font-inter text-xs text-[#d4548a]">{errors[key]}</span>}
    </div>
  )

  return (
    <>
      {/* ── Navbar ────────────────────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 h-14 bg-[#0c6338] flex items-center justify-between px-6">

        <button
          onClick={() => setMenuOpen(true)}
          className="flex flex-col gap-[5px] p-1 cursor-pointer group"
          aria-label="Open navigation menu"
        >
          {[0, 1, 2].map(i => (
            <span key={i} className="block w-6 h-[2px] bg-white rounded-full transition-opacity group-hover:opacity-70" />
          ))}
        </button>

        <span className="font-modak text-[#fffdc7] whitespace-nowrap" style={{ fontSize: 'clamp(22px, 5vw, 36px)' }}>
          RATISH REIGNS
        </span>

        <button
          onClick={() => { setCartOpen(true); setView('cart') }}
          className="relative p-1 cursor-pointer hover:opacity-80 transition-opacity"
          aria-label={`Cart — ${cartCount} item${cartCount !== 1 ? 's' : ''}`}
        >
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path d="M2 3h3l1.5 9.5M5.5 7.5h15l-2 8H7.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="10" cy="21" r="1.5" fill="white" />
            <circle cx="18" cy="21" r="1.5" fill="white" />
          </svg>
          {cartCount > 0 && (
            <span
              ref={badgeRef}
              className="absolute -top-1 -right-1 bg-[#d4548a] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center font-inter"
            >
              {cartCount}
            </span>
          )}
        </button>
      </nav>

      {/* ── Nav Drawer ────────────────────────────────────────────────────── */}
      {menuOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[55] cursor-pointer" onClick={closeMenu} />
          <div ref={drawerRef} className="fixed left-0 top-0 h-full w-72 bg-[#0c6338] z-[60] flex flex-col p-8 shadow-2xl">
            <button onClick={closeMenu} className="self-end text-white/60 hover:text-white transition-colors mb-10" aria-label="Close menu">
              <CloseIcon />
            </button>
            <nav className="flex flex-col gap-7">
              {NAV_LINKS.map(({ label, href }) => (
                <a key={label} href={href} onClick={closeMenu} className="font-bagel text-white text-2xl hover:text-[#fffdc7] transition-colors">
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

      {/* ── Cart Sidebar ──────────────────────────────────────────────────── */}
      {cartOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-[55] cursor-pointer" onClick={closeCart} />
          <div ref={cartRef} className="fixed right-0 top-0 h-full w-full md:w-[400px] bg-white z-[60] flex flex-col shadow-2xl">

            {/* ── View 1: Cart ─────────────────────────────────────────────── */}
            {view === 'cart' && (
              <>
                <div className="p-6 border-b border-gray-100 flex items-center justify-between shrink-0">
                  <h2 className="font-bagel text-[#254d32] text-2xl m-0">Your Cart</h2>
                  <button onClick={closeCart} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close cart">
                    <CloseIcon />
                  </button>
                </div>

                {items.length === 0 ? (
                  <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" className="opacity-20">
                      <path d="M5 7h8l4 24M14 18h35l-5 20H19" stroke="#254d32" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="25" cy="50" r="3.5" fill="#254d32" />
                      <circle cx="42" cy="50" r="3.5" fill="#254d32" />
                    </svg>
                    <p className="font-bagel text-gray-300 text-xl m-0">Cart is empty</p>
                    <p className="font-inter text-gray-400 text-sm text-center m-0">Grab a bottle of Ratish Reigns!</p>
                  </div>
                ) : (
                  <div className="flex-1 overflow-y-auto px-6 py-2">
                    {items.map(item => (
                      <div key={item.product.name} className="flex items-center gap-3 py-4 border-b border-gray-100 last:border-0">
                        <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: item.product.accent }} />
                        <div className="flex-1 min-w-0">
                          <p className="font-bagel text-[#254d32] text-sm m-0 truncate">{item.product.name}</p>
                          <p className="font-inter text-gray-400 text-xs m-0">{item.product.size} · {item.product.vessel}</p>
                        </div>
                        <div className="flex items-center gap-1 shrink-0">
                          <button
                            onClick={() => decrement(item.product.name)}
                            className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 font-inter text-sm flex items-center justify-center cursor-pointer border-0 transition-colors"
                          >−</button>
                          <span className="font-inter text-sm w-5 text-center">{item.qty}</span>
                          <button
                            onClick={() => increment(item.product.name)}
                            className="w-6 h-6 rounded-full bg-gray-100 hover:bg-gray-200 font-inter text-sm flex items-center justify-center cursor-pointer border-0 transition-colors"
                          >+</button>
                        </div>
                        <span className="font-inter text-sm font-medium text-[#254d32] shrink-0">
                          KES {(item.product.priceValue * item.qty).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.product.name)}
                          className="text-gray-300 hover:text-[#d4548a] transition-colors font-inter text-lg cursor-pointer border-0 bg-transparent p-0 leading-none"
                          aria-label={`Remove ${item.product.name}`}
                        >×</button>
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-6 border-t border-gray-100 flex flex-col gap-3 shrink-0">
                  {items.length > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="font-inter text-sm text-gray-500">Subtotal</span>
                      <span className="font-bagel text-[#254d32] text-lg">KES {total.toLocaleString()}</span>
                    </div>
                  )}
                  <button
                    onClick={() => items.length > 0 && setView('checkout')}
                    disabled={items.length === 0}
                    className="w-full bg-[#254d32] text-white font-bagel text-lg py-3 rounded-full transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer border-0"
                    style={{ background: items.length > 0 ? '#254d32' : undefined }}
                    onMouseEnter={e => { if (items.length > 0) (e.target as HTMLElement).style.background = '#336744' }}
                    onMouseLeave={e => { if (items.length > 0) (e.target as HTMLElement).style.background = '#254d32' }}
                  >
                    Checkout →
                  </button>
                  <button onClick={closeCart} className="font-inter text-gray-400 text-sm hover:text-gray-600 transition-colors cursor-pointer border-0 bg-transparent text-center">
                    Continue Shopping
                  </button>
                </div>
              </>
            )}

            {/* ── View 2: Checkout form ─────────────────────────────────────── */}
            {view === 'checkout' && (
              <>
                <div className="p-6 border-b border-gray-100 flex items-center gap-3 shrink-0">
                  <button onClick={() => setView('cart')} className="text-gray-400 hover:text-gray-700 transition-colors cursor-pointer border-0 bg-transparent p-0" aria-label="Back to cart">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M12 5l-5 5 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <h2 className="font-bagel text-[#254d32] text-xl m-0 flex-1">Order Details</h2>
                  <button onClick={closeCart} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close cart">
                    <CloseIcon />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-5">
                  {/* Order summary (compact) */}
                  <div className="bg-gray-50 rounded-xl p-4 flex flex-col gap-2">
                    <p className="font-inter text-xs text-gray-400 uppercase tracking-widest m-0">Order Summary</p>
                    {items.map(item => (
                      <div key={item.product.name} className="flex justify-between items-center">
                        <span className="font-inter text-sm text-gray-700">
                          {item.product.name} × {item.qty}
                        </span>
                        <span className="font-inter text-sm font-medium text-[#254d32]">
                          KES {(item.product.priceValue * item.qty).toLocaleString()}
                        </span>
                      </div>
                    ))}
                    <div className="border-t border-gray-200 pt-2 flex justify-between">
                      <span className="font-bagel text-[#254d32] text-sm">Total</span>
                      <span className="font-bagel text-[#254d32]">KES {total.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Contact fields */}
                  <div className="flex flex-col gap-4">
                    <p className="font-inter text-xs text-gray-400 uppercase tracking-widest m-0">Your Details</p>
                    {field('name',    'Full Name',         'text',  'Jane Wanjiru')}
                    {field('phone',   'Phone Number',      'tel',   '+254 7XX XXX XXX')}
                    {field('email',   'Email Address',     'email', 'jane@example.com')}
                    {field('address', 'Delivery Address',  'text',  'Street, Estate, City')}
                  </div>

                  {/* Payment note */}
                  <div className="flex items-center gap-2 bg-[#f0faf4] rounded-xl px-4 py-3">
                    <span style={{ fontSize: '20px' }}>💳</span>
                    <p className="font-inter text-sm text-[#254d32] m-0">
                      <strong>Payment on delivery.</strong> We'll call to confirm before dispatch.
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100 shrink-0">
                  <button
                    onClick={handleConfirm}
                    disabled={sending}
                    className="w-full bg-[#254d32] text-white font-bagel text-lg py-3 rounded-full cursor-pointer border-0 transition-opacity disabled:opacity-60"
                    style={{ letterSpacing: '0.02em' }}
                  >
                    {sending ? 'Sending…' : 'Confirm Order →'}
                  </button>
                </div>
              </>
            )}

            {/* ── View 3: Confirmed ─────────────────────────────────────────── */}
            {view === 'confirmed' && (
              <>
                <div className="p-6 border-b border-gray-100 flex items-center justify-between shrink-0">
                  <h2 className="font-bagel text-[#254d32] text-2xl m-0">Order Placed!</h2>
                  <button onClick={closeCart} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label="Close">
                    <CloseIcon />
                  </button>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center gap-6 px-8 text-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ background: '#f0faf4' }}
                  >
                    <span style={{ fontSize: '32px' }}>✓</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="font-bagel text-[#254d32] text-xl m-0">Order Received</p>
                    <p className="font-inter text-gray-400 text-xs m-0" style={{ letterSpacing: '0.06em' }}>
                      {orderRef}
                    </p>
                  </div>
                  <p className="font-inter text-gray-600 text-sm leading-relaxed m-0">
                    We've sent a confirmation to <strong>{form.email}</strong>.
                    The Ratish Reigns team will call <strong>{form.phone}</strong> to confirm your delivery.
                  </p>
                  <div className="bg-[#f0faf4] rounded-xl px-4 py-3 w-full">
                    <p className="font-inter text-sm text-[#254d32] m-0">
                      💳 Payment on delivery — no upfront charge.
                    </p>
                  </div>
                </div>

                <div className="p-6 border-t border-gray-100 shrink-0">
                  <button
                    onClick={closeCart}
                    className="w-full bg-[#254d32] text-white font-bagel text-lg py-3 rounded-full cursor-pointer border-0 transition-opacity hover:opacity-85"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}

          </div>
        </>
      )}
    </>
  )
}
