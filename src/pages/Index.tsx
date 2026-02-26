import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Preloader = ({ onDone }: { onDone: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setExiting(true), 200);
          setTimeout(() => onDone(), 900);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className={`fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center transition-all duration-700 ${
        exiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      <span className="font-mono text-xs tracking-[0.4em] uppercase text-muted-foreground mb-6">
        Loading
      </span>
      <div className="w-48 h-px bg-border relative overflow-hidden">
        <div
          className="absolute left-0 top-0 h-full transition-all duration-200"
          style={{
            width: `${Math.min(progress, 100)}%`,
            background: "linear-gradient(90deg, hsl(195 100% 50%), hsl(270 80% 65%))",
          }}
        />
      </div>
      <span className="font-mono text-xs text-muted-foreground/40 mt-3">
        {Math.min(Math.round(progress), 100)}%
      </span>
    </div>
  );
};

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="grain min-h-screen bg-background text-foreground">
      {!loaded && <Preloader onDone={() => setLoaded(true)} />}
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;
