"use client";

import { motion } from "framer-motion";
import { Code, Database, Users, FileText } from "lucide-react";
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
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built for{" "}
            <GradientText>developers who value clarity</GradientText>
          </h2>
        </motion.div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8"
            >
              <div className="flex items-start space-x-4">
                <div className="icon-container shrink-0">
                  <useCase.icon className="w-6 h-6" style={{ color: 'var(--primary-300)' }} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                  <p className="text-white/70 mb-3">{useCase.description}</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--primary-300)' }}>
                    ✓ {useCase.benefit}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

