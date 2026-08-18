/* ==========================================================================
   Manikandan R. Portfolio Javascript
   Interactivity: Nav sticky/scroll spy, code particles, native modals, form validation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all core interactive components
  initNavbar();
  initCodeParticles();
  initProjectsModal();
  initContactForm();
  initActiveSectionObserver();
});

/* ==========================================================================
   1. Navbar & Navigation Menu
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link, .nav-btn');

  // Sticky navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

  // Mobile Hamburger Toggle
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.contains('open');
      
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
      
      // Update ARIA expanded state
      navToggle.setAttribute('aria-expanded', !isOpen);
    });
  }

  // Close Mobile Menu when clicking links
  links.forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks.classList.contains('open')) {
        navLinks.classList.remove('open');
        navToggle.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

/* ==========================================================================
   2. Active Section Scroll Spy
   ========================================================================== */
function initActiveSectionObserver() {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');

  const options = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Trigger when section occupies the middle portion
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }, options);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   3. Background Code Particles Generation
   ========================================================================== */
function initCodeParticles() {
  const container = document.getElementById('home');
  if (!container) return;

  const particleSymbols = [
    '0', '1', '{', '}', '[', ']', '=>', 'python', 'def', 'class', 'import',
    'AI', 'Data', 'SQL', 'HTML', 'CSS', 'JS', 'print', 'data', 'pandas'
  ];
  
  const particleCount = 20;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('span');
    particle.className = 'code-particle';
    particle.innerText = particleSymbols[Math.floor(Math.random() * particleSymbols.length)];
    
    // Set random positioning
    particle.style.left = `${Math.random() * 95}%`;
    particle.style.top = `${Math.random() * 90 + 5}%`;
    particle.style.fontSize = `${Math.random() * 10 + 10}px`;
    particle.style.opacity = `${Math.random() * 0.12 + 0.03}`;
    
    // Animation offsets and duration
    particle.style.animation = `floatParticle ${Math.random() * 20 + 25}s linear infinite`;
    particle.style.animationDelay = `${Math.random() * -15}s`;
    
    container.appendChild(particle);
  }
}

// Add Float Particle animation dynamically to document
const styleSheet = document.createElement('style');
styleSheet.innerText = `
  .code-particle {
    position: absolute;
    color: var(--accent-primary);
    font-family: var(--font-mono);
    pointer-events: none;
    z-index: 0;
  }
  @keyframes floatParticle {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-50px) rotate(180deg); }
    100% { transform: translateY(-100px) rotate(360deg); }
  }
`;
document.head.appendChild(styleSheet);

/* ==========================================================================
   4. Interactive Projects Modal Database & Mapping
   ========================================================================== */
