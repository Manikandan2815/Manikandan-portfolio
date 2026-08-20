/**
 * WebGL Component — Global 3D Background Environment
 * Multi-depth particle field with subtle geometric fragments.
 * Renders into #webgl-global-bg (fixed, z-0, pointer-events: none).
 * Falls back gracefully on mobile and reduced-motion.
 */

export function initWebGL(containerId) {
  // Use the global background container instead of the hero-local one
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
    script.onload = () => buildGlobalScene(globalContainer);
    document.body.appendChild(script);
  } else {
    buildGlobalScene(globalContainer);
  }
}

function buildGlobalScene(container) {
  const THREE = window.THREE;
  const isMobile = window.innerWidth < 1024;

  // 1. Scene
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0A0A0A, isMobile ? 0.002 : 0.0008);

  // 2. Camera
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 2000);
  camera.position.set(0, 0, 500);

  // 3. Renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: !isMobile, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.25 : 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  // Fade in the global background
  gsap.to(container, { opacity: 1, duration: 3, ease: "power2.inOut" });

  // ── LAYER 1: FAR BACKGROUND — Faint star field ──
  const starCount = isMobile ? 200 : 600;
  const starGeo = new THREE.BufferGeometry();
  const starPositions = [];
  for (let i = 0; i < starCount; i++) {
    starPositions.push(
      (Math.random() - 0.5) * 2000,
      (Math.random() - 0.5) * 2000,
      (Math.random() - 0.5) * 1500
    );
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPositions, 3));
  const starMat = new THREE.PointsMaterial({
    color: 0xFFFFFF,
    size: 1,
    transparent: true,
    opacity: 0.15,
    blending: THREE.AdditiveBlending
  });
  const stars = new THREE.Points(starGeo, starMat);
  scene.add(stars);

  // ── LAYER 2: MIDGROUND — Subtle green data nodes ──
  const nodeCount = isMobile ? 80 : 200;
  const nodeGeo = new THREE.BufferGeometry();
  const nodePositions = [];
  for (let i = 0; i < nodeCount; i++) {
    const r = 300 + Math.random() * 400;
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);
    nodePositions.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    );
  }
  nodeGeo.setAttribute('position', new THREE.Float32BufferAttribute(nodePositions, 3));
  const nodeMat = new THREE.PointsMaterial({
    color: 0x39FF14,
    size: isMobile ? 1.5 : 2,
    transparent: true,
    opacity: 0.25,
    blending: THREE.AdditiveBlending
  });
  const nodes = new THREE.Points(nodeGeo, nodeMat);
  scene.add(nodes);

  // ── LAYER 2.5: Thin connection lines between nearby midground nodes ──
  if (!isMobile) {
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x39FF14,
      transparent: true,
      opacity: 0.04,
      blending: THREE.AdditiveBlending
    });
    const linePositions = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = nodePositions[i*3] - nodePositions[j*3];
        const dy = nodePositions[i*3+1] - nodePositions[j*3+1];
        const dz = nodePositions[i*3+2] - nodePositions[j*3+2];
        const dist = dx*dx + dy*dy + dz*dz;
        if (dist < 15000) {
          linePositions.push(
            nodePositions[i*3], nodePositions[i*3+1], nodePositions[i*3+2],
            nodePositions[j*3], nodePositions[j*3+1], nodePositions[j*3+2]
          );
        }
      }
    }
    if (linePositions.length > 0) {
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lines);
    }
  }

  // ── LAYER 3: BACKGROUND OBJECTS — Faint wireframe geometries ──
  const geoGroup = new THREE.Group();
  if (!isMobile) {
    const shapes = [
      new THREE.IcosahedronGeometry(30, 0),
      new THREE.OctahedronGeometry(25, 0),
      new THREE.TetrahedronGeometry(20, 0),
    ];
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x39FF14,
      wireframe: true,
      transparent: true,
      opacity: 0.03
    });

    shapes.forEach((geo, i) => {
      const mesh = new THREE.Mesh(geo, wireMat);
      mesh.position.set(
        (Math.random() - 0.5) * 600,
        (Math.random() - 0.5) * 400,
        -200 - Math.random() * 300
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      geoGroup.add(mesh);
    });
    scene.add(geoGroup);
  }

  // ── INTERACTIONS ──
  let mouseX = 0, mouseY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - window.innerWidth / 2) * 0.003;
    mouseY = (e.clientY - window.innerHeight / 2) * 0.003;
  }, { passive: true });

  let scrollY = window.scrollY;
  window.addEventListener('scroll', () => { scrollY = window.scrollY; }, { passive: true });

  // ── RESIZE ──
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ── RENDER LOOP ──
  const animate = () => {
    requestAnimationFrame(animate);

    // Very slow organic rotation (barely noticeable)
    stars.rotation.y += 0.00005;
    stars.rotation.x += 0.00003;

    nodes.rotation.y += 0.0002;
    nodes.rotation.x += 0.0001;

    // Wireframe shapes drift
    geoGroup.children.forEach((mesh, i) => {
      mesh.rotation.x += 0.0003 * (i + 1);
      mesh.rotation.y += 0.0002 * (i + 1);
    });

    // Mouse parallax (5-15px equivalent, extremely subtle)
    camera.position.x += (mouseX * 8 - camera.position.x) * 0.02;
    camera.position.y += (-mouseY * 8 - camera.position.y) * 0.02;

    // Scroll depth (slow camera push)
    camera.position.z = 500 + scrollY * 0.08;
    camera.lookAt(0, 0, 0);

    renderer.render(scene, camera);
  };

  animate();
}
