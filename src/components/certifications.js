/**
 * Certifications Component — Phase Custom Upgrade
 * Renders verified certificates or a clean, technical developer TODO placeholder when empty.
 */
import { certifications } from '../../portfolio-data.js?v=13';

export function renderCertifications(container) {
  if (!container) return;

  let contentHtml = '';

  if (certifications && certifications.length > 0) {
    let cardsHtml = '';
    certifications.forEach(cert => {
      cardsHtml += `
        <div class="certification-card group relative p-6 bg-[#141414] border border-[#1E1E1E] transition-all duration-300 hover:border-[#39FF14] hover:bg-[#1A1A1A] select-none flex flex-col justify-between min-h-[180px]">
          <div>
            <div class="flex justify-between items-start gap-4 mb-4">
              <span class="font-mono text-[9px] text-[#39FF14] tracking-[0.2em] uppercase">// ${cert.year || 'CREDENTIAL'}</span>
              <span class="px-2 py-0.5 bg-[#1E1E1E] text-white border border-[#2B2B2B] text-[8px] font-mono tracking-widest uppercase">${cert.skills?.[0] || 'SKILL'}</span>
            </div>
            <h4 class="font-display font-bold text-lg md:text-xl text-[#F5F5F5] uppercase tracking-wide mb-2 group-hover:text-[#39FF14] transition-colors">
              ${cert.name}
            </h4>
            <p class="font-mono text-[10px] text-[#9A9A9A] tracking-wider uppercase mb-4">
              ISSUED BY: ${cert.issuer}
            </p>
          </div>
          
          ${cert.url ? `
            <a href="${cert.url}" target="_blank" rel="noopener noreferrer" class="magnetic font-mono text-[9px] font-bold tracking-[0.2em] text-[#39FF14] hover:text-[#F5F5F5] transition-colors flex items-center gap-2 group/btn uppercase" data-cursor="VIEW" data-magnetic-strength="0.3">
              VIEW CREDENTIAL <span class="transition-transform group-hover/btn:translate-x-1">→</span>
            </a>
          ` : ''}
        </div>
      `;
    });

    contentHtml = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        ${cardsHtml}
      </div>
    `;
  } else {
    // Elegant TODO / Placeholder State to prevent fabrication
    contentHtml = `
      <div class="w-full p-8 md:p-12 bg-[#141414] border border-[#1E1E1E] flex flex-col items-center justify-center text-center group transition-colors duration-300 hover:border-[#39FF14]/30 relative overflow-hidden select-none">
        <!-- Technical Code Grid Decoration -->
        <div class="absolute inset-0 opacity-[0.02] bg-[radial-gradient(circle,#39FF14_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none"></div>
        
        <div class="font-mono text-[10px] text-[#39FF14] tracking-[0.3em] uppercase mb-4">
          // SYSTEM_STATUS: PENDING_CREDENTIALS
        </div>
        
        <div class="h-[1px] w-8 bg-[#39FF14] opacity-50 mb-6"></div>
        
        <p class="font-mono text-xs md:text-sm text-[#9A9A9A] max-w-md leading-relaxed uppercase tracking-wider mb-6">
          Verified academic & technical certificates are being compiled and will be linked directly to official LinkedIn credentials shortly.
        </p>
        
        <a href="https://www.linkedin.com/in/manikandan-r-ab1998385/" target="_blank" rel="noopener noreferrer" class="magnetic font-mono text-[10px] font-bold tracking-[0.2em] text-[#F5F5F5] hover:text-[#39FF14] bg-[#0A0A0A] border border-[#1E1E1E] px-6 py-4 uppercase transition-all rounded-full hover:border-[#39FF14]/50" data-cursor="LINKEDIN" data-magnetic-strength="0.4">
          VIEW PROFILE FOR UPDATES →
        </a>
      </div>
    `;
  }

  container.innerHTML = `
    <section id="certifications" class="py-24 md:py-36 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full select-none border-b border-[#1E1E1E] bg-[#0A0A0A] relative z-20">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
        
        <!-- Left: Header -->
        <div class="lg:col-span-4 flex flex-col justify-start">
          <div class="font-mono text-xs text-[#39FF14] tracking-[0.2em] uppercase mb-4">
            04 / VERIFICATIONS
          </div>
          <h2 class="font-display font-black text-4xl lg:text-5xl tracking-tight text-[#F5F5F5] uppercase leading-[1.05] mb-6">
            LEARNED &<br>
            <span class="text-[#39FF14]">CERTIFIED.</span>
          </h2>
          <div class="h-[1px] w-12 bg-[#39FF14] opacity-50 mb-6"></div>
        </div>
        
        <!-- Right: Content Grid or Placeholder -->
        <div class="lg:col-span-8 flex flex-col justify-center">
          ${contentHtml}
        </div>
        
      </div>
    </section>
  `;
}
