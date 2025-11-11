"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import GradientText from "../ui/GradientText";
import Badge from "../ui/Badge";

interface HeroProps {
  onOpenWaitlist: () => void;
}

export default function Hero({ onOpenWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center space-y-8">
          {/* Announcement Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Badge className="inline-flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan" />
              <span>Now supporting Prisma, SQL, PostgreSQL & JSON</span>
            </Badge>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight max-w-5xl mx-auto"
          >
            Transform{" "}
            <GradientText>complex database schemas</GradientText>{" "}
            into interactive diagrams
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            Upload your schema and visualize your entire database structure in
            seconds — no installs, no extensions, just clarity.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="https://lazy-query.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2 group"
            >
              <span>Try Live Demo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={onOpenWaitlist}
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <span>Join Waitlist</span>
            </button>
          </motion.div>

          {/* Social Proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-sm text-white/60"
          >
            Join 500+ developers visualizing their databases
          </motion.p>

          {/* Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 md:mt-16"
          >
            <div className="product-frame animate-float">
              <div className="relative aspect-video bg-gradient-to-br from-purple-blue/20 to-cyan/20 rounded-lg overflow-hidden">
                {/* Placeholder for product screenshot */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white/40 text-sm font-mono">
                    Product Screenshot Placeholder
                    <br />
                    <span className="text-xs">
                      Add screenshot from lazy-query.vercel.app
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Format Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-3 pt-8"
          >
            <Badge variant="mono">.prisma</Badge>
            <span className="text-white/40">•</span>
            <Badge variant="mono">.sql</Badge>
            <span className="text-white/40">•</span>
            <Badge variant="mono">.psql</Badge>
            <span className="text-white/40">•</span>
            <Badge variant="mono">.json</Badge>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

