"use client";

import * as React from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Icosahedron, MeshTransmissionMaterial, Points, PointMaterial } from "@react-three/drei";
import { useTheme } from "next-themes";
import * as THREE from "three";

// --- Floating Particles ---
function ParticleField() {
  const ref = React.useRef<THREE.Points>(null);
  const [positions] = React.useState(() => {
    const positions = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = 2.5 + Math.random() * 2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  });

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial transparent color="#9B5CFF" size={0.02} sizeAttenuation={true} depthWrite={false} opacity={0.4} />
    </Points>
  );
}

// --- Aura Core Object ---
function CoreObject({ isHovered }: { isHovered: boolean }) {
  const groupRef = React.useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const { resolvedTheme } = useTheme();

  const isDark = resolvedTheme !== "light";
  const targetRotation = React.useRef(new THREE.Vector2());

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    
    // Mouse Parallax
    targetRotation.current.x = (mouse.y * Math.PI) * 0.1;
    targetRotation.current.y = (mouse.x * Math.PI) * 0.1;
    
    groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;

    // Continuous idle rotation
    const rotationSpeed = isHovered ? 0.8 : 0.2;
    groupRef.current.rotation.z += delta * rotationSpeed;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Outer Glass Shell */}
        <Icosahedron args={[1.4, 2]}>
          <MeshTransmissionMaterial 
            backside
            samples={4}
            thickness={0.5}
            chromaticAberration={0.05}
            anisotropy={0.1}
            distortion={0.1}
            distortionScale={0.3}
            temporalDistortion={0.1}
            color={isDark ? "#1C0D33" : "#F4EFFF"}
            transmission={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </Icosahedron>
        
        {/* Inner Wireframe Core */}
        <Icosahedron args={[1, 1]} scale={isHovered ? 1.1 : 1}>
          <meshBasicMaterial color={isDark ? "#9B5CFF" : "#7000FF"} wireframe transparent opacity={isHovered ? 0.8 : 0.4} />
        </Icosahedron>

        {/* Solid Inner Core */}
        <Icosahedron args={[0.6, 2]}>
          <meshStandardMaterial color={isDark ? "#00F0FF" : "#4A00B3"} emissive={isDark ? "#00F0FF" : "#4A00B3"} emissiveIntensity={isHovered ? 1.5 : 0.5} />
        </Icosahedron>
      </Float>
    </group>
  );
}

export function AuraCanvas() {
  const [mounted, setMounted] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);
  
  // Only render 3D when actually visible on screen to save massive GPU cycles during scroll
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Intersection Observer to pause rendering
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin: "200px" } // Keep rendering slightly before it comes into view
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      window.removeEventListener("resize", checkMobile);
      observer.disconnect();
    };
  }, []);

  if (!mounted) return null;

  if (isMobile) {
    return (
      <div className="w-full h-full flex items-center justify-center relative">
        <div className="w-[60vw] h-[60vw] max-w-[400px] max-h-[400px] rounded-full bg-[radial-gradient(ellipse_at_center,var(--brand-primary)_0%,transparent_70%)] opacity-40 blur-3xl mix-blend-screen" />
        <div className="absolute w-[40vw] h-[40vw] max-w-[250px] max-h-[250px] rounded-full border border-[var(--brand-secondary)]/30 opacity-60 mix-blend-screen rotate-45" />
        <div className="absolute w-[40vw] h-[40vw] max-w-[250px] max-h-[250px] rounded-full border border-[var(--brand-primary)]/40 opacity-60 mix-blend-screen -rotate-12" />
      </div>
    );
  }

  return (
    <div 
      ref={containerRef}
      className="w-full h-full min-h-[600px] absolute inset-0 z-0 pointer-events-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: false, powerPreference: "high-performance" }}>
        {isVisible && (
          <>
            <ambientLight intensity={0.2} />
            <spotLight position={[5, 5, 5]} angle={0.15} penumbra={1} intensity={1} color="#9B5CFF" />
            <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00F0FF" />
            <CoreObject isHovered={isHovered} />
            <ParticleField />
          </>
        )}
      </Canvas>
    </div>
  );
}
