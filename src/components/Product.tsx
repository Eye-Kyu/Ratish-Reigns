import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bottleTexture from '../assets/images/bottle.jpg'
import { productBridge } from '../productBridge'

gsap.registerPlugin(ScrollTrigger)

const SPACING = 7
const N = 6

const PRODUCTS = [
  { name: 'RATISH ORIGINAL', tagline: 'THE ONE THAT STARTED IT ALL.',  size: '1 Litre',  vessel: 'Glass Bottle',  price: 'KES 450', accent: '#fffdc7' },
  { name: 'RATISH LITE',     tagline: 'LIGHT BODY. HEAVY FLAVOUR.',    size: '500ml',    vessel: 'Glass Bottle',  price: 'KES 250', accent: '#a8e6cf' },
  { name: 'RATISH CLASSIC',  tagline: 'SMOOTH. RICH. TIMELESS.',       size: '750ml',    vessel: 'Glass Bottle',  price: 'KES 350', accent: '#ffd3a5' },
  { name: 'RATISH SPICED',   tagline: 'BOLD SPICE FOR BOLD SOULS.',    size: '1 Litre',  vessel: 'Ceramic Jug',   price: 'KES 600', accent: '#ffb3c6' },
  { name: 'RATISH GOLD',     tagline: 'AGED LONGER. TASTES BETTER.',   size: '1 Litre',  vessel: 'Premium Glass', price: 'KES 850', accent: '#ffd700' },
  { name: 'RATISH RESERVE',  tagline: 'FOR THE ONES WHO KNOW.',        size: '2 Litres', vessel: 'Glass Bottle',  price: 'KES 900', accent: '#c3b1e1' },
]

const SLIDE_BG     = ['#254d32', '#1e3d28', '#2a5538', '#2d2820', '#1e2d1e', '#1a1f2e']
const GLASS_COLORS = [0x3d7a50,  0x2d6a5a,  0x4a6a3d,  0x7a3d3d,  0x7a6a3d,  0x3d4d7a]

type BottleRef = {
  glassMat: THREE.MeshPhysicalMaterial
  labelMat: THREE.MeshBasicMaterial
  rotGroup: THREE.Group
  floatGroup: THREE.Group
}

