import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    text: "Working with Awais was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched.",
    author: "Aryan Sharma",
    role: "Team Member",
  },
  {
    text: "Awais's expertise in web development is exceptional. He delivered a robust and scalable solution for our e-commerce project showcasing impressive problem-solving skills. His ability to integrate complex features within tight deadlines was remarkable.",
    author: "Noaman Hakim",
    role: "Team Member",
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
