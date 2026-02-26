import { useScrollReveal } from "@/hooks/useScrollReveal";

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
            <div className="reveal py-16 md:py-24 grid md:grid-cols-12 gap-8 items-start" style={{ transitionDelay: `${idx * 100}ms` }}>
              {/* Number */}
              <div className="md:col-span-1">
                <span className="font-mono text-xs text-primary/60">{project.num}</span>
              </div>

              {/* Title */}
              <div className="md:col-span-5">
                <h3 className="font-display text-4xl md:text-6xl font-bold tracking-tight leading-none">
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
                      className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors duration-300 group"
                >
                  View Project{" "}
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
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
