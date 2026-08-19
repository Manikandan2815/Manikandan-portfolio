/**
 * Navigation Component — Phase 2 Floating Nav & Overlay
 * Implements toggle mechanisms, menu stagger animations, scroll reveals,
 * and keybound closures for accessibility.
 */
import { personalInfo } from '../../portfolio-data.js?v=17';
import { getLenis } from '../utils/smooth-scroll.js';

export function renderNavigation(container) {
  if (!container) return;
  
  container.innerHTML = `
    <!-- Floating Header -->
    <header class="fixed top-0 left-0 w-full z-40 px-6 py-6 md:px-12 md:py-8 flex items-center justify-between pointer-events-auto transform-none transition-none">
      <a href="#hero" class="brand-logo font-display font-extrabold text-base md:text-lg text-[#F5F5F5] tracking-[0.2em] hover:text-[#39FF14] transition-colors uppercase focus:outline-none focus:ring-1 focus:ring-[#39FF14] px-2 py-1">
        ${personalInfo.name}
      </a>
      
      <div class="flex items-center gap-4 md:gap-6">
        <a href="assets/manikandan-resume.pdf" target="_blank" rel="noopener noreferrer" class="font-mono text-[9px] font-bold tracking-[0.2em] text-[#9A9A9A] hover:text-[#39FF14] border border-[#1E1E1E] hover:border-[#39FF14]/50 bg-[#141414]/30 px-3 py-1.5 uppercase transition-all">
          VIEW RESUME
        </a>
        
        <div class="hidden md:flex items-center gap-2 text-[10px] tracking-widest text-[#9A9A9A] font-mono uppercase select-none">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#39FF14]"></span>
          ${personalInfo.statusIndicator}
        </div>
        
        <button id="menu-btn" aria-label="Toggle Menu" aria-expanded="false" aria-controls="menu-overlay" class="magnetic flex items-center gap-4 group" data-cursor="MENU" data-magnetic-strength="0.4">
          <span class="font-mono text-[9px] font-bold tracking-[0.2em] text-[#9A9A9A] group-hover:text-[#F5F5F5] uppercase transition-colors">
            MENU
          </span>
        </button>
      </div>
    </header>
    
    <!-- Full-screen Navigation Overlay -->
    <div id="menu-overlay" role="dialog" aria-modal="true" aria-hidden="true" class="fixed inset-0 z-45 bg-[#0A0A0A] flex flex-col justify-between p-8 md:p-16 transition-all duration-300 opacity-0 pointer-events-none select-none">
      <!-- Overlay Header -->
      <div class="overlay-header flex justify-between items-center w-full max-w-7xl mx-auto opacity-0">
        <span class="font-mono text-[9px] text-[#9A9A9A] tracking-[0.2em] uppercase select-none">NAVIGATION</span>
        <button id="menu-close-btn" aria-label="Close Menu" class="font-display text-xs tracking-[0.2em] text-[#F5F5F5] hover:text-[#39FF14] bg-[#141414] border border-[#1E1E1E] px-4 py-2 uppercase focus:outline-none focus:ring-1 focus:ring-[#39FF14]">CLOSE</button>
      </div>
      
      <nav class="flex flex-col gap-6 md:gap-8 my-auto text-left max-w-4xl mx-auto w-full px-4 md:px-0">
        <div class="overflow-hidden">
          <a href="#hero" class="menu-item group flex items-baseline font-display text-4xl md:text-7xl font-black text-[#F5F5F5] hover:text-[#39FF14] transition-colors tracking-tight py-2 min-h-[44px] focus:outline-none focus:ring-1 focus:ring-[#39FF14] px-2">
            <span class="font-mono text-xs md:text-sm text-[#9A9A9A] group-hover:text-[#39FF14] mr-6">01 —</span> HOME
          </a>
        </div>
        <div class="overflow-hidden">
          <a href="#about" class="menu-item group flex items-baseline font-display text-4xl md:text-7xl font-black text-[#F5F5F5] hover:text-[#39FF14] transition-colors tracking-tight py-2 min-h-[44px] focus:outline-none focus:ring-1 focus:ring-[#39FF14] px-2">
            <span class="font-mono text-xs md:text-sm text-[#9A9A9A] group-hover:text-[#39FF14] mr-6">02 —</span> ABOUT
          </a>
        </div>
        <div class="overflow-hidden">
          <a href="#projects" class="menu-item group flex items-baseline font-display text-4xl md:text-7xl font-black text-[#F5F5F5] hover:text-[#39FF14] transition-colors tracking-tight py-2 min-h-[44px] focus:outline-none focus:ring-1 focus:ring-[#39FF14] px-2">
            <span class="font-mono text-xs md:text-sm text-[#9A9A9A] group-hover:text-[#39FF14] mr-6">03 —</span> WORK
          </a>
        </div>
        <div class="overflow-hidden">
          <a href="#certifications" class="menu-item group flex items-baseline font-display text-4xl md:text-7xl font-black text-[#F5F5F5] hover:text-[#39FF14] transition-colors tracking-tight py-2 min-h-[44px] focus:outline-none focus:ring-1 focus:ring-[#39FF14] px-2">
            <span class="font-mono text-xs md:text-sm text-[#9A9A9A] group-hover:text-[#39FF14] mr-6">04 —</span> CERTIFICATIONS
          </a>
        </div>
        <div class="overflow-hidden">
          <a href="#journey-scene" class="menu-item group flex items-baseline font-display text-4xl md:text-7xl font-black text-[#F5F5F5] hover:text-[#39FF14] transition-colors tracking-tight py-2 min-h-[44px] focus:outline-none focus:ring-1 focus:ring-[#39FF14] px-2">
            <span class="font-mono text-xs md:text-sm text-[#9A9A9A] group-hover:text-[#39FF14] mr-6">05 —</span> JOURNEY
          </a>
        </div>
        <div class="overflow-hidden">
          <a href="#contact-scene" class="menu-item group flex items-baseline font-display text-4xl md:text-7xl font-black text-[#F5F5F5] hover:text-[#39FF14] transition-colors tracking-tight py-2 min-h-[44px] focus:outline-none focus:ring-1 focus:ring-[#39FF14] px-2">
            <span class="font-mono text-xs md:text-sm text-[#9A9A9A] group-hover:text-[#39FF14] mr-6">06 —</span> CONTACT
          </a>
        </div>
      </nav>
      
      <!-- Overlay Footer -->
      <div class="overlay-footer flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-[#1E1E1E] pt-6 max-w-7xl mx-auto w-full opacity-0">
        <div class="flex items-center gap-2 text-[10px] tracking-widest text-[#9A9A9A] font-mono uppercase">
          <span class="inline-block w-1.5 h-1.5 rounded-full bg-[#39FF14]"></span>
          ${personalInfo.statusIndicator}
        </div>
        <a href="assets/manikandan-resume.pdf" target="_blank" rel="noopener noreferrer" class="font-mono text-[9px] font-bold tracking-[0.2em] text-[#9A9A9A] hover:text-[#39FF14] border border-[#1E1E1E] hover:border-[#39FF14]/50 bg-[#141414]/30 px-3 py-1.5 uppercase transition-all">
          VIEW RESUME (PDF)
        </a>
        <div class="font-mono text-[10px] text-[#9A9A9A] tracking-wider uppercase">
          © 2026 MANIKANDAN.R — BUILT WITH CURIOSITY.
        </div>
      </div>
    </div>
  `;
}

