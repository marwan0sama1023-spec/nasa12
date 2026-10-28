import * as THREE from "./node_modules/three/build/three.module.js";
import * as CANNON from "./node_modules/cannon-es/dist/cannon-es.js";

const TAU = Math.PI * 2;
const WORLD_RADIUS = 82;
const SURFACE_PLANET_RADIUS = 460;
const PLAYER_RADIUS = 0.46;
const PLAYER_HALF_HEIGHT = 0.55;
const PLAYER_COLLIDER_HEIGHT = PLAYER_RADIUS + PLAYER_HALF_HEIGHT;

function seededValue(seed, index) {
  const value = Math.sin(seed * 127.1 + index * 311.7) * 43758.5453;
  return value - Math.floor(value);
}

function seedFromText(text) {
  return String(text).split("").reduce((seed, character) => (seed * 31 + character.charCodeAt(0)) >>> 0, 7);
}

/* =========================================================================
   Procedural Textures for Mars, Moon, Jupiter, Saturn Rings, and Solar Corona
   ========================================================================= */

function createRockGeometry(seed, form = "angular") {
  const geometry = new THREE.IcosahedronGeometry(1, 3);
  const position = geometry.attributes.position;
  const colors = [];
  const normals = [];
  const verticalScale = form === "layered" ? 0.72 : form === "rough-block" ? 0.82 : form === "fine" ? 0.42 : 0.66;
  const irregularity = form === "rounded" ? 0.055 : form === "fine" ? 0.075 : 0.14;
  for (let index = 0; index < position.count; index += 1) {
    const vertex = new THREE.Vector3().fromBufferAttribute(position, index);
    const direction = vertex.clone().normalize();
    const coarse = seededValue(seed, index) - 0.5;
    const detail = Math.sin(direction.x * 17 + direction.y * 11 + seed) * Math.cos(direction.z * 19 - seed * 0.7);
    let radial = 1 + coarse * irregularity + detail * irregularity * 0.55;
    if (form === "fractured" && Math.sin(direction.x * 8 + direction.z * 5 + seed) > 0.62) radial *= 0.82;
    if (form === "porous") radial -= Math.max(0, Math.sin(direction.x * 23 + direction.y * 19 + seed) * Math.cos(direction.z * 21)) * 0.13;
    vertex.multiplyScalar(radial);
    vertex.y = Math.max(-0.55, vertex.y * verticalScale);
    position.setXYZ(index, vertex.x, vertex.y, vertex.z);
    const smoothNormal = new THREE.Vector3(vertex.x, vertex.y / verticalScale, vertex.z).normalize();
    normals.push(smoothNormal.x, smoothNormal.y, smoothNormal.z);
    let shade = 0.94 + (seededValue(seed + 11, index) - 0.5) * 0.035 + detail * 0.035;
    if (form === "layered") shade += Math.sin(vertex.y * 18 + seed) * 0.035;
    colors.push(shade, shade * 0.98, shade * 0.94);
  }
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  return geometry;
}

function createRockTexture(seed) {
  const size = 128;
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const offset = (y * size + x) * 4;
      const grain = seededValue(seed + x * 0.3, y) * 36;
      const broad = Math.sin((x + seed) * 0.09) * Math.cos((y - seed) * 0.07) * 13;
      const crackField = Math.sin(x * 0.19 + Math.sin(y * 0.08 + seed) * 2.1 + seed) * Math.cos(y * 0.15 + Math.sin(x * 0.05));
      const crackShade = crackField > 0.992 ? 0.82 : 1;
      const value = Math.max(28, Math.min(230, (165 + grain * 0.62 + broad * 0.55) * crackShade));
      pixels[offset] = value;
      pixels[offset + 1] = value;
      pixels[offset + 2] = value;
      pixels[offset + 3] = 255;
    }
  }
  const texture = new THREE.DataTexture(pixels, size, size, THREE.RGBAFormat);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(2, 2);
  texture.needsUpdate = true;
  return texture;
}

function createMarsSurfaceProceduralTexture() {
  const size = 256;
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const offset = (y * size + x) * 4;
      const ripple = Math.sin(x * 0.14 + Math.sin(y * 0.06) * 2.5) * 18;
      const duneNoise = Math.sin(x * 0.035 + y * 0.028) * Math.cos(x * 0.02 - y * 0.04) * 24;
      const pebble = (seededValue(x * 3.7, y * 5.1) > 0.97 ? -45 : 0);
      const grain = (seededValue(x, y) - 0.5) * 16;
      const r = Math.max(80, Math.min(240, 185 + ripple + duneNoise + grain + pebble));
      const g = Math.max(35, Math.min(160, 75 + ripple * 0.5 + duneNoise * 0.45 + grain * 0.6 + pebble * 0.7));
      const b = Math.max(20, Math.min(110, 45 + ripple * 0.3 + duneNoise * 0.3 + grain * 0.4 + pebble * 0.5));
      pixels[offset] = r;
      pixels[offset + 1] = g;
      pixels[offset + 2] = b;
      pixels[offset + 3] = 255;
    }
  }
  const texture = new THREE.DataTexture(pixels, size, size, THREE.RGBAFormat);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(6, 6);
  texture.needsUpdate = true;
  return texture;
}

function createMoonRegolithProceduralTexture() {
  const size = 256;
  const pixels = new Uint8Array(size * size * 4);
  for (let y = 0; y < size; y += 1) {
    for (let x = 0; x < size; x += 1) {
      const offset = (y * size + x) * 4;
      const craterNoise = Math.sin(x * 0.06 + y * 0.04) * Math.cos(x * 0.05 - y * 0.07) * 22;
      const fineRegolith = (seededValue(x * 1.9, y * 2.3) - 0.5) * 24;
      const microImpact = (seededValue(x * 7.1, y * 9.3) > 0.985 ? -35 : 0);
      const v = Math.max(45, Math.min(210, 125 + craterNoise + fineRegolith + microImpact));
      pixels[offset] = v;
      pixels[offset + 1] = v * 0.99;
      pixels[offset + 2] = v * 1.02;
      pixels[offset + 3] = 255;
    }
  }
  const texture = new THREE.DataTexture(pixels, size, size, THREE.RGBAFormat);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(8, 8);
  texture.needsUpdate = true;
  return texture;
}

function createJupiterAtmosphereTexture() {
  const width = 256;
  const height = 128;
  const pixels = new Uint8Array(width * height * 4);
  for (let y = 0; y < height; y += 1) {
    const lat = (y / height) * Math.PI;
    const band = Math.sin(lat * 14) * 0.5 + Math.sin(lat * 28) * 0.25;
    const turbulence = Math.sin(lat * 8 + Math.cos(lat * 12) * 1.5);
    for (let x = 0; x < width; x += 1) {
      const offset = (y * width + x) * 4;
      const wave = Math.sin(x * 0.08 + turbulence * 2.4) * 18;
      // Great Red Spot around x: 160, y: 80
      const dx = (x - 160) / 16;
      const dy = (y - 82) / 8;
      const isRedSpot = Math.exp(-(dx * dx + dy * dy));
      let r = 195 + band * 45 + wave;
      let g = 145 + band * 35 + wave * 0.7;
      let b = 110 + band * 25 + wave * 0.5;
      if (isRedSpot > 0.15) {
        r = r * (1 - isRedSpot) + 215 * isRedSpot;
        g = g * (1 - isRedSpot) + 75 * isRedSpot;
        b = b * (1 - isRedSpot) + 50 * isRedSpot;
      }
      pixels[offset] = Math.max(30, Math.min(255, r));
      pixels[offset + 1] = Math.max(20, Math.min(255, g));
      pixels[offset + 2] = Math.max(15, Math.min(255, b));
      pixels[offset + 3] = 255;
    }
  }
  const texture = new THREE.DataTexture(pixels, width, height, THREE.RGBAFormat);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function createSaturnRingTexture() {
  const width = 256;
  const height = 1;
  const pixels = new Uint8Array(width * height * 4);
  for (let x = 0; x < width; x += 1) {
    const offset = x * 4;
    const progress = x / width; // inner to outer
    // Rings: C ring (faint), B ring (bright), Cassini division (dark gap), A ring (bright), Encke gap
    let alpha = 0.85;
    let brightness = 190;
    if (progress < 0.15) {
      alpha = 0.25;
      brightness = 130;
    } else if (progress < 0.55) {
      alpha = 0.92;
      brightness = 210 + Math.sin(progress * 80) * 20;
    } else if (progress < 0.65) {
      // Cassini division
      alpha = 0.08;
      brightness = 40;
    } else if (progress < 0.94) {
      alpha = 0.82;
      brightness = 185 + Math.cos(progress * 60) * 18;
    } else {
      alpha = 0.15;
      brightness = 90;
    }
    pixels[offset] = Math.min(255, brightness * 1.05); // warm golden ring tone
    pixels[offset + 1] = Math.min(255, brightness * 0.95);
    pixels[offset + 2] = Math.min(255, brightness * 0.75);
    pixels[offset + 3] = Math.floor(alpha * 255);
  }
  const texture = new THREE.DataTexture(pixels, width, height, THREE.RGBAFormat);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

/* =========================================================================
   World Visual & Physical Characteristics
   ========================================================================= */

const worldLooks = {
  earth: {
    label: "سطح الأرض النظير",
    sky: 0x56a4e2,
    fog: 0x94ccf0,
    ground: [0x5a5745, 0x867458, 0xa7916e],
    rock: [0x675a49, 0x82705a],
    gravity: 9.81,
    walk: 6.2,
    run: 10.5,
    acceleration: 24,
    braking: 28,
    airControl: 0.75,
    jumpHeight: 1.05,
    sunIntensity: 2.8,
    dust: 0xbea582,
    envName: "كوكب الأرض · جاذبية 1.0g (9.81 m/s²) · سماء نهارية وغلاف جوي طبيعي"
  },
  mars: {
    label: "سطح المريخ الحقيقي (فوهة جيزيرو / سيناء)",
    sky: 0x481e13,
    fog: 0x6e311f,
    ground: [0x541f14, 0xa24122, 0xd4683a],
    rock: [0x59281a, 0xb85732],
    gravity: 3.72,
    walk: 5.4,
    run: 8.8,
    acceleration: 12,
    braking: 16,
    airControl: 0.35,
    jumpHeight: 1.65,
    sunIntensity: 1.45,
    dust: 0xd66838,
    envName: "سطح المريخ · الجاذبية 0.38g · الضغط 6.1 hPa · 95% CO₂"
  },
  moon: {
    label: "سطح القمر الحقيقي (بحر السكون / المرتفعات)",
    sky: 0x000000,
    fog: 0x000000,
    ground: [0x303338, 0x6e737c, 0xa3a6ab],
    rock: [0x3a3d44, 0x757880],
    gravity: 1.62,
    walk: 4.8,
    run: 7.8,
    acceleration: 10,
    braking: 14,
    airControl: 0.42,
    jumpHeight: 2.9,
    sunIntensity: 3.6,
    dust: 0xb5b7bd,
    envName: "سطح القمر · الجاذبية 0.16g · فراغ كوني تام · حرارة -130°C/+120°C"
  }
};

const siteTerrainProfiles = {
  "meteor-crater": { terrain: "impact", ground: [0x685c4b, 0x91806a, 0xb5a184], rock: [0x655b4e, 0x88765e], sample: "fragment" },
  hawaii: { terrain: "lava", ground: [0x292c2b, 0x4e514a, 0x77766a], rock: [0x343735, 0x5b5d54], sample: "basalt" },
  "death-valley": { terrain: "basin", ground: [0x795b43, 0xa68059, 0xc8a778], rock: [0x826145, 0xb08a5d], sample: "sediment" },
  atacama: { terrain: "alluvial", ground: [0x713b2c, 0xa65f3c, 0xc58b5e], rock: [0x784632, 0xaa7049], sample: "sediment" },
  devon: { terrain: "impact", ground: [0x626664, 0x898b85, 0xb0afa5], rock: [0x5c605f, 0x83847d], sample: "fragment" },
  mcmurdo: { terrain: "polar-valley", ground: [0x555e61, 0x7d8988, 0xaab2aa], rock: [0x586365, 0x82908c], sample: "outcrop" }
};

let activeWorld = null;

export function startSpaceExplorer(config) {
  stopSpaceExplorer();
  activeWorld = new SpaceWorld(config);
  activeWorld.start();
}

export function startSpacePreview(config) {
  stopSpaceExplorer();
  activeWorld = new SpacePreview(config);
  activeWorld.start();
}

export function stopSpaceExplorer() {
  if (!activeWorld) return;
  activeWorld.dispose();
  activeWorld = null;
}

export function getSpaceExplorerResumeState() {
  if (!(activeWorld instanceof SpaceWorld) || !activeWorld.playerBody) return null;
  const position = activeWorld.playerBody.position;
  return {
    x: position.x,
    y: position.y,
    z: position.z,
    cameraYaw: activeWorld.cameraYaw,
    cameraPitch: activeWorld.cameraPitch,
    timeLimit: activeWorld.timeLimit
  };
}

/* =========================================================================
   SpacePreview Class (Used in character & destination selection preview)
   ========================================================================= */

class SpacePreview {
  constructor(config) {
    this.container = config.container;
    this.character = config.character;
    this.frame = 0;
    this.elapsed = 0;
    this.lastFrame = 0;
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x060c18);
    this.camera = new THREE.PerspectiveCamera(42, 1, 0.1, 300);
    this.camera.position.set(0, 2.8, 9.5);
    this.camera.lookAt(0, 0.9, -0.4);
    this.renderer = makeRenderer(this.container, 1.3);
    this.scene.add(new THREE.HemisphereLight(0xb9e5ff, 0x211a25, 2.1));
    const sun = new THREE.DirectionalLight(0xffffff, 3);
    sun.position.set(-5, 8, 5);
    sun.castShadow = true;
    this.scene.add(sun);
    this.starField = addDynamicStars(this.scene, 750, 140);
    const world = config.world || "earth";
    const planetTexture = new THREE.TextureLoader().load(world === "mars" ? "assets/mars-hubble-globe.jpg" : "assets/earth-blue-marble.jpg");
    planetTexture.colorSpace = THREE.SRGBColorSpace;
    const planetMaterial = new THREE.MeshStandardMaterial({ map: planetTexture, color: 0xffffff, roughness: 0.94 });
    if (world === "moon") planetMaterial.color.set(0xaaaeb2);
    const planet = new THREE.Mesh(new THREE.SphereGeometry(2.1, 42, 32), planetMaterial);
    planet.position.set(3.1, 1.1, -3.5);
    this.scene.add(planet);
    this.planet = planet;
    const moon = new THREE.Mesh(new THREE.SphereGeometry(0.78, 24, 18), new THREE.MeshStandardMaterial({ color: 0x979da5, roughness: 1 }));
    moon.position.set(-3.1, 0.25, -3.2);
    this.scene.add(moon);
    if (!config.character || config.character === "alien") this.scene.add(makeCharacter("alien", config.character ? 0 : -1.1));
    if (!config.character || config.character === "astronaut") {
      this.astronaut = makeCharacter("astronaut", config.character ? 0 : 1.55);
      this.astronaut.scale.setScalar(0.9);
      this.scene.add(this.astronaut);
    }
    if (config.character === "astronaut") this.scene.add(makeOrbitalStation());
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(this.container);
    this.resize();
  }

  start() {
    this.lastFrame = performance.now();
    this.renderer.render(this.scene, this.camera);
    this.renderer.setAnimationLoop(() => {
      const now = performance.now();
      const delta = (now - this.lastFrame) / 1000;
      this.lastFrame = now;
      this.elapsed += delta;
      if (this.planet) this.planet.rotation.y += delta * 0.15;
      if (this.starField) this.starField.rotation.y += delta * 0.02;
      this.renderer.render(this.scene, this.camera);
    });
  }

  resize() {
    if (!this.container.clientWidth || !this.container.clientHeight) return;
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight, false);
  }

  dispose() {
    this.renderer.setAnimationLoop(null);
    this.resizeObserver?.disconnect();
    disposeScene(this.scene);
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}

class PlanetStrip {
  constructor(container, world) {
    this.container = container;
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(-4, 4, 0.62, -0.62, 0.1, 30);
    this.camera.position.set(0, 0, 12);
    this.scene.add(new THREE.HemisphereLight(0xdcecff, 0x18202d, 2.2));
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.4);
    keyLight.position.set(-4, 5, 8);
    this.scene.add(keyLight);
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.25));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.domElement.setAttribute("aria-hidden", "true");
    container.append(this.renderer.domElement);
    this.planets = [];

    const specifications = [
      { key: "mercury", name: "عطارد", radius: 0.22, color: 0x938f89, speed: 0.65 },
      { key: "venus", name: "الزهرة", radius: 0.27, color: 0xd7b47c, speed: -0.42 },
      { key: "earth", name: "الأرض", radius: 0.28, color: 0x338bd0, texture: "assets/earth-blue-marble.jpg", speed: 0.8 },
      { key: "moon", name: "القمر", radius: 0.12, color: 0xe2e8f0, speed: 0.55 },
      { key: "mars", name: "المريخ", radius: 0.25, color: 0xc65337, texture: "assets/mars-global-marci.jpg", speed: 0.72 },
      { key: "jupiter", name: "المشتري", radius: 0.37, color: 0xc8956e, jupiter: true, speed: 0.9 },
      { key: "saturn", name: "زحل", radius: 0.34, color: 0xd7c18e, saturn: true, speed: 0.78 },
      { key: "uranus", name: "أورانوس", radius: 0.3, color: 0x71bdc7, speed: -0.55 },
      { key: "neptune", name: "نبتون", radius: 0.3, color: 0x366fd1, speed: 0.58 }
    ];

    specifications.forEach(specification => {
      const group = new THREE.Group();
      const material = new THREE.MeshStandardMaterial({
        color: specification.color,
        roughness: specification.key === "venus" ? 0.76 : 0.88,
        metalness: 0
      });
      if (specification.texture) {
        new THREE.TextureLoader().load(specification.texture, texture => {
          texture.colorSpace = THREE.SRGBColorSpace;
          material.map = texture;
          material.needsUpdate = true;
        });
      } else if (specification.key === "moon") {
        material.map = createMoonRegolithProceduralTexture();
        material.map.colorSpace = THREE.SRGBColorSpace;
      } else if (specification.jupiter) {
        material.map = createJupiterAtmosphereTexture();
        material.map.colorSpace = THREE.SRGBColorSpace;
      }

      const sphere = new THREE.Mesh(new THREE.SphereGeometry(specification.radius, 24, 18), material);
      group.add(sphere);

      // Saturn rings
      if (specification.saturn) {
        const rings = new THREE.Mesh(
          new THREE.RingGeometry(specification.radius * 1.35, specification.radius * 1.9, 40),
          new THREE.MeshStandardMaterial({ color: 0xd7c18e, roughness: 0.8, side: THREE.DoubleSide })
        );
        group.add(rings);
      }

      this.scene.add(group);
      this.planets.push({ group, sphere, specification });
    });

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);
    this.resize();
    this.lastFrame = performance.now();
    this.renderer.setAnimationLoop(() => {
      const now = performance.now();
      const delta = Math.min((now - this.lastFrame) / 1000, 0.05);
      this.lastFrame = now;
      this.planets.forEach(planet => {
        planet.sphere.rotation.y += delta * planet.specification.speed;
        if (planet.specification.saturn) planet.group.children[1].rotation.z = 0.18;
      });
      this.renderer.render(this.scene, this.camera);
    });
  }

  resize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    if (!width || !height) return;
    this.renderer.setSize(width, height, false);
    const aspect = width / height;
    const halfHeight = 0.62;
    this.camera.left = -halfHeight * aspect;
    this.camera.right = halfHeight * aspect;
    this.camera.top = halfHeight;
    this.camera.bottom = -halfHeight;
    this.camera.updateProjectionMatrix();
    const spacing = (halfHeight * aspect * 2) / this.planets.length;
    this.planets.forEach((planet, index) => {
      planet.group.position.set((index - (this.planets.length - 1) / 2) * spacing, 0, 0);
    });
  }

  dispose() {
    this.renderer.setAnimationLoop(null);
    this.resizeObserver.disconnect();
    disposeScene(this.scene);
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}

/* =========================================================================
   SpaceWorld Main Class: AAA 3D Planetary Simulation
   ========================================================================= */

class SpaceWorld {
  constructor(config) {
    this.config = config;
    this.container = config.container;
    this.hud = config.hud || this.container.parentElement;
    this.siteProfile = siteTerrainProfiles[config.stageSite?.id] || null;
    this.look = this.siteProfile
      ? { ...worldLooks.earth, ground: this.siteProfile.ground, rock: this.siteProfile.rock }
      : worldLooks[config.world] || worldLooks.mars;
    this.isMoon = config.world === "moon";
    this.isMars = config.world === "mars";
    this.isEarth = !this.isMoon && !this.isMars;
    this.isNight = false;
    this.isAlien = config.character === "alien";
    this.stageSite = config.stageSite || null;
    this.sampleDefinitions = Array.isArray(config.samples) ? config.samples : [];
    this.sampleGoal = this.sampleDefinitions.length;
    this.sampleMissionId = this.stageSite ? `site-stage-${this.stageSite.id}` : `sample-trio-${config.missionKey || config.world}`;
    this.craterMissionId = `crater-reached-${config.missionKey || config.world}`;
    this.lastFrame = 0;
    this.hasEnteredFullscreen = Boolean(document.fullscreenElement);
    this.scene = new THREE.Scene();
    
    // Sky and Fog logic:
    // Moon: true vacuum (zero fog, pure black space).
    // Mars: thin atmosphere (butterscotch haze).
    // Earth: realistic bright daytime blue sky & soft atmospheric haze
    if (this.isMoon) {
      this.scene.background = new THREE.Color(0x000000);
      this.scene.fog = null; // ZERO atmospheric fog on the Moon!
    } else if (this.isMars) {
      this.scene.background = new THREE.Color(0x1a0b08);
      this.scene.fog = new THREE.FogExp2(0x522316, 0.0035); // Subtle atmospheric Martian haze
    } else {
      this.scene.background = new THREE.Color(0x56a4e2); // Realistic bright daytime Earth sky
      this.scene.fog = new THREE.Fog(0x94ccf0, 60, 240);
    }

    this.camera = new THREE.PerspectiveCamera(65, 1, 0.1, 2400);
    this.cameraYaw = this.isMoon ? Math.PI : 0;
    this.cameraPitch = this.isMoon ? 0.58 : config.character === "astronaut" ? 0.08 : -0.12;
    this.cameraMode = "third"; // 'third' (3rd person), 'first' (1st person helmet), 'drone' (cinematic orbit)
    this.cameraDistance = 5.6;
    this.keys = new Set();
    this.touchMove = { x: 0, y: 0 };
    this.mouseLookPointer = null;
    this.paused = false;
    this.soundEnabled = Boolean(config.progress.settings?.sound ?? true);
    this.quality = config.progress.settings?.quality || "high";
    this.mouseSensitivity = THREE.MathUtils.clamp(Number(config.progress.settings?.mouseSensitivity) || 1, 0.5, 2);
    this.cameraShakeEnabled = config.progress.settings?.cameraShake !== false;
    this.isPointerLocked = false;
    this.pointerLockToggleAt = 0;
    this.collectPoseUntil = 0;
    this.beaconAngle = 0;
    this.isRunning = false;
    this.isJetpacking = false;
    this.jetpackFuel = 100;
    this.movementBlend = 0;
    this.roverMode = false;
    this.lastInteractAt = 0;
    this.lastStepAt = 0;
    this.lastDustAt = 0;
    this.lastCameraToggleAt = 0;
    this.elapsed = 0;
    this.arrivalVisibleUntil = performance.now() + 3000;
    
    const resumeState = config.progress.resumeState;
    this.timeLimit = Number.isFinite(resumeState?.timeLimit) ? THREE.MathUtils.clamp(resumeState.timeLimit, 0, 180) : 180;
    this.timedOut = this.timeLimit <= 0;
    this.progress = {
      xp: Number(config.progress.xp) || 0,
      collectedSamples: Array.isArray(config.progress.collectedSamples) ? [...config.progress.collectedSamples] : [],
      discoveredSamples: Array.isArray(config.progress.discoveredSamples) ? [...config.progress.discoveredSamples] : [],
      analyzedSites: Array.isArray(config.progress.analyzedSites) ? [...config.progress.analyzedSites] : [],
      completedMissions: Array.isArray(config.progress.completedMissions) ? [...config.progress.completedMissions] : [],
      roverUnlocked: Boolean(config.progress.roverUnlocked)
    };
    this.stageComplete = false;
    this.finalMissionComplete = false;
    this.paused = false;
    this.sites = config.sites || [];
    this.samples = [];
    this.rocks = [];
    this.rockSurfaces = [];
    this.footprints = [];
    this.roverWheels = [];
    this.animatedCelestialObjects = [];
    this.meteors = [];
    
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.physics = this.createPhysics();
    this.renderer = makeRenderer(this.container, this.quality === "high" ? 1.3 : this.quality === "medium" ? 1 : 0.8);
    const planetStripHost = this.hud.querySelector("#game-planet-strip-canvas");
    this.planetStrip = planetStripHost ? new PlanetStrip(planetStripHost, config.world) : null;
    
    this.initAudioSynthesizer();
    this.createLighting();
    this.createWorld();
    this.createPlayer();
    this.createCompanion();
    this.createSamples();

    const savedMissionComplete = this.progress.completedMissions.includes(this.sampleMissionId);
    this.stageComplete = Boolean(this.stageSite && savedMissionComplete
      && this.worldCollectedCount() >= this.sampleGoal);
    this.finalMissionComplete = Boolean(!this.stageSite && config.character === "astronaut"
      && savedMissionComplete && this.worldCollectedCount() >= this.sampleGoal
      && this.progress.completedMissions.includes(this.craterMissionId));
    this.paused = this.stageComplete || this.finalMissionComplete;
    
    this.createRover();
    this.createDust();
    this.createAtmosphericDust();
    this.createSurfaceBaseCamp();
    this.createEarthDayNightButton();
    this.bindInputs();
    this.resizeObserver.observe(this.container);
    this.setQuality(this.quality);
    this.resize();
    this.updateHud();
    this.updateEnvironmentalTelemetry();
  }

