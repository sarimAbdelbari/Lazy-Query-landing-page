"use client";

import { motion } from "framer-motion";
import { Upload, Zap, Search } from "lucide-react";
import GradientText from "../ui/GradientText";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Your Schema",
      description:
        "Drag and drop your .prisma, .sql, .psql, or .json file. Support for all major schema formats.",
    },
    {
      icon: Zap,
      title: "Instant Visualization",
      description:
        "Our parser analyzes your schema and generates an interactive ERD diagram in real-time.",
    },
    {
      icon: Search,
      title: "Explore & Export",
      description:
        "Search fields, filter tables, view relationships, and export your diagram as an image.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding px-6">
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
            HOW IT WORKS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            From <GradientText>schema to clarity</GradientText> in seconds
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Three simple steps to understand your entire database
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <div className="icon-container mb-6">
                <step.icon className="w-6 h-6 text-purple-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

