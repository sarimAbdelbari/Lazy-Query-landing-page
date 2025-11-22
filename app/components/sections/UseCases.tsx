"use client";

import { motion } from "framer-motion";
import { Code, Database, Users, FileText, Target } from "lucide-react";
import GradientText from "../ui/GradientText";

export default function UseCases() {
  const useCases = [
    {
      icon: Code,
      title: "Backend Developers",
      description: "Understand legacy codebases and complex schemas quickly",
      benefit: "Save hours of documentation reading",
    },
    {
      icon: Database,
      title: "Database Architects",
      description: "Design, document, and communicate database structures",
      benefit: "Visualize before you build",
    },
    {
      icon: Users,
      title: "Development Teams",
      description: "Onboard new members faster with visual documentation",
      benefit: "Reduce onboarding time by 50%",
    },
    {
      icon: FileText,
      title: "Technical Writers",
      description: "Create beautiful visual documentation automatically",
      benefit: "Generate docs in seconds",
    },
  ];

  return (
    <section className="section-padding px-6">
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
            <Target className="w-4 h-4 mr-2" style={{ color: 'var(--primary-300)' }} />
            BUILT FOR DEVELOPERS
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Built for{" "}
            <GradientText>developers who value clarity</GradientText>
          </h2>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.12,
                ease: "easeOut"
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 82, 125, 0.25)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="glass-card p-8 cursor-pointer group"
            >
              <div className="flex items-start space-x-4">
                <motion.div
                  className="icon-container shrink-0"
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <useCase.icon className="w-6 h-6" style={{ color: 'var(--primary-300)' }} />
                </motion.div>
                <div className="flex-1">
                  <motion.h3
                    className="text-xl font-semibold mb-2 group-hover:text-[var(--primary-300)] transition-colors"
                  >
                    {useCase.title}
                  </motion.h3>
                  <p className="text-white/70 mb-3 leading-relaxed">
                    {useCase.description}
                  </p>
                  <motion.p
                    className="text-sm font-medium inline-flex items-center gap-2"
                    style={{ color: 'var(--primary-300)' }}
                    initial={{ x: 0 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.span
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ✓
                    </motion.span>
                    {useCase.benefit}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
