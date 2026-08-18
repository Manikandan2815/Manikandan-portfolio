/**
 * Magnetic Interactions Component
 * Applies subtle physics to elements with the `.magnetic` class.
 */

export function initMagnetics() {
  const isMobile = window.innerWidth < 1024;
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (isMobile || motionQuery.matches) return;

  // Find all elements to apply magnetic effect
  const magneticEls = document.querySelectorAll('.magnetic, [data-magnetic]');

  magneticEls.forEach((el) => {
    // If it has a custom target area inside (like a button label), move that instead of the whole box
    const moveTarget = el.querySelector('.magnetic-inner') || el;
    
    // Magnetic strength (lower is stronger/further pull)
    const strength = el.getAttribute('data-magnetic-strength') || 0.3;

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      gsap.to(moveTarget, {
        x: distanceX * strength,
        y: distanceY * strength,
        duration: 0.4,
        ease: "power2.out"
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(moveTarget, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)" // Classic snappy magnetic release
      });
    });
  });
}
