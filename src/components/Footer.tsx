import { imgArrow, imgDivider } from '../assets'

export default function Footer() {
  return (
    <footer id="footer" className="h-screen w-full flex flex-col items-center justify-center gap-8 overflow-hidden bg-[#4f9265]">

      <h2 className="font-bungee text-white not-italic m-0" style={{ fontSize: 'clamp(42px, 5.1vw, 74px)', lineHeight: '1.001' }}>
        FOLLOW US
      </h2>

      <div className="w-20 rotate-90">
        <img src={imgArrow} alt="" aria-hidden className="w-full h-auto object-contain" />
      </div>

      <div className="flex items-center gap-6 flex-wrap justify-center">
        {(['Instagram', 'X', 'TikTok'] as const).map((name, i) => (
          <div key={name} className="flex items-center gap-6">
            <span className="font-bagel text-white not-italic" style={{ fontSize: '32px', lineHeight: '1.001' }}>
              {name}
            </span>
            {i < 2 && (
              <div className="w-[72px]">
                <img src={imgDivider} alt="" aria-hidden className="w-full object-contain" />
              </div>
            )}
          </div>
        ))}
      </div>
    </footer>
  )
}
