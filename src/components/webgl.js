/**
 * WebGL Component — Phase F Cinematic Digital Intelligence Core
 * Lazy-loaded Three.js network visualizing AI, Data, Code, and Systems.
 */

export function initWebGL(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Graceful degradation: Disable for mobile and reduced motion
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const isMobile = window.innerWidth < 1024;
  
  if (motionQuery.matches || isMobile) {
    console.log("[WebGL] Bypassed for mobile/reduced-motion. Rendering static fallback.");
    container.innerHTML = '<div class="absolute inset-0 bg-[radial-gradient(circle,rgba(57,255,20,0.05)_0%,transparent_70%)]"></div>';
    return;
  }

  // Lazy Load Three.js to preserve fast initial page render
  const script = document.createElement('script');
  script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
  script.onload = () => buildScene(container);
  document.body.appendChild(script);
}

function buildScene(container) {
  const THREE = window.THREE;
  
  // 1. Scene Setup
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0A0A0A, 0.0012); // Deep atmospheric fade

  // 2. Camera Setup
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.z = 400;
  camera.position.x = 0;
  camera.position.y = 0;

  // 3. Renderer Setup
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for performance
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Fade in canvas smoothly
  gsap.to(renderer.domElement, { opacity: 1, duration: 2, ease: "power2.inOut" });

  // 4. Data Nodes (Particles)
  const particleCount = 180;
  const geometry = new THREE.BufferGeometry();
  const vertices = [];
  
  for (let i = 0; i < particleCount; i++) {
    // Generate spherical distribution for organic tech feel
    const r = 400 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    vertices.push(x, y, z);
  }
  
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

  const material = new THREE.PointsMaterial({
    color: 0x39FF14, // Accent Green
    size: 2.5,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });
  
  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // 5. Connections (LineSegments)
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0x9A9A9A, // Secondary text color
    transparent: true,
    opacity: 0.12,
    blending: THREE.AdditiveBlending
  });

  const lineGeo = new THREE.BufferGeometry();
  const linePos = [];
  
  // Connect nearest neighbors to form network
  for(let i = 0; i < particleCount; i++) {
    for(let j = i + 1; j < particleCount; j++) {
       const dx = vertices[i*3] - vertices[j*3];
       const dy = vertices[i*3+1] - vertices[j*3+1];
       const dz = vertices[i*3+2] - vertices[j*3+2];
       const dist = dx*dx + dy*dy + dz*dz;
       
       if(dist < 22000) { // Connection threshold
         linePos.push(vertices[i*3], vertices[i*3+1], vertices[i*3+2]);
         linePos.push(vertices[j*3], vertices[j*3+1], vertices[j*3+2]);
       }
    }
  }
  lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
  const lines = new THREE.LineSegments(lineGeo, lineMaterial);
  scene.add(lines);

  // Create a unified group for easy rotation
  const coreGroup = new THREE.Group();
  coreGroup.add(particles);
  coreGroup.add(lines);
  
  // Shift right asymmetrically to sit behind portrait
  coreGroup.position.x = window.innerWidth > 1440 ? 150 : 100;
  scene.add(coreGroup);

  // 6. Interactions (Mouse + Scroll)
  let mouseX = 0;
  let mouseY = 0;
  let targetX = 0;
  let targetY = 0;
  
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - windowHalfX);
    mouseY = (e.clientY - windowHalfY);
  }, { passive: true });

  // Use Lenis scroll position if available, otherwise fallback to native
  let scrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    scrollY = window.scrollY;
  }, { passive: true });

  // 7. Resize Handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    
    // Recalculate asymmetric position
    coreGroup.position.x = window.innerWidth > 1440 ? 150 : (window.innerWidth > 1024 ? 100 : 0);
  });

  // 8. Render Loop
  const animate = () => {
    requestAnimationFrame(animate);

    // Smooth mouse target interpolation
    targetX = mouseX * 0.001;
    targetY = mouseY * 0.001;

    // Organic continuous rotation
    coreGroup.rotation.y += 0.001;
    coreGroup.rotation.x += 0.0005;

    // Parallax response to mouse
    coreGroup.rotation.y += 0.05 * (targetX - coreGroup.rotation.y);
    coreGroup.rotation.x += 0.05 * (targetY - coreGroup.rotation.x);

    // Scroll depth interaction (pushes core deeper and translates up slightly)
    const scrollFactor = scrollY * 0.5;
    camera.position.z = 400 + scrollFactor;
    camera.position.y = -scrollY * 0.2;

    renderer.render(scene, camera);
  };
  
  animate();
}
