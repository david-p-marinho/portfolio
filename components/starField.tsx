"use client";

import { useEffect, useRef, type ReactNode } from "react";

type StarFieldProps = {
  /** Conteúdo que fica por cima do fundo */
  children?: ReactNode;
  /** Classes extras para o container que envolve os filhos */
  className?: string;
  /** Estrelas por 10.000 px² de tela. Padrão: 1.4 */
  density?: number;
  /** Velocidade de scroll (px/s) em que o star trail começa a surgir. Padrão: 1400 */
  trailStart?: number;
  /** Velocidade de scroll (px/s) em que o trail chega ao máximo. Padrão: 4500 */
  trailFull?: number;
  /** Liga/desliga as estrelas cadentes. Padrão: true */
  shootingStars?: boolean;
};

type Star = {
  x: number;
  y: number;
  depth: number; // 0.25 (longe) → 1 (perto)
  size: number;
  base: number; // brilho base
  phase: number; // fase do piscar
  speed: number; // velocidade do piscar (rad/s)
  rgb: string; // "r,g,b"
};

type Shooter = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
  life: number;
  len: number;
};

const RGB = [
  "223,230,255",
  "223,230,255",
  "255,255,255",
  "159,180,255",
  "0,229,255",
  "255,217,160",
];

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const smooth = (t: number) => t * t * (3 - 2 * t);
const rand = (a: number, b: number) => a + Math.random() * (b - a);

