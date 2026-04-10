"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  phase: number;
  r: number;
  alpha: number;
  speed: number;
  drift: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const stars: Star[] = [];
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * canvas.width;
      stars.push({
        x,
        y: Math.random() * canvas.height,
        phase: x + Math.random() * 100,
        r: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.4 + 0.2, // 0.2–0.6
        speed: Math.random() * 0.02 + 0.012, // period ~2–5s
        drift: Math.random() * 0.004 + 0.003, // ~0.2–0.4 px/s
      });
    }

    let frame: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const time = Date.now() * 0.001;

      for (const star of stars) {
        // Twinkle: period 2-5s, multiplier 0.5–1.0
        const flicker =
          Math.sin(time * star.speed * 100 + star.phase) * 0.25 + 0.75;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 208, 203, ${star.alpha * flicker})`;
        ctx.fill();

        // Slow drift
        star.x += star.drift;
        if (star.x > canvas.width + 5) star.x = -5;
      }

      frame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
