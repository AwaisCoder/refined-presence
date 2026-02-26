import { useScrollReveal } from "@/hooks/useScrollReveal";

const dotColors = [
  "bg-primary shadow-[0_0_12px_hsl(195_100%_50%/0.6)]",
  "bg-accent shadow-[0_0_12px_hsl(270_80%_65%/0.6)]",
  "bg-warm shadow-[0_0_12px_hsl(35_100%_60%/0.6)]",
];

const companyColors = ["text-primary", "text-accent", "text-warm"];

const experiences = [
  {
    role: "AI/ML Intern",
    company: "InternPe",
    duration: "November 2023",
    description:
      "Worked on AI and machine learning projects, applying advanced algorithms to real-world problems and improving skills in data analysis, model development, and predictive analytics.",
  },
  {
    role: "Web Developer",
    company: "Twyster — Final-Year Project",
    duration: "September 2024",
    description:
      "Built Twyster, a Twitter-inspired platform, using the MERN stack and Tailwind CSS. Implemented features like real-time updates and user authentication.",
  },
  {
    role: "Project Manager",
    company: "MumbaiHacks 2024",
    duration: "October 2024",
    description:
      "Led a team of developers to create a financial advisor bot with personalized investment recommendations, budgeting assistance, and real-time financial tracking.",
  },
];

const Experience = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="experience" ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-20">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent">03</span>
        <div className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">Experience</span>
      </div>

      <div className="relative">
        {/* Timeline line — gradient */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px" style={{ background: "linear-gradient(to bottom, hsl(195 100% 50%), hsl(270 80% 65%), hsl(35 100% 60%))" }} />

        {experiences.map((exp, i) => (
          <div
            key={i}
            className={`relative mb-20 last:mb-0 md:w-1/2 ${
              i % 2 === 0 ? "md:pr-16" : "md:ml-auto md:pl-16"
            } ${i % 2 === 0 ? "reveal-left" : "reveal-right"}`}
            style={{ transitionDelay: `${i * 150}ms` }}
          >
            {/* Glowing dot */}
            <div
              className={`absolute top-2 w-3 h-3 rounded-full ${dotColors[i]} ${
                i % 2 === 0
                  ? "left-[-6px] md:left-auto md:right-[-6px]"
                  : "left-[-6px]"
              }`}
              style={{ animation: "glow-pulse 3s ease-in-out infinite", animationDelay: `${i * 0.5}s` }}
            />

            <h3 className="font-display text-2xl md:text-3xl font-bold">{exp.role}</h3>
            <p className={`font-mono text-xs tracking-[0.2em] uppercase ${companyColors[i]} mt-2`}>{exp.company}</p>
            <span className="inline-block font-mono text-[10px] tracking-widest uppercase text-muted-foreground mt-2 px-2 py-0.5 border border-border">
              {exp.duration}
            </span>
            <p className="text-muted-foreground leading-relaxed mt-4">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