export default function Product() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)
  const mountRef   = useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const section = sectionRef.current!
    const track   = trackRef.current!
    const mount   = mountRef.current!

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.appendChild(renderer.domElement)

    // ── Scene / Camera ────────────────────────────────────────────────────────
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 200)
    camera.position.set(0, 0.4, 5.5)

    // ── Lights ────────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.9))
    const key  = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(3, 5, 5);   scene.add(key)
    const rim  = new THREE.DirectionalLight(0x99ffbb, 0.7); rim.position.set(-4, 2, -3); scene.add(rim)
    const fill = new THREE.DirectionalLight(0xffeedd, 0.4); fill.position.set(0, -3, 4); scene.add(fill)

    // ── Shared geometry + texture ─────────────────────────────────────────────
    const profile = [
      new THREE.Vector2(0.000, 0.00), new THREE.Vector2(0.360, 0.00),
      new THREE.Vector2(0.370, 0.06), new THREE.Vector2(0.340, 0.14),
      new THREE.Vector2(0.310, 0.50), new THREE.Vector2(0.300, 1.05),
      new THREE.Vector2(0.300, 1.42), new THREE.Vector2(0.230, 1.68),
      new THREE.Vector2(0.130, 1.96), new THREE.Vector2(0.115, 2.30),
      new THREE.Vector2(0.130, 2.37), new THREE.Vector2(0.090, 2.44),
    ]
    const bodyGeo  = new THREE.LatheGeometry(profile, 80)
    const labelGeo = new THREE.CylinderGeometry(0.308, 0.308, 0.88, 80, 1, true)
    const loader   = new THREE.TextureLoader()
    const tex      = loader.load(bottleTexture)
    tex.wrapS      = THREE.RepeatWrapping
    tex.colorSpace = THREE.SRGBColorSpace

    // ── 6 bottle instances (shared geometry, individual materials) ─────────────
    const bottles: BottleRef[] = PRODUCTS.map((_, i) => {
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: GLASS_COLORS[i], metalness: 0.05, roughness: 0.07,
        transmission: 0.55, thickness: 0.9, transparent: true, opacity: 0, ior: 1.52,
      })
      const labelMat = new THREE.MeshBasicMaterial({
        map: tex, transparent: true, side: THREE.FrontSide, depthWrite: false, opacity: 0,
      })

      const floatGroup = new THREE.Group()
      const bottleMesh = new THREE.Mesh(bodyGeo, glassMat)
      bottleMesh.position.y = -1.22
      const labelMesh = new THREE.Mesh(labelGeo, labelMat)
      labelMesh.position.y = -0.46
      floatGroup.add(bottleMesh, labelMesh)

      const rotGroup = new THREE.Group()
      rotGroup.add(floatGroup)

      const posGroup = new THREE.Group()
      posGroup.add(rotGroup)
      // Each bottle sits in the right half of its card (1.5 units right of slide centre)
      posGroup.position.set(i * SPACING + 1.5, 0, 0)
      posGroup.scale.setScalar(0.75)
      scene.add(posGroup)

      return { glassMat, labelMat, rotGroup, floatGroup }
    })

    // ── Idle animations (staggered so bottles feel independent) ───────────────
    const spinTweens  = bottles.map(({ rotGroup }, i) =>
      gsap.to(rotGroup.rotation, { y: Math.PI * 2, duration: 10, repeat: -1, ease: 'none', delay: i * 1.1 })
    )
    const floatTweens = bottles.map(({ floatGroup }, i) =>
      gsap.to(floatGroup.position, { y: 0.18, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: i * 0.45 })
    )

    // ── Crossfade helpers ─────────────────────────────────────────────────────
    const showBottles = (stagger = 0.08) => {
      bottles.forEach(({ glassMat, labelMat }, i) => {
        gsap.to(glassMat, { opacity: 0.88, duration: 0.4, delay: i * stagger })
        gsap.to(labelMat, { opacity: 1,    duration: 0.4, delay: i * stagger })
      })
    }
    const hideBottles = () => {
      bottles.forEach(({ glassMat, labelMat }) => {
        gsap.to(glassMat, { opacity: 0, duration: 0.3 })
        gsap.to(labelMat, { opacity: 0, duration: 0.3 })
      })
    }

    // ── ScrollTrigger — pin + HTML track + camera sync ────────────────────────
    const trackTween = gsap.to(track, {
      x: () => -(N - 1) * window.innerWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${(N - 1) * window.innerWidth}`,
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter() {
          // Hand-off from BottleStage: fade its bottle out, fade ours in
          productBridge.onEnter()
          showBottles(0.08)
        },
        onLeave() {
          // Last slide done — hand back to BottleStage for the About section
          hideBottles()
          productBridge.onLeave()
        },
        onEnterBack() {
          productBridge.onEnter()
          showBottles(0)
        },
        onLeaveBack() {
          hideBottles()
          productBridge.onLeave()
        },
        onUpdate({ progress }) {
          setActiveSlide(Math.round(progress * (N - 1)))
        },
      },
    })

    // ── Render loop — camera X derived from scrubbed track position ───────────
    // Reading from the tween's current value keeps camera in sync with the
    // scrub lag (scrub:1), so bottle and card always move together.
    let rafId: number
    const tick = () => {
      rafId = requestAnimationFrame(tick)
      const trackX = gsap.getProperty(track, 'x') as number
      const p = Math.max(0, Math.min(1, -trackX / Math.max(1, (N - 1) * window.innerWidth)))
      camera.position.x = p * (N - 1) * SPACING
      camera.lookAt(camera.position.x, 0.4, 0)
      renderer.render(scene, camera)
    }
    tick()

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      spinTweens.forEach(t => t.kill())
      floatTweens.forEach(t => t.kill())
      trackTween.scrollTrigger?.kill()
      trackTween.kill()
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
      bodyGeo.dispose(); labelGeo.dispose(); tex.dispose()
      bottles.forEach(({ glassMat, labelMat }) => { glassMat.dispose(); labelMat.dispose() })
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="product"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Single Three.js canvas — all 6 bottles render here */}
      <div ref={mountRef} className="absolute inset-0 z-[1] pointer-events-none" aria-hidden />

      {/* Horizontal HTML track — slides left as scroll progresses */}
      <div
        ref={trackRef}
        className="relative z-[2] flex h-full"
        style={{ width: `${N * 100}vw` }}
      >
        {PRODUCTS.map((p, i) => (
          <div key={p.name} className="w-screen h-full flex-shrink-0 flex">

            {/* Left half — opaque background masks any off-screen bottles */}
            <div
              className="w-1/2 flex flex-col justify-center pl-[10%] gap-3"
              style={{ background: SLIDE_BG[i] }}
            >
              <p
                className="font-modak m-0"
                style={{ fontSize: '28px', lineHeight: 'normal', color: p.accent }}
              >
                RATISH REIGNS
              </p>
              <h2
                className="font-bagel text-white not-italic m-0"
                style={{ fontSize: 'clamp(38px, 4.8vw, 70px)', lineHeight: '1.0' }}
              >
                {p.name}
              </h2>
              <p
                className="font-inter text-white/60 m-0"
                style={{ fontSize: '16px', lineHeight: '1.4', fontStyle: 'italic' }}
              >
                {p.tagline}
              </p>
              <p
                className="font-inter text-white/40 m-0"
                style={{ fontSize: '13px', letterSpacing: '0.06em' }}
              >
                {p.size} · {p.vessel}
              </p>
              <div className="flex items-center gap-5 mt-1">
                <span
                  className="font-bagel not-italic"
                  style={{ fontSize: '30px', color: p.accent }}
                >
                  {p.price}
                </span>
                <button
                  className="font-inter font-medium rounded-full px-6 py-2 cursor-pointer border-0 transition-opacity hover:opacity-80"
                  style={{ fontSize: '14px', background: p.accent, color: '#1a2d1a', letterSpacing: '0.04em' }}
                >
                  BUY NOW
                </button>
              </div>
            </div>

            {/* Right half — transparent so the canvas bottle shows through */}
            <div className="w-1/2 relative" style={{ background: SLIDE_BG[i] }}>
              <div
                className="absolute left-1/2 -translate-x-1/2 text-center pointer-events-none"
                style={{ top: '72%', fontSize: '13px', letterSpacing: '0.06em', lineHeight: '1.6' }}
              >
                <p className="font-inter text-white/40 m-0">{p.size}</p>
                <p className="font-inter text-white/40 m-0">{p.vessel}</p>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10 pointer-events-none">
        {PRODUCTS.map((_, i) => (
          <div
            key={i}
            className="rounded-full transition-all duration-300"
            style={{
              width: i === activeSlide ? '20px' : '8px',
              height: '8px',
              background: i === activeSlide
                ? PRODUCTS[activeSlide].accent
                : 'rgba(255,255,255,0.25)',
            }}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div
        className="absolute right-8 top-1/2 -translate-y-1/2 font-inter text-white/30 z-10 pointer-events-none select-none"
        style={{ fontSize: '11px', letterSpacing: '0.2em', writingMode: 'vertical-rl' }}
      >
        SCROLL TO EXPLORE
      </div>
    </section>
  )
}