const projectData = {
  'resume-analyzer': {
    title: 'AI Resume Analyzer',
    category: 'Python • Flask • AI Integration',
    problem: 'Resumes often fail basic ATS checks because of formatting, poor keyword mapping, or structural discrepancies, making it hard for students to understand how to align their resume with industry expectations.',
    idea: 'Build an AI-assisted web application that processes PDF resumes, extracts text sections, and uses a structured analysis prompt to evaluate it against standard metrics (keywords, readability, structural alignment) and output concrete tips.',
    tech: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'PDF Processing', 'AI / Gemini API'],
    works: [
      'User uploads a PDF resume via the web interface.',
      'Python Flask backend receives the file and extracts raw text using a PDF parser.',
      'The extracted text is packaged into an AI system instruction payload.',
      'The backend interacts with the AI model to perform scoring and recommendation checks.',
      'The structured result report (scores, gaps, actionable tips) is rendered back to the user.'
    ],
    features: [
      'Resume/PDF file parsing and text segmentation.',
      'AI-powered missing keyword identification.',
      'Actionable correction points (formatting, vocabulary, skill alignment).',
      'Clean interactive scores panel with detailed categories.',
      'No data saved locally to respect applicant privacy.'
    ],
    learned: [
      'Handling PDF file types, character encodings, and layout Extractions in Python.',
      'Writing structured, instruction-driven system prompts for LLM model inference.',
      'Connecting a Python Flask server API with a client-side Javascript frontend using Fetch.',
      'Building readable data displays for analytical reports.'
    ],
    github: '#', // Placeholder
    demo: '' // Empty means no demo link
  },
  'attendance-system': {
    title: 'Attendance Management System',
    category: 'Python • Tkinter • Database',
    problem: 'Manual attendance systems (paper rosters, simple spreadsheets) are slow, prone to reporting errors, difficult to query historically, and take substantial administrative time to audit weekly ratios.',
    idea: 'Develop a desktop dashboard application with local data persistence to simplify registry management, daily checklist tracking, and student attendance reporting.',
    tech: ['Python', 'Tkinter GUI', 'JSON / File Persistence', 'Data Processing', 'CSV Utilities'],
    works: [
      'Administrators load the application to view the student database.',
      'Class rosters are checked off daily using an interactive grid list.',
      'Status details (Present, Absent) are persisted with date-stamps in local storage.',
      'The reporting engine calculates monthly ratios and individual compliance percentages.',
      'Data can be exported into standard CSV files for archiving.'
    ],
    features: [
      'Simple, user-friendly desktop GUI grid.',
      'Quick add, edit, and search parameters for student details.',
      'Automated aggregate tracking (calculates attendance ratios instantly).',
      'One-click CSV report export for easy sharing.',
      'Lightweight local setup with zero external server dependencies.'
    ],
    learned: [
      'Designing desktop user interfaces using Tkinter widgets, layouts, and frame-packing.',
      'Managing file read/write operations and designing clean storage structures.',
      'Handling date arithmetic and building grouping algorithms for statistics.',
      'Optimizing standard data entry workflows for productivity.'
    ],
    github: '#', // Placeholder
    demo: ''
  },
  'color-sorter': {
    title: 'Color Sorting Machine',
    category: 'Hardware • Arduino Uno • Sensors',
    problem: 'Sorting items on industrial assembly lines is repetitive and manual. Developing physical automation models helps learn the basics of hardware-software integration.',
    idea: 'Create an automated hardware-driven mechanical prototype that detects colors of incoming spheres and physically routes them into separate containers.',
    tech: ['Arduino Uno', 'C++ / Arduino IDE', 'TCS3200 Color Sensor', 'Servo Motor', 'Hardware Automation'],
    works: [
      'Items roll down a physical track, halting under a TCS3200 color sensor.',
      'TCS3200 reads light frequencies reflecting off the item (Red, Green, Blue components).',
      'Arduino microchip processes incoming frequency values, classifying the matched color.',
      'Arduino commands a servo motor actuator to rotate a physical chute to the target bin.',
      'The item is released into the bin and the servo returns to the home position.'
    ],
    features: [
      'Real-time automated control loop in hardware.',
      'Integrated TCS3200 color frequency calibration.',
      'Precision servo alignment using angular control.',
      'Serial monitor debugging for testing and logging calibration thresholds.',
      'Visual LED indicators displaying current sorted status.'
    ],
    learned: [
      'Calibrating color frequency readings across different ambient lighting conditions.',
      'Controlling actuators (servos) using pulse-width modulation (PWM) signals.',
      'Interfacing electronic sensors with microcontrollers and managing signal noise.',
      'Understanding schematic diagrams, voltage divisions, and current limits.'
    ],
    github: '#', // Placeholder
    demo: ''
  }
};

