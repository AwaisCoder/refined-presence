import { useScrollReveal } from "@/hooks/useScrollReveal";

const accentColors = ["text-primary", "text-accent", "text-warm", "text-rose"];
const dotColors = [
  "bg-primary shadow-[0_0_12px_hsl(195_100%_50%/0.6)]",
  "bg-accent shadow-[0_0_12px_hsl(270_80%_65%/0.6)]",
  "bg-warm shadow-[0_0_12px_hsl(35_100%_60%/0.6)]",
];

const projects = [
  {
    num: "01",
    title: "Workify",
    subtitle: "Project Management Platform",
    description:
      "A Next.js-powered collaborative project management app with workspaces, tasks, Kanban boards, real-time updates, and role-based access. Features calendar views, analytics, and mobile-friendly design.",
    tech: ["React.js", "TailwindCSS", "TypeScript", "Appwrite"],
    url: "https://workify-three.vercel.app",
  },
  {
    num: "02",
    title: "Snyppit",
    subtitle: "SaaS Code Editor",
    description:
      "A feature-rich code editor and runner built with React, Next.js, and Monaco Editor. Provides a seamless environment for writing, testing, and executing code in multiple languages with real-time output.",
    tech: ["React.js", "TailwindCSS", "TypeScript"],
    url: "https://snyppit-beta.vercel.app",
  },
  {
    num: "03",
    title: "Suburbia",
    subtitle: "E-commerce Landing Page",
    description:
      "An interactive 3D skateboard customizer and landing page built with Next.js 15, Three.js, and GSAP. Offers real-time skateboard personalization — decks, wheels, trucks, and more.",
    tech: ["Next.js", "Three.js", "GSAP", "Prismic CMS"],
    url: "#",
  },
  {
    num: "04",
    title: "Twyster",
    subtitle: "Social Media Platform",
    description:
      "A MERN stack-based social media app modeled after Twitter, featuring posting, liking, following, comments, and personalized profiles with real-time updates and theme-changing.",
    tech: ["React.js", "TailwindCSS", "TypeScript", "MongoDB"],
    url: "https://twyster-app-1.onrender.com",
  },
];

const Projects = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-20">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary">02</span>
        <div className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">Selected Work</span>
      </div>

      <div className="space-y-0">
        {projects.map((project, idx) => (
          <div key={project.num}>
            <div
              className="reveal group py-16 md:py-24 grid md:grid-cols-12 gap-8 items-start relative rounded-lg transition-all duration-500 hover:bg-secondary/30 md:-mx-6 md:px-6"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Hover accent bar */}
              <div className={`absolute left-0 top-0 bottom-0 w-px ${accentColors[idx]} opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-current`} />

              {/* Number */}
              <div className="md:col-span-1">
                <span className={`font-mono text-xs ${accentColors[idx]}/60`}>{project.num}</span>
              </div>

              {/* Title */}
              <div className="md:col-span-5">
                <h3 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-none group-hover:text-foreground transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground mt-3">
                  {project.subtitle}
                </p>
              </div>

              {/* Description + Tags */}
              <div className="md:col-span-6 space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 border border-border text-muted-foreground group-hover:border-muted-foreground/30 transition-colors duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-block font-mono text-xs tracking-[0.2em] uppercase ${accentColors[idx]} hover:text-foreground transition-colors duration-300 group/link`}
                >
                  View Project{" "}
                  <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-2">→</span>
                </a>
              </div>
            </div>

            {/* Separator */}
            {idx < projects.length - 1 && (
              <div className="h-px w-full bg-border" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
