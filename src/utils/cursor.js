/**
 * Custom Cursor Component
 * GSAP quickTo implementation for a premium dot + ring cinematic cursor.
 */

export function initCursor() {
  const isMobile = window.innerWidth < 1024;
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (isMobile || motionQuery.matches) return;

  // 1. Inject DOM Elements (Separated text from ring to avoid pixelation on scale)
  const cursorContainer = document.createElement('div');
  cursorContainer.id = 'cinematic-cursor';
  cursorContainer.className = 'pointer-events-none fixed top-0 left-0 z-[9999] hidden lg:block w-full h-full';
  
  cursorContainer.innerHTML = `
    <div class="cursor-dot fixed top-0 left-0 w-1.5 h-1.5 bg-[#39FF14] rounded-full shadow-[0_0_8px_rgba(57,255,20,0.8)] pointer-events-none"></div>
    <div class="cursor-ring fixed top-0 left-0 w-8 h-8 border border-[#39FF14]/50 rounded-full pointer-events-none flex items-center justify-center">
      <span class="cursor-label font-mono text-[8px] font-bold tracking-[0.2em] text-[#0A0A0A] uppercase opacity-0 scale-50 transition-all duration-300 whitespace-nowrap absolute"></span>
    </div>
  `;
  document.body.appendChild(cursorContainer);

  const dot = cursorContainer.querySelector('.cursor-dot');
  const ring = cursorContainer.querySelector('.cursor-ring');
  const label = cursorContainer.querySelector('.cursor-label');

  // 2. Setup GSAP quickTo for perfect performance (translating X/Y instead of Top/Left)
  gsap.set(dot, { xPercent: -50, yPercent: -50 });
  gsap.set(ring, { xPercent: -50, yPercent: -50 });
  
  const xDot = gsap.quickTo(dot, "x", { duration: 0.05, ease: "power2.out" });
  const yDot = gsap.quickTo(dot, "y", { duration: 0.05, ease: "power2.out" });
  
  const xRing = gsap.quickTo(ring, "x", { duration: 0.2, ease: "power3.out" });
  const yRing = gsap.quickTo(ring, "y", { duration: 0.2, ease: "power3.out" });

  // 3. Track Mouse Movement
  window.addEventListener("mousemove", (e) => {
    xDot(e.clientX);
    yDot(e.clientY);
    xRing(e.clientX);
    yRing(e.clientY);
  }, { passive: true });

  // 4. Interaction States (Using GPU-accelerated Scale and Opacity ONLY)
  const handleHoverEnter = (e) => {
    const target = e.currentTarget;
    let text = target.getAttribute('data-cursor') || '';
    
    // Auto-detect links if no data-cursor is provided
    if (!text && target.tagName.toLowerCase() === 'A') text = 'OPEN';
    if (!text && target.tagName.toLowerCase() === 'BUTTON') text = 'GO';

    gsap.to(dot, { opacity: 0, duration: 0.15 });
    
    if (text) {
      label.textContent = text;
      gsap.to(ring, { 
        scale: 2.2, 
        backgroundColor: '#39FF14',
        borderColor: '#39FF14',
        duration: 0.3, 
        ease: "power2.out" 
      });
      gsap.to(label, { opacity: 1, scale: 0.45, duration: 0.3, delay: 0.05 });
    } else {
      gsap.to(ring, { scale: 1.5, backgroundColor: 'rgba(57,255,20,0.1)', duration: 0.3, ease: "power2.out" });
    }
  };

  const handleHoverLeave = () => {
    gsap.to(dot, { opacity: 1, duration: 0.2, delay: 0.1 });
    gsap.to(ring, { 
      scale: 1, 
      backgroundColor: 'transparent',
      borderColor: 'rgba(57, 255, 20, 0.5)',
      duration: 0.3, 
      ease: "power2.out" 
    });
    gsap.to(label, { opacity: 0, scale: 0.5, duration: 0.2 });
  };

  // 5. Bind Listeners efficiently using delegation
  document.addEventListener('mouseover', (e) => {
    const interactiveEl = e.target.closest('a, button, [data-cursor], .explore-preview');
    if (interactiveEl && !interactiveEl._cursorBound) {
      interactiveEl._cursorBound = true;
      interactiveEl.addEventListener('mouseenter', handleHoverEnter);
      interactiveEl.addEventListener('mouseleave', handleHoverLeave);
      handleHoverEnter({ currentTarget: interactiveEl });
    }
  });

  document.addEventListener("mouseleave", () => {
    gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
  });
  document.addEventListener("mouseenter", () => {
    gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
  });
}
