"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface FeatureBadgeProps {
  icon?: LucideIcon;
  children: ReactNode;
  className?: string;
}

export default function FeatureBadge({ icon: Icon, children, className = "" }: FeatureBadgeProps) {
  return (
    <motion.div
      className={`feature-badge ${className}`}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.05, y: -2 }}
    >
      {Icon && (
        <Icon className="w-4 h-4" style={{ color: 'var(--primary-300)' }} />
      )}
      <span>{children}</span>
    </motion.div>
  );
}


