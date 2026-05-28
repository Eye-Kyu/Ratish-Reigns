// Wave paths — viewBox "0 0 600 80". Each bezier produces a distinct ripple.
const WAVES = [
  {
    path: 'M0,40 C50,15 100,65 150,40 C200,15 250,65 300,40 C350,15 400,65 450,40 C500,22 550,32 600,30',
    top: '25%',
    zClass: 'z-[10]',   // below BottleStage (z-40)
  },
  {
    path: 'M0,40 C75,8 150,72 225,40 C300,8 375,72 450,40 C510,16 560,38 600,35',
    top: '38%',
    zClass: 'z-[45]',  // above BottleStage, below Navbar (z-50)
  },
  {
    path: 'M0,40 C50,65 100,15 150,40 C200,65 250,15 300,40 C350,65 400,15 450,40 C500,58 550,48 600,50',
    top: '52%',
    zClass: 'z-[10]',
  },
  {
    path: 'M0,40 C38,12 75,68 112,40 C150,12 187,68 225,40 C262,12 300,68 337,40 C375,12 412,68 450,40 C490,18 540,36 600,32',
    top: '65%',
    zClass: 'z-[45]',
  },
]

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen w-full flex flex-col md:flex-row items-center overflow-hidden bg-[#254d32]">

      {/* Left half — wavy SVG lines (hidden on mobile, bottle not shown) */}
      <div className="relative w-full md:w-1/2 h-48 md:h-full">
        {WAVES.map(({ path, top, zClass }, i) => (
          <svg
            key={i}
            viewBox="0 0 600 80"
            preserveAspectRatio="none"
            fill="none"
            className={`absolute w-full pointer-events-none select-none ${zClass}`}
            style={{ top, height: '60px' }}
          >
            <path d={path} stroke="rgba(255,255,255,0.65)" strokeWidth="2" />
          </svg>
        ))}
      </div>

      {/* Right half — tagline */}
      <div className="w-full md:w-1/2 flex items-center px-8 md:pr-12 md:pl-0 pb-16 md:pb-0">
        <h1
          className="font-bagel text-[#e2e2e2] not-italic uppercase m-0"
          style={{ fontSize: 'clamp(28px, 3.75vw, 54px)', lineHeight: 1.01, letterSpacing: '0.06em' }}
        >
          FROM SACRED GROVES TO MODERN CHEERS.
        </h1>
      </div>
    </section>
  )
}
