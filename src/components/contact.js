/**
 * Contact & Footer Component — Final Upgraded Phase
 * Renders the interactive Web3Forms contact section, direct mailto/social fallbacks,
 * resume CTAs, marquee details, and back-to-top integrations.
 */
import { personalInfo, socialLinks } from '../../portfolio-data.js?v=18';
import { getLenis } from '../utils/smooth-scroll.js';

export function renderContact(container) {
  if (!container) return;
  
  container.innerHTML = `
    <!-- SCENE 06: CONTACT SECTION -->
    <section id="contact-scene" class="relative w-full min-h-screen flex flex-col justify-between bg-[#0A0A0A] border-t border-[#1E1E1E] z-30 select-none">
      
      <!-- Top Spacing -->
      <div class="h-24 md:h-32"></div>
      
      <!-- Main Content and Form Container -->
      <div class="relative w-full flex flex-col items-center justify-center flex-grow z-10 select-none max-w-4xl mx-auto px-6 md:px-12 pb-16">
        <div class="font-mono text-[9px] md:text-xs text-[#39FF14] tracking-[0.4em] uppercase mb-8">
          06 / CONTACT
        </div>
        
        <h2 class="font-display font-black text-4xl md:text-6xl tracking-tighter text-[#F5F5F5] uppercase text-center leading-[1.0] w-full px-4 mb-4">
          LET'S BUILD<br>
          <span class="text-[#39FF14] inline-block mt-2">SOMETHING USEFUL.</span>
        </h2>
        
        <p class="font-sans text-xs md:text-sm text-[#9A9A9A] tracking-wide text-center max-w-md mb-12 uppercase">
          Have an idea, project, or opportunity? Drop a message below or contact me directly.
        </p>

        <!-- Professional Contact Form -->
        <form id="contact-form" class="w-full max-w-xl space-y-6 text-left" novalidate>
          <!-- 
            Web3Forms Public Access Key.
            Generate your free key at https://web3forms.com/ and replace the access_key value below.
          -->
          <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY_HERE">
          <input type="hidden" name="from_name" value="Manikandan Portfolio Contact">
          <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
          
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div class="flex flex-col">
              <label for="form-name" class="font-mono text-[9px] text-[#9A9A9A] tracking-[0.2em] uppercase mb-2">Name *</label>
              <input type="text" id="form-name" name="name" required class="w-full bg-[#141414] border border-[#1E1E1E] focus:border-[#39FF14] px-4 py-3 text-sm text-[#F5F5F5] font-sans transition-colors outline-none placeholder-[#3A3A3A] tracking-wide" placeholder="Your Name">
              <span class="form-error font-mono text-[8px] text-red-500 tracking-wider mt-1.5 hidden">NAME IS REQUIRED</span>
            </div>
            
            <div class="flex flex-col">
              <label for="form-email" class="font-mono text-[9px] text-[#9A9A9A] tracking-[0.2em] uppercase mb-2">Email *</label>
              <input type="email" id="form-email" name="email" required class="w-full bg-[#141414] border border-[#1E1E1E] focus:border-[#39FF14] px-4 py-3 text-sm text-[#F5F5F5] font-sans transition-colors outline-none placeholder-[#3A3A3A] tracking-wide" placeholder="your.email@domain.com">
              <span class="form-error font-mono text-[8px] text-red-500 tracking-wider mt-1.5 hidden">VALID EMAIL IS REQUIRED</span>
            </div>
          </div>

          <div class="flex flex-col">
            <label for="form-subject" class="font-mono text-[9px] text-[#9A9A9A] tracking-[0.2em] uppercase mb-2">Subject *</label>
            <input type="text" id="form-subject" name="subject" required class="w-full bg-[#141414] border border-[#1E1E1E] focus:border-[#39FF14] px-4 py-3 text-sm text-[#F5F5F5] font-sans transition-colors outline-none placeholder-[#3A3A3A] tracking-wide" placeholder="Inquiry / Opportunity">
            <span class="form-error font-mono text-[8px] text-red-500 tracking-wider mt-1.5 hidden">SUBJECT IS REQUIRED</span>
          </div>

          <div class="flex flex-col">
            <label for="form-message" class="font-mono text-[9px] text-[#9A9A9A] tracking-[0.2em] uppercase mb-2">Message *</label>
            <textarea id="form-message" name="message" required rows="4" class="w-full bg-[#141414] border border-[#1E1E1E] focus:border-[#39FF14] px-4 py-3 text-sm text-[#F5F5F5] font-sans transition-colors outline-none placeholder-[#3A3A3A] tracking-wide resize-none" placeholder="Your message details..."></textarea>
            <span class="form-error font-mono text-[8px] text-red-500 tracking-wider mt-1.5 hidden">MESSAGE IS REQUIRED</span>
          </div>

          <div class="relative">
            <button type="submit" id="submit-btn" class="magnetic w-full py-4 bg-[#141414] border border-[#1E1E1E] hover:border-[#39FF14] hover:bg-[#39FF14]/5 text-center transition-all group outline-none focus:ring-1 focus:ring-[#39FF14]" data-cursor="SEND" data-magnetic-strength="0.2">
              <span id="submit-btn-text" class="font-mono text-[10px] font-bold tracking-[0.25em] text-[#F5F5F5] group-hover:text-[#39FF14] uppercase transition-colors">SEND MESSAGE</span>
            </button>
            
            <!-- Dynamic Status Presentation -->
            <div id="form-status" class="hidden font-mono text-[10px] text-center p-3 mt-4 border"></div>
          </div>
        </form>

        <!-- Developer Links & Fallbacks -->
        <div class="flex flex-wrap justify-center gap-4 mt-12 w-full max-w-xl border-t border-[#1E1E1E]/50 pt-8">
          <a href="${socialLinks.github}" target="_blank" rel="noopener noreferrer" aria-label="Visit GitHub" class="magnetic contact-btn px-5 py-3.5 bg-[#141414] border border-[#1E1E1E] text-[10px] font-mono tracking-[0.2em] font-bold text-[#F5F5F5] hover:text-[#39FF14] hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all uppercase rounded-full" data-cursor="GITHUB" data-magnetic-strength="0.4">
            GITHUB
          </a>
          <a href="${socialLinks.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="Visit LinkedIn" class="magnetic contact-btn px-5 py-3.5 bg-[#141414] border border-[#1E1E1E] text-[10px] font-mono tracking-[0.2em] font-bold text-[#F5F5F5] hover:text-[#39FF14] hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all uppercase rounded-full" data-cursor="LINKEDIN" data-magnetic-strength="0.4">
            LINKEDIN
          </a>
          <a href="mailto:${socialLinks.email}" target="_blank" rel="noopener noreferrer" aria-label="Send email" class="magnetic contact-btn px-5 py-3.5 bg-[#141414] border border-[#1E1E1E] text-[10px] font-mono tracking-[0.2em] font-bold text-[#F5F5F5] hover:text-[#39FF14] hover:border-[#39FF14]/50 hover:bg-[#39FF14]/5 transition-all uppercase rounded-full" data-cursor="EMAIL" data-magnetic-strength="0.4">
            EMAIL ME
          </a>
          <a href="assets/manikandan-resume.pdf" download="Manikandan_R_Resume.pdf" class="magnetic contact-btn px-5 py-3.5 bg-[#39FF14]/10 border border-[#39FF14]/30 text-[10px] font-mono tracking-[0.2em] font-bold text-[#39FF14] hover:bg-[#39FF14]/20 hover:border-[#39FF14] transition-all uppercase rounded-full" data-cursor="DOWNLOAD" data-magnetic-strength="0.4">
            DOWNLOAD RESUME
          </a>
        </div>
      </div>
      
      <!-- Footer Segment -->
      <footer class="w-full relative z-10 border-t border-[#1E1E1E] bg-[#0A0A0A] pb-4 pt-4 md:pt-6">
        
        <!-- Endless Marquee container -->
        <div class="relative w-full overflow-hidden flex border-b border-[#1E1E1E] pb-4 md:pb-6 mb-4 md:mb-6 select-none opacity-50">
          <div class="marquee-track flex whitespace-nowrap font-display font-black text-2xl md:text-4xl tracking-[0.2em] uppercase text-[#F5F5F5]">
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

export function setupContactInteractions() {
  const form = document.getElementById('contact-form');
  const backToTop = document.getElementById('back-to-top');

  // 1. Back to Top Smooth Scroll Handler
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2, ease: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // 2. Interactive Form Validation and Submissions
  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('form-name');
      const emailInput = document.getElementById('form-email');
      const subjectInput = document.getElementById('form-subject');
      const messageInput = document.getElementById('form-message');
      const submitBtn = document.getElementById('submit-btn');
      const submitBtnText = document.getElementById('submit-btn-text');
      const statusDiv = document.getElementById('form-status');

      // Reset states
      let isValid = true;
      document.querySelectorAll('.form-error').forEach(el => el.classList.add('hidden'));
      statusDiv.className = 'hidden font-mono text-[10px] text-center p-3 mt-4 border';

      // Validation check - Name
      if (!nameInput.value.trim()) {
        nameInput.nextElementSibling.classList.remove('hidden');
        isValid = false;
      }
      
      // Validation check - Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.nextElementSibling.classList.remove('hidden');
        isValid = false;
      }

      // Validation check - Subject
      if (!subjectInput.value.trim()) {
        subjectInput.nextElementSibling.classList.remove('hidden');
        isValid = false;
      }

      // Validation check - Message
      if (!messageInput.value.trim()) {
        messageInput.nextElementSibling.classList.remove('hidden');
        isValid = false;
      }

      if (!isValid) return;

      // Intercept placeholder key before calling the API
      const accessKey = form.querySelector('input[name="access_key"]').value;
      if (accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY_HERE') {
        statusDiv.classList.remove('hidden');
        statusDiv.classList.add('text-[#39FF14]', 'border-[#39FF14]/50', 'bg-[#39FF14]/5');
        statusDiv.innerHTML = `
          <div class="space-y-3 p-1">
            <p class="font-bold text-[#39FF14]">// CONFIGURATION REQUIRED</p>
            <p class="text-[#9A9A9A] text-[10px] leading-relaxed uppercase">
              Static forms require an active access key. Get your free key at 
              <a href="https://web3forms.com/" target="_blank" rel="noopener noreferrer" class="underline text-white hover:text-[#39FF14]">web3forms.com</a> 
              and update the <code>access_key</code> field in <code>src/components/contact.js</code>.
            </p>
            <div class="h-[1px] w-full bg-[#1E1E1E] my-2"></div>
            <p class="text-[#9A9A9A] text-[10px] uppercase">
              In the meantime, click below to email this message directly:
            </p>
            <a href="mailto:${socialLinks.email}?subject=${encodeURIComponent(subjectInput.value)}&body=${encodeURIComponent(messageInput.value)}" class="inline-block mt-2 px-4 py-2 border border-[#39FF14] text-[#39FF14] hover:bg-[#39FF14] hover:text-black transition-all uppercase text-[9px] font-bold">
              SEND DIRECTLY VIA EMAIL CLIENT →
            </a>
          </div>
        `;
        return;
      }

      // Loading State
      submitBtn.disabled = true;
      submitBtnText.textContent = 'SENDING...';
      submitBtn.classList.add('opacity-50', 'cursor-not-allowed');

      try {
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: json
        });

        const result = await response.json();

        if (response.status === 200 && result.success) {
          // Success State
          statusDiv.classList.remove('hidden');
          statusDiv.classList.add('text-[#39FF14]', 'border-[#39FF14]/50', 'bg-[#39FF14]/5');
          statusDiv.textContent = 'MESSAGE SENT SUCCESSFULLY. THANK YOU!';
          form.reset();
        } else {
          // API failure status
          statusDiv.classList.remove('hidden');
          statusDiv.classList.add('text-red-500', 'border-red-500/50', 'bg-red-500/5');
          statusDiv.textContent = result.message || 'SUBMISSION FAILED. PLEASE TRY THE EMAIL ME OPTION BELOW.';
        }
      } catch (err) {
        // Network connection error
        statusDiv.classList.remove('hidden');
        statusDiv.classList.add('text-red-500', 'border-red-500/50', 'bg-red-500/5');
        statusDiv.textContent = 'NETWORK ERROR. PLEASE EMAIL DIRECTLY USING EMAIL ME BUTTON.';
        console.error('[Contact Submit Error]', err);
      } finally {
        // Restore button states
        submitBtn.disabled = false;
        submitBtnText.textContent = 'SEND MESSAGE';
        submitBtn.classList.remove('opacity-50', 'cursor-not-allowed');
      }
    });
  }
}
