import { journey, focusAreas, careerDirection } from '../../portfolio-data.js?v=17';

export function renderJourney(container) {
  if (!container) return;
  
  // Timeline Nodes HTML
  let timelineHtml = '';
  journey.forEach((item, index) => {
    const isLast = index === journey.length - 1;
    timelineHtml += `
      <div class="journey-row relative md:grid md:grid-cols-12 gap-8 items-start opacity-50 transition-opacity duration-500">
        <!-- Date / Year -->
        <div class="hidden md:block md:col-span-3 text-right pt-1">
          <div class="font-display font-black text-2xl md:text-3xl text-[#F5F5F5] tracking-tight journey-year transition-colors duration-300">
            ${item.year}
          </div>
        </div>
        
        <!-- Center Line & Node -->
        <div class="absolute left-[7px] md:relative md:left-auto md:col-span-1 flex flex-col items-center h-full">
          <div class="journey-node w-4 h-4 rounded-full bg-[#0A0A0A] border-2 border-[#1E1E1E] z-10 transition-colors duration-300 shadow-[0_0_0_rgba(57,255,20,0)] mt-2"></div>
          ${!isLast ? `<div class="w-[1px] h-full bg-[#1E1E1E] my-2"></div>` : `<div class="w-[1px] h-full bg-gradient-to-b from-[#1E1E1E] to-transparent my-2"></div>`}
        </div>
        
        <!-- Content -->
        <div class="pl-10 md:pl-0 md:col-span-8 text-left pb-16 md:pb-24">
          <div class="md:hidden font-display font-black text-2xl text-[#F5F5F5] tracking-tight journey-year transition-colors duration-300 mb-2">
            ${item.year}
          </div>
          <h4 class="font-display font-bold text-lg md:text-xl text-[#F5F5F5] uppercase tracking-wider mb-3">
            ${item.title}
          </h4>
          <p class="font-sans text-[15px] md:text-base text-[#9A9A9A] leading-[1.8] max-w-lg font-normal">
            ${item.desc}
          </p>
        </div>
      </div>
    `;
  });
  
  // Career Direction HTML
  let careerHtml = '';
  careerDirection.forEach((step, idx) => {
    const isLast = idx === careerDirection.length - 1;
    careerHtml += `
      <div class="flex flex-col items-center w-full">
        <div class="px-6 py-4 bg-[#141414] border border-[#1E1E1E] text-center font-display font-black text-xs md:text-sm tracking-[0.2em] text-[#9A9A9A] uppercase w-full max-w-[300px] transition-colors duration-300 hover:border-[#39FF14]/50 hover:text-[#F5F5F5]">
          ${step}
        </div>
        ${!isLast ? `<div class="py-3 text-[#1E1E1E] text-lg">↓</div>` : ''}
      </div>
    `;
  });
  
  container.innerHTML = `
    <section id="journey-scene" class="py-24 md:py-36 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full select-none border-b border-[#1E1E1E] relative z-20 bg-[#0A0A0A]">
      
      <div class="font-mono text-xs text-[#39FF14] tracking-[0.2em] uppercase mb-16 md:mb-24 text-center md:text-left">
        04 / THE JOURNEY
      </div>
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        <!-- Left: Chronological Timeline -->
        <div class="lg:col-span-7 relative">
          
          <!-- Master Progress Line -->
          <div class="absolute left-[14.5px] md:left-[calc(25%+11px)] lg:left-[calc(25%+1px)] top-3 bottom-0 w-[2px] bg-[#39FF14] origin-top scale-y-0 z-0 journey-progress-line" style="box-shadow: 0 0 10px rgba(57,255,20,0.5);"></div>

          <div class="relative z-10">
            ${timelineHtml}
          </div>
        </div>
        
        <!-- Right: Current Focus & Career Paths -->
        <div class="lg:col-span-5 flex flex-col justify-start lg:pt-0">
          
          <div class="sticky top-24">
            <h3 class="font-display font-black text-4xl lg:text-5xl text-[#F5F5F5] uppercase tracking-tight mb-8 leading-[1]">
              CURRENTLY<br>
              <span class="text-[#39FF14]">BUILDING</span><br>
              MYSELF.
            </h3>
            
            <p class="font-sans text-[15px] text-[#9A9A9A] leading-[1.8] mb-12">
              My core focus right now is mastering the fundamentals while expanding into full-stack and intelligent systems.
            </p>
            
            <!-- Future Career Milestones -->
            <div class="pt-8 border-t border-[#1E1E1E]">
              <h3 class="font-mono text-[9px] md:text-[10px] text-[#39FF14] tracking-[0.3em] uppercase mb-10 text-center md:text-left">
                // WHERE I'M HEADING
              </h3>
              <div class="flex flex-col items-center md:items-start w-full">
                ${careerHtml}
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    </section>
  `;
}
