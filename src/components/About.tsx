import { useState, useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const techStack = [
  { name: "JavaScript", color: "#FDE047", lightColor: "#EAB308" }, // Yellow
  { name: "TypeScript", color: "#93C5FD", lightColor: "#3B82F6" }, // Blue
  { name: "React.js", color: "#67E8F9", lightColor: "#0891B2" },   // Cyan
  { name: "Next.js", color: "#E2E8F0", lightColor: "#334155" },    // Slate/Black
  { name: "TailwindCSS", color: "#7DD3FC", lightColor: "#0284C7" },// Sky
  { name: "Three.js", color: "#D8B4FE", lightColor: "#9333EA" },   // Purple
  { name: "React Three Fiber", color: "#F9A8D4", lightColor: "#DB2777" }, // Pink
  { name: "GSAP", color: "#BEF264", lightColor: "#65A30D" },       // Lime
];

const techStack2 = [
  { name: "Node.js", color: "#86EFAC", lightColor: "#16A34A" },    // Green
  { name: "Express.js", color: "#CBD5E1", lightColor: "#475569" }, // Slate
  { name: "MongoDB", color: "#6EE7B7", lightColor: "#059669" },    // Emerald
  { name: "Appwrite", color: "#FDA4AF", lightColor: "#E11D48" },   // Rose
  { name: "Hono.js", color: "#FDBA74", lightColor: "#EA580C" },    // Orange
  { name: "Nest.js", color: "#FCA5A5", lightColor: "#DC2626" },    // Red
  { name: "Supabase", color: "#5EEAD4", lightColor: "#0D9488" },   // Teal
  { name: "Drizzle ORM", color: "#FDF08A", lightColor: "#CA8A04" },// Gold
];

const About = () => {
  const ref = useScrollReveal<HTMLElement>();
  const [theme, setTheme] = useState("midnight");

  useEffect(() => {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "midnight";
    setTheme(currentTheme);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "data-theme") {
          setTheme(document.documentElement.getAttribute("data-theme") || "midnight");
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const getTechColor = (tech: any) => {
    return theme === "daylight" && tech.lightColor ? tech.lightColor : tech.color;
  };

  return (
    <section id="about" ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-20">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary">01</span>
        <div className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">About</span>
      </div>

      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Photo Container */}
        <div className="reveal-left relative mx-auto w-full max-w-[480px] aspect-square">
          {/* Subtle glowing backdrop behind the image */}
          <div className="absolute inset-0 -mx-4 -my-4 transform rotate-6 rounded-[2rem] bg-gradient-to-tr from-primary/20 via-accent/20 to-warm/20 blur-xl opacity-60 pointer-events-none" />
          
          <div className="relative h-full w-full rounded-2xl overflow-hidden border border-border/50 bg-secondary/30 backdrop-blur-sm p-3 md:p-4 group">
            {/* Inner Border/Picture Frame */}
            <div className="relative h-full w-full rounded-xl overflow-hidden border border-border/30 bg-muted/20 relative group-hover:border-primary/40 transition-colors duration-500">
              
              {/* Image directly */}
              <img 
                src="/myprofile.jpg"
                alt="Awais Chaudhary"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Gradient Overlay for aesthetic fade at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent pointer-events-none" />
            </div>
            
            {/* Stylized Corner Accents */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-primary/50 pointer-events-none" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-primary/50 pointer-events-none" />
          </div>
        </div>

        {/* Full intro */}
        <div className="reveal-right space-y-6">
          <p className="text-base md:text-lg leading-relaxed">
            I'm a software developer who loves building web applications that actually matter, the ones that need to handle real scale while keeping security tight. Most of my time goes into React + TypeScript projects. I'm particularly comfortable owning the full stack of a complex frontend: designing solid component architectures and making sure the whole system still feels fast and coherent when you have thousands of users hitting it.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            I like taking real ownership of features or modules, from the first whiteboard sketch through to production monitoring, and I enjoy working with a team to ship something clean when the deadline is uncomfortably close.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            Outside of work you'll usually find me playing football, travelling to places I've never been, or occasionally inflicting my singing on anyone who didn't run away fast enough.
          </p>
        </div>
      </div>

      {/* Enhanced Tech Stack */}
      <div className="reveal mt-24">
        <p className="font-mono text-[14px] tracking-[0.4em] uppercase text-muted-foreground/50 mb-6 text-center">
          Technologies I work with
        </p>

        {/* Marquee row 1 */}
        <div className="relative overflow-hidden py-6 border-t border-border">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...techStack, ...techStack].map((tech, i) => {
              const activeColor = getTechColor(tech);
              return (
                <span
                  key={i}
                  className="mx-3 px-6 py-2.5 font-mono text-sm md:text-base font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:brightness-125 cursor-pointer hover:shadow-lg bg-card border border-border/50 rounded-full flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.2)]" style={{ backgroundColor: activeColor }} />
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors" style={{ color: activeColor + 'CC' }}>{tech.name}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Marquee row 2 — reverse */}
        <div className="relative overflow-hidden py-6 border-b border-border">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex whitespace-nowrap items-center" style={{ animation: "marquee 30s linear infinite reverse" }}>
            {[...techStack2.slice().reverse(), ...techStack2.slice().reverse()].map((tech, i) => {
              const activeColor = getTechColor(tech);
              return (
                <span
                  key={i}
                  className="mx-3 px-6 py-2.5 font-mono text-sm md:text-base font-bold tracking-widest uppercase transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:brightness-125 cursor-pointer hover:shadow-lg bg-card border border-border/50 rounded-full flex items-center gap-2 group"
                >
                  <span className="w-2 h-2 rounded-full shadow-[0_0_8px_rgba(0,0,0,0.2)]" style={{ backgroundColor: activeColor }} />
                  <span className="text-foreground/80 group-hover:text-foreground transition-colors" style={{ color: activeColor + 'CC' }}>{tech.name}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