/**
 * Initializes navbar scroll dynamics (hiding on scroll down, revealing on scroll up)
 * and menu overlay GSAP animations.
 */
export function setupNavigationInteractions() {
  const header = document.querySelector('header');
  const menuBtn = document.getElementById('menu-btn');
  const menuCloseBtn = document.getElementById('menu-close-btn');
  const menuOverlay = document.getElementById('menu-overlay');
  
  if (!menuBtn || !menuOverlay) return;

  const menuItems = menuOverlay.querySelectorAll('.menu-item');
  const overlayHeader = menuOverlay.querySelector('.overlay-header');
  const overlayFooter = menuOverlay.querySelector('.overlay-footer');

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Set initial hidden states for animation items
  gsap.set(menuOverlay, { visibility: 'hidden', opacity: 0 });
  gsap.set(menuItems, { yPercent: 100, opacity: 0 });
  gsap.set(overlayHeader, { y: -20, opacity: 0 });
  gsap.set(overlayFooter, { y: 20, opacity: 0 });

  let menuIsOpen = false;
  let lastScrollY = window.scrollY;
  let isNavHidden = false;

  // 1. Navbar hide/show Scroll Listener
  window.addEventListener('scroll', () => {
    // If menu is open, don't execute scroll tracking
    if (menuIsOpen) return;

    const currentScrollY = window.scrollY;

    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY && !isNavHidden) {
        // Scroll DOWN: Hide Navbar
        gsap.to(header, {
          yPercent: -120,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out"
        });
        isNavHidden = true;
      } else if (currentScrollY < lastScrollY && isNavHidden) {
        // Scroll UP: Show Navbar
        gsap.to(header, {
          yPercent: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        });
        isNavHidden = false;
      }
    } else {
      // Near top: show header
      gsap.to(header, {
        yPercent: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      });
      isNavHidden = false;
    }
    lastScrollY = currentScrollY;
  });

  // 2. Open / Close Menu Animation Timeline
  const menuTimeline = gsap.timeline({ paused: true });

  if (motionQuery.matches) {
    // Reduced motion timeline: instant fades
    menuTimeline
      .to(menuOverlay, { visibility: 'visible', opacity: 1, pointerEvents: 'auto', duration: 0.2 })
      .to([overlayHeader, overlayFooter], { y: 0, opacity: 1, duration: 0.1 }, "-=0.1")
      .to(menuItems, { yPercent: 0, opacity: 1, duration: 0.1 }, "-=0.1");
  } else {
    // Premium staggered cinematic timeline
    menuTimeline
      .to(menuOverlay, { 
        visibility: 'visible',
        opacity: 1, 
        pointerEvents: 'auto',
        duration: 0.4, 
        ease: "power3.out" 
      })
      .to(overlayHeader, { 
        y: 0, 
        opacity: 1, 
        duration: 0.3, 
        ease: "power2.out" 
      }, "-=0.2")
      .to(menuItems, { 
        yPercent: 0, 
        opacity: 1, 
        stagger: 0.08, 
        duration: 0.5, 
        ease: "power4.out" 
      }, "-=0.2")
      .to(overlayFooter, { 
        y: 0, 
        opacity: 1, 
        duration: 0.3, 
        ease: "power2.out" 
      }, "-=0.3");
  }

  // Toggles Menu State
  const openMenu = () => {
    menuIsOpen = true;
    menuBtn.textContent = 'CLOSE';
    menuBtn.setAttribute('aria-expanded', 'true');
    menuOverlay.setAttribute('aria-hidden', 'false');
    menuOverlay.classList.remove('select-none');
    
    // Stop Lenis Scrolling
    const lenis = getLenis();
    if (lenis) lenis.stop();
    document.body.style.overflow = 'hidden';

    menuTimeline.play();

    // Focus close button for accessibility
    setTimeout(() => {
      if (menuCloseBtn) menuCloseBtn.focus();
    }, 100);
  };

  const closeMenu = () => {
    menuIsOpen = false;
    menuBtn.textContent = 'MENU';
    menuBtn.setAttribute('aria-expanded', 'false');
    menuOverlay.setAttribute('aria-hidden', 'true');
    menuOverlay.classList.add('select-none');

    // Resume Lenis Scrolling
    const lenis = getLenis();
    if (lenis) lenis.start();
    document.body.style.overflow = '';

    menuTimeline.reverse();

    // Focus menu trigger button
    setTimeout(() => {
      menuBtn.focus();
    }, 100);
  };

  menuBtn.addEventListener('click', () => {
    if (menuIsOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', closeMenu);
  }

  // Escape key closes overlay
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menuIsOpen) {
      closeMenu();
    }
  });

  // Handle menu item selection with Lenis scrolling
  menuItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const targetSelector = item.getAttribute('href');
      
      closeMenu();

      const targetEl = document.querySelector(targetSelector);
      if (targetEl) {
        const lenis = getLenis();
        if (lenis) {
          // Allow overlay close animation to complete slightly before scrolling
          setTimeout(() => {
            lenis.scrollTo(targetEl, { offset: 0, duration: 1.4 });
          }, 250);
        } else {
          targetEl.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
}
