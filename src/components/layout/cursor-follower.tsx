import { useEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-viewport";

/**
 * Two-layer custom cursor: a small solid dot that tracks instantly and a
 * larger ring that trails behind. Pointer-device only.
 */
export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const [enabled, setEnabled] = useState(false);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    setEnabled(window.matchMedia("(hover: hover) and (pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled || reducedMotion) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { ...target };
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x - 4}px, ${target.y - 4}px, 0)`;
      }
    };

    const onOver = (event: PointerEvent) => {
      const interactive = (event.target as HTMLElement | null)?.closest(
        "a, button, input, textarea, [role='button']",
      );
      ringRef.current?.classList.toggle("cursor-ring-active", !!interactive);
    };

    const loop = () => {
      ring.x += (target.x - ring.x) * 0.14;
      ring.y += (target.y - ring.y) * 0.14;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x - 20}px, ${ring.y - 20}px, 0)`;
      }
      frame = requestAnimationFrame(loop);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    frame = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(frame);
    };
  }, [enabled, reducedMotion]);

  if (!enabled || reducedMotion) return null;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-50">
      <div ref={dotRef} className="bg-brand absolute size-2 rounded-full will-change-transform" />
      <div
        ref={ringRef}
        className="border-brand/50 absolute size-10 rounded-full border transition-[width,height,opacity] duration-300 will-change-transform"
      />
    </div>
  );
}
