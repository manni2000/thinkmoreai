import { useEffect, useRef } from "react";
import * as THREE from "three";

const roundedRect = (width: number, height: number, radius: number) => {
  const shape = new THREE.Shape();
  const x = -width / 2;
  const y = -height / 2;
  shape.moveTo(x + radius, y);
  shape.lineTo(x + width - radius, y); shape.quadraticCurveTo(x + width, y, x + width, y + radius);
  shape.lineTo(x + width, y + height - radius); shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  shape.lineTo(x + radius, y + height); shape.quadraticCurveTo(x, y + height, x, y + height - radius);
  shape.lineTo(x, y + radius); shape.quadraticCurveTo(x, y, x + radius, y);
  return shape;
};

const frameGeometry = () => {
  const outer = roundedRect(5.4, 5.4, 1.22);
  outer.holes.push(roundedRect(4.35, 4.35, .86));
  const geometry = new THREE.ExtrudeGeometry(outer, { depth: .25, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: .09, bevelThickness: .09, curveSegments: 18 });
  geometry.center();
  return geometry;
};

const disposeObject = (object: THREE.Object3D) => {
  const mesh = object as THREE.Mesh;
  mesh.geometry?.dispose?.();
  if (Array.isArray(mesh.material)) mesh.material.forEach((material) => material.dispose());
  else mesh.material?.dispose?.();
};

const HeroScene3D = ({ paused = false }: { paused?: boolean }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(paused);
  const refreshLoopRef = useRef<() => void>(() => undefined);

  useEffect(() => { pausedRef.current = paused; refreshLoopRef.current(); }, [paused]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" }); }
    catch { return; }

    renderer.setClearColor(0x000000, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.05;
    renderer.domElement.style.cssText = "display:block;width:100%;height:100%";
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, .1, 80);
    camera.position.set(0, .15, 14.5);
    const system = new THREE.Group();
    scene.add(system);

    scene.add(new THREE.HemisphereLight(0xc8f7ff, 0x080b10, 1.35));
    const cyanLight = new THREE.PointLight(0x77e5ff, 75, 28, 2); cyanLight.position.set(5, 4, 7); scene.add(cyanLight);
    const violetLight = new THREE.PointLight(0x9690ff, 60, 25, 2); violetLight.position.set(-4, -3, 6); scene.add(violetLight);
    const edgeLight = new THREE.DirectionalLight(0xffffff, 2.2); edgeLight.position.set(-3, 5, 8); scene.add(edgeLight);

    const metal = new THREE.MeshPhysicalMaterial({ color: 0x26394a, emissive: 0x07151c, emissiveIntensity: .45, metalness: .86, roughness: .3, clearcoat: .55, clearcoatRoughness: .2 });
    const frameGeo = frameGeometry();
    const rotations: [number, number, number][] = [[.12,.22,.1],[1.18,.56,.55],[-.7,1.08,-.45]];
    const frames = rotations.map((rotation, index) => {
      const frame = new THREE.Mesh(frameGeo.clone(), metal.clone());
      frame.rotation.set(...rotation);
      frame.scale.setScalar(1 - index * .045);
      system.add(frame);
      return frame;
    });

    const coreMaterial = new THREE.MeshPhysicalMaterial({ color: 0x76e7ff, emissive: 0x326b82, emissiveIntensity: 2.1, metalness: .2, roughness: .12, transmission: .2, thickness: 1.5 });
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(1.12, 3), coreMaterial);
    system.add(core);
    const coreShell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.48, 1), new THREE.MeshBasicMaterial({ color: 0x9690ff, wireframe: true, transparent: true, opacity: .17 }));
    system.add(coreShell);

    const traceMaterial = new THREE.LineBasicMaterial({ color: 0x77e5ff, transparent: true, opacity: .22 });
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xd8f9ff });
    const nodeGeometry = new THREE.SphereGeometry(.075, 12, 12);
    for (let index = 0; index < 8; index += 1) {
      const angle = index / 8 * Math.PI * 2;
      const radius = 3.25 + (index % 2) * .65;
      const node = new THREE.Mesh(nodeGeometry.clone(), nodeMaterial.clone());
      node.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius * .62, Math.sin(angle * 2) * .8);
      system.add(node);
      const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(0,0,0), node.position.clone()]), traceMaterial.clone());
      system.add(line);
    }

    const orbital = new THREE.Mesh(new THREE.TorusGeometry(4.05, .014, 8, 160), new THREE.MeshBasicMaterial({ color: 0x77e5ff, transparent: true, opacity: .24 }));
    orbital.rotation.x = 1.22; orbital.rotation.y = .35; system.add(orbital);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event: PointerEvent) => {
      const rect = mount.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width - .5) * 2;
      pointer.y = ((event.clientY - rect.top) / rect.height - .5) * 2;
    };
    const resize = () => {
      const width = Math.max(1, mount.clientWidth); const height = Math.max(1, mount.clientHeight);
      camera.aspect = width / height; camera.updateProjectionMatrix(); renderer.setSize(width, height, false);
    };
    const onScroll = () => { camera.position.y = Math.min(window.scrollY / window.innerHeight, 1) * -.55 + .15; };
    const onContextLost = (event: Event) => { event.preventDefault(); mount.style.opacity = "0"; };
    const onContextRestored = () => { mount.style.opacity = "1"; resize(); renderer.render(scene, camera); };
    renderer.domElement.addEventListener("webglcontextlost", onContextLost);
    renderer.domElement.addEventListener("webglcontextrestored", onContextRestored);
    window.addEventListener("resize", resize); window.addEventListener("scroll", onScroll, { passive: true }); mount.addEventListener("pointermove", onPointerMove);
    resize(); onScroll();

    let visible = true; let pageVisible = !document.hidden; let raf = 0; let lastTime = performance.now();
    const render = (time: number) => {
      const delta = Math.min((time - lastTime) / 1000, .05); lastTime = time;
      system.rotation.y += (pointer.x * .12 - system.rotation.y) * .025;
      system.rotation.x += (-pointer.y * .08 - system.rotation.x) * .025;
      frames.forEach((frame, index) => { frame.rotation.z += delta * (.045 + index * .014); });
      core.rotation.y += delta * .18; core.rotation.x += delta * .12; coreShell.rotation.y -= delta * .08; orbital.rotation.z += delta * .035;
      renderer.render(scene, camera); raf = requestAnimationFrame(render);
    };
    const refreshLoop = () => {
      cancelAnimationFrame(raf);
      if (!reducedMotion && !pausedRef.current && visible && pageVisible) { lastTime = performance.now(); raf = requestAnimationFrame(render); }
      else renderer.render(scene, camera);
    };
    refreshLoopRef.current = refreshLoop;
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; refreshLoop(); }, { threshold: .05 });
    observer.observe(mount);
    const onVisibility = () => { pageVisible = !document.hidden; refreshLoop(); };
    document.addEventListener("visibilitychange", onVisibility);
    refreshLoop();

    return () => {
      cancelAnimationFrame(raf); observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("resize", resize); window.removeEventListener("scroll", onScroll); mount.removeEventListener("pointermove", onPointerMove);
      renderer.domElement.removeEventListener("webglcontextlost", onContextLost); renderer.domElement.removeEventListener("webglcontextrestored", onContextRestored);
      scene.traverse(disposeObject); frameGeo.dispose(); metal.dispose(); traceMaterial.dispose(); nodeMaterial.dispose(); nodeGeometry.dispose(); renderer.dispose(); renderer.domElement.remove();
      refreshLoopRef.current = () => undefined;
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-[1] transition-opacity duration-300" aria-hidden="true" />;
};

export default HeroScene3D;
