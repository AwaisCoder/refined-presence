import { useState, useEffect } from "react";
import { Moon, Sun, Sparkles } from "lucide-react";

type Theme = "midnight" | "daylight" | "cyberpunk";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("midnight");
  const [mounted, setMounted] = useState(false);

  // Initialize theme from localStorage or default to midnight
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("portfolio-theme") as Theme;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'midnight');
    }
  }, []);

  const cycleTheme = () => {
    const nextThemeMap: Record<Theme, Theme> = {
      midnight: "daylight",
      daylight: "cyberpunk",
      cyberpunk: "midnight",
    };
    
    const newTheme = nextThemeMap[theme];
    setTheme(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  // Avoid hydration mismatch by not rendering until mounted
  if (!mounted) {
    return <div className="w-10 h-10" />;
  }

  return (
    <button
      onClick={cycleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-full bg-secondary/80 border border-border/50 text-foreground hover:bg-secondary hover:scale-105 transition-all duration-300 group overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Icon transitions based on current theme */}
      <span className={`absolute transition-all duration-500 ease-in-out ${theme === 'midnight' ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0'}`}>
        <Moon size={18} className="text-primary group-hover:drop-shadow-[0_0_8px_rgba(var(--primary),0.5)] transition-all" />
      </span>
      
      <span className={`absolute transition-all duration-500 ease-in-out ${theme === 'daylight' ? 'scale-100 rotate-0 opacity-100' : 'scale-50 rotate-90 opacity-0'}`}>
        <Sun size={18} className="text-warm group-hover:drop-shadow-[0_0_8px_rgba(var(--warm),0.5)] transition-all" />
      </span>
      
      <span className={`absolute transition-all duration-500 ease-in-out ${theme === 'cyberpunk' ? 'scale-100 rotate-0 opacity-100' : 'scale-50 rotate-45 opacity-0'}`}>
        <Sparkles size={18} className="text-accent group-hover:drop-shadow-[0_0_8px_rgba(var(--accent),0.5)] transition-all" />
      </span>
    </button>
  );
}
