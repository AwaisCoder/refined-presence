import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [lettersVisible, setLettersVisible] = useState(false);
  const [subtitleVisible, setSubtitleVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setLettersVisible(true), 100);
    const timer2 = setTimeout(() => setSubtitleVisible(true), 800);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      window.removeEventListener("scroll", handleScroll);
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

      {/* Ambient orbs — multi-color */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] animate-pulse" style={{ background: "hsl(195 100% 50% / 0.04)" }} />
      <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full blur-[100px] animate-pulse" style={{ background: "hsl(270 80% 65% / 0.04)", animationDelay: "1s" }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full blur-[80px] animate-pulse" style={{ background: "hsl(35 100% 60% / 0.03)", animationDelay: "2s" }} />

      {/* Name */}
      <div 
        className="relative z-10 text-center px-4 will-change-[transform,opacity,filter]"
        style={{
          opacity: Math.max(1 - scrollY / 600, 0),
          transform: `translateY(${scrollY * 0.4}px) scale(${Math.max(1 - scrollY / 2000, 0.9)})`,
          filter: `blur(${Math.min(scrollY / 50, 10)}px)`,
          transition: scrollY === 0 ? "none" : "transform 0.1s ease-out, opacity 0.1s ease-out, filter 0.1s ease-out"
        }}
      >
        <h1 className="font-display font-bold tracking-tighter leading-[0.85]">
          <span className="block" style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}>
            {firstName.split("").map((letter, i) => (
              <span
                key={`f-${i}`}
                className="inline-block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  opacity: lettersVisible ? 1 : 0,
                  transform: lettersVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
                  filter: lettersVisible ? "blur(0px)" : "blur(10px)",
                  transitionDelay: `${i * 40}ms`,
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
                className="inline-block transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  opacity: lettersVisible ? 1 : 0,
                  transform: lettersVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.9)",
                  filter: lettersVisible ? "blur(0px)" : "blur(10px)",
                  transitionDelay: `${(i + firstName.length) * 40}ms`,
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
            className="font-mono text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              opacity: subtitleVisible ? 1 : 0,
              transform: subtitleVisible ? "translateY(0) scale(1)" : "translateY(20px) scale(0.95)",
              filter: subtitleVisible ? "blur(0px)" : "blur(5px)",
            }}
          >
            SOFTWARE DEVELOPER
          </p>
        </div>

        {/* Decorative line — multi-color gradient */}
        <div
          className="mx-auto mt-6 h-px transition-all duration-1000 delay-[1200ms] ease-out"
          style={{
            width: subtitleVisible ? "200px" : "0px",
            background: "linear-gradient(90deg, transparent, hsl(195 100% 50% / 0.6), hsl(270 80% 65% / 0.4), transparent)",
            opacity: subtitleVisible ? 1 : 0,
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