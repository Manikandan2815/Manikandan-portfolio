/**
 * Hero Component — Phase B Cinematic Hero
 * Renders the dominant display-hero typography, portrait integration, and sequence GSAP timeline.
 */
import { personalInfo } from '../../portfolio-data.js?v=21';

export function renderHero(container) {
  if (!container) return;
  
  container.innerHTML = `
    <section id="hero" class="relative min-h-[100svh] w-full flex flex-col justify-between pt-32 pb-10 px-6 md:px-12 lg:px-24 select-none overflow-hidden border-b border-[#1E1E1E]">
      <!-- Asymmetric Radial Glow (WebGL space placeholder) -->
      <div class="absolute top-1/4 right-0 lg:right-[10%] w-[80vw] lg:w-[40vw] aspect-square bg-[radial-gradient(circle,rgba(57,255,20,0.035)_0%,transparent_70%)] pointer-events-none z-0"></div>
      
      <!-- Canvas Mount Container (WebGL scene will bind here later) -->
      <div id="webgl-canvas-container" class="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-70"></div>
      
      <!-- Editorial Cinematic Portrait Frame -->
      <div class="portrait-container absolute lg:right-[3%] top-[10%] w-full lg:w-[40vw] max-w-[500px] h-[55vh] lg:h-[75vh] z-0 lg:pointer-events-auto group mt-8 lg:mt-0 px-6 lg:px-0">
        
        <!-- Desktop Editorial Frame Details (Hidden on Mobile) -->
        <div class="hidden lg:block absolute top-[15%] -left-8 w-16 h-[1px] bg-[#333] z-20 portrait-meta transition-transform duration-700 group-hover:-translate-x-2"></div>
        <div class="hidden lg:block absolute bottom-[15%] -right-4 w-12 h-[1px] bg-[#333] z-20 portrait-meta transition-transform duration-700 group-hover:translate-x-2"></div>
        <div class="hidden lg:block absolute -top-4 left-[25%] w-[1px] h-12 bg-[#333] z-20 portrait-meta"></div>

        <div class="hidden lg:block absolute top-20 -left-12 font-mono text-[9px] text-[#9A9A9A] tracking-[0.4em] uppercase z-20 portrait-meta -rotate-90 origin-top-right transition-colors group-hover:text-[#F5F5F5]">
          01 / PORTRAIT
        </div>
        <div class="hidden lg:block absolute bottom-8 right-6 font-mono text-[8px] text-[#555] tracking-[0.3em] uppercase z-20 portrait-meta mix-blend-difference">
          SYS.ACT // IDX: 2815
        </div>
        
        <!-- Image Masking Wrapper -->
        <div class="portrait-image-wrapper relative w-full h-full overflow-hidden bg-[#050505] transition-transform duration-700 z-10" style="clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);">
          
          <img 
            src="assets/images/manikandan.jpg" 
            alt="Manikandan.R Portrait" 
            class="hero-portrait w-full h-full object-cover object-top opacity-0 z-0 scale-105 transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)] lg:group-hover:scale-100"
            style="filter: grayscale(70%) contrast(1.15) brightness(0.85);"
          >
          
          <!-- Soft vignette & grain -->
          <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,5,5,0.85)_100%)] z-20 pointer-events-none"></div>
          
          <!-- Hover Text Indicator -->
          <div class="hidden lg:flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-30 pointer-events-none">
            <span class="font-mono text-[9px] tracking-[0.3em] text-[#F5F5F5] uppercase px-4 py-2 bg-[#0A0A0A]/40 backdrop-blur-md border border-[#1E1E1E] scale-95 group-hover:scale-100 transition-transform duration-500">
              VIEW
            </span>
          </div>
        </div>
      </div>
      
      <!-- Top Spacer -->
      <div></div>
      
      <!-- Core Content -->
      <div class="relative z-10 max-w-7xl mx-auto w-full text-left my-auto">
        
        <!-- Top Metadata Badge -->
        <div class="hero-badge-container overflow-hidden mb-6 md:mb-8">
          <div class="hero-badge inline-flex items-center gap-3 px-3 py-1.5 bg-[#141414] border border-[#1E1E1E] text-[9px] md:text-xs tracking-[0.25em] text-[#39FF14] font-mono uppercase select-none">
            <span class="w-1.5 h-1.5 rounded-full bg-[#39FF14] shadow-[0_0_8px_rgba(57,255,20,0.8)]"></span>
            AI & DATA SCIENCE × SOFTWARE DEVELOPMENT
          </div>
        </div>
        
        <!-- Dominant Name Heading -->
        <div class="hero-name-container overflow-hidden mb-2 md:-ml-2">
          <h1 class="hero-name display-hero text-[#F5F5F5] uppercase">
            ${personalInfo.name}
          </h1>
        </div>
        
        <!-- Subtitle line -->
        <div class="hero-title-container overflow-hidden mb-12">
          <h2 class="hero-title font-mono text-[10px] md:text-[13px] font-bold tracking-[0.3em] text-[#9A9A9A] uppercase ml-1">
            DIGITAL EXPERIENCE / <span class="text-[#39FF14]">${personalInfo.title}</span>
          </h2>
        </div>
        
        <!-- Big statement (Editorial line-by-line reveal) -->
        <div class="hero-statement space-y-1 mb-8 max-w-4xl relative z-20">
          <div class="overflow-hidden">
            <span class="reveal-line block font-display text-2xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F5F5] uppercase leading-[1.1]">
              I BUILD THINGS THAT TURN
            </span>
          </div>
          <div class="overflow-hidden">
            <span class="reveal-line block font-display text-2xl md:text-5xl lg:text-6xl font-black tracking-tight text-[#F5F5F5] uppercase leading-[1.1]">
              IDEAS INTO EXPERIENCES.
            </span>
          </div>
        </div>
        
      </div>
      
      <!-- Footer Metadata Bar -->
      <div class="relative z-20 w-full max-w-7xl mx-auto flex justify-between items-end border-t border-[#1E1E1E] pt-8 mt-12">
        <div class="hero-bottom-meta flex gap-6 md:gap-16 font-mono text-[9px] md:text-xs text-[#9A9A9A] tracking-wider uppercase select-none">
          <div class="bottom-meta-item">
            <span class="block text-[#39FF14] font-semibold mb-1.5 opacity-70">01 / STAGE</span>
            ${personalInfo.education.status}
          </div>
          <div class="bottom-meta-item hidden md:block">
            <span class="block text-[#39FF14] font-semibold mb-1.5 opacity-70">02 / FOCUS</span>
            SOFTWARE DEV
          </div>
          <div class="bottom-meta-item">
            <span class="block text-[#39FF14] font-semibold mb-1.5 opacity-70">03 / REGION</span>
            ${personalInfo.education.location}
          </div>
        </div>
        
        <div class="hero-scroll-indicator font-mono text-[9px] md:text-[10px] text-[#9A9A9A] tracking-[0.25em] uppercase flex items-center gap-3 select-none">
          SCROLL TO EXPLORE <span class="arrow text-[#39FF14] font-bold text-lg">↓</span>
        </div>
      </div>
    </section>
  `;
}

