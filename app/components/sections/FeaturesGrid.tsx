"use client";

import { motion } from "framer-motion";
import {
  FileStack,
  Network,
  Command,
  GitBranch,
  Filter,
  Download,
  ArrowRight,
} from "lucide-react";
import GradientText from "../ui/GradientText";
import Badge from "../ui/Badge";

export default function FeaturesGrid() {
  const features = [
    {
      icon: FileStack,
      title: "Multi-Format Support",
      description: "Upload any schema format",
      badges: [".sql", ".prisma", ".json", ".psql"],
      cta: null,
    },
    {
      icon: Network,
      title: "Interactive ERD Diagrams",
      description: "Drag, zoom, and explore your schema with intuitive controls",
      badges: null,
      cta: { text: "Try It", href: "https://lazy-query.vercel.app" },
    },
    {
      icon: Command,
      title: "Smart Search",
      description: "Find any field instantly with Ctrl+K command palette",
      badges: null,
      cta: null,
      highlight: <kbd className="kbd">Ctrl+K</kbd>,
    },
    {
      icon: GitBranch,
      title: "Relationship Mapping",
      description: "Visualize all table relationships with color-coded connections",
      badges: null,
      cta: null,
      relationColors: true,
    },
    {
      icon: Filter,
      title: "Table Filtering",
      description: "Select which tables to display for focused analysis",
      badges: null,
      cta: null,
    },
    {
      icon: Download,
      title: "Export & Share",
      description: "Download your diagrams as high-quality images",
      badges: null,
      cta: { text: "Learn More", href: "#" },
    },
  ];

  return (
    <section id="features" className="section-padding px-6" style={{ background: 'var(--bg-secondary)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm uppercase tracking-wider text-white/60 mb-4"
          >
            FEATURES
          </motion.p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Everything you need to{" "}
            <GradientText>master your database</GradientText>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08,
                ease: "easeOut"
              }}
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: "0 15px 35px rgba(0, 82, 125, 0.2)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="glass-card p-8 cursor-pointer group"
            >
              <motion.div
                className="icon-container mb-6"
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { 
                    rotate: { duration: 0.5 },
                    scale: { duration: 0.2 }
                  }
                }}
              >
                <feature.icon className="w-6 h-6" style={{ color: 'var(--primary-400)' }} />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-3 group-hover:text-[var(--primary-300)] transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-white/70 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Format Badges */}
              {feature.badges && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.badges.map((badge, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge variant="mono">{badge}</Badge>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* Keyboard Shortcut */}
              {feature.highlight && (
                <motion.div 
                  className="mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  {feature.highlight}
                </motion.div>
              )}

              {/* Relationship Colors */}
              {feature.relationColors && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {["1:N", "M:N", "N:1", "1:1"].map((rel, i) => (
                    <motion.div
                      key={rel}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + i * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      <Badge className={`relation-badge-${rel.toLowerCase().replace(':', '')}`}>
                        {rel}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* CTA */}
              {feature.cta && (
                <motion.a
                  href={feature.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 transition-colors text-sm font-medium mt-2"
                  style={{ color: 'var(--primary-400)' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-300)'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'var(--primary-400)'}
                  whileHover={{ x: 5 }}
                >
                  <span>{feature.cta.text}</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </motion.a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
