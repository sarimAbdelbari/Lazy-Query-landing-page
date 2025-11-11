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
    <section id="features" className="section-padding px-6 bg-[#111111]/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-white/60 mb-4">
            FEATURES
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <GradientText>master your database</GradientText>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-card p-8"
            >
              <div className="icon-container mb-6">
                <feature.icon className="w-6 h-6 text-purple-blue" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              
              <p className="text-white/70 leading-relaxed mb-4">
                {feature.description}
              </p>

              {/* Format Badges */}
              {feature.badges && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {feature.badges.map((badge, i) => (
                    <Badge key={i} variant="mono">
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Keyboard Shortcut */}
              {feature.highlight && <div className="mb-4">{feature.highlight}</div>}

              {/* Relationship Colors */}
              {feature.relationColors && (
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge className="relation-badge-1n">1:N</Badge>
                  <Badge className="relation-badge-mn">M:N</Badge>
                  <Badge className="relation-badge-n1">N:1</Badge>
                  <Badge className="relation-badge-11">1:1</Badge>
                </div>
              )}

              {/* CTA */}
              {feature.cta && (
                <a
                  href={feature.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-purple-blue hover:text-deep-purple transition-colors text-sm font-medium mt-2"
                >
                  <span>{feature.cta.text}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

