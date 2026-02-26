import { useScrollReveal } from "@/hooks/useScrollReveal";

const techStack = [
  { name: "JavaScript", color: "text-warm" },
  { name: "TypeScript", color: "text-primary" },
  { name: "React.js", color: "text-primary" },
  { name: "Next.js", color: "text-foreground" },
  { name: "Node.js", color: "text-lime" },
  { name: "Express.js", color: "text-lime" },
  { name: "TailwindCSS", color: "text-primary" },
  { name: "Three.js", color: "text-accent" },
  { name: "React Three Fiber", color: "text-accent" },
  { name: "GSAP", color: "text-lime" },
  { name: "MongoDB", color: "text-lime" },
  { name: "Appwrite", color: "text-rose" },
  { name: "Hono.js", color: "text-warm" },
];

const About = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-20">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary">01</span>
        <div className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">About</span>
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Pull quote */}
        <div className="reveal-left">
          <blockquote className="font-serif text-2xl md:text-4xl leading-relaxed italic text-foreground/90">
            "Driven by Innovation — I love to build, to craft, and to see ideas take shape."
          </blockquote>
          <div className="mt-8 h-px w-16 bg-primary" />
        </div>

        {/* Full intro */}
        <div className="reveal-right space-y-6">
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            I'm a web developer fluent in the MERN stack, JavaScript, TypeScript, and TailwindCSS. I thrive on crafting creative and impactful web solutions that not only look good but work like a charm.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
            I'm all about teamwork and innovation — because tackling meaningful challenges is just more fun when you've got a great squad by your side. Whether it's debugging a tricky line of code or building something entirely new, I'm always up for the adventure.
          </p>
        </div>
      </div>

      {/* Enhanced Tech Stack */}
      <div className="reveal mt-24">
        <p className="font-mono text-[10px] tracking-[0.4em] uppercase text-muted-foreground/50 mb-6 text-center">
          Technologies I work with
        </p>

        {/* Marquee row 1 */}
        <div className="relative overflow-hidden py-4 border-t border-border">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className={`mx-6 font-mono text-sm md:text-base font-bold tracking-widest uppercase ${tech.color} transition-colors duration-300`}
              >
                {tech.name}
                <span className="mx-6 text-border">·</span>
              </span>
            ))}
          </div>
        </div>

        {/* Marquee row 2 — reverse */}
        <div className="relative overflow-hidden py-4 border-b border-border">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex whitespace-nowrap" style={{ animation: "marquee 30s linear infinite reverse" }}>
            {[...techStack.slice().reverse(), ...techStack.slice().reverse()].map((tech, i) => (
              <span
                key={i}
                className={`mx-6 font-mono text-sm md:text-base font-bold tracking-widest uppercase ${tech.color} transition-colors duration-300`}
              >
                {tech.name}
                <span className="mx-6 text-border">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
