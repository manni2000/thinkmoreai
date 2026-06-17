import { useEffect, useRef } from "react";
import * as THREE from "three";

const makeSeededRandom = () => {
  let seed = 39;
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
};

const disposeObject = (object: THREE.Object3D) => {
  const mesh = object as THREE.Mesh;
  const points = object as THREE.Points;
  const line = object as THREE.LineSegments;
  const geometry = mesh.geometry || points.geometry || line.geometry;
  const material = mesh.material || points.material || line.material;

  geometry?.dispose?.();

  if (Array.isArray(material)) {
    material.forEach((item) => item.dispose());
  } else {
    material?.dispose?.();
  }
};

const HeroScene3D = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 120);
    camera.position.set(0, 0, 12);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
    renderer.domElement.dataset.hero3d = "true";
    renderer.domElement.style.display = "block";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.width = "100%";
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const ambientLight = new THREE.AmbientLight(0x9fc5ff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.PointLight(0xffc85a, 90, 32);
    keyLight.position.set(4, 5, 8);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight(0x3ce4d7, 70, 28);
    rimLight.position.set(-5, -3, 7);
    scene.add(rimLight);

    const coreGeometry = new THREE.IcosahedronGeometry(2.1, 1);
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0b1325,
      emissive: 0x112447,
      emissiveIntensity: 0.8,
      metalness: 0.72,
      roughness: 0.24,
      wireframe: true,
    });
    const core = new THREE.Mesh(coreGeometry, coreMaterial);
    group.add(core);

    const shellGeometry = new THREE.IcosahedronGeometry(2.65, 1);
    const shellMaterial = new THREE.MeshBasicMaterial({
      color: 0x56f2e4,
      transparent: true,
      opacity: 0.18,
      wireframe: true,
    });
    const shell = new THREE.Mesh(shellGeometry, shellMaterial);
    group.add(shell);

    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0xffbf45,
      transparent: true,
      opacity: 0.44,
      blending: THREE.AdditiveBlending,
    });

    const rings = [0, 1, 2].map((index) => {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(3.15 + index * 0.38, 0.012, 12, 160), ringMaterial.clone());
      ring.rotation.x = index === 0 ? Math.PI / 2.35 : Math.PI / (2.8 + index);
      ring.rotation.y = index * 0.78;
      group.add(ring);
      return ring;
    });

    const random = makeSeededRandom();
    const pointCount = 520;
    const positions = new Float32Array(pointCount * 3);
    const colors = new Float32Array(pointCount * 3);
    const palette = [
      new THREE.Color(0x56f2e4),
      new THREE.Color(0xffbf45),
      new THREE.Color(0x8fb8ff),
      new THREE.Color(0xffffff),
    ];

    for (let i = 0; i < pointCount; i += 1) {
      const radius = 3.6 + random() * 6.3;
      const theta = random() * Math.PI * 2;
      const phi = Math.acos(2 * random() - 1);
      const color = palette[Math.floor(random() * palette.length)];

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    const pointGeometry = new THREE.BufferGeometry();
    pointGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    pointGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const pointMaterial = new THREE.PointsMaterial({
      size: 0.032,
      transparent: true,
      opacity: 0.78,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const points = new THREE.Points(pointGeometry, pointMaterial);
    group.add(points);

    const lineCount = 120;
    const linePositions = new Float32Array(lineCount * 2 * 3);
    for (let i = 0; i < lineCount; i += 1) {
      const start = Math.floor(random() * pointCount);
      const end = Math.floor(random() * pointCount);
      linePositions.set(positions.slice(start * 3, start * 3 + 3), i * 6);
      linePositions.set(positions.slice(end * 3, end * 3 + 3), i * 6 + 3);
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x75dff3,
      transparent: true,
      opacity: 0.11,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(lines);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    };

    const resize = () => {
      const width = Math.max(mount.clientWidth, 1);
      const height = Math.max(mount.clientHeight, 1);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    resize();

    const clock = new THREE.Clock();
    let frame = 0;

    const render = () => {
      const elapsed = clock.getElapsedTime();

      group.rotation.y += (pointer.x * 0.2 - group.rotation.y) * 0.018;
      group.rotation.x += (-pointer.y * 0.12 - group.rotation.x) * 0.018;
      core.rotation.x = elapsed * 0.14;
      core.rotation.y = elapsed * 0.2;
      shell.rotation.x = -elapsed * 0.09;
      shell.rotation.z = elapsed * 0.08;
      points.rotation.y = elapsed * 0.018;
      lines.rotation.y = elapsed * 0.016;

      rings.forEach((ring, index) => {
        ring.rotation.z = elapsed * (0.12 + index * 0.035);
        ring.scale.setScalar(1 + Math.sin(elapsed * 1.2 + index) * 0.015);
      });

      renderer.render(scene, camera);
      frame = window.requestAnimationFrame(render);
    };

    if (prefersReducedMotion) {
      group.rotation.y = -0.32;
      group.rotation.x = 0.08;
      renderer.render(scene, camera);
    } else {
      render();
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.cancelAnimationFrame(frame);
      scene.traverse(disposeObject);
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};

export default HeroScene3D;
