export default function About() {
  return (
    <section id="about" className="h-screen w-full flex items-center overflow-hidden bg-[#3f7651]">
      <div className="pl-8 pr-16">
        <p
          className="font-bagel text-white not-italic m-0"
          style={{ fontSize: 'clamp(28px, 3.75vw, 54px)', lineHeight: '1.001', maxWidth: '80vw' }}
        >
          A bridge between generations, nurturing friendship, culture, and celebration in
          every meaningful community gathering and ceremony.
        </p>
      </div>
    </section>
  )
}
