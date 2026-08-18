/**
 * Contact & Footer Component — Phase 1 Foundation
 * Renders the terminal contact options, footer credits, and back-to-top layout hooks.
 */
import { personalInfo, socialLinks } from '../../portfolio-data.js?v=2';

export function renderContact(container) {
  if (!container) return;
  
  container.innerHTML = `
    <section id="contact-scene" class="relative w-full h-[100svh] flex flex-col justify-between bg-[#0A0A0A] border-t border-[#1E1E1E] z-30 overflow-hidden">
      
      <!-- Top Padding -->
      <div class="h-24 md:h-32"></div>
      
      <!-- Cinematic Heading and Buttons -->
      <div class="relative w-full flex flex-col items-center justify-center flex-grow z-10 select-none">
        <div class="font-mono text-[9px] md:text-xs text-[#39FF14] tracking-[0.4em] uppercase mb-8 md:mb-12">
          05 / NEXT STEPS
        </div>
        
        <h2 class="font-display font-black text-[12vw] md:text-[10vw] lg:text-[8vw] tracking-tighter text-[#F5F5F5] uppercase text-center leading-[0.9] w-full px-4" style="text-shadow: 0 10px 30px rgba(0,0,0,0.5);">
          LET'S BUILD<br>
          <span class="text-[#39FF14] inline-block mt-2">SOMETHING.</span>
        </h2>
        
        <!-- Interactive Magnetic Social & Email Links -->
        <div class="flex flex-wrap justify-center gap-4 mt-16 lg:mt-24">
          <a href="${socialLinks.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn" class="magnetic contact-btn px-6 py-4 md:px-8 md:py-5 bg-[#141414] border border-[#1E1E1E] text-[10px] md:text-xs font-mono tracking-[0.2em] font-bold text-[#F5F5F5] hover:text-[#39FF14] hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all uppercase rounded-full" data-cursor="LINKEDIN" data-magnetic-strength="0.4">
            LINKEDIN
          </a>
          <a href="${socialLinks.github}" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub" class="magnetic contact-btn px-6 py-4 md:px-8 md:py-5 bg-[#141414] border border-[#1E1E1E] text-[10px] md:text-xs font-mono tracking-[0.2em] font-bold text-[#F5F5F5] hover:text-[#39FF14] hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all uppercase rounded-full" data-cursor="GITHUB" data-magnetic-strength="0.4">
            GITHUB
          </a>
          <a href="mailto:${socialLinks.email}" target="_blank" rel="noopener noreferrer" aria-label="Send email" class="magnetic contact-btn px-6 py-4 md:px-8 md:py-5 bg-[#39FF14]/10 border border-[#39FF14]/30 text-[10px] md:text-xs font-mono tracking-[0.2em] font-bold text-[#39FF14] hover:bg-[#39FF14]/20 hover:border-[#39FF14] transition-all uppercase rounded-full" data-cursor="EMAIL" data-magnetic-strength="0.4">
            GET IN TOUCH
          </a>
        </div>
      </div>
      
      <!-- Footer Marquee Segment -->
      <footer class="w-full relative z-10 border-t border-[#1E1E1E] bg-[#0A0A0A] pb-4 pt-4 md:pt-6">
        
        <!-- Endless Marquee container -->
        <div class="relative w-full overflow-hidden flex border-b border-[#1E1E1E] pb-4 md:pb-6 mb-4 md:mb-6 select-none opacity-50">
          <div class="marquee-track flex whitespace-nowrap font-display font-black text-2xl md:text-4xl tracking-[0.2em] uppercase text-[#F5F5F5]">
            <!-- We repeat the content several times to fill screen and animate seamlessly -->
            <span class="mx-8">${personalInfo.name} — AVAILABLE FOR WORK</span>
            <span class="mx-8 text-[#39FF14]">X</span>
            <span class="mx-8">${personalInfo.name} — AVAILABLE FOR WORK</span>
            <span class="mx-8 text-[#39FF14]">X</span>
            <span class="mx-8">${personalInfo.name} — AVAILABLE FOR WORK</span>
            <span class="mx-8 text-[#39FF14]">X</span>
            <span class="mx-8">${personalInfo.name} — AVAILABLE FOR WORK</span>
            <span class="mx-8 text-[#39FF14]">X</span>
          </div>
        </div>
        
        <div class="flex justify-between items-center px-6 md:px-12 w-full max-w-7xl mx-auto">
          <div class="font-mono text-[8px] md:text-[9px] text-[#9A9A9A] tracking-widest uppercase">
            © 2026 MANIKANDAN.R
          </div>
          
          <button id="back-to-top" class="font-mono text-[8px] md:text-[9px] text-[#9A9A9A] tracking-widest uppercase hover:text-[#39FF14] transition-colors focus:outline-none">
            BACK TO TOP ↑
          </button>
        </div>
      </footer>
    </section>
  `;
}
