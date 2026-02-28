import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    text: "Awais is a proactive engineer who goes far beyond the task list. He took full initiative to overhaul Haire's architectural debt, meticulously restructuring complex code to boost system performance while consistently supporting our cross-functional teams.",
    author: "Guruprasad Jogu",
    role: "Team Manager",
  },
  {
    text: "Awais is an incredibly quick learner who can step into the middle of complex, ongoing work and drive it to completion without missing a beat. He has earned my total confidence; he is the developer I can trust to manage high-stakes projects entirely on his own.",
    author: "Abhishek Kolhatkar",
    role: "Team Lead",
  },
];

const Testimonials = () => {
  const ref = useScrollReveal<HTMLElement>();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-20 max-w-7xl mx-auto">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary">04</span>
        <div className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">Testimonials</span>
      </div>

      <div className="reveal relative min-h-[300px] flex flex-col items-center justify-center">
        {/* Decorative quotes */}
        <span className="absolute top-0 left-1/2 -translate-x-1/2 font-serif text-[12rem] leading-none text-border/30 select-none pointer-events-none">
          "
        </span>

        {testimonials.map((t, i) => (
          <div
            key={i}
            className="absolute inset-0 flex flex-col items-center justify-center transition-all duration-700"
            style={{
              opacity: active === i ? 1 : 0,
              transform: active === i ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
              pointerEvents: active === i ? "auto" : "none",
            }}
          >
            <p className="font-serif text-xl md:text-3xl leading-relaxed italic text-foreground/90 max-w-3xl">
              "{t.text}"
            </p>
            <div className="mt-8">
              <p className="font-mono text-sm text-primary tracking-widest uppercase">{t.author}</p>
              <p className="font-mono text-xs text-muted-foreground mt-1">{t.role}</p>
            </div>
          </div>
        ))}

        {/* Dots */}
        <div className="absolute -bottom-8 flex gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                active === i ? "bg-primary w-6" : "bg-border"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
