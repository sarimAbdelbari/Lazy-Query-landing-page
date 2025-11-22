"use client";

import { motion } from "framer-motion";

export default function ParticleGlow() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
      {/* Main Glow Layer - simulates hero-image-glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] z-0">
        <div 
          className="w-full h-full opacity-60"
          style={{
            background: `
              radial-gradient(ellipse at top, 
                rgba(77, 167, 202, 0.4) 0%, 
                rgba(0, 82, 125, 0.2) 40%, 
                transparent 70%
              )
            `,
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Gradient Blur Layer - simulates hero-image-gradient-blur */}
      <div className="absolute -bottom-20 left-0 w-full h-40 bg-gradient-to-t from-[var(--bg-primary)] to-transparent z-10" />

      {/* Particle Wrap - simulates particle-wrap */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* Particle 1 - Top Center Float */}
        <motion.div
          className="absolute top-0 left-1/2 w-1 h-1 rounded-full bg-[var(--primary-300)]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 0.8, 0],
            y: [-20, -60],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0
          }}
          style={{ marginLeft: "-100px" }}
        />

        {/* Particle 2 - Right Side Float */}
        <motion.div
          className="absolute top-10 left-1/2 w-1.5 h-1.5 rounded-full bg-[var(--primary-200)]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 0.6, 0],
            y: [0, -40],
            x: [0, 20]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1
          }}
          style={{ marginLeft: "150px" }}
        />

        {/* Particle 3 - Left Side Float */}
        <motion.div
          className="absolute top-20 left-1/2 w-1 h-1 rounded-full bg-[var(--secondary-300)]"
          initial={{ opacity: 0, y: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            y: [0, -30],
            x: [0, -20]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut",
            delay: 2.5
          }}
          style={{ marginLeft: "-200px" }}
        />

        {/* Particle 4 - Center Subtle */}
        <motion.div
          className="absolute -top-10 left-1/2 w-2 h-2 rounded-full bg-[var(--primary-400)] blur-[1px]"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0],
            scale: [0.5, 1.2, 0.5],
            y: [0, -20]
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </div>
    </div>
  );
}


