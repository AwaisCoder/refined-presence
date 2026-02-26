import { useEffect, useRef } from "react";

export function useScrollReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    const targets = el.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    targets.forEach((t) => observer.observe(t));
    
    // Also observe the element itself if it has reveal class
    if (el.classList.contains("reveal") || el.classList.contains("reveal-left") || el.classList.contains("reveal-right")) {
      observer.observe(el);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
