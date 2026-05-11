"use client";

import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail, MapPin } from "lucide-react";
import { useMemo, useRef } from "react";
import type * as THREE from "three";

import { GlowButton } from "@/components/ui/glow-button";
import { profile } from "@/lib/data";

function OrbitalMesh() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.2;
    groupRef.current.rotation.x = state.clock.elapsedTime * 0.08;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={1.4}>
        <Sphere args={[1.2, 64, 64]} position={[-1.8, 0.4, -1]}>
          <MeshDistortMaterial color="#22d3ee" emissive="#0ea5e9" distort={0.45} speed={1.5} roughness={0.1} />
        </Sphere>
      </Float>
      <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh position={[1.7, -0.6, -1.4]}>
          <torusKnotGeometry args={[0.62, 0.2, 180, 24]} />
          <meshStandardMaterial color="#8b5cf6" emissive="#a78bfa" metalness={0.85} roughness={0.2} />
        </mesh>
      </Float>
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={20} color="#67e8f9" />
      <pointLight position={[-2, -1, -2]} intensity={8} color="#c084fc" />
    </group>
  );
}

function TypewriterSubtitle() {
  const words = useMemo(
    () => ["AI Systems Builder", "Full Stack Developer", "Data Science Engineer"],
    [],
  );

  return (
    <div className="relative overflow-hidden rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
      <motion.span
        className="inline-block"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: [18, 0, 0, -18], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.2 }}
      >
        {words[0]}
      </motion.span>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24" id="home">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <Canvas camera={{ position: [0, 0, 4.8], fov: 55 }}>
          <OrbitalMesh />
        </Canvas>
      </div>
      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6">
        <motion.p
          className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-200/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-cyan-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <MapPin className="size-4" /> {profile.location}
        </motion.p>
        <motion.h1
          className="text-5xl font-black tracking-tight text-white drop-shadow-[0_0_40px_rgba(34,211,238,0.55)] sm:text-7xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {profile.name}
        </motion.h1>
        <motion.p
          className="mt-4 max-w-3xl text-lg text-cyan-100/85 sm:text-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          {profile.role}
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }} className="mt-4">
          <TypewriterSubtitle />
        </motion.div>

        <motion.div
          className="mt-8 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <GlowButton href="#projects">View Projects</GlowButton>
          <GlowButton href="#contact" variant="ghost">
            Contact Me
          </GlowButton>
          <GlowButton href={profile.github} external>
            GitHub
          </GlowButton>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
        >
          <a className="social-link" href={profile.github} target="_blank" rel="noreferrer">
            <Code2 className="size-4" />
          </a>
          <a className="social-link" href={profile.linkedin} target="_blank" rel="noreferrer">
            <BriefcaseBusiness className="size-4" />
          </a>
          <a className="social-link" href={`mailto:${profile.email}`}>
            <Mail className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
