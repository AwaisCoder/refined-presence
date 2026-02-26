import { useScrollReveal } from "@/hooks/useScrollReveal";

const techStack = [
  "JavaScript", "TypeScript", "React.js", "Next.js", "Node.js", "Express.js",
  "TailwindCSS", "Three.js", "React Three Fiber", "GSAP", "MongoDB", "Appwrite", "Hono.js",
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

      {/* Tech stack marquee */}
      <div className="reveal mt-24 overflow-hidden border-t border-b border-border py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...techStack, ...techStack].map((tech, i) => (
            <span
              key={i}
              className="mx-8 font-mono text-sm tracking-widest uppercase text-muted-foreground/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
