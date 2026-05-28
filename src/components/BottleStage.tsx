import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bottleTexture from '../assets/images/bottle.jpg'
import { productBridge } from '../productBridge'

gsap.registerPlugin(ScrollTrigger)

// ── Section states — desktop ──────────────────────────────────────────────────
// Calibrated to the flex-layout section positions (left-half / centre / right)
// at a typical 1440–1920 px desktop. x: world units (left ≈ -3.5, right ≈ +3.5)
const STATES = [
  { id: '#hero',         x: -1.5, scale: 1.00, rotZ:  0      }, // left half
  { id: '#advantages',   x:  0.0, scale: 0.85, rotZ:  0      }, // centre
  { id: '#features',     x:  1.8, scale: 0.65, rotZ: -0.383  }, // right 42%, -22deg
  { id: '#product',      x:  1.5, scale: 0.75, rotZ:  0      }, // right half
  { id: '#about',        x:  0.0, scale: 0.25, rotZ:  0      }, // small, centred
  { id: '#story',        x:  1.2, scale: 0.22, rotZ:  0.10   }, // small, right
  { id: '#testimonials', x:  0.0, scale: 0.00, rotZ:  0      }, // hidden (cream bg)
  { id: '#tribe',        x: -1.0, scale: 0.18, rotZ: -0.10   }, // small, left
  { id: '#footer',       x:  0.0, scale: 0.00, rotZ:  0      }, // hidden
]

