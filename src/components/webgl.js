/**
 * WebGL Component — Deep Immersive 3D Digital Environment
 * Implements a persistent, multi-layered, asymmetric 3D background.
 * Uses GSAP for scroll-synced evolution (Hero -> About -> Skills -> Projects -> Contact).
 */

export function initWebGL(containerId) {
  const globalContainer = document.getElementById('webgl-global-bg');
  if (!globalContainer) return;

  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (motionQuery.matches) {
    console.log("[WebGL] Bypassed for reduced-motion.");
    return;
  }

  // Lazy Load Three.js
  if (!window.THREE) {
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.onload = () => buildCinematicBackground(globalContainer);
    document.body.appendChild(script);
  } else {
    buildCinematicBackground(globalContainer);
  }
}

function buildCinematicBackground(container) {
  const THREE = window.THREE;
  const isMobile = window.innerWidth < 1024;

  // 1. Scene setup
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0A0A0A, isMobile ? 0.0015 : 0.0006); // Atmospheric fog

  // 2. Camera setup
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 4000);
  camera.position.set(0, 0, 800);

  // 3. Renderer setup
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.2;
  container.appendChild(renderer.domElement);

  // Initial fade-in
  gsap.to(container, { opacity: 1, duration: 3, ease: "power2.inOut" });

  // 4. Lighting - Real 3D Cinematic Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.05);
  scene.add(ambientLight);

  const keyLight = new THREE.DirectionalLight(0x39FF14, 0.6); // Subtle green key
  keyLight.position.set(300, 400, 500);
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0xffffff, 0.2); // Soft neutral fill
  fillLight.position.set(-300, 100, 300);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0x39FF14, 1.5); // Green rim light from behind
  rimLight.position.set(0, 600, -800);
  scene.add(rimLight);

  // MASTER GROUP to hold all scroll-animated content
  const worldGroup = new THREE.Group();
  scene.add(worldGroup);

  // ------------------------------------------------------------------
  // LAYER 1: FAR BACKGROUND (Tiny particles / Faint stars)
  // ------------------------------------------------------------------
  const starCount = isMobile ? 400 : 1500;
  const starGeo = new THREE.BufferGeometry();
  const starPos = [];
  for (let i = 0; i < starCount; i++) {
    starPos.push(
      (Math.random() - 0.5) * 4000,
      (Math.random() - 0.5) * 4000,
      (Math.random() - 0.5) * 2500 - 800
    );
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0x9A9A9A,
    size: isMobile ? 1.5 : 2,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });
  const stars = new THREE.Points(starGeo, starMat);
  worldGroup.add(stars);

  // ------------------------------------------------------------------
  // LAYER 2: MIDGROUND (Visible 3D structures, glass geometry, rings)
  // ------------------------------------------------------------------
  const midGroup = new THREE.Group();
  
  // Materials
  const glassMat = new THREE.MeshPhysicalMaterial({
    color: 0x111111,
    metalness: 0.9,
    roughness: 0.1,
    transmission: 0.9,
    thickness: 0.5,
    transparent: true,
    opacity: 0.5,
    side: THREE.DoubleSide
  });

  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x39FF14,
    wireframe: true,
    transparent: true,
    opacity: 0.04
  });

  const darkMetalMat = new THREE.MeshStandardMaterial({
    color: 0x050505,
    metalness: 0.8,
    roughness: 0.5
  });

  // Asymmetric Composition
  if (!isMobile) {
    // Large abstract glass shard on the left
    const shardGeo = new THREE.IcosahedronGeometry(150, 1);
    const shard = new THREE.Mesh(shardGeo, glassMat);
    shard.position.set(-500, 150, -400);
    shard.rotation.set(0.5, 0.2, 0.1);
    midGroup.add(shard);

    // Inner wireframe for shard
    const shardWire = new THREE.Mesh(shardGeo, wireMat);
    shardWire.scale.set(0.95, 0.95, 0.95);
    shard.add(shardWire);

    // Dark metallic geometric fragment floating bottom right
    const fragGeo = new THREE.OctahedronGeometry(100, 0);
    const frag = new THREE.Mesh(fragGeo, darkMetalMat);
    frag.position.set(400, -250, -200);
    frag.rotation.set(0.1, 0.8, 0.4);
    midGroup.add(frag);

    // Subtle orbital ring crossing the center depth
    const ringGeo = new THREE.TorusGeometry(450, 1.5, 16, 100);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x39FF14, transparent: true, opacity: 0.08 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.position.set(0, -50, -500);
    ring.rotation.set(Math.PI / 2.2, 0.2, 0);
    midGroup.add(ring);
  }

  // Abstract connected nodes (floating through midground)
  const nodeCount = isMobile ? 50 : 150;
  const nodeGeo = new THREE.BufferGeometry();
  const nodePos = [];
  for (let i = 0; i < nodeCount; i++) {
    nodePos.push(
      (Math.random() - 0.5) * 2000,
      (Math.random() - 0.5) * 2000,
      (Math.random() - 0.5) * 1500 - 300
    );
  }
  nodeGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodePos, 3));
  const nodeMat = new THREE.PointsMaterial({
    color: 0x39FF14,
    size: 2.5,
    transparent: true,
    opacity: 0.35,
    blending: THREE.AdditiveBlending
  });
  const nodes = new THREE.Points(nodeGeo, nodeMat);
  midGroup.add(nodes);

  worldGroup.add(midGroup);

  // ------------------------------------------------------------------
  // LAYER 3: NEAR LAYER (Blurred, passing through)
  // ------------------------------------------------------------------
  const nearGroup = new THREE.Group();
  if (!isMobile) {
    const nearGeo = new THREE.IcosahedronGeometry(40, 0);
    for (let i = 0; i < 6; i++) {
      const nearMesh = new THREE.Mesh(nearGeo, wireMat);
      nearMesh.position.set(
        (Math.random() - 0.5) * 1200,
        (Math.random() - 0.5) * 1200,
        400 + Math.random() * 300 // Very close to camera
      );
      // Faint opacity so it doesn't block text
      nearMesh.material.opacity = 0.015;
      nearGroup.add(nearMesh);
    }
    worldGroup.add(nearGroup);
  }

  // ------------------------------------------------------------------
  // INTERACTION & SCROLL SYNC
  // ------------------------------------------------------------------
  
  let targetMouseX = 0;
  let targetMouseY = 0;
  let mouseX = 0;
  let mouseY = 0;

  document.addEventListener('mousemove', (e) => {
    // Normalize mouse coordinates to -1 to 1
    targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
    targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  }, { passive: true });

  // Sync with GSAP ScrollTrigger for section evolution
  if (window.gsap && window.ScrollTrigger) {
    gsap.registerPlugin(window.ScrollTrigger);

    // Create a master timeline locked to the total scroll height
    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      }
    });

    // Evolve the background as user scrolls down
    // 0% -> Hero (default state)
    // 25% -> About (spread apart)
    scrollTl.to(worldGroup.rotation, { x: 0.1, y: -0.2, z: 0.05, duration: 1 }, 0)
            .to(worldGroup.position, { z: -200, y: 100, duration: 1 }, 0)
    // 50% -> Skills (orbiting nodes)
            .to(worldGroup.rotation, { x: 0.2, y: 0.4, z: 0.1, duration: 1 }, 1)
            .to(worldGroup.position, { z: -400, y: 200, duration: 1 }, 1)
    // 75% -> Projects (deep environment push)
            .to(worldGroup.rotation, { x: -0.1, y: 0.8, z: 0.2, duration: 1 }, 2)
            .to(worldGroup.position, { z: 100, y: 300, duration: 1 }, 2)
    // 100% -> Contact (calmer)
            .to(worldGroup.rotation, { x: 0, y: 1.2, z: 0, duration: 1 }, 3)
            .to(worldGroup.position, { z: -100, y: 50, duration: 1 }, 3);
  }

  // ------------------------------------------------------------------
  // RESIZE HANDLER
  // ------------------------------------------------------------------
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ------------------------------------------------------------------
  // RENDER LOOP
  // ------------------------------------------------------------------
  const animate = () => {
    requestAnimationFrame(animate);

    // Smooth mouse interpolation (parallax)
    mouseX += (targetMouseX - mouseX) * 0.05;
    mouseY += (targetMouseY - mouseY) * 0.05;

    // Apply mouse parallax to camera (very subtle movement)
    // camera X/Y subtle, Z very subtle
    camera.position.x = mouseX * 45;
    camera.position.y = mouseY * 45;
    camera.lookAt(0, 0, 0);

    // Continuous slow rotations for life
    stars.rotation.y += 0.0001; // Far: very slow
    
    midGroup.children.forEach((child, i) => {
      // Mid: slow
      child.rotation.x += 0.0005 * (i % 2 === 0 ? 1 : -1);
      child.rotation.y += 0.0003 * (i % 3 === 0 ? 1 : -1);
    });

    nearGroup.children.forEach((child) => {
      // Near: slightly faster floating
      child.rotation.x += 0.001;
      child.rotation.y -= 0.0008;
    });

    // Move keylight slightly with mouse to cast dynamic reflections on glass
    keyLight.position.x = 300 + (mouseX * 300);
    keyLight.position.y = 400 + (mouseY * 300);

    renderer.render(scene, camera);
  };

  animate();
}
