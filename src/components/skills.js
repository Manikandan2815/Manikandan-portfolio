/**
 * Skills Component — Phase 1 Foundation
 * Renders the typography-based interactive skills layout grouped by category (Development, AI/Data, Tools).
 */
import { skills } from '../../portfolio-data.js?v=17';

export function renderSkills(container) {
  if (!container) return;
  
  const categories = [
    { key: 'languages', title: 'LANGUAGES' },
    { key: 'aiData', title: 'AI / DATA' },
    { key: 'development', title: 'DEVELOPMENT' },
    { key: 'tools', title: 'TOOLS' }
  ];
  
  let categoriesHtml = '';
  
  categories.forEach(cat => {
    const list = skills[cat.key];
    let itemsHtml = '';
    
    list.forEach(item => {
      itemsHtml += `
        <div class="skill-item group relative inline-flex cursor-pointer py-3 px-5 bg-[#141414] border border-[#1E1E1E] transition-all duration-300 hover:border-[#39FF14] hover:bg-[#1A1A1A] select-none">
          <span class="font-display text-sm md:text-base font-bold tracking-wide text-[#F5F5F5] group-hover:text-[#39FF14] transition-colors">
            ${item.name}
          </span>
          
          <!-- Tooltip container (CSS handled hover in Phase 1) -->
          <div class="skill-tooltip absolute left-1/2 bottom-[115%] -translate-x-1/2 w-56 p-3 bg-[#0A0A0A] border border-[#39FF14] text-[10px] text-[#9A9A9A] font-mono leading-normal shadow-xl opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-20 text-center uppercase tracking-wide">
            <span class="block text-[#39FF14] font-bold mb-1">${item.name}</span>
            ${item.desc}
          </div>
        </div>
      `;
    });
    
    categoriesHtml += `
      <div class="mb-12 last:mb-0">
        <h3 class="font-mono text-[9px] md:text-[10px] text-[#9A9A9A] tracking-[0.2em] mb-6 uppercase border-b border-[#1E1E1E] pb-2 max-w-[150px]">
          // ${cat.title}
        </h3>
        <div class="flex flex-wrap gap-3">
          ${itemsHtml}
        </div>
      </div>
    `;
  });
  
  container.innerHTML = `
    <section id="skills" class="py-24 md:py-36 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full select-none border-b border-[#1E1E1E]">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        <div class="lg:col-span-4 flex flex-col justify-start">
          <div class="font-mono text-xs text-[#39FF14] tracking-[0.2em] uppercase mb-4">
            02 / WHAT I WORK WITH
          </div>
          <div class="h-[1px] w-12 bg-[#39FF14] opacity-50"></div>
        </div>
        
        <div class="lg:col-span-8">
          ${categoriesHtml}
        </div>
      </div>
    </section>
  `;
}
