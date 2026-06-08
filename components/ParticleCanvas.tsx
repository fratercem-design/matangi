"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  opacity: number; size: number; life: number; maxLife: number;
  type: "dot" | "glyph" | "geometry";
  symbol?: string; color: string;
}

const SYMBOLS = ["✦", "◈", "⬡", "✧", "◇", "⊕", "ॐ", "⬟"];
const COLORS  = [
  "rgba(45,106,79,",
  "rgba(184,150,46,",
  "rgba(107,70,193,",
  "rgba(82,183,136,",
  "rgba(212,168,67,",
];

interface Props {
  density?: number;
  className?: string;
}

export default function ParticleCanvas({ density = 1, className = "" }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];
    const MAX = Math.floor(60 * density);

    const spawn = (): Particle => {
      const type = Math.random() < 0.5 ? "dot" : Math.random() < 0.7 ? "glyph" : "geometry";
      return {
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        vx: (Math.random() - 0.5) * 0.3,
        vy: -(Math.random() * 0.4 + 0.1),
        opacity: 0,
        size: type === "glyph" ? Math.random() * 10 + 8 : Math.random() * 2.5 + 0.5,
        life: 0,
        maxLife: Math.random() * 400 + 300,
        type,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    };

    // Seed initial particles spread across canvas
    for (let i = 0; i < MAX; i++) {
      const p = spawn();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife * 0.8;
      particles.push(p);
    }

    let rafId: number;
    let frame = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;

      // Spawn new particles periodically
      if (frame % Math.floor(12 / density) === 0 && particles.length < MAX + 10) {
        particles.push(spawn());
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx + Math.sin(p.life * 0.015 + i) * 0.15;
        p.y += p.vy;

        const progress = p.life / p.maxLife;
        p.opacity = progress < 0.12
          ? (progress / 0.12) * 0.5
          : progress > 0.8
          ? ((1 - progress) / 0.2) * 0.5
          : 0.5;

        if (p.life >= p.maxLife) { particles.splice(i, 1); continue; }

        ctx.save();
        ctx.globalAlpha = p.opacity;

        if (p.type === "dot") {
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
          grad.addColorStop(0, p.color + "0.8)");
          grad.addColorStop(1, p.color + "0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color + "0.6)";
          ctx.fill();
        } else if (p.type === "glyph") {
          ctx.font = `${p.size}px 'Noto Serif Devanagari', serif`;
          ctx.fillStyle = p.color + "0.7)";
          ctx.shadowBlur = 6;
          ctx.shadowColor = p.color + "0.4)";
          ctx.textAlign = "center";
          ctx.fillText(p.symbol!, p.x, p.y);
        } else {
          // Geometric triangle
          const s = p.size * 3;
          ctx.strokeStyle = p.color + "0.5)";
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - s);
          ctx.lineTo(p.x + s * 0.866, p.y + s * 0.5);
          ctx.lineTo(p.x - s * 0.866, p.y + s * 0.5);
          ctx.closePath();
          ctx.stroke();
        }
        ctx.restore();
      }

      rafId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      aria-hidden
    />
  );
}
