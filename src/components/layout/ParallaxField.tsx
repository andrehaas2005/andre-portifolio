"use client";

import { useEffect, useRef } from "react";

// Fundo fixo (grade de prancheta + 3 auras coloridas, uma por domínio de conteúdo) que se
// move mais devagar que o scroll — efeito parallax clássico de profundidade. Respeita
// prefers-reduced-motion mantendo as camadas paradas.
export default function ParallaxField() {
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    function update() {
      const y = window.scrollY;
      layerRefs.current.forEach((el) => {
        if (!el) return;
        const speed = parseFloat(el.dataset.speed ?? "0.1");
        el.style.transform = `translate3d(0, ${(y * speed).toFixed(1)}px, 0)`;
      });
      ticking = false;
    }
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        ref={(el) => {
          layerRefs.current[0] = el;
        }}
        data-speed="0.12"
        className="bg-grid absolute -inset-x-[10%] -inset-y-[20%]"
      />
      <div
        ref={(el) => {
          layerRefs.current[1] = el;
        }}
        data-speed="0.06"
        className="absolute -top-[6%] left-[6%] h-[46vw] w-[46vw] rounded-full bg-accent opacity-[0.14] blur-[64px]"
      />
      <div
        ref={(el) => {
          layerRefs.current[2] = el;
        }}
        data-speed="0.1"
        className="absolute top-[32%] -right-[8%] h-[40vw] w-[40vw] rounded-full bg-accent-violet opacity-[0.14] blur-[64px]"
      />
      <div
        ref={(el) => {
          layerRefs.current[3] = el;
        }}
        data-speed="0.04"
        className="absolute -bottom-[10%] left-[18%] h-[42vw] w-[42vw] rounded-full bg-accent-amber opacity-[0.12] blur-[64px]"
      />
    </div>
  );
}
