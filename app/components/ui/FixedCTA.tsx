"use client";

import { motion } from "framer-motion";
import { Rocket, X } from "lucide-react";
import { useState } from "react";

export default function FixedCTA() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href="https://lazy-query-prod.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed-cta-btn group relative inline-flex items-center space-x-3 px-6 py-4 rounded-full shadow-2xl"
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Rocket className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-12 transition-transform" />
        <span className="font-semibold text-sm md:text-base">Try LazyQuery</span>
        
        {/* Close button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsVisible(false);
          }}
          className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm flex items-center justify-center transition-colors"
          aria-label="Close"
        >
          <X className="w-3 h-3" />
        </button>
      </motion.a>
    </motion.div>
  );
}

