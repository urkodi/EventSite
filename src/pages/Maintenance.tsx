import { useEffect, useRef } from "react";
import HelpDuck from "../assets/images/HelpDuck.png";

export default function Maintenance() {
  const floatRef = useRef<HTMLDivElement>(null);

  // floating duck + text screensaver bounce
  useEffect(() => {
    const el = floatRef.current;
    if (!el) return;

    let x = window.innerWidth / 2 - 150;
    let y = window.innerHeight / 2 - 150;

    let dx = 0.6; // horizontal speed
    let dy = 0.7; // vertical speed

    const animate = () => {
      x += dx;
      y += dy;

      const rect = el.getBoundingClientRect();

      // bounce horizontally
      if (x <= 0 || x + rect.width >= window.innerWidth) {
        dx = -dx;
      }

      // bounce vertically
      if (y <= 0 || y + rect.height >= window.innerHeight) {
        dy = -dy;
      }

      el.style.transform = `translate(${x}px, ${y}px)`;

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  // drifting bubbles
  const bubbleCount = 20;
  const colors = [
    "var(--color-lightermoonstone)",
    "var(--color-moonstone)",
    "var(--color-vanilla)",
    "var(--color-darkervanilla)",
  ];

  const bubbles = Array.from({ length: bubbleCount }, (_, i) => {
    const size = Math.random() * 180 + 60;
    return {
      id: i,
      size,
      top: Math.random() * 100,
      left: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: Math.random() * 12 + 8,
    };
  });

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      
      {/* drifting bubbles */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full opacity-40"
          style={{
            width: bubble.size,
            height: bubble.size,
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            backgroundColor: bubble.color,
            animation: `drift ${bubble.duration}s ease-in-out infinite`,
          }}
        ></div>
      ))}

      {/* floating/bouncing duck + text */}
      <div
        ref={floatRef}
        className="absolute z-20 flex flex-col items-center text-center"
        style={{ position: "absolute" }}
      >
        {/* Duck inside a circle */}
        <div className="relative mt-10 w-40 h-40 rounded-full bg-gradient-to-b from-[var(--color-lightermoonstone)] to-[var(--color-vanilla)] shadow-lg flex items-center justify-center overflow-hidden">



          <img
            src={HelpDuck}
            alt="duck"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-7xl font-extrabold text-[var(--color-darkervanilla)] drop-shadow-sm mt-3">
          503
        </h1>

        <p className="mt-2 text-3xl font-bold text-[var(--color-moonstone)]">
          We’ll Be Right Back!
        </p>

        <p className="mt-1 text-2xl font-semibold text-[var(--color-moonstone)]/80 max-w-xl">
          We're doing some quick maintenance. Please check back soon!
        </p>
      </div>
    </div>
  );
}