  /* -----------------------------------------------------------------------
     Audio Synthesizer Engine (Web Audio API)
     ----------------------------------------------------------------------- */
  initAudioSynthesizer() {
    this.audioContext = null;
    this.ambientGain = null;
    this.windGain = null;
  }

  ensureAudio() {
    if (!this.soundEnabled) return;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!this.audioContext) {
      try {
        this.audioContext = new AudioCtx();
        this.startAmbientAudio();
      } catch (e) {
        console.warn("AudioContext init error", e);
      }
    }
    if (this.audioContext && this.audioContext.state === "suspended") {
      this.audioContext.resume().catch(() => {});
    }
  }

  startAmbientAudio() {
    if (!this.audioContext || !this.soundEnabled) return;
    const ctx = this.audioContext;
    const now = ctx.currentTime;
    
    // Master ambient gain
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.045, now);
    masterGain.connect(ctx.destination);
    this.ambientGain = masterGain;

    // Cosmic drone generator (subtle space chord)
    const droneFreqs = [55, 110, 165];
    droneFreqs.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const oscGain = ctx.createGain();
      osc.type = idx === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, now);
      oscGain.gain.setValueAtTime(0.02 / (idx + 1), now);
      osc.connect(oscGain);
      oscGain.connect(masterGain);
      osc.start();
    });

    // On Mars: Synthesized atmospheric howling wind!
    if (this.isMars) {
      const bufferSize = ctx.sampleRate * 2;
      const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let lastOut = 0.0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        output[i] = (lastOut + 0.02 * white) / 1.02; // Pink / brown noise
        lastOut = output[i];
      }
      const whiteNoise = ctx.createBufferSource();
      whiteNoise.buffer = noiseBuffer;
      whiteNoise.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(280, now);
      filter.Q.setValueAtTime(3.2, now);

      const windGain = ctx.createGain();
      windGain.gain.setValueAtTime(0.035, now);

      whiteNoise.connect(filter);
      filter.connect(windGain);
      windGain.connect(ctx.destination);
      whiteNoise.start();
      this.windGain = windGain;
      this.windFilter = filter;
    }
  }

  playPing(frequency = 640, duration = 0.12, type = "sine") {
    if (!this.soundEnabled) return;
    this.ensureAudio();
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const now = ctx.currentTime;
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, now);
    gain.gain.setValueAtTime(0.065, now);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + duration);
  }

  playFootstepSound(sprinting) {
    if (!this.soundEnabled) return;
    this.ensureAudio();
    if (!this.audioContext) return;
    const context = this.audioContext;
    const now = context.currentTime;
    const frameCount = Math.floor(context.sampleRate * 0.055);
    const buffer = context.createBuffer(1, frameCount, context.sampleRate);
    const channel = buffer.getChannelData(0);
    for (let frame = 0; frame < frameCount; frame += 1) {
      channel[frame] = (Math.random() * 2 - 1) * (1 - frame / frameCount);
    }
    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const impactGain = context.createGain();
    source.buffer = buffer;
    filter.type = "lowpass";
    filter.frequency.value = this.isMoon ? 420 : this.isMars ? 260 : 520;
    impactGain.gain.setValueAtTime(sprinting ? 0.13 : 0.09, now);
    impactGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);
    source.connect(filter);
    filter.connect(impactGain);
    impactGain.connect(context.destination);
    source.start(now);

    const thud = context.createOscillator();
    const thudGain = context.createGain();
    thud.type = "sine";
    thud.frequency.setValueAtTime(this.isMoon ? 82 : 64, now);
    thudGain.gain.setValueAtTime(sprinting ? 0.04 : 0.026, now);
    thudGain.gain.exponentialRampToValueAtTime(0.001, now + 0.085);
    thud.connect(thudGain);
    thudGain.connect(context.destination);
    thud.start(now);
    thud.stop(now + 0.09);
  }

  playThrusterSound() {
    if (!this.soundEnabled) return;
    this.ensureAudio();
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "triangle";
    osc.frequency.setValueAtTime(95, now);
    osc.frequency.exponentialRampToValueAtTime(45, now + 0.18);
    gain.gain.setValueAtTime(0.05, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.2);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.2);
  }

  playCollectChime() {
    if (!this.soundEnabled) return;
    this.ensureAudio();
    if (!this.audioContext) return;
    const ctx = this.audioContext;
    const now = ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 harmonic arpeggio
    notes.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const startTime = now + idx * 0.055;
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, startTime);
      gain.gain.setValueAtTime(0.07, startTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.38);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(startTime);
      osc.stop(startTime + 0.4);
    });
  }

  /* -----------------------------------------------------------------------
     Physics & World Construction
     ----------------------------------------------------------------------- */
  createPhysics() {
    const world = new CANNON.World({ gravity: new CANNON.Vec3(0, -this.look.gravity, 0) });
    world.allowSleep = true;
    world.broadphase = new CANNON.SAPBroadphase(world);
    world.solver.iterations = 10;
    world.defaultContactMaterial.friction = 0.0;
    world.defaultContactMaterial.restitution = 0.0;
    this.playerMaterial = new CANNON.Material("explorer");
    this.terrainMaterial = new CANNON.Material("terrain");
    world.addContactMaterial(new CANNON.ContactMaterial(this.playerMaterial, this.terrainMaterial, { friction: 0.0, restitution: 0.0 }));
    return world;
  }

  createLighting() {
    const isEarthDay = !this.isMoon && !this.isMars;
    // Ambient / Hemisphere Light tailored to environment
    const hemiSky = this.isMoon ? 0xd5d8e0 : this.isMars ? 0xe28a58 : 0x78bbf8;
    const hemiGround = this.isMoon ? 0x121418 : this.isMars ? 0x2e1109 : 0x485838;
    const hemiIntensity = this.isMoon ? 0.32 : this.isMars ? 0.72 : 1.35;
    const hemi = new THREE.HemisphereLight(hemiSky, hemiGround, hemiIntensity);
    this.scene.add(hemi);
    this.hemiLight = hemi;

    // Sun: on Mars it has forward-scattering blue corona glow; on Moon stark white; on Earth bright warm daytime sun
    const sunColor = this.isMoon ? 0xffffff : this.isMars ? 0xffdfbe : 0xfffaee;
    const sunIntensity = isEarthDay ? 2.8 : this.look.sunIntensity;
    const sun = new THREE.DirectionalLight(sunColor, sunIntensity);
    sun.position.set(-42, 68, 30);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -50;
    sun.shadow.camera.right = 50;
    sun.shadow.camera.top = 50;
    sun.shadow.camera.bottom = -50;
    sun.shadow.camera.near = 10;
    sun.shadow.camera.far = 160;
    sun.shadow.bias = -0.0003;
    this.scene.add(sun);
    this.sun = sun;

    // Atmospheric Sky Dome (Mars Butterscotch-to-Cosmos Dome / Moon Deep Black Space / Earth Daytime Blue Sky)
    this.createAtmosphericSkyDome();

    // Celestial Anchor: Rotates with physical star movement ("مع فيزيائيه حركه النجوم من حولهم")
    this.celestialAnchor = new THREE.Group();
    this.scene.add(this.celestialAnchor);

    this.starField = addDynamicStars(this.celestialAnchor, this.isMoon ? 1800 : 1400, 480);
    this.starField.visible = !isEarthDay;
    if (!isEarthDay) {
      // Milky Way galactic plane band
      this.createMilkyWayBand();
      // Shooting Stars / Meteors particle system
      this.createMeteorShower();
    }

    // Planet models are rendered in the HUD strip, not in the surface scene.
  }

  createAtmosphericSkyDome() {
    if (this.isMoon) return; // Moon has true vacuum, no atmospheric scattering dome!

    const isEarthDay = !this.isMoon && !this.isMars;
    const domeGeo = new THREE.SphereGeometry(680, 32, 24, 0, TAU, 0, Math.PI * 0.52);
    const skyCurve = this.isMars ? "0.65" : "0.72";
    // Custom gradient shader from horizon to zenith
    const domeMat = new THREE.ShaderMaterial({
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      uniforms: {
        horizonColor: { value: new THREE.Color(this.isMars ? 0xaf5032 : 0x98d4f8) },
        zenithColor: { value: new THREE.Color(this.isMars ? 0x0a050d : 0x1d70c4) }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 horizonColor;
        uniform vec3 zenithColor;
        varying vec3 vWorldPosition;
        void main() {
          float factor = clamp((vWorldPosition.y - 10.0) / 380.0, 0.0, 1.0);
          vec3 sky = mix(horizonColor, zenithColor, pow(factor, ${skyCurve}));
          gl_FragColor = vec4(sky, 1.0);
        }
      `
    });
    const domeMesh = new THREE.Mesh(domeGeo, domeMat);
    domeMesh.position.y = -20;
    this.scene.add(domeMesh);
    this.skyDome = domeMesh;

  }

  createDaytimeEarthMoon() {
    // Ethereal daytime Moon in Earth's blue sky — no label, maximally beautiful
    const moonGeo = new THREE.SphereGeometry(20, 40, 32);
    const moonMat = new THREE.MeshBasicMaterial({
      color: 0xf2f6fa,
      transparent: true,
      opacity: 0.90,
      map: createMoonRegolithProceduralTexture(),
      fog: false
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    const moonPos = new THREE.Vector3();
    const moonPivot = new THREE.Group();
    this.celestialAnchor.add(moonPivot);
    moonPivot.add(moonMesh);
    moonMesh.position.copy(moonPos);
    this.daytimeMoon = moonMesh;
    this.daytimeMoonPivot = moonPivot;

    // Inner soft blue atmospheric halo
    const innerHalo = new THREE.Mesh(
      new THREE.SphereGeometry(22.5, 28, 22),
      new THREE.MeshBasicMaterial({
        color: 0x9dc8f5,
        transparent: true, opacity: 0.20,
        blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide, fog: false
      })
    );
    innerHalo.position.copy(moonPos);
    moonPivot.add(innerHalo);

    // Outer ethereal glow ring
    const outerGlow = new THREE.Mesh(
      new THREE.SphereGeometry(28, 24, 18),
      new THREE.MeshBasicMaterial({
        color: 0x7ab8e8,
        transparent: true, opacity: 0.06,
        blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide, fog: false
      })
    );
    outerGlow.position.copy(moonPos);
    moonPivot.add(outerGlow);
    moonPivot.visible = false;

    this.daytimeSun = new THREE.Group();
    const sunDisc = new THREE.Mesh(new THREE.SphereGeometry(11, 24, 18), new THREE.MeshBasicMaterial({ color: 0xffe6a3, fog: false }));
    const sunGlow = new THREE.Mesh(new THREE.SphereGeometry(16, 20, 16), new THREE.MeshBasicMaterial({ color: 0xffbf55, transparent: true, opacity: 0.22, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
    this.daytimeSun.add(sunDisc, sunGlow);
    this.daytimeSun.position.set(-95, 155, -285);
    this.celestialAnchor.add(this.daytimeSun);

    // Drifting clouds in the Earth sky
    this.daytimeClouds = [];
    for (let ci = 0; ci < 14; ci++) {
      const angle = (ci / 14) * Math.PI * 2 + 0.3;
      const dist = 240 + Math.random() * 160;
      const cloudGroup = new THREE.Group();
      cloudGroup.position.set(
        Math.cos(angle) * dist,
        50 + Math.random() * 90,
        Math.sin(angle) * dist
      );
      const puffCount = 3 + Math.floor(Math.random() * 5);
      for (let p = 0; p < puffCount; p++) {
        const puff = new THREE.Mesh(
          new THREE.SphereGeometry(14 + Math.random() * 20, 7, 5),
          new THREE.MeshBasicMaterial({
            color: 0xfcfeff,
            transparent: true,
            opacity: 0.03 + Math.random() * 0.035,
            depthWrite: false, fog: false
          })
        );
        puff.position.set((Math.random() - 0.5) * 36, (Math.random() - 0.5) * 9, (Math.random() - 0.5) * 28);
        cloudGroup.add(puff);
        this.daytimeClouds.push(puff);
      }
      this.scene.add(cloudGroup);
    }

    // Solar warm glare disc near sun direction
    const glare = new THREE.Mesh(
      new THREE.CircleGeometry(42, 24),
      new THREE.MeshBasicMaterial({
        color: 0xfff5d0, transparent: true, opacity: 0.15,
        blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, fog: false
      })
    );
    glare.position.set(-230, 295, 270);
    glare.lookAt(0, 0, 0);
    this.scene.add(glare);
    this.daytimeGlare = glare;
    // No label — clean and beautiful Moon with no UI overlay
  }

  toggleEarthNight() {
    if (!this.isEarth) return;
    this.isNight = !this.isNight;
    const night = this.isNight;
    this.scene.background.set(night ? 0x000205 : 0x56a4e2);
    this.scene.fog.color.set(night ? 0x01040c : 0x94ccf0);
    this.scene.fog.near = night ? 60 : 38;
    this.scene.fog.far = night ? 380 : 320;

    // Generous ambient moonlight so terrain is clearly visible to player, not blacked out
    this.hemiLight.color.set(night ? 0x3d5a80 : 0x78bbf8);
    this.hemiLight.groundColor.set(night ? 0x222c38 : 0x485838);
    this.hemiLight.intensity = night ? 1.15 : 1.35;
    this.sun.intensity = night ? 0 : 2.8;

    // Daytime: Only the Sun is visible from afar in the sky
    if (this.daytimeSun) this.daytimeSun.visible = !night;
    if (this.daytimeGlare) this.daytimeGlare.visible = !night;

    // Nighttime: Moon and twinkling stars appear in the black sky
    if (this.daytimeMoonPivot) this.daytimeMoonPivot.visible = night;
    if (this.starField) this.starField.visible = night;
    if (this.daytimeClouds) {
      this.daytimeClouds.forEach(cloud => { cloud.material.opacity = night ? 0.005 : 0.055; });
    }

    const telemetry = this.hud.querySelector("#game-telemetry-text");
    if (telemetry) telemetry.textContent = night
      ? "كوكب الأرض · سماء ليلية صافية ونجوم وظهور واقعي للقمر مع إضاءة واضحة للأرض"
      : this.look.envName;

    if (this.skyDome?.material?.uniforms) {
      this.skyDome.material.uniforms.horizonColor.value.set(night ? 0x010512 : 0x98d4f8);
      this.skyDome.material.uniforms.zenithColor.value.set(night ? 0x000103 : 0x1d70c4);
    }
    if (!this.nightLight) {
      this.nightLight = new THREE.DirectionalLight(0xc2dcff, 0.85);
      this.nightLight.position.set(-42, 75, 30);
      this.scene.add(this.nightLight);
    }
    this.nightLight.visible = night;
    const button = this.hud.querySelector('[data-engine-action="day-night"]');
    if (button) {
      button.textContent = night ? "☀" : "☾";
      button.setAttribute("aria-pressed", String(night));
      button.title = night ? "العودة إلى النهار" : "تبديل إلى الليل";
    }
  }

  createMilkyWayBand() {
    const count = 450;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const radius = 490;

    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 1.4 - 0.7;
      const spread = (Math.random() - 0.5) * 38;
      const depth = (Math.random() - 0.5) * 35;
      const x = Math.cos(angle) * radius + spread;
      const y = Math.sin(angle) * radius * 0.75 + 140 + depth;
      const z = Math.sin(angle * 0.8) * radius * 0.45 + (Math.random() - 0.5) * 60;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const shade = 0.55 + Math.random() * 0.45;
      colors[i * 3] = 0.72 * shade;
      colors[i * 3 + 1] = 0.82 * shade;
      colors[i * 3 + 2] = 1.0 * shade;
      sizes[i] = 18 + Math.random() * 26;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      vertexShader: `
        attribute float size;
        varying vec3 vColor;
        void main() {
          vColor = color;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (260.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          float alpha = smoothstep(0.5, 0.0, dist) * 0.085;
          gl_FragColor = vec4(vColor, alpha);
        }
      `
    });

    const band = new THREE.Points(geo, mat);
    this.celestialAnchor.add(band);
  }

  createMeteorShower() {
    this.meteorCount = 4;
    this.meteors = [];
    const trailMat = new THREE.LineBasicMaterial({
      color: 0x9be8ff,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending
    });

    for (let i = 0; i < this.meteorCount; i++) {
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array([0, 0, 0, 0, 0, 0]);
      geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
      const line = new THREE.Line(geo, trailMat.clone());
      this.celestialAnchor.add(line);
      this.meteors.push({
        line,
        active: false,
        timer: 1.5 + Math.random() * 4.5,
        origin: new THREE.Vector3(),
        velocity: new THREE.Vector3(),
        progress: 0,
        length: 22 + Math.random() * 18
      });
    }
  }

  /* -----------------------------------------------------------------------
     Celestial Dome & Planetary Alignment Display
     "رائد الفضاء لما يروح للمريخ مش يكون شايف المجموعه الشمسيه بعيد لا يكون علي سطح المريخ وشايف ترتيب الكواكب والنجوم بترتيبهم فعلا في الواقع"
     "رائد الفضاء لما يروح للقمر يكون القمر بيلف حوالين الارض حتي لو بطيئ وحركه الكواكب طبيعيه ونفس فكره المريخ انه يكون فعلا داخل المجموعه الشمسيه مش شايفها من بعيد"
     ----------------------------------------------------------------------- */
  createCelestialLabel(title, subtitle = "") {
    const canvas = document.createElement("canvas");
    canvas.width = 440;
    canvas.height = 110;
    const ctx = canvas.getContext("2d");

    // Glow border background pill
    ctx.fillStyle = "rgba(12, 18, 38, 0.84)";
    ctx.strokeStyle = "rgba(99, 180, 240, 0.65)";
    ctx.lineWidth = 3;
    const r = 24;
    const w = 424, h = 96, x = 8, y = 7;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 30px Tajawal, sans-serif";
    ctx.fillText(title, 220, subtitle ? 40 : 54);

    if (subtitle) {
      ctx.fillStyle = "#93c5fd";
      ctx.font = "20px Tajawal, sans-serif";
      ctx.fillText(subtitle, 220, 74);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const spriteMaterial = new THREE.SpriteMaterial({
      map: texture,
      transparent: true,
      depthWrite: false,
      fog: false
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(42, 10.5, 1);
    return sprite;
  }

  createOrbitRing(center, u, v, radius, color = 0x55aacc, opacity = 0.35) {
    const points = [];
    const segments = 96;
    for (let i = 0; i <= segments; i++) {
      const angle = (i / segments) * TAU;
      const p = center.clone()
        .addScaledVector(u, radius * Math.cos(angle))
        .addScaledVector(v, radius * Math.sin(angle));
      points.push(p);
    }
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    const mat = new THREE.LineBasicMaterial({
      color,
      transparent: true,
      opacity,
      depthWrite: false,
      fog: false
    });
    return new THREE.Line(geo, mat);
  }

  createSolarSystemDisplay() {
    this.solarPlanets = [];

    // Local offset for the solar system group within celestialAnchor
    const sunLocalPos = this.isMars
      ? new THREE.Vector3(-120, 260, 60)
      : new THREE.Vector3(-140, 270, -60);

    // ── Unified Solar System Group ──────────────────────────────────────────
    // Rings AND planets share one coordinate space → they always stay aligned!
    this.solarSystemGroup = new THREE.Group();
    this.solarSystemGroup.position.copy(sunLocalPos);
    this.celestialAnchor.add(this.solarSystemGroup);

    // Astronomical Ecliptic Plane (Orthonormal Basis vectors u and v)
    const eclipticU = this.isMars ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0.85, 0.0, 0.52678).normalize();
    const normal = this.isMars ? new THREE.Vector3(0, 0, 1) : new THREE.Vector3(-0.35, 0.90, 0.25).normalize();
    const eclipticV = new THREE.Vector3().crossVectors(normal, eclipticU).normalize();
    this.eclipticU = eclipticU;
    this.eclipticV = eclipticV;
    const u = eclipticU, v = eclipticV;
    const ZERO = new THREE.Vector3(); // All rings drawn relative to group origin

    // ── Sun ──────────────────────────────────────────────────────────────────
    const sunCore = new THREE.Mesh(
      new THREE.SphereGeometry(12, 32, 24),
      new THREE.MeshBasicMaterial({ color: this.isMoon ? 0xffffff : 0xffd269, fog: false })
    );
    // Sun sits at (0,0,0) within solarSystemGroup
    this.solarSystemGroup.add(sunCore);

    const sunCorona = new THREE.Mesh(
      new THREE.SphereGeometry(17, 28, 20),
      new THREE.MeshBasicMaterial({
        color: this.isMoon ? 0xffeedd : 0xff8c28,
        transparent: true, opacity: 0.36,
        blending: THREE.AdditiveBlending, depthWrite: false, fog: false
      })
    );
    this.solarSystemGroup.add(sunCorona);
    this.solarSystemSun = sunCore;
    this.solarSystemCorona = sunCorona;

    const sunLabel = this.createCelestialLabel("الشمس ☉", "مركز المجموعة الشمسية");
    sunLabel.position.set(0, 24, 0); // local within group
    this.solarSystemGroup.add(sunLabel);
    this.sunLabel = sunLabel;

    // =========================================================================
    // 1. Mercury (عطارد ☿) - 1st planet
    // =========================================================================
    const mercR = 42;
    this.solarSystemGroup.add(this.createOrbitRing(ZERO, u, v, mercR, 0x8899aa, 0.32));
    const mercuryNode = new THREE.Group();
    mercuryNode.add(new THREE.Mesh(
      new THREE.SphereGeometry(3.2, 24, 18),
      new THREE.MeshStandardMaterial({ color: 0xa59f99, roughness: 0.95, map: createRockTexture(101), fog: false })
    ));
    const mercLabel = this.createCelestialLabel("عطارد ☿", "الكوكب الأول من الشمس");
    mercLabel.position.set(0, 8, 0);
    mercuryNode.add(mercLabel);
    const mercInit = 0.4;
    mercuryNode.position.set(0, 0, 0).addScaledVector(u, mercR * Math.cos(mercInit)).addScaledVector(v, mercR * Math.sin(mercInit));
    this.solarSystemGroup.add(mercuryNode);
    this.solarPlanets.push({ node: mercuryNode, spec: { orbitRadius: mercR, orbitSpeed: 0.14, axialSpeed: 0.04 }, orbitAngle: mercInit });

    // =========================================================================
    // 2. Venus (الزهرة ♀) - 2nd planet
    // =========================================================================
    const venR = 74;
    this.solarSystemGroup.add(this.createOrbitRing(ZERO, u, v, venR, 0xd4af37, 0.35));
    const venusNode = new THREE.Group();
    venusNode.add(new THREE.Mesh(
      new THREE.SphereGeometry(5.6, 28, 20),
      new THREE.MeshStandardMaterial({ color: 0xf5dfab, roughness: 0.55, emissive: 0x5a4822, emissiveIntensity: 0.25, fog: false })
    ));
    const venLabel = this.createCelestialLabel("الزهرة ♀", "الكوكب الثاني · ألمع الكواكب");
    venLabel.position.set(0, 11, 0);
    venusNode.add(venLabel);
    const venInit = 1.25;
    venusNode.position.set(0, 0, 0).addScaledVector(u, venR * Math.cos(venInit)).addScaledVector(v, venR * Math.sin(venInit));
    this.solarSystemGroup.add(venusNode);
    this.solarPlanets.push({ node: venusNode, spec: { orbitRadius: venR, orbitSpeed: 0.09, axialSpeed: 0.025 }, orbitAngle: venInit });

    // =========================================================================
    // 3. Earth & Moon System (كوكب الأرض والقمر ♁) - 3rd planet
    // =========================================================================
    if (this.isMars) {
      // On Mars: Earth with Moon revolving around it along its solar orbit!
      const earthR = 114;
      this.solarSystemGroup.add(this.createOrbitRing(ZERO, u, v, earthR, 0x44aaff, 0.45));
      const earthNode = new THREE.Group();

      const earthMat = new THREE.MeshStandardMaterial({
        color: 0xffffff, roughness: 0.72, metalness: 0.05,
        emissive: 0x143c58, emissiveIntensity: 0.45, fog: false
      });
      new THREE.TextureLoader().load("assets/earth-blue-marble.jpg", tex => {
        tex.colorSpace = THREE.SRGBColorSpace;
        earthMat.map = tex; earthMat.emissiveMap = tex; earthMat.needsUpdate = true;
      });
      const earthMesh = new THREE.Mesh(new THREE.SphereGeometry(8.8, 32, 24), earthMat);
      earthNode.add(earthMesh);
      this.earth = earthMesh;

      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(9.05, 32, 24),
        new THREE.MeshBasicMaterial({ color: 0xeff7fa, transparent: true, opacity: 0.26, depthWrite: false, fog: false })
      );
      earthNode.add(clouds);
      this.earthClouds = clouds;

      const earthAtmo = new THREE.Mesh(
        new THREE.SphereGeometry(9.5, 32, 24),
        new THREE.MeshBasicMaterial({ color: 0x48aeff, transparent: true, opacity: 0.32, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide, fog: false })
      );
      earthNode.add(earthAtmo);

      // Moon revolving around Earth
      const lunarPivot = new THREE.Group();
      lunarPivot.rotation.x = 0.28;
      earthNode.add(lunarPivot);

      const lunarTrack = new THREE.Mesh(
        new THREE.RingGeometry(22, 22.25, 64),
        new THREE.MeshBasicMaterial({ color: 0x7ebfd6, transparent: true, opacity: 0.4, side: THREE.DoubleSide, depthWrite: false, fog: false })
      );
      lunarTrack.rotation.x = Math.PI / 2;
      lunarPivot.add(lunarTrack);

      const moonMesh = new THREE.Mesh(
        new THREE.SphereGeometry(2.4, 22, 18),
        new THREE.MeshStandardMaterial({ map: createMoonRegolithProceduralTexture(), color: 0xd6d9dc, roughness: 0.98, fog: false })
      );
      moonMesh.position.set(22, 0, 0);
      lunarPivot.add(moonMesh);

      const earthLabel = this.createCelestialLabel("كوكب الأرض والقمر ♁", "موطن البشرية وكوكب الحياة");
      earthLabel.position.set(0, 16, 0);
      earthNode.add(earthLabel);

      const earthInit = 2.1;
      earthNode.position.set(0, 0, 0).addScaledVector(u, earthR * Math.cos(earthInit)).addScaledVector(v, earthR * Math.sin(earthInit));
      this.solarSystemGroup.add(earthNode);
      this.lunarOrbit = lunarPivot;
      this.moonModel = moonMesh;
      this.solarPlanets.push({
        node: earthNode,
        spec: { orbitRadius: earthR, orbitSpeed: 0.012, axialSpeed: 0.08 },
        orbitAngle: earthInit
      });
    } else if (this.isMoon) {
      // Earth orbit ring in solar system for visual reference
      const earthR = 114;
      this.solarSystemGroup.add(this.createOrbitRing(ZERO, u, v, earthR, 0x44aaff, 0.35));

      // Big Earth hanging in the Lunar sky — kept in celestialAnchor (NOT solarSystemGroup)
      const earthNode = new THREE.Group();
      earthNode.position.set(0, 220, 330);

      const earthMat = new THREE.MeshStandardMaterial({
        color: 0xffffff, roughness: 0.72, metalness: 0.05,
        emissive: 0x143c58, emissiveIntensity: 0.45, fog: false
      });
      new THREE.TextureLoader().load("assets/earth-blue-marble.jpg", tex => {
        tex.colorSpace = THREE.SRGBColorSpace;
        earthMat.map = tex; earthMat.emissiveMap = tex; earthMat.needsUpdate = true;
      });
      const earthMesh = new THREE.Mesh(new THREE.SphereGeometry(6.2, 36, 28), earthMat);
      earthNode.add(earthMesh);
      this.earth = earthMesh;
      this.earthNode = earthNode;

      const clouds = new THREE.Mesh(
        new THREE.SphereGeometry(6.4, 36, 28),
        new THREE.MeshBasicMaterial({ color: 0xeff7fa, transparent: true, opacity: 0.28, depthWrite: false, fog: false })
      );
      earthNode.add(clouds);
      this.earthClouds = clouds;

      const earthAtmo = new THREE.Mesh(
        new THREE.SphereGeometry(6.9, 36, 28),
        new THREE.MeshBasicMaterial({ color: 0x48aeff, transparent: true, opacity: 0.38, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.BackSide, fog: false })
      );
      earthNode.add(earthAtmo);

      const earthLabel = this.createCelestialLabel("كوكب الأرض ♁", "تدور الأرض حول محورها ويدور القمر حولها في الفضاء");
      earthLabel.position.set(0, 9, 0);
      earthNode.add(earthLabel);
      this.celestialAnchor.add(earthNode); // celestialAnchor — big Earth overhead

      const orbitEarthNode = new THREE.Group();
      orbitEarthNode.add(new THREE.Mesh(new THREE.SphereGeometry(8.8, 32, 24), earthMat));
      const orbitEarthLabel = this.createCelestialLabel("الأرض ♁", "مدار الأرض حول الشمس");
      orbitEarthLabel.position.set(0, 15, 0);
      orbitEarthNode.add(orbitEarthLabel);
      const earthInit = 2.1;
      orbitEarthNode.position.set(0, 0, 0).addScaledVector(u, earthR * Math.cos(earthInit)).addScaledVector(v, earthR * Math.sin(earthInit));
      this.solarSystemGroup.add(orbitEarthNode);
      this.solarPlanets.push({ node: orbitEarthNode, spec: { orbitRadius: earthR, orbitSpeed: 0.012, axialSpeed: 0.08 }, orbitAngle: earthInit });
    }

    // =========================================================================
    // 4. Mars (المريخ ♂) - 4th planet in the Solar System
    // =========================================================================
    const marsR = 162;
    this.solarSystemGroup.add(this.createOrbitRing(ZERO, u, v, marsR, 0xff7733, 0.45));

    if (this.isMars) {
      const marsNode = new THREE.Group();
      const marsMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.92, fog: false });
      new THREE.TextureLoader().load("assets/mars-global-marci.jpg", texture => {
        texture.colorSpace = THREE.SRGBColorSpace;
        marsMaterial.map = texture;
        marsMaterial.needsUpdate = true;
      });
      const marsGlobe = new THREE.Mesh(new THREE.SphereGeometry(6.5, 32, 24), marsMaterial);
      marsNode.add(marsGlobe);
      const marsLabel = this.createCelestialLabel("المريخ · موقعك الحالي ♂", "عالم المهمة يدور حول الشمس");
      marsLabel.position.set(0, 12, 0);
      marsNode.add(marsLabel);
      const marsInit = 2.9;
      marsNode.position.set(0, 0, 0).addScaledVector(u, marsR * Math.cos(marsInit)).addScaledVector(v, marsR * Math.sin(marsInit));
      this.solarSystemGroup.add(marsNode);
      this.solarPlanets.push({ node: marsNode, spec: { orbitRadius: marsR, orbitSpeed: 0.044, axialSpeed: 0.03 }, orbitAngle: marsInit });
      this.orbitalMarsMesh = marsGlobe;

      // Phobos & Deimos orbit overhead around Mars (kept in celestialAnchor)
      const phobosPivot = new THREE.Group();
      phobosPivot.position.set(0, 20, 0);
      const phobosTrack = new THREE.Mesh(
        new THREE.RingGeometry(95, 95.3, 64),
        new THREE.MeshBasicMaterial({ color: 0xb5825a, transparent: true, opacity: 0.25, side: THREE.DoubleSide, depthWrite: false, fog: false })
      );
      phobosTrack.rotation.x = Math.PI / 2 + 0.15;
      phobosPivot.add(phobosTrack);
      const phobosMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(2.0, 2), new THREE.MeshStandardMaterial({ color: 0x8a7e72, roughness: 1, fog: false }));
      phobosMesh.position.set(95, 0, 0);
      phobosPivot.add(phobosMesh);
      const phobosLabel = this.createCelestialLabel("فوبوس", "قمر المريخ الأسرع والأقرب");
      phobosLabel.position.set(95, 6, 0);
      phobosPivot.add(phobosLabel);
      this.celestialAnchor.add(phobosPivot);
      this.phobosPivot = phobosPivot;

      const deimosPivot = new THREE.Group();
      deimosPivot.rotation.x = 0.35;
      const deimosMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(1.4, 2), new THREE.MeshStandardMaterial({ color: 0x9c9489, roughness: 1, fog: false }));
      deimosMesh.position.set(155, 0, 0);
      deimosPivot.add(deimosMesh);
      const deimosLabel = this.createCelestialLabel("ديموس", "قمر المريخ الخارجي");
      deimosLabel.position.set(155, 6, 0);
      deimosPivot.add(deimosLabel);
      this.celestialAnchor.add(deimosPivot);
      this.deimosPivot = deimosPivot;

    } else if (this.isMoon) {
      // Mars node in solar system orbit
      const marsNode = new THREE.Group();
      const marsMat = new THREE.MeshStandardMaterial({ color: 0xdd623a, roughness: 0.92, emissive: 0x3d170a, emissiveIntensity: 0.3, fog: false });
      new THREE.TextureLoader().load("assets/mars-global-marci.jpg", tex => {
        tex.colorSpace = THREE.SRGBColorSpace; marsMat.map = tex; marsMat.needsUpdate = true;
      });
      const marsMesh = new THREE.Mesh(new THREE.SphereGeometry(6.5, 32, 24), marsMat);
      marsNode.add(marsMesh);
      this.marsMesh = marsMesh;

      const phobosPivot = new THREE.Group();
      const phobosMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.8, 2), new THREE.MeshStandardMaterial({ color: 0x7a7167, roughness: 1, fog: false }));
      phobosMesh.position.set(11, 0, 0);
      phobosPivot.add(phobosMesh);
      marsNode.add(phobosPivot);

      const deimosPivot = new THREE.Group();
      deimosPivot.rotation.x = 0.22;
      const deimosMesh = new THREE.Mesh(new THREE.IcosahedronGeometry(0.55, 2), new THREE.MeshStandardMaterial({ color: 0x8a8479, roughness: 1, fog: false }));
      deimosMesh.position.set(16, 0, 0);
      deimosPivot.add(deimosMesh);
      marsNode.add(deimosPivot);
      this.phobosPivot = phobosPivot;
      this.deimosPivot = deimosPivot;

      const marsLabel = this.createCelestialLabel("المريخ ♂", "الكوكب الرابع وأقماره");
      marsLabel.position.set(0, 12, 0);
      marsNode.add(marsLabel);

      const marsInit = 2.9;
      marsNode.position.set(0, 0, 0).addScaledVector(u, marsR * Math.cos(marsInit)).addScaledVector(v, marsR * Math.sin(marsInit));
      this.solarSystemGroup.add(marsNode);
      this.solarPlanets.push({ node: marsNode, spec: { orbitRadius: marsR, orbitSpeed: 0.044, axialSpeed: 0.03 }, orbitAngle: marsInit });
    }

    // =========================================================================
    // 5. Asteroid Belt (حزام الكويكبات) - between Mars & Jupiter
    // =========================================================================
    const beltR = 215;
    this.solarSystemGroup.add(this.createOrbitRing(ZERO, u, v, beltR, 0x887766, 0.3));

    const asteroidCount = 190;
    const asteroidGeo = new THREE.IcosahedronGeometry(0.9, 1);
    const asteroidMat = new THREE.MeshStandardMaterial({ color: 0x7c756e, roughness: 1, fog: false });
    const asteroidBelt = new THREE.InstancedMesh(asteroidGeo, asteroidMat, asteroidCount);
    const dummy = new THREE.Object3D();
    for (let i = 0; i < asteroidCount; i++) {
      const angle = (i / asteroidCount) * TAU + (Math.random() - 0.5) * 0.08;
      const rad = beltR + (Math.random() - 0.5) * 22;
      const p = new THREE.Vector3() // relative to solarSystemGroup origin
        .addScaledVector(eclipticU, rad * Math.cos(angle))
        .addScaledVector(eclipticV, rad * Math.sin(angle))
        .add(new THREE.Vector3((Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12));
      dummy.position.copy(p);
      const s = 0.5 + Math.random() * 1.25;
      dummy.scale.set(s, s * 0.75, s);
      dummy.rotation.set(Math.random() * TAU, Math.random() * TAU, 0);
      dummy.updateMatrix();
      asteroidBelt.setMatrixAt(i, dummy.matrix);
    }
    asteroidBelt.instanceMatrix.needsUpdate = true;
    this.solarSystemGroup.add(asteroidBelt);
    this.asteroidBeltMesh = asteroidBelt;

    const beltLabel = this.createCelestialLabel("حزام الكويكبات", "بين مداري المريخ والمشتري");
    const beltLabelPos = new THREE.Vector3().addScaledVector(eclipticU, beltR * Math.cos(3.3)).addScaledVector(eclipticV, beltR * Math.sin(3.3));
    beltLabel.position.set(beltLabelPos.x, beltLabelPos.y + 12, beltLabelPos.z);
    this.solarSystemGroup.add(beltLabel);

    // =========================================================================
    // 6. Jupiter (المشتري ♃) - 5th planet
    // =========================================================================
    const jupR = 275;
    this.solarSystemGroup.add(this.createOrbitRing(ZERO, u, v, jupR, 0xbba682, 0.35));
    const jupiterNode = new THREE.Group();
    const jupiterMesh = new THREE.Mesh(
      new THREE.SphereGeometry(16.5, 32, 24),
      new THREE.MeshStandardMaterial({ map: createJupiterAtmosphereTexture(), roughness: 0.88, fog: false })
    );
    jupiterNode.add(jupiterMesh);
    this.jupiterMesh = jupiterMesh;

    this.galileanMoons = [
      { r: 24, s: 1.1, speed: 0.05, color: 0xded87a },
      { r: 30, s: 0.95, speed: 0.035, color: 0xa8c8d8 },
      { r: 38, s: 1.45, speed: 0.022, color: 0x888279 },
      { r: 47, s: 1.3, speed: 0.014, color: 0x5a5852 }
    ].map(mSpec => {
      const pivot = new THREE.Group();
      const moonM = new THREE.Mesh(new THREE.SphereGeometry(mSpec.s, 14, 12), new THREE.MeshStandardMaterial({ color: mSpec.color, roughness: 0.9, fog: false }));
      moonM.position.set(mSpec.r, 0, 0);
      pivot.add(moonM);
      jupiterNode.add(pivot);
      return { pivot, speed: mSpec.speed };
    });

    const jupiterLabel = this.createCelestialLabel("المشتري ♃", "عملاق المجموعة وأقماره الأربعة");
    jupiterLabel.position.set(0, 24, 0);
    jupiterNode.add(jupiterLabel);
    const jupInit = 3.8;
    jupiterNode.position.set(0, 0, 0).addScaledVector(u, jupR * Math.cos(jupInit)).addScaledVector(v, jupR * Math.sin(jupInit));
    this.solarSystemGroup.add(jupiterNode);
    this.solarPlanets.push({ node: jupiterNode, spec: { orbitRadius: jupR, orbitSpeed: 0.022, axialSpeed: 0.035 }, orbitAngle: jupInit });

    // =========================================================================
    // 7. Saturn (زحل ♄) - 6th planet with tilted rings
    // =========================================================================
    const satR = 345;
    this.solarSystemGroup.add(this.createOrbitRing(ZERO, u, v, satR, 0xd4c29a, 0.35));
    const saturnNode = new THREE.Group();
    const saturnMesh = new THREE.Mesh(
      new THREE.SphereGeometry(12.5, 32, 24),
      new THREE.MeshStandardMaterial({ color: 0xd9be8d, roughness: 0.85, fog: false })
    );
    saturnNode.add(saturnMesh);
    this.saturnMesh = saturnMesh;

    const saturnRings = new THREE.Mesh(
      new THREE.RingGeometry(15, 29, 64),
      new THREE.MeshStandardMaterial({
        map: createSaturnRingTexture(), side: THREE.DoubleSide,
        transparent: true, opacity: 0.9, roughness: 0.9, fog: false
      })
    );
    saturnRings.rotation.x = Math.PI / 2 + 0.46;
    saturnNode.add(saturnRings);

    const saturnLabel = this.createCelestialLabel("زحل ♄", "جوهرة الحلقات الجليدية");
    saturnLabel.position.set(0, 20, 0);
    saturnNode.add(saturnLabel);
    const satInit = 4.6;
    saturnNode.position.set(0, 0, 0).addScaledVector(u, satR * Math.cos(satInit)).addScaledVector(v, satR * Math.sin(satInit));
    this.solarSystemGroup.add(saturnNode);
    this.solarPlanets.push({ node: saturnNode, spec: { orbitRadius: satR, orbitSpeed: 0.015, axialSpeed: 0.02 }, orbitAngle: satInit });

    // =========================================================================
    // 8. Uranus (أورانوس ♅) - 7th planet
    // =========================================================================
    const uraR = 410;
    this.solarSystemGroup.add(this.createOrbitRing(ZERO, u, v, uraR, 0x77ccee, 0.32));
    const uranusNode = new THREE.Group();
    uranusNode.add(new THREE.Mesh(
      new THREE.SphereGeometry(7.8, 28, 20),
      new THREE.MeshStandardMaterial({ color: 0x88c9d0, roughness: 0.82, fog: false })
    ));
    const uRing = new THREE.Mesh(new THREE.RingGeometry(10.5, 12.8, 48), new THREE.MeshBasicMaterial({ color: 0x78b8bf, transparent: true, opacity: 0.35, side: THREE.DoubleSide, fog: false }));
    uRing.rotation.y = Math.PI / 2;
    uranusNode.add(uRing);
    const uranusLabel = this.createCelestialLabel("أورانوس ♅", "العملاق الجليدي المائل");
    uranusLabel.position.set(0, 14, 0);
    uranusNode.add(uranusLabel);
    const uraInit = 5.3;
    uranusNode.position.set(0, 0, 0).addScaledVector(u, uraR * Math.cos(uraInit)).addScaledVector(v, uraR * Math.sin(uraInit));
    this.solarSystemGroup.add(uranusNode);
    this.solarPlanets.push({ node: uranusNode, spec: { orbitRadius: uraR, orbitSpeed: 0.010, axialSpeed: 0.018 }, orbitAngle: uraInit });

    // =========================================================================
    // 9. Neptune (نبتون ♆) - 8th planet
    // =========================================================================
    const nepR = 470;
    this.solarSystemGroup.add(this.createOrbitRing(ZERO, u, v, nepR, 0x4477dd, 0.3));
    const neptuneNode = new THREE.Group();
    neptuneNode.add(new THREE.Mesh(
      new THREE.SphereGeometry(7.5, 28, 20),
      new THREE.MeshStandardMaterial({ color: 0x4b78cf, roughness: 0.82, fog: false })
    ));
    const neptuneLabel = this.createCelestialLabel("نبتون ♆", "الكوكب الأزرق الأبعد");
    neptuneLabel.position.set(0, 14, 0);
    neptuneNode.add(neptuneLabel);
    const nepInit = 6.0;
    neptuneNode.position.set(0, 0, 0).addScaledVector(u, nepR * Math.cos(nepInit)).addScaledVector(v, nepR * Math.sin(nepInit));
    this.solarSystemGroup.add(neptuneNode);
    this.solarPlanets.push({ node: neptuneNode, spec: { orbitRadius: nepR, orbitSpeed: 0.007, axialSpeed: 0.015 }, orbitAngle: nepInit });
  }

  /* -----------------------------------------------------------------------
     Terrain & World Generation
     ----------------------------------------------------------------------- */
  terrainHeight(x, z) {
    let base = Math.sin(x * 0.094) * Math.cos(z * 0.081) * 1.65
      + Math.sin((x + z) * 0.16) * 0.74
      + Math.cos(x * 0.23 - z * 0.11) * 0.32;

    if (this.isMars) {
      // Mars Jezero Crater delta dunes, layered bedrock, and ripple ridges
      const duneWave = Math.sin(x * 0.065 + Math.sin(z * 0.04) * 2.2) * 1.8;
      const ripple = Math.sin(x * 0.28 + z * 0.18) * 0.22;
      const canyonMesa = Math.max(0, Math.sin(x * 0.03 + z * 0.025) * 3.2 - 1.2);
      base += duneWave + ripple + canyonMesa;
    } else if (this.isMoon) {
      // Lunar regolith: multiple overlapping crater depressions and rim ejecta
      const microCrater = -Math.exp(-((Math.hypot(x - 8, z - 12) / 4.5) ** 2)) * 1.9;
      const regolithRoughness = Math.sin(x * 0.22) * Math.cos(z * 0.25) * 0.45;
      base += microCrater + regolithRoughness;
    }

    if (this.siteProfile?.terrain === "lava") {
      const coast = THREE.MathUtils.smoothstep(Math.hypot(x, z), 34, 57);
      base += Math.sin(z * 0.17 + Math.sin(x * 0.08) * 2.2) * 1.1 + Math.cos(x * 0.12 + z * 0.07) * 0.65;
      base += (1 - coast) * 2.5;
      base = THREE.MathUtils.lerp(base, -2.65, coast);
    } else if (this.siteProfile?.terrain === "alluvial") {
      const channel = z - Math.sin(x * 0.075) * 5;
      base += Math.sin(x * 0.045) * 1.2 - Math.exp(-((channel / 2.2) ** 2)) * 1.25;
    }

    // Main landmark crater
    const craterX = x + 17;
    const craterZ = z + 9;
    const craterR = Math.hypot(craterX, craterZ);
    const hasCrater = !this.siteProfile || this.siteProfile.terrain === "impact";
    const bowl = hasCrater ? -Math.exp(-((craterR / 8.6) ** 2)) * (this.isMoon ? 3.4 : 2.4) : 0;
    const rim = hasCrater ? Math.exp(-(((craterR - 8.8) / 1.25) ** 2)) * 1.15 : 0;
    return base + bowl + rim;
  }

  createWorld() {
    const segments = 84;
    const size = WORLD_RADIUS * 2;
    const positions = [];
    const colors = [];
    const indices = [];
    const low = new THREE.Color(this.look.ground[0]);
    const mid = new THREE.Color(this.look.ground[1]);
    const high = new THREE.Color(this.look.ground[2]);

    for (let row = 0; row <= segments; row += 1) {
      const z = -WORLD_RADIUS + size * row / segments;
      for (let column = 0; column <= segments; column += 1) {
        const x = -WORLD_RADIUS + size * column / segments;
        const height = this.terrainHeight(x, z);
        positions.push(x, height, z);
        const amount = THREE.MathUtils.clamp((height + 3.2) / 7.5, 0, 1);
        const color = amount < 0.52 ? low.clone().lerp(mid, amount / 0.52) : mid.clone().lerp(high, (amount - 0.52) / 0.48);
        const grain = (seededValue(x * 1.5, z * 2.1) - 0.5) * 0.04;
        colors.push(color.r + grain, color.g + grain, color.b + grain);
      }
    }

    for (let row = 0; row < segments; row += 1) {
      for (let column = 0; column < segments; column += 1) {
        const a = row * (segments + 1) + column;
        const b = a + 1;
        const c = a + segments + 1;
        const d = c + 1;
        indices.push(a, c, b, b, c, d);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    const terrainMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.98,
      metalness: 0.02,
      flatShading: true,
      map: this.isMars ? createMarsSurfaceProceduralTexture() : this.isMoon ? createMoonRegolithProceduralTexture() : createRockTexture(seedFromText(this.config.world))
    });

    const terrain = new THREE.Mesh(geometry, terrainMat);
    terrain.receiveShadow = true;
    if (this.siteProfile?.terrain === "lava") {
      const ocean = new THREE.Mesh(
        new THREE.PlaneGeometry(420, 420),
        new THREE.MeshPhysicalMaterial({ color: 0x167d9d, roughness: 0.24, metalness: 0.12, transparent: true, opacity: 0.9, clearcoat: 0.65, clearcoatRoughness: 0.2 })
      );
      ocean.rotation.x = -Math.PI / 2;
      ocean.position.y = -1.75;
      ocean.receiveShadow = true;
      this.scene.add(ocean);
      this.ocean = ocean;
    }
    this.scene.add(terrain);
    this.terrainMesh = terrain;

    const body = new CANNON.Body({ mass: 0, material: this.terrainMaterial });
    body.addShape(new CANNON.Trimesh(positions, indices));
    this.physics.addBody(body);

    this.addBoundaryWalls();
    this.addTerrainDetails();
    this.createSiteEnvironment();
  }

  addBoundaryWalls() {
    const wallMaterial = new CANNON.Material("boundary");
    const thickness = 2;
    const bottom = -30;
    const height = 70;
    const centerY = bottom + height / 2;
    const wallPositions = [
      [0, centerY, -WORLD_RADIUS, WORLD_RADIUS * 2, height, thickness],
      [0, centerY, WORLD_RADIUS, WORLD_RADIUS * 2, height, thickness],
      [-WORLD_RADIUS, centerY, 0, thickness, height, WORLD_RADIUS * 2],
      [WORLD_RADIUS, centerY, 0, thickness, height, WORLD_RADIUS * 2]
    ];
    wallPositions.forEach(([x, y, z, sx, sy, sz]) => {
      const wall = new CANNON.Body({ mass: 0, material: wallMaterial, position: new CANNON.Vec3(x, y, z) });
      wall.addShape(new CANNON.Box(new CANNON.Vec3(sx / 2, sy / 2, sz / 2)));
      this.physics.addBody(wall);
    });
  }

  addTerrainDetails() {
    const terrainSeed = seedFromText(this.stageSite?.id || this.config.world);
    const rockGeometry = createRockGeometry(terrainSeed, this.isMars ? "layered" : this.siteProfile?.sample === "basalt" ? "fractured" : "angular");
    const rockTexture = createRockTexture(terrainSeed);
    const rockMaterials = this.look.rock.map(color => new THREE.MeshStandardMaterial({
      color,
      map: rockTexture,
      vertexColors: true,
      roughness: 0.96,
      metalness: 0
    }));

    const batches = rockMaterials.map(material => {
      const batch = new THREE.InstancedMesh(rockGeometry, material, 85);
      batch.castShadow = true;
      batch.receiveShadow = true;
      this.scene.add(batch);
      this.rocks.push(batch);
      return batch;
    });

    const dummy = new THREE.Object3D();
    batches.forEach((batch, batchIndex) => {
      for (let index = 0; index < 85; index += 1) {
        const seed = terrainSeed + batchIndex * 133 + index * 41;
        const angle = seededValue(seed, 1) * TAU;
        const detailRadius = this.siteProfile?.terrain === "lava" ? 33 : WORLD_RADIUS - 12;
        const radius = 6 + Math.sqrt(seededValue(seed, 2)) * detailRadius;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const height = this.terrainHeight(x, z);
        const scale = 0.45 + seededValue(seed, 3) * 1.35;
        dummy.position.set(x, height + scale * 0.18, z);
        dummy.scale.set(scale * (0.85 + seededValue(seed, 4) * 0.3), scale * (0.65 + seededValue(seed, 5) * 0.4), scale);
        dummy.rotation.set((seededValue(seed, 6) - 0.5) * 0.5, seededValue(seed, 7) * TAU, (seededValue(seed, 8) - 0.5) * 0.5);
        dummy.updateMatrix();
        batch.setMatrixAt(index, dummy.matrix);
        this.rockSurfaces.push({ x, z, radius: scale * 0.85, height });
      }
      batch.instanceMatrix.needsUpdate = true;
    });
  }

  createSiteEnvironment() {
    if (this.siteProfile?.terrain === "lava") {
      const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x76513a, roughness: 0.94 });
      const leafMaterial = new THREE.MeshStandardMaterial({ color: 0x34744b, roughness: 0.88, side: THREE.DoubleSide });
      for (let index = 0; index < 9; index += 1) {
        const angle = index * 2.4;
        const radius = 16 + seededValue(index + 41, 5) * 15;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const palm = new THREE.Group();
        palm.position.set(x, this.terrainHeight(x, z), z);
        const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.3, 5.5, 8), trunkMaterial);
        trunk.position.y = 2.75;
        trunk.castShadow = true;
        palm.add(trunk);
        for (let frond = 0; frond < 8; frond += 1) {
          const direction = frond * TAU / 8;
          const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.18, 4, 5), leafMaterial);
          leaf.position.set(Math.cos(direction) * 1.15, 5.25, Math.sin(direction) * 1.15);
          leaf.rotation.z = Math.PI / 2;
          leaf.rotation.y = direction;
          leaf.castShadow = true;
          palm.add(leaf);
        }
        this.scene.add(palm);
      }
    }

    if (["death-valley", "atacama"].includes(this.stageSite?.id)) {
      this.desertAnimals = [];
      for (let index = 0; index < 3; index += 1) {
        const model = makeDesertAnimal(index);
        const animal = {
          model,
          radius: 8 + index * 5,
          phase: index * TAU / 3,
          speed: 0.4 + index * 0.08,
          fleeingUntil: 0
        };
        this.scene.add(model);
        this.desertAnimals.push(animal);
      }
    }

    if (this.stageSite?.id === "atacama") {
      // Atacama: add cacti, Andean foxes, and cats
      for (let i = 0; i < 7; i++) {
        const angle = i * 0.9 + 0.4;
        const r = 14 + seededValue(i + 77, 3) * 24;
        const cx = Math.cos(angle) * r;
        const cz = Math.sin(angle) * r;
        const cactus = makeCactus(i);
        cactus.position.set(cx, this.terrainHeight(cx, cz), cz);
        this.scene.add(cactus);
      }
      this.atacamaWildlife = [
        { kind: "fox", x: 18, z: -14 },
        { kind: "fox", x: -22, z: 9 },
        { kind: "cat", x: 7, z: 20 },
        { kind: "cat", x: -10, z: -18 }
      ].map((w, idx) => {
        const model = makeArcticWildlife(w.kind);
        model.position.set(w.x, this.terrainHeight(w.x, w.z), w.z);
        this.scene.add(model);
        return { ...w, model, phase: idx * 2.1, turnIn: 2 + idx * 0.8, fleeingUntil: 0 };
      });
    }

    if (this.stageSite?.id === "devon") {
      this.devonWildlife = [
        { kind: "cat", x: -18, z: 12 },
        { kind: "fox", x: 21, z: 17 },
        { kind: "hare", x: -8, z: -24 }
      ].map((animal, index) => {
        const model = makeArcticWildlife(animal.kind);
        model.position.set(animal.x, this.terrainHeight(animal.x, animal.z), animal.z);
        this.scene.add(model);
        return { ...animal, model, phase: index * 1.7, turnIn: 2 + index, fleeingUntil: 0 };
      });
    }
  }

  updateSiteEnvironment(delta) {
    const px = this.playerBody.position.x;
    const pz = this.playerBody.position.z;

    this.desertAnimals?.forEach(animal => {
      const position = animal.model.position;
      const dxP = position.x - px;
      const dzP = position.z - pz;
      const distP = Math.hypot(dxP, dzP);
      if (distP < 7.5) animal.fleeingUntil = this.elapsed + 3.8;
      const fleeing = this.elapsed < animal.fleeingUntil;
      if (fleeing) {
        const nx = THREE.MathUtils.clamp(position.x + (dxP / Math.max(distP, 0.01)) * 10.5 * delta, -WORLD_RADIUS + 4, WORLD_RADIUS - 4);
        const nz = THREE.MathUtils.clamp(position.z + (dzP / Math.max(distP, 0.01)) * 10.5 * delta, -WORLD_RADIUS + 4, WORLD_RADIUS - 4);
        position.set(nx, this.terrainHeight(nx, nz), nz);
        animal.model.rotation.y = Math.atan2(-dxP, -dzP);
        const gait = Math.sin(this.elapsed * 18 + animal.phase) * 0.9;
        animal.model.userData.legs?.forEach((leg, i) => { leg.rotation.x = gait * (i % 2 ? -1 : 1); });
      } else {
        const angle = animal.phase + this.elapsed * animal.speed;
        const x = Math.cos(angle) * animal.radius;
        const z = Math.sin(angle) * animal.radius;
        animal.model.position.set(x, this.terrainHeight(x, z), z);
        animal.model.rotation.y = Math.atan2(-Math.sin(angle), Math.cos(angle));
        const gait = Math.sin(this.elapsed * 13 + animal.phase) * 0.55;
        animal.model.userData.legs?.forEach((leg, i) => { leg.rotation.x = gait * (i % 2 ? -1 : 1); });
      }
    });

    const fleeWildlife = (list) => {
      list?.forEach(animal => {
        const position = animal.model.position;
        const dx = position.x - px;
        const dz = position.z - pz;
        const dist = Math.hypot(dx, dz);
        if (dist < 7.5) animal.fleeingUntil = this.elapsed + 3.8;
        const fleeing = this.elapsed < animal.fleeingUntil;
        animal.turnIn -= delta;
        if (!fleeing && animal.turnIn <= 0) {
          animal.phase += (Math.random() - 0.5) * 1.8;
          animal.turnIn = 2.5 + Math.random() * 3.5;
        }
        const moveX = fleeing ? dx / Math.max(dist, 0.01) : Math.sin(animal.phase);
        const moveZ = fleeing ? dz / Math.max(dist, 0.01) : Math.cos(animal.phase);
        const speed = fleeing ? 10.5 : 0.42;
        const nextX = THREE.MathUtils.clamp(position.x + moveX * speed * delta, -WORLD_RADIUS + 4, WORLD_RADIUS - 4);
        const nextZ = THREE.MathUtils.clamp(position.z + moveZ * speed * delta, -WORLD_RADIUS + 4, WORLD_RADIUS - 4);
        position.set(nextX, this.terrainHeight(nextX, nextZ), nextZ);
        if (fleeing) animal.model.rotation.y = Math.atan2(-moveX, -moveZ);
        const gait = Math.sin(this.elapsed * (fleeing ? 22 : 5) + animal.phase) * (fleeing ? 1.0 : 0.24);
        animal.model.userData.legs?.forEach((leg, i) => { leg.rotation.x = gait * (i % 2 ? -1 : 1); });
      });
    };

    fleeWildlife(this.devonWildlife);
    fleeWildlife(this.atacamaWildlife);
  }

  /* -----------------------------------------------------------------------
     Surface Realism: Realistic Mars Habitat & Apollo/Artemis Lunar Lander
     "رائد الفضاء لما يروح للمريخ يكون فعلا علي سطح المريخ في الحقيقه"
     ----------------------------------------------------------------------- */
  findLandingElevation(x, z, radius = 4) {
    let elevation = this.terrainHeight(x, z);
    for (let index = 0; index < 8; index += 1) {
      const angle = index * TAU / 8;
      elevation = Math.max(elevation, this.terrainHeight(x + Math.cos(angle) * radius, z + Math.sin(angle) * radius));
    }
    return elevation;
  }

  createSurfaceBaseCamp() {
    if (this.config.character === "alien") {
      // Alien: spawn a cartoon flying saucer at their base camp
      const saucer = makeAlienFlyingSaucer();
      const sX = -10, sZ = -12;
      const sY = this.findLandingElevation(sX, sZ);
      saucer.position.set(sX, sY + 0.4, sZ);
      this.scene.add(saucer);
      this.alienSaucer = saucer;

      // --- Physics collision body for the alien saucer ---
      // Flat disc hull (wide, low cylinder)
      const discBody = new CANNON.Body({
        mass: 0,
        type: CANNON.Body.STATIC,
        shape: new CANNON.Cylinder(3.4, 3.4, 1.2, 16),
        position: new CANNON.Vec3(sX, sY + 0.4, sZ)
      });
      this.physics.addBody(discBody);
      // Dome on top (narrower, taller cylinder)
      const domeBody = new CANNON.Body({
        mass: 0,
        type: CANNON.Body.STATIC,
        shape: new CANNON.Cylinder(1.3, 1.3, 2.0, 12),
        position: new CANNON.Vec3(sX, sY + 1.9, sZ)
      });
      this.physics.addBody(domeBody);
      this.baseCampBodies = this.baseCampBodies || [];
      this.baseCampBodies.push(discBody, domeBody);
      return;
    }

    if (this.config.character !== "astronaut") return;

    if (this.isMars) {
      // Mars Science Base / Habitat Lander
      const hab = makeMarsHabitat();
      const habX = -14;
      const habZ = -16;
      const habY = this.findLandingElevation(habX, habZ);
      const landingPad = makeSurfaceLandingPad(false);
      landingPad.position.set(habX, habY, habZ);
      this.scene.add(landingPad);
      this.rocks.push(landingPad);
      hab.position.set(habX, habY + 0.12, habZ);
      this.scene.add(hab);
      this.marsHabitat = hab;
      this.rocks.push(hab);

      // Solid CANNON physical collision body for Mars Habitat
      const habBody = new CANNON.Body({
        mass: 0,
        type: CANNON.Body.STATIC,
        shape: new CANNON.Cylinder(4.2, 4.2, 5.5, 14),
        position: new CANNON.Vec3(habX, habY + 2.82, habZ)
      });
      this.physics.addBody(habBody);
      this.baseCampBodies = this.baseCampBodies || [];
      this.baseCampBodies.push(habBody);

      // Mars Science Sample Depot Cache Station on the ground
      const cacheStation = makeSampleCacheDepot();
      const cacheX = -8.5;
      const cacheZ = -12;
      cacheStation.position.set(cacheX, this.terrainHeight(cacheX, cacheZ), cacheZ);
      this.scene.add(cacheStation);
      this.rocks.push(cacheStation);

    } else if (this.isMoon) {
      // Apollo / Artemis Lunar Descent Module (LM) on the lunar surface
      const lm = makeLunarModule();
      const lmX = -12;
      const lmZ = -15;
      const lmY = this.findLandingElevation(lmX, lmZ);
      const landingPad = makeSurfaceLandingPad(true);
      landingPad.position.set(lmX, lmY, lmZ);
      this.scene.add(landingPad);
      this.rocks.push(landingPad);
      lm.position.set(lmX, lmY + 0.12, lmZ);
      this.scene.add(lm);
      this.lunarModule = lm;
      this.rocks.push(lm);

      // Solid CANNON physical collision body for Lunar Lander - intangible bug fixed!
      const lmBody = new CANNON.Body({
        mass: 0,
        type: CANNON.Body.STATIC,
        shape: new CANNON.Cylinder(3.6, 3.6, 6.2, 16),
        position: new CANNON.Vec3(lmX, lmY + 3.22, lmZ)
      });
      this.physics.addBody(lmBody);
      this.baseCampBodies = this.baseCampBodies || [];
      this.baseCampBodies.push(lmBody);
    }
  }

  createAtmosphericDust() {
    if (this.isMoon) return; // Moon has no atmosphere or wind
    const count = 160;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = 0.5 + Math.random() * 12;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 120;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0xd96836,
      size: 0.18,
      transparent: true,
      opacity: 0.42,
      depthWrite: false
    });
    this.atmoDust = new THREE.Points(geo, mat);
    this.scene.add(this.atmoDust);
  }

  /* -----------------------------------------------------------------------
     Player (Astronaut / Alien) & Controls
     ----------------------------------------------------------------------- */
  createPlayer() {
    const startY = this.terrainHeight(0, 0) + PLAYER_COLLIDER_HEIGHT + 0.08;
    this.playerBody = new CANNON.Body({
      mass: 65,
      material: this.playerMaterial,
      position: new CANNON.Vec3(0, startY, 0),
      linearDamping: 0.18,
      angularDamping: 1,
      allowSleep: false
    });
    this.playerBody.addShape(new CANNON.Sphere(PLAYER_RADIUS));
    this.playerBody.addShape(new CANNON.Sphere(PLAYER_RADIUS), new CANNON.Vec3(0, -PLAYER_HALF_HEIGHT, 0));
    this.playerBody.addShape(new CANNON.Sphere(PLAYER_RADIUS), new CANNON.Vec3(0, PLAYER_HALF_HEIGHT, 0));
    this.playerBody.fixedRotation = true;
    this.playerBody.updateMassProperties();
    this.physics.addBody(this.playerBody);

    const resume = this.config.progress.resumeState;
    if (resume && [resume.x, resume.y, resume.z, resume.cameraYaw, resume.cameraPitch].every(Number.isFinite)) {
      const x = THREE.MathUtils.clamp(resume.x, -WORLD_RADIUS + 2, WORLD_RADIUS - 2);
      const z = THREE.MathUtils.clamp(resume.z, -WORLD_RADIUS + 2, WORLD_RADIUS - 2);
      const floor = this.terrainHeight(x, z) + PLAYER_COLLIDER_HEIGHT + 0.07;
      this.playerBody.position.set(x, floor, z);
      this.playerBody.previousPosition.copy(this.playerBody.position);
      this.playerBody.interpolatedPosition.copy(this.playerBody.position);
      this.playerBody.velocity.set(0, 0, 0);
      this.playerBody.aabbNeedsUpdate = true;
      this.cameraYaw = resume.cameraYaw;
      this.cameraPitch = THREE.MathUtils.clamp(resume.cameraPitch, -0.72, 0.4);
    }

    const leadFace = this.config.character === "astronaut" ? "assets/crew/crew-lead.jpg" : null;
    this.playerModel = makeCharacter(this.config.character, 0, leadFace);
    this.scene.add(this.playerModel);
    this.playerPivots = this.playerModel.userData.pivots;

    // Three companions follow the leader in the same arrowhead formation.
    this.crewMembers = [];
    if (["astronaut", "alien"].includes(this.config.character)) {
      const crewFaces = this.config.character === "astronaut" ? [
        "assets/crew/crew-1.jpg",
        "assets/crew/crew-2.jpg",
        "assets/crew/crew-3.jpg"
      ] : [null, null, null];
      const crewOffsets = [
        { x: 0, z: 2.5 },
        { x: -1.6, z: 4.5 },
        { x: 1.6, z: 4.5 }
      ];

      crewFaces.forEach((faceUrl, idx) => {
        const crewModel = makeCharacter(this.config.character, 0, faceUrl);
        const initX = this.playerBody.position.x + crewOffsets[idx].x;
        const initZ = this.playerBody.position.z + crewOffsets[idx].z;
        const initY = this.terrainHeight(initX, initZ);
        crewModel.position.set(initX, initY, initZ);
        this.scene.add(crewModel);
        this.crewMembers.push({
          model: crewModel,
          pivots: crewModel.userData.pivots,
          offset: crewOffsets[idx],
          currentPos: new THREE.Vector3(initX, initY, initZ),
          walkCycle: idx * 1.6
        });
      });
    }

    // Thruster Particle Exhaust
    this.createJetpackThrusterFx();

    this.camera.position.set(0, startY + 2.4, 6);
  }

  createJetpackThrusterFx() {
    const count = 32;
    const positions = new Float32Array(count * 3);
    positions.fill(-9999);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color: 0x55ccff,
      size: 0.16,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    this.thrusterFx = new THREE.Points(geo, mat);
    this.thrusterFx.visible = false;
    this.scene.add(this.thrusterFx);
  }

  createCompanion() {
    if (this.config.character !== "alien") return; // Robot companion is exclusive to alien explorers
    const companion = new THREE.Group();
    const shell = new THREE.MeshStandardMaterial({ color: 0xb7c8c6, roughness: 0.63, metalness: 0.28 });
    const trim = new THREE.MeshStandardMaterial({ color: 0x425d66, roughness: 0.5, metalness: 0.36 });
    const lensMaterial = new THREE.MeshStandardMaterial({ color: 0x75e3e6, emissive: 0x2d9fb2, emissiveIntensity: 1.05, roughness: 0.2 });

    const chassis = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.38, 0.62), shell);
    chassis.position.y = 0.48;
    chassis.castShadow = true;
    companion.add(chassis);

    const sensor = new THREE.Mesh(new THREE.SphereGeometry(0.27, 12, 10), trim);
    sensor.position.set(0, 0.82, -0.08);
    companion.add(sensor);

    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.13, 12, 10), lensMaterial);
    eye.position.set(0, 0.84, -0.3);
    companion.add(eye);

    const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.04, 0.42, 7), trim);
    antenna.position.set(0, 1.15, 0.08);
    companion.add(antenna);

    for (const side of [-1, 1]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.19, 0.19, 0.13, 10), trim);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(side * 0.42, 0.3, 0.02);
      companion.add(wheel);
    }

    companion.scale.setScalar(0.72);
    companion.position.set(1.35, this.terrainHeight(1.35, 0.8), 0.8);
    companion.traverse(object => { if (object.isMesh) object.castShadow = true; });
    this.scene.add(companion);
    this.companion = companion;
  }

  createSamples() {
    const count = this.sampleDefinitions.length;
    const worldSeed = seedFromText(this.stageSite?.id || this.config.world);
    const rotation = seededValue(worldSeed, 7) * TAU;

    this.sampleDefinitions.forEach((definition, index) => {
      const progress = (index + 0.5) / count;
      const angle = index * 2.399963 + rotation + (seededValue(index + 19, 3) - 0.5) * 0.8;
      const distance = 11 + Math.sqrt(progress) * 31 + (seededValue(index + 7, 11) - 0.5) * 8;
      const x = THREE.MathUtils.clamp(Math.cos(angle) * distance, -WORLD_RADIUS + 8, WORLD_RADIUS - 8);
      const z = THREE.MathUtils.clamp(Math.sin(angle) * distance, -WORLD_RADIUS + 8, WORLD_RADIUS - 8);
      const size = definition.size || 0.75;
      const groundY = this.terrainHeight(x, z);
      const group = new THREE.Group();
      group.position.set(x, groundY + size * 0.1, z);
      group.rotation.set((seededValue(index + 2, 5) - 0.5) * 0.4, seededValue(index + 8, 2) * TAU, (seededValue(index + 3, 9) - 0.5) * 0.3);

      const sampleSeed = seedFromText(definition.id);
      const geometry = createRockGeometry(sampleSeed, definition.form);
      const texture = createRockTexture(sampleSeed);
      const material = new THREE.MeshStandardMaterial({ color: definition.color, map: texture, vertexColors: true, roughness: 0.98, metalness: 0 });
      const rock = new THREE.Mesh(geometry, material);
      rock.scale.set(size * (0.82 + seededValue(index + 12, 4) * 0.35), size, size * (0.86 + seededValue(index + 21, 1) * 0.3));
      rock.castShadow = true;
      rock.receiveShadow = true;
      group.add(rock);
      this.scene.add(group);

      const markerColor = this.siteProfile ? 0x9fc69d : this.isMoon ? 0xa8c4e0 : 0xe27a4e;
      const marker = makeSampleMarker(markerColor);
      const markerBaseY = groundY + size * 1.65;
      marker.position.set(x, markerBaseY, z);
      marker.visible = false;
      this.scene.add(marker);

      const collider = new CANNON.Body({
        mass: 0,
        material: this.terrainMaterial,
        position: new CANNON.Vec3(x, group.position.y + size * 0.12, z)
      });
      collider.addShape(new CANNON.Sphere(size * 0.48));
      this.physics.addBody(collider);

      const collected = this.progress.collectedSamples.includes(definition.id);
      const discovered = this.progress.discoveredSamples.includes(definition.id);
      const sample = {
        ...definition,
        group,
        rock,
        collider,
        x,
        z,
        size,
        groundY,
        marker,
        markerBaseY,
        markerVisibleAt: 0,
        collected,
        discovered,
      };
      group.visible = !collected;
      marker.visible = discovered && !collected;
      if (collected) this.physics.removeBody(collider);
      this.samples.push(sample);
    });
  }

  createRover() {
    const rover = makeDetailedRover(this.isMars);
    rover.position.set(3.8, this.terrainHeight(3.8, 2.2), 2.2);
    rover.visible = false;
    this.scene.add(rover);
    this.rover = rover;
    this.roverWheels = rover.userData.wheels || [];
  }

  createEarthDayNightButton() {
    if (!this.isEarth) return;
    const actions = this.hud.querySelector(".game-hud-actions");
    if (!actions) return;
    const button = document.createElement("button");
    button.className = "game-icon-control";
    button.type = "button";
    button.dataset.engineAction = "day-night";
    button.setAttribute("aria-label", "تبديل النهار والليل");
    button.setAttribute("aria-pressed", "false");
    button.title = "تبديل إلى الليل";
    button.textContent = "☾";
    button.addEventListener("click", () => {
      this.ensureAudio();
      this.toggleEarthNight();
    });
    actions.prepend(button);
  }

  createDust() {
    const count = 90;
    this.dustPositions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      this.dustPositions[index * 3] = (Math.random() - 0.5) * 3;
      this.dustPositions[index * 3 + 1] = Math.random() * 1.1;
      this.dustPositions[index * 3 + 2] = Math.random() * 3;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(this.dustPositions, 3));
    this.dust = new THREE.Points(geometry, new THREE.PointsMaterial({ color: this.look.dust, size: 0.09, transparent: true, opacity: 0.32, depthWrite: false }));
    this.dust.visible = false;
    this.scene.add(this.dust);

    const collectCount = 28;
    this.collectDustPositions = new Float32Array(collectCount * 3);
    this.collectDustPositions.fill(-10000);
    const collectGeometry = new THREE.BufferGeometry();
    collectGeometry.setAttribute("position", new THREE.BufferAttribute(this.collectDustPositions, 3));
    this.collectDust = new THREE.Points(collectGeometry, new THREE.PointsMaterial({ color: this.look.dust, size: 0.055, transparent: true, opacity: 0.38, depthWrite: false }));
    this.collectDust.visible = false;
    this.scene.add(this.collectDust);
  }

  /* -----------------------------------------------------------------------
     Input Handlers & Game Control Bindings
     ----------------------------------------------------------------------- */
  bindInputs() {
    this.lastControlToggleAt = 0;
    this.onKeyDown = event => {
      if (event.target instanceof Element && event.target.matches("input, select, textarea, button, a, [contenteditable='true']")) return;
      const handled = ["KeyW", "KeyA", "KeyS", "KeyD", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space", "ShiftLeft", "ShiftRight", "KeyE", "KeyR", "KeyV", "KeyC", "Escape", "ControlLeft", "ControlRight"];
      if (handled.includes(event.code)) event.preventDefault();
      if (event.repeat && ["KeyE", "KeyR", "KeyV", "KeyC", "Escape", "ControlLeft", "ControlRight"].includes(event.code)) return;
      
      if (event.code === "ControlLeft" || event.code === "ControlRight") {
        const now = performance.now();
        if (now - this.lastControlToggleAt < 180) return;
        this.lastControlToggleAt = now;
        this.togglePointerLockFromUser();
        return;
      }
      this.keys.add(event.code);
      if (this.soundEnabled && !this.audioContext) this.ensureAudio();
      if (event.code === "Space") this.jump();
      if (event.code === "KeyE") this.interact();
      if (event.code === "KeyR") this.toggleInventory();
      if (event.code === "KeyV") this.toggleRover();
      if (event.code === "KeyC") this.toggleCameraMode();
      if (event.code === "Escape" && !document.pointerLockElement) this.togglePause();
    };

    this.onKeyUp = event => {
      this.keys.delete(event.code);
      if (event.code === "Space") this.isJetpacking = false;
    };

    this.onPointerMove = event => {
      if (!this.isPointerLocked) return;
      this.cameraYaw -= event.movementX * 0.0024 * this.mouseSensitivity;
      this.cameraPitch = THREE.MathUtils.clamp(this.cameraPitch - event.movementY * 0.0018 * this.mouseSensitivity, -0.72, 1.25);
    };

    this.onPointerLock = () => { this.isPointerLocked = document.pointerLockElement === this.renderer.domElement; };
    this.onPointerLockError = () => this.toast("تعذر قفل المؤشر. اضغط على سطح اللعب لإعادة المحاولة.");
    this.onVisibility = () => { if (document.hidden) this.togglePause(true); };
    this.onFullscreenChange = () => {
      if (!document.fullscreenElement && document.pointerLockElement === this.renderer.domElement) document.exitPointerLock?.();
      if (document.fullscreenElement) this.hasEnteredFullscreen = true;
      else if (this.hasEnteredFullscreen && !this.paused) this.togglePause(true);
    };
    this.onCanvasClick = () => {
      this.ensureAudio();
      if (matchMedia("(pointer: fine)").matches && !document.pointerLockElement && !this.paused) this.requestPointerLockFromUser();
    };

    this.renderer.domElement.addEventListener("click", this.onCanvasClick);
    window.addEventListener("keydown", this.onKeyDown);
    window.addEventListener("keyup", this.onKeyUp);
    window.addEventListener("mousemove", this.onPointerMove);
    document.addEventListener("pointerlockchange", this.onPointerLock);
    document.addEventListener("pointerlockerror", this.onPointerLockError);
    document.addEventListener("visibilitychange", this.onVisibility);
    document.addEventListener("fullscreenchange", this.onFullscreenChange);
    this.bindTouchControls();
    this.bindHudControls();
  }

  requestPointerLockFromUser() {
    if (this.paused || document.hidden || !this.renderer.domElement.requestPointerLock) return;
    try {
      const result = this.renderer.domElement.requestPointerLock();
      result?.catch?.(() => this.toast("تعذر قفل المؤشر. اضغط على سطح اللعب لإعادة المحاولة."));
    } catch {
      this.toast("تعذر قفل المؤشر. اضغط على سطح اللعب لإعادة المحاولة.");
    }
  }

  togglePointerLockFromUser() {
    if (this.paused || this.hud.querySelector("#game-settings-panel:not([hidden]), #game-pause-overlay:not([hidden])")) return;
    if (document.pointerLockElement === this.renderer.domElement) {
      document.exitPointerLock?.();
      return;
    }
    this.requestPointerLockFromUser();
  }

  toggleCameraMode() {
    const modes = ["third", "first", "drone"];
    const currentIdx = modes.indexOf(this.cameraMode);
    this.cameraMode = modes[(currentIdx + 1) % modes.length];
    
    // First person helmet overlay toggle
    const helmetOverlay = this.hud.querySelector("#game-helmet-visor");
    if (helmetOverlay) {
      helmetOverlay.hidden = this.cameraMode !== "first";
    }

    const labels = {
      third: "الكاميرا: منظور الشخص الثالث ✦",
      first: "الكاميرا: قناع الخوذة (منظور أول) ✦",
      drone: "الكاميرا: مدار استطلاعي سينمائي ✦"
    };
    this.toast(labels[this.cameraMode]);
    this.playPing(720, 0.08);
  }

  focusOnSolarSystem() {
    if (this.isMars) {
      this.cameraPitch = 1.02;
      this.cameraYaw = 2.03;
      this.toast("🔭 رصد فلكي: استعراض كواكب المجموعة الشمسية والقمر من سطح المريخ");
    } else if (this.isMoon) {
      this.cameraPitch = 1.02;
      this.cameraYaw = 1.17;
      this.toast("🔭 رصد فلكي: استعراض كوكب الأرض وترتيب كواكب المجموعة الشمسية من سطح القمر");
    } else {
      this.cameraPitch = 0.55;
      this.cameraYaw = 0.8;
      this.toast("🔭 رصد فلكي: رؤية القمر في سماء الأرض النهارية");
    }
    this.playPing(880, 0.12);
  }

  bindTouchControls() {
    const stick = this.hud.querySelector(".game-joystick");
    const knob = this.hud.querySelector(".game-joystick-knob");
    const lookZone = this.hud.querySelector(".game-look-zone");
    if (stick && knob) {
      let activeTouch = null;
      const start = event => {
        const touch = Array.from(event.changedTouches)[0];
        if (!touch) return;
        activeTouch = touch.identifier;
        move(event);
      };
      const move = event => {
        const touch = Array.from(event.touches).find(t => t.identifier === activeTouch);
        if (!touch) return;
        const rect = stick.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = (touch.clientX - centerX) / (rect.width / 2);
        const dy = (touch.clientY - centerY) / (rect.height / 2);
        const length = Math.hypot(dx, dy);
        const normalizer = length > 1 ? 1 / length : 1;
        this.touchMove.x = THREE.MathUtils.clamp(dx * normalizer, -1, 1);
        this.touchMove.y = THREE.MathUtils.clamp(dy * normalizer, -1, 1);
        knob.style.transform = `translate(${this.touchMove.x * 24}px, ${this.touchMove.y * 24}px)`;
      };
      const end = event => {
        if (!Array.from(event.changedTouches).some(t => t.identifier === activeTouch)) return;
        activeTouch = null;
        this.touchMove.x = 0;
        this.touchMove.y = 0;
        knob.style.transform = "translate(0, 0)";
      };
      stick.addEventListener("touchstart", start, { passive: true });
      window.addEventListener("touchmove", move, { passive: true });
      window.addEventListener("touchend", end, { passive: true });
      window.addEventListener("touchcancel", end, { passive: true });
    }

    if (lookZone) {
      let lastX = 0;
      let lastY = 0;
      lookZone.addEventListener("touchstart", event => {
        const touch = event.touches[0];
        if (!touch) return;
        lastX = touch.clientX;
        lastY = touch.clientY;
      }, { passive: true });
      lookZone.addEventListener("touchmove", event => {
        const touch = event.touches[0];
        if (!touch) return;
        const dx = touch.clientX - lastX;
        const dy = touch.clientY - lastY;
        lastX = touch.clientX;
        lastY = touch.clientY;
        this.cameraYaw -= dx * 0.0055 * this.mouseSensitivity;
        this.cameraPitch = THREE.MathUtils.clamp(this.cameraPitch - dy * 0.0035 * this.mouseSensitivity, -0.72, 1.25);
      }, { passive: true });
    }
  }

  bindHudControls() {
    this.hud.addEventListener("click", event => {
      const button = event.target.closest("button");
      if (!button) return;
      this.ensureAudio();
      const engineAction = button.dataset.engineAction;
      const engineButton = button.dataset.engineButton;

      if (engineAction === "pause") this.togglePause();
      if (engineAction === "resume") this.togglePause(false);
      if (engineAction === "settings") this.toggleSettings();
      if (engineAction === "settings-close") this.toggleSettings(false);
      if (engineAction === "camera") this.toggleCameraMode();
      if (engineAction === "inventory") this.toggleInventory(true);
      if (engineAction === "inventory-close") this.toggleInventory(false);
      if (engineButton === "jump") this.jump();
      if (engineButton === "run") this.isRunning = !this.isRunning;
      if (engineButton === "interact") this.interact();
      if (engineButton === "camera") this.toggleCameraMode();
      if (engineButton === "inventory") this.toggleInventory(true);
      if (engineButton === "rover") this.toggleRover();
    });

    const soundToggle = this.hud.querySelector("#game-sound-toggle");
    if (soundToggle) {
      soundToggle.addEventListener("change", () => {
        this.soundEnabled = soundToggle.checked;
        if (this.soundEnabled) this.ensureAudio();
        this.config.onSettings?.({ ...this.config.progress.settings, sound: this.soundEnabled });
      });
    }

    const shakeToggle = this.hud.querySelector("#game-camera-shake-toggle");
    if (shakeToggle) {
      shakeToggle.addEventListener("change", () => {
        this.cameraShakeEnabled = shakeToggle.checked;
        this.config.onSettings?.({ ...this.config.progress.settings, cameraShake: this.cameraShakeEnabled });
      });
    }

    const mouseRange = this.hud.querySelector("#game-mouse-sensitivity");
    const mouseValue = this.hud.querySelector("#game-mouse-sensitivity-value");
    if (mouseRange) {
      mouseRange.addEventListener("input", () => {
        this.mouseSensitivity = Number(mouseRange.value);
        if (mouseValue) mouseValue.textContent = `${this.mouseSensitivity.toFixed(1)}×`;
        this.config.onSettings?.({ ...this.config.progress.settings, mouseSensitivity: this.mouseSensitivity });
      });
    }

    const qualitySelect = this.hud.querySelector("#game-quality-select");
    if (qualitySelect) {
      qualitySelect.addEventListener("change", () => {
        this.setQuality(qualitySelect.value);
        this.config.onSettings?.({ ...this.config.progress.settings, quality: this.quality });
      });
    }
  }

  setQuality(level) {
    this.quality = level;
    const pixelRatio = level === "high" ? 1.3 : level === "medium" ? 1 : 0.8;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, pixelRatio));
    this.renderer.shadowMap.enabled = level === "high" && matchMedia("(pointer: fine)").matches;
  }

  updateEnvironmentalTelemetry() {
    const badge = this.hud.querySelector("#game-telemetry-text");
    if (badge) {
      badge.textContent = this.look.envName;
    }
  }

  /* -----------------------------------------------------------------------
     Gameplay Actions (Jump/Jetpack, Interact, Scan, Rover)
     ----------------------------------------------------------------------- */
  jump() {
    if (this.paused) return;
    const grounded = this.isGrounded();
    if (grounded) {
      const impulse = Math.sqrt(2 * this.look.gravity * this.look.jumpHeight);
      this.playerBody.velocity.y = impulse;
      if (!this.isEarth) {
        this.playThrusterSound();
      }
    } else {
      // On Earth: Strict Earth gravity (9.81 m/s²), zero jetpack flying
      if (this.isEarth) return;

      // Low-gravity jetpack boost only on Mars and Moon
      this.isJetpacking = true;
      this.playerBody.velocity.y = Math.min(this.playerBody.velocity.y + 2.8, 6.5);
      this.playThrusterSound();
      this.thrusterFx.visible = true;
    }
  }

  interact() {
    if (this.paused || performance.now() - this.lastInteractAt < 240) return;
    this.lastInteractAt = performance.now();

    const craterDistance = Math.hypot(this.playerBody.position.x + 17, this.playerBody.position.z + 9);
    if (!this.stageSite && this.isSampleMissionComplete() && craterDistance < 4.2) {
      if (!this.progress.completedMissions.includes(this.craterMissionId)) {
        this.progress.completedMissions.push(this.craterMissionId);
        this.progress.xp += 80;
        this.finalMissionComplete = this.config.character === "astronaut";
        this.paused = this.finalMissionComplete;
        this.syncProgress();
        this.playCollectChime();
        this.toast("بلغت موقع الفوهة بنجاح! اكتملت استكشافات البيئة الميدانية ✦ +80 XP");
      } else {
        this.toast("أنت عند فوهة الاصطدام. يمكنك القيادة والتجول بحرية.");
      }
      return;
    }

    if (this.progress.roverUnlocked && this.nearRover()) {
      this.toggleRover();
      return;
    }

    const sample = this.nearestSample(2.8);
    if (!sample) {
      this.toast("اقترب من إشارة عينة أو موقع الاستكشاف.");
      return;
    }

    if (sample.collected) {
      this.toast(this.isAlien ? sample.name : `تم جمع ${sample.name || sample.type} سابقاً · R لعرض حقيبة العينات`);
      return;
    }

    sample.collected = true;
    sample.collecting = true;
    sample.collectedAt = this.elapsed;
    sample.marker.visible = false;
    this.physics.removeBody(sample.collider);

    if (!this.progress.collectedSamples.includes(sample.id)) {
      this.progress.collectedSamples.push(sample.id);
      this.progress.xp += 15;
    }
    this.playCollectChime();
    // Show scientific name on collection for both astronauts and aliens
    this.toast(`✦ ${sample.name || sample.type}`);
    this.syncProgress();
    this.checkSiteCompletion();
    // Auto-open inventory immediately after collecting so player learns what they found
    window.setTimeout(() => this.toggleInventory(true), 420);
  }

  checkSiteCompletion() {
    if (this.stageComplete) return;
    if (!this.stageSite) {
      // For astronauts: complete on collection only (no analysis needed)
      const done = this.isAlien
        ? this.worldCollectedCount() >= this.sampleGoal
        : this.worldCollectedCount() >= this.sampleGoal;
      if (done && !this.progress.completedMissions.includes(this.sampleMissionId)) {
        this.progress.completedMissions.push(this.sampleMissionId);
        this.progress.roverUnlocked = true;
        this.progress.xp += 50;
        this.syncProgress();
        this.playCollectChime();
        this.toast("✅ اكتملت العينات! عربة الاستكشاف متاحة.");
      }
      return;
    }
    // Astronauts complete on collection only; aliens need collection only too
    if (this.worldCollectedCount() >= this.sampleGoal) {
      this.stageComplete = true;
      if (!this.progress.completedMissions.includes(this.sampleMissionId)) {
        this.progress.completedMissions.push(this.sampleMissionId);
      }
      if (!this.progress.analyzedSites.includes(this.stageSite.id)) {
        this.progress.analyzedSites.push(this.stageSite.id);
      }
      this.progress.xp += 50;
      this.syncProgress();
      this.playCollectChime();

      // Both aliens and astronauts: show stage complete overlay
      const completeOverlay = this.hud.querySelector("#game-stage-complete");
      if (completeOverlay) {
        const collectedCount = completeOverlay.querySelector(".game-stage-stats strong");
        if (collectedCount) collectedCount.textContent = `${this.sampleGoal}/${this.sampleGoal}`;
        completeOverlay.hidden = false;
      }
      this.paused = true;
      const beacon = this.hud.querySelector("#game-beacon-solo");
      if (beacon) beacon.hidden = true;
      if (document.pointerLockElement === this.renderer.domElement) document.exitPointerLock?.();

      // For astronauts on Moon/Mars: also show the final mission characteristics overlay
      if (!this.isAlien && (this.isMoon || this.isMars)) {
        const finalOverlay = this.hud.querySelector("#game-final-mission");
        if (finalOverlay) {
          finalOverlay.hidden = false;
        }
      }
    }
  }

  nearestSample(maxDist = 12, collected = false) {
    let nearest = null;
    let minD = maxDist;
    const px = this.playerBody.position.x;
    const pz = this.playerBody.position.z;
    this.samples.forEach(sample => {
      if (Boolean(sample.collected) !== collected) return;
      const d = Math.hypot(px - sample.x, pz - sample.z);
      if (d < minD) {
        minD = d;
        nearest = sample;
      }
    });
    return nearest;
  }

  nearRover() {
    if (!this.rover) return false;
    return Math.hypot(this.playerBody.position.x - this.rover.position.x, this.playerBody.position.z - this.rover.position.z) < 3.8;
  }

  toggleRover() {
    if (!this.progress.roverUnlocked) {
      this.toast(`اجمع ${this.sampleGoal} عينات أولًا لفتح عربة الاستكشاف.`);
      return;
    }
    this.roverMode = !this.roverMode;
    this.rover.visible = true;
    this.playerModel.visible = !this.roverMode;
    this.rover.position.set(this.playerBody.position.x, this.playerBody.position.y - PLAYER_COLLIDER_HEIGHT, this.playerBody.position.z);
    this.rover.rotation.y = this.cameraYaw;
    this.hud.querySelector('[data-engine-button="rover"]')?.classList.toggle("is-active", this.roverMode);

    if (this.roverMode) {
      this.toast("أنت تقود عربة الاستكشاف · اضغط V للترجل.");
      this.playPing(380, 0.2, "sawtooth");
      if (!this.progress.completedMissions.includes("rover-drive")) {
        this.progress.completedMissions.push("rover-drive");
        this.progress.xp += 35;
        this.syncProgress();
      }
    } else {
      this.toast("عدت للاستكشاف سيرًا على الأقدام.");
      this.playPing(480, 0.1);
    }
  }

  worldCollectedCount() {
    return this.samples.filter(s => s.collected).length;
  }

  isSampleMissionComplete() {
    return this.sampleGoal > 0 && this.worldCollectedCount() >= this.sampleGoal
      && this.progress.completedMissions.includes(this.sampleMissionId);
  }

  isGrounded() {
    const h = this.terrainHeight(this.playerBody.position.x, this.playerBody.position.z) + PLAYER_COLLIDER_HEIGHT;
    const diff = this.playerBody.position.y - h;
    return diff >= -0.22 && diff <= 0.45 && this.playerBody.velocity.y <= 2.2;
  }

  toast(msg) {
    const el = this.hud.querySelector("#game-toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("is-visible");
    clearTimeout(this.toastTimeout);
    this.toastTimeout = window.setTimeout(() => el.classList.remove("is-visible"), 2600);
  }

  syncProgress() {
    this.config.onProgress?.({ ...this.progress });
    this.updateHud();
  }

  updateHud() {
    setText(this.hud, "#game-xp-value", String(this.progress.xp));
    setText(this.hud, "#game-sample-count", `${this.worldCollectedCount()}/${this.sampleGoal}`);
    setText(this.hud, "#game-world-label", this.look.label);

    const roverBtn = this.hud.querySelector('[data-engine-button="rover"]');
    if (roverBtn) {
      roverBtn.hidden = !this.progress.roverUnlocked;
      roverBtn.classList.toggle("is-locked", !this.progress.roverUnlocked);
      roverBtn.classList.toggle("is-active", this.roverMode);
    }

    const complete = this.isSampleMissionComplete();
    const craterDone = this.progress.completedMissions.includes(this.craterMissionId);

    if (this.stageSite) {
      setText(this.hud, "#game-mission-title", complete ? "اكتملت العينات ✦ أحسنت!" : `اجمع ${this.sampleGoal} عينات علمية`);
      setText(this.hud, "#game-mission-count", `${this.worldCollectedCount()}/${this.sampleGoal} عينات`);
    } else {
      setText(this.hud, "#game-mission-title", craterDone ? "اكتمل الاستكشاف الميداني بنجاح" : complete ? "اتبع المنارة إلى فوهة الاصطدام" : `اجمع ${this.sampleGoal} عينات ميدانية`);
      setText(this.hud, "#game-mission-count", craterDone ? "المهمة مكتملة" : complete ? "عربة الاستكشاف متاحة ✦ +80 XP عند الفوهة" : `${this.worldCollectedCount()}/${this.sampleGoal} عينات`);
    }
  }

  togglePause(force) {
    this.paused = typeof force === "boolean" ? force : !this.paused;
    const overlay = this.hud.querySelector("#game-pause-overlay");
    if (overlay) overlay.hidden = !this.paused;
    if (this.paused && document.pointerLockElement === this.renderer.domElement) document.exitPointerLock?.();
  }

  toggleSettings(force) {
    const panel = this.hud.querySelector("#game-settings-panel");
    if (!panel) return;
    const open = typeof force === "boolean" ? force : panel.hidden;
    panel.hidden = !open;
    if (open && !this.paused) {
      this.settingsPausedWorld = true;
      this.togglePause(true);
    } else if (!open && this.settingsPausedWorld) {
      this.settingsPausedWorld = false;
      this.togglePause(false);
    }
  }

  toggleInventory(force) {
    const panel = this.hud.querySelector("#game-inventory-panel");
    if (!panel) return;
    const opening = typeof force === "boolean" ? force : panel.hidden;
    panel.hidden = !opening;
    if (opening) {
      if (!this.paused) {
        this._inventoryPausedWorld = true;
        this.paused = true;
        if (document.pointerLockElement === this.renderer.domElement) document.exitPointerLock?.();
      }
      this._renderInventory();
    } else {
      if (this._inventoryPausedWorld) {
        this._inventoryPausedWorld = false;
        this.paused = false;
      }
    }
  }

  _renderInventory() {
    const list = this.hud.querySelector("#game-inventory-list");
    if (!list) return;
    const collectionOrder = new Map(this.progress.collectedSamples.map((id, index) => [id, index]));
    const collected = this.samples.filter(sample => sample.collected)
      .sort((first, second) => collectionOrder.get(first.id) - collectionOrder.get(second.id));
    if (collected.length === 0) {
      list.innerHTML = `<p style="color:#88aabb;text-align:center;padding:28px 0;font-size:1.05rem;">لم تجمع أي عينات بعد ✦ استخدم E للجمع</p>`;
      return;
    }
    list.innerHTML = collected.map(sample => {
      const nameLabel = sample.name || sample.type;
      const sampleNumber = collectionOrder.get(sample.id) + 1;
      if (this.isAlien) {
        return `<div class="game-inventory-item"><span class="game-inventory-item-info"><strong>${nameLabel}</strong><small class="game-inventory-item-details">العينة رقم ${sampleNumber} · ${sample.type || "عينة افتراضية"}</small></span></div>`;
      }
      return `<div class="game-inventory-item"><span class="game-inventory-item-info"><strong>${nameLabel}</strong><small class="game-inventory-item-details">العينة رقم ${sampleNumber} · ${sample.type || "عينة افتراضية"}</small></span><span aria-hidden="true">✓</span></div>`;
    }).join("");
  }

  resize() {
    if (!this.container.clientWidth || !this.container.clientHeight) return;
    this.camera.aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight, false);
  }

  start() {
    this.lastFrame = performance.now();
    this.renderer.render(this.scene, this.camera);
    this.renderer.setAnimationLoop(() => this.update());
  }

  /* -----------------------------------------------------------------------
     Animation Loop & Physics Step
     ----------------------------------------------------------------------- */
  update() {
    const now = performance.now();
    const delta = Math.min((now - this.lastFrame) / 1000, 0.05);
    this.lastFrame = now;

    if (!this.paused) {
      this.elapsed += delta;
      this.movePlayer(delta);
      this.physics.step(1 / 60, delta, 4);

      // Unbreakable Ground Floor Constraint:
      // Prevents physics tunneling/glitching through terrain faces into the abyss/void
      const floorY = this.terrainHeight(this.playerBody.position.x, this.playerBody.position.z) + PLAYER_COLLIDER_HEIGHT;
      if (this.playerBody.position.y < floorY) {
        this.playerBody.position.y = floorY;
        this.playerBody.previousPosition.y = floorY;
        this.playerBody.interpolatedPosition.y = floorY;
        if (this.playerBody.velocity.y < 0) {
          this.playerBody.velocity.y = 0;
        }
      }
      const maxBound = WORLD_RADIUS - 3;
      this.playerBody.position.x = THREE.MathUtils.clamp(this.playerBody.position.x, -maxBound, maxBound);
      this.playerBody.position.z = THREE.MathUtils.clamp(this.playerBody.position.z, -maxBound, maxBound);
      if (this.siteProfile?.terrain === "lava") {
        const islandRadius = Math.hypot(this.playerBody.position.x, this.playerBody.position.z);
        if (islandRadius > 51) {
          const scale = 51 / islandRadius;
          [this.playerBody.position, this.playerBody.previousPosition, this.playerBody.interpolatedPosition].forEach(position => {
            position.x *= scale;
            position.z *= scale;
          });
          this.playerBody.aabbNeedsUpdate = true;
        }
      }

      if (this.isEarth || this.isGrounded()) {
        this.isJetpacking = false;
        if (this.thrusterFx) this.thrusterFx.visible = false;
      }

      this.updatePlayerVisuals(delta);
      this.updateSamples(delta);
      this.updateSiteEnvironment(delta);
      this.updateFootprints();
      this.updateMissionClock(delta);
      this.updateBeacon(delta);
      this.updateMeteors(delta);
    }

    this.updateCelestialScene(delta);
    this.updateCamera(delta);
    this.renderer.render(this.scene, this.camera);
  }

  /* -----------------------------------------------------------------------
     Celestial Dynamics: Star Movement Physics, Rotating Earth, Orbiting Moon
     "والارض بتلف حوالين نفسها مع وجودهم في ترتيب المجموعه الشمسيه مع فيزيائيه حركه النجوم من حولهم"
     ----------------------------------------------------------------------- */
  updateCelestialScene(delta) {
    if (!this.celestialAnchor) return;
    this.celestialAnchor.position.copy(this.playerBody.position);

    // Starfield Twinkle Uniform Update
    if (this.starField?.material?.uniforms?.uTime) {
      this.starField.material.uniforms.uTime.value = this.elapsed;
    }

    // 1. EARTH AXIAL ROTATION ("حركه الارض حوالين نفسها")
    if (this.earth) {
      this.earth.rotation.y += delta * 0.085; // Clearly visible continuous rotation
      if (this.earthClouds) {
        this.earthClouds.rotation.y += delta * 0.115;
      }
    }

    // 2. LUNAR ORBIT AROUND EARTH ("حركه القمر حوالين الارض")
    if (this.lunarOrbit) {
      this.lunarOrbit.rotation.y += delta * 0.16;
      if (this.moonModel) {
        this.moonModel.rotation.y += delta * 0.06;
      }
    }
    if (this.isEarth && this.daytimeMoonPivot) {
      const front = new THREE.Vector3(-Math.sin(this.cameraYaw), 0, -Math.cos(this.cameraYaw));
      const right = new THREE.Vector3(Math.cos(this.cameraYaw), 0, -Math.sin(this.cameraYaw));
      const moonAngle = this.elapsed * 0.035;
      this.daytimeMoonPivot.position.copy(front).multiplyScalar(330).addScaledVector(right, Math.sin(moonAngle) * 90);
      this.daytimeMoonPivot.position.y = 125 + Math.cos(moonAngle) * 28;
      this.daytimeMoonPivot.rotation.y += delta * 0.06;
      this.daytimeMoon.rotation.y += delta * 0.06;
    }
    // On the Moon: Lunar orbital beacon revolves around Earth and Earth position dynamically librates
    // On the Moon: World is on the Moon orbiting Earth; Earth moves majestically across lunar sky while spinning on axis
    if (this.isMoon && this.earthNode) {
      this.earthNode.position.set(0, 220, 330);
    }

    // 3. PLANETARY ORBITS — positions relative to solarSystemGroup origin (0,0,0)
    if (this.solarPlanets && this.eclipticU && this.eclipticV) {
      const u = this.eclipticU;
      const v = this.eclipticV;
      this.solarPlanets.forEach(planet => {
        // Orbital revolution around the Sun (relative to group, not absolute)
        planet.orbitAngle = (planet.orbitAngle || 0) + delta * planet.spec.orbitSpeed;
        const r = planet.spec.orbitRadius;
        planet.node.position.set(0, 0, 0)
          .addScaledVector(u, r * Math.cos(planet.orbitAngle))
          .addScaledVector(v, r * Math.sin(planet.orbitAngle));
        // Axial spin
        planet.node.rotation.y += delta * (planet.spec.axialSpeed || 0.02);
      });
    }

    // Mars Moons Phobos & Deimos orbiting Mars (overhead in Mars sky)
    if (this.phobosPivot) this.phobosPivot.rotation.y += delta * 0.14;
    if (this.deimosPivot) this.deimosPivot.rotation.y += delta * 0.05;

    // Jupiter Galilean Moons orbiting Jupiter
    if (this.galileanMoons) {
      this.galileanMoons.forEach(m => { m.pivot.rotation.y += delta * m.speed * 2.8; });
    }

    // Asteroid Belt tumbling & revolving
    if (this.asteroidBeltMesh) {
      this.asteroidBeltMesh.rotation.y += delta * 0.008;
    }

    // Sun Corona flare pulsation (sunCore/sunCorona are local within solarSystemGroup at 0,0,0)
    if (this.solarSystemSun) {
      this.solarSystemSun.rotation.y += delta * 0.003;
    }
    if (this.solarSystemCorona) {
      this.solarSystemCorona.rotation.y -= delta * 0.004;
      const pulse = 1 + Math.sin(this.elapsed * 2.2) * 0.05;
      this.solarSystemCorona.scale.setScalar(pulse);
    }
  }

  updateMeteors(delta) {
    this.meteors.forEach(meteor => {
      meteor.timer -= delta;
      if (!meteor.active && meteor.timer <= 0) {
        // Ignite new shooting star
        meteor.active = true;
        meteor.progress = 0;
        const theta = Math.random() * TAU;
        const dist = 320 + Math.random() * 80;
        meteor.origin.set(Math.cos(theta) * dist, 180 + Math.random() * 90, Math.sin(theta) * dist);
        const heading = (Math.random() - 0.5) * 1.5;
        meteor.velocity.set(-Math.cos(theta + heading) * 180, -90 - Math.random() * 50, -Math.sin(theta + heading) * 180);
      }
      if (meteor.active) {
        meteor.progress += delta * 1.8;
        const currentHead = meteor.origin.clone().addScaledVector(meteor.velocity, meteor.progress);
        const currentTail = meteor.origin.clone().addScaledVector(meteor.velocity, Math.max(0, meteor.progress - 0.22));
        const posAttr = meteor.line.geometry.attributes.position;
        posAttr.setXYZ(0, currentHead.x, currentHead.y, currentHead.z);
        posAttr.setXYZ(1, currentTail.x, currentTail.y, currentTail.z);
        posAttr.needsUpdate = true;
        const alpha = Math.sin(meteor.progress * Math.PI);
        meteor.line.material.opacity = alpha * 0.85;

        if (meteor.progress >= 1) {
          meteor.active = false;
          meteor.line.material.opacity = 0;
          meteor.timer = 2 + Math.random() * 5;
        }
      }
    });
  }

  updateCamera(delta) {
    const player = this.playerBody.interpolatedPosition;

    if (this.cameraMode === "first") {
      // First Person: Camera placed at astronaut helmet visor level
      const eyeHeight = 1.68;
      const eyePos = new THREE.Vector3(
        player.x - Math.sin(this.cameraYaw) * 0.12,
        player.y - PLAYER_COLLIDER_HEIGHT + eyeHeight,
        player.z - Math.cos(this.cameraYaw) * 0.12
      );
      this.camera.position.copy(eyePos);
      const lookTarget = new THREE.Vector3(
        eyePos.x - Math.sin(this.cameraYaw) * Math.cos(this.cameraPitch) * 10,
        eyePos.y + Math.sin(this.cameraPitch) * 10,
        eyePos.z - Math.cos(this.cameraYaw) * Math.cos(this.cameraPitch) * 10
      );
      this.camera.lookAt(lookTarget);
      this.playerModel.visible = false;
      return;
    }

    this.playerModel.visible = !this.roverMode;

    if (this.cameraMode === "drone") {
      // Cinematic 360-degree Orbiting Drone View
      const orbitSpeed = 0.18;
      const angle = this.elapsed * orbitSpeed;
      const orbitDist = 9.5;
      const desired = new THREE.Vector3(
        player.x + Math.sin(angle) * orbitDist,
        player.y + 3.2,
        player.z + Math.cos(angle) * orbitDist
      );
      this.camera.position.lerp(desired, 1 - Math.exp(-6 * delta));
      this.camera.lookAt(player.x, player.y + 0.9, player.z);
      return;
    }

    // Default: Third Person Dynamic Spring Camera
    const distance = this.roverMode ? 8.2 : this.crewMembers?.length ? 9.4 : 5.8;
    const targetHeight = this.roverMode ? 0.95 : 1.15;
    const pitchScale = Math.cos(this.cameraPitch);
    const target = new THREE.Vector3(player.x, player.y + targetHeight, player.z);
    const desired = new THREE.Vector3(
      player.x + Math.sin(this.cameraYaw) * distance * pitchScale,
      target.y - Math.sin(this.cameraPitch) * distance,
      player.z + Math.cos(this.cameraYaw) * distance * pitchScale
    );

    desired.y = Math.max(this.terrainHeight(player.x, player.z) + 0.32, desired.y);

    const speed = Math.hypot(this.playerBody.velocity.x, this.playerBody.velocity.z);
    const shake = this.cameraShakeEnabled && this.isGrounded() && speed > 0.6
      ? Math.sin(this.elapsed * (this.isRunning ? 15 : 10)) * (this.isRunning ? 0.035 : 0.016)
      : 0;
    desired.y += shake;

    this.cameraRaycaster ||= new THREE.Raycaster();
    const origin = target;
    const dir = desired.clone().sub(origin);
    const dist = dir.length();
    dir.normalize();
    this.cameraRaycaster.set(origin, dir);
    this.cameraRaycaster.far = dist;
    const hits = this.cameraRaycaster.intersectObjects(this.rocks, false);
    if (hits.length) desired.copy(hits[0].point).addScaledVector(dir, -0.32);

    this.camera.position.lerp(desired, 1 - Math.exp(-9.5 * delta));
    this.camera.lookAt(target);
  }

  movePlayer(delta) {
    const up = this.keys.has("KeyW") || this.keys.has("ArrowUp");
    const down = this.keys.has("KeyS") || this.keys.has("ArrowDown");
    const left = this.keys.has("KeyA");
    const right = this.keys.has("KeyD");
    const turn = Number(this.keys.has("ArrowRight")) - Number(this.keys.has("ArrowLeft"));
    if (turn) this.cameraYaw = THREE.MathUtils.euclideanModulo(this.cameraYaw + turn * 2.8 * delta + Math.PI, TAU) - Math.PI;

    const forwardInput = (up ? 1 : 0) - (down ? 1 : 0) - this.touchMove.y;
    const sideInput = (right ? 1 : 0) - (left ? 1 : 0) + this.touchMove.x;
    const inputLength = Math.hypot(forwardInput, sideInput);
    const normalizer = inputLength > 1 ? 1 / inputLength : 1;

    const forward = new THREE.Vector3(-Math.sin(this.cameraYaw), 0, -Math.cos(this.cameraYaw));
    const side = new THREE.Vector3(Math.cos(this.cameraYaw), 0, -Math.sin(this.cameraYaw));
    const direction = forward.multiplyScalar(forwardInput * normalizer).add(side.multiplyScalar(sideInput * normalizer));

    const sprint = this.keys.has("ShiftLeft") || this.keys.has("ShiftRight");
    this.isRunning = inputLength > 0.08;
    const isSprint = sprint && this.isRunning;
    const speed = (isSprint ? this.look.run : this.look.walk) * (this.roverMode ? 1.85 : 1);
    const grounded = this.isGrounded();
    const acceleration = this.isRunning ? this.look.acceleration : this.look.braking;
    const control = grounded ? 1.0 : (this.isEarth ? 0.95 : this.look.airControl);
    const response = 1 - Math.exp(-acceleration * control * delta);

    this.playerBody.velocity.x += (direction.x * speed - this.playerBody.velocity.x) * response;
    this.playerBody.velocity.z += (direction.z * speed - this.playerBody.velocity.z) * response;

    this.stepUpTerrain(delta, grounded);

    if (this.isRunning) {
      const targetYaw = Math.atan2(-direction.x, -direction.z);
      const yawDelta = THREE.MathUtils.euclideanModulo(targetYaw - this.playerModel.rotation.y + Math.PI, TAU) - Math.PI;
      this.playerModel.rotation.y += yawDelta * (1 - Math.exp(-12 * delta));
      this.dust.position.copy(this.playerModel.position);
      this.dust.visible = isSprint;
      if (isSprint && this.elapsed - this.lastDustAt > 0.07) this.emitDust();
      if (!this.roverMode && grounded && this.elapsed - this.lastStepAt > (isSprint ? 0.26 : 0.46)) {
        this.lastStepAt = this.elapsed;
        this.addFootprint();
        this.playFootstepSound(isSprint);
      }
    } else {
      this.dust.visible = false;
    }
    this.playerBody.wakeUp();
  }

  stepUpTerrain(delta, grounded) {
    const body = this.playerBody;
    const currentGroundY = this.terrainHeight(body.position.x, body.position.z) + PLAYER_COLLIDER_HEIGHT;
    
    // Solid floor guarantee: prevent ever sinking below ground under gravity
    if (body.position.y < currentGroundY) {
      body.position.y = currentGroundY;
      body.previousPosition.y = currentGroundY;
      body.interpolatedPosition.y = currentGroundY;
      if (body.velocity.y < 0) body.velocity.y = 0;
    }

    const speed = Math.hypot(body.velocity.x, body.velocity.z);
    if (speed > 0.05) {
      const dirX = body.velocity.x / speed;
      const dirZ = body.velocity.z / speed;
      const lookahead = Math.min(0.42, Math.max(0.18, speed * delta * 2.5));
      const nextX = THREE.MathUtils.clamp(body.position.x + dirX * lookahead, -WORLD_RADIUS + 2.5, WORLD_RADIUS - 2.5);
      const nextZ = THREE.MathUtils.clamp(body.position.z + dirZ * lookahead, -WORLD_RADIUS + 2.5, WORLD_RADIUS - 2.5);
      const targetY = this.terrainHeight(nextX, nextZ) + PLAYER_COLLIDER_HEIGHT;
      const rise = targetY - body.position.y;
      if (rise > 0.002) {
        const step = Math.min(rise, (0.7 + speed * 2.8) * delta * 15);
        body.position.y += step;
        body.previousPosition.y += step;
        body.interpolatedPosition.y += step;
        if (body.velocity.y < 0) body.velocity.y = 0;
        body.aabbNeedsUpdate = true;
      }
    }
  }

  updatePlayerVisuals(delta) {
    const body = this.playerBody.interpolatedPosition;
    const feet = this.terrainHeight(body.x, body.z);
    this.playerModel.position.set(body.x, Math.max(feet, body.y - PLAYER_COLLIDER_HEIGHT), body.z);

    if (this.roverMode) {
      this.rover.position.set(body.x, this.playerModel.position.y, body.z);
      this.rover.rotation.y = this.playerModel.rotation.y;
      const roverSpeed = Math.hypot(this.playerBody.velocity.x, this.playerBody.velocity.z);
      this.roverWheels.forEach(w => { w.rotation.x += roverSpeed * delta * 3.5; });
    }

    // Walking animation cycle
    const horizontalSpeed = Math.hypot(this.playerBody.velocity.x, this.playerBody.velocity.z);
    this.movementBlend = THREE.MathUtils.lerp(this.movementBlend, horizontalSpeed > 0.15 ? 1 : 0, 1 - Math.exp(-9 * delta));
    const cycle = Math.sin(this.elapsed * (this.isRunning ? 12 : 7)) * this.movementBlend;

    if (this.playerPivots.leftLeg) this.playerPivots.leftLeg.rotation.x = cycle * 0.65;
    if (this.playerPivots.rightLeg) this.playerPivots.rightLeg.rotation.x = -cycle * 0.65;
    if (this.playerPivots.leftArm) this.playerPivots.leftArm.rotation.x = -cycle * 0.55;
    if (this.playerPivots.rightArm) this.playerPivots.rightArm.rotation.x = cycle * 0.55;

    // Thruster exhaust particles placement
    if (this.thrusterFx.visible) {
      const posAttr = this.thrusterFx.geometry.attributes.position;
      const bp = this.playerModel.position;
      for (let i = 0; i < posAttr.count; i++) {
        posAttr.setXYZ(i, bp.x + (Math.random() - 0.5) * 0.35, bp.y + 0.85 - Math.random() * 0.55, bp.z + (Math.random() - 0.5) * 0.35);
      }
      posAttr.needsUpdate = true;
    }

    // 3 Female Astronaut Crew Companions smoothly following leader in formation
    if (this.crewMembers) {
      const pRot = this.playerModel.rotation.y;
      const pPos = this.playerModel.position;
      const cosR = Math.cos(pRot);
      const sinR = Math.sin(pRot);

      this.crewMembers.forEach(crew => {
        // Compute formation slot in world coordinates relative to leader's facing
        const targetX = pPos.x + crew.offset.x * cosR + crew.offset.z * sinR;
        const targetZ = pPos.z - crew.offset.x * sinR + crew.offset.z * cosR;

        // Smoothly interpolate position towards target
        crew.currentPos.x = THREE.MathUtils.lerp(crew.currentPos.x, targetX, 1 - Math.exp(-6 * delta));
        crew.currentPos.z = THREE.MathUtils.lerp(crew.currentPos.z, targetZ, 1 - Math.exp(-6 * delta));
        const leaderElevation = pPos.y - this.terrainHeight(pPos.x, pPos.z);
        const targetY = this.terrainHeight(targetX, targetZ) + leaderElevation;
        crew.currentPos.y = THREE.MathUtils.lerp(crew.currentPos.y, targetY, 1 - Math.exp(-8 * delta));
        crew.model.position.copy(crew.currentPos);

        // Turn to match leader's rotation
        const yawDelta = THREE.MathUtils.euclideanModulo(pRot - crew.model.rotation.y + Math.PI, TAU) - Math.PI;
        crew.model.rotation.y += yawDelta * (1 - Math.exp(-8 * delta));

        // Walking leg/arm animation
        const crewCycle = Math.sin(this.elapsed * (this.isRunning ? 12 : 7) + crew.walkCycle) * this.movementBlend;
        if (crew.pivots.leftLeg) crew.pivots.leftLeg.rotation.x = crewCycle * 0.65;
        if (crew.pivots.rightLeg) crew.pivots.rightLeg.rotation.x = -crewCycle * 0.65;
        if (crew.pivots.leftArm) crew.pivots.leftArm.rotation.x = -crewCycle * 0.55;
        if (crew.pivots.rightArm) crew.pivots.rightArm.rotation.x = crewCycle * 0.55;
      });
    }
  }

  updateSamples(delta) {
    let newlyDiscovered = false;
    this.samples.forEach(sample => {
      if (sample.collecting) {
        const progress = THREE.MathUtils.clamp((this.elapsed - sample.collectedAt) / 0.24, 0, 1);
        sample.group.scale.setScalar(1 - progress * 0.5);
        sample.group.position.y = sample.groundY - progress * sample.size * 0.22;
        if (progress >= 1) {
          sample.collecting = false;
          sample.group.visible = false;
          sample.group.scale.setScalar(1);
        }
        return;
      }
      if (sample.marker.visible) {
        sample.marker.position.y = sample.markerBaseY + 0.04 * Math.sin(this.elapsed * 2.2 + sample.x);
        sample.marker.rotation.y += delta * 0.25;
      }
      if (sample.collected || sample.discovered) return;
      if (Math.hypot(this.playerBody.position.x - sample.x, this.playerBody.position.z - sample.z) < 9) {
        sample.discovered = true;
        sample.marker.visible = true;
        sample.markerVisibleAt = this.elapsed;
        this.progress.discoveredSamples.push(sample.id);
        newlyDiscovered = true;
      }
    });
    if (newlyDiscovered) this.syncProgress();

    const uncollected = this.nearestSample(8);
    const collected = this.nearestSample(8, true);
    const nearest = uncollected || collected;
    const prompt = this.hud.querySelector("#game-nearby-prompt");
    if (prompt) {
      if (this.progress.roverUnlocked && this.nearRover()) {
        prompt.textContent = this.roverMode ? "V · ترجل من عربة الاستكشاف" : "E · اصعد إلى عربة الاستكشاف";
        prompt.hidden = false;
      } else if (this.isAlien && nearest?.collected) {
        prompt.hidden = true;
      } else if (nearest && Math.hypot(this.playerBody.position.x - nearest.x, this.playerBody.position.z - nearest.z) < 3.2) {
        prompt.textContent = nearest.collected ? `Q · فحص ${nearest.type}` : `E · جمع ${nearest.type}`;
        prompt.hidden = false;
      } else {
        prompt.hidden = true;
      }
    }
  }

  updateMissionClock(delta) {
    if (this.isSampleMissionComplete() || this.timedOut) return;
    this.timeLimit -= delta;
    const seconds = Math.max(0, Math.ceil(this.timeLimit));
    setText(this.hud, "#game-timer", `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`);
    const timer = this.hud.querySelector(".game-mission-clock");
    if (timer) timer.classList.toggle("is-urgent", seconds < 30);
    if (seconds === 0) {
      this.timedOut = true;
      this.toast("انتهى وقت التحدي الزمني؛ واصل استكشافك وجمع العينات.");
    }
  }

  updateBeacon(delta = 1 / 60) {
    const beacon = this.hud.querySelector("#game-beacon-solo");
    const missionComplete = this.isSampleMissionComplete();
    const allCollected = this.worldCollectedCount() >= this.sampleGoal;
    const arrivalVisible = performance.now() < this.arrivalVisibleUntil;
    if (beacon) beacon.hidden = arrivalVisible || this.stageComplete || this.finalMissionComplete || (allCollected && !missionComplete);
    if (this.stageComplete || this.finalMissionComplete) {
      setText(this.hud, "#game-beacon-distance", "-- m");
      setText(this.hud, "#game-beacon-distance-solo", "-- م");
      return;
    }
    if (allCollected && !missionComplete) return;
    const target = missionComplete
      ? { x: -17, z: -9 }
      : this.nearestSample(500, this.worldCollectedCount() >= this.sampleGoal);
    if (!target) return;
    const dx = target.x - this.playerBody.position.x;
    const dz = target.z - this.playerBody.position.z;
    const bearing = Math.atan2(-dx, -dz);
    const arrow = this.hud.querySelector("#game-beacon-arrow");
    if (arrow) {
      const targetAngle = bearing - this.cameraYaw;
      const angleDelta = THREE.MathUtils.euclideanModulo(targetAngle - this.beaconAngle + Math.PI, TAU) - Math.PI;
      this.beaconAngle += angleDelta * (1 - Math.exp(-12 * delta));
      arrow.style.transform = `rotate(${this.beaconAngle}rad)`;
    }
    const distance = Math.hypot(dx, dz);
    setText(this.hud, "#game-beacon-distance", `${Math.round(distance)} m`);
    setText(this.hud, "#game-beacon-distance-solo", `${Math.round(distance)} م`);
  }

  emitDust() {
    this.lastDustAt = this.elapsed;
    const position = this.dust.geometry.attributes.position;
    const base = this.playerModel.position;
    for (let index = 0; index < position.count; index += 1) {
      const x = base.x + (Math.random() - 0.5) * 2.5;
      const z = base.z + (Math.random() - 0.5) * 2;
      position.setXYZ(index, x, this.terrainHeight(x, z) + Math.random() * 0.8, z);
    }
    position.needsUpdate = true;
  }

  addFootprint() {
    const body = this.playerBody.position;
    const forwardX = -Math.sin(this.playerModel.rotation.y);
    const forwardZ = -Math.cos(this.playerModel.rotation.y);
    const side = this.footprints.length % 2 ? 0.16 : -0.16;
    const x = body.x - forwardX * 0.58 + Math.cos(this.playerModel.rotation.y) * side;
    const z = body.z - forwardZ * 0.58 - Math.sin(this.playerModel.rotation.y) * side;
    const mark = new THREE.Mesh(
      new THREE.CircleGeometry(0.12, 8),
      new THREE.MeshBasicMaterial({ color: this.look.rock[0], transparent: true, opacity: 0.32, depthWrite: false })
    );
    mark.rotation.x = -Math.PI / 2;
    mark.rotation.z = this.playerModel.rotation.y;
    mark.position.set(x, this.terrainHeight(x, z) + 0.025, z);
    this.scene.add(mark);
    this.footprints.push(mark);
    if (this.footprints.length > 36) {
      const old = this.footprints.shift();
      this.scene.remove(old);
      old.geometry.dispose();
      old.material.dispose();
    }
  }

  updateFootprints() {
    this.footprints.forEach((mark, index) => {
      mark.material.opacity = Math.max(0.04, 0.32 - (this.footprints.length - index) * 0.007);
    });
  }

  dispose() {
    this.renderer.setAnimationLoop(null);
    this.resizeObserver?.disconnect();
    window.removeEventListener("keydown", this.onKeyDown);
    window.removeEventListener("keyup", this.onKeyUp);
    window.removeEventListener("mousemove", this.onPointerMove);
    document.removeEventListener("pointerlockchange", this.onPointerLock);
    document.removeEventListener("pointerlockerror", this.onPointerLockError);
    document.removeEventListener("visibilitychange", this.onVisibility);
    document.removeEventListener("fullscreenchange", this.onFullscreenChange);
    this.renderer.domElement.removeEventListener("click", this.onCanvasClick);
    if (document.pointerLockElement === this.renderer.domElement) document.exitPointerLock?.();
    clearTimeout(this.toastTimeout);
    this.baseCampBodies?.forEach(b => this.physics?.removeBody(b));
    this.crewMembers?.forEach(c => this.scene?.remove(c.model));
    this.audioContext?.close?.();
    this.planetStrip?.dispose();
    disposeScene(this.scene);
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}

/* =========================================================================
   Realistic Surface Assets: Mars Habitat & Apollo/Artemis Lunar Lander
   ========================================================================= */

/* --- Alien cartoon UFO flying saucer --- */
function makeAlienFlyingSaucer() {
  const ufo = new THREE.Group();
  const chromeMat = new THREE.MeshStandardMaterial({ color: 0xc8d8e8, roughness: 0.18, metalness: 0.92 });
  const darkMat   = new THREE.MeshStandardMaterial({ color: 0x1a2030, roughness: 0.6 });
  const glowMat   = new THREE.MeshStandardMaterial({ color: 0x22ccff, emissive: 0x11aaee, emissiveIntensity: 1.4, roughness: 0.1 });
  const neonMats  = [0xff2266, 0xffcc00, 0x00ffaa, 0xff6600].map(c =>
    new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 1.2, roughness: 0.15 }));

  // Main disc hull
  const hullTop    = new THREE.Mesh(new THREE.SphereGeometry(4.2, 32, 16, 0, TAU, 0, Math.PI / 2), chromeMat);
  hullTop.scale.y  = 0.52;
  hullTop.castShadow = true;
  ufo.add(hullTop);
  const hullBot  = new THREE.Mesh(new THREE.SphereGeometry(4.2, 32, 16, 0, TAU, Math.PI / 2, Math.PI / 2), darkMat);
  hullBot.scale.y = 0.38;
  ufo.add(hullBot);

  // Glowing cockpit dome on top
  const dome = new THREE.Mesh(new THREE.SphereGeometry(1.65, 24, 16, 0, TAU, 0, Math.PI / 2), glowMat);
  dome.position.y = 1.8;
  ufo.add(dome);

  // 8 perimeter neon lights
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * TAU;
    const light = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), neonMats[i % neonMats.length]);
    light.position.set(Math.cos(angle) * 3.65, -0.25, Math.sin(angle) * 3.65);
    ufo.add(light);
  }

  // Antenna orb on top
  const antennaMast = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 1.4, 8), chromeMat);
  antennaMast.position.set(0, 3.3, 0);
  ufo.add(antennaMast);
  const antennaOrb  = new THREE.Mesh(new THREE.SphereGeometry(0.26, 12, 10), glowMat);
  antennaOrb.position.set(0, 4.15, 0);
  ufo.add(antennaOrb);

  // Tractor beam cone (underbelly)
  const beamMat = new THREE.MeshStandardMaterial({ color: 0x33ffcc, emissive: 0x11eeaa, emissiveIntensity: 0.6, transparent: true, opacity: 0.28, side: THREE.DoubleSide, depthWrite: false });
  const beam = new THREE.Mesh(new THREE.ConeGeometry(2.2, 3.5, 20, 1, true), beamMat);
  beam.rotation.x = Math.PI;
  beam.position.y = -1.0;
  ufo.add(beam);

  // 3 tripod landing legs
  for (let i = 0; i < 3; i++) {
    const angle = (i / 3) * TAU + Math.PI / 6;
    const leg = new THREE.Group();
    leg.position.set(Math.cos(angle) * 3.2, -0.8, Math.sin(angle) * 3.2);
    const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.1, 2.1, 7), chromeMat);
    strut.rotation.z = 0.42;
    strut.position.set(0, -1.0, 0);
    leg.add(strut);
    const foot = new THREE.Mesh(new THREE.SphereGeometry(0.22, 8, 6), darkMat);
    foot.position.set(0, -2.1, 0);
    leg.add(foot);
    ufo.add(leg);
  }

  ufo.scale.setScalar(0.8);
  ufo.traverse(o => { if (o.isMesh) o.castShadow = true; });
  return ufo;
}

/* --- Desert cactus for Atacama --- */
function makeCactus(seed) {
  const cactus = new THREE.Group();
  const green = new THREE.MeshStandardMaterial({ color: 0x3a7a38, roughness: 0.88 });
  const spine = new THREE.MeshStandardMaterial({ color: 0xe8d8a0, roughness: 0.9 });
  const height = 1.8 + seededValue(seed, 2) * 2.2;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.24, height, 8), green);
  trunk.position.y = height / 2;
  trunk.castShadow = true;
  cactus.add(trunk);
  // 2-3 arms
  const armCount = 2 + Math.floor(seededValue(seed, 5) * 2);
  for (let a = 0; a < armCount; a++) {
    const armAngle = seededValue(seed + a, 9) * TAU;
    const armH = 0.55 + seededValue(seed + a, 11) * 0.65;
    const armLen = 0.7 + seededValue(seed + a, 7) * 0.9;
    const armGroup = new THREE.Group();
    armGroup.position.set(Math.cos(armAngle) * 0.17, height * (0.35 + seededValue(seed + a, 3) * 0.4), Math.sin(armAngle) * 0.17);
    const horiz = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.13, armLen, 7), green);
    horiz.rotation.z = Math.PI / 2;
    horiz.position.x = Math.cos(armAngle) * armLen * 0.5;
    horiz.position.z = Math.sin(armAngle) * armLen * 0.5;
    armGroup.add(horiz);
    const vert = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.11, armH, 7), green);
    vert.position.set(Math.cos(armAngle) * armLen, armH / 2, Math.sin(armAngle) * armLen);
    vert.castShadow = true;
    armGroup.add(vert);
    cactus.add(armGroup);
  }
  // Spines
  for (let s = 0; s < 6; s++) {
    const sp = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.18, 4), spine);
    const sa = seededValue(seed + s, 13) * TAU;
    sp.position.set(Math.cos(sa) * 0.22, height * (0.2 + seededValue(seed + s, 17) * 0.7), Math.sin(sa) * 0.22);
    sp.rotation.z = Math.PI / 2 + seededValue(seed + s, 19) * 0.8;
    cactus.add(sp);
  }
  return cactus;
}

function makeSurfaceLandingPad(isMoon) {
  const pad = new THREE.Group();
  const deckMaterial = new THREE.MeshStandardMaterial({ color: isMoon ? 0x8c9498 : 0x62584d, roughness: 0.88, metalness: isMoon ? 0.28 : 0.08 });
  const edgeMaterial = new THREE.MeshStandardMaterial({ color: isMoon ? 0xb9c0c2 : 0xb47c43, roughness: 0.58, metalness: 0.55 });
  const deck = new THREE.Mesh(new THREE.CylinderGeometry(4.9, 5.15, 0.2, 32), deckMaterial);
  deck.position.y = 0.1;
  deck.receiveShadow = true;
  pad.add(deck);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(4.7, 0.09, 8, 48), edgeMaterial);
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 0.22;
  pad.add(rim);
  for (let index = 0; index < 4; index += 1) {
    const mark = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.025, 1.2), edgeMaterial);
    const angle = index * TAU / 4;
    mark.position.set(Math.cos(angle) * 3.65, 0.215, Math.sin(angle) * 3.65);
    mark.rotation.y = -angle;
    pad.add(mark);
  }
  pad.traverse(object => { if (object.isMesh) object.receiveShadow = true; });
  return pad;
}

function makeDesertAnimal(index) {
  const animal = new THREE.Group();
  const fur = new THREE.MeshStandardMaterial({ color: index === 1 ? 0xb98355 : 0xc59a6a, roughness: 0.98 });
  const paleFur = new THREE.MeshStandardMaterial({ color: 0xe7d2ae, roughness: 1 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x342c28, roughness: 0.7 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(0.48, 12, 10), fur);
  body.scale.set(1.25, 0.72, 0.78);
  body.position.y = 0.53;
  animal.add(body);
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.29, 10, 8), paleFur);
  chest.scale.set(0.78, 0.82, 0.74);
  chest.position.set(0, 0.48, -0.3);
  animal.add(chest);
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.31, 12, 10), fur);
  head.scale.set(0.9, 0.85, 0.95);
  head.position.set(0, 0.82, -0.55);
  animal.add(head);
  const muzzle = new THREE.Mesh(new THREE.ConeGeometry(0.13, 0.36, 8), paleFur);
  muzzle.rotation.x = -Math.PI / 2;
  muzzle.position.set(0, 0.7, -0.82);
  animal.add(muzzle);
  for (const side of [-1, 1]) {
    const ear = new THREE.Mesh(new THREE.ConeGeometry(0.095, 0.34, 7), fur);
    ear.position.set(side * 0.19, 1.08, -0.52);
    animal.add(ear);
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.045, 8, 6), dark);
    eye.position.set(side * 0.21, 0.86, -0.79);
    animal.add(eye);
  }
  const tail = new THREE.Mesh(new THREE.CapsuleGeometry(0.13, 0.65, 3, 7), paleFur);
  tail.position.set(0, 0.62, 0.62);
  tail.rotation.x = -0.95;
  animal.add(tail);
  const legs = [];
  for (const side of [-1, 1]) {
    for (const front of [-1, 1]) {
      const leg = new THREE.Group();
      leg.position.set(side * 0.28, 0.43, front * 0.28);
      const limb = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.06, 0.42, 7), fur);
      limb.position.y = -0.2;
      leg.add(limb);
      animal.add(leg);
      legs.push(leg);
    }
  }
  animal.scale.setScalar(0.72);
  animal.userData.legs = legs;
  return animal;
}

function makeArcticWildlife(kind) {
  const palettes = {
    cat: [0x9b7255, 0xe7d7c6, 0x332a27],
    fox: [0xc96d35, 0xf0dfc8, 0x302a28],
    hare: [0xd9d8d1, 0xf2f0e8, 0x383633]
  };
  const [furColor, lightColor, darkColor] = palettes[kind];
  const animal = new THREE.Group();
  const fur = new THREE.MeshStandardMaterial({ color: furColor, roughness: 0.98 });
  const lightFur = new THREE.MeshStandardMaterial({ color: lightColor, roughness: 1 });
  const dark = new THREE.MeshStandardMaterial({ color: darkColor, roughness: 0.75 });
  const pink = new THREE.MeshStandardMaterial({ color: 0xb77b79, roughness: 0.8 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(kind === "hare" ? 0.4 : 0.43, 18, 14), fur);
  body.scale.set(1.35, 0.78, 0.84);
  body.position.set(0, 0.54, 0.08);
  animal.add(body);
  const chest = new THREE.Mesh(new THREE.SphereGeometry(0.27, 16, 12), lightFur);
  chest.scale.set(0.92, 0.9, 0.58);
  chest.position.set(0, 0.48, -0.26);
  animal.add(chest);
  const head = new THREE.Mesh(new THREE.SphereGeometry(kind === "fox" ? 0.29 : 0.26, 18, 14), fur);
  head.scale.set(0.92, 0.92, 1.08);
  head.position.set(0, 0.85, -0.49);
  animal.add(head);
  const muzzle = new THREE.Mesh(new THREE.SphereGeometry(kind === "fox" ? 0.14 : 0.11, 14, 10), lightFur);
  muzzle.scale.set(0.85, 0.68, 1.25);
  muzzle.position.set(0, 0.75, -0.73);
  animal.add(muzzle);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(0.045, 10, 8), dark);
  nose.position.set(0, 0.77, -0.85);
  animal.add(nose);
  for (const side of [-1, 1]) {
    const ear = kind === "hare"
      ? new THREE.Mesh(new THREE.CapsuleGeometry(0.065, 0.4, 4, 8), fur)
      : new THREE.Mesh(new THREE.ConeGeometry(kind === "fox" ? 0.12 : 0.11, 0.34, 8), fur);
    ear.position.set(side * 0.17, kind === "hare" ? 1.24 : 1.08, -0.47);
    ear.rotation.z = side * (kind === "hare" ? -0.12 : -0.2);
    animal.add(ear);
    if (kind === "cat") {
      const innerEar = new THREE.Mesh(new THREE.ConeGeometry(0.055, 0.2, 8), pink);
      innerEar.position.set(side * 0.17, 1.09, -0.48);
      innerEar.rotation.z = side * -0.2;
      animal.add(innerEar);
    }
    const eye = new THREE.Mesh(new THREE.SphereGeometry(0.035, 10, 8), dark);
    eye.position.set(side * 0.16, 0.88, -0.69);
    animal.add(eye);
  }
  const tail = new THREE.Mesh(new THREE.CapsuleGeometry(kind === "fox" ? 0.15 : 0.09, kind === "fox" ? 0.58 : 0.28, 4, 8), kind === "fox" ? lightFur : fur);
  tail.position.set(0, kind === "fox" ? 0.62 : 0.61, 0.61);
  tail.rotation.x = kind === "fox" ? -1.05 : -0.85;
  animal.add(tail);
  const legs = [];
  for (const side of [-1, 1]) {
    for (const fore of [-1, 1]) {
      const leg = new THREE.Group();
      leg.position.set(side * 0.24, 0.42, fore * 0.27);
      const shin = new THREE.Mesh(new THREE.CapsuleGeometry(0.07, 0.24, 3, 7), fur);
      shin.position.y = -0.14;
      leg.add(shin);
      const paw = new THREE.Mesh(new THREE.SphereGeometry(0.085, 10, 8), dark);
      paw.position.set(0, -0.27, -0.035);
      leg.add(paw);
      animal.add(leg);
      legs.push(leg);
    }
  }
  animal.scale.setScalar(kind === "hare" ? 0.82 : 0.76);
  animal.userData.legs = legs;
  return animal;
}

function makeMarsHabitat() {
  const hab = new THREE.Group();
  const titaniumMat = new THREE.MeshStandardMaterial({ color: 0xdfdfdf, roughness: 0.45, metalness: 0.55 });
  const goldFoilMat = new THREE.MeshStandardMaterial({ color: 0xe8ad38, roughness: 0.28, metalness: 0.75 });
  const darkStrutMat = new THREE.MeshStandardMaterial({ color: 0x24282a, roughness: 0.8 });
  const solarBlueMat = new THREE.MeshStandardMaterial({ color: 0x154b7c, roughness: 0.25, metalness: 0.65 });

  // Main Pressurized Habitation Cylinder
  const body = new THREE.Mesh(new THREE.CylinderGeometry(2.8, 3.2, 4.2, 8), titaniumMat);
  body.position.y = 2.8;
  body.castShadow = true;
  body.receiveShadow = true;
  hab.add(body);

  // Dome Roof
  const dome = new THREE.Mesh(new THREE.SphereGeometry(2.8, 20, 14, 0, TAU, 0, Math.PI * 0.5), titaniumMat);
  dome.position.y = 4.9;
  dome.castShadow = true;
  hab.add(dome);

  const descentStage = new THREE.Mesh(new THREE.CylinderGeometry(3.45, 3.25, 0.76, 8), goldFoilMat);
  descentStage.position.y = 0.78;
  descentStage.castShadow = true;
  hab.add(descentStage);
  const engineBell = new THREE.Mesh(new THREE.ConeGeometry(0.82, 0.9, 16, 1, true), darkStrutMat);
  engineBell.rotation.x = Math.PI;
  engineBell.position.y = 0.45;
  hab.add(engineBell);
  for (const [x, z] of [[-1.6, -1.6], [1.6, -1.6], [-1.6, 1.6], [1.6, 1.6]]) {
    const thruster = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.24, 0.48, 10), darkStrutMat);
    thruster.position.set(x, 0.3, z);
    hab.add(thruster);
  }

  const hullBand = new THREE.MeshStandardMaterial({ color: 0xb7c1c5, roughness: 0.58, metalness: 0.48 });
  for (const y of [1.05, 4.55]) {
    const band = new THREE.Mesh(new THREE.CylinderGeometry(y < 2 ? 3.23 : 2.82, y < 2 ? 3.23 : 2.82, 0.09, 8), hullBand);
    band.position.y = y;
    hab.add(band);
  }

  const viewportMaterial = new THREE.MeshStandardMaterial({ color: 0x173b4d, emissive: 0x0b2430, roughness: 0.16, metalness: 0.18 });
  for (const x of [-0.95, 0, 0.95]) {
    const viewport = new THREE.Mesh(new THREE.SphereGeometry(0.34, 16, 12), viewportMaterial);
    viewport.scale.set(0.9, 0.72, 0.22);
    viewport.position.set(x, 3.55, 2.88 - Math.abs(x) * 0.18);
    hab.add(viewport);
  }

  // Airlock Module
  const airlock = new THREE.Mesh(new THREE.BoxGeometry(1.6, 2.2, 1.8), titaniumMat);
  airlock.position.set(0, 1.8, 3.4);
  airlock.castShadow = true;
  hab.add(airlock);

  // Dual Foldable Solar Panel Wings
  for (const side of [-1, 1]) {
    const wingStrut = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 3.8, 8), darkStrutMat);
    wingStrut.rotation.z = Math.PI / 2;
    wingStrut.position.set(side * 4.8, 3.6, 0);
    hab.add(wingStrut);

    const solarArray = new THREE.Group();
    solarArray.add(new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.08, 1.6), solarBlueMat));
    const cellGrid = new THREE.MeshStandardMaterial({ color: 0x4c83a5, roughness: 0.4, metalness: 0.3 });
    for (const x of [-1.35, -0.45, 0.45, 1.35]) {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(0.025, 0.025, 1.52), cellGrid);
      rib.position.set(x, 0.052, 0);
      solarArray.add(rib);
    }
    for (const z of [-0.52, 0, 0.52]) {
      const rib = new THREE.Mesh(new THREE.BoxGeometry(3.52, 0.025, 0.025), cellGrid);
      rib.position.set(0, 0.052, z);
      solarArray.add(rib);
    }
    solarArray.position.set(side * 5.6, 3.6, 0);
    solarArray.rotation.x = 0.35;
    hab.add(solarArray);
  }

  // Comms Dish on Top
  const dishMast = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.8, 8), darkStrutMat);
  dishMast.position.set(0, 6.2, 0);
  hab.add(dishMast);

  const dish = new THREE.Mesh(new THREE.SphereGeometry(1.1, 16, 12, 0, TAU, 0, Math.PI * 0.5), goldFoilMat);
  dish.rotation.x = Math.PI * 1.15;
  dish.rotation.y = 0.45;
  dish.position.set(0, 7.2, 0);
  hab.add(dish);

  // Heavy Duty Landing Struts with Footpads
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * TAU + 0.38;
    const leg = new THREE.Group();
    const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 3.2, 8), darkStrutMat);
    strut.rotation.z = 0.48;
    strut.position.set(1.4, 1.2, 0);
    leg.add(strut);

    const pad = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 0.16, 12), titaniumMat);
    pad.position.set(2.4, 0.1, 0);
    leg.add(pad);

    leg.rotation.y = angle;
    hab.add(leg);
  }

  hab.scale.setScalar(0.95);
  return hab;
}

function makeSampleCacheDepot() {
  const depot = new THREE.Group();
  const boxMat = new THREE.MeshStandardMaterial({ color: 0x485255, roughness: 0.6 });
  const tubeMat = new THREE.MeshStandardMaterial({ color: 0xe8ad38, roughness: 0.3, metalness: 0.8 });

  const crate = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.55, 1.2), boxMat);
  crate.position.y = 0.28;
  depot.add(crate);

  for (let i = 0; i < 5; i++) {
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.45, 8), tubeMat);
    tube.position.set(-0.6 + i * 0.3, 0.58, 0);
    depot.add(tube);
  }
  return depot;
}

function makeLunarModule() {
  const lm = new THREE.Group();
  const goldMylar = new THREE.MeshStandardMaterial({ color: 0xf5b82a, roughness: 0.28, metalness: 0.88 });
  const silverMylar = new THREE.MeshStandardMaterial({ color: 0xcccccc, roughness: 0.35, metalness: 0.82 });
  const alloyMat = new THREE.MeshStandardMaterial({ color: 0x98a0a6, roughness: 0.52, metalness: 0.55 });
  const darkMat = new THREE.MeshStandardMaterial({ color: 0x181a1c, roughness: 0.85 });
  const whiteMat = new THREE.MeshStandardMaterial({ color: 0xe8ecef, roughness: 0.45 });

  // 1. Octagonal Descent Stage with Gold Thermal Mylar Blanket
  const descentBase = new THREE.Mesh(new THREE.CylinderGeometry(2.9, 3.2, 1.85, 8), goldMylar);
  descentBase.position.y = 1.6;
  descentBase.castShadow = true;
  descentBase.receiveShadow = true;
  lm.add(descentBase);

  // Black and Silver Thermal Shielding Panels on Descent Sides
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * TAU;
    const panel = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 1.6, 0.08),
      i % 2 === 0 ? darkMat : silverMylar
    );
    panel.position.set(Math.cos(angle) * 3.02, 1.6, Math.sin(angle) * 3.02);
    panel.rotation.y = -angle + Math.PI / 2;
    lm.add(panel);
  }

  // Descent Engine Cluster & Large Bell Nozzle
  const nozzle = new THREE.Mesh(new THREE.ConeGeometry(0.95, 1.35, 20, 1, true), darkMat);
  nozzle.rotation.x = Math.PI;
  nozzle.position.y = 0.65;
  lm.add(nozzle);

  // 2. Ascent Stage (Crew Cabin)
  const ascentCabin = new THREE.Mesh(new THREE.CylinderGeometry(1.65, 2.05, 1.7, 4), alloyMat);
  ascentCabin.rotation.y = Math.PI / 4;
  ascentCabin.position.y = 3.35;
  ascentCabin.castShadow = true;
  lm.add(ascentCabin);

  // Forward Cockpit Facet
  const cockpitFacet = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.3, 0.9), alloyMat);
  cockpitFacet.position.set(0, 3.35, 1.4);
  lm.add(cockpitFacet);

  // Triangular Pilot Windows with Interior Warm Glow
  const glassMat = new THREE.MeshStandardMaterial({ color: 0x142b3d, emissive: 0x0c1e28, roughness: 0.1 });
  for (const s of [-1, 0, 1]) {
    const win = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.34, 0.04), glassMat);
    win.position.set(s * 0.46, 3.45, 1.87 - Math.abs(s) * 0.1);
    win.rotation.y = s * 0.22;
    lm.add(win);
  }

  // Overhead Docking Tunnel & Alignment Target Cross
  const dockingTunnel = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.72, 0.45, 16), silverMylar);
  dockingTunnel.position.set(0, 4.35, 0);
  lm.add(dockingTunnel);

  const targetCross = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.04, 0.04), darkMat);
  targetCross.position.set(0, 4.6, 0);
  lm.add(targetCross);

  // Ingress/Egress EVA Hatch & Front Porch Platform
  const hatch = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.85, 0.08), darkMat);
  hatch.position.set(0, 2.95, 1.86);
  lm.add(hatch);

  const porch = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.08, 0.9), alloyMat);
  porch.position.set(0, 2.45, 2.25);
  lm.add(porch);

  // Astronaut Egress Ladder descending to Lunar Surface
  const ladderGroup = new THREE.Group();
  ladderGroup.position.set(0, 0, 2.65);
  const leftRail = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.5, 8), alloyMat);
  leftRail.position.set(-0.24, 1.25, 0);
  const rightRail = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 2.5, 8), alloyMat);
  rightRail.position.set(0.24, 1.25, 0);
  ladderGroup.add(leftRail, rightRail);

  for (let r = 0; r < 9; r++) {
    const rung = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.48, 6), alloyMat);
    rung.rotation.z = Math.PI / 2;
    rung.position.set(0, 0.2 + r * 0.26, 0);
    ladderGroup.add(rung);
  }
  lm.add(ladderGroup);

  // S-Band Steerable High-Gain Parabolic Dish Antenna
  const antennaMast = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.04, 1.2, 8), alloyMat);
  antennaMast.position.set(1.4, 4.4, -0.6);
  antennaMast.rotation.z = -0.35;
  lm.add(antennaMast);

  const dish = new THREE.Mesh(new THREE.SphereGeometry(0.75, 16, 12, 0, TAU, 0, Math.PI * 0.45), whiteMat);
  dish.rotation.x = Math.PI * 1.2;
  dish.rotation.y = 0.55;
  dish.position.set(1.8, 5.0, -0.6);
  lm.add(dish);

  // 4 Reaction Control System (RCS) Outrigger Clusters (4 nozzles each)
  for (let c = 0; c < 4; c++) {
    const angle = (c / 4) * TAU + Math.PI / 4;
    const rcsOutrigger = new THREE.Group();
    rcsOutrigger.position.set(Math.cos(angle) * 2.2, 3.4, Math.sin(angle) * 2.2);

    const boom = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.5), darkMat);
    boom.rotation.y = angle;
    rcsOutrigger.add(boom);

    // Quad thruster nozzles (+X, -X, +Y, -Y)
    for (const [nx, ny, nz, rx, rz] of [
      [0.15, 0, 0, 0, Math.PI / 2],
      [-0.15, 0, 0, 0, -Math.PI / 2],
      [0, 0.15, 0, 0, 0],
      [0, -0.15, 0, Math.PI, 0]
    ]) {
      const cone = new THREE.Mesh(new THREE.ConeGeometry(0.045, 0.11, 8), darkMat);
      cone.position.set(nx, ny, nz);
      cone.rotation.set(rx, 0, rz);
      rcsOutrigger.add(cone);
    }
    lm.add(rcsOutrigger);
  }

  // 4 Articulated Heavy Duty Landing Gear Legs with Gold Mylar Footpads
  for (let i = 0; i < 4; i++) {
    const angle = (i / 4) * TAU + Math.PI / 4;
    const leg = new THREE.Group();

    // Primary Oleo Shock Strut (Cantilever)
    const primaryStrut = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 3.4, 8), goldMylar);
    primaryStrut.rotation.z = 0.62;
    primaryStrut.position.set(1.6, 0.85, 0);
    primaryStrut.castShadow = true;
    leg.add(primaryStrut);

    // Secondary A-Frame Tension Trusses
    for (const side of [-0.4, 0.4]) {
      const secondaryStrut = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.9, 8), alloyMat);
      secondaryStrut.position.set(1.3, 1.25, side);
      secondaryStrut.rotation.z = 0.48;
      secondaryStrut.rotation.x = side > 0 ? 0.28 : -0.28;
      leg.add(secondaryStrut);
    }

    // Large Gold-wrapped Inverted Dish Footpad (Diameter ~1.2m)
    const footpad = new THREE.Mesh(new THREE.CylinderGeometry(0.68, 0.76, 0.14, 16), goldMylar);
    footpad.position.set(2.85, 0.07, 0);
    footpad.castShadow = true;
    leg.add(footpad);

    // Lunar Ground Contact Sensing Probe Wire
    const probeWire = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 1.2, 6), darkMat);
    probeWire.position.set(2.85, -0.55, 0);
    leg.add(probeWire);

    leg.rotation.y = angle;
    lm.add(leg);
  }

  // ALSEP Scientific Instrument & RTG Generator on the Regolith
  const alsep = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.45, 0.55), whiteMat);
  alsep.position.set(-3.6, 0.22, 1.8);
  alsep.castShadow = true;
  lm.add(alsep);

  const rtgFins = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.5, 8), darkMat);
  rtgFins.position.set(-3.6, 0.65, 1.8);
  lm.add(rtgFins);

  const thermalBlanket = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.58, 0.16), goldMylar);
  thermalBlanket.position.set(-3.6, 0.74, 1.8);
  lm.add(thermalBlanket);

  lm.scale.setScalar(0.95);
  return lm;
}

function makeDetailedRover(isMars = true) {
  const rover = new THREE.Group();
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: isMars ? 0xd0d8d6 : 0xd8dde0, roughness: 0.65, metalness: 0.35 });
  const darkMaterial = new THREE.MeshStandardMaterial({ color: 0x222a2e, roughness: 0.9 });
  const goldMaterial = new THREE.MeshStandardMaterial({ color: 0xe5a93b, roughness: 0.35, metalness: 0.8 });
  const lensMaterial = new THREE.MeshStandardMaterial({ color: 0x48e4ff, emissive: 0x1688aa, emissiveIntensity: 1.2 });

  // Main Avionics Chassis
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.5, 0.5, 1.2), bodyMaterial);
  body.position.y = 0.82;
  body.castShadow = true;
  rover.add(body);

  // Top Equipment Deck
  const deck = new THREE.Mesh(new THREE.BoxGeometry(0.85, 0.14, 0.8), darkMaterial);
  deck.position.set(0, 1.12, -0.05);
  rover.add(deck);

  // MastCam / SuperCam Remote Sensing Mast
  const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.06, 0.95, 8), bodyMaterial);
  mast.position.set(0.35, 1.55, -0.38);
  rover.add(mast);

  const cameraHead = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.22, 0.28), bodyMaterial);
  cameraHead.position.set(0.35, 2.05, -0.38);
  rover.add(cameraHead);

  const cameraEye1 = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 10), lensMaterial);
  cameraEye1.position.set(0.28, 2.05, -0.53);
  const cameraEye2 = new THREE.Mesh(new THREE.SphereGeometry(0.06, 12, 10), lensMaterial);
  cameraEye2.position.set(0.42, 2.05, -0.53);
  rover.add(cameraEye1, cameraEye2);

  // Multi-Mission Radioisotope Thermoelectric Generator (MMRTG) at rear
  const rtg = new THREE.Mesh(new THREE.CylinderGeometry(0.22, 0.24, 0.65, 10), darkMaterial);
  rtg.rotation.x = Math.PI / 2;
  rtg.position.set(0, 0.95, 0.88);
  rover.add(rtg);

  // High-Gain Parabolic Antenna
  const hga = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.04, 16), goldMaterial);
  hga.position.set(-0.35, 1.25, 0.15);
  hga.rotation.x = 0.35;
  rover.add(hga);

  // 6 Articulated Rocker-Bogie Wheels
  const wheels = [];
  for (const x of [-0.92, 0.92]) {
    for (const z of [-0.62, 0, 0.62]) {
      const wheel = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 0.22, 14), darkMaterial);
      wheel.rotation.z = Math.PI / 2;
      wheel.position.set(x, 0.42, z);
      wheel.castShadow = true;
      rover.add(wheel);
      wheels.push(wheel);

      // Connecting bogie arm strut
      const strut = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.55, 6), bodyMaterial);
      strut.position.set(x * 0.8, 0.62, z);
      rover.add(strut);
    }
  }

  rover.userData.wheels = wheels;
  return rover;
}

/* =========================================================================
   Starfield Generation with Physics & Astronomical Scintillation Shader
   "مع فيزيائيه حركه النجوم من حولهم"
   ========================================================================= */

function addDynamicStars(scene, count, radius) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);
  const twinkleData = new Float32Array(count * 2); // [frequency, phase]

  // Spectral color classes (O, B, A, F, G, K, M)
  const spectralColors = [
    new THREE.Color(0xa5c4ff), // O/B: luminous blue-white giant
    new THREE.Color(0xdce7ff), // A: pure brilliant white
    new THREE.Color(0xfff5ea), // F/G: solar golden white
    new THREE.Color(0xffd29f), // K: orange giant
    new THREE.Color(0xff8a65)  // M: red supergiant (Betelgeuse / Antares style)
  ];

  for (let i = 0; i < count; i++) {
    const theta = Math.random() * TAU;
    const y = 0.35 + Math.random() * 0.65;
    const horizontal = Math.sqrt(1 - y * y);
    const r = radius * (0.85 + Math.random() * 0.3);

    positions[i * 3] = Math.cos(theta) * horizontal * r;
    positions[i * 3 + 1] = y * r;
    positions[i * 3 + 2] = Math.sin(theta) * horizontal * r;

    const colorType = Math.random();
    const starCol = colorType > 0.85 ? spectralColors[0]
      : colorType > 0.6 ? spectralColors[1]
      : colorType > 0.25 ? spectralColors[2]
      : colorType > 0.1 ? spectralColors[3]
      : spectralColors[4];

    colors[i * 3] = starCol.r;
    colors[i * 3 + 1] = starCol.g;
    colors[i * 3 + 2] = starCol.b;

    sizes[i] = 1.0 + Math.random() * 2.8;
    twinkleData[i * 2] = 2.0 + Math.random() * 6.0; // Twinkle frequency
    twinkleData[i * 2 + 1] = Math.random() * TAU;   // Phase
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute("aTwinkle", new THREE.BufferAttribute(twinkleData, 2));

  const material = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    vertexColors: true,
    uniforms: {
      uTime: { value: 0 }
    },
    vertexShader: `
      attribute float aSize;
      attribute vec2 aTwinkle;
      uniform float uTime;
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        vColor = color;
        float twinkle = 0.65 + 0.35 * sin(uTime * aTwinkle.x + aTwinkle.y);
        vAlpha = twinkle;
        vec4 viewPosition = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * viewPosition;
        gl_PointSize = aSize * twinkle * (280.0 / max(80.0, -viewPosition.z));
      }
    `,
    fragmentShader: `
      varying vec3 vColor;
      varying float vAlpha;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        float alpha = (1.0 - smoothstep(0.12, 0.5, dist)) * vAlpha;
        gl_FragColor = vec4(vColor, alpha * 0.95);
      }
    `
  });

  const starField = new THREE.Points(geometry, material);
  starField.frustumCulled = false;
  scene.add(starField);
  return starField;
}

function makeOrbitalStation() {
  const station = new THREE.Group();
  const hull = new THREE.MeshStandardMaterial({ color: 0xc4d2d4, roughness: 0.63, metalness: 0.34 });
  const joint = new THREE.MeshStandardMaterial({ color: 0x536b76, roughness: 0.56, metalness: 0.42 });
  const panel = new THREE.MeshStandardMaterial({ color: 0x1f5685, roughness: 0.36, metalness: 0.23, emissive: 0x07192c });

  const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.36, 0.42, 2.8, 12), hull);
  hub.rotation.z = Math.PI / 2;
  hub.castShadow = true;
  station.add(hub);

  const module = new THREE.Mesh(new THREE.CylinderGeometry(0.63, 0.63, 1.55, 14), hull);
  module.rotation.z = Math.PI / 2;
  module.position.x = -0.35;
  station.add(module);

  for (const side of [-1, 1]) {
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.055, 2.4, 7), joint);
    beam.position.set(side * 0.08, 0, 0);
    beam.rotation.z = Math.PI / 2;
    station.add(beam);

    const array = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.06, 0.9), panel);
    array.position.set(side * 1.46, 0, 0);
    station.add(array);

    const strut = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.05, 0.95), joint);
    strut.position.set(side * 1.46, 0, 0);
    station.add(strut);

    const pod = new THREE.Mesh(new THREE.SphereGeometry(0.39, 14, 10), hull);
    pod.position.set(side * 1.58, 0.1, 0);
    station.add(pod);
  }

  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.035, 1.35, 8), hull);
  antenna.position.set(0.2, 0.9, 0);
  station.add(antenna);

  const dish = new THREE.Mesh(new THREE.SphereGeometry(0.36, 16, 12, 0, TAU, 0, Math.PI * 0.55), new THREE.MeshStandardMaterial({ color: 0xd0dce1, roughness: 0.4, metalness: 0.65, side: THREE.DoubleSide }));
  dish.position.set(0.2, 1.55, 0);
  dish.rotation.x = Math.PI;
  station.add(dish);

  station.position.set(-1.35, 1.15, -3.8);
  station.rotation.set(0.2, -0.32, -0.18);
  station.scale.setScalar(0.82);
  station.traverse(object => { if (object.isMesh) object.castShadow = true; });
  return station;
}

function makeCharacter(kind, x, faceUrl = null) {
  const group = new THREE.Group();
  group.position.x = x;
  const pivots = {};
  const suit = new THREE.MeshStandardMaterial({ color: kind === "alien" ? 0x73c896 : 0xdde5e8, roughness: 0.68, metalness: 0.08, emissive: kind === "astronaut" ? 0x12191b : 0x000000, emissiveIntensity: 0.12 });
  const joint = new THREE.MeshStandardMaterial({ color: kind === "alien" ? 0x4b9b70 : 0x5a6d75, roughness: 0.8 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x15252d, roughness: 0.45, metalness: 0.18 });
  const trim = new THREE.MeshStandardMaterial({ color: kind === "alien" ? 0x9edbb2 : 0xeea458, roughness: 0.54, metalness: 0.22 });
  const glass = new THREE.MeshStandardMaterial({
    color: faceUrl ? 0xf3fbff : 0x2bb8d8,
    emissive: 0x082534,
    roughness: 0.12,
    metalness: faceUrl ? 0.02 : 0.35,
    transparent: true,
    opacity: faceUrl ? 0.1 : 0.82,
    depthWrite: false
  });

  const torso = new THREE.Mesh(new THREE.CapsuleGeometry(kind === "alien" ? 0.29 : 0.33, 0.52, 4, 8), suit);
  torso.position.y = 0.92;
  torso.castShadow = true;
  group.add(torso);

  if (kind === "alien") {
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.41, 20, 16), suit);
    head.scale.set(0.9, 1.16, 0.78);
    head.position.set(0, 1.65, -0.01);
    group.add(head);

    const eyeMaterial = new THREE.MeshStandardMaterial({ color: 0x10262a, roughness: 0.16, metalness: 0.12, emissive: 0x071516 });
    for (const side of [-1, 1]) {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.105, 14, 12), eyeMaterial);
      eye.scale.set(0.72, 1.25, 0.5);
      eye.position.set(side * 0.16, 1.72, -0.31);
      group.add(eye);
    }
    for (const side of [-1, 1]) {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.065, 0.24, 8), joint);
      horn.position.set(side * 0.24, 2.02, -0.02);
      horn.rotation.z = side * 0.28;
      group.add(horn);
    }
  } else {
    // NASA Astronaut Life Support System Backpack
    const backpack = new THREE.Mesh(new THREE.BoxGeometry(0.56, 0.72, 0.32), joint);
    backpack.position.set(0, 1.06, 0.35);
    group.add(backpack);

    for (const side of [-1, 1]) {
      const tank = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.12, 0.62, 10), dark);
      tank.position.set(side * 0.19, 1.1, 0.52);
      group.add(tank);

      const shoulder = new THREE.Mesh(new THREE.SphereGeometry(0.19, 12, 10), suit);
      shoulder.scale.set(1, 0.78, 1.18);
      shoulder.position.set(side * 0.38, 1.27, 0);
      group.add(shoulder);
    }

    const helmet = new THREE.Group();
    helmet.position.set(0, 1.68, -0.02);
    if (faceUrl) {
      const shellGeometries = [
        new THREE.SphereGeometry(0.4, 28, 20, 0, Math.PI, 0, Math.PI),
        new THREE.SphereGeometry(0.4, 20, 16, Math.PI, Math.PI * 0.28, 0, Math.PI),
        new THREE.SphereGeometry(0.4, 20, 16, Math.PI * 1.72, Math.PI * 0.28, 0, Math.PI),
        new THREE.SphereGeometry(0.4, 20, 12, Math.PI * 1.28, Math.PI * 0.44, 0, Math.PI * 0.16),
        new THREE.SphereGeometry(0.4, 20, 12, Math.PI * 1.28, Math.PI * 0.44, Math.PI * 0.84, Math.PI * 0.16)
      ];
      shellGeometries.forEach(geometry => helmet.add(new THREE.Mesh(geometry, suit)));
      const visorWindow = new THREE.Mesh(
        new THREE.SphereGeometry(0.405, 28, 20, Math.PI * 1.28, Math.PI * 0.44, Math.PI * 0.16, Math.PI * 0.68),
        glass
      );
      helmet.add(visorWindow);
    } else {
      helmet.add(new THREE.Mesh(new THREE.SphereGeometry(0.4, 24, 18), suit));
    }
    group.add(helmet);

    // Realistic face inside the helmet visor from uploaded user photo
    if (faceUrl) {
      const faceTex = new THREE.TextureLoader().load(faceUrl);
      faceTex.colorSpace = THREE.SRGBColorSpace;
      const skin = new THREE.Mesh(new THREE.SphereGeometry(0.245, 32, 24), new THREE.MeshStandardMaterial({ color: 0xc98e72, roughness: 0.82 }));
      skin.scale.set(0.82, 1.05, 0.58);
      skin.position.set(0, 1.68, -0.15);
      group.add(skin);

      const faceGeometry = new THREE.BufferGeometry();
      const facePositions = [];
      const faceUvs = [];
      const faceIndices = [];
      const columns = 24;
      const rows = 24;
      for (let row = 0; row <= rows; row += 1) {
        const v = row / rows;
        for (let column = 0; column <= columns; column += 1) {
          const u = column / columns;
          const x = (u - 0.5) * 0.3;
          const normalizedX = x / 0.15;
          const y = (v - 0.5) * 0.35;
          const z = -0.285 - 0.03 * (1 - normalizedX * normalizedX);
          facePositions.push(x, y + 1.68, z);
          faceUvs.push(u, v);
        }
      }
      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const bottomLeft = row * (columns + 1) + column;
          const bottomRight = bottomLeft + 1;
          const topLeft = bottomLeft + columns + 1;
          const topRight = topLeft + 1;
          faceIndices.push(bottomLeft, topLeft, bottomRight, bottomRight, topLeft, topRight);
        }
      }
      faceGeometry.setAttribute("position", new THREE.Float32BufferAttribute(facePositions, 3));
      faceGeometry.setAttribute("uv", new THREE.Float32BufferAttribute(faceUvs, 2));
      faceGeometry.setIndex(faceIndices);
      faceGeometry.computeVertexNormals();
      const faceMat = new THREE.MeshBasicMaterial({ map: faceTex, transparent: true, side: THREE.DoubleSide });
      const faceMesh = new THREE.Mesh(faceGeometry, faceMat);
      group.add(faceMesh);
    }

    // Reflective Gold/Cyan Visor
    const visorRim = new THREE.Mesh(new THREE.TorusGeometry(0.275, 0.028, 8, 24), trim);
    visorRim.position.set(0, 1.69, -0.41);
    group.add(visorRim);

    const chest = new THREE.Mesh(new THREE.BoxGeometry(0.38, 0.3, 0.075), dark);
    chest.position.set(0, 1.02, -0.31);
    group.add(chest);

    const chestPanel = new THREE.Mesh(new THREE.BoxGeometry(0.21, 0.11, 0.018), trim);
    chestPanel.position.set(0, 1.06, -0.356);
    group.add(chestPanel);
  }

  for (const side of [-1, 1]) {
    const arm = new THREE.Group();
    arm.position.set(side * 0.38, 1.18, 0);
    const upperArm = new THREE.Mesh(new THREE.CapsuleGeometry(0.115, 0.34, 3, 6), suit);
    upperArm.position.y = -0.22;
    arm.add(upperArm);
    const hand = new THREE.Mesh(new THREE.SphereGeometry(0.125, 10, 8), joint);
    hand.position.y = -0.48;
    arm.add(hand);
    group.add(arm);
    pivots[side < 0 ? "leftArm" : "rightArm"] = arm;

    const leg = new THREE.Group();
    leg.position.set(side * 0.17, 0.63, 0);
    const boot = new THREE.Mesh(new THREE.CapsuleGeometry(0.14, 0.34, 3, 6), kind === "alien" ? suit : joint);
    boot.position.y = -0.25;
    leg.add(boot);
    group.add(leg);
    pivots[side < 0 ? "leftLeg" : "rightLeg"] = leg;
  }

  group.userData.pivots = pivots;
  group.traverse(object => { if (object.isMesh) object.castShadow = true; });
  return group;
}

function makeSampleMarker(color) {
  const marker = new THREE.Group();
  const stemMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.65, depthWrite: false });
  const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.014, 0.026, 0.62, 6), stemMat);
  stem.position.y = 0.34;
  marker.add(stem);

  const pointMat = new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, depthWrite: false });
  const point = new THREE.Mesh(new THREE.OctahedronGeometry(0.1, 0), pointMat);
  point.position.y = 0.72;
  marker.add(point);
  return marker;
}

function makeRenderer(container, pixelRatio) {
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, pixelRatio));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.18;
  renderer.shadowMap.enabled = matchMedia("(pointer: fine)").matches;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.domElement.className = "space-game-canvas";
  renderer.domElement.setAttribute("aria-label", "عالم استكشاف فضائي ثلاثي الأبعاد");
  container.append(renderer.domElement);
  return renderer;
}

function disposeScene(scene) {
  scene.traverse(object => {
    object.geometry?.dispose?.();
    const materials = Array.isArray(object.material) ? object.material : [object.material];
    materials.filter(Boolean).forEach(material => {
      material.map?.dispose?.();
      material.roughnessMap?.dispose?.();
      material.normalMap?.dispose?.();
      material.dispose?.();
    });
  });
}

function setText(root, selector, text) {
  const element = root.querySelector(selector);
  if (element) element.textContent = text;
}

window.SpaceExplorer3D = { start: startSpaceExplorer, preview: startSpacePreview, stop: stopSpaceExplorer };
window.dispatchEvent(new Event("space-explorer-engine-ready"));