"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#7c3aed", "#a78bfa", "#38bdf8", "#f472b6", "#fbbf24"];

const DRIFT = 0.5;
const ANGLE = Math.atan(DRIFT)

const DESKTOP = {
    dpr: 2,
    maxBoost: 8,
    sensitivity: 0.006,
    square: { sizes: [6, 8, 10], density: 4, speed: 25 },
    streak: { widths: [4, 6], heights: [12, 14, 18], density: 8, speed: 160 },
}
const MOBILE = {
    dpr: 1.5,
    maxBoost: 6,
    sensitivity: 0.012,
    square: { sizes: [4, 6, 8], density: 2, speed: 20 },
    streak: { widths: [2, 3], heights: [8, 12, 14], density: 15, speed: 120 },
};
const MOBILE_BREAKPOINT = 768

type Kind = "square" | "streak";
type Block = { kind: Kind; x: number; y: number; w: number; h: number; speed: number; color: string };

export default function FallingPixels({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext("2d");
        if (!wrapper || !canvas || !ctx) return;

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        let cfg = DESKTOP;
        let width = 0;
        let height = 0;
        let blocks: Block[] = [];
        let boost = 1;
        let targetBoost = 1;
        let lastY = window.scrollY;
        let lastT = performance.now();
        let raf = 0;
        let last = 0;

        const rand = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];

        const newBlock = (kind: Kind, anywhere: boolean): Block => {
            const w = kind === "square" ? rand(cfg.square.sizes) : rand(cfg.streak.widths);
            const h = kind === "square" ? w : rand(cfg.streak.heights);
            const spanX = anywhere ? width : width + height * DRIFT;
            return {
                kind,
                w,
                h,
                x: Math.floor((Math.random() * spanX) / w) * w, 
                y: anywhere ? Math.random() * height : -h - Math.random() * 40,
                speed: cfg[kind].speed * (0.7 + Math.random() * 0.6), 
                color: rand(COLORS),
            };
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            for (const b of blocks) {
                ctx.fillStyle = b.color;
                if (b.kind === "streak") {
                    ctx.save();
                    ctx.translate(b.x + b.w / 2, b.y + b.h / 2);
                    ctx.rotate(ANGLE);
                    ctx.fillRect(-b.w / 2, -b.h / 2, b.w, b.h);
                    ctx.restore();
                } else {
                    ctx.fillRect(Math.round(b.x), Math.round(b.y), b.w, b.h);
                }
            }
        };

        const resize = () => {
            const rect = wrapper.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            cfg = width < MOBILE_BREAKPOINT ? MOBILE : DESKTOP;

            const dpr = Math.min(window.devicePixelRatio || 1, cfg.dpr);
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            for (const kind of ["square", "streak"] as const) {
                const target = Math.max(2, Math.round(((width * height) / 100000) * cfg[kind].density));
                const count = blocks.filter((b) => b.kind === kind).length;
                if (count > target) {
                    let extra = count - target;
                    blocks = blocks.filter((b) => b.kind !== kind || extra-- <= 0);
                }
                for (let i = count; i < target; i++) blocks.push(newBlock(kind, true));
            }
            draw();
        };

        const onScroll = () => {
            const now = performance.now();
            const dt = Math.max(now - lastT, 1) / 1000;
            const velocity = Math.abs(window.scrollY - lastY) / dt;
            targetBoost = Math.min(cfg.maxBoost, 1 + velocity * cfg.sensitivity);
            lastY = window.scrollY;
            lastT = now;
        };

        const tick = (now: number) => {
            const dt = Math.min((now - last) / 1000, 0.05);
            last = now;

            targetBoost += (1 - targetBoost) * Math.min(dt * 3, 1); 
            boost += (targetBoost - boost) * Math.min(dt * 8, 1); 

            for (let i = 0; i < blocks.length; i++) {
                const b = blocks[i];
                const v = b.speed * boost * dt;
                b.y += v; 
                b.x -= v * DRIFT; 
                if (b.y > height || b.x + b.h < 0) blocks[i] = newBlock(b.kind, false);
            }
            draw();
            raf = requestAnimationFrame(tick);
        };

        const start = () => {
            if (reducedMotion || raf) return;
            last = performance.now();
            raf = requestAnimationFrame(tick);
        };
        const stop = () => {
            cancelAnimationFrame(raf);
            raf = 0;
        };

        const io = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()), {
            rootMargin: "700px",
        });
        const ro = new ResizeObserver(resize);

        io.observe(wrapper);
        ro.observe(wrapper);
        resize();
        window.addEventListener("scroll", onScroll, { passive: true });

        return () => {
            stop();
            io.disconnect();
            ro.disconnect();
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div ref={wrapperRef} className={`${className ?? ""} relative overflow-hidden`}>
            <canvas
                ref={canvasRef}
                aria-hidden="true"
                className="absolute w-full h-full pointer-events-none inset-0"
            />
            <div className="relative z-10">{children}</div>
        </div>
    );
}