import Lenis from "@studio-freight/lenis";

document.addEventListener("DOMContentLoaded", () => {
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.1, // Controla la suavidad del scroll
    duration: 1.2,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
});
