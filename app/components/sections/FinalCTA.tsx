"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Mail } from "lucide-react";
import GradientText from "../ui/GradientText";

interface FinalCTAProps {
  onOpenWaitlist: () => void;
}

export default function FinalCTA({ onOpenWaitlist }: FinalCTAProps) {
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
    <section className="section-padding px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Pulsing Gradient Border Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl blur-xl"
            style={{ background: 'linear-gradient(90deg, var(--primary-500) 0%, var(--secondary-400) 50%, var(--primary-500) 100%)' }}
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div
            className="relative glass-card p-12 text-center"
            whileHover={{
              scale: 1.01,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
            >
              Ready to{" "}
              <GradientText>visualize your database</GradientText>?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/80 mb-8"
            >
              Join 500+ developers already using LazyQuery
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
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
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 82, 125, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>Try Demo Now</span>
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

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/60"
            >
              {["Free forever", "No credit card", "Open source"].map((text, i) => (
                <motion.span
                  key={text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                  whileHover={{ scale: 1.05, color: "rgba(255, 255, 255, 0.8)" }}
                  className="inline-flex items-center gap-2"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                  >
                    ✓
                  </motion.span>
                  {text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
