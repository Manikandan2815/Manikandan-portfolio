/**
 * Projects Component — Phase Explore More
 * Renders project list and massive cinematic detail overlay with GSAP transitions.
 */
import { projects } from '../../portfolio-data.js?v=3';

export function renderProjects(container) {
  if (!container) return;
  
  let projectsHtml = '';
  
  projects.forEach((proj, index) => {
    projectsHtml += `
      <!-- Single Project Panel (Desktop Horizontal / Mobile Vertical) -->
      <div class="project-panel w-full lg:w-screen h-auto lg:h-screen flex-shrink-0 relative flex flex-col lg:flex-row items-center justify-center py-24 lg:py-0 px-6 lg:px-24 border-b lg:border-b-0 lg:border-r border-[#1E1E1E]" data-id="${proj.id}">
        
        <!-- Background Number -->
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] lg:text-[40vw] font-black text-[#141414] select-none z-0 opacity-50 lg:opacity-100">
          0${proj.id}
        </div>

        <div class="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Visual Box -->
          <div class="lg:col-span-7 cursor-pointer explore-preview group">
            <div class="project-image-wrapper w-full aspect-[4/3] lg:aspect-[16/10] bg-[#0A0A0A] border border-[#1E1E1E] relative overflow-hidden transition-all duration-500 hover:border-[#39FF14]/40" style="clip-path: inset(0 0 0 0);">
              <!-- Replace with actual images eventually -->
              <div class="absolute inset-0 bg-gradient-to-br from-[#1E1E1E]/20 to-transparent z-0"></div>
              <div class="absolute inset-0 opacity-10 flex flex-col justify-between p-4 font-mono text-[8px] text-[#39FF14] leading-normal pointer-events-none">
                <div>// INIT PROJECT_${proj.id}</div>
                <div class="text-right">SYS_STATUS: ACTIVE</div>
              </div>
              
              <div class="absolute inset-0 flex flex-col items-center justify-center p-6 text-center select-none z-10">
                <span class="font-display text-xs lg:text-sm tracking-[0.2em] text-[#9A9A9A] group-hover:text-[#F5F5F5] transition-colors uppercase mb-2">
                  ${proj.title}
                </span>
                <span class="font-mono text-[10px] tracking-[0.2em] text-[#39FF14] opacity-80 group-hover:opacity-100 transition-opacity uppercase font-bold border border-[#39FF14]/20 px-4 py-2 bg-[#39FF14]/5 scale-95 group-hover:scale-100 duration-300">
                  OPEN PROJECT
                </span>
              </div>
            </div>
          </div>
          
          <!-- Info Box -->
          <div class="lg:col-span-5 project-info-container flex flex-col items-start text-left">
            <div class="font-mono text-[#39FF14] text-[10px] font-semibold tracking-[0.25em] mb-4">
              0${proj.id} — PROJECT
            </div>
            
            <h3 class="font-display font-black text-3xl md:text-5xl lg:text-6xl uppercase text-[#F5F5F5] mb-4 leading-[1.05] tracking-tight">
              ${proj.title}
            </h3>
            
            <div class="font-mono text-[9px] md:text-[10px] text-[#9A9A9A] tracking-widest uppercase mb-6 border-b border-[#1E1E1E] pb-4 w-full">
              // ${proj.category}
            </div>
            
            <p class="font-sans text-[15px] md:text-base text-[#9A9A9A] leading-[1.7] mb-10 max-w-lg">
              ${proj.shortDescription}
            </p>
            
            <button class="explore-btn magnetic font-mono text-[10px] md:text-xs font-bold tracking-[0.25em] text-[#F5F5F5] hover:text-[#39FF14] uppercase transition-colors flex items-center gap-3 group px-6 py-4 bg-[#141414] border border-[#1E1E1E] hover:border-[#39FF14]/50" data-cursor="EXPLORE" data-magnetic-strength="0.4">
              EXPLORE MORE 
              <span class="text-[#39FF14] text-sm pointer-events-none transition-transform duration-300 group-hover:translate-x-1">→</span>
            </button>
          </div>
          
        </div>
      </div>
    `;
  });
  
  container.innerHTML = `
    <!-- SCENE 03: PROJECTS CINEMATIC GALLERY -->
    <section id="projects-scene" class="relative w-full bg-[#0A0A0A] z-20 overflow-hidden">
      
      <!-- Sticky Container for Horizontal Scroll (Desktop) -->
      <div class="lg:h-screen lg:sticky lg:top-0 lg:overflow-hidden w-full">
        
        <!-- Section Header (Fixed in place on desktop while projects scroll) -->
        <div class="lg:absolute lg:top-24 lg:left-24 z-20 px-6 py-12 lg:p-0 pointer-events-none mix-blend-difference">
          <div class="font-mono text-[10px] text-[#39FF14] tracking-[0.3em] uppercase mb-4">
            03 / SELECTED WORK
          </div>
          <h2 class="font-display font-black text-4xl lg:text-6xl tracking-tight text-[#F5F5F5] uppercase leading-[1]">
            THINGS I'VE BUILT.
          </h2>
        </div>
        
        <!-- Horizontal Track -->
        <div class="projects-track flex flex-col lg:flex-row w-full lg:w-[${projects.length * 100}vw] h-full lg:pt-0">
          ${projectsHtml}
        </div>
        
      </div>
    </section>

    
    <!-- Cinematic Project Detail Overlay Modal -->
    <div id="project-modal" data-lenis-prevent="true" class="fixed inset-0 z-[150] bg-[#0A0A0A] hidden opacity-0 flex-col overflow-y-auto w-full h-[100svh]">
      <div class="flex-none p-6 md:p-8 w-full flex justify-end sticky top-0 bg-gradient-to-b from-[#0A0A0A] to-transparent z-50 pointer-events-none">
        <button id="close-modal-btn" aria-label="Close project" class="font-mono text-sm tracking-[0.2em] text-[#9A9A9A] hover:text-[#39FF14] uppercase transition-colors pointer-events-auto bg-[#141414] px-4 py-2 border border-[#1E1E1E] hover:border-[#39FF14]/50">
          CLOSE ×
        </button>
      </div>
      
      <div class="flex-grow flex flex-col w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 pb-24 outline-none" tabindex="-1" id="modal-focus-target">
        <div class="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-20">
          
          <!-- Left: Visual Gallery -->
          <div class="xl:col-span-7 flex flex-col gap-6 order-2 xl:order-1">
            <div id="modal-gallery" class="w-full flex flex-col gap-6"></div>
          </div>
          
          <!-- Right: Info -->
          <div class="xl:col-span-5 flex flex-col text-left order-1 xl:order-2 xl:sticky xl:top-24 self-start">
            <div class="font-mono text-[10px] text-[#39FF14] tracking-[0.3em] mb-4 uppercase">
              <span id="modal-id"></span> / PROJECT
            </div>
            
            <h2 id="modal-title" class="font-display font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#F5F5F5] uppercase mb-4 leading-[1.05]"></h2>
            
            <div id="modal-category" class="font-mono text-[10px] text-[#9A9A9A] tracking-[0.2em] uppercase mb-12 border-b border-[#1E1E1E] pb-6"></div>
            
            <div class="mb-10">
              <p id="modal-overview" class="font-sans text-[#F5F5F5] text-[15px] md:text-base leading-[1.7] opacity-90"></p>
            </div>
            
            <div class="mb-10">
              <h3 class="font-mono text-[9px] text-[#9A9A9A] tracking-[0.25em] mb-4 uppercase font-bold">TECH STACK</h3>
              <div id="modal-tech" class="flex flex-wrap gap-2"></div>
            </div>
            
            <div class="mb-10">
              <h3 class="font-mono text-[9px] text-[#9A9A9A] tracking-[0.25em] mb-4 uppercase font-bold">KEY FEATURES</h3>
              <ul id="modal-features" class="space-y-3 font-sans text-[15px] md:text-base text-[#F5F5F5] opacity-90 list-none pl-1"></ul>
            </div>
            
            <div class="mb-12">
              <h3 class="font-mono text-[9px] text-[#9A9A9A] tracking-[0.25em] mb-4 uppercase font-bold">WHAT I LEARNED</h3>
              <p id="modal-learning" class="font-sans text-[#F5F5F5] text-[15px] md:text-base leading-[1.7] opacity-90"></p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4 mt-auto" id="modal-actions">
              <!-- Dynamically populated links -->
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `;

  setupModalInteractions();
}

