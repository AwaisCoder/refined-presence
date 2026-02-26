import { useScrollReveal } from "@/hooks/useScrollReveal";

const socials = [
  { label: "LinkedIn", url: "https://linkedin.com/in/awais-chaudhary-1484a0243/" },
  { label: "GitHub", url: "https://github.com/AwaisCoder" },
  { label: "Dev.to", url: "https://dev.to/awaisz99" },
  { label: "Twitter/X", url: "https://twitter.com/awaisc004" },
  { label: "Instagram", url: "https://instagram.com/_awais.04" },
];

const Contact = () => {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section label */}
      <div className="reveal flex items-center gap-4 mb-20">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary">05</span>
        <div className="h-px flex-1 bg-border" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">Contact</span>
      </div>

      <div className="reveal text-center">
        <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tight">
          Let's work
          <br />
          <span className="text-gradient">together</span>
        </h2>

        {/* Email */}
        <a
          href="mailto:awaisc004@gmail.com"
          className="inline-block mt-12 font-mono text-lg md:text-xl text-primary hover:text-foreground transition-colors duration-300 relative group"
        >
          awaisc004@gmail.com
          <span className="absolute inset-0 rounded-lg bg-primary/10 scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />
        </a>

        {/* Social links */}
        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-mono text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-32 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-mono text-xs text-muted-foreground">
          © 2024 Awais Chaudhary. All rights reserved.
        </span>
        <span className="font-mono text-xs text-muted-foreground/40">
          Crafted with precision
        </span>
      </div>
    </section>
  );
};

export default Contact;
