/**
 * Animation Utilities — Phase D Scroll Storytelling
 * Implements transitions between sections, parallax offsets, and cinematic scroll sequences.
 */
export function initGlobalAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.warn("[GSAP] Animation modules not loaded. Bypassing global triggers.");
    return;
  }

  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isMobile = window.innerWidth < 768;
  
  if (motionQuery.matches) {
    console.log("[GSAP] Global transitions bypassed (reduced motion).");
    return;
  }

  // ==========================================
  // SCENE 01 -> SCENE 02 TRANSITION
  // ==========================================
  const heroSection = document.getElementById('hero');
  const heroContent = document.querySelector('#hero > div.relative.z-10');
  const portrait = document.querySelector('.hero-portrait');
  const aboutScene = document.getElementById('about-scene');

  if (heroSection && heroContent) {
    // Fade out Hero Content
    gsap.to(heroContent, {
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: -100,
      scale: 0.95,
      opacity: 0,
      ease: "none"
    });

    // Portrait parallax into the background
    if (portrait) {
      gsap.to(portrait, {
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
        y: 150,
        scale: 1.1,
        opacity: 0,
        filter: 'grayscale(100%) brightness(0.1)',
        ease: "none"
      });
    }
  }

  // ==========================================
  // SCENE 02: ABOUT REVEALS
  // ==========================================
  if (aboutScene) {
    const aboutReveal = document.querySelector('.about-reveal');
    const aboutHeading = document.querySelector('.about-heading');
    const bioParagraphs = document.querySelectorAll('.bio-paragraph');
    const aboutMeta = document.querySelector('.about-meta');

    // Split text or block reveal for heading
    gsap.from(aboutHeading, {
      scrollTrigger: {
        trigger: aboutScene,
        start: 'top 80%',
        end: 'top 30%',
        scrub: 1,
      },
      y: 100,
      opacity: 0,
      rotationX: 15,
      transformOrigin: 'left center',
      ease: "power2.out"
    });

    gsap.from(aboutReveal, {
      scrollTrigger: {
        trigger: aboutScene,
        start: 'top 85%',
        end: 'top 50%',
        scrub: 1,
      },
      y: 30,
      opacity: 0,
    });

    gsap.from(bioParagraphs, {
      scrollTrigger: {
        trigger: aboutScene,
        start: 'top 50%',
        end: 'center 30%',
        scrub: 1,
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out"
    });

    gsap.from(aboutMeta, {
      scrollTrigger: {
        trigger: aboutScene,
        start: 'center 60%',
        end: 'center 30%',
        scrub: 1,
      },
      x: -30,
      opacity: 0,
      ease: "power2.out"
    });
  }

  // ==========================================
  // SCENE 02.5: PHILOSOPHY STORYTELLING
  // ==========================================
  const philosophyScene = document.getElementById('philosophy-scene');
  const philWords = document.querySelectorAll('.phil-word');
  const philDesc = document.querySelector('.phil-desc');
  const philLabel = document.querySelector('.philosophy-label');

  if (philosophyScene && philWords.length > 0 && !isMobile) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: philosophyScene,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        pin: false // The sticky element handles pinning naturally without JS jank
      }
    });

    // Initial label fade in
    tl.to(philLabel, { opacity: 1, y: -10, duration: 0.5 });

    // The sequence: each word scales up and fades in, holds, then scales past camera
    philWords.forEach((word, index) => {
      
      const isLast = index === philWords.length - 1;
      const targetColor = isLast ? '#39FF14' : '#F5F5F5';
      
      // Enter from depth
      tl.fromTo(word, 
        { opacity: 0, scale: 0.5, filter: 'blur(10px)', color: '#1E1E1E' }, 
        { opacity: 1, scale: 1, filter: 'blur(0px)', color: targetColor, duration: 1.5, ease: 'power2.out' }
      );
      
      // Hold state to read it
      tl.to({}, { duration: 0.8 });
      
      // Exit (Scale toward camera and fade) - skip for the last word
      if (!isLast) {
        tl.to(word, { opacity: 0, scale: 2.5, filter: 'blur(20px)', duration: 1.2, ease: 'power2.in' });
      } else {
        // For REPEAT, we hold it and fade in the description
        tl.to(philDesc, { opacity: 1, y: -20, duration: 1.5, ease: 'power2.out' });
        tl.to({}, { duration: 2 }); // Hold the final composition
      }
    });
  } else if (philosophyScene && isMobile) {
    // Simpler animation for mobile to avoid performance issues
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: philosophyScene,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      }
    });
    
    tl.to(philLabel, { opacity: 1, duration: 1 });
    
    philWords.forEach((word, index) => {
      const isLast = index === philWords.length - 1;
      tl.fromTo(word, 
        { opacity: 0, scale: 0.8, color: '#1E1E1E' }, 
        { opacity: 1, scale: 1, color: isLast ? '#39FF14' : '#F5F5F5', duration: 2 }
      );
      if (!isLast) {
        tl.to(word, { opacity: 0, scale: 1.2, duration: 2 });
      }
    });
    
    tl.to(philDesc, { opacity: 1, duration: 2 });
    tl.to({}, { duration: 2 });
  }

  // ==========================================
  // SCENE 03: PROJECTS CINEMATIC GALLERY
  // ==========================================
  const projectsScene = document.getElementById('projects-scene');
  const projectsTrack = document.querySelector('.projects-track');
  const projectPanels = gsap.utils.toArray('.project-panel');

  if (projectsScene && projectsTrack && projectPanels.length > 0 && !isMobile) {
    
    // Create the horizontal scrolling timeline
    const scrollTween = gsap.to(projectPanels, {
      xPercent: -100 * (projectPanels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: projectsScene,
        pin: true,
        scrub: 1,
        // The duration of the scroll matches the width of the track
        end: () => "+=" + (projectsTrack.scrollWidth - window.innerWidth)
      }
    });

    // Animate inner elements of each panel as they horizontally scroll into view
    projectPanels.forEach((panel) => {
      const imageWrapper = panel.querySelector('.project-image-wrapper');
      const infoContainer = panel.querySelector('.project-info-container');
      
      // Image cinematic reveal
      gsap.from(imageWrapper, {
        clipPath: "inset(0 100% 0 0)",
        scale: 1.1,
        opacity: 0,
        scrollTrigger: {
          trigger: panel,
          containerAnimation: scrollTween,
          start: "left 80%",
          end: "left 20%",
          scrub: 1
        }
      });

      // Information stagger reveal
      gsap.from(infoContainer.children, {
        x: 100,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: panel,
          containerAnimation: scrollTween,
          start: "left 70%",
          end: "left 30%",
          scrub: 1
        }
      });
    });
  } else if (projectsScene && isMobile) {
    // Vertical reveals for Mobile
    projectPanels.forEach((panel) => {
      const imageWrapper = panel.querySelector('.project-image-wrapper');
      const infoContainer = panel.querySelector('.project-info-container');
      
      gsap.from(imageWrapper, {
        clipPath: "inset(0 100% 0 0)",
        opacity: 0,
        scrollTrigger: {
          trigger: panel,
          start: "top 80%",
          end: "top 40%",
          scrub: 1
        }
      });

      gsap.from(infoContainer.children, {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: panel,
          start: "top 70%",
          end: "top 40%",
          scrub: 1
        }
      });
    });
  }

  // ==========================================
  // SCENE 03.5: CERTIFICATIONS
  // ==========================================
  const certsSection = document.getElementById('certifications');
  if (certsSection) {
    const certGrid = certsSection.querySelector('.lg:col-span-8');
    const certHeader = certsSection.querySelector('.lg:col-span-4');

    if (certHeader && certGrid) {
      gsap.from(certHeader.children, {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
          trigger: certsSection,
          start: "top 80%",
          end: "top 50%",
          scrub: 1
        }
      });

      gsap.from(certGrid.children, {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: certsSection,
          start: "top 75%",
          end: "top 45%",
          scrub: 1
        }
      });
    }
  }

  // ==========================================
  // SCENE 04: JOURNEY TIMELINE
  // ==========================================
  const journeyScene = document.getElementById('journey-scene');
  const progressLine = document.querySelector('.journey-progress-line');
  const journeyRows = gsap.utils.toArray('.journey-row');

  if (journeyScene && progressLine && journeyRows.length > 0) {
    // Animate the master green line drawing down the screen
    gsap.to(progressLine, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: journeyScene,
        start: "top center",
        end: "bottom 80%",
        scrub: 1
      }
    });

    // Light up each node as the line passes it
    journeyRows.forEach((row) => {
      const yearText = row.querySelector('.journey-year');
      const node = row.querySelector('.journey-node');
      
      gsap.to(row, {
        opacity: 1,
        scrollTrigger: {
          trigger: row,
          start: "top 60%",
          end: "top 40%",
          scrub: 1
        }
      });
      
      gsap.to(node, {
        backgroundColor: "#39FF14",
        borderColor: "#39FF14",
        boxShadow: "0 0 15px rgba(57,255,20,0.8)",
        scrollTrigger: {
          trigger: row,
          start: "top 55%",
          end: "top 45%",
          scrub: true
        }
      });
      
      if (yearText) {
        gsap.to(yearText, {
          color: "#39FF14",
          scrollTrigger: {
            trigger: row,
            start: "top 55%",
            end: "top 45%",
            scrub: true
          }
        });
      }
    });
  }

  // ==========================================
  // SCENE 05: CONTACT & MARQUEE
  // ==========================================
  const marqueeTrack = document.querySelector('.marquee-track');
  
  if (marqueeTrack) {
    // Infinite looping horizontal marquee
    gsap.to(marqueeTrack, {
      xPercent: -50, // Needs to move exactly half its duplicated width to loop seamlessly
      ease: "none",
      duration: 20,
      repeat: -1
    });
  }

  const contactScene = document.getElementById('contact-scene');
  if (contactScene) {
    // Slight parallax reveal for the massive text
    gsap.from("#contact-scene h2", {
      y: 100,
      scale: 0.9,
      opacity: 0,
      scrollTrigger: {
        trigger: contactScene,
        start: "top 80%",
        end: "center center",
        scrub: 1
      }
    });
  }

  console.log("[GSAP] Cinematic scroll transitions initialized.");
}
