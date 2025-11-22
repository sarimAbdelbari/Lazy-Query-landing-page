"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/sarimAbdelbari/LazyQuery",
      label: "GitHub",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/lazyquery",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com",
      label: "LinkedIn",
    },
  ];

  const quickLinks = [
    { name: "Features", action: () => scrollToSection("features") },
    { name: "How It Works", action: () => scrollToSection("how-it-works") },
    { name: "GitHub", href: "https://github.com/sarimAbdelbari/LazyQuery" },
    { name: "Live Demo", href: "https://lazy-query-prod.vercel.app" },
  ];

  return (
    <footer className="border-t border-white/10" style={{ background: 'var(--bg-secondary)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-6 py-12"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left Column - Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/assets/whiteLogo.svg"
                alt="LazyQuery"
                width={160}
                height={160}
                className="-translate-y-8"
              />
            </motion.div>
            <p className="text-white/60 text-sm max-w-xs">
              Transform schemas into clarity
            </p>
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} LazyQuery. All rights reserved.
            </p>
          </motion.div>

          {/* Middle Column - Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Social */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 + index * 0.1, type: "spring" }}
                  whileHover={{
                    scale: 1.2,
                    rotate: 360,
                    color: "var(--primary-300)",
                    transition: { duration: 0.4 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-white/5"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6 text-xs text-white/40">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/privacy" className="hover:text-white/60 transition-colors">
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href="/terms" className="hover:text-white/60 transition-colors">
                  Terms of Service
                </Link>
              </motion.div>
            </div>
            <motion.p
              className="text-xs text-white/40"
              animate={{ opacity: [0.4, 0.6, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Made with ❤️ by developers, for developers
            </motion.p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
