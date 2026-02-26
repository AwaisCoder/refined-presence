import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [lettersVisible, setLettersVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setLettersVisible(true), 300);
    const timer2 = setTimeout(() => setSubtitleVisible(true), 1800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const firstName = "AWAIS";
  const lastName = "CHAUDHARY";

  return (
    <section
      id="hero"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Mouse-follow glow */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-1000"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}% ${mousePos.y}%, hsl(195 100% 50% / 0.07), transparent 60%)`,
        }}
      />

      {/* Ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-primary/3 blur-[100px] animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Name */}
      <div className="relative z-10 text-center px-4">
        <h1 className="font-display font-bold tracking-[-0.04em] leading-[0.85]">
          <span className="block" style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}>
            {firstName.split("").map((letter, i) => (
              <span
                key={`f-${i}`}
                className="inline-block transition-all duration-700"
                style={{
                  opacity: lettersVisible ? 1 : 0,
                  transform: lettersVisible ? "translateY(0) rotateX(0)" : "translateY(60px) rotateX(-90deg)",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </span>
          <span className="block" style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}>
            {lastName.split("").map((letter, i) => (
              <span
                key={`l-${i}`}
                className="inline-block transition-all duration-700"
                style={{
                  opacity: lettersVisible ? 1 : 0,
                  transform: lettersVisible ? "translateY(0) rotateX(0)" : "translateY(60px) rotateX(-90deg)",
                  transitionDelay: `${(i + firstName.length) * 80}ms`,
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </h1>

        {/* Subtitle */}
        <div className="mt-8 overflow-hidden">
          <p
            className="font-mono text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground transition-all duration-1000"
            style={{
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? "translateY(0)" : "translateY(20px)",
            }}
          >
            Building WebDev Solutions
          </p>
        </div>

        {/* Decorative line */}
        <div
          className="mx-auto mt-6 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-1000 delay-[2000ms]"
          style={{
            width: subtitleVisible ? "200px" : "0px",
          }}
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <ChevronDown
          className="w-4 h-4 text-muted-foreground"
          style={{ animation: "chevron-bounce 2s ease-in-out infinite" }}
        />
      </div>
    </section>
  );
};

export default Hero;
