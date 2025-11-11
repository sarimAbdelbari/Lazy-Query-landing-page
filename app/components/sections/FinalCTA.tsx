"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import GradientText from "../ui/GradientText";

interface FinalCTAProps {
  onOpenWaitlist: () => void;
}

export default function FinalCTA({ onOpenWaitlist }: FinalCTAProps) {
  return (
    <section className="section-padding px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-blue via-cyan to-purple-blue rounded-2xl blur-xl opacity-30"></div>
          
          <div className="relative glass-card p-12 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to{" "}
              <GradientText>visualize your database</GradientText>?
            </h2>
            
            <p className="text-lg text-white/80 mb-8">
              Join 500+ developers already using LazyQuery
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <a
                href="https://lazy-query.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center space-x-2 group"
              >
                <span>Try Demo Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={onOpenWaitlist}
                className="btn-secondary inline-flex items-center space-x-2"
              >
                <span>Join Waitlist</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60">
              <span>✓ Free forever</span>
              <span className="text-white/30">•</span>
              <span>✓ No credit card</span>
              <span className="text-white/30">•</span>
              <span>✓ Open source</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

