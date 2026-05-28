import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TITLE = "OUR STORY";

const PARAGRAPHS = [
  "Born in the highlands, brewed from generations of knowledge. Ratish Reigns carries the memory of sacred groves and the spirit of community in every bottle.",
  "We don't add shortcuts. We add time. Slow fermentation, natural ingredients, and the kind of patience that modern life forgot.",
  "This is not just a drink. This is a handshake between who we were and who we're becoming.",
];

export default function Story() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current!;
    const ctx = gsap.context(() => {
      const chars = section.querySelectorAll<HTMLElement>(".story-char");
      const paras = section.querySelectorAll<HTMLElement>(".story-para");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      // Dim baseline chars fade in (background layer)
      tl.from(".story-char-dim", { opacity: 0, duration: 0.5 }, 0);

      // Cream chars reveal left to right
      tl.from(
        chars,
        {
          opacity: 0,
          y: 28,
          stagger: { each: 0.05, ease: "none" },
          ease: "power2.out",
        },
        0.1,
      );

      // Paragraphs come in one by one
      tl.from(
        paras[0],
        { opacity: 0, y: 22, duration: 0.5, ease: "power2.out" },
        "-=0.2",
      );
      tl.from(
        paras[1],
        { opacity: 0, y: 22, duration: 0.5, ease: "power2.out" },
        "+=0.3",
      );
      tl.from(
        paras[2],
        { opacity: 0, y: 22, duration: 0.5, ease: "power2.out" },
        "+=0.3",
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ background: "#131f17" }}
    >
      {/* Heading — two layers: dim baseline + cream reveal */}
      <div className="relative flex justify-center px-8 mb-16">
        {/* Dim baseline (always visible, full opacity from animation start) */}
        <h2
          className="story-char-dim font-bagel not-italic text-white/8 absolute inset-0 flex justify-center select-none pointer-events-none"
          aria-hidden
          style={{
            fontSize: "clamp(36px, 9vw, 130px)",
            lineHeight: "1.0",
            letterSpacing: "0.06em",
          }}
        >
          {TITLE}
        </h2>

        {/* Cream reveal — character by character */}
        <h2
          className="font-bagel not-italic text-[#fffdc7] relative flex"
          style={{
            fontSize: "clamp(36px, 9vw, 130px)",
            lineHeight: "1.0",
            letterSpacing: "0.06em",
          }}
        >
          {TITLE.split("").map((c, i) => (
            <span
              key={i}
              className="story-char inline-block"
              style={{ whiteSpace: c === " " ? "pre" : undefined }}
            >
              {c}
            </span>
          ))}
        </h2>
      </div>

      {/* Body copy */}
      <div className="flex flex-col gap-6 px-6 md:px-[10%] max-w-[560px]">
        {PARAGRAPHS.map((p, i) => (
          <p
            key={i}
            className="story-para font-inter text-white/65 m-0"
            style={{ fontSize: "clamp(14px, 1.5vw, 18px)", lineHeight: "1.7" }}
          >
            {p}
          </p>
        ))}
      </div>

      {/* Decorative year — desktop only */}
      <div
        className="hidden md:block absolute right-[6%] bottom-[10%] font-bagel text-white/4 select-none pointer-events-none"
        style={{
          fontSize: "clamp(80px, 14vw, 200px)",
          lineHeight: "1",
          letterSpacing: "-0.02em",
        }}
        aria-hidden
      >
        2023
      </div>
    </section>
  );
}
