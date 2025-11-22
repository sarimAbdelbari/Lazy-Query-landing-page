"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Sparkles, Zap, Database, Code, Search, Mail } from "lucide-react";
import GradientText from "../ui/GradientText";
import Badge from "../ui/Badge";
import AnimatedCounter from "../ui/AnimatedCounter";
import ParticleGlow from "../ui/ParticleGlow";
import FeatureBadge from "../ui/FeatureBadge";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
    setButtonPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setButtonPosition({ x: 0, y: 0 });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-10">
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Badge className="inline-flex items-center space-x-2">
                <Sparkles className="w-4 h-4" style={{ color: 'var(--primary-300)' }} />
                <span>Now supporting Prisma, SQL, PostgreSQL & JSON</span>
              </Badge>
            </motion.div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] max-w-5xl mx-auto"
          >
            Transform{" "}
            <GradientText>complex database schemas</GradientText>{" "}
            into interactive diagrams
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Upload your schema and visualize your entire database structure in
            seconds — no installs, no extensions, just clarity.
          </motion.p>

          {/* Feature Badges (Fikrat.tech Inspired) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-3 pt-4"
          >
            <FeatureBadge icon={Zap}>Lightning Fast</FeatureBadge>
            <FeatureBadge icon={Database}>Multi-Format Support</FeatureBadge>
            <FeatureBadge icon={Search}>Smart Search</FeatureBadge>
            <FeatureBadge icon={Code}>Developer First</FeatureBadge>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <motion.a
              href="https://lazy-query-prod.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 group relative"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              animate={{ x: buttonPosition.x, y: buttonPosition.y }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 82, 125, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Try Live Demo</span>
            </motion.a>
            <motion.button
              onClick={onOpenWaitlist}
              className="btn-secondary inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail className="w-4 h-4" />
              <span>Join Waitlist</span>
            </motion.button>
          </motion.div>

          {/* Social Proof with Counter */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-sm text-white/60 pt-2"
          >
            Join <AnimatedCounter value={500} suffix="+" className="font-semibold text-white/80" /> developers visualizing their databases
          </motion.p>

          {/* Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
            className="mt-16 md:mt-20 relative"
          >
             {/* Particle Glow Effect (New) */}
             <ParticleGlow />

            <motion.div
              className="product-frame animate-float glow-top-border relative z-20"
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
            >
              <div className="relative aspect-video rounded-lg overflow-hidden bg-black/20">
                <Image
                  src="/assets/images/UML.png"
                  alt="LazyQuery Database Schema Visualization"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Format Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-10"
          >
            {[".prisma", ".sql", ".psql", ".json"].map((format, index) => (
              <motion.div
                key={format}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.75 + index * 0.08 }}
              >
                <Badge variant="mono">{format}</Badge>
                {index < 3 && <span className="text-white/40 mx-1">•</span>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
