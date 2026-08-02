import { useEffect, useRef } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-viewport";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
}

/**
 * Ambient particle field drawn on canvas. Sits behind all content and reacts
 * subtly to pointer position (parallax drift).
 */
export function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const pointer = { x: 0, y: 0 };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const count = Math.min(Math.round((width * height) / 26000), 70);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.24,
        vy: (Math.random() - 0.5) * 0.24,
        r: Math.random() * 1.8 + 0.6,
      }));
    };

    const onPointer = (event: PointerEvent) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 26;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 26;
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);
      const accent = "255, 1, 79";

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0) particle.x = width;
        if (particle.x > width) particle.x = 0;
        if (particle.y < 0) particle.y = height;
        if (particle.y > height) particle.y = 0;

        const px = particle.x + pointer.x;
        const py = particle.y + pointer.y;

        context.beginPath();
        context.arc(px, py, particle.r, 0, Math.PI * 2);
        context.fillStyle = `rgba(${accent}, 0.5)`;
        context.fill();

        for (let j = index + 1; j < particles.length; j += 1) {
          const other = particles[j];
          if (!other) continue;
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.hypot(dx, dy);
          if (distance > 130) continue;
          context.beginPath();
          context.moveTo(px, py);
          context.lineTo(other.x + pointer.x, other.y + pointer.y);
          context.strokeStyle = `rgba(${accent}, ${0.12 * (1 - distance / 130)})`;
          context.lineWidth = 1;
          context.stroke();
        }
      });

      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointer, { passive: true });
    frame = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      cancelAnimationFrame(frame);
    };
  }, [reducedMotion]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-brand/10 absolute -top-40 -left-32 size-[26rem] rounded-full blur-[130px]" />
      <div className="bg-brand/10 absolute top-1/2 -right-40 size-[30rem] rounded-full blur-[150px]" />
      <canvas ref={canvasRef} className="size-full opacity-70" />
    </div>
  );
}
