/**
 * About Component — Phase D Scroll Storytelling
 * Editorial storytelling with scroll-driven typography and a pinned cinematic Philosophy section.
 */
export function renderAbout(container) {
  if (!container) return;
  
  container.innerHTML = `
    <!-- SCENE 02: ABOUT -->
    <section id="about-scene" class="py-24 md:py-36 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full select-none relative z-20">
      
      <div class="font-mono text-xs text-[#39FF14] tracking-[0.2em] uppercase mb-12 about-reveal">
        01 / WHO I AM
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        <!-- Left: Statement -->
        <div class="lg:col-span-6">
          <h2 class="about-heading font-display font-black text-4xl md:text-5xl lg:text-7xl tracking-tight text-[#F5F5F5] leading-[1.05] uppercase mb-8 relative z-10" style="perspective: 1000px;">
            I'M STILL BUILDING<br>
            <span class="text-[#39FF14]">THE PERSON</span><br>
            I'LL BECOME.
          </h2>
        </div>
        
        <!-- Right: Biography & Editorial Tech Details -->
        <div class="lg:col-span-6 flex flex-col justify-end pt-4 lg:pt-32">
          
          <div class="about-biography space-y-8 font-sans text-base md:text-lg lg:text-xl text-[#D4D4D4] leading-[1.9] max-w-xl font-normal relative z-10">
            <p class="bio-paragraph">
              I'm <strong class="text-[#F5F5F5] font-semibold tracking-wide">Manikandan.R</strong>, a third-year B.Tech Artificial Intelligence and Data Science student with a strong interest in software development.
            </p>
            <p class="bio-paragraph">
              I enjoy turning ideas into working products, experimenting with technology, solving problems, and continuously improving my development skills.
            </p>
            <p class="bio-paragraph">
              My current journey combines Python, web development, AI/ML, and full-stack development. I am especially interested in becoming a strong software developer who can understand a problem, design a solution, and build it end-to-end.
            </p>
          </div>

          <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10 border-l-2 border-[#1E1E1E] pl-6 py-2 about-meta font-mono text-[11px] md:text-xs text-[#E5E5E5] tracking-[0.15em] uppercase leading-relaxed">
            <div class="space-y-4">
              <div><span class="text-[#39FF14] font-semibold block mb-1">INSTITUTION //</span> Anand Institute of Higher Tech</div>
              <div><span class="text-[#39FF14] font-semibold block mb-1">TIMELINE //</span> 2024 &mdash; 2028</div>
              <div><span class="text-[#39FF14] font-semibold block mb-1">ACADEMICS //</span> CGPA: 8.96 / 10</div>
            </div>
            <div class="space-y-4">
              <div class="text-[#39FF14] font-semibold mb-2">CURRENTLY EXPLORING //</div>
              <ul class="space-y-2.5 list-none text-[#E5E5E5]">
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#39FF14]"></span> Python</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#39FF14]"></span> Full-Stack Dev</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#39FF14]"></span> AI / Data Science</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#39FF14]"></span> Software Eng</li>
                <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-[#39FF14]"></span> DSA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- SCENE 02.5: PHILOSOPHY PINNED SEQUENCE -->
    <section id="philosophy-scene" class="relative w-full h-[500vh] bg-[#0A0A0A] z-20">
      <div class="sticky top-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_center,rgba(20,20,20,1)_0%,rgba(10,10,10,1)_70%)]">
        
        <div class="philosophy-label font-mono text-[9px] md:text-[10px] absolute top-12 md:top-24 text-[#9A9A9A] tracking-[0.4em] uppercase select-none opacity-0">
          THE PROCESS
        </div>
        
        <!-- Philosophy Words Stacked -->
        <div class="philosophy-words-container relative flex items-center justify-center w-full h-full">
          <!-- Text sizes use clamp to fill screen dynamically -->
          <span class="phil-word absolute opacity-0 font-display font-black text-[clamp(4rem,20vw,20rem)] leading-none text-[#1E1E1E] uppercase tracking-tighter mix-blend-screen" data-word="LEARN">LEARN</span>
          <span class="phil-word absolute opacity-0 font-display font-black text-[clamp(4rem,20vw,20rem)] leading-none text-[#1E1E1E] uppercase tracking-tighter mix-blend-screen" data-word="BUILD">BUILD</span>
          <span class="phil-word absolute opacity-0 font-display font-black text-[clamp(4rem,20vw,20rem)] leading-none text-[#1E1E1E] uppercase tracking-tighter mix-blend-screen" data-word="BREAK">BREAK</span>
          <span class="phil-word absolute opacity-0 font-display font-black text-[clamp(4rem,20vw,20rem)] leading-none text-[#1E1E1E] uppercase tracking-tighter mix-blend-screen" data-word="FIX">FIX</span>
          <span class="phil-word absolute opacity-0 font-display font-black text-[clamp(4rem,18vw,20rem)] leading-none text-[#39FF14] uppercase tracking-tighter drop-shadow-[0_0_40px_rgba(57,255,20,0.4)]" data-word="REPEAT">REPEAT</span>
        </div>
        
        <p class="phil-desc absolute bottom-12 md:bottom-24 opacity-0 font-sans text-[13px] md:text-[15px] text-[#9A9A9A] max-w-xl text-center leading-[1.8] font-normal px-6">
          Technology changes quickly. The goal is not to know everything. The goal is to keep learning, keep building, and become better at solving real problems.
        </p>
      </div>
    </section>
  `;
}