export default function StarField({
  children,
  className = "",
  density = 1.4,
  trailStart = 1400,
  trailFull = 4500,
  shootingStars = true,
}: StarFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let W = 0;
    let H = 0;
    let stars: Star[] = [];
    const shooters: Shooter[] = [];

    // ---------- criação / redimensionamento ----------
    const makeStar = (): Star => {
      const depth = 0.25 + Math.pow(Math.random(), 1.6) * 0.75; // mais estrelas ao fundo
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        depth,
        size: depth > 0.8 ? 3 : depth > 0.5 ? 2 : 1,
        base: 0.35 + depth * 0.6,
        phase: Math.random() * Math.PI * 2,
        speed: rand(1.1, 3.2),
        rgb: RGB[(Math.random() * RGB.length) | 0],
      };
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const nw = window.innerWidth;
      const nh = window.innerHeight;
      canvas.width = Math.round(nw * dpr);
      canvas.height = Math.round(nh * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // reaproveita as estrelas (evita "piscada" quando a barra do navegador mobile mexe)
      if (W && H) {
        for (const s of stars) {
          s.x *= nw / W;
          s.y *= nh / H;
        }
      }
      W = nw;
      H = nh;

      const target = Math.min(320, Math.round((W * H * density) / 10000));
      while (stars.length < target) stars.push(makeStar());
      if (stars.length > target) stars.length = target;

      if (reduceMotion) drawStatic();
    };

    // ---------- modo sem animação ----------
    const drawStatic = () => {
      ctx.clearRect(0, 0, W, H);
      for (const s of stars) {
        ctx.globalAlpha = s.base;
        ctx.fillStyle = `rgb(${s.rgb})`;
        ctx.fillRect(Math.round(s.x), Math.round(s.y), s.size, s.size);
      }
      ctx.globalAlpha = 1;
    };

    // ---------- estado da animação ----------
    let raf = 0;
    let last = performance.now();
    let lastScrollY = window.scrollY;
    let speedEnv = 0; // envelope da velocidade de scroll (sobe rápido, desce devagar)
    let dir = 1; // sentido do scroll (+1 descendo, -1 subindo)
    let px = 0; // parallax do mouse (suavizado)
    let pxTarget = 0;
    let nextShoot = performance.now() + rand(1500, 3000);

    const onPointer = (e: PointerEvent) => {
      pxTarget = e.clientX / window.innerWidth - 0.5;
    };

    const spawnShooter = () => {
      const angle = rand(0.35, 0.6); // rad abaixo da horizontal
      const speed = rand(750, 1150);
      shooters.push({
        x: rand(W * 0.35, W * 1.05),
        y: rand(-H * 0.05, H * 0.35),
        vx: -Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        age: 0,
        life: rand(0.9, 1.4),
        len: rand(130, 230),
      });
    };

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);

      const rawDt = (now - last) / 1000;
      last = now;
      const dt = Math.min(Math.max(rawDt, 0), 0.05);
      const scrollY = window.scrollY;

      // velocidade de scroll em px/s (ignora saltos de aba inativa)
      const v = rawDt > 0.1 || rawDt <= 0 ? 0 : (scrollY - lastScrollY) / rawDt;
      lastScrollY = scrollY;
      const speed = Math.abs(v);
      if (speed > 60) dir = Math.sign(v);

      // envelope: reage rápido ao acelerar, relaxa devagar ao parar
      const k = speed > speedEnv ? 14 : 3.2;
      speedEnv += (speed - speedEnv) * (1 - Math.exp(-dt * k));

      // 0 = piscando normal, 1 = star trail completo
      const trail = smooth(clamp01((speedEnv - trailStart) / (trailFull - trailStart)));
      const maxLen = Math.min(speedEnv * 0.09, H * 0.45);

      px += (pxTarget - px) * (1 - Math.exp(-dt * 3));

      ctx.clearRect(0, 0, W, H);
      const time = now / 1000;

      // ---------- estrelas ----------
      ctx.lineCap = "round";
      for (const s of stars) {
        let y = (s.y - scrollY * s.depth * 0.35) % H;
        if (y < 0) y += H;
        const x = s.x - px * s.depth * 30;

        // piscar → brilho fixo conforme o trail aumenta
        const tw = 0.55 + 0.45 * Math.sin(time * s.speed + s.phase);
        let a = s.base * (tw + (1 - tw) * trail);
        a = Math.min(1, a * (1 + 0.5 * trail));
        ctx.globalAlpha = a;

        const len = maxLen * s.depth * trail;
        if (len > 3) {
          const ty = y + dir * len;
          const g = ctx.createLinearGradient(x, y, x, ty);
          g.addColorStop(0, `rgba(${s.rgb},1)`);
          g.addColorStop(1, `rgba(${s.rgb},0)`);
          ctx.strokeStyle = g;
          ctx.lineWidth = Math.max(1, s.size * 0.9);
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, ty);
          ctx.stroke();
        } else {
          ctx.fillStyle = `rgb(${s.rgb})`;
          ctx.fillRect(Math.round(x), Math.round(y), s.size, s.size);
        }
      }
      ctx.globalAlpha = 1;

      // ---------- estrelas cadentes ----------
      if (shootingStars) {
        if (now >= nextShoot) {
          spawnShooter();
          nextShoot = now + rand(3500, 9000);
        }
        for (let i = shooters.length - 1; i >= 0; i--) {
          const s = shooters[i];
          s.age += dt;
          s.x += s.vx * dt;
          s.y += s.vy * dt;
          const f = s.age / s.life;
          if (f >= 1 || s.x < -s.len || s.y > H + s.len) {
            shooters.splice(i, 1);
            continue;
          }
          const mag = Math.hypot(s.vx, s.vy);
          const tx = s.x - (s.vx / mag) * s.len;
          const ty = s.y - (s.vy / mag) * s.len;
          const g = ctx.createLinearGradient(s.x, s.y, tx, ty);
          g.addColorStop(0, "rgba(255,255,255,1)");
          g.addColorStop(0.25, "rgba(255,210,63,0.8)");
          g.addColorStop(1, "rgba(160,200,255,0)");
          ctx.globalAlpha = Math.min(1, s.age * 8) * (1 - f * f);
          ctx.strokeStyle = g;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(tx, ty);
          ctx.stroke();
          ctx.fillStyle = "#fff";
          ctx.fillRect(Math.round(s.x) - 1, Math.round(s.y) - 1, 3, 3);
          ctx.globalAlpha = 1;
        }
      }
    };

    resize();
    window.addEventListener("resize", resize);

    if (!reduceMotion) {
      window.addEventListener("pointermove", onPointer, { passive: true });
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [density, trailStart, trailFull, shootingStars]);

  return (
    // `isolate` cria um contexto de empilhamento próprio: o fundo (-z-10)
    // fica atrás dos filhos mas nunca some atrás do background do body/html.
    <div className={`relative isolate ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#07061a]"
      >
        {/* névoa colorida */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(123,44,255,0.18),transparent),radial-gradient(ellipse_55%_45%_at_10%_85%,rgba(255,46,136,0.12),transparent)]" />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      </div>

      {children}
    </div>
  );
}