// ── Section states — mobile ───────────────────────────────────────────────────
// All centred (x: 0) at smaller scales so the bottle floats in the middle of
// each stacked section without overlapping text content.
const MOBILE_STATES = [
  { id: '#hero',         x:  0.0, scale: 0.70, rotZ:  0 },
  { id: '#advantages',   x:  0.0, scale: 0.60, rotZ:  0 },
  { id: '#features',     x:  0.0, scale: 0.45, rotZ:  0 },
  { id: '#product',      x:  0.0, scale: 0.00, rotZ:  0 }, // Product has its own canvas
  { id: '#about',        x:  0.0, scale: 0.20, rotZ:  0 },
  { id: '#story',        x:  0.0, scale: 0.16, rotZ:  0 },
  { id: '#testimonials', x:  0.0, scale: 0.00, rotZ:  0 },
  { id: '#tribe',        x:  0.0, scale: 0.13, rotZ:  0 },
  { id: '#footer',       x:  0.0, scale: 0.00, rotZ:  0 },
]

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export default function BottleStage() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current!
    const isMobile = window.innerWidth < 768
    const ACTIVE_STATES = isMobile ? MOBILE_STATES : STATES

    // ── Renderer ──────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)
    mount.appendChild(renderer.domElement)

    // ── Scene / Camera ────────────────────────────────────────────────────────
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.set(0, 0.4, 5.5)
    camera.lookAt(0, 0.4, 0)

    // ── Lights ────────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.9))
    const key  = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(3, 5, 5);   scene.add(key)
    const rim  = new THREE.DirectionalLight(0x99ffbb, 0.7); rim.position.set(-4, 2, -3); scene.add(rim)
    const fill = new THREE.DirectionalLight(0xffeedd, 0.4); fill.position.set(0, -3, 4); scene.add(fill)

    // ── Group hierarchy ───────────────────────────────────────────────────────
    // posGroup   → section X position + uniform scale  (lerp-driven by ScrollTrigger)
    // rotGroup   → idle Y spin + scroll X tilt + section Z rotation
    // floatGroup → float Y oscillation
    const posGroup   = new THREE.Group()
    const rotGroup   = new THREE.Group()
    const floatGroup = new THREE.Group()
    posGroup.add(rotGroup)
    rotGroup.add(floatGroup)
    scene.add(posGroup)

    // initialise to hero state so the bottle is correct on first paint
    posGroup.position.x = ACTIVE_STATES[0].x
    posGroup.scale.setScalar(ACTIVE_STATES[0].scale)
    rotGroup.rotation.z = ACTIVE_STATES[0].rotZ

    // ── Bottle geometry ───────────────────────────────────────────────────────
    const profile = [
      new THREE.Vector2(0.000, 0.00), new THREE.Vector2(0.360, 0.00),
      new THREE.Vector2(0.370, 0.06), new THREE.Vector2(0.340, 0.14),
      new THREE.Vector2(0.310, 0.50), new THREE.Vector2(0.300, 1.05),
      new THREE.Vector2(0.300, 1.42), new THREE.Vector2(0.230, 1.68),
      new THREE.Vector2(0.130, 1.96), new THREE.Vector2(0.115, 2.30),
      new THREE.Vector2(0.130, 2.37), new THREE.Vector2(0.090, 2.44),
    ]
    const bodyGeo  = new THREE.LatheGeometry(profile, 80)
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x3d7a50, metalness: 0.05, roughness: 0.07,
      transmission: 0.55, thickness: 0.9, transparent: true, opacity: 0.88, ior: 1.52,
    })
    const bottleMesh = new THREE.Mesh(bodyGeo, glassMat)
    bottleMesh.position.y = -1.22
    floatGroup.add(bottleMesh)

    // ── Label ─────────────────────────────────────────────────────────────────
    const loader   = new THREE.TextureLoader()
    const tex      = loader.load(bottleTexture)
    tex.wrapS      = THREE.RepeatWrapping
    tex.colorSpace = THREE.SRGBColorSpace
    const labelGeo = new THREE.CylinderGeometry(0.308, 0.308, 0.88, 80, 1, true)
    const labelMat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.FrontSide, depthWrite: false })
    const labelMesh = new THREE.Mesh(labelGeo, labelMat)
    labelMesh.position.y = -0.46  // -1.22 + 0.76
    floatGroup.add(labelMesh)

    // ── Product section crossfade hand-off ────────────────────────────────────
    productBridge.onEnter = () => {
      gsap.to(glassMat, { opacity: 0,    duration: 0.4 })
      gsap.to(labelMat, { opacity: 0,    duration: 0.4 })
    }
    productBridge.onLeave = () => {
      gsap.to(glassMat, { opacity: 0.88, duration: 0.6 })
      gsap.to(labelMat, { opacity: 1,    duration: 0.6 })
    }

    // ── GSAP: idle Y spin ─────────────────────────────────────────────────────
    const spinTween = gsap.to(rotGroup.rotation, { y: Math.PI * 2, duration: 10, repeat: -1, ease: 'none' })

    // ── GSAP: float ───────────────────────────────────────────────────────────
    const floatTween = gsap.to(floatGroup.position, { y: 0.18, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut' })

    // ── GSAP: full-page X tilt ────────────────────────────────────────────────
    const tiltTrigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: ({ progress }) => {
        rotGroup.rotation.x = (progress - 0.5) * 0.45
      },
    })

    // ── GSAP: scrubbed section transitions ────────────────────────────────────
    // Each trigger covers the scroll distance from when the next section enters
    // the bottom of the viewport until it reaches the top — one full screen of travel.
    // `scrub: 0.6` adds a 0.6 s lag so the bottle glides rather than snaps.
    const transitionTriggers = ACTIVE_STATES.slice(1).map((to, i) => {
      const from = ACTIVE_STATES[i]  // previous section state
      return ScrollTrigger.create({
        trigger: to.id,
        start:   'top bottom',  // to-section enters viewport bottom
        end:     'top top',     // to-section is fully visible
        scrub:   0.6,
        onUpdate: ({ progress: p }) => {
          posGroup.position.x  = lerp(from.x,     to.x,     p)
          posGroup.scale.setScalar(lerp(from.scale, to.scale, p))
          rotGroup.rotation.z  = lerp(from.rotZ,  to.rotZ,  p)
        },
      })
    })

    // ── Render loop ───────────────────────────────────────────────────────────
    let rafId: number
    const tick = () => { rafId = requestAnimationFrame(tick); renderer.render(scene, camera) }
    tick()

    // ── Resize ────────────────────────────────────────────────────────────────
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      productBridge.onEnter = () => {}
      productBridge.onLeave = () => {}
      cancelAnimationFrame(rafId)
      spinTween.kill(); floatTween.kill(); tiltTrigger.kill()
      transitionTriggers.forEach(t => t.kill())
      window.removeEventListener('resize', onResize)
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement)
      renderer.dispose()
      bodyGeo.dispose(); glassMat.dispose()
      labelGeo.dispose(); labelMat.dispose()
      tex.dispose()
    }
  }, [])

  return <div ref={mountRef} className="fixed inset-0 pointer-events-none z-40" aria-hidden="true" />
}
