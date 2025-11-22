"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "glass-nav py-2" : "bg-transparent py-4"}`}
    >
      <div className={`px-4 md:px-6 max-w-7xl mx-auto rounded-2xl`}>
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Image
                src="/assets/try.png"
                alt="LazyQuery"
                width={130}
                height={130}
                className="pt-2"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink onClick={() => scrollToSection("features")}>
              Features
            </NavLink>
            <NavLink onClick={() => scrollToSection("how-it-works")}>
              How It Works
            </NavLink>
            <a
              href="https://github.com/sarimAbdelbari/LazyQuery"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              <NavLinkContent>GitHub</NavLinkContent>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <MagneticButton
              href="https://lazy-query-prod.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Demo
            </MagneticButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-[rgba(3,20,37,0.95)] backdrop-blur-xl rounded-b-2xl border-t border-white/5 mt-2"
            >
              <motion.div
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                exit={{ x: -20 }}
                className="p-4 space-y-4"
              >
                <button
                  onClick={() => scrollToSection("features")}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors font-medium py-2"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="block w-full text-left text-white/80 hover:text-white transition-colors font-medium py-2"
                >
                  How It Works
                </button>
                <a
                  href="https://github.com/sarimAbdelbari/LazyQuery"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white/80 hover:text-white transition-colors font-medium py-2"
                >
                  GitHub
                </a>
                <a
                  href="https://lazy-query-prod.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center w-full justify-center"
                >
                  <span>Try Demo</span>
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// Nav Link with Underline Animation
function NavLink({ children, onClick }: { children: React.ReactNode; onClick: () => void }) {
  return (
    <button onClick={onClick} className="nav-link cursor-pointer">
      <NavLinkContent>{children}</NavLinkContent>
    </button>
  );
}

function NavLinkContent({ children }: { children: React.ReactNode }) {
  return (
    <motion.span
      className="relative text-white/80 hover:text-white transition-colors font-medium inline-block text-md cursor-pointer tracking-wide"
      whileHover="hover"
    >
      {children}
      <motion.span
        className="absolute -bottom-1 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--primary-300)] to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        variants={{
          hover: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </motion.span>
  );
}

// Magnetic Button with Hover Effect
function MagneticButton({
  children,
  href,
  target,
  rel,
}: {
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className="btn-primary inline-flex items-center relative py-2 px-5 text-md"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      <span>{children}</span>
    </motion.a>
  );
}