function setupModalInteractions() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const focusTarget = document.getElementById('modal-focus-target');
  let activeTriggerBtn = null;

  // Add click listeners to all Explore buttons and preview images
  document.querySelectorAll('.project-panel').forEach(card => {
    const projId = card.getAttribute('data-id');
    const exploreBtn = card.querySelector('.explore-btn');
    const previewArea = card.querySelector('.explore-preview');

    const openHandler = (e) => {
      e.preventDefault();
      activeTriggerBtn = exploreBtn;
      openModal(projId);
    };

    if (exploreBtn) exploreBtn.addEventListener('click', openHandler);
    if (previewArea) previewArea.addEventListener('click', openHandler);
  });

  // Close handlers
  closeBtn.addEventListener('click', closeModal);
  
  // Escape key handler
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  function openModal(id) {
    const proj = projects.find(p => p.id == id);
    if (!proj) return;

    // Populate data
    document.getElementById('modal-id').textContent = '0' + proj.id;
    document.getElementById('modal-title').textContent = proj.title;
    document.getElementById('modal-category').textContent = proj.category;
    document.getElementById('modal-overview').textContent = proj.overview;
    document.getElementById('modal-learning').textContent = proj.learning;

    // Tech stack
    document.getElementById('modal-tech').innerHTML = proj.technologies.map(t => 
      `<span class="px-3 py-1.5 bg-[#141414] text-[#F5F5F5] border border-[#1E1E1E] text-[10px] font-mono tracking-widest uppercase">${t}</span>`
    ).join('');

    // Features
    document.getElementById('modal-features').innerHTML = proj.features.map(f => 
      `<li class="flex items-start gap-3"><span class="text-[#39FF14] text-lg leading-none mt-[-2px]">•</span> <span>${f}</span></li>`
    ).join('');

    // Links
    const actionsContainer = document.getElementById('modal-actions');
    let actionsHtml = '';
    
    if (proj.repository && proj.repository.trim() !== '') {
      actionsHtml += `
        <a href="${proj.repository}" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center px-8 py-4 bg-[#141414] border border-[#1E1E1E] hover:border-[#39FF14] hover:bg-[#39FF14]/5 transition-all text-center w-full">
          <span class="font-mono text-[10px] font-bold tracking-[0.25em] text-[#F5F5F5] group-hover:text-[#39FF14] uppercase transition-colors">VIEW ON GITHUB →</span>
        </a>
      `;
    } else {
      actionsHtml += `
        <div class="flex items-center justify-center px-8 py-4 bg-[#0A0A0A] border border-[#1E1E1E]/50 opacity-50 cursor-not-allowed text-center w-full">
          <span class="font-mono text-[9px] tracking-[0.2em] text-[#9A9A9A] uppercase">REPOSITORY LINK COMING SOON</span>
        </div>
      `;
    }
    
    if (proj.liveDemo && proj.liveDemo.trim() !== '') {
      actionsHtml += `
        <a href="${proj.liveDemo}" target="_blank" rel="noopener noreferrer" class="group flex items-center justify-center px-8 py-4 bg-[#39FF14]/10 border border-[#39FF14]/30 hover:bg-[#39FF14]/20 hover:border-[#39FF14] transition-all text-center w-full">
          <span class="font-mono text-[10px] font-bold tracking-[0.25em] text-[#39FF14] uppercase transition-colors">LIVE DEMO →</span>
        </a>
      `;
    }
    actionsContainer.innerHTML = actionsHtml;

    // Gallery / Visuals
    const galleryContainer = document.getElementById('modal-gallery');
    if (proj.images && proj.images.length > 0) {
      // Create lazy loaded gallery images
      galleryContainer.innerHTML = proj.images.map((imgSrc, i) => `
        <div class="w-full bg-[#141414] border border-[#1E1E1E] overflow-hidden">
          <!-- We rely on actual images falling back gracefully if missing, or a proper script to handle missing images -->
          <img src="${imgSrc}" alt="${proj.title} Screenshot ${i+1}" class="w-full h-auto object-cover object-center opacity-80 hover:opacity-100 transition-opacity" onerror="this.parentElement.innerHTML='<div class=\\'aspect-[16/10] flex flex-col items-center justify-center text-center p-8\\'><span class=\\'font-mono text-[10px] tracking-widest text-[#9A9A9A] uppercase\\'>PROJECT VISUAL COMING SOON</span></div>'">
        </div>
      `).join('');
    } else {
      galleryContainer.innerHTML = `
        <div class="w-full aspect-[16/10] bg-[#141414] border border-[#1E1E1E] flex flex-col items-center justify-center text-center p-8">
          <span class="font-mono text-[10px] tracking-widest text-[#9A9A9A] uppercase">PROJECT VISUAL COMING SOON</span>
        </div>
      `;
    }

    // Prepare Animation & Reveal
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden'; // Lock scrolling
    
    // Hide global navigation header to prevent overlap with Close button
    const globalHeader = document.querySelector('header');
    if (globalHeader) {
      gsap.to(globalHeader, { opacity: 0, yPercent: -100, duration: 0.3, pointerEvents: 'none' });
    }
    
    // Smooth reset scroll position inside modal
    modal.scrollTop = 0;
    
    // Accessible focus
    focusTarget.focus();

    // Setup GSAP starting properties
    gsap.set(modal, { opacity: 0 });
    const revealElements = [
      '#modal-id', '#modal-title', '#modal-category', 
      '#modal-overview', '#modal-tech', '#modal-features', 
      '#modal-learning', '#modal-actions'
    ];
    gsap.set(revealElements, { opacity: 0, y: 25 });
    gsap.set('#modal-gallery', { opacity: 0, scale: 0.98, x: -20 });

    // Timeline Animation
    const tl = gsap.timeline();
    tl.to(modal, { opacity: 1, duration: 0.3, ease: "power2.out" })
      .to('#modal-gallery', { opacity: 1, scale: 1, x: 0, duration: 0.5, ease: "power3.out" }, "-=0.1")
      .to(revealElements, { 
        opacity: 1, 
        y: 0, 
        stagger: 0.05, 
        duration: 0.6, 
        ease: "power3.out" 
      }, "-=0.4");
  }

  function closeModal() {
    const tl = gsap.timeline({
      onComplete: () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = ''; // Unlock scrolling
        
        // Restore global navigation
        const globalHeader = document.querySelector('header');
        if (globalHeader) {
          gsap.to(globalHeader, { opacity: 1, yPercent: 0, duration: 0.3, pointerEvents: 'auto' });
        }
        
        if (activeTriggerBtn) {
          activeTriggerBtn.focus();
        }
      }
    });

    const revealElements = [
      '#modal-actions', '#modal-learning', '#modal-features', 
      '#modal-tech', '#modal-overview', '#modal-category', 
      '#modal-title', '#modal-id'
    ];

    tl.to(revealElements, { opacity: 0, y: 10, stagger: 0.02, duration: 0.3, ease: "power2.in" })
      .to('#modal-gallery', { opacity: 0, scale: 0.98, duration: 0.3, ease: "power2.in" }, "-=0.2")
      .to(modal, { opacity: 0, duration: 0.3, ease: "power2.in" }, "-=0.1");
  }
}
