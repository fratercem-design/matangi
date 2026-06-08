"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  life: number; maxLife: number; size: number;
  type: "glyph" | "dot" | "spark";
  glyph?: string; opacity: number; color: string;
}

const GLYPHS = ["ॐ","ह्रीं","ऐं","◈","⬡","✦","◉","श्रीं","क्लीं","⟁"];
const COLORS = ["#00e5ff","#ff00cc","#00cc44","#6fa8ff","#ffb6e6","#7c3aed"];

export default function AmbientCanvas({ intensity = 1 }: { intensity?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];
    const spawn = (): Particle => {
      const type = Math.random() < 0.3 ? "glyph" : Math.random() < 0.6 ? "dot" : "spark";
      return {
        x: Math.random() * canvas.width, y: canvas.height + 20,
        vx: (Math.random() - 0.5) * 0.4, vy: -(Math.random() * 0.6 + 0.2) * intensity,
        life: 0, maxLife: Math.random() * 300 + 200,
        size: type === "glyph" ? Math.random() * 12 + 8 : Math.random() * 2 + 1,
        type, glyph: GLYPHS[Math.floor(Math.random() * GLYPHS.length)],
        opacity: 0, color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
    };

    for (let i = 0; i < 40; i++) {
      const p = spawn(); p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife; particles.push(p);
    }

    let frame = 0;
    let rafId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      if (frame % Math.floor(8 / intensity) === 0) particles.push(spawn());

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]; p.life++;
        if (p.life >= p.maxLife) { particles.splice(i, 1); continue; }
        p.x += p.vx + Math.sin(p.life * 0.02) * 0.3; p.y += p.vy;
        const prog = p.life / p.maxLife;
        p.opacity = prog < 0.15 ? prog / 0.15 : prog > 0.75 ? 1 - (prog - 0.75) / 0.25 : 1;
        ctx.save(); ctx.globalAlpha = p.opacity * 0.6;
        if (p.type === "glyph") {
          ctx.font = `${p.size}px serif`; ctx.fillStyle = p.color;
          ctx.shadowColor = p.color; ctx.shadowBlur = 8;
          ctx.fillText(p.glyph!, p.x, p.y);
        } else if (p.type === "dot") {
          ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color; ctx.shadowColor = p.color; ctx.shadowBlur = 6; ctx.fill();
        } else {
          ctx.strokeStyle = p.color; ctx.lineWidth = 0.8;
          ctx.shadowColor = p.color; ctx.shadowBlur = 4;
          ctx.beginPath(); ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - p.vx * 6, p.y - p.vy * 6); ctx.stroke();
        }
        ctx.restore();
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(rafId); };
  }, [intensity]);

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.7 }} />;
}