/**
 * Entrance reveal animation using GSAP strictly ordered by user request.
 */
export function animateHeroEntrance() {
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isMobile = window.innerWidth < 1024;
  
  // Portrait opacity tuning for dark editorial contrast
  const portraitOpacity = 0.85; 
  const portraitTargetClip = isMobile ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' : 'polygon(5% 0%, 100% 5%, 95% 100%, 0% 95%)';
  
  if (motionQuery.matches) {
    gsap.set('.hero-badge, .hero-name, .hero-title, .reveal-line, .bottom-meta-item, .hero-scroll-indicator', {
      opacity: 1, y: 0, yPercent: 0
    });
    gsap.set('.hero-portrait', { opacity: portraitOpacity, scale: 1 });
    gsap.set('.portrait-meta', { opacity: 1 });
    gsap.set('.portrait-image-wrapper', { clipPath: portraitTargetClip });
    return;
  }

  const tl = gsap.timeline();

  // Initial hidden state
  gsap.set('.hero-badge', { yPercent: 105, opacity: 0 });
  gsap.set('.hero-name', { yPercent: 105, opacity: 0 });
  gsap.set('.hero-title', { yPercent: 105, opacity: 0 });
  gsap.set('.hero-portrait', { scale: 1.1, opacity: 0 });
  gsap.set('.reveal-line', { yPercent: 105, opacity: 0 });
  gsap.set('.bottom-meta-item', { yPercent: 105, opacity: 0 });
  gsap.set('.hero-scroll-indicator', { opacity: 0 });
  gsap.set('.portrait-meta', { opacity: 0 });
  gsap.set('.portrait-image-wrapper', { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' });

  // 1. Metadata appears
  tl.to('.hero-badge', { yPercent: 0, opacity: 1, duration: 0.6, ease: "power3.out" })
    
  // 2. MANIKANDAN.R reveals
    .to('.hero-name', { yPercent: 0, opacity: 1, duration: 0.9, ease: "power4.out" }, "-=0.3")
    
  // 3. Subtitle reveals
    .to('.hero-title', { yPercent: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, "-=0.6")
    
  // 4. Main statement reveals
    .to('.reveal-line', { yPercent: 0, opacity: 1, stagger: 0.15, duration: 0.8, ease: "power4.out" }, "-=0.4")
    
  // 5. Portrait reveals (fade + clipPath reveal + scale down)
    .to('.portrait-image-wrapper', {
      clipPath: portraitTargetClip,
      duration: 1.2,
      ease: "power3.inOut"
    }, "-=0.6")
    .to('.hero-portrait', { 
      opacity: portraitOpacity, 
      scale: 1, 
      duration: 1.5, 
      ease: "power2.out" 
    }, "-=1.0")
    .to('.portrait-meta', { opacity: 1, stagger: 0.1, duration: 0.8, ease: "power2.out" }, "-=0.6")
    
  // 6. Bottom metadata appears
    .to('.bottom-meta-item', { yPercent: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power3.out" }, "-=1.0")
    
  // 7. Scroll indicator begins
    .to('.hero-scroll-indicator', { opacity: 1, duration: 0.6 }, "-=0.4")
    .add(() => {
      // Loop indicator arrow bounce
      gsap.to('.hero-scroll-indicator .arrow', {
        y: 6,
        repeat: -1,
        yoyo: true,
        duration: 0.9,
        ease: "power1.inOut"
      });
    });
}


/**
 * MICRO-UPGRADE: Cinematic Portrait Mouse Parallax
 * Adds subtle 3D tilt + green edge glow on mouse movement.
 * Does NOT change any existing layout, positioning, or animations.
 */
export function initPortraitParallax() {
  const container = document.querySelector('.portrait-container');
  const wrapper = document.querySelector('.portrait-image-wrapper');
  if (!container || !wrapper || window.innerWidth < 1024) return;

  const maxTilt = 4; // degrees — very subtle

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    const rotateY = x * maxTilt;
    const rotateX = -y * maxTilt;

    wrapper.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.01)`;
  });

  container.addEventListener('mouseleave', () => {
    wrapper.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)';
  });
}
