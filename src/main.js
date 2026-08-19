/**
 * Manikandan.R — Portfolio Bootstrapper (Phase 2)
 * Coordinates ES6 modules, handles mounting, checking accessibility preferences,
 * initializes Lenis, and binds loader outcomes to Hero entry sequences.
 */
import { renderLoading, startLoadingAnimation } from './components/loading.js?v=23';
import { renderNavigation, setupNavigationInteractions } from './components/navigation.js?v=23';
import { renderHero, animateHeroEntrance } from './components/hero.js?v=23';
import { renderAbout } from './components/about.js?v=23';
import { renderSkills } from './components/skills.js?v=23';
import { renderProjects } from './components/projects.js?v=23';
import { renderJourney } from './components/journey.js?v=23';
import { renderCertifications } from './components/certifications.js?v=23';
import { renderContact, setupContactInteractions } from './components/contact.js?v=23';

import { initSmoothScroll } from './utils/smooth-scroll.js?v=23';
import { initGlobalAnimations } from './utils/animations.js?v=23';
import { initWebGL } from './components/webgl.js?v=23';
import { initCursor } from './utils/cursor.js?v=23';
import { initMagnetics } from './utils/magnetic.js?v=23';

document.addEventListener('DOMContentLoaded', () => {
  console.log("[Portfolio Bootstrapper] Initializing Phase 2 layout elements...");

  // 1. Resolve mounting targets
  const loaderMount = document.getElementById('loader');
  const navMount = document.getElementById('nav-mount');
  const heroMount = document.getElementById('hero-mount');
  const aboutMount = document.getElementById('about-mount');
  const skillsMount = document.getElementById('skills-mount');
  const projectsMount = document.getElementById('projects-mount');
  const certificationsMount = document.getElementById('certifications-mount');
  const journeyMount = document.getElementById('journey-mount');
  const contactMount = document.getElementById('contact-mount');

  // 2. Render structural sections
  renderLoading(loaderMount);
  renderNavigation(navMount);
  renderHero(heroMount);
  renderAbout(aboutMount);
  renderSkills(skillsMount);
  renderProjects(projectsMount);
  renderCertifications(certificationsMount);
  renderJourney(journeyMount);
  renderContact(contactMount);

  // 3. Accessibility preference checks
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const handleMotionChange = (query) => {
    if (query.matches) {
      document.body.classList.add('prefers-reduced-motion');
      console.log("[Accessibility] User prefers reduced motion. Motion timelines disabled.");
    } else {
      document.body.classList.remove('prefers-reduced-motion');
    }
  };
  handleMotionChange(reducedMotionQuery);
  reducedMotionQuery.addEventListener('change', handleMotionChange);

  // 4. Initialize Lenis Smooth Scroll
  initSmoothScroll();
  
  // 5. Initialize Phase C interactive core (Cursor & Magnetics)
  initCursor();
  initMagnetics();

  // 6. Initialize Navigation overlay handlers & scroll triggers
  setupNavigationInteractions();

  // 6.5. Initialize Contact form handlers
  setupContactInteractions();

  // 7. Initialize Global scroll triggers (Transitions between sections)
  initGlobalAnimations();

  // 8. Start cinematic loading sequence
  // It handles its own timeline and triggers the callback to begin Hero entrance
  startLoadingAnimation(() => {
    console.log("[Loading] Loader completed. Launching Hero entrance animation...");
    initWebGL('webgl-canvas-container');
    animateHeroEntrance();
  });
});
