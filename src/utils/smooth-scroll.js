/**
 * Smooth Scroll Utility — Lenis Integration
 * Initializes Lenis smooth scrolling and coordinates with GSAP ScrollTrigger updates.
 */

let lenisInstance = null;

export function initSmoothScroll() {
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (motionQuery.matches) {
    console.log("[Lenis] Disabled due to reduced motion preference.");
    return null;
  }

  // Check if Lenis is available globally (from CDN)
  if (typeof Lenis === 'undefined') {
    console.warn("[Lenis] Library undefined. Bypassing smooth scroll initialization.");
    return null;
  }

  // Initialize Lenis Instance with responsive lerp
  lenisInstance = new Lenis({
    lerp: 0.08,             // snappier, smoother linear interpolation (typical: 0.05 - 0.12)
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 0.9,   // slightly reduce sensitivity to keep wheel scroll controlled
    smoothTouch: false,
    infinite: false,
  });

  // Connect scroll updates directly to GSAP's ScrollTrigger tracker
  lenisInstance.on('scroll', () => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.update();
    }
  });

  // Native requestAnimationFrame loop for optimal refresh rate sync and zero lag
  function raf(time) {
    if (lenisInstance) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
  }
  requestAnimationFrame(raf);

  console.log("[Lenis] Smooth scroll initialized with native RAF loop and lerp.");
  return lenisInstance;
}

/**
 * Returns the current Lenis instance context.
 */
export function getLenis() {
  return lenisInstance;
}
