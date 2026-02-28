import { useEffect, useState } from "react";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", mMove);
      document.addEventListener("mouseenter", mEnter);
      document.addEventListener("mouseleave", mLeave);
      document.addEventListener("mousedown", mDown);
      document.addEventListener("mouseup", mUp);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", mMove);
      document.removeEventListener("mouseenter", mEnter);
      document.removeEventListener("mouseleave", mLeave);
      document.removeEventListener("mousedown", mDown);
      document.removeEventListener("mouseup", mUp);
    };

    const mDown = () => setClicked(true);
    const mUp = () => setClicked(false);
    const mMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const mLeave = () => setHidden(true);
    const mEnter = () => setHidden(false);

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-primary mix-blend-difference"
      style={{
        width: "32px",
        height: "32px",
        transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${clicked ? 0.8 : 1})`,
        opacity: hidden ? 0 : 1,
        // Smooth out the transform just slightly so it doesn't feel jarring, but keep position instantly tracking
        transition: "transform 0.1s ease-out, opacity 0.3s ease",
      }}
    />
  );
}
