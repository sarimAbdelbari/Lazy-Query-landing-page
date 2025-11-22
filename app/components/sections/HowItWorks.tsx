"use client";

import { motion } from "framer-motion";
import { Upload, Zap, Search, Play } from "lucide-react";
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
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-center w-fit mx-auto px-4 py-1.5 rounded-full bg-[var(--primary-500)]/15 backdrop-blur-md border border-[var(--primary-300)]/40 text-white text-sm font-medium mb-8"
          >
            <Play className="w-4 h-4 mr-2" style={{ color: 'var(--primary-300)' }} />
            HOW IT WORKS
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 82, 125, 0.25)",
                transition: { duration: 0.3 }
              }}
              className="glass-card p-8 cursor-pointer group"
              style={{ perspective: "1000px" }}
            >
              <motion.div
                className="icon-container mb-6"
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <step.icon className="w-6 h-6" style={{ color: 'var(--primary-400)' }} />
              </motion.div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
              
              {/* Step Number Badge */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{
                  background: "rgba(0, 82, 125, 0.2)",
                  border: "1px solid rgba(0, 82, 125, 0.3)",
                  color: "var(--primary-300)"
                }}
                initial={{ opacity: 0.5 }}
                whileHover={{ opacity: 1, scale: 1.1 }}
              >
                {index + 1}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
