/**
 * Loading Component — Phase B Cinematic Loader
 * Fast cinematic loader [ 000 ] -> [ 100 ] + DIGITAL EXPERIENCE.
 */
export function renderLoading(container) {
  if (!container) return;
  
  container.innerHTML = `
    <div id="loader-overlay" class="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0A0A0A] select-none pointer-events-auto overflow-hidden">
      <!-- Subtle frame -->
      <div class="absolute inset-4 md:inset-8 border border-white/[0.02] pointer-events-none z-0"></div>
      
      <div class="relative z-10 flex flex-col items-center">
        <!-- Display Name -->
        <div class="overflow-hidden mb-2">
          <div class="loader-name font-display tracking-[0.2em] md:tracking-[0.3em] text-[#F5F5F5] text-xl md:text-3xl font-black uppercase opacity-0 translate-y-[100%]">
            MANIKANDAN.R
          </div>
        </div>
        
        <!-- Metadata -->
        <div class="overflow-hidden mb-8">
          <div class="loader-meta font-mono tracking-[0.4em] text-accent text-[8px] md:text-[10px] font-bold opacity-0 translate-y-[100%]">
            DIGITAL EXPERIENCE
          </div>
        </div>
        
        <!-- Numerical Loader -->
        <div class="loader-counter font-mono text-[#9A9A9A] text-xs md:text-sm tracking-[0.2em] font-medium opacity-0">
          [ <span id="loader-progress">000</span> ]
        </div>
      </div>
    </div>
  `;
}

/**
 * Runs the cinematic loading sequence using GSAP.
 * @param {Function} onComplete Callback to execute when loading concludes.
 */
export function startLoadingAnimation(onComplete) {
  const overlay = document.getElementById('loader-overlay');
  const progressEl = document.getElementById('loader-progress');
  const nameEl = document.querySelector('.loader-name');
  const metaEl = document.querySelector('.loader-meta');
  const counterEl = document.querySelector('.loader-counter');
  
  if (!overlay) {
    if (onComplete) onComplete();
    return;
  }
  
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  // Instant bypass if user prefers reduced motion
  if (motionQuery.matches) {
    if (progressEl) progressEl.textContent = '100';
    gsap.to(overlay, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        overlay.remove();
        if (onComplete) onComplete();
      }
    });
    return;
  }
  
  const tl = gsap.timeline({
    onComplete: () => {
      overlay.remove();
      if (onComplete) onComplete();
    }
  });
  
  // 1-2 second rapid cinematic sequence
  const counterVal = { value: 0 };
  
  tl.to([nameEl, metaEl], {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.1,
    ease: "power3.out"
  })
  .to(counterEl, {
    opacity: 1,
    duration: 0.3
  }, "-=0.4")
  .to(counterVal, {
    value: 100,
    duration: 1.0,
    ease: "power1.inOut",
    onUpdate: () => {
      if (progressEl) {
        progressEl.textContent = Math.floor(counterVal.value).toString().padStart(3, '0');
      }
    }
  }, "-=0.2")
  .to(counterEl, {
    opacity: 0,
    duration: 0.2
  })
  .to([metaEl, nameEl], {
    y: -30,
    opacity: 0,
    duration: 0.4,
    stagger: 0.05,
    ease: "power3.in"
  }, "-=0.1")
  .to(overlay, {
    yPercent: -100,
    duration: 0.7,
    ease: "power4.inOut"
  }, "-=0.2");
}