function initProjectsModal() {
  const modal = document.getElementById('projectModal');
  const modalContent = document.getElementById('modalContent');
  const closeBtn = document.getElementById('modalCloseBtn');
  const cards = document.querySelectorAll('.project-card');

  if (!modal || !modalContent) return;

  // Open modal with appropriate content on card click
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Don't open if clicked button is something else inside (just in case)
      const projectId = card.getAttribute('data-project-id');
      const data = projectData[projectId];
      
      if (data) {
        renderModalContent(data);
        modal.showModal();
        document.body.style.overflow = 'hidden'; // Lock background scroll
      }
    });
  });

  // Close modal click handlers
  closeBtn.addEventListener('click', closeModal);
  
  // Close on clicking backdrop
  modal.addEventListener('click', (e) => {
    const rect = modal.getBoundingClientRect();
    const isInDialog = (rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX && e.clientX <= rect.left + rect.width);
    if (!isInDialog) {
      closeModal();
    }
  });

  // Close on Escape key is automatically handled by native browser dialog!
  modal.addEventListener('close', () => {
    document.body.style.overflow = ''; // Unlock background scroll
  });

  function closeModal() {
    modal.close();
  }

  function renderModalContent(data) {
    let worksListHTML = '';
    data.works.forEach(step => {
      worksListHTML += `<li>${step}</li>`;
    });

    let featuresListHTML = '';
    data.features.forEach(feat => {
      featuresListHTML += `<li>${feat}</li>`;
    });

    let learnedListHTML = '';
    data.learned.forEach(item => {
      learnedListHTML += `<li>${item}</li>`;
    });

    let techStackHTML = '';
    data.tech.forEach(t => {
      techStackHTML += `<span>${t}</span>`;
    });

    let linksHTML = '';
    if (data.github) {
      linksHTML += `
        <a href="${data.github}" class="btn btn-primary btn-small" target="_blank" rel="noopener noreferrer">
          <span>GitHub Code</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </a>
      `;
    }
    if (data.demo) {
      linksHTML += `
        <a href="${data.demo}" class="btn btn-secondary btn-small" target="_blank" rel="noopener noreferrer">
          <span>Live Demo</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
        </a>
      `;
    } else {
      linksHTML += `
        <a href="#" class="btn btn-secondary btn-small" onclick="alert('This project runs locally. Live demo is currently unavailable.'); return false;">
          <span>Live Demo (Local Only)</span>
        </a>
      `;
    }

    modalContent.innerHTML = `
      <h2 class="modal-title">${data.title}</h2>
      <span class="modal-category">${data.category}</span>
      
      <div class="modal-grid">
        <div class="modal-left">
          <div>
            <h3 class="modal-section-title">The Problem</h3>
            <p class="modal-desc-text">${data.problem}</p>
          </div>
          
          <div>
            <h3 class="modal-section-title">The Idea</h3>
            <p class="modal-desc-text">${data.idea}</p>
          </div>
          
          <div>
            <h3 class="modal-section-title">How It Works</h3>
            <ol class="modal-list">${worksListHTML}</ol>
          </div>
          
          <div>
            <h3 class="modal-section-title">What I Learned</h3>
            <ul class="modal-list">${learnedListHTML}</ul>
          </div>
        </div>
        
        <div class="modal-right">
          <div>
            <h3 class="modal-section-title">Key Features</h3>
            <ul class="modal-list">${featuresListHTML}</ul>
          </div>
          
          <div>
            <h3 class="modal-section-title">Technologies</h3>
            <div class="modal-tech-stack">${techStackHTML}</div>
          </div>
          
          <div>
            <h3 class="modal-section-title">Project Links</h3>
            <div class="modal-links-card">
              ${linksHTML}
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

/* ==========================================================================
   5. Contact Form Validation & Submission
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('formName');
  const emailInput = document.getElementById('formEmail');
  const messageInput = document.getElementById('formMessage');
  const submitBtn = document.getElementById('formSubmitBtn');
  const statusDiv = document.getElementById('formStatus');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Clear previous status
    statusDiv.className = 'form-status';
    statusDiv.style.display = 'none';
    
    // Validate inputs
    const isNameValid = validateField(nameInput, 'nameError');
    const isEmailValid = validateEmail(emailInput, 'emailError');
    const isMessageValid = validateField(messageInput, 'messageError');
    
    if (isNameValid && isEmailValid && isMessageValid) {
      // Simulate form submission
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Sending...</span> <span class="focus-checkbox loading" style="width:12px; height:12px; border-width:1.5px; margin-top:0;"></span>`;
      
      setTimeout(() => {
        // Successful submission simulation
        statusDiv.innerText = "Thank you! Your message was sent successfully. Manikandan will contact you shortly.";
        statusDiv.className = 'form-status success';
        
        // Reset Form
        form.reset();
        
        // Reset Button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Clear active check classes
        nameInput.parentElement.classList.remove('invalid');
        emailInput.parentElement.classList.remove('invalid');
        messageInput.parentElement.classList.remove('invalid');
      }, 1500);
    }
  });

  // Dynamic input triggers to clear errors on keyup/change
  nameInput.addEventListener('input', () => {
    if (nameInput.value.trim() !== '') nameInput.parentElement.classList.remove('invalid');
  });

  emailInput.addEventListener('input', () => {
    if (emailInput.value.trim() !== '' && validateEmailFormat(emailInput.value)) {
      emailInput.parentElement.classList.remove('invalid');
    }
  });

  messageInput.addEventListener('input', () => {
    if (messageInput.value.trim() !== '') messageInput.parentElement.classList.remove('invalid');
  });
}

function validateField(input, errorId) {
  if (input.value.trim() === '') {
    input.parentElement.classList.add('invalid');
    return false;
  }
  input.parentElement.classList.remove('invalid');
  return true;
}

function validateEmail(input, errorId) {
  const value = input.value.trim();
  if (value === '') {
    input.parentElement.classList.add('invalid');
    document.getElementById(errorId).innerText = "Email is required";
    return false;
  }
  if (!validateEmailFormat(value)) {
    input.parentElement.classList.add('invalid');
    document.getElementById(errorId).innerText = "Please enter a valid email address";
    return false;
  }
  input.parentElement.classList.remove('invalid');
  return true;
}

function validateEmailFormat(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email.toLowerCase());
}